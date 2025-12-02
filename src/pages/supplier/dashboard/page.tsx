import SupplierLayout from '../../../components/layout/SupplierLayout';

export default function SupplierDashboardPage() {
  const kpis = [
    { icon: 'ri-box-3-line', label: 'Total Products', value: '248', change: '+12', color: 'emerald' },
    { icon: 'ri-eye-line', label: 'Product Views', value: '15.2K', change: '+18%', color: 'blue' },
    { icon: 'ri-file-list-3-line', label: 'Pending Inquiries', value: '23', change: '+5', color: 'amber' },
    { icon: 'ri-shopping-bag-3-line', label: 'Active Orders', value: '18', change: '+3', color: 'purple' },
  ];

  const recentInquiries = [
    {
      id: 'INQ-2847',
      buyer: 'TechCorp Inc.',
      product: 'Industrial LED Lights',
      quantity: '5000 units',
      targetPrice: '$12.50/unit',
      date: '2 hours ago',
      status: 'new',
    },
    {
      id: 'INQ-2846',
      buyer: 'Global Traders Ltd.',
      product: 'Wireless Bluetooth Speakers',
      quantity: '2000 units',
      targetPrice: '$8.00/unit',
      date: '5 hours ago',
      status: 'quoted',
    },
    {
      id: 'INQ-2845',
      buyer: 'MegaMart Retail',
      product: 'Smart Home Sensors',
      quantity: '10000 units',
      targetPrice: '$5.50/unit',
      date: '1 day ago',
      status: 'in-progress',
    },
  ];

  const topProducts = [
    { name: 'Industrial LED Lights', views: 2847, inquiries: 45, image: 'https://readdy.ai/api/search-image?query=modern%20industrial%20LED%20light%20fixture%20with%20sleek%20aluminum%20housing%20and%20bright%20white%20illumination%20against%20clean%20white%20background%20professional%20product%20photography&width=100&height=100&seq=sp1&orientation=squarish' },
    { name: 'Wireless Bluetooth Speakers', views: 2156, inquiries: 38, image: 'https://readdy.ai/api/search-image?query=compact%20wireless%20bluetooth%20speaker%20with%20modern%20design%20black%20finish%20and%20metallic%20accents%20on%20white%20background%20professional%20product%20photography&width=100&height=100&seq=sp2&orientation=squarish' },
    { name: 'Smart Home Sensors', views: 1923, inquiries: 32, image: 'https://readdy.ai/api/search-image?query=small%20white%20smart%20home%20motion%20sensor%20with%20minimalist%20design%20and%20LED%20indicator%20on%20clean%20white%20background%20professional%20product%20photography&width=100&height=100&seq=sp3&orientation=squarish' },
    { name: 'USB-C Charging Cables', views: 1654, inquiries: 28, image: 'https://readdy.ai/api/search-image?query=premium%20USB-C%20charging%20cable%20with%20braided%20nylon%20design%20and%20metal%20connectors%20coiled%20on%20white%20background%20professional%20product%20photography&width=100&height=100&seq=sp4&orientation=squarish' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-emerald-100 text-emerald-700';
      case 'quoted': return 'bg-blue-100 text-blue-700';
      case 'in-progress': return 'bg-amber-100 text-amber-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <SupplierLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Welcome back, Acme Manufacturing!
              </h1>
              <p className="text-emerald-100">Here's what's happening with your business today</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all whitespace-nowrap">
                <i className="ri-add-line mr-2"></i>
                Add Product
              </button>
              <button className="px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-all whitespace-nowrap">
                <i className="ri-file-list-3-line mr-2"></i>
                View Inquiries
              </button>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${kpi.color}-100 rounded-lg flex items-center justify-center`}>
                  <i className={`${kpi.icon} text-2xl text-${kpi.color}-600`}></i>
                </div>
                <span className="text-sm font-semibold text-emerald-600">{kpi.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</h3>
              <p className="text-sm text-gray-600">{kpi.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Inquiries */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Recent Inquiries</h2>
              <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                View All
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {recentInquiries.map((inquiry) => (
                <div key={inquiry.id} className="p-6 hover:bg-gray-50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-sm font-semibold text-gray-900">{inquiry.id}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(inquiry.status)}`}>
                          {inquiry.status.replace('-', ' ')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{inquiry.buyer}</p>
                    </div>
                    <span className="text-xs text-gray-500">{inquiry.date}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-900"><strong>Product:</strong> {inquiry.product}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span><strong>Qty:</strong> {inquiry.quantity}</span>
                      <span><strong>Target:</strong> {inquiry.targetPrice}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <button className="px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap">
                      Send Quote
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Top Products</h2>
            </div>
            <div className="p-6 space-y-4">
              {topProducts.map((product, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">{product.name}</h3>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="text-xs text-gray-600">
                        <i className="ri-eye-line mr-1"></i>
                        {product.views}
                      </span>
                      <span className="text-xs text-gray-600">
                        <i className="ri-file-list-3-line mr-1"></i>
                        {product.inquiries}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Conversion Rate</h3>
              <i className="ri-arrow-up-line text-emerald-600"></i>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">24.5%</p>
            <p className="text-sm text-gray-600">Inquiries to orders</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Response Time</h3>
              <i className="ri-time-line text-blue-600"></i>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">2.3h</p>
            <p className="text-sm text-gray-600">Average response</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Buyer Rating</h3>
              <i className="ri-star-fill text-amber-500"></i>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">4.8</p>
            <p className="text-sm text-gray-600">Based on 156 reviews</p>
          </div>
        </div>
      </div>
    </SupplierLayout>
  );
}
