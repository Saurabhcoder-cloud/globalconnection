
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BuyerLayout from '../../../components/layout/BuyerLayout';

export default function BuyerDashboardPage() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Active Inquiries', value: '12', icon: 'ri-question-answer-line', color: 'bg-blue-500', change: '+3 this week' },
    { label: 'Pending Quotes', value: '8', icon: 'ri-file-list-line', color: 'bg-orange-500', change: '2 new today' },
    { label: 'Active Orders', value: '5', icon: 'ri-shopping-bag-line', color: 'bg-emerald-500', change: '1 shipped' },
    { label: 'New Messages', value: '15', icon: 'ri-message-3-line', color: 'bg-purple-500', change: '5 unread' },
  ];

  const recentInquiries = [
    {
      id: 1,
      product: 'Industrial LED Flood Light 200W',
      supplier: 'Bright Tech Industries',
      quantity: '500 pieces',
      status: 'Quoted',
      date: '2025-01-20',
      statusColor: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 2,
      product: 'Organic Cotton T-Shirts Wholesale',
      supplier: 'Global Textile Co.',
      quantity: '1000 pieces',
      status: 'Pending',
      date: '2025-01-19',
      statusColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 3,
      product: 'Stainless Steel Water Bottles',
      supplier: 'EcoLife Manufacturing',
      quantity: '2000 pieces',
      status: 'Responded',
      date: '2025-01-18',
      statusColor: 'bg-blue-100 text-blue-700'
    },
  ];

  const recentOrders = [
    {
      id: 'ORD-2025-001',
      product: 'Wireless Bluetooth Earbuds',
      supplier: 'AudioTech Solutions',
      amount: '$2,400',
      status: 'In Production',
      date: '2025-01-15',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 'ORD-2025-002',
      product: 'Solar Panel 300W',
      supplier: 'Green Energy Systems',
      amount: '$4,750',
      status: 'Shipped',
      date: '2025-01-12',
      statusColor: 'bg-purple-100 text-purple-700'
    },
  ];

  return (
    <BuyerLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Welcome back, John Smith!
          </h1>
          <p className="text-emerald-100 mb-6">TechCorp Industries • Manage your sourcing activities</p>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/products')}
              className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all whitespace-nowrap"
            >
              <i className="ri-search-line mr-2"></i>
              Search Products
            </button>
            <button
              onClick={() => navigate('/buyer/rfq/create')}
              className="px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-all whitespace-nowrap"
            >
              <i className="ri-add-line mr-2"></i>
              Post Buying Request
            </button>
            <button
              onClick={() => navigate('/buyer/orders')}
              className="px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-all whitespace-nowrap"
            >
              <i className="ri-file-list-3-line mr-2"></i>
              View Orders
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${stat.icon} text-2xl text-white`}></i>
                </div>
                <span className="text-xs text-gray-500">{stat.change}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Inquiries */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Recent Inquiries</h2>
                <a
                  href="/buyer/rfq"
                  className="text-sm font-medium text-emerald-600 hover:text-emerald-700 cursor-pointer"
                >
                  View All
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {recentInquiries.map((inquiry) => (
                <div key={inquiry.id} className="p-6 hover:bg-gray-50 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-900 flex-1">{inquiry.product}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${inquiry.statusColor} whitespace-nowrap ml-2`}>
                      {inquiry.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{inquiry.supplier}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{inquiry.quantity}</span>
                    <span>{inquiry.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
                <a
                  href="/buyer/orders"
                  className="text-sm font-medium text-emerald-600 hover:text-emerald-700 cursor-pointer"
                >
                  View All
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <div key={order.id} className="p-6 hover:bg-gray-50 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">{order.product}</h3>
                      <p className="text-xs text-gray-600">{order.supplier}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.statusColor} whitespace-nowrap ml-2`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
                    <span className="font-semibold text-gray-900">{order.amount}</span>
                    <span>{order.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => navigate('/buyer/messages')}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-600 hover:bg-emerald-50 transition-all text-center group"
            >
              <i className="ri-message-3-line text-3xl text-gray-400 group-hover:text-emerald-600 mb-2"></i>
              <p className="text-sm font-medium text-gray-700 group-hover:text-emerald-600">Messages</p>
            </button>
            <button
              onClick={() => navigate('/buyer/inquiry-list')}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-600 hover:bg-emerald-50 transition-all text-center group"
            >
              <i className="ri-bookmark-line text-3xl text-gray-400 group-hover:text-emerald-600 mb-2"></i>
              <p className="text-sm font-medium text-gray-700 group-hover:text-emerald-600">Inquiry List</p>
            </button>
            <button
              onClick={() => navigate('/buyer/profile')}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-600 hover:bg-emerald-50 transition-all text-center group"
            >
              <i className="ri-user-settings-line text-3xl text-gray-400 group-hover:text-emerald-600 mb-2"></i>
              <p className="text-sm font-medium text-gray-700 group-hover:text-emerald-600">My Profile</p>
            </button>
            <button
              onClick={() => navigate('/buyer/company')}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-600 hover:bg-emerald-50 transition-all text-center group"
            >
              <i className="ri-building-line text-3xl text-gray-400 group-hover:text-emerald-600 mb-2"></i>
              <p className="text-sm font-medium text-gray-700 group-hover:text-emerald-600">Company</p>
            </button>
          </div>
        </div>
      </div>
    </BuyerLayout>
  );
}
