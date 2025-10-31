'use client';

import AppShell from '../components/layout/AppShell';

type Row = (string | JSX.Element)[];

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-neutral-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function StatCard({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}) {
  return (
    <Card className="p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700">
          <span className="text-xl">{icon ?? '📄'}</span>
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-neutral-900">{title}</div>
          {subtitle && <div className="text-xs text-neutral-500">{subtitle}</div>}
        </div>
      </div>
    </Card>
  );
}

function Step({
  label,
  step,
  active,
}: {
  label: string;
  step: number;
  active?: boolean;
}) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-white ring-2 ring-blue-500 bg-blue-500" />
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex h-6 items-center rounded-full px-2 text-xs font-semibold ${
            active ? 'bg-green-100 text-green-700' : 'bg-neutral-100 text-neutral-600'
          }`}
        >
          Step {step}
        </span>
        <span className="text-sm text-neutral-700">{label}</span>
      </div>
    </div>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: Row[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-2 text-left text-xs font-semibold text-neutral-500">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="rounded-xl">
              {r.map((c, j) => (
                <td key={j} className="rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 border border-neutral-200">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DashboardPage() {
  const deadlines: Row[] = [
    ['June 16, 2025', '2nd Quarter 2025 Estimated Tax Due'],
    ['September 15, 2025', '3rd Quarter 2025 Estimated Tax Due'],
    ['October 15, 2025', 'Extended Due Date for 2024 Returns'],
    ['September 15, 2025', '3rd Quarter 2025 Estimated Tax Due'],
    ['October 15, 2025', 'Extended Due Date for 2024 Returns'],
  ];

  const reports: Row[] = [
    ['INV1358974830', '2022', 'Completed', 'Forecast', <a className="text-blue-600 hover:underline" href="#">Download Now</a>],
    ['INV1357926468', '2024', 'Completed', 'Filing Summary', <a className="text-blue-600 hover:underline" href="#">Download Now</a>],
    ['INV3525893010', '2024', 'Pending', 'Filing Summary', <a className="text-blue-600 hover:underline" href="#">Download Now</a>],
    ['INV2985949020', '2025', 'Completed', 'Filing Summary', <a className="text-blue-600 hover:underline" href="#">Download Now</a>],
  ];

  const uploads: Row[] = [
    ['INV1358974830', 'Pending', <button className="rounded-lg border px-3 py-1 text-sm hover:bg-neutral-50">Upload</button>],
    ['INV1357926468', 'Uploaded', <button className="rounded-lg border px-3 py-1 text-sm hover:bg-neutral-50">Upload</button>],
    ['INV3525893010', 'Reviewed', <button className="rounded-lg border px-3 py-1 text-sm hover:bg-neutral-50">Upload</button>],
    ['INV2985949020', 'Pending', <button className="rounded-lg border px-3 py-1 text-sm hover:bg-neutral-50">Upload</button>],
  ];

  return (
    <AppShell>
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">Your Dashboard</h1>
        <div className="mt-2 h-0.5 w-40 rounded bg-gradient-to-r from-lime-400 to-blue-500" />
      </div>

      {/* Top stat cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Application Status" subtitle="Prepare & Reviewing Your Return" icon={<span>📝</span>} />
        <StatCard title="Refund/Balance Overview" subtitle="Balance Due: $X.XX" icon={<span>💵</span>} />
        <StatCard title="Filing Date" subtitle="Filed with IRS on: Apr 10, 2025" icon={<span>📅</span>} />
        <StatCard title="Refund/Balance Overview" subtitle="Processing time: ~2–3 weeks" icon={<span>⏱️</span>} />
      </div>

      {/* Status + Deadlines */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* Stepper */}
        <Card className="p-4">
          <div className="text-center text-sm font-semibold text-neutral-800">Status</div>
          <div className="mt-3 space-y-4">
            <Step step={1} label="Filled the Form" active />
            <Step step={2} label="Connected to the CPA" />
            <Step step={3} label="Submitted Files" />
            <Step step={4} label="Sign The Documents" />
          </div>
        </Card>

        {/* Links + deadlines */}
        <Card className="p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a href="#" className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700">
              Where’s My Refund?
            </a>
            <a href="#" className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700">
              Pay Now
            </a>
          </div>

          <Card className="mt-4 p-0">
            <div className="border-b border-neutral-200 px-4 py-3 text-sm font-semibold">Upcoming Tax Deadlines</div>
            <div className="px-2 py-3">
              <Table headers={['Date', 'Rationale']} rows={deadlines} />
            </div>
          </Card>

          <div className="mt-2 px-1 text-xs text-neutral-500">
            *We keep your information encrypted and safe. See our privacy policy for more details.
          </div>
        </Card>
      </div>

      {/* AI Compliance Assistant */}
      <Card className="mt-6 overflow-hidden">
        <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold">
          <span className="text-green-700">🤖 AI Compliance Assistant</span>
        </div>
        <div className="p-4">
          <ul className="space-y-2 text-sm">
            <li><span className="text-green-700 font-semibold">→ Tax Payments:</span> Based on your income pattern, consider adjusting quarterly tax payments.</li>
            <li><span className="text-green-700 font-semibold">→ Maximize Deductions:</span> Review your business expense categories.</li>
            <li><span className="text-green-700 font-semibold">→ Child Tax Credit:</span> You may be eligible for the Child Tax Credit this year.</li>
          </ul>
          <div className="mt-4 rounded-xl border border-neutral-200 p-2 text-xs text-neutral-500">
            Hello! I see you’ve previously filed your corporate tax information. How can I assist you today?
          </div>
        </div>
      </Card>

      {/* Reports & Filing History */}
      <Card className="mt-6 p-0">
        <div className="border-b border-neutral-200 px-4 py-3 text-sm font-semibold">Reports & Filing History</div>
        <div className="px-2 py-3">
          <Table headers={['Report Name', 'Year', 'Status', 'Type', 'Download']} rows={reports} />
        </div>
      </Card>

      {/* Upload your tax documents */}
      <Card className="mt-6 p-0 max-w-3xl">
        <div className="border-b border-neutral-200 px-4 py-3 text-sm font-semibold">Upload Your Tax Documents</div>
        <div className="px-2 py-3">
          <Table headers={['Document Name/ID', 'Status', 'Upload']} rows={uploads} />
        </div>
      </Card>

      {/* Need help */}
      <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <a
          href="/chat"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 text-sm font-semibold hover:bg-neutral-50"
        >
          Chat with our Agent
        </a>
        <a
          href="/support"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Reach out to support
        </a>
      </div>

      <div className="py-10" />
    </AppShell>
  );
}
