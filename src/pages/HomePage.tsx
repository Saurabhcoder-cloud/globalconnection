import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  Factory,
  Globe2,
  MapPin,
  Package,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Users
} from 'lucide-react';

const categories = [
  'All categories',
  'Consumer Electronics',
  'Apparel & Accessories',
  'Beauty & Personal Care',
  'Home & Garden',
  'Machinery & Equipment',
  'Construction & Real Estate',
  'Packaging & Printing',
  'Health & Medical',
  'Automobiles & Motorcycles'
];

const quickTags = ['iphones 13 pro max', 'iphone 15 1tb', 'woven bag', 'wires', 'electric bike'];

const stats = [
  { label: 'products', value: '5,900' },
  { label: 'product categories', value: '200+' },
  { label: 'suppliers', value: '200+' }
];

const opportunityColumns = [
  {
    title: 'Top ranking',
    description: 'Products that buyers love right now',
    badge: '4.8',
    tag: 'Hot list'
  },
  {
    title: 'New arrivals',
    description: 'Freshly added SKUs and samples',
    badge: '124,000+',
    tag: 'Today'
  },
  {
    title: 'Top deals',
    description: 'Limited-time pricing direct from suppliers',
    badge: '180-day',
    tag: 'Protection'
  }
];

const factoryCards = [
  {
    title: 'Get samples',
    copy: 'Request production-ready samples with clear lead times.',
    image:
      'https://images.unsplash.com/photo-1509099836639-18ba02e2e1e1?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Connect with top-ranking manufacturers',
    copy: 'Source directly from vetted factories with quality systems in place.',
    image:
      'https://images.unsplash.com/photo-1582719478248-54e9f2d88c86?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Take factory live tours',
    copy: 'Review production lines and processes remotely before you order.',
    image:
      'https://images.unsplash.com/photo-1581092334515-ef0b0a57c3c9?auto=format&fit=crop&w=800&q=80'
  }
];

const protectionCards = [
  {
    title: 'Verified Supplier',
    copy:
      'Connect with a variety of suppliers with high-level credentials and inspections for enhanced sourcing confidence.',
    cta: 'Watch video'
  },
  {
    title: 'Trade Assurance',
    copy:
      'Secure your order with escrow-style payment options, production timelines, and dispute support so you can buy with peace of mind.',
    cta: 'Learn more'
  }
];

const values = [
  {
    title: 'Make it easy to do business anywhere.',
    body:
      'Global Connection provides the digital rails to help buyers and suppliers collaborate, manage orders, and grow together.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Responsible technology. Sustainable future.',
    body:
      'We invest in secure infrastructure, compliance, and responsible sourcing tools so your supply chain stays resilient.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=700&q=80'
  }
];

const regions = ['United States', 'United Kingdom', 'Australia', 'South Korea', 'Vietnam', 'Russia', 'Thailand', 'India', 'Turkey'];

const features = [
  {
    title: 'Millions of business offerings',
    description: 'Discover products and suppliers for every sourcing workflow.',
    icon: Package
  },
  {
    title: 'Assured quality and transactions',
    description: 'Verified suppliers, inspections, and secure payments for smoother orders.',
    icon: ShieldCheck
  },
  {
    title: 'One-stop trading solution',
    description: 'Manage quotes, samples, and purchase protection from one platform.',
    icon: Store
  },
  {
    title: 'Tailored trading experience',
    description: 'Get matched to suppliers and logistics for your exact business needs.',
    icon: Sparkles
  }
];

const steps = [
  'Search for matches',
  'Identify the right one',
  'Pay with confidence',
  'Fulfill with transparency',
  'Manage with ease'
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
            alt="Global trade collaboration"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:py-20 space-y-8">
          <div className="flex flex-col gap-6 text-white">
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
              <Globe2 className="h-4 w-4" />
              <span>Learn about Global Connection</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-amber-400/90 px-3 py-1 text-xs font-medium text-slate-900">All categories</span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs">Featured selections</span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs">Order protection</span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs">Videos</span>
            </div>

            <div className="max-w-4xl space-y-4">
              <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                The leading B2B ecommerce platform for global trade
              </h1>
              <p className="text-lg text-white/85">
                Source millions of products with confidence. Global Connection links verified suppliers and buyers with secure
                transactions, inspection options, and logistics support.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-xl bg-white/90 p-4 shadow-2xl sm:flex-row sm:items-center">
              <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
                <div className="relative w-full">
                  <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    {categories.map((cat) => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="What are you looking for..."
                    className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto">
                Search
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm text-white/90">
              <span className="font-medium text-amber-300">Hot search :</span>
              {quickTags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-3 text-white/90 md:grid-cols-2 lg:grid-cols-4">
              {features.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <Icon className="h-10 w-10 text-amber-300" />
                    <div>
                      <div className="text-base font-semibold text-white">{title}</div>
                      <p className="text-sm text-white/80">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore offerings */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Explore millions of offerings tailored to your business needs</h2>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-emerald-700">
                  <span className="text-lg font-semibold">{stat.value}</span>
                  <span className="capitalize">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discover opportunities */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Discover your next business opportunity</h3>
            <p className="text-slate-600">Explore trending products, fresh arrivals, and top-value deals curated for B2B buyers.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {opportunityColumns.map((col) => (
              <div key={col.title} className="flex flex-col rounded-xl bg-white p-6 shadow-md">
                <div className="flex items-center justify-between text-sm text-amber-600">
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold">{col.tag}</span>
                  <span className="font-semibold">{col.badge}</span>
                </div>
                <div className="mt-4 space-y-2">
                  <h4 className="text-xl font-semibold text-slate-900">{col.title}</h4>
                  <p className="text-sm text-slate-600">{col.description}</p>
                </div>
                <Button variant="ghost" className="mt-4 w-fit px-0 text-emerald-600" asChild>
                  <Link to="/products" className="inline-flex items-center gap-2">
                    See more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory sourcing */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          <div className="flex items-center gap-3 text-sm font-semibold text-amber-600">
            <Factory className="h-5 w-5" />
            <span>Source direct-from-factory</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {factoryCards.map((card) => (
              <div key={card.title} className="overflow-hidden rounded-2xl bg-slate-900 text-white shadow-lg">
                <div className="h-44 w-full overflow-hidden">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                </div>
                <div className="space-y-2 p-5">
                  <h4 className="text-lg font-semibold">{card.title}</h4>
                  <p className="text-sm text-white/80">{card.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade assurance */}
      <section className="bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold sm:text-3xl">Trade with confidence from production quality to purchase protection</h3>
            <p className="text-white/80">Verified suppliers, secure payment milestones, and transparent logistics keep your orders on track.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {protectionCards.map((card) => (
              <div key={card.title} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <h4 className="text-xl font-semibold">{card.title}</h4>
                <p className="mt-2 text-white/80">{card.copy}</p>
                <Button variant="secondary" className="mt-4 bg-white text-amber-900 hover:bg-white/90" asChild>
                  <Link to="/about">{card.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering steps */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-slate-900">Streamline ordering from search to fulfillment, all in one place</h3>
            <p className="text-slate-600">Modern procurement workflows that help you move from discovery to delivery with clarity.</p>
            <div className="space-y-3">
              {steps.map((step) => (
                <div key={step} className="flex items-center gap-3 text-slate-800">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-amber-50 p-6 shadow-inner">
            <div className="flex flex-wrap gap-3 text-sm text-amber-800">
              <span className="rounded-full bg-white px-3 py-1 font-semibold">Popular</span>
              <span className="rounded-full bg-white px-3 py-1">Best Match</span>
              <span className="rounded-full bg-white px-3 py-1">Verified Manufacturer</span>
              <span className="rounded-full bg-white px-3 py-1">Trade Assurance</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-amber-900">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold">Select a supplier</div>
                <p className="mt-1 text-xs text-slate-600">Compare capabilities, capacity, and compliance credentials.</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold">Pay securely</div>
                <p className="mt-1 text-xs text-slate-600">Set milestones with escrow-style protection and payment terms.</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold">Track fulfillment</div>
                <p className="mt-1 text-xs text-slate-600">Get visibility on production status, inspections, and shipping.</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold">Manage with ease</div>
                <p className="mt-1 text-xs text-slate-600">Centralize POs, invoices, and communication for every order.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored services */}
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-amber-900">Get tailored discounts, services, and tools for your business stage.</h3>
            <p className="text-amber-800">
              Grow with curated benefits offered by the free Global Connection Membership, wherever you are in your sourcing
              journey. Access supplier matchmaking, logistics guidance, and financing tools that scale with your business.
            </p>
            <Button className="bg-amber-700 text-white hover:bg-amber-800" asChild>
              <Link to="/pricing">Explore membership</Link>
            </Button>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
                alt="Customer avatar"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-slate-900">Eva Jane</div>
                <div className="text-xs text-slate-500">Founder of a beauty brand</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-700">
              "As an entrepreneur devoted to creating premium beauty products, Global Connection has been my trusted partner for
              scaling supplier relationships and managing shipments on time."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center space-y-6">
          <h3 className="text-3xl font-semibold text-slate-900">Ready to get started?</h3>
          <p className="text-slate-600">Explore millions of products from trusted suppliers by signing up today.</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" asChild>
              <Link to="/register">Create an account</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/login">Buyer Central login</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-3xl font-semibold text-slate-900">Empowering businesses through global trade</h3>
            <p className="text-slate-600">Global Connection offers end-to-end trading solutions for growing teams around the world.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="overflow-hidden rounded-2xl bg-white shadow-md">
                <img src={value.image} alt={value.title} className="h-56 w-full object-cover" />
                <div className="space-y-2 p-6">
                  <h4 className="text-xl font-semibold text-slate-900">{value.title}</h4>
                  <p className="text-sm text-slate-600">{value.body}</p>
                  <Button variant="ghost" className="px-0 text-emerald-600" asChild>
                    <Link to="/about" className="inline-flex items-center gap-2">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-8">
          <h3 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">Find suppliers by country or region</h3>
          <div className="grid grid-cols-2 gap-3 text-center text-sm text-slate-700 sm:grid-cols-3 md:grid-cols-4">
            {regions.map((region) => (
              <div key={region} className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
                {region}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Globe2 className="h-4 w-4" />
              <span>About Global Connection</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Partner program</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Global offices</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
