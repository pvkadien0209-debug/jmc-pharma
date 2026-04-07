import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ChevronRight, BookOpen, Clock } from "lucide-react";
import { blogs } from "@/data/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientImage from "@/components/ClientImage";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return { title: "Not Found" };
  return {
    title: `${blog.title} | JMC Pharma`,
    description: blog.content.substring(0, 160),
  };
}

const FALLBACK_BLOG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23e0f2fe'/%3E%3Ctext x='200' y='110' text-anchor='middle' font-size='60' fill='%230284c7'%3E%F0%9F%93%9D%3C/text%3E%3C/svg%3E";

const FALLBACK_THUMB =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23e0f2fe' rx='8'/%3E%3Ctext x='40' y='50' text-anchor='middle' font-size='32' fill='%230284c7'%3E%F0%9F%93%9D%3C/text%3E%3C/svg%3E";

export default function BlogPage({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  const otherBlogs = blogs.filter((b) => b.slug !== blog.slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-slate-500 flex-wrap">
            <Link href="/" className="hover:text-primary-600 transition-colors">Trang chủ</Link>
            <ChevronRight size={14} />
            <Link href="/#blogs" className="hover:text-primary-600 transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-slate-800 font-semibold truncate max-w-xs">{blog.title}</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <Link
            href="/#blogs"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Quay lại blog
          </Link>

          {/* Article */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            {/* Hero image */}
            <div className="relative h-56 sm:h-72 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
              <ClientImage
                src={blog.image}
                alt={blog.title}
                fallbackSrc={FALLBACK_BLOG}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-3">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {blog.category}
                  </span>
                </div>
                <h1 className="text-white font-black text-xl sm:text-3xl leading-tight">
                  {blog.title}
                </h1>
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 px-6 py-4 border-b border-slate-100 flex-wrap">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <BookOpen size={14} />
                <span>JMC Pharma</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Clock size={14} />
                <span>3 phút đọc</span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-primary-600 text-sm font-semibold">{blog.category}</span>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="space-y-5">
                {blog.content.split("\n\n").map((paragraph, i) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  return (
                    <p key={i} className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              {/* Disclaimer */}
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <p className="text-amber-800 text-xs font-semibold mb-1">⚠️ Lưu ý y khoa</p>
                <p className="text-amber-700 text-xs leading-relaxed">
                  Thông tin trong bài viết chỉ mang tính chất tham khảo. Vui lòng tham khảo ý kiến bác sĩ chuyên khoa trước khi sử dụng bất kỳ sản phẩm y tế nào.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-white font-bold">Tìm hiểu thêm về sản phẩm?</p>
                  <p className="text-blue-200 text-sm">Liên hệ JMC Pharma để được tư vấn miễn phí</p>
                </div>
                <a
                  href="/#contact"
                  className="shrink-0 bg-white text-primary-700 hover:bg-primary-50 px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap"
                >
                  Liên hệ ngay →
                </a>
              </div>
            </div>
          </article>

          {/* Other blogs */}
          {otherBlogs.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-black text-slate-800 mb-5">Bài viết khác</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {otherBlogs.slice(0, 4).map((b) => (
                  <Link
                    key={b.slug}
                    href={`/blogs/${b.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all flex"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary-50 shrink-0 overflow-hidden">
                      <ClientImage
                        src={b.image}
                        alt={b.title}
                        fallbackSrc={FALLBACK_THUMB}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-3 flex-1 min-w-0">
                      <span className="text-xs font-bold text-primary-500 block mb-1">{b.category}</span>
                      <p className="text-slate-800 font-bold text-xs sm:text-sm leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">
                        {b.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
