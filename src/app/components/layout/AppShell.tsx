'use client';

import Header from './Header';
import Sidebar from './Sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-neutral-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6">{children}</main>
      </div>
    </div>
  );
}
