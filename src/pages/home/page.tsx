import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const categories = [
    { id: 1, name: 'Electronics & Technology', icon: 'ri-smartphone-line', count: '12,450', color: 'from-blue-500 to-indigo-600' },
    { id: 2, name: 'Machinery & Equipment', icon: 'ri-settings-3-line', count: '8,320', color: 'from-orange-500 to-red-600' },
    { id: 3, name: 'Textiles & Apparel', icon: 'ri-shirt-line', count: '15,680', color: 'from-pink-500 to-rose-600' },
    { id: 4, name: 'Home & Garden', icon: 'ri-home-4-line', count: '9,540', color: 'from-green-500 to-emerald-600' },
    { id: 5, name: 'Chemicals & Materials', icon: 'ri-flask-line', count: '6,230', color: 'from-purple-500 to-violet-600' },
    { id: 6, name: 'Food & Beverage', icon: 'ri-restaurant-line', count: '11,890', color: 'from-yellow-500 to-amber-600' },
    { id: 7, name: 'Construction & Building', icon: 'ri-building-2-line', count: '7,450', color: 'from-slate-500 to-gray-600' },
    { id: 8, name: 'Automotive & Transport', icon: 'ri-car-line', count: '10,120', color: 'from-cyan-500 to-teal-600' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Industrial LED Flood Light 200W',
      image: 'https://readdy.ai/api/search-image?query=professional%20industrial%20LED%20flood%20light%20200W%20mounted%20on%20white%20wall%20in%20modern%20factory%20warehouse%20with%20bright%20illumination%20clean%20white%20background%20product%20photography%20high%20quality&width=400&height=400&seq=prod1&orientation=squarish',
      price: '$45.00 - $52.00',
      moq: '100 pieces',
      supplier: 'Bright Tech Industries',
      location: 'Shenzhen, China',
      verified: true,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Organic Cotton T-Shirts Wholesale',
      image: 'https://readdy.ai/api/search-image?query=stack%20of%20premium%20organic%20cotton%20t-shirts%20in%20various%20colors%20neatly%20folded%20on%20white%20surface%20minimalist%20clean%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prod2&orientation=squarish',
      price: '$3.50 - $5.20',
      moq: '500 pieces',
      supplier: 'Global Textile Co.',
      location: 'Mumbai, India',
      verified: true,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Stainless Steel Water Bottles',
      image: 'https://readdy.ai/api/search-image?query=sleek%20stainless%20steel%20water%20bottles%20in%20metallic%20silver%20finish%20standing%20upright%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prod3&orientation=squarish',
      price: '$2.80 - $4.50',
      moq: '1000 pieces',
      supplier: 'EcoLife Manufacturing',
      location: 'Guangzhou, China',
      verified: true,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Wireless Bluetooth Earbuds',
      image: 'https://readdy.ai/api/search-image?query=modern%20wireless%20bluetooth%20earbuds%20with%20charging%20case%20in%20matte%20black%20finish%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prod4&orientation=squarish',
      price: '$8.50 - $12.00',
      moq: '200 pieces',
      supplier: 'AudioTech Solutions',
      location: 'Seoul, South Korea',
      verified: true,
      rating: 4.6
    },
    {
      id: 5,
      name: 'Bamboo Cutting Board Set',
      image: 'https://readdy.ai/api/search-image?query=premium%20bamboo%20cutting%20boards%20in%20different%20sizes%20stacked%20neatly%20on%20white%20surface%20natural%20wood%20texture%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prod5&orientation=squarish',
      price: '$6.20 - $9.80',
      moq: '300 pieces',
      supplier: 'Natural Home Goods',
      location: 'Hanoi, Vietnam',
      verified: true,
      rating: 4.8
    },
    {
      id: 6,
      name: 'Solar Panel 300W Monocrystalline',
      image: 'https://readdy.ai/api/search-image?query=modern%20solar%20panel%20with%20blue%20monocrystalline%20cells%20in%20aluminum%20frame%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prod6&orientation=squarish',
      price: '$85.00 - $95.00',
      moq: '50 pieces',
      supplier: 'Green Energy Systems',
      location: 'California, USA',
      verified: true,
      rating: 4.9
    },
    {
      id: 7,
      name: 'Ceramic Coffee Mug Set',
      image: 'https://readdy.ai/api/search-image?query=elegant%20ceramic%20coffee%20mugs%20in%20pastel%20colors%20arranged%20in%20a%20row%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prod7&orientation=squarish',
      price: '$1.80 - $3.20',
      moq: '1000 pieces',
      supplier: 'Pottery Masters Ltd',
      location: 'Jingdezhen, China',
      verified: true,
      rating: 4.7
    },
    {
      id: 8,
      name: 'Yoga Mat Premium Non-Slip',
      image: 'https://readdy.ai/api/search-image?query=rolled%20premium%20yoga%20mat%20in%20teal%20color%20standing%20upright%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prod8&orientation=squarish',
      price: '$4.50 - $7.80',
      moq: '200 pieces',
      supplier: 'FitLife Sports',
      location: 'Taipei, Taiwan',
      verified: true,
      rating: 4.8
    },
  ];

  const featuredSuppliers = [
    {
      id: 1,
      name: 'TechVision Electronics Ltd',
      logo: 'https://readdy.ai/api/search-image?query=modern%20technology%20company%20logo%20with%20circuit%20board%20pattern%20in%20blue%20and%20white%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=sup1&orientation=squarish',
      category: 'Electronics & Components',
      location: 'Shenzhen, China',
      yearsInBusiness: 12,
      verified: true,
      products: 2450,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Global Textile Manufacturing',
      logo: 'https://readdy.ai/api/search-image?query=textile%20company%20logo%20with%20fabric%20weave%20pattern%20in%20warm%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=sup2&orientation=squarish',
      category: 'Textiles & Apparel',
      location: 'Mumbai, India',
      yearsInBusiness: 18,
      verified: true,
      products: 3200,
      rating: 4.8
    },
    {
      id: 3,
      name: 'EcoPackaging Solutions',
      logo: 'https://readdy.ai/api/search-image?query=eco-friendly%20packaging%20company%20logo%20with%20green%20leaf%20symbol%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=sup3&orientation=squarish',
      category: 'Packaging & Printing',
      location: 'Bangkok, Thailand',
      yearsInBusiness: 8,
      verified: true,
      products: 1850,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Precision Machinery Corp',
      logo: 'https://readdy.ai/api/search-image?query=industrial%20machinery%20company%20logo%20with%20gear%20symbol%20in%20metallic%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=sup4&orientation=squarish',
      category: 'Machinery & Equipment',
      location: 'Osaka, Japan',
      yearsInBusiness: 25,
      verified: true,
      products: 1420,
      rating: 4.9
    },
    {
      id: 5,
      name: 'Natural Foods International',
      logo: 'https://readdy.ai/api/search-image?query=organic%20food%20company%20logo%20with%20wheat%20grain%20symbol%20in%20natural%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=sup5&orientation=squarish',
      category: 'Food & Beverage',
      location: 'California, USA',
      yearsInBusiness: 15,
      verified: true,
      products: 980,
      rating: 4.8
    },
    {
      id: 6,
      name: 'BuildPro Construction Materials',
      logo: 'https://readdy.ai/api/search-image?query=construction%20company%20logo%20with%20building%20blocks%20symbol%20in%20strong%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=sup6&orientation=squarish',
      category: 'Construction & Building',
      location: 'Dubai, UAE',
      yearsInBusiness: 10,
      verified: true,
      products: 2100,
      rating: 4.7
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20global%20business%20network%20with%20interconnected%20nodes%20and%20lines%20representing%20international%20trade%20connections%20abstract%20digital%20technology%20background%20in%20deep%20blue%20and%20teal%20colors%20with%20glowing%20points%20of%20light%20professional%20corporate%20style%20high%20quality&width=1920&height=1080&seq=hero1&orientation=landscape"
            alt="Hero Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Connect with Global<br />B2B Suppliers
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Discover millions of products from verified manufacturers and wholesalers worldwide
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-full shadow-2xl p-2 flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, suppliers, or categories..."
                className="flex-1 px-6 py-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none rounded-full"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-all whitespace-nowrap"
              >
                <i className="ri-search-line text-xl"></i>
              </button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-1">2.5M+</div>
              <div className="text-sm text-white/80">Products</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-1">150K+</div>
              <div className="text-sm text-white/80">Suppliers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-1">180+</div>
              <div className="text-sm text-white/80">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-1">5M+</div>
              <div className="text-sm text-white/80">Buyers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Explore Top Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our diverse range of product categories and find exactly what your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => navigate(`/products?category=${category.id}`)}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count} products</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/categories')}
              className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white transition-all whitespace-nowrap"
            >
              View All Categories
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white" data-product-shop>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked quality products from verified suppliers with competitive pricing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-product-shop>
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                data-product-shop
              >
                <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.verified && (
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
                      <i className="ri-verified-badge-fill"></i>
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-emerald-600">{product.price}</span>
                    <div className="flex items-center space-x-1">
                      <i className="ri-star-fill text-yellow-400 text-sm"></i>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">MOQ: {product.moq}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900 truncate">{product.supplier}</p>
                      <p className="text-xs text-gray-500 flex items-center">
                        <i className="ri-map-pin-line mr-1"></i>
                        {product.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/products')}
              className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap"
            >
              Browse All Products
            </button>
          </div>
        </div>
      </section>

      {/* Featured Suppliers */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Featured Suppliers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with trusted manufacturers and wholesalers from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSuppliers.map((supplier) => (
              <div
                key={supplier.id}
                onClick={() => navigate(`/supplier/${supplier.id}`)}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={supplier.logo}
                      alt={supplier.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors truncate">
                      {supplier.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{supplier.category}</p>
                    <div className="flex items-center space-x-1">
                      <i className="ri-star-fill text-yellow-400 text-sm"></i>
                      <span className="text-sm text-gray-600">{supplier.rating}</span>
                    </div>
                  </div>
                  {supplier.verified && (
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                        <i className="ri-verified-badge-fill text-white text-sm"></i>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-map-pin-line mr-2 text-gray-400"></i>
                    {supplier.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-time-line mr-2 text-gray-400"></i>
                    {supplier.yearsInBusiness} years in business
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-shopping-bag-line mr-2 text-gray-400"></i>
                    {supplier.products.toLocaleString()} products
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-emerald-50 text-emerald-600 font-medium rounded-lg hover:bg-emerald-600 hover:text-white transition-all whitespace-nowrap">
                  View Supplier
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/suppliers')}
              className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white transition-all whitespace-nowrap"
            >
              View All Suppliers
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              How TradeHub Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your global B2B trading journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* For Buyers */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-shopping-cart-line"></i>
                </span>
                For Buyers
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">Search & Discover</h4>
                    <p className="text-sm text-gray-600">Browse millions of products and find verified suppliers that match your requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">Send Inquiries</h4>
                    <p className="text-sm text-gray-600">Contact suppliers directly, request quotes, and negotiate terms that work for your business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">Place Orders</h4>
                    <p className="text-sm text-gray-600">Secure your orders with confidence through our protected transaction system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">Track & Receive</h4>
                    <p className="text-sm text-gray-600">Monitor your shipments in real-time and receive quality products on schedule</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/register?type=buyer')}
                className="mt-8 px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap"
              >
                Register as Buyer
              </button>
            </div>

            {/* For Suppliers */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-store-line"></i>
                </span>
                For Suppliers
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">Create Your Profile</h4>
                    <p className="text-sm text-gray-600">Set up your company profile and showcase your business to millions of global buyers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">List Your Products</h4>
                    <p className="text-sm text-gray-600">Upload your product catalog with detailed descriptions, images, and competitive pricing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">Receive Inquiries</h4>
                    <p className="text-sm text-gray-600">Get connected with qualified buyers actively searching for your products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">Grow Your Business</h4>
                    <p className="text-sm text-gray-600">Manage orders, build relationships, and expand your global market reach</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/become-supplier')}
                className="mt-8 px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-all whitespace-nowrap"
              >
                Become a Supplier
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses already growing their trade on TradeHub
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate('/register?type=buyer')}
              className="px-8 py-4 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
            >
              Register as Buyer
            </button>
            <button
              onClick={() => navigate('/register?type=supplier')}
              className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white hover:text-emerald-600 transition-all whitespace-nowrap"
            >
              Register as Supplier
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}