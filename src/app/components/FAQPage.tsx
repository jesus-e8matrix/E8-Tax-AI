'use client';

import React, { useMemo, useState } from 'react';
import AppShell from './layout/AppShell';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-neutral-200 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
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

const SAMPLE_FAQS = [
  {
    q: 'Is the loss on the sale of my home deductible?',
    a: 'Maybe. Losses on personal use property are generally not deductible. Losses related to investment or business property may be.',
  },
  {
    q: 'I own stock that became worthless last year. Is this a bad debt? How do I report my loss?',
    a: 'Worthless securities are treated as a capital loss on the last day of the tax year.',
  },
  {
    q: 'How do I figure the cost basis when the shares I am selling were purchased at various times and prices?',
    a: 'Use specific identification when possible; otherwise default to FIFO.',
  },
  {
    q: 'How are reinvested dividends reported on my tax return?',
    a: 'They are taxable in the year received and increase your cost basis.',
  },
  {
    q: 'May a noncustodial parent claim the child tax credit?',
    a: 'Only with Form 8332 (or equivalent) and dependency tests met.',
  },
];

export default function FAQPage() {
  const faqs = useMemo(() => SAMPLE_FAQS.concat(SAMPLE_FAQS).concat(SAMPLE_FAQS), []);
  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
        <div className="mt-2 h-0.5 w-40 rounded bg-gradient-to-r from-lime-400 to-blue-500" />
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <FAQItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
      <div className="py-10" />
    </AppShell>
  );
}
