'use client';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-4 sm:px-6">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white font-bold">I</div>
        <span className="hidden sm:block text-lg font-semibold text-[#000]">ITAI</span>
      </div>

      {/* Search */}
      <div className="flex-1 px-4 max-w-xl mx-auto w-full">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-xl border border-neutral-300 bg-white py-2 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-3.5-3.5" />
          </svg>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {['🔔', '📩', '⚙️'].map((label, i) => (
          <button
            key={i}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-50"
          >
            <span className="text-lg" aria-hidden>
              {label}
            </span>
          </button>
        ))}
        <div className="ml-1 h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/5">
          <img src="/avatar.png" alt="User" className="h-full w-full object-cover" />
        </div>
      </div>
    </header>
  );
}
