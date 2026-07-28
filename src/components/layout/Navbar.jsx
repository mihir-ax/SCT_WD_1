import { useState, useEffect } from 'react';
import { Menu, X, Hexagon, Moon, Sun } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { cn } from '../../utils/cn';
import { Container } from '../ui/Container';

export const Navbar = () => {
  const isScrolled = useScrollPosition(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <Hexagon className="h-8 w-8 text-blue-600 transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              SCT
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors group py-2",
                  isScrolled ? "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white" : "text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-white"
                )}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-slate-500"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 dark:text-slate-300 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 py-2 border-b border-slate-100 dark:border-slate-800 last:border-none"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
};
