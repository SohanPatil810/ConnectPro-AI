import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

/**
 * Footer component with three columns and copyright details.
 */
function Footer() {
  return (
    <footer className="bg-slate-950/80 border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1 rounded bg-indigo-500/10 text-indigo-400">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-bold text-lg text-white">ConnectPro AI</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-4">
              Create professional, highly-personalized networking messages, LinkedIn requests, and referrals in seconds using artificial intelligence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/generator" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Message Generator
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                  About ConnectPro
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-500 text-sm">Groq API</span>
              </li>
              <li>
                <span className="text-slate-500 text-sm">Llama-3.3-70b</span>
              </li>
              <li>
                <span className="text-slate-500 text-sm">Tailwind CSS v4</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} ConnectPro AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 bg-indigo-500/5 border border-indigo-500/10 px-3 py-1 rounded-full text-xs text-indigo-400 font-medium">
            <Sparkles className="h-3 w-3" />
            Built with Advanced AI
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
