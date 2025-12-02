import { useState } from 'react';
import BuyerLayout from '@/components/layout/BuyerLayout';

const categories = [
  'Consumer Electronics',
  'Apparel & Accessories',
  'Beauty & Personal Care',
  'Home & Garden',
  'Machinery & Equipment',
  'Construction & Real Estate',
  'Packaging & Printing',
  'Health & Medical',
  'Automobiles & Motorcycles',
];

export default function BuyerRFQCreatePage() {
  const [form, setForm] = useState({
    product: '',
    category: categories[0],
    quantity: '',
    unit: 'pieces',
    targetPrice: '',
    shipTo: '',
    timeline: '',
    details: '',
    attachments: [] as string[],
  });

  return (
    <BuyerLayout>
      <div className="space-y-6">
        <div className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
          <p className="text-sm uppercase tracking-wide text-emerald-100">Post a buying request</p>
          <h1 className="mt-2 text-3xl font-bold">Describe what you need and let suppliers respond</h1>
          <p className="mt-3 max-w-2xl text-emerald-50">
            Outline specifications, target pricing, delivery needs, and compliance requirements. Verified suppliers on Global
            Connection will reply with tailored quotes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-800">Product name</label>
                <input
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                  placeholder="e.g., Custom insulated water bottle 500ml"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-800">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:border-emerald-500 focus:outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-800">Quantity</label>
                <div className="flex gap-3">
                  <input
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    placeholder="e.g., 2000"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:border-emerald-500 focus:outline-none"
                  />
                  <select
                    value={form.unit}
                    onChange={(e) => setForm({ ...form, unit: e.target.value })}
                    className="rounded-lg border border-gray-200 px-3 text-sm text-gray-800 focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="pieces">Pieces</option>
                    <option value="sets">Sets</option>
                    <option value="cartons">Cartons</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-800">Target price (optional)</label>
                <input
                  value={form.targetPrice}
                  onChange={(e) => setForm({ ...form, targetPrice: e.target.value })}
                  placeholder="e.g., $6.50 - $7.20 per unit"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-800">Ship to</label>
                <input
                  value={form.shipTo}
                  onChange={(e) => setForm({ ...form, shipTo: e.target.value })}
                  placeholder="Country or port"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-800">Expected delivery</label>
                <input
                  value={form.timeline}
                  onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                  placeholder="e.g., Within 45 days"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <label className="text-sm font-semibold text-gray-800">Specifications & compliance notes</label>
              <textarea
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                rows={5}
                placeholder="List materials, certifications, packaging, branding, logistics preferences, and quality thresholds."
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">Quality control & inspections</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">Certifications required</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">Sample needed</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">Flexible lead time</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-gray-600">
                By posting, you agree to connect with verified suppliers on Global Connection and receive updates about matching
                offers.
              </p>
              <div className="flex gap-2">
                <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-emerald-500">
                  Save draft
                </button>
                <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                  Submit RFQ
                </button>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-900">How matching works</h3>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">Verified network</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Share clear specs so our sourcing graph can match industry-qualified factories.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Suppliers respond with quotes, lead times, and certificates you can compare side-by-side.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Keep conversations, samples, and purchase protection in one secure workspace.
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-emerald-600 p-5 text-white">
              <p className="text-sm uppercase tracking-wide text-emerald-50">Fast lane</p>
              <h4 className="mt-1 text-xl font-semibold">Need guided sourcing?</h4>
              <p className="mt-2 text-sm text-emerald-50">
                Our concierge team can shortlist vetted suppliers, arrange samples, and coordinate inspections for high-volume orders.
              </p>
              <button className="mt-3 w-full rounded-lg bg-white px-3 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                Talk to sourcing advisor
              </button>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">Tips for stronger RFQs</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Include tolerances, packaging, and labeling needs</li>
                <li>• Mention compliance like CE, FCC, FDA, or ISO as relevant</li>
                <li>• Attach reference drawings or photos for custom projects</li>
                <li>• Share your desired incoterms and logistics window</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </BuyerLayout>
  );
}
