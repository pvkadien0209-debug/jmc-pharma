import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-black text-primary-200 mb-4">404</div>
        <h1 className="text-2xl font-black text-slate-800 mb-3">Trang không tồn tại</h1>
        <p className="text-slate-500 mb-8">Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-2xl font-bold transition-all"
        >
          ← Về trang chủ
        </Link>
      </div>
    </div>
  );
}
