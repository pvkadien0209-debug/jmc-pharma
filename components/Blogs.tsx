"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, BookOpen } from "lucide-react";
import { blogs } from "@/data/data";

export default function Blogs() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : blogs.length - 1));
  const next = () => setCurrent((c) => (c < blogs.length - 1 ? c + 1 : 0));

  const blog = blogs[current];

  return (
    <section id="blogs" ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Kiến thức y khoa
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">
            Hỏi & <span className="gradient-text">Đáp</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Những câu hỏi thường gặp về điều trị khớp và sản phẩm JMC Pharma
          </p>
        </div>

        {/* Featured blog slideshow */}
        <div className="relative max-w-4xl mx-auto mb-12 animate-on-scroll">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl overflow-hidden shadow-2xl shadow-primary-200">
            <div className="grid md:grid-cols-5 min-h-64">
              {/* Image */}
              <div className="md:col-span-2 relative bg-primary-700">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 md:h-full object-cover opacity-80"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-700/50" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {blog.category}
                  </span>
                </div>
                {/* Fallback icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <BookOpen size={48} className="text-white/20" />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-primary-200 text-sm font-medium mb-3">
                    Bài viết {current + 1}/{blogs.length}
                  </p>
                  <h3 className="text-white font-black text-xl sm:text-2xl leading-snug mb-4">
                    {blog.title}
                  </h3>
                  <p className="text-primary-100 text-sm leading-relaxed line-clamp-3">
                    {blog.content.substring(0, 200)}...
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <a
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                  >
                    Đọc thêm
                    <ChevronRight size={16} />
                  </a>

                  {/* Navigation */}
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {blogs.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary-600" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Q&A expand cards */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {blogs.map((b, i) => (
            <div
              key={b.slug}
              className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-slate-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-100 shrink-0 overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23e0f2fe' rx='8'/%3E%3Ctext x='20' y='26' text-anchor='middle' font-size='18' fill='%230284c7'%3E?%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-primary-500 block mb-0.5">{b.category}</span>
                  <p className="font-bold text-slate-800 text-sm leading-snug">{b.title}</p>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                    expanded === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expanded content */}
              <div
                className={`blog-expand ${expanded === i ? "open" : ""}`}
              >
                <div className="px-5 pb-5 pt-0">
                  <div className="bg-white rounded-xl p-4 border border-slate-100">
                    {b.content.split("\n\n").map((para, idx) => (
                      <p key={idx} className="text-slate-600 text-sm leading-relaxed mb-3 last:mb-0">
                        {para.trim()}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
