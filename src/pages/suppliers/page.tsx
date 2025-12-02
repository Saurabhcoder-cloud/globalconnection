import { useState } from 'react';
import { Link } from 'react-router-dom';

const supplierFilters = {
  regions: ['All regions', 'China', 'India', 'Vietnam', 'Europe', 'North America'],
  verification: ['Any', 'Verified', 'On-site inspected'],
  specialties: ['Private label', 'OEM/ODM', 'Ready to ship', 'Sustainable'],
};

const suppliers = [
  {
    id: 1,
    name: 'Bright Tech Industries',
    location: 'Shenzhen, China',
    badges: ['Verified', 'On-site audit'],
    specialties: 'LED lighting, industrial fixtures, OEM/ODM',
    rating: 4.8,
    response: '98% response • 2h avg',
    hero:
      'https://images.unsplash.com/photo-1582719478248-54e9f2d88c86?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'EcoLife Manufacturing',
    location: 'Guangzhou, China',
    badges: ['Verified'],
    specialties: 'Drinkware, sustainable materials, custom branding',
    rating: 4.9,
    response: '96% response • 3h avg',
    hero:
      'https://images.unsplash.com/photo-1581092334515-ef0b0a57c3c9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Global Textile Co.',
    location: 'Mumbai, India',
    badges: ['Verified', 'On-site audit'],
    specialties: 'Organic cotton, circular knitting, private label apparel',
    rating: 4.9,
    response: '99% response • 1h avg',
    hero:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Green Energy Systems',
    location: 'California, USA',
    badges: ['Verified'],
    specialties: 'Solar panels, inverters, EPC support',
    rating: 4.7,
    response: '94% response • same-day',
    hero:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
  },
];

export default function SuppliersPage() {
  const [region, setRegion] = useState('All regions');
  const [verification, setVerification] = useState('Any');
  const [specialty, setSpecialty] = useState('');

  const filtered = suppliers.filter((supplier) => {
    const regionMatch = region === 'All regions' || supplier.location.includes(region);
    const verificationMatch = verification === 'Any' || supplier.badges.includes('Verified');
    const specialtyMatch = !specialty || supplier.specialties.toLowerCase().includes(specialty.toLowerCase());
    return regionMatch && verificationMatch && specialtyMatch;
  });

  return (
    <div className="bg-gray-50 pb-16 pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-3 border-b border-slate-100 pb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Supplier directory</p>
            <h1 className="text-3xl font-bold text-slate-900">Meet verified manufacturers on Global Connection</h1>
            <p className="text-sm text-slate-600">
              Filter by region, verification, and specialization to connect with factories ready for production, samples, and RFQ responses.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link className="rounded-full bg-emerald-50 px-4 py-2 font-semibold text-emerald-700" to="/buyer/rfq/create">
                Post buying request
              </Link>
              <Link className="rounded-full bg-white px-4 py-2 font-semibold text-emerald-700 ring-1 ring-emerald-100" to="/become-supplier">
                Become a supplier
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-emerald-500 focus:outline-none"
            >
              {supplierFilters.regions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <select
              value={verification}
              onChange={(e) => setVerification(e.target.value)}
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-emerald-500 focus:outline-none"
            >
              {supplierFilters.verification.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-emerald-500 focus:outline-none"
            >
              <option value="">Any specialization</option>
              {supplierFilters.specialties.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filtered.map((supplier) => (
              <div key={supplier.id} className="overflow-hidden rounded-2xl bg-slate-900 text-white shadow-md">
                <div className="h-44 w-full overflow-hidden">
                  <img src={supplier.hero} alt={supplier.name} className="h-full w-full object-cover" />
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{supplier.name}</h3>
                      <p className="text-sm text-white/80">{supplier.location}</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-50">
                      {supplier.rating} ★
                    </span>
                  </div>
                  <p className="text-sm text-white/85">{supplier.specialties}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-white/80">
                    {supplier.badges.map((badge) => (
                      <span key={badge} className="rounded-full bg-white/10 px-3 py-1">
                        {badge}
                      </span>
                    ))}
                    <span className="rounded-full bg-white/10 px-3 py-1">{supplier.response}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      to={`/supplier/${supplier.id}`}
                      className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90"
                    >
                      View profile
                    </Link>
                    <Link
                      to="/buyer/messages"
                      className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:border-white"
                    >
                      Message supplier
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
