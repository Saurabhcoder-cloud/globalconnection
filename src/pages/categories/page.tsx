import { useNavigate } from 'react-router-dom';

export default function CategoriesPage() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Electronics & Technology',
      icon: 'ri-smartphone-line',
      subcategories: ['Consumer Electronics', 'Computer Hardware', 'Mobile Accessories', 'Audio & Video', 'Smart Home Devices'],
      productCount: 12450,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      name: 'Machinery & Equipment',
      icon: 'ri-settings-3-line',
      subcategories: ['Industrial Machinery', 'Construction Equipment', 'Agricultural Machinery', 'Manufacturing Tools', 'Power Tools'],
      productCount: 8320,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 3,
      name: 'Textiles & Apparel',
      icon: 'ri-shirt-line',
      subcategories: ['Clothing & Garments', 'Fabrics & Materials', 'Home Textiles', 'Fashion Accessories', 'Footwear'],
      productCount: 15680,
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 4,
      name: 'Home & Garden',
      icon: 'ri-home-4-line',
      subcategories: ['Furniture', 'Home Decor', 'Kitchen & Dining', 'Garden Tools', 'Lighting'],
      productCount: 9540,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 5,
      name: 'Chemicals & Materials',
      icon: 'ri-flask-line',
      subcategories: ['Industrial Chemicals', 'Raw Materials', 'Plastics & Polymers', 'Adhesives & Sealants', 'Paints & Coatings'],
      productCount: 6230,
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 6,
      name: 'Food & Beverage',
      icon: 'ri-restaurant-line',
      subcategories: ['Food Products', 'Beverages', 'Food Ingredients', 'Packaging', 'Processing Equipment'],
      productCount: 11890,
      color: 'from-yellow-500 to-amber-600'
    },
    {
      id: 7,
      name: 'Construction & Building',
      icon: 'ri-building-2-line',
      subcategories: ['Building Materials', 'Hardware', 'Plumbing & HVAC', 'Electrical Supplies', 'Safety Equipment'],
      productCount: 7450,
      color: 'from-slate-500 to-gray-600'
    },
    {
      id: 8,
      name: 'Automotive & Transport',
      icon: 'ri-car-line',
      subcategories: ['Auto Parts', 'Vehicle Accessories', 'Tires & Wheels', 'Tools & Equipment', 'Motorcycle Parts'],
      productCount: 10120,
      color: 'from-cyan-500 to-teal-600'
    },
    {
      id: 9,
      name: 'Beauty & Personal Care',
      icon: 'ri-heart-line',
      subcategories: ['Cosmetics', 'Skincare', 'Hair Care', 'Personal Hygiene', 'Beauty Tools'],
      productCount: 8760,
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 10,
      name: 'Sports & Entertainment',
      icon: 'ri-basketball-line',
      subcategories: ['Sports Equipment', 'Fitness Gear', 'Outdoor Recreation', 'Gaming', 'Musical Instruments'],
      productCount: 6890,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 11,
      name: 'Office & School Supplies',
      icon: 'ri-briefcase-line',
      subcategories: ['Stationery', 'Office Furniture', 'Office Electronics', 'School Supplies', 'Printing & Copying'],
      productCount: 5420,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 12,
      name: 'Packaging & Printing',
      icon: 'ri-inbox-line',
      subcategories: ['Packaging Materials', 'Printing Services', 'Labels & Tags', 'Boxes & Containers', 'Packaging Machinery'],
      productCount: 4680,
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 13,
      name: 'Health & Medical',
      icon: 'ri-heart-pulse-line',
      subcategories: ['Medical Equipment', 'Healthcare Supplies', 'Pharmaceuticals', 'Diagnostic Tools', 'Personal Protective Equipment'],
      productCount: 7230,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 14,
      name: 'Energy & Environment',
      icon: 'ri-leaf-line',
      subcategories: ['Solar Products', 'Wind Energy', 'Energy Storage', 'Environmental Equipment', 'Renewable Energy'],
      productCount: 3890,
      color: 'from-green-600 to-emerald-700'
    },
    {
      id: 15,
      name: 'Security & Protection',
      icon: 'ri-shield-line',
      subcategories: ['Security Systems', 'Surveillance Equipment', 'Access Control', 'Fire Safety', 'Personal Protection'],
      productCount: 5670,
      color: 'from-gray-600 to-slate-700'
    },
    {
      id: 16,
      name: 'Toys & Hobbies',
      icon: 'ri-gamepad-line',
      subcategories: ['Toys', 'Games', 'Hobby Supplies', 'Collectibles', 'Educational Toys'],
      productCount: 9120,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Browse All Categories
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our comprehensive range of product categories and find exactly what you need
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => navigate(`/products?category=${category.id}`)}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{category.productCount.toLocaleString()} products</p>
                <div className="space-y-1">
                  {category.subcategories.slice(0, 3).map((sub, index) => (
                    <p key={index} className="text-xs text-gray-600">• {sub}</p>
                  ))}
                  {category.subcategories.length > 3 && (
                    <p className="text-xs text-emerald-600 font-medium">+{category.subcategories.length - 3} more</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Post a buying request and let suppliers come to you with their best offers
          </p>
          <button
            onClick={() => navigate('/buyer/rfq')}
            className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap"
          >
            Post Buying Request
          </button>
        </div>
      </section>
    </div>
  );
}
