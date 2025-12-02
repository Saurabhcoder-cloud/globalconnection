import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Industrial LED Flood Light 200W',
    price: '$45.00 - $52.00',
    moq: '100 pcs',
    leadTime: '20 days',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'LED Street Light 150W Solar Hybrid',
    price: '$65.00 - $75.00',
    moq: '80 pcs',
    leadTime: '25 days',
    image:
      'https://images.unsplash.com/photo-1582719478248-54e9f2d88c86?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Industrial High Bay Light 100W',
    price: '$38.00 - $45.00',
    moq: '120 pcs',
    leadTime: '18 days',
    image:
      'https://images.unsplash.com/photo-1581092334515-ef0b0a57c3c9?auto=format&fit=crop&w=500&q=80',
  },
];

const certifications = ['ISO 9001', 'CE', 'RoHS', 'On-site audit'];

export default function SupplierProfilePage() {
  return (
    <div className="bg-gray-50 pb-16 pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="grid gap-6 border-b border-slate-100 p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Verified</div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">12 years</div>
              </div>
              <h1 className="text-3xl font-bold text-slate-900">Bright Tech Industries</h1>
              <p className="text-sm text-slate-600">
                Manufacturer specializing in industrial LED lighting, turnkey OEM/ODM programs, and energy-efficient retrofits for commercial projects.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Shenzhen, China
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">98% response • 2h avg</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Trade safety + inspections</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700" to="/buyer/messages">
                  Message supplier
                </Link>
                <Link className="rounded-lg border border-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 hover:border-emerald-300" to="/buyer/rfq/create">
                  Request a quote
                </Link>
                <Link className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-300" to="/trust">
                  View compliance
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-lg font-semibold text-emerald-900">Capabilities</h3>
              <ul className="mt-3 space-y-2 text-sm text-emerald-800">
                <li>• OEM/ODM design with photometric testing</li>
                <li>• Automated SMT + die-casting lines</li>
                <li>• In-house QC lab with IP66 & surge testing</li>
                <li>• Global logistics with CE/FCC/UL documentation</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-emerald-900">
                {certifications.map((cert) => (
                  <span key={cert} className="rounded-full bg-white px-3 py-1">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">Featured products</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {products.map((product) => (
                  <div key={product.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
                    <div className="space-y-2 p-4">
                      <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
                      <p className="text-sm text-emerald-700">{product.price}</p>
                      <div className="flex items-center justify-between text-xs text-slate-600">
                        <span>{product.moq}</span>
                        <span>{product.leadTime}</span>
                      </div>
                      <Link to={`/product/${product.id}`} className="text-sm font-semibold text-emerald-700">
                        View details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-slate-900 p-5 text-white">
                <h3 className="text-lg font-semibold">Company snapshot</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>• Founded in 2013 with 320 employees</li>
                  <li>• Main markets: North America, EU, Middle East</li>
                  <li>• Trade terms: FOB, EXW, DDP with milestones</li>
                  <li>• Payment: Escrow, LC, TT with protection</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-slate-900">Recent activity</h3>
                <ul className="mt-3 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center justify-between">
                    <span>Shipment of 1,200 LED high bays to Germany</span>
                    <span className="text-xs text-slate-500">Jan 2025</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>New audit report uploaded</span>
                    <span className="text-xs text-slate-500">Dec 2024</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Responded to 5 RFQs in Lighting</span>
                    <span className="text-xs text-slate-500">This week</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
