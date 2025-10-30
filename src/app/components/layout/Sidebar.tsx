'use client';

import Link from 'next/link';
import useSafePathname from './useSafePathname';

function isActiveRoute(currentPath: string, href: string) {
  const cur = currentPath || '/';
  return href === '/' ? cur === '/' : cur.startsWith(href);
}

export default function Sidebar() {
  const pathname = useSafePathname();

  const main = [
    { label: 'Dashboard', href: '/dashboard', icon: '🏠' },
    { label: 'File History', href: '/files', icon: '🗂️' },
    { label: 'File Upload', href: '/upload', icon: '⬆️' },
    { label: 'Financial Insights', href: '/insights', icon: '📈' },
    { label: 'Tax Planning', href: '/planning', icon: '🧮' },
    { label: 'My Profile', href: '/profile', icon: '👤' },
  ];
  const help = [
    { label: 'Help & Support', href: '/help', icon: '🛟' },
    { label: 'FAQ', href: '/faq', icon: '❓' },
    { label: 'Setting', href: '/settings', icon: '⚙️' },
  ];

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const active = isActiveRoute(pathname, href);
    return (
      <Link
        href={href}
        className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-neutral-50 ${
          active ? 'bg-blue-50 text-blue-700' : 'text-neutral-700'
        }`}
        aria-current={active ? 'page' : undefined}
      >
        {children}
      </Link>
    );
  };

  return (
      <aside className="fixed left-0 top-0 hidden h-screen w-64 md:flex md:flex-col md:gap-2 border-r border-neutral-200 bg-white p-4">
      <div className="mt-2 text-xs font-semibold text-neutral-500">MAIN MENU</div>
      <nav className="mt-2 space-y-1">
        {main.map((it) => (
          <NavLink key={it.href} href={it.href}>
            <span className="text-lg" aria-hidden>
              {it.icon}
            </span>
            <span>{it.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-6 text-xs font-semibold text-neutral-500">HELP & SUPPORT</div>
      <nav className="mt-2 space-y-1">
        {help.map((it) => (
          <NavLink key={it.href} href={it.href}>
            <span className="text-lg" aria-hidden>
              {it.icon}
            </span>
            <span>{it.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
