import { Link } from 'react-router-dom';

const perks = [
  {
    title: 'RFQ workspace',
    detail: 'Centralize requests, compare quotes, and approve milestones with protected payments.',
  },
  {
    title: 'Verified suppliers',
    detail: 'Source from vetted factories with audits, certifications, and response-time visibility.',
  },
  {
    title: 'Logistics & compliance',
    detail: 'Plan shipping, inspections, and documentation to keep every order on track.',
  },
];

const timelines = [
  { label: 'Draft RFQ', detail: 'Share specs, target price, and delivery expectations.' },
  { label: 'Review quotes', detail: 'Compare MOQs, certifications, and lead times with clarity.' },
  { label: 'Secure payment', detail: 'Use escrow-style milestones with Trade Assurance support.' },
  { label: 'Track production', detail: 'Inspections, approvals, and logistics status in one view.' },
];

export default function BuyersPage() {
  return (
    <div className="bg-gray-50 pb-16 pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Buyer hub</p>
              <h1 className="text-3xl font-bold text-slate-900">Everything buyers need to source confidently</h1>
              <p className="text-sm text-slate-600">
                Global Connection gives purchasing teams streamlined RFQs, transparent supplier signals, and logistics-ready ordering so you can deliver on time and on budget.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700" to="/buyer/rfq/create">
                  Post a buying request
                </Link>
                <Link className="rounded-lg border border-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 hover:border-emerald-300" to="/auth/register">
                  Create buyer account
                </Link>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {perks.map((perk) => (
                  <div key={perk.title} className="rounded-xl bg-emerald-50 p-4 text-emerald-900">
                    <h3 className="text-base font-semibold">{perk.title}</h3>
                    <p className="mt-1 text-sm text-emerald-800">{perk.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-slate-900 p-6 text-white">
              <h3 className="text-lg font-semibold">Buyer dashboards</h3>
              <p className="mt-2 text-sm text-white/80">
                Monitor inquiries, orders, and messages with built-in milestones, documents, and analytics tailored for procurement teams.
              </p>
              <div className="mt-4 space-y-2 text-sm text-white/80">
                <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2">
                  <span>Live RFQs</span>
                  <span className="rounded-full bg-emerald-500/30 px-2 py-1 text-xs font-semibold text-white">12</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2">
                  <span>Orders in production</span>
                  <span className="rounded-full bg-emerald-500/30 px-2 py-1 text-xs font-semibold text-white">5</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2">
                  <span>Unread messages</span>
                  <span className="rounded-full bg-emerald-500/30 px-2 py-1 text-xs font-semibold text-white">15</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">A transparent sourcing timeline</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {timelines.map((step) => (
                <div key={step.label} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-sm font-semibold text-emerald-700">{step.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
