import { useEffect, useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getPlanPrice, isIndiaUser } from '@/utils/currency';

const plans = [
  {
    name: 'Starter',
    usd: 5000,
    inr: 199999,
    description: 'Launch your presence with verified listings and buyer messaging.',
    features: [
      'Up to 50 product listings',
      '5 monthly RFQ responses',
      'Email + chat support',
      'Basic analytics dashboard',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    usd: 7000,
    inr: 499999,
    description: 'Scale reach with advanced visibility and automation tools.',
    features: [
      'Unlimited product listings',
      'Priority placement in search',
      '20 monthly RFQ responses',
      'Lead management workspace',
      'Dedicated success manager',
    ],
    cta: 'Start Growth',
    popular: true,
  },
  {
    name: 'Enterprise',
    usd: 10000,
    inr: 799999,
    description: 'Full suite for global teams with compliance and custom SLAs.',
    features: [
      'Unlimited teams & permissions',
      'API access & ERP integrations',
      'Unlimited RFQ responses',
      'Advanced fraud protection',
      '24/7 premium support',
    ],
    cta: 'Contact Sales',
  },
];

export default function PricingPage() {
  const [useInr, setUseInr] = useState(false);

  useEffect(() => {
    setUseInr(isIndiaUser());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Transparent annual plans
          </div>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Simple pricing for your B2B growth
          </h1>
          <p className="text-lg text-muted-foreground">
            Global Connection keeps your buyers, suppliers, and operations in one connected platform with predictable pricing.
          </p>
          <p className="text-sm text-muted-foreground">
            Showing prices in {useInr ? 'INR for India-based visitors' : 'USD by default'}. Contact us for custom terms.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = getPlanPrice(plan, useInr);

            return (
              <Card
                key={plan.name}
                className={`flex h-full flex-col border border-slate-200 bg-white/80 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg ${
                  plan.popular ? 'lg:scale-105 shadow-lg border-primary/40 bg-primary/5' : ''
                }`}
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-primary/80">Annual</p>
                      <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                    </div>
                    {plan.popular && (
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <CardDescription className="text-base text-muted-foreground">{plan.description}</CardDescription>
                  <div className="flex items-baseline gap-2 text-4xl font-bold text-gray-900">
                    {price}
                    <span className="text-base font-medium text-muted-foreground">per year</span>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-6">
                  <ul className="space-y-3 text-sm text-gray-700">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
