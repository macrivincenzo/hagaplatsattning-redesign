import 'dotenv/config';
import { writeFileSync } from 'fs';

const LOGIN = process.env.DATAFORSEO_LOGIN;
const PASSWORD = process.env.DATAFORSEO_PASSWORD;

if (!LOGIN || !PASSWORD) {
  console.error('Missing DATAFORSEO credentials in .env');
  process.exit(1);
}

const BASE_URL = 'https://api.dataforseo.com/v3';
const AUTH = Buffer.from(`${LOGIN}:${PASSWORD}`).toString('base64');

async function apiPost(endpoint, body) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${AUTH}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  return response.json();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Keywords to research for pricing
const PRICE_KEYWORDS = [
  'badrumsrenovering pris stockholm',
  'badrumsrenovering kostnad stockholm',
  'plattsättning pris per kvm',
  'kakelsättare pris per timme stockholm',
];

async function fetchSERP(keyword) {
  console.log(`  Fetching SERP for: "${keyword}"...`);
  const data = await apiPost('/serp/google/organic/live/advanced', [
    {
      keyword,
      location_code: 2752,
      language_code: 'sv',
      language_name: 'Swedish',
      se_domain: 'google.se',
      depth: 10,
      device: 'desktop',
    },
  ]);

  const task = data?.tasks?.[0];
  if (!task || task.status_code !== 20000) {
    console.warn(`  Warning: ${task?.status_message ?? 'Unknown error'}`);
    return { organic: [], featured_snippet: null, paa: [] };
  }

  const items = task.result?.[0]?.items ?? [];

  const organic = items
    .filter((i) => i.type === 'organic')
    .slice(0, 5)
    .map((i) => ({
      position: i.rank_absolute,
      title: i.title,
      url: i.url,
      description: i.description,
    }));

  const featured = items.find((i) => i.type === 'featured_snippet') ?? null;
  const featuredSnippet = featured
    ? { title: featured.title, description: featured.description, url: featured.url }
    : null;

  const paaBlock = items.find((i) => i.type === 'people_also_ask');
  const paa = (paaBlock?.items ?? []).map((q) => ({
    question: q.title,
    answer: q.expanded_element?.[0]?.description ?? null,
  }));

  console.log(`  → ${organic.length} organic results, featured snippet: ${featuredSnippet ? 'YES' : 'no'}, PAA: ${paa.length}`);
  return { organic, featured_snippet: featuredSnippet, paa };
}

async function main() {
  console.log('=== DataForSEO Price Research – Badrumsrenovering Stockholm 2026 ===\n');

  const results = {};

  for (const keyword of PRICE_KEYWORDS) {
    try {
      results[keyword] = await fetchSERP(keyword);
    } catch (err) {
      console.error(`  Error for "${keyword}": ${err.message}`);
      results[keyword] = { organic: [], featured_snippet: null, paa: [] };
    }
    await sleep(900);
  }

  const output = {
    generated_at: new Date().toISOString(),
    source: 'DataForSEO SERP API – google.se – Swedish 2026',
    keywords_researched: PRICE_KEYWORDS,
    data: results,
  };

  writeFileSync('price-data.json', JSON.stringify(output, null, 2), 'utf-8');

  // Print readable summary
  console.log('\n=== PRICE DATA SUMMARY ===\n');
  for (const [kw, result] of Object.entries(results)) {
    console.log(`\n"${kw}":`);
    if (result.featured_snippet) {
      console.log(`  FEATURED SNIPPET: ${result.featured_snippet.description?.slice(0, 200)}`);
    }
    result.paa.forEach((q) => {
      console.log(`  PAA: ${q.question}`);
      if (q.answer) console.log(`       → ${q.answer.slice(0, 200)}`);
    });
    result.organic.forEach((o) => {
      console.log(`  [${o.position}] ${o.title}`);
      if (o.description) console.log(`       ${o.description.slice(0, 180)}`);
    });
  }

  console.log('\n✓ Full data saved to price-data.json');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
