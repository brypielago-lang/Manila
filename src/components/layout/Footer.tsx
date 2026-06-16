import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="block font-display text-xl font-bold leading-none text-white">
                  EduFuture
                </span>
                <span className="block text-xs font-medium tracking-wider text-secondary">
                  COLLEGE & SHS
                </span>
              </div>
            </Link>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-xs">
              Empowering students for a brighter tomorrow through innovative, industry-aligned education in a modern learning environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-neutral-300 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-neutral-300 hover:text-white transition-colors text-sm">Academic Programs</Link></li>
              <li><Link to="/admissions" className="text-neutral-300 hover:text-white transition-colors text-sm">Admissions</Link></li>
              <li><Link to="/scholarships" className="text-neutral-300 hover:text-white transition-colors text-sm">Scholarships & Grants</Link></li>
              <li><Link to="/campus-life" className="text-neutral-300 hover:text-white transition-colors text-sm">Campus Life</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-sm text-neutral-300">123 University Avenue, Innovation District, Metro City 1000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-sm text-neutral-300">(02) 8123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-sm text-neutral-300">admissions@edufuture.edu</span>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Accreditations</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-dark/50 p-3 rounded flex items-center justify-center text-xs text-center border border-white/10">
                Government<br/>Recognized
              </div>
              <div className="bg-primary-dark/50 p-3 rounded flex items-center justify-center text-xs text-center border border-white/10">
                ISO 9001<br/>Certified
              </div>
            </div>
            <div className="mt-6">
              <Link to="/enrollment" className="block text-center w-full rounded border-2 border-secondary bg-transparent py-2 text-sm font-bold text-secondary hover:bg-secondary hover:text-white transition-colors">
                Apply Online Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} EduFuture College & Senior High School. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-neutral-400">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link to="/faqs" className="hover:text-white">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
