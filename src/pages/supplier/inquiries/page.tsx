import { useState } from 'react';
import SupplierLayout from '../../../components/layout/SupplierLayout';

export default function SupplierInquiriesPage() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);

  const inquiries = [
    {
      id: 'INQ-2847',
      buyer: {
        name: 'TechCorp Inc.',
        country: 'United States',
        avatar: 'TC',
      },
      product: 'Industrial LED Lights 50W',
      quantity: '5000 units',
      targetPrice: '$12.50/unit',
      shippingTo: 'California, USA',
      expectedDelivery: 'Within 30 days',
      message: 'We are interested in bulk purchase for our new warehouse project. Please provide your best quote including shipping costs.',
      date: '2 hours ago',
      status: 'new',
    },
    {
      id: 'INQ-2846',
      buyer: {
        name: 'Global Traders Ltd.',
        country: 'United Kingdom',
        avatar: 'GT',
      },
      product: 'Wireless Bluetooth Speaker',
      quantity: '2000 units',
      targetPrice: '$8.00/unit',
      shippingTo: 'London, UK',
      expectedDelivery: 'Within 45 days',
      message: 'Looking for reliable supplier for long-term partnership. Need samples first.',
      date: '5 hours ago',
      status: 'quoted',
    },
    {
      id: 'INQ-2845',
      buyer: {
        name: 'MegaMart Retail',
        country: 'Canada',
        avatar: 'MM',
      },
      product: 'Smart Home Motion Sensor',
      quantity: '10000 units',
      targetPrice: '$5.50/unit',
      shippingTo: 'Toronto, Canada',
      expectedDelivery: 'Within 60 days',
      message: 'We need customized packaging with our brand logo. Can you provide this service?',
      date: '1 day ago',
      status: 'in-progress',
    },
    {
      id: 'INQ-2844',
      buyer: {
        name: 'Electronics Hub',
        country: 'Australia',
        avatar: 'EH',
      },
      product: 'USB-C Fast Charging Cable',
      quantity: '15000 units',
      targetPrice: '$3.20/unit',
      shippingTo: 'Sydney, Australia',
      expectedDelivery: 'Within 40 days',
      message: 'Need CE and RoHS certification. Please confirm if available.',
      date: '2 days ago',
      status: 'closed',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-emerald-100 text-emerald-700';
      case 'quoted': return 'bg-blue-100 text-blue-700';
      case 'in-progress': return 'bg-amber-100 text-amber-700';
      case 'closed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredInquiries = inquiries.filter(inq => 
    filterStatus === 'all' || inq.status === filterStatus
  );

  const handleSendQuote = (inquiry: any) => {
    setSelectedInquiry(inquiry);
    setShowQuoteModal(true);
  };

  return (
    <SupplierLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Inquiries & RFQs
          </h1>
          <p className="text-gray-600 mt-1">Manage buyer inquiries and send quotes</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">New</span>
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <i className="ri-mail-line text-emerald-600"></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">23</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Quoted</span>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-file-text-line text-blue-600"></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">18</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">In Progress</span>
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <i className="ri-time-line text-amber-600"></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Closed</span>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <i className="ri-check-line text-gray-600"></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">156</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                filterStatus === 'all' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Inquiries
            </button>
            <button
              onClick={() => setFilterStatus('new')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                filterStatus === 'new' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              New
            </button>
            <button
              onClick={() => setFilterStatus('quoted')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                filterStatus === 'quoted' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Quoted
            </button>
            <button
              onClick={() => setFilterStatus('in-progress')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                filterStatus === 'in-progress' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setFilterStatus('closed')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                filterStatus === 'closed' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Closed
            </button>
          </div>
        </div>

        {/* Inquiries List */}
        <div className="space-y-4">
          {filteredInquiries.map((inquiry) => (
            <div key={inquiry.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {inquiry.buyer.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{inquiry.buyer.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(inquiry.status)}`}>
                        {inquiry.status.replace('-', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      <i className="ri-map-pin-line mr-1"></i>
                      {inquiry.buyer.country}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{inquiry.date}</span>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Inquiry ID</p>
                    <p className="text-sm font-semibold text-gray-900">{inquiry.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Product</p>
                    <p className="text-sm font-semibold text-gray-900">{inquiry.product}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Quantity</p>
                    <p className="text-sm font-semibold text-gray-900">{inquiry.quantity}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Target Price</p>
                    <p className="text-sm font-semibold text-emerald-600">{inquiry.targetPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Shipping To</p>
                    <p className="text-sm font-semibold text-gray-900">{inquiry.shippingTo}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Expected Delivery</p>
                    <p className="text-sm font-semibold text-gray-900">{inquiry.expectedDelivery}</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-600 mb-2">Buyer Message:</p>
                <p className="text-sm text-gray-900 bg-white border border-gray-200 rounded-lg p-3">
                  {inquiry.message}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleSendQuote(inquiry)}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap"
                >
                  <i className="ri-file-text-line mr-2"></i>
                  Send Quote
                </button>
                <button className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                  <i className="ri-message-3-line mr-2"></i>
                  Message Buyer
                </button>
                <button className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                  <i className="ri-eye-line mr-2"></i>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Send Quote Modal */}
        {showQuoteModal && selectedInquiry && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                <h2 className="text-2xl font-bold text-gray-900">Send Quote</h2>
                <button
                  onClick={() => setShowQuoteModal(false)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">Inquiry: {selectedInquiry.id}</p>
                  <p className="text-sm font-semibold text-gray-900">{selectedInquiry.product}</p>
                  <p className="text-sm text-gray-600 mt-1">Requested: {selectedInquiry.quantity}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Unit Price *</label>
                    <input
                      type="text"
                      placeholder="$0.00"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">MOQ *</label>
                    <input
                      type="text"
                      placeholder="e.g. 500 units"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Lead Time *</label>
                    <input
                      type="text"
                      placeholder="e.g. 30 days"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Shipping Cost</label>
                    <input
                      type="text"
                      placeholder="$0.00"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Payment Terms *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>30% deposit, 70% before shipment</option>
                    <option>50% deposit, 50% before shipment</option>
                    <option>100% advance payment</option>
                    <option>Letter of Credit (L/C)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Shipping Terms *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>FOB</option>
                    <option>CIF</option>
                    <option>EXW</option>
                    <option>DDP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Additional Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Add any additional information or terms..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    maxLength={500}
                  ></textarea>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowQuoteModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap">
                    Send Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SupplierLayout>
  );
}
