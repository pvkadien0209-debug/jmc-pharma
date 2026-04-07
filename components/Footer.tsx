"use client";
import Link from "next/link";
import { Facebook, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { companyInfo } from "@/data/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-black text-sm">JMC</span>
              </div>
              <div>
                <p className="text-white font-black text-lg leading-tight">
                  JMC Pharma
                </p>
                <p className="text-xs text-slate-400">
                  {companyInfo.shortName}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-sm">
              {companyInfo.description.substring(0, 180)}...
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
              <span>✦</span>
              {companyInfo.slogan}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Điều hướng
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Trang chủ", "#hero"],
                ["Giới thiệu", "#about"],
                ["Sản phẩm", "#products"],
                ["Blog", "#blogs"],
                ["Sự kiện", "#events"],
                ["Liên hệ", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-white hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Liên hệ
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <MapPin
                    size={14}
                    className="text-primary-400 mt-0.5 shrink-0"
                  />
                  <span>{companyInfo.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-primary-400 shrink-0" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-primary-400 shrink-0" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  <Facebook size={14} className="shrink-0" />
                  Facebook JMC Pharma
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {companyInfo.nameVi}. Bảo lưu mọi
            quyền.
          </p>
          <p>
            MST: {companyInfo.taxCode} · ĐKDN: {companyInfo.businessReg}
          </p>
        </div>
      </div>
    </footer>
  );
}
