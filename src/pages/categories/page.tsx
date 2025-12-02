import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Consumer Electronics',
    description: 'Smart devices, components, and accessories built for modern buyers.',
    subcategories: ['Mobile Devices', 'Audio & Wearables', 'Smart Home', 'Components'],
    color: 'from-emerald-500/15 to-emerald-500/5',
    featured: 'Ready-to-ship earbuds, OEM smart watches, rugged tablets',
  },
  {
    name: 'Apparel & Accessories',
    description: 'Private label apparel, performance fabrics, and trend-led accessories.',
    subcategories: ['Activewear', 'Sustainable Basics', 'Footwear', 'Bags & Leather'],
    color: 'from-amber-500/15 to-amber-500/5',
    featured: 'Recycled tees, premium denim, minimalist leather goods',
  },
  {
    name: 'Home & Living',
    description: 'Housewares, textiles, and decor made for omnichannel retail.',
    subcategories: ['Kitchen & Dining', 'Home Textiles', 'Decor', 'Cleaning'],
    color: 'from-blue-500/15 to-blue-500/5',
    featured: 'Induction cookware, luxury bedding, modular shelving',
  },
  {
    name: 'Industrial & Machinery',
    description: 'Equipment, components, and maintenance supplies built for uptime.',
    subcategories: ['Power & Energy', 'Lighting', 'Fabrication', 'Tools'],
    color: 'from-slate-500/15 to-slate-500/5',
    featured: 'LED high bays, precision bearings, CNC tooling kits',
  },
  {
    name: 'Packaging & Printing',
    description: 'Brand-forward packaging, sustainable materials, and custom print runs.',
    subcategories: ['Corrugate & Mailers', 'Labels', 'Premium Boxes', 'Custom Inserts'],
    color: 'from-fuchsia-500/15 to-fuchsia-500/5',
    featured: 'Compostable mailers, foil-stamped sleeves, tamper seals',
  },
  {
    name: 'Health & Personal Care',
    description: 'Clinically-minded products with compliance and traceability.',
    subcategories: ['Beauty Devices', 'Wellness', 'Medical Supplies', 'Personal Care'],
    color: 'from-cyan-500/15 to-cyan-500/5',
    featured: 'LED skin tools, nutraceuticals, sterile disposables',
  },
];

const highlights = [
  {
    title: 'Trending verticals',
    body: 'Electrified mobility, sustainable packaging, and smart devices are driving the most buyer requests this quarter.',
  },
  {
    title: 'Quality signals',
    body: 'Look for verified suppliers with on-site audits, certifications, and response-time badges to accelerate your sourcing.',
  },
  {
    title: 'Regional depth',
    body: 'Tap manufacturing clusters in China, India, Vietnam, and EMEA for the right mix of pricing, compliance, and lead times.',
  },
];

export default function CategoriesPage() {
  return (
    <div className="bg-gray-50 pb-16 pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Explore by industry</p>
            <h1 className="text-3xl font-bold text-slate-900">Sourcing tracks tailored for global trade</h1>
            <p className="max-w-3xl text-sm text-slate-600">
              Navigate Global Connection by category to discover verified suppliers, curated collections, and compliant products
              ready for RFQs and production orders.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-emerald-700">
              <Link className="rounded-full bg-emerald-50 px-4 py-2 font-semibold" to="/buyer/rfq/create">
                Post a buying request
              </Link>
              <Link className="rounded-full bg-white px-4 py-2 font-semibold text-emerald-700 ring-1 ring-emerald-100" to="/suppliers">
                View suppliers
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.name}
                className="rounded-xl border border-slate-200 bg-gradient-to-br p-6 shadow-sm"
                style={{ backgroundImage: undefined }}
              >
                <div className={`rounded-full bg-gradient-to-r ${category.color} px-3 py-1 text-xs font-semibold text-slate-800`}>
                  {category.name}
                </div>
                <p className="mt-3 text-sm text-slate-600">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-700">
                  {category.subcategories.map((sub) => (
                    <span key={sub} className="rounded-full bg-slate-100 px-3 py-1">
                      {sub}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs text-slate-500">{category.featured}</p>
                  <Link
                    to={`/products?category=${encodeURIComponent(category.name)}`}
                    className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    View products →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
