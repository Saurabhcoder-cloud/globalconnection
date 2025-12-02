import { Link } from 'react-router-dom';

const reasons = [
  {
    title: 'Access global buyers',
    detail: 'Connect with vetted procurement teams looking for reliable manufacturing partners.',
  },
  {
    title: 'Showcase capabilities',
    detail: 'Publish certifications, capacity, and lead times so buyers can qualify you faster.',
  },
  {
    title: 'Close deals faster',
    detail: 'Use embedded chat, quotes, and escrow-style payments to move from inquiry to PO.',
  },
];

const steps = [
  'Create your supplier profile with company verification',
  'Upload hero products and add capabilities, MOQs, and lead times',
  'Respond to buyer RFQs with compliant quotes and documents',
  'Manage orders, production updates, and logistics in one workspace',
];

export default function BecomeSupplierPage() {
  return (
    <div className="bg-gray-50 pb-16 pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Supplier onboarding</p>
              <h1 className="text-3xl font-bold text-slate-900">Grow with Global Connection buyers</h1>
              <p className="text-sm text-slate-600">
                Join a curated network of manufacturers and wholesalers. Showcase your capabilities, verify your business, and respond to high-intent RFQs with confidence.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700" to="/auth/supplier-register">
                  Become a supplier
                </Link>
                <Link className="rounded-lg border border-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 hover:border-emerald-300" to="/supplier/dashboard">
                  View supplier console
                </Link>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {reasons.map((reason) => (
                  <div key={reason.title} className="rounded-xl bg-emerald-50 p-4 text-emerald-900">
                    <h3 className="text-base font-semibold">{reason.title}</h3>
                    <p className="mt-1 text-sm text-emerald-800">{reason.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6 text-white">
              <h3 className="text-lg font-semibold">Your first 30 days</h3>
              <p className="mt-2 text-sm text-white/80">
                Ship samples, publish certificates, and enable Trade Assurance so buyers trust your fulfillment.
              </p>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                {steps.map((step, idx) => (
                  <div key={step} className="flex items-start gap-3 rounded-lg bg-white/10 px-3 py-2">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Highlight verified badges", "Respond faster with templates", "Show fulfillment proofs"].map((tip) => (
              <div key={tip} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <p className="text-sm font-semibold text-slate-900">{tip}</p>
                <p className="mt-1 text-sm text-slate-600">
                  Make it easy for buyers to qualify your factory and start production with confidence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
