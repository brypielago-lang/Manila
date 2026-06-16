import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, GraduationCap, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Admissions", href: "/admissions" },
  { name: "Scholarships", href: "/scholarships" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white transition-transform group-hover:scale-105">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <span className="block font-display text-xl font-bold leading-none text-primary">
              EduFuture
            </span>
            <span className="block text-xs font-medium tracking-wider text-secondary-dark">
              COLLEGE & SHS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-primary",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-neutral-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/admissions"
            className="px-5 py-2 text-sm font-bold text-primary border-2 border-primary rounded-full hover:bg-neutral-50 transition-colors"
          >
            Request Info
          </Link>
          <Link
            to="/enrollment"
            className="px-6 py-2 text-sm font-bold text-white bg-primary rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-md text-primary hover:bg-neutral-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "block px-2 py-2 text-base font-semibold",
                  location.pathname === link.href
                    ? "text-primary bg-primary/5 rounded-md"
                    : "text-neutral-600"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/admissions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center rounded-full border-2 border-primary py-2.5 text-sm font-bold text-primary hover:bg-neutral-50 transition-colors"
              >
                Request Info
              </Link>
              <Link
                to="/enrollment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center rounded-full bg-primary py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                Enroll Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
