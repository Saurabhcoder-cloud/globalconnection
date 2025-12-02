import { useState } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';

export default function AdminBuyersPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingBuyer, setEditingBuyer] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const buyers = [
    { id: 1, name: 'John Smith', email: 'john.smith@company.com', company: 'Tech Solutions Inc.', country: 'United States', orders: 24, spent: '$45,230', joined: '2024-01-15', status: 'Active', verified: true },
    { id: 2, name: 'Maria Garcia', email: 'maria.g@imports.com', company: 'Global Imports Ltd.', country: 'Spain', orders: 18, spent: '$32,450', joined: '2024-02-20', status: 'Active', verified: true },
    { id: 3, name: 'Chen Wei', email: 'chen.wei@trading.cn', company: 'Eastern Trading Co.', country: 'China', orders: 31, spent: '$67,890', joined: '2023-11-10', status: 'Active', verified: true },
    { id: 4, name: 'Ahmed Hassan', email: 'ahmed.h@wholesale.ae', company: 'Dubai Wholesale', country: 'UAE', orders: 12, spent: '$28,900', joined: '2024-03-05', status: 'Active', verified: false },
    { id: 5, name: 'Sophie Martin', email: 'sophie.m@retail.fr', company: 'Paris Retail Group', country: 'France', orders: 8, spent: '$19,340', joined: '2024-03-15', status: 'Pending', verified: false },
    { id: 6, name: 'Robert Johnson', email: 'r.johnson@corp.com', company: 'Johnson Corporation', country: 'Canada', orders: 0, spent: '$0', joined: '2024-04-01', status: 'Inactive', verified: false },
  ];

  const handleEditClick = (buyer: any) => {
    setEditingBuyer({ ...buyer });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    // Here you would typically save to Supabase
    console.log('Saving buyer:', editingBuyer);
    setShowEditModal(false);
    setEditingBuyer(null);
  };

  const handleDeleteClick = (buyerId: number) => {
    if (confirm('Are you sure you want to delete this buyer? This action cannot be undone.')) {
      console.log('Deleting buyer:', buyerId);
      // Here you would typically delete from Supabase
    }
  };

  const filteredBuyers = buyers.filter(buyer => {
    const matchesSearch = buyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         buyer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         buyer.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'active') return matchesSearch && buyer.status === 'Active';
    if (activeTab === 'pending') return matchesSearch && buyer.status === 'Pending';
    if (activeTab === 'inactive') return matchesSearch && buyer.status === 'Inactive';
    return matchesSearch;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Buyer Management
        </h1>
        <p className="text-gray-600 mt-2">Manage and monitor all registered buyers</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Buyers</p>
              <p className="text-3xl font-bold text-gray-900">1,234</p>
              <p className="text-sm text-emerald-600 mt-2">
                <i className="ri-arrow-up-line"></i> +12% this month
              </p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <i className="ri-user-line text-2xl text-emerald-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Buyers</p>
              <p className="text-3xl font-bold text-gray-900">987</p>
              <p className="text-sm text-emerald-600 mt-2">
                <i className="ri-arrow-up-line"></i> +8% this month
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <i className="ri-user-star-line text-2xl text-blue-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending Verification</p>
              <p className="text-3xl font-bold text-gray-900">45</p>
              <p className="text-sm text-orange-600 mt-2">
                <i className="ri-time-line"></i> Needs attention
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <i className="ri-user-add-line text-2xl text-orange-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">$2.4M</p>
              <p className="text-sm text-emerald-600 mt-2">
                <i className="ri-arrow-up-line"></i> +15% this month
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <i className="ri-money-dollar-circle-line text-2xl text-purple-600"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Buyers
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'active' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'pending' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab('inactive')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'inactive' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Inactive
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search buyers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm w-full md:w-80"
            />
          </div>
        </div>
      </div>

      {/* Buyers Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Buyer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Company</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Country</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Orders</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Spent</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBuyers.map((buyer) => (
                <tr key={buyer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-semibold">{buyer.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{buyer.name}</p>
                        <p className="text-sm text-gray-600">{buyer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{buyer.company}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{buyer.country}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-900">{buyer.orders}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-emerald-600">{buyer.spent}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        buyer.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                        buyer.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {buyer.status}
                      </span>
                      {buyer.verified && (
                        <i className="ri-verified-badge-fill text-emerald-600" title="Verified"></i>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button 
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                        title="View"
                      >
                        <i className="ri-eye-line"></i>
                      </button>
                      <button 
                        onClick={() => handleEditClick(buyer)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                        title="Edit"
                      >
                        <i className="ri-edit-line"></i>
                      </button>
                      <button 
                        onClick={() => handleDeleteClick(buyer.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete"
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && editingBuyer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Edit Buyer</h2>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={editingBuyer.name}
                      onChange={(e) => setEditingBuyer({ ...editingBuyer, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={editingBuyer.email}
                      onChange={(e) => setEditingBuyer({ ...editingBuyer, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={editingBuyer.company}
                      onChange={(e) => setEditingBuyer({ ...editingBuyer, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                    <input
                      type="text"
                      value={editingBuyer.country}
                      onChange={(e) => setEditingBuyer({ ...editingBuyer, country: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Account Status */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Status</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                    <select
                      value={editingBuyer.status}
                      onChange={(e) => setEditingBuyer({ ...editingBuyer, status: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    >
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Verification</label>
                    <div className="flex items-center space-x-3 mt-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={editingBuyer.verified}
                          onChange={(e) => setEditingBuyer({ ...editingBuyer, verified: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                      <span className="text-sm text-gray-700">Verified Account</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
