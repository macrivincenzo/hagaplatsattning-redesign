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

// The 4 primary keywords to research PAA for
const TARGET_KEYWORDS = [
  'badrumsrenovering stockholm',
  'badrumsrenovering pris',
  'kakelsättare stockholm',
  'köksrenovering stockholm',
];

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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchPeopleAlsoAsk(keyword) {
  console.log(`  Fetching PAA for: "${keyword}"...`);

  const body = [
    {
      keyword,
      location_code: 2752,   // Sweden
      language_code: 'sv',
      language_name: 'Swedish',
      se_domain: 'google.se',
      depth: 10,
      device: 'desktop',
    },
  ];

  const data = await apiPost('/serp/google/organic/live/advanced', body);

  const task = data?.tasks?.[0];
  if (!task || task.status_code !== 20000) {
    console.warn(`  Warning for "${keyword}": ${task?.status_message ?? 'Unknown error'}`);
    return [];
  }

  const items = task.result?.[0]?.items ?? [];

  // Extract People Also Ask items
  const paaBlock = items.find((item) => item.type === 'people_also_ask');
  if (!paaBlock) {
    console.log(`  → No PAA block found for "${keyword}"`);
    return [];
  }

  const questions = (paaBlock.items ?? []).map((q) => ({
    question: q.title,
    expanded_element: q.expanded_element ?? null,
    featured_title: q.featured_title ?? null,
    url: q.url ?? null,
  }));

  console.log(`  → ${questions.length} PAA questions found`);
  return questions;
}

async function main() {
  console.log('=== DataForSEO People Also Ask Research ===\n');
  console.log('Target: google.se | Language: Swedish | Location: Sweden\n');

  const results = {};

  for (const keyword of TARGET_KEYWORDS) {
    try {
      const questions = await fetchPeopleAlsoAsk(keyword);
      results[keyword] = questions;
    } catch (err) {
      console.error(`  Error for "${keyword}": ${err.message}`);
      results[keyword] = [];
    }

    // Polite delay between requests
    await sleep(800);
  }

  const output = {
    generated_at: new Date().toISOString(),
    source: 'DataForSEO SERP API – google.se – Swedish',
    location: 'Sweden (2752)',
    se_domain: 'google.se',
    keywords_researched: TARGET_KEYWORDS,
    data: results,
  };

  writeFileSync('paa-data.json', JSON.stringify(output, null, 2), 'utf-8');

  // Pretty print summary
  console.log('\n=== RESULTS SUMMARY ===\n');
  for (const [keyword, questions] of Object.entries(results)) {
    console.log(`\n"${keyword}" — ${questions.length} questions:`);
    questions.forEach((q, i) => {
      console.log(`  ${i + 1}. ${q.question}`);
    });
  }

  const total = Object.values(results).reduce((sum, q) => sum + q.length, 0);
  console.log(`\n✓ Saved ${total} PAA questions across ${TARGET_KEYWORDS.length} keywords to paa-data.json`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
