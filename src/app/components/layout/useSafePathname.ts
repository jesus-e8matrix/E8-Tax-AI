'use client';
import { usePathname as useNextPathname } from 'next/navigation';

/** Always returns a string pathname (fallbacks for SSR/sandbox). */
export default function useSafePathname(): string {
  try {
    const p = typeof useNextPathname === 'function' ? useNextPathname() : undefined;
    if (p) return p;
  } catch {}
  if (typeof window !== 'undefined' && window.location) return window.location.pathname || '/';
  return '/';
}
