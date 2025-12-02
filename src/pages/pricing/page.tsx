import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for getting started',
      features: [
        'Browse unlimited products',
        'Send up to 5 RFQs per month',
        'Basic supplier verification',
        'Email support',
        'Standard shipping options',
        'Basic order tracking'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: { monthly: 99, annual: 990 },
      description: 'For growing businesses',
      features: [
        'Everything in Free',
        'Unlimited RFQs',
        'Priority supplier matching',
        'Advanced verification badges',
        '24/7 chat support',
        'Discounted shipping rates',
        'Advanced analytics dashboard',
        'Dedicated account manager',
        'Custom payment terms'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 299, annual: 2990 },
      description: 'For large-scale operations',
      features: [
        'Everything in Professional',
        'Custom supplier network',
        'API access',
        'White-label solutions',
        'Priority order processing',
        'Custom logistics solutions',
        'Dedicated success team',
        'Advanced security features',
        'Custom integrations',
        'Volume discounts'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Choose the plan that fits your business needs. All plans include our core features.</p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white font-semibold' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-16 h-8 bg-emerald-500 rounded-full transition-colors cursor-pointer"
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1'}`}></div>
            </button>
            <span className={`text-lg ${billingCycle === 'annual' ? 'text-white font-semibold' : 'text-gray-400'}`}>
              Annual <span className="text-emerald-400 text-sm">(Save 17%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                  plan.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-slate-900">
                      ${billingCycle === 'monthly' ? plan.price.monthly : Math.floor(plan.price.annual / 12)}
                    </span>
                    <span className="text-gray-600 ml-2">/month</span>
                    {billingCycle === 'annual' && plan.price.annual > 0 && (
                      <div className="text-sm text-gray-500 mt-1">Billed ${plan.price.annual} annually</div>
                    )}
                  </div>
                  <Link
                    to={plan.name === 'Enterprise' ? '/contact' : '/auth/register'}
                    className={`block w-full text-center py-3 rounded-md font-semibold whitespace-nowrap transition-colors mb-8 ${
                      plan.popular
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-slate-900'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <i className="ri-check-line text-emerald-500 text-xl flex-shrink-0 mt-0.5"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Compare All Features</h2>
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-700">RFQs per month</td>
                    <td className="px-6 py-4 text-center text-gray-700">5</td>
                    <td className="px-6 py-4 text-center text-gray-700">Unlimited</td>
                    <td className="px-6 py-4 text-center text-gray-700">Unlimited</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Supplier verification</td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Priority support</td>
                    <td className="px-6 py-4 text-center"><i className="ri-close-line text-gray-400 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Analytics dashboard</td>
                    <td className="px-6 py-4 text-center"><i className="ri-close-line text-gray-400 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">API access</td>
                    <td className="px-6 py-4 text-center"><i className="ri-close-line text-gray-400 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-close-line text-gray-400 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Dedicated account manager</td>
                    <td className="px-6 py-4 text-center"><i className="ri-close-line text-gray-400 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Can I change plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Is there a free trial?</h3>
              <p className="text-gray-600">Yes, Professional and Enterprise plans come with a 14-day free trial. No credit card required.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Can I cancel anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-emerald-50">Our team is here to help you choose the right plan</p>
          <Link to="/contact" className="bg-white hover:bg-gray-100 text-emerald-600 px-10 py-4 rounded-md font-semibold whitespace-nowrap transition-colors inline-block">
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
