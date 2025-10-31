/* eslint-disable */
const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const { parse } = require('csv-parse/sync');

function titleCase(s) {
  return s.replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase());
}

function humanizeFilename(fp) {
  const base = path.basename(fp).replace(/\.[^.]+$/, '');
  // strip common suffixes like _qa, -qa, etc.
  const cleaned = base.replace(/[_-]?q(&|and)?a$/i, '');
  return titleCase(cleaned.replace(/[_-]+/g, ' ').replace(/&/g, ' & '));
}

function preferColumn(cols, wanted) {
  const lc = cols.map(c => String(c).toLowerCase());
  for (const w of wanted) {
    const idx = lc.findIndex(c => c.includes(w));
    if (idx !== -1) return cols[idx];
  }
  return null;
}

function toJS(s) {
  return String(s ?? '')
    .replace(/\r\n?/g, '\n')
    .replace(/`/g, '\\`')
    .trim();
}

(async () => {
  const cwd = process.cwd();
  const files = await fg(['data/faq-csv/**/*.csv'], { cwd, dot: false });
  if (files.length === 0) {
    console.error('No CSVs found in data/faq-csv/.');
    process.exit(1);
  }

  const out = [];

  for (const rel of files) {
    const abs = path.join(cwd, rel);
    const csv = fs.readFileSync(abs, 'utf8');
    const records = parse(csv, { columns: true, skip_empty_lines: true });

    const cols = records.length ? Object.keys(records[0]) : [];
    const qCol = preferColumn(cols, ['question', 'pregunta', 'q']) || cols[0];
    const aCol = preferColumn(cols, ['answer', 'response', 'respuesta', 'a']) || cols[1];

    const category = humanizeFilename(rel);

    for (const r of records) {
      const q = toJS(r[qCol]);
      const a = toJS(r[aCol]);
      if (!q && !a) continue;
      out.push({ q, a, category });
    }
  }

  // de-dupe by normalized question within same category
  const seen = new Set();
  const dedup = [];
  for (const it of out) {
    const key = (it.category + '|' + it.q).toLowerCase().replace(/\s+/g, ' ').trim();
    if (!seen.has(key)) {
      seen.add(key);
      dedup.push(it);
    }
  }

  // Write TS file
  const lines = ['export type FAQ = { q: string; a: string; category: string };', 'export const FAQS: FAQ[] = ['];
  for (const it of dedup) {
    lines.push(`  { q: \`${it.q}\`, a: \`${it.a}\`, category: \`${it.category}\` },`);
  }
  lines.push('];\n');
  const outPath = path.join(cwd, 'app/data/faqs.ts');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
  console.log(`Wrote ${dedup.length} FAQ items to ${outPath}`);
})();
