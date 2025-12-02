
import { useState } from 'react';
import BuyerLayout from '../../../components/layout/BuyerLayout';

export default function BuyerRFQPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'quoted' | 'closed'>('all');
  const [selectedRFQ, setSelectedRFQ] = useState<number | null>(null);

  const rfqs = [
    {
      id: 1,
      title: 'Industrial LED Flood Light 200W',
      category: 'Lighting',
      quantity: '500 pieces',
      targetPrice: '$45-50 per unit',
      shippingTo: 'United States',
      expectedDelivery: '2025-03-15',
      status: 'Quoted',
      responses: 3,
      createdDate: '2025-01-20',
      description: 'Looking for high-quality LED flood lights with IP65 rating for outdoor industrial use.',
      quotes: [
        {
          id: 1,
          supplier: 'Bright Tech Industries',
          country: 'China',
          verified: true,
          price: '$48 per unit',
          moq: '500 pieces',
          leadTime: '25 days',
          rating: 4.8,
          responseDate: '2025-01-21',
        },
        {
          id: 2,
          supplier: 'Global Lighting Solutions',
          country: 'India',
          verified: true,
          price: '$52 per unit',
          moq: '300 pieces',
          leadTime: '30 days',
          rating: 4.6,
          responseDate: '2025-01-22',
        },
      ],
    },
    {
      id: 2,
      title: 'Organic Cotton T-Shirts Wholesale',
      category: 'Textiles',
      quantity: '1000 pieces',
      targetPrice: '$8-12 per unit',
      shippingTo: 'United Kingdom',
      expectedDelivery: '2025-04-01',
      status: 'Pending',
      responses: 0,
      createdDate: '2025-01-19',
      description: 'Need 100% organic cotton t-shirts, various sizes and colors. GOTS certified preferred.',
      quotes: [],
    },
    {
      id: 3,
      title: 'Stainless Steel Water Bottles',
      category: 'Home & Garden',
      quantity: '2000 pieces',
      targetPrice: '$5-7 per unit',
      shippingTo: 'Canada',
      expectedDelivery: '2025-03-20',
      status: 'Quoted',
      responses: 5,
      createdDate: '2025-01-18',
      description: 'Double-wall insulated stainless steel bottles, 500ml capacity, custom logo printing required.',
      quotes: [
        {
          id: 1,
          supplier: 'EcoLife Manufacturing',
          country: 'China',
          verified: true,
          price: '$6.50 per unit',
          moq: '1000 pieces',
          leadTime: '35 days',
          rating: 4.9,
          responseDate: '2025-01-19',
        },
      ],
    },
  ];

  const filteredRFQs = rfqs.filter((rfq) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'pending') return rfq.status === 'Pending';
    if (activeTab === 'quoted') return rfq.status === 'Quoted';
    if (activeTab === 'closed') return rfq.status === 'Closed';
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Quoted':
        return 'bg-emerald-100 text-emerald-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Closed':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <BuyerLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">My RFQs & Buying Requests</h1>
            <p className="text-gray-600">Manage your requests for quotations and track supplier responses</p>
          </div>
          <a
            href="/buyer/rfq/create"
            className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer"
          >
            <i className="ri-add-line mr-2"></i>
            Post New RFQ
          </a>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex space-x-1 p-2">
              {[
                { key: 'all', label: 'All RFQs', count: rfqs.length },
                { key: 'pending', label: 'Pending', count: rfqs.filter((r) => r.status === 'Pending').length },
                { key: 'quoted', label: 'Quoted', count: rfqs.filter((r) => r.status === 'Quoted').length },
                { key: 'closed', label: 'Closed', count: 0 },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* RFQ List */}
          <div className="divide-y divide-gray-200">
            {filteredRFQs.map((rfq) => (
              <div key={rfq.id} className="p-6 hover:bg-gray-50 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{rfq.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(rfq.status)}`}>
                        {rfq.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{rfq.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <i className="ri-price-tag-3-line mr-1"></i>
                        {rfq.category}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-shopping-cart-line mr-1"></i>
                        {rfq.quantity}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-money-dollar-circle-line mr-1"></i>
                        {rfq.targetPrice}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-map-pin-line mr-1"></i>
                        Ship to {rfq.shippingTo}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-calendar-line mr-1"></i>
                        Expected: {rfq.expectedDelivery}
                      </span>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">{rfq.responses}</div>
                    <div className="text-xs text-gray-600">Responses</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-xs text-gray-500">Posted on {rfq.createdDate}</span>
                  <div className="flex space-x-2">
                    {rfq.responses > 0 && (
                      <button
                        onClick={() => setSelectedRFQ(selectedRFQ === rfq.id ? null : rfq.id)}
                        className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap"
                      >
                        <i className="ri-eye-line mr-2"></i>
                        View Quotes ({rfq.responses})
                      </button>
                    )}
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                      <i className="ri-edit-line mr-2"></i>
                      Edit
                    </button>
                  </div>
                </div>

                {/* Quotes Section */}
                {selectedRFQ === rfq.id && rfq.quotes.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">Supplier Quotes</h4>
                    <div className="space-y-3">
                      {rfq.quotes.map((quote) => (
                        <div key={quote.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                                <i className="ri-store-line text-xl text-emerald-600"></i>
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h5 className="font-semibold text-gray-900">{quote.supplier}</h5>
                                  {quote.verified && (
                                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full flex items-center">
                                      <i className="ri-verified-badge-fill mr-1"></i>
                                      Verified
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center space-x-3 text-xs text-gray-600 mt-1">
                                  <span className="flex items-center">
                                    <i className="ri-map-pin-line mr-1"></i>
                                    {quote.country}
                                  </span>
                                  <span className="flex items-center">
                                    <i className="ri-star-fill text-yellow-500 mr-1"></i>
                                    {quote.rating}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500">{quote.responseDate}</span>
                          </div>

                          <div className="grid grid-cols-3 gap-4 mb-3">
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Unit Price</p>
                              <p className="text-sm font-bold text-gray-900">{quote.price}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 mb-1">MOQ</p>
                              <p className="text-sm font-bold text-gray-900">{quote.moq}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Lead Time</p>
                              <p className="text-sm font-bold text-gray-900">{quote.leadTime}</p>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <button className="flex-1 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap">
                              <i className="ri-check-line mr-2"></i>
                              Accept Quote
                            </button>
                            <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-white transition-all whitespace-nowrap">
                              <i className="ri-message-3-line mr-2"></i>
                              Message Supplier
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BuyerLayout>
  );
}
