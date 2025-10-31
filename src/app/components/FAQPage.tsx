'use client';

import React, { useMemo, useState } from 'react';
import AppShell from './layout/AppShell';
import { FAQS } from '@/app/data/faqs'; // type: { q: string; a: string; category: string }[]

type FaqItem = { q: string; a: string; category?: string };

/* --- helpers --- */
function slugify(input: string) {
  return (input || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

// Normalize category labels (trim, collapse whitespace, alias common variants)
function normalizeCategory(cat?: string): string {
  const c = (cat || 'General').trim().replace(/\s+/g, ' ');
  const lc = c.toLowerCase();

  // Aliases that should map into "Filing Requirements"
  if (
    lc === 'filing requirements' ||
    lc === 'filing requirements q&a' ||
    lc.startsWith('filing requirements ')
  ) {
    return 'Filing Requirements';
  }
  return c;
}

// If question is empty (or extremely long/dirty), derive a readable title from the answer
function deriveQuestion(q: string, a: string): string {
  const qTrim = (q || '').trim();
  if (qTrim && qTrim.length <= 280) return qTrim;

  const aTrim = (a || '').trim();
  if (!aTrim) return qTrim || 'Question';

  // Take first sentence or first line as a safe fallback
  const firstLine = aTrim.split('\n')[0];
  const sentence = firstLine.split(/(?<=\.)\s|(?<=\?)\s|(?<=!)\s/)[0] || firstLine;

  // If it doesn’t end with punctuation, add a question mark to make it look like a prompt
  const title = sentence.length > 280 ? sentence.slice(0, 277) + '…' : sentence;
  return /[.?!]$/.test(title) ? title : `${title}?`;
}

/* --- UI --- */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const title = deriveQuestion(q, a);

  return (
    <div className="rounded-xl border border-neutral-200 bg-white">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-4 text-left"
      >
        <div className="font-semibold text-neutral-900">{title}</div>
        <svg
          className={`h-5 w-5 text-neutral-500 transition-transform ${open ? 'rotate-45' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-neutral-600 whitespace-pre-wrap">{a}</div>}
    </div>
  );
}

export default function FAQPage() {
  // Group by normalized category
  const grouped = useMemo(() => {
    const map = new Map<string, FaqItem[]>();
    (FAQS as FaqItem[]).forEach((it) => {
      const cat = normalizeCategory(it.category);
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(it);
    });
    // Sort categories alphabetically, keep item order stable
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#000]">Frequently Asked Questions</h1>
        <div className="mt-2 h-0.5 w-40 rounded bg-gradient-to-r from-lime-400 to-blue-500" />
      </div>

      <div className="space-y-8">
        {grouped.map(([category, items]) => (
          <section key={category} id={slugify(category)} className="space-y-3">
            <h2 className="text-base font-semibold underline underline-offset-4 text-[#000]">{category}</h2>
            {items.map((f, i) => (
              <FAQItem key={`${category}-${i}`} q={f.q} a={f.a} />
            ))}
          </section>
        ))}
      </div>

      <div className="py-10" />
    </AppShell>
  );
}
