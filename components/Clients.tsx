"use client";
import { useEffect, useRef } from "react";
import { Building2, Star } from "lucide-react";
import { clients } from "@/data/data";

export default function Clients() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Duplicate for seamless marquee
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Khách hàng & Đối tác
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">
            Tin dùng bởi các <span className="gradient-text">bệnh viện lớn</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            JMC Pharma tự hào là đối tác cung cấp sản phẩm tiêm khớp cho các cơ sở y tế uy tín
          </p>
        </div>

        {/* Marquee logos */}
        <div className="marquee-wrapper mb-12 animate-on-scroll">
          <div className="marquee-track gap-6">
            {doubled.map((client, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 hover:border-primary-300 hover:bg-primary-50 transition-colors group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = "none";
                    }}
                  />
                  <Building2 size={18} className="text-slate-400 absolute" />
                </div>
                <span className="text-slate-700 font-semibold text-sm whitespace-nowrap group-hover:text-primary-700 transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client, i) => (
            <div
              key={client.stt}
              className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-primary-200 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-lg animate-on-scroll"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Logo */}
              <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>`;
                    }
                  }}
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-primary-700 transition-colors mb-2">
                  {client.name}
                </h4>
                {/* <div className="flex flex-wrap gap-1">
                  {client.products.map((prod) => (
                    <span
                      key={prod}
                      className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold border border-primary-100"
                    >
                      {prod}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-8 animate-on-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "100+", label: "Bệnh viện đối tác" },
              { value: "100%", label: "Sản phẩm chính hãng" },
              { value: "2024", label: "Năm thành lập" },
              { value: "★★★★★", label: "Đánh giá dịch vụ" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-white font-black text-2xl sm:text-3xl">{item.value}</p>
                <p className="text-white/80 text-sm mt-1 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
