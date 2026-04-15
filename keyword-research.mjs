import 'dotenv/config';
import { writeFileSync } from 'fs';

const LOGIN = process.env.DATAFORSEO_LOGIN;
const PASSWORD = process.env.DATAFORSEO_PASSWORD;

if (!LOGIN || !PASSWORD) {
  console.error('Missing DATAFORSEO_LOGIN or DATAFORSEO_PASSWORD in .env');
  process.exit(1);
}

const BASE_URL = 'https://api.dataforseo.com/v3';
const AUTH = Buffer.from(`${LOGIN}:${PASSWORD}`).toString('base64');

// Sweden country-level code — the only level Google reliably returns volumes for
const LOCATION_CODE = 2752;
const LANGUAGE_CODE = 'sv';
const LANGUAGE_NAME = 'Swedish';

// Generic service keywords (national intent)
const SERVICES_GENERIC = [
  'platsättning',
  'badrumsrenovering',
  'köksrenovering',
  'basturenovering',
  'tvättstugerenovering',
  'kakel och klinker',
  'kakelsättning',
  'klinker',
];

// Stockholm geo-modified keywords — these surface Stockholm-specific ideas
// and volumes from the keywords_for_keywords endpoint
const SERVICES_STOCKHOLM = [
  'platsättning stockholm',
  'badrumsrenovering stockholm',
  'köksrenovering stockholm',
  'kakelsättning stockholm',
  'kakel och klinker stockholm',
  'klinker stockholm',
  'badrumsrenovering pris stockholm',
  'kakelsättare stockholm',
  'platsättare stockholm',
  'renovera badrum stockholm',
  'basturenovering stockholm',
  'tvättstugerenovering stockholm',
];

const ALL_SEEDS = [...SERVICES_GENERIC, ...SERVICES_STOCKHOLM];

async function apiPost(endpoint, body) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${AUTH}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  }

  return response.json();
}

async function fetchKeywordIdeas(keywords) {
  const body = [
    {
      keywords,
      location_code: LOCATION_CODE,
      language_code: LANGUAGE_CODE,
      language_name: LANGUAGE_NAME,
      include_serp_info: false,
      include_seed_keyword_data: true,
    },
  ];

  const data = await apiPost('/keywords_data/google_ads/keywords_for_keywords/live', body);

  const task = data?.tasks?.[0];
  if (!task || task.status_code !== 20000) {
    const msg = task?.status_message ?? 'Unknown error';
    console.warn(`  Warning: ${msg}`);
    return [];
  }

  return task.result ?? [];
}

async function fetchSearchVolume(keywords) {
  const body = [
    {
      keywords,
      location_code: LOCATION_CODE,
      language_code: LANGUAGE_CODE,
      language_name: LANGUAGE_NAME,
    },
  ];

  const data = await apiPost('/keywords_data/google_ads/search_volume/live', body);

  const task = data?.tasks?.[0];
  if (!task || task.status_code !== 20000) {
    const msg = task?.status_message ?? 'Unknown error';
    console.warn(`  Warning: ${msg}`);
    return [];
  }

  return task.result ?? [];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function mergeKeywordData(accumulator, newResults) {
  for (const item of newResults) {
    const kw = item.keyword?.toLowerCase();
    if (!kw) continue;

    const incoming = item.search_volume ?? item.avg_monthly_searches ?? 0;

    if (!accumulator[kw]) {
      accumulator[kw] = {
        keyword: item.keyword,
        avg_monthly_searches: incoming,
        competition: item.competition ?? null,
        competition_index: item.competition_index ?? null,
        cpc: item.cpc ?? null,
        monthly_searches: item.monthly_searches ?? null,
      };
    } else {
      // Keep the highest search volume seen
      if (incoming > accumulator[kw].avg_monthly_searches) {
        accumulator[kw].avg_monthly_searches = incoming;
        accumulator[kw].competition = item.competition ?? accumulator[kw].competition;
        accumulator[kw].competition_index = item.competition_index ?? accumulator[kw].competition_index;
        accumulator[kw].cpc = item.cpc ?? accumulator[kw].cpc;
        accumulator[kw].monthly_searches = item.monthly_searches ?? accumulator[kw].monthly_searches;
      }
    }
  }
}

async function main() {
  console.log('Starting keyword research for Stockholm (querying Sweden/2752 for reliable volumes)...\n');

  const allKeywords = {};

  // Step 1: Fetch keyword ideas for generic services
  console.log('Step 1/3 — Fetching ideas for generic service keywords...');
  try {
    const results = await fetchKeywordIdeas(SERVICES_GENERIC);
    mergeKeywordData(allKeywords, results);
    console.log(`  → ${results.length} ideas returned`);
  } catch (err) {
    console.error(`  Error: ${err.message}`);
  }

  await sleep(500);

  // Step 2: Fetch keyword ideas for Stockholm-specific seed keywords
  console.log('Step 2/3 — Fetching ideas for Stockholm geo-modified keywords...');
  try {
    const results = await fetchKeywordIdeas(SERVICES_STOCKHOLM);
    mergeKeywordData(allKeywords, results);
    console.log(`  → ${results.length} ideas returned`);
  } catch (err) {
    console.error(`  Error: ${err.message}`);
  }

  await sleep(500);

  // Step 3: Get precise search volumes for all seed keywords
  console.log('Step 3/3 — Fetching accurate search volumes for all seed keywords...');
  try {
    const seedVolumes = await fetchSearchVolume(ALL_SEEDS);
    mergeKeywordData(allKeywords, seedVolumes);
    console.log(`  → ${seedVolumes.length} seed volumes returned`);
  } catch (err) {
    console.error(`  Error: ${err.message}`);
  }

  // Sort by monthly search volume descending
  const sortedKeywords = Object.values(allKeywords).sort(
    (a, b) => (b.avg_monthly_searches ?? 0) - (a.avg_monthly_searches ?? 0),
  );

  const output = {
    generated_at: new Date().toISOString(),
    total_keywords: sortedKeywords.length,
    location: 'Sweden (2752) — Stockholm geo-modified seeds included',
    services_researched: SERVICES_GENERIC,
    stockholm_seeds: SERVICES_STOCKHOLM,
    keywords: sortedKeywords,
  };

  writeFileSync('keyword-data.json', JSON.stringify(output, null, 2), 'utf-8');
  console.log(`\nSaved ${sortedKeywords.length} keywords to keyword-data.json`);

  // Print top 30
  console.log('\n--- TOP 30 KEYWORDS ---\n');
  console.log(
    `${'#'.padEnd(4)} ${'Keyword'.padEnd(45)} ${'Vol'.padStart(8)} ${'CPC'.padStart(8)} ${'Competition'.padStart(12)}`,
  );
  console.log('-'.repeat(81));

  sortedKeywords.slice(0, 30).forEach((kw, i) => {
    const rank = String(i + 1).padEnd(4);
    const keyword = kw.keyword.padEnd(45);
    const vol = String(kw.avg_monthly_searches ?? 0).padStart(8);
    const cpc = (kw.cpc != null ? `${kw.cpc.toFixed(2)} kr` : '-').padStart(8);
    const comp = (kw.competition ?? '-').padStart(12);
    console.log(`${rank} ${keyword} ${vol} ${cpc} ${comp}`);
  });
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
