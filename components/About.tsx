"use client";
import { useEffect, useRef } from "react";
import { Shield, Award, Users, Truck, Heart, Star } from "lucide-react";
import { companyInfo, activities } from "@/data/data";

const values = [
  { icon: Shield, label: "An toàn", desc: "Sản phẩm đạt chuẩn quốc tế", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Award, label: "Chất lượng", desc: "Nhập khẩu chính hãng", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Users, label: "Đội ngũ", desc: "Chuyên nghiệp, tâm huyết", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: Truck, label: "Phân phối", desc: "Toàn quốc, đúng hẹn", color: "text-orange-600", bg: "bg-orange-50" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Về chúng tôi
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">
            Giới thiệu <span className="gradient-text">JMC Pharma</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Doanh nghiệp dược phẩm chuyên cung cấp giải pháp điều trị khớp chất lượng cao
          </p>
        </div>

        {/* Main info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div className="animate-on-scroll space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-bold text-primary-500 uppercase tracking-wider">Tên tiếng Việt</p>
              <h3 className="text-lg font-bold text-slate-800">{companyInfo.nameVi}</h3>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-primary-500 uppercase tracking-wider">Tên tiếng Anh</p>
              <h3 className="text-base font-semibold text-slate-700">{companyInfo.nameEn}</h3>
            </div>
            <div className="flex gap-6">
              <div>
                <p className="text-xs font-bold text-primary-500 uppercase tracking-wider">Năm thành lập</p>
                <p className="text-2xl font-black text-slate-800 mt-1">{companyInfo.founded}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-primary-500 uppercase tracking-wider">MST</p>
                <p className="text-lg font-bold text-slate-700 mt-1">{companyInfo.taxCode}</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">{companyInfo.description}</p>

            {/* Slogan */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Star size={16} className="text-yellow-300" fill="currentColor" />
                <p className="text-white/80 text-xs font-semibold uppercase tracking-wider">Slogan</p>
              </div>
              <p className="text-white font-black text-xl">"{companyInfo.slogan}"</p>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            {values.map((v) => (
              <div
                key={v.label}
                className={`${v.bg} rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow`}
              >
                <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm`}>
                  <v.icon size={20} className={v.color} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{v.label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities section */}
        <div className="animate-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <Heart size={20} className="text-primary-600" />
            <h3 className="text-2xl font-black text-slate-800">Hoạt động nội bộ</h3>
            <span className="flex-1 h-px bg-slate-100" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, i) => (
              <div
                key={activity.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 animate-on-scroll"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                  <img
                    src={activity.thumbnail}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-slate-700">
                    {activity.year}
                  </div>
                  <div className="absolute bottom-3 left-3 text-2xl">{activity.emoji}</div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-bold text-slate-800 text-sm leading-snug">{activity.title}</h4>
                    <span className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold ${
                      activity.type === "travel"
                        ? "bg-accent-50 text-accent-700"
                        : "bg-primary-50 text-primary-700"
                    }`}>
                      {activity.type === "travel" ? "Du lịch" : "Sự kiện"}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
