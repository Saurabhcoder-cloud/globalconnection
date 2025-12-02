import { lazy } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import BuyerLayout from '@/components/layout/BuyerLayout';
import AdminLayout from '@/components/layout/AdminLayout';
import SupplierLayout from '@/components/layout/SupplierLayout';

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
const BuyerRFQCreatePage = lazy(() => import('../pages/buyer/rfq/create'));
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
const PricingLegacyPage = lazy(() => import('../pages/PricingPage'));

function PublicLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function BuyerShell() {
  return (
    <BuyerLayout>
      <Outlet />
    </BuyerLayout>
  );
}

function SupplierShell() {
  return (
    <SupplierLayout>
      <Outlet />
    </SupplierLayout>
  );
}

function AdminShell() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}

const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/home', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/product/:id', element: <ProductDetailPage /> },
      { path: '/suppliers', element: <SuppliersPage /> },
      { path: '/supplier/:id', element: <SupplierProfilePage /> },
      { path: '/categories', element: <CategoriesPage /> },
      { path: '/pricing', element: <PricingPage /> },
      { path: '/plans', element: <PricingLegacyPage /> },
      { path: '/ranking', element: <RankingPage /> },
      { path: '/buyers', element: <BuyersPage /> },
      { path: '/trade-shows', element: <TradeShowsPage /> },
      { path: '/news', element: <NewsPage /> },
      { path: '/trust', element: <TrustPage /> },
      { path: '/help', element: <HelpPage /> },
      { path: '/faq', element: <HelpPage /> },
      { path: '/terms', element: <TermsPage /> },
      { path: '/privacy', element: <PrivacyPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/become-supplier', element: <BecomeSupplierPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/auth/login', element: <LoginPage /> },
      { path: '/auth/register', element: <RegisterPage /> },
      { path: '/auth/supplier-register', element: <SupplierRegisterPage /> },
      { path: '/auth/forgot-password', element: <ForgotPasswordPage /> },
      { path: '/auth/verify-email', element: <VerifyEmailPage /> },
      { path: '/auth/admin-login', element: <AdminLoginPage /> },
    ],
  },
  {
    path: '/buyer',
    element: <BuyerShell />,
    children: [
      { path: 'dashboard', element: <BuyerDashboardPage /> },
      { path: 'profile', element: <BuyerProfilePage /> },
      { path: 'company', element: <CompanyProfilePage /> },
      { path: 'rfq', element: <BuyerRFQPage /> },
      { path: 'rfq/create', element: <BuyerRFQCreatePage /> },
      { path: 'orders', element: <BuyerOrdersPage /> },
      { path: 'messages', element: <BuyerMessagesPage /> },
      { path: 'inquiry-list', element: <InquiryListPage /> },
    ],
  },
  {
    path: '/supplier',
    element: <SupplierShell />,
    children: [
      { path: 'dashboard', element: <SupplierDashboardPage /> },
      { path: 'products', element: <SupplierProductsPage /> },
      { path: 'inquiries', element: <SupplierInquiriesPage /> },
      { path: 'orders', element: <SupplierOrdersPage /> },
      { path: 'messages', element: <SupplierMessagesPage /> },
      { path: 'company', element: <SupplierCompanyPage /> },
      { path: 'analytics', element: <SupplierAnalyticsPage /> },
      { path: 'reviews', element: <SupplierReviewsPage /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminShell />,
    children: [
      { path: 'dashboard', element: <AdminDashboardPage /> },
      { path: 'buyers', element: <AdminBuyersPage /> },
      { path: 'suppliers', element: <AdminSuppliersPage /> },
      { path: 'products', element: <AdminProductsPage /> },
      { path: 'categories', element: <AdminCategoriesPage /> },
      { path: 'orders', element: <AdminOrdersPage /> },
      { path: 'content', element: <AdminContentPage /> },
      { path: 'support', element: <AdminSupportPage /> },
      { path: 'disputes', element: <AdminDisputesPage /> },
      { path: 'analytics', element: <AdminAnalyticsPage /> },
      { path: 'settings', element: <AdminSettingsPage /> },
    ],
  },
  {
    path: '*',
    element: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
  },
];

export default routes;
