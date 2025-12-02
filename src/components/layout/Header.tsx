import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe2 } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isAuth = location.pathname.startsWith('/auth');

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <Globe2 className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold">Global Connection 21</span>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          <Link to="/products" className="text-sm font-medium transition-colors hover:text-emerald-600">
            Products
          </Link>
          <Link to="/suppliers" className="text-sm font-medium transition-colors hover:text-emerald-600">
            Suppliers
          </Link>
          <Link to="/categories" className="text-sm font-medium transition-colors hover:text-emerald-600">
            Categories
          </Link>
          <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-emerald-600">
            Pricing
          </Link>
          <Link to="/buyers" className="text-sm font-medium transition-colors hover:text-emerald-600">
            Buyer Hub
          </Link>
          <Link to="/help" className="text-sm font-medium transition-colors hover:text-emerald-600">
            Help
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          {!isAuth && (
            <Button variant="ghost" size="sm" asChild>
              <Link to="/become-supplier">Become a supplier</Link>
            </Button>
          )}
          <Button variant="outline" size="sm" asChild>
            <Link to="/buyer/rfq/create">Post RFQ</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/auth/login">Sign in</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
