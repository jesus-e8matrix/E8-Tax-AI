'use client';

import React, { useMemo, useState } from 'react';
import AppShell from './layout/AppShell';
import { FAQS } from '@/app/data/faqs'; // Now expects items optionally with { category }

type FaqItem = { q: string; a: string; category?: string };

function slugify(input: string) {
  return (input || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-neutral-200 bg-white">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-4 text-left"
      >
        <div className="font-semibold text-neutral-900">{q}</div>
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
      {open && <div className="px-4 pb-4 text-sm text-neutral-600">{a}</div>}
    </div>
  );
}

export default function FAQPage() {
  // Group by category (fallback to “General” if missing)
  const grouped = useMemo(() => {
    const map = new Map<string, FaqItem[]>();
    (FAQS as FaqItem[]).forEach((it) => {
      const catRaw = it.category?.trim();
      const cat = catRaw && catRaw.length ? catRaw : 'General';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(it);
    });
    // Sort categories alphabetically, keep items order
    return Array.from(map.entries()).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
  }, []);

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Frequently Asked Questions</h1>
        <div className="mt-2 h-0.5 w-40 rounded bg-gradient-to-r from-lime-400 to-blue-500" />
      </div>

      <div className="space-y-8">
        {grouped.map(([category, items]) => (
          <section key={category} id={slugify(category)} className="space-y-3">
            {/* Category heading — bold + underline like your example */}
            <h2 className="text-base font-semibold underline underline-offset-4">
              {category}
            </h2>

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
