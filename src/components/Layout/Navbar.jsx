import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

/**
 * Navbar component with a premium glassmorphism design.
 * Features desktop links, active state indicators, and a responsive mobile drawer.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Generator', path: '/generator' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="glass-strong fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10" role="navigation" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-bold text-xl tracking-tight gradient-text">
            ConnectPro AI
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 hover:text-white relative py-1 ${
                  isActive ? 'text-white' : 'text-slate-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link to="/generator">
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 glass-strong border-b border-white/10 animate-fade-in py-4 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 border-b border-white/5 last:border-0 ${
                location.pathname === link.path ? 'text-indigo-400' : 'text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/generator" onClick={() => setIsOpen(false)} className="w-full mt-2">
            <Button variant="gradient" size="md" className="w-full">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
