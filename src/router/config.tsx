import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ProductsPage = lazy(() => import('../pages/products/page'));
const ProductDetailPage = lazy(() => import('../pages/product-detail/page'));
const SuppliersPage = lazy(() => import('../pages/suppliers/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

// Auth Pages
const LoginPage = lazy(() => import('../pages/auth/login/page'));
const RegisterPage = lazy(() => import('../pages/auth/register/page'));
const SupplierRegisterPage = lazy(() => import('../pages/auth/supplier-register/page'));
const ForgotPasswordPage = lazy(() => import('../pages/auth/forgot-password/page'));
const VerifyEmailPage = lazy(() => import('../pages/auth/verify-email/page'));
const AdminLoginPage = lazy(() => import('../pages/auth/admin-login/page'));

// Buyer Pages
const BuyerDashboardPage = lazy(() => import('../pages/buyer/dashboard/page'));
const BuyerProfilePage = lazy(() => import('../pages/buyer/profile/page'));
const CompanyProfilePage = lazy(() => import('../pages/buyer/company/page'));
const BuyerRFQPage = lazy(() => import('../pages/buyer/rfq/page'));
const BuyerOrdersPage = lazy(() => import('../pages/buyer/orders/page'));
const BuyerMessagesPage = lazy(() => import('../pages/buyer/messages/page'));
const InquiryListPage = lazy(() => import('../pages/buyer/inquiry-list/page'));

// Supplier Pages
const SupplierDashboardPage = lazy(() => import('../pages/supplier/dashboard/page'));
const SupplierProductsPage = lazy(() => import('../pages/supplier/products/page'));
const SupplierInquiriesPage = lazy(() => import('../pages/supplier/inquiries/page'));
const SupplierOrdersPage = lazy(() => import('../pages/supplier/orders/page'));
const SupplierMessagesPage = lazy(() => import('../pages/supplier/messages/page'));
const SupplierCompanyPage = lazy(() => import('../pages/supplier/company/page'));
const SupplierAnalyticsPage = lazy(() => import('../pages/supplier/analytics/page'));
const SupplierReviewsPage = lazy(() => import('../pages/supplier/reviews/page'));

// Admin Pages
const AdminDashboardPage = lazy(() => import('../pages/admin/dashboard/page'));
const AdminBuyersPage = lazy(() => import('../pages/admin/buyers/page'));
const AdminSuppliersPage = lazy(() => import('../pages/admin/suppliers/page'));
const AdminProductsPage = lazy(() => import('../pages/admin/products/page'));
const AdminCategoriesPage = lazy(() => import('../pages/admin/categories/page'));
const AdminOrdersPage = lazy(() => import('../pages/admin/orders/page'));
const AdminContentPage = lazy(() => import('../pages/admin/content/page'));
const AdminSupportPage = lazy(() => import('../pages/admin/support/page'));
const AdminDisputesPage = lazy(() => import('../pages/admin/disputes/page'));
const AdminAnalyticsPage = lazy(() => import('../pages/admin/analytics/page'));
const AdminSettingsPage = lazy(() => import('../pages/admin/settings/page'));

// Public Pages
const PricingPage = lazy(() => import('../pages/pricing/page'));
const RankingPage = lazy(() => import('../pages/ranking/page'));
const BuyersPage = lazy(() => import('../pages/buyers/page'));
const TradeShowsPage = lazy(() => import('../pages/trade-shows/page'));
const NewsPage = lazy(() => import('../pages/news/page'));
const TrustPage = lazy(() => import('../pages/trust/page'));
const HelpPage = lazy(() => import('../pages/help/page'));
const TermsPage = lazy(() => import('../pages/terms/page'));
const PrivacyPage = lazy(() => import('../pages/privacy/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const BecomeSupplierPage = lazy(() => import('../pages/become-supplier/page'));
const SupplierProfilePage = lazy(() => import('../pages/supplier-profile/page'));
const CategoriesPage = lazy(() => import('../pages/categories/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/product/:id',
    element: <ProductDetailPage />,
  },
  {
    path: '/suppliers',
    element: <SuppliersPage />,
  },
  {
    path: '/supplier/:id',
    element: <SupplierProfilePage />,
  },
  {
    path: '/categories',
    element: <CategoriesPage />,
  },
  {
    path: '/pricing',
    element: <PricingPage />,
  },
  {
    path: '/ranking',
    element: <RankingPage />,
  },
  {
    path: '/buyers',
    element: <BuyersPage />,
  },
  {
    path: '/trade-shows',
    element: <TradeShowsPage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
  {
    path: '/trust',
    element: <TrustPage />,
  },
  {
    path: '/help',
    element: <HelpPage />,
  },
  {
    path: '/faq',
    element: <HelpPage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },
  {
    path: '/privacy',
    element: <PrivacyPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/become-supplier',
    element: <BecomeSupplierPage />,
  },
  // Auth Routes
  {
    path: '/auth/login',
    element: <LoginPage />,
  },
  {
    path: '/auth/register',
    element: <RegisterPage />,
  },
  {
    path: '/auth/supplier-register',
    element: <SupplierRegisterPage />,
  },
  {
    path: '/auth/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/auth/verify-email',
    element: <VerifyEmailPage />,
  },
  {
    path: '/auth/admin-login',
    element: <AdminLoginPage />,
  },
  // Buyer Routes
  {
    path: '/buyer/dashboard',
    element: <BuyerDashboardPage />,
  },
  {
    path: '/buyer/profile',
    element: <BuyerProfilePage />,
  },
  {
    path: '/buyer/company',
    element: <CompanyProfilePage />,
  },
  {
    path: '/buyer/rfq',
    element: <BuyerRFQPage />,
  },
  {
    path: '/buyer/orders',
    element: <BuyerOrdersPage />,
  },
  {
    path: '/buyer/messages',
    element: <BuyerMessagesPage />,
  },
  {
    path: '/buyer/inquiry-list',
    element: <InquiryListPage />,
  },
  // Supplier Routes
  {
    path: '/supplier/dashboard',
    element: <SupplierDashboardPage />,
  },
  {
    path: '/supplier/products',
    element: <SupplierProductsPage />,
  },
  {
    path: '/supplier/inquiries',
    element: <SupplierInquiriesPage />,
  },
  {
    path: '/supplier/orders',
    element: <SupplierOrdersPage />,
  },
  {
    path: '/supplier/messages',
    element: <SupplierMessagesPage />,
  },
  {
    path: '/supplier/company',
    element: <SupplierCompanyPage />,
  },
  {
    path: '/supplier/analytics',
    element: <SupplierAnalyticsPage />,
  },
  {
    path: '/supplier/reviews',
    element: <SupplierReviewsPage />,
  },
  // Admin Routes
  {
    path: '/admin/dashboard',
    element: <AdminDashboardPage />,
  },
  {
    path: '/admin/buyers',
    element: <AdminBuyersPage />,
  },
  {
    path: '/admin/suppliers',
    element: <AdminSuppliersPage />,
  },
  {
    path: '/admin/products',
    element: <AdminProductsPage />,
  },
  {
    path: '/admin/categories',
    element: <AdminCategoriesPage />,
  },
  {
    path: '/admin/orders',
    element: <AdminOrdersPage />,
  },
  {
    path: '/admin/content',
    element: <AdminContentPage />,
  },
  {
    path: '/admin/support',
    element: <AdminSupportPage />,
  },
  {
    path: '/admin/disputes',
    element: <AdminDisputesPage />,
  },
  {
    path: '/admin/analytics',
    element: <AdminAnalyticsPage />,
  },
  {
    path: '/admin/settings',
    element: <AdminSettingsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
