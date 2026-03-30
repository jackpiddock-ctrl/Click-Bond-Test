import { Link, Outlet } from "react-router-dom";
import { Search, MapPin, FileText, User, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "Technical Resources", path: "/resources" },
    { name: "About", path: "/about" },
    { name: "Support", path: "/support" },
    { name: "Contact", path: "/contact" },
  ];

  const utilityLinks = [
    { name: "Distributor Locator", icon: MapPin, path: "/distributors" },
    { name: "Request a Quote", icon: FileText, path: "/quote" },
    { name: "CAD / Downloads", icon: FileText, path: "/resources" },
    { name: "Customer Portal", icon: User, path: "/portal" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      {/* Utility Nav */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-6">
          {utilityLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center hover:text-white transition-colors"
            >
              <link.icon className="w-3 h-3 mr-1.5" />
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900 uppercase">
                  Click Bond
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Search & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <button className="text-slate-500 hover:text-blue-600 p-2">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="lg:hidden text-slate-500 hover:text-blue-600 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-slate-100 mt-4 pt-4">
                {utilityLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center px-3 py-2 text-base font-medium text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon className="w-4 h-4 mr-3" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
                <span className="font-bold text-lg tracking-tight text-white uppercase">
                  Click Bond
                </span>
              </Link>
              <p className="text-sm text-slate-400 max-w-sm mb-6">
                Pioneering adhesive-bonded fastening systems for aerospace, defense, marine, and industrial applications. No drilling required.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors"></div>
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors"></div>
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors"></div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products/studs" className="hover:text-blue-400 transition-colors">Studs</Link></li>
                <li><Link to="/products/nutplates" className="hover:text-blue-400 transition-colors">Nutplates</Link></li>
                <li><Link to="/products/mounts" className="hover:text-blue-400 transition-colors">Mounts & Cable Ties</Link></li>
                <li><Link to="/products/adhesives" className="hover:text-blue-400 transition-colors">Adhesives</Link></li>
                <li><Link to="/products/tooling" className="hover:text-blue-400 transition-colors">Installation Tooling</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Industries</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/industries/aerospace" className="hover:text-blue-400 transition-colors">Aerospace</Link></li>
                <li><Link to="/industries/defense" className="hover:text-blue-400 transition-colors">Defense</Link></li>
                <li><Link to="/industries/marine" className="hover:text-blue-400 transition-colors">Marine</Link></li>
                <li><Link to="/industries/rail" className="hover:text-blue-400 transition-colors">Rail</Link></li>
                <li><Link to="/industries/industrial" className="hover:text-blue-400 transition-colors">Industrial</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/resources/cad" className="hover:text-blue-400 transition-colors">CAD Downloads</Link></li>
                <li><Link to="/resources/datasheets" className="hover:text-blue-400 transition-colors">Datasheets</Link></li>
                <li><Link to="/resources/installation" className="hover:text-blue-400 transition-colors">Installation Instructions</Link></li>
                <li><Link to="/resources/approvals" className="hover:text-blue-400 transition-colors">Approvals & Certifications</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Click Bond, Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Use</Link>
              <Link to="/compliance" className="hover:text-slate-300 transition-colors">Export Compliance</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
