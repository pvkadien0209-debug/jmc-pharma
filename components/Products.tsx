"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { products } from "@/data/data";

export default function Products() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={ref} className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Danh mục sản phẩm
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">
            Sản phẩm <span className="gradient-text">tiêm khớp</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Các sản phẩm Hyaluronic Acid chất lượng cao, nhập khẩu chính hãng phân phối độc quyền
          </p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="product-card group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 animate-on-scroll"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image area with background */}
              <div
                className="relative h-56 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url('${product.image}')` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/30 to-transparent" />
                {/* Product image centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-40 max-w-[70%] object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23e0f2fe' rx='16'/%3E%3Ctext x='60' y='65' text-anchor='middle' font-size='40' fill='%230284c7'%3E💊%3C/text%3E%3C/svg%3E";
                    }}
                  /> */}
                </div>
                {/* Product name on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-black text-lg drop-shadow">{product.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {product.shortDescription}
                </p>

                {/* Indications preview */}
                <div className="space-y-1.5">
                  {product.indications.slice(0, 2).map((ind, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-accent-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-xs">{ind}</span>
                    </div>
                  ))}
                  {product.indications.length > 2 && (
                    <p className="text-xs text-primary-500 font-medium pl-5">
                      +{product.indications.length - 2} chỉ định khác
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={`/products/${product.slug}`}
                  className="flex items-center justify-between w-full bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white px-4 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 group/btn"
                >
                  <span>Xem chi tiết</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
