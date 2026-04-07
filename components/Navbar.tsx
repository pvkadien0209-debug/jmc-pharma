"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Blog", href: "#blogs" },
  { label: "Sự kiện", href: "#events" },
  { label: "Đối tác", href: "#clients" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-200">
              <span className="text-white font-black text-sm leading-none">JMC</span>
            </div>
            <div className="hidden sm:block">
              <p className={`font-black text-base leading-tight transition-colors ${scrolled ? "text-primary-700" : "text-white"}`}>
                JMC Pharma
              </p>
              <p className={`text-xs font-medium leading-tight transition-colors ${scrolled ? "text-slate-500" : "text-blue-100"}`}>
                Chất lượng chuẩn vàng
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`nav-link px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-slate-700 hover:text-primary-600 hover:bg-primary-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="tel:02822370456"
              className="hidden sm:flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-md shadow-primary-200 active:scale-95"
            >
              <Phone size={15} />
              <span className="hidden md:inline">Liên hệ</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:02822370456"
            className="flex items-center gap-2 mt-2 bg-primary-600 text-white px-4 py-3 rounded-xl text-sm font-semibold"
          >
            <Phone size={16} />
            Gọi ngay: (028) 22370456
          </a>
        </div>
      </div>
    </header>
  );
}
