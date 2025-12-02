
import { useState } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';

export default function AdminCategoriesPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const categories = [
    { id: 1, name: 'Electronics', slug: 'electronics', icon: 'ri-smartphone-line', products: 3456, subcategories: 12, status: 'Active', order: 1 },
    { id: 2, name: 'Apparel & Fashion', slug: 'apparel-fashion', icon: 'ri-shirt-line', products: 2890, subcategories: 8, status: 'Active', order: 2 },
    { id: 3, name: 'Home & Garden', slug: 'home-garden', icon: 'ri-home-4-line', products: 1567, subcategories: 10, status: 'Active', order: 3 },
    { id: 4, name: 'Machinery', slug: 'machinery', icon: 'ri-settings-3-line', products: 987, subcategories: 6, status: 'Active', order: 4 },
    { id: 5, name: 'Beauty & Personal Care', slug: 'beauty-personal-care', icon: 'ri-heart-pulse-line', products: 1234, subcategories: 7, status: 'Active', order: 5 },
    { id: 6, name: 'Sports & Entertainment', slug: 'sports-entertainment', icon: 'ri-basketball-line', products: 876, subcategories: 5, status: 'Inactive', order: 6 },
  ];

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Category Management
          </h1>
          <p className="text-gray-600 mt-2">Organize and manage product categories and subcategories</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-lg whitespace-nowrap"
        >
          <i className="ri-add-line"></i>
          <span className="font-semibold">Add Category</span>
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <i className={`${category.icon} text-2xl text-white`}></i>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                category.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {category.status}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
            <p className="text-sm text-gray-500 mb-4">/{category.slug}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Products</p>
                <p className="text-lg font-bold text-gray-900">{category.products}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Subcategories</p>
                <p className="text-lg font-bold text-gray-900">{category.subcategories}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setShowEditModal(true);
                }}
                className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium whitespace-nowrap"
              >
                <i className="ri-edit-line mr-1"></i>
                Edit
              </button>
              <button className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all text-sm font-medium whitespace-nowrap">
                <i className="ri-list-check"></i>
              </button>
              <button className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all text-sm font-medium whitespace-nowrap">
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Category Modal */}
      {showAddModal && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowAddModal(false)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Add New Category</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category Name</label>
                  <input type="text" placeholder="e.g., Electronics" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">URL Slug</label>
                  <input type="text" placeholder="e.g., electronics" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Icon Class</label>
                  <input type="text" placeholder="e.g., ri-smartphone-line" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea rows={3} placeholder="Category description..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Display Order</label>
                    <input type="number" placeholder="1" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all whitespace-nowrap">
                    Add Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Edit Category Modal */}
      {showEditModal && selectedCategory && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowEditModal(false)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Edit Category</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category Name</label>
                  <input type="text" defaultValue={selectedCategory.name} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">URL Slug</label>
                  <input type="text" defaultValue={selectedCategory.slug} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Icon Class</label>
                  <input type="text" defaultValue={selectedCategory.icon} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Display Order</label>
                    <input type="number" defaultValue={selectedCategory.order} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                    <select defaultValue={selectedCategory.status} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all whitespace-nowrap">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
