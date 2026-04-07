import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JMC Pharma - Chất lượng chuẩn vàng, An toàn điều trị",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Công ty dược phân phối sản phẩm tiêm khớp - JMC Pharma cung cấp các giải pháp điều trị thoái hóa khớp với Hyaluronic Acid chất lượng cao.",
  keywords: [
    "tiêm khớp",
    "hyaluronic acid",
    "thoái hóa khớp",
    "dược phẩm",
    "JMC Pharma",
    "VISCOS 80H",
    "Hialurom Hondro",
    "điều trị khớp",
  ],
  openGraph: {
    title: "JMC Pharma",
    description: "Chất lượng chuẩn vàng - An toàn điều trị",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
