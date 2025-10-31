'use client';

import Link from 'next/link';
import useSafePathname from './useSafePathname';

function isActiveRoute(currentPath: string, href: string) {
  const cur = currentPath || '/';
  return href === '/' ? cur === '/' : cur.startsWith(href);
}

const ICONS = {
  dashboard: '/icons/dashboard.png',
  fileHistory: '/icons/file-history.png',
  fileUpload: '/icons/file-upload.png',
  insights: '/icons/financial-insights.png',
  taxPlanning: '/icons/tax-planning.png',
  profile: '/icons/my-profile.png',
  helpCenter: '/icons/help-center.png',
  setting: '/icons/setting.png',
};

export default function Sidebar() {
  const pathname = useSafePathname();

  const main = [
    { label: 'Dashboard',          href: '/dashboard', icon: ICONS.dashboard },
    { label: 'File History',       href: '/files',     icon: ICONS.fileHistory },
    { label: 'File Upload',        href: '/upload',    icon: ICONS.fileUpload },
    { label: 'Financial Insights', href: '/insights',  icon: ICONS.insights },
    { label: 'Tax Planning',       href: '/planning',  icon: ICONS.taxPlanning },
    { label: 'My Profile',         href: '/profile',   icon: ICONS.profile },
  ];

  const help = [
    { label: 'Help & Support', href: '/help',     icon: ICONS.helpCenter },
    // No FAQ icon provided in ZIP; keeping ❓ until you add one
    { label: 'FAQ',            href: '/faq',      emoji: '❓' as const },
    { label: 'Setting',        href: '/settings', icon: ICONS.setting },
  ];

  const NavLink = ({
    href,
    label,
    icon,
    emoji,
  }: {
    href: string;
    label: string;
    icon?: string;
    emoji?: '❓';
  }) => {
    const active = isActiveRoute(pathname, href);
    return (
      <Link
        href={href}
        className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-neutral-50 ${
          active ? 'bg-blue-50 text-blue-700' : 'text-neutral-700'
        }`}
        aria-current={active ? 'page' : undefined}
      >
        {icon ? (
          <img
            src={icon}
            alt={`${label} icon`}
            className="h-5 w-5 object-contain"
            loading="lazy"
            width={20}
            height={20}
          />
        ) : (
          <span className="text-lg" aria-hidden>
            {emoji}
          </span>
        )}
        <span>{label}</span>
      </Link>
    );
  };

  return (
    // Fixed sidebar (non-scrolling). Main content area is padded via AppShell md:pl-64.
    <aside className="fixed left-0 top-0 hidden h-screen w-64 md:flex md:flex-col md:gap-2 border-r border-neutral-200 bg-white p-4">
      <div className="mt-2 text-xs font-semibold text-neutral-500">MAIN MENU</div>
      <nav className="mt-2 space-y-1">
        {main.map((it) => (
          <NavLink key={it.href} href={it.href} label={it.label} icon={it.icon} />
        ))}
      </nav>

      <div className="mt-6 text-xs font-semibold text-neutral-500">HELP & SUPPORT</div>
      <nav className="mt-2 space-y-1">
        {help.map((it) => (
          <NavLink
            key={it.href}
            href={it.href}
            label={it.label}
            icon={('icon' in it ? it.icon : undefined) as string | undefined}
            emoji={('emoji' in it ? it.emoji : undefined) as '❓' | undefined}
          />
        ))}
      </nav>
    </aside>
  );
}
