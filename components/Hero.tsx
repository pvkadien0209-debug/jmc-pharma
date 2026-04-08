"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, Phone, ChevronRight } from "lucide-react";
import { companyInfo } from "@/data/data";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProducts = () => {
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-10 dot-pattern" />
      </div>

      {/* Background image overlay (replace with actual image) */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-blue-100">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              Dược phẩm chất lượng cao
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              <span className="text-white">JMC</span>{" "}
              <span className="text-accent-400">Pharma</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-100 block mt-2">
                {companyInfo.slogan}
              </span>
            </h1>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-lg">
              Chuyên phân phối các sản phẩm tiêm nội khớp – Hyaluronic Acid thế
              hệ mới, giúp bệnh nhân giảm đau và phục hồi chức năng vận động.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "6+", label: "Sản phẩm" },
                { value: "100+", label: "Bệnh viện" },
                { value: "30+", label: "Hội nghị" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-black text-accent-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-blue-200 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all active:scale-95 shadow-lg shadow-accent-900/30"
              >
                <Phone size={18} />
                Liên hệ ngay
              </button>
              <button
                onClick={scrollToProducts}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all"
              >
                Xem sản phẩm
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right - Visual card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="glass-card rounded-3xl p-6 shadow-2xl border border-white/30 bg-white/10 backdrop-blur-md">
                {/* Background image div */}
                <div
                  className="rounded-2xl h-64 mb-4 bg-cover bg-center bg-no-repeat relative overflow-hidden"
                  style={{ backgroundImage: "url('/img/Hialurom Hondro.jpg')" }}
                >
                  {/* Subtle inner overlay để chữ/badge bên dưới dễ đọc nếu cần */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </div>

                <h3 className="text-gray-900 font-bold text-lg">
                  Tiêm nội khớp HA
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  Acid Hyaluronic – Giải pháp điều trị thoái hóa khớp hiệu quả
                </p>
                <div className="flex gap-2 mt-4">
                  {["An toàn", "Hiệu quả", "Chính hãng"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs font-semibold border border-accent-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-xl animate-float">
                <p className="text-primary-700 font-bold text-sm">
                  ✓ Nhập khẩu chính hãng
                </p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent-500 rounded-2xl px-4 py-2 shadow-xl">
                <p className="text-white font-bold text-sm">
                  🏥 100+ Bệnh viện lớn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}
