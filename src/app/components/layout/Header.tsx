'use client';

import Link from 'next/link';

const ICONS = {
  logo: '/header/logo.png',
  bell: '/header/bell.svg',
  inbox: '/header/inbox.svg',
  settings: '/header/settings.svg',
  avatar: '/header/avatar.jpg',
};

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-4 sm:px-6">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2">
          <img
            src={ICONS.logo}
            alt="ITAI logo"
            className="h-9 w-9 rounded-md object-contain"
            width={36}
            height={36}
          />
          <span className="hidden sm:block text-lg font-semibold text-neutral-900">ITAI</span>
        </Link>
      </div>

      {/* Search */}
      <div className="flex-1 px-4 max-w-xl mx-auto w-full">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-xl border border-neutral-300 bg-white py-2 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
          />
          {/* search icon (inline svg to avoid another asset) */}
          <svg
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400"
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
        {[
          { src: ICONS.bell, label: 'Notifications' },
          { src: ICONS.inbox, label: 'Messages' },
          { src: ICONS.settings, label: 'Settings' },
        ].map((it) => (
          <button
            key={it.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:bg-neutral-50 active:scale-95"
            aria-label={it.label}
            type="button"
          >
            <img
              src={it.src}
              alt=""
              className="h-5 w-5 object-contain"
              width={20}
              height={20}
            />
          </button>
        ))}

        {/* Avatar */}
        <button
          type="button"
          className="ml-1 h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/5"
          aria-label="Account menu"
        >
          <img
            src={ICONS.avatar}
            alt="User avatar"
            className="h-full w-full object-cover"
            width={40}
            height={40}
          />
        </button>
      </div>
    </header>
  );
}
