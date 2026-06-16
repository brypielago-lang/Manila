import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, PhoneCall, ChevronUp, X } from "lucide-react";
import { cn } from "../../lib/utils";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hideOnEnrollment = location.pathname.includes('/enrollment');

  if (hideOnEnrollment) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Messenger Button */}
        <button
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-xl hover:bg-[#0073e6] hover:scale-110 active:scale-95 transition-all"
          aria-label="Chat on Messenger"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-4 whitespace-nowrap rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
            Chat with Admissions
          </span>
        </button>

        {/* WhatsApp Button */}
        <button
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <PhoneCall className="h-6 w-6" />
          <span className="absolute right-full mr-4 whitespace-nowrap rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
            Call Us
          </span>
        </button>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white shadow-xl hover:bg-neutral-900 transition-all hover:scale-110 active:scale-95",
            showScrollTop ? "translate-y-0 opacity-100 visible" : "translate-y-4 opacity-0 invisible"
          )}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>

      {/* Sticky Mobile CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-white border-t border-neutral-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 flex gap-3">
        <Link
          to="/admissions"
          className="flex-1 flex items-center justify-center rounded-md border border-primary py-2.5 text-sm font-bold text-primary bg-white"
        >
          Inquire
        </Link>
        <Link
          to="/enrollment"
          className="flex-[2] flex items-center justify-center rounded-md bg-secondary py-2.5 text-sm font-bold text-white shadow-sm"
        >
          Enroll Now
        </Link>
      </div>
    </>
  );
}
