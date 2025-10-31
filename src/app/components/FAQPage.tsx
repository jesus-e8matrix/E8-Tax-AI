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





import { FAQS } from '@/app/data/faqs';

// …

export default function FAQPage() {
  // If you need to transform/filter later, keep useMemo; otherwise you can use FAQS directly.
  // const faqs = useMemo(() => FAQS, []);
  const faqs = FAQS;

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#000]">Frequently Asked Questions</h1>
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
