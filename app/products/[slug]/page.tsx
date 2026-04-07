import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle, XCircle, BookOpen, ChevronRight } from "lucide-react";
import { products, blogs } from "@/data/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientImage from "@/components/ClientImage";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.seo.title} | JMC Pharma`,
    description: product.seo.description,
  };
}

const FALLBACK_PRODUCT =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e0f2fe' rx='24'/%3E%3Ctext x='100' y='115' text-anchor='middle' font-size='80' fill='%230284c7'%3E%F0%9F%92%8A%3C/text%3E%3C/svg%3E";

const FALLBACK_BLOG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23e0f2fe' rx='12'/%3E%3Ctext x='40' y='50' text-anchor='middle' font-size='32' fill='%230284c7'%3E%F0%9F%93%9D%3C/text%3E%3C/svg%3E";

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const relatedBlogs = blogs.filter((b) => product.blogs.includes(b.slug));
  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-slate-500 flex-wrap">
            <Link href="/" className="hover:text-primary-600 transition-colors">Trang chủ</Link>
            <ChevronRight size={14} />
            <Link href="/#products" className="hover:text-primary-600 transition-colors">Sản phẩm</Link>
            <ChevronRight size={14} />
            <span className="text-slate-800 font-semibold">{product.name}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Quay lại danh sách sản phẩm
          </Link>

          {/* Product hero */}
          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 flex items-center justify-center min-h-72 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 dot-pattern" />
              <ClientImage
                src={product.image}
                alt={product.name}
                fallbackSrc={FALLBACK_PRODUCT}
                className="max-h-64 max-w-full object-contain relative z-10 drop-shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-2 shadow-md">
                <p className="text-xs font-bold text-primary-600">✓ Nhập khẩu chính hãng</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-3">{product.name}</h1>
                <p className="text-slate-500 text-base leading-relaxed">{product.shortDescription}</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100">
                <h2 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-3 text-primary-600">
                  Mô tả sản phẩm
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-2">
                  {product.description.trim().split("\n").map((line, i) =>
                    line.trim() ? <p key={i}>{line.trim()}</p> : null
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-5">
                <p className="text-white font-bold mb-3">Cần tư vấn thêm?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:02822370456"
                    className="flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                  >
                    📞 Gọi ngay
                  </a>
                  <a
                    href="/#contact"
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                  >
                    ✉️ Gửi tin nhắn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Indications & Contraindications */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <h2 className="font-black text-lg text-slate-800">Chỉ định</h2>
              </div>
              <ul className="space-y-3">
                {product.indications.map((ind, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-slate-600 text-sm leading-relaxed">{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                  <XCircle size={20} className="text-rose-600" />
                </div>
                <h2 className="font-black text-lg text-slate-800">Chống chỉ định</h2>
              </div>
              <ul className="space-y-3">
                {product.contraindications.map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-rose-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <XCircle size={12} className="text-rose-500" />
                    </div>
                    <span className="text-slate-600 text-sm leading-relaxed">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related blogs */}
          {relatedBlogs.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={20} className="text-primary-600" />
                <h2 className="text-2xl font-black text-slate-800">Bài viết liên quan</h2>
                <span className="flex-1 h-px bg-slate-200" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blogs/${blog.slug}`}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all"
                  >
                    <div className="h-40 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
                      <ClientImage
                        src={blog.image}
                        alt={blog.title}
                        fallbackSrc={FALLBACK_BLOG}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {blog.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-800 text-sm leading-snug mb-2 group-hover:text-primary-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                        {blog.content.substring(0, 120)}...
                      </p>
                      <div className="flex items-center gap-1 text-primary-600 text-xs font-bold mt-3">
                        Đọc thêm <ChevronRight size={14} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Other products */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-black text-slate-800">Sản phẩm khác</h2>
              <span className="flex-1 h-px bg-slate-200" />
              <Link href="/#products" className="text-primary-600 hover:text-primary-700 text-sm font-semibold flex items-center gap-1">
                Xem tất cả <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {otherProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="group bg-white rounded-2xl p-4 border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all flex items-center gap-3"
                >
                  <div className="w-14 h-14 bg-primary-50 rounded-xl overflow-hidden flex items-center justify-center shrink-0">
                    <ClientImage
                      src={p.image}
                      alt={p.name}
                      fallbackSrc={FALLBACK_PRODUCT}
                      className="max-w-full max-h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-800 text-sm group-hover:text-primary-600 transition-colors">{p.name}</p>
                    <p className="text-slate-500 text-xs mt-0.5 line-clamp-1">{p.shortDescription}</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
