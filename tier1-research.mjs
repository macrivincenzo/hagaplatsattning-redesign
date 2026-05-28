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
const LOCATION_CODE = 2752; // Sweden
const LANGUAGE_CODE = 'sv';
const LANGUAGE_NAME = 'Swedish';

// Candidate keywords for next-wave AEO/SEO pages.
// Grouped so we can score each candidate page after the run.
const CANDIDATES = {
  vattenskada: [
    'vattenskada badrum',
    'vattenskada badrum stockholm',
    'vattenskada kostnad',
    'vattenskada försäkring badrum',
    'vad gör man vid vattenskada i badrum',
    'fuktskada badrum',
    'fuktskada badrum stockholm',
  ],
  rot: [
    'rot avdrag badrum',
    'rot avdrag badrumsrenovering',
    'rot avdrag plattsättare',
    'rot avdrag 2026',
    'rot avdrag kakelsättare',
  ],
  statusbesiktning: [
    'statusbesiktning badrum',
    'teknisk livslängd badrum',
    'när ska man renovera badrum',
    'hur länge håller ett badrum',
    'när behöver man renovera badrum',
  ],
  ordlista: [
    'bbv branschregler för våtrum',
    'gvk våtrum',
    'bkr behörighet',
    'tätskikt definition',
    'fall till brunn badrum',
  ],
  vatrumsmatta: [
    'våtrumsmatta vs kakel',
    'våtrumsmatta eller kakel',
    'kakel eller våtrumsmatta',
    'plastmatta badrum',
    'våtrumsmatta pris',
  ],
  sakerVatten: [
    'säker vatten badrum',
    'säker vatten installation',
    'vvs badrum stockholm',
    'rörmokare badrum stockholm',
  ],
  kakelsattareCities: [
    'kakelsättare sollentuna',
    'kakelsättare solna',
    'kakelsättare täby',
    'kakelsättare lidingö',
    'kakelsättare danderyd',
    'kakelsättare nacka',
    'kakelsättare sundbyberg',
    'plattsättare sollentuna',
    'plattsättare solna',
    'plattsättare täby',
  ],
  koksrenoveringCities: [
    'köksrenovering sollentuna',
    'köksrenovering solna',
    'köksrenovering täby',
    'köksrenovering nacka',
    'köksrenovering lidingö',
    'kakla kök stockholm',
    'stänkskydd kök',
  ],
};

// PAA mining — fire one SERP query per head term
const PAA_HEAD_TERMS = [
  'vattenskada badrum',
  'rot avdrag badrum',
  'statusbesiktning badrum',
  'våtrumsmatta vs kakel',
  'kakelsättare sollentuna',
  'köksrenovering sollentuna',
  'säker vatten badrum',
];

async function apiPost(endpoint, body) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { Authorization: `Basic ${AUTH}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  return res.json();
}

async function fetchVolumes(keywords) {
  const data = await apiPost('/keywords_data/google_ads/search_volume/live', [
    { keywords, location_code: LOCATION_CODE, language_code: LANGUAGE_CODE, language_name: LANGUAGE_NAME },
  ]);
  const task = data?.tasks?.[0];
  if (!task || task.status_code !== 20000) {
    console.warn(`  volume warn: ${task?.status_message ?? 'unknown'}`);
    return [];
  }
  return task.result ?? [];
}

async function fetchSerpPAA(keyword) {
  const data = await apiPost('/serp/google/organic/live/advanced', [
    {
      keyword,
      location_code: LOCATION_CODE,
      language_code: LANGUAGE_CODE,
      se_domain: 'google.se',
      device: 'desktop',
      depth: 20,
    },
  ]);
  const task = data?.tasks?.[0];
  const items = task?.result?.[0]?.items ?? [];
  const paa = items.find((i) => i.type === 'people_also_ask');
  return paa?.items?.map((q) => q.title) ?? [];
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function main() {
  console.log('Tier-1 research: candidate volumes + PAA mining\n');

  // Phase 1 — volumes
  console.log('Phase 1/2 — fetching search volumes for candidates...');
  const volumes = {};
  for (const [group, kws] of Object.entries(CANDIDATES)) {
    process.stdout.write(`  ${group} (${kws.length} kws)... `);
    const results = await fetchVolumes(kws);
    volumes[group] = results.map((r) => ({
      keyword: r.keyword,
      volume: r.search_volume ?? 0,
      cpc: r.cpc,
      competition: r.competition,
      competition_index: r.competition_index,
    }));
    console.log(`${results.length} returned`);
    await sleep(400);
  }

  // Phase 2 — PAA
  console.log('\nPhase 2/2 — mining PAA for head terms...');
  const paa = {};
  for (const kw of PAA_HEAD_TERMS) {
    process.stdout.write(`  ${kw}... `);
    try {
      const questions = await fetchSerpPAA(kw);
      paa[kw] = questions;
      console.log(`${questions.length} questions`);
    } catch (e) {
      console.log(`error: ${e.message}`);
      paa[kw] = [];
    }
    await sleep(400);
  }

  const output = {
    generated_at: new Date().toISOString(),
    location: 'Sweden (2752)',
    candidates_by_group: volumes,
    paa_by_head_term: paa,
  };
  writeFileSync('tier1-research.json', JSON.stringify(output, null, 2), 'utf-8');

  // Print scored summary
  console.log('\n=== SCORED RESULTS ===\n');
  for (const [group, items] of Object.entries(volumes)) {
    const total = items.reduce((s, i) => s + (i.volume ?? 0), 0);
    const max = items.reduce((m, i) => Math.max(m, i.volume ?? 0), 0);
    console.log(`\n[${group}] total=${total}/mo  peak=${max}/mo`);
    items
      .sort((a, b) => (b.volume ?? 0) - (a.volume ?? 0))
      .forEach((i) => {
        const v = String(i.volume ?? 0).padStart(5);
        const cpc = i.cpc != null ? `${i.cpc.toFixed(2)}kr` : '-';
        console.log(`  ${v} /mo  cpc=${cpc.padStart(8)}  ${i.keyword}`);
      });
  }

  console.log('\n=== PAA QUESTIONS ===\n');
  for (const [kw, qs] of Object.entries(paa)) {
    console.log(`\n[${kw}]`);
    qs.forEach((q) => console.log(`  - ${q}`));
  }

  console.log(`\nSaved tier1-research.json`);
}

main().catch((e) => { console.error('Fatal:', e); process.exit(1); });
