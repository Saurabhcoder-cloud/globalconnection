import { Link } from 'react-router-dom';
import { Globe2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                <Globe2 className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">Global Connection 21</span>
            </div>
            <p className="text-sm text-slate-200/80">
              A trusted B2B marketplace connecting verified suppliers and buyers worldwide.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Marketplace</h3>
            <ul className="space-y-2 text-sm text-slate-200/80">
              <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
              <li><Link to="/suppliers" className="hover:text-foreground">Suppliers</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-slate-200/80">
              <li><Link to="/help" className="hover:text-foreground">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-slate-200/80">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
              <li><Link to="/become-supplier" className="hover:text-foreground">Become a Supplier</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-200/80">
          <p>&copy; 2024 Global Connection 21. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
