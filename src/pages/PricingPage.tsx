import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getPlanPrice, isIndiaUser } from '@/utils/currency';

type Currency = 'USD' | 'INR';

const plans = [
  {
    name: 'Starter',
    usd: 5000,
    inr: 199999,
    description: 'Build credibility with a verified supplier profile and direct buyer messaging.',
    features: [
      'Up to 50 product listings',
      'Verified company badge',
      '5 RFQ responses each month',
      'Lead inbox with buyer messaging',
      'Email + in-app support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    usd: 7000,
    inr: 499999,
    description: 'Scale reach with higher visibility, RFQ volume, and guided success support.',
    features: [
      'Unlimited product listings',
      'Priority placement in search',
      '20 RFQ responses per month',
      'Lead routing to your team',
      'Dedicated success manager',
      'Conversion analytics',
    ],
    cta: 'Talk to Sales',
    popular: true,
  },
  {
    name: 'Enterprise',
    usd: 10000,
    inr: 799999,
    description: 'Enterprise controls, integrations, and premium support for global teams.',
    features: [
      'Unlimited teams & permissions',
      'API access & ERP integrations',
      'Unlimited RFQ automation rules',
      'Advanced fraud protection',
      '24/7 premium support',
      'Custom onboarding & SLAs',
    ],
    cta: 'Request Demo',
  },
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<Currency>('USD');

  useEffect(() => {
    if (isIndiaUser()) {
      setCurrency('INR');
    }
  }, []);

  const useInr = currency === 'INR';

  const currencyNote = useMemo(
    () => (useInr ? 'Showing INR for India-based visitors' : 'Showing USD by default'),
    [useInr]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center space-y-4">
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
          <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:justify-center">
            <p className="text-sm text-muted-foreground">{currencyNote}. Contact us for custom terms.</p>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1 shadow-sm">
              {(['USD', 'INR'] as Currency[]).map(option => (
                <Button
                  key={option}
                  size="sm"
                  variant={currency === option ? 'default' : 'ghost'}
                  className="rounded-full px-3"
                  onClick={() => setCurrency(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = getPlanPrice(plan, useInr);

            return (
              <Card
                key={plan.name}
                className={`relative flex h-full flex-col border border-slate-200 bg-white/80 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg ${
                  plan.popular ? 'shadow-lg border-primary/40 bg-primary/5' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                    Most Popular
                  </span>
                )}
                <CardHeader className="space-y-4 pb-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-primary/80">Annual</p>
                      <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base text-muted-foreground">{plan.description}</CardDescription>
                  <div className="flex items-baseline gap-2 text-4xl font-bold text-gray-900">
                    {price}
                    <span className="text-base font-medium text-muted-foreground">/ year</span>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-6 pt-6">
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
