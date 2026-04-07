# JMC Pharma Website

Website giới thiệu công ty **JMC Pharma** - Dược phẩm tiêm khớp chất lượng cao.

## Cài đặt & Chạy

```bash
# 1. Cài dependencies
npm install

# 2. Chạy development server
npm run dev
```

Mở trình duyệt tại: **http://localhost:3000**

---

## Cấu trúc thư mục

```
jmc-pharma/
├── app/
│   ├── layout.tsx           # Root layout + SEO meta
│   ├── page.tsx             # Trang chủ (1-page)
│   ├── globals.css          # Global styles + animations
│   ├── not-found.tsx        # Trang 404
│   ├── products/[slug]/     # Trang chi tiết sản phẩm
│   └── blogs/[slug]/        # Trang bài viết blog
│
├── components/
│   ├── Navbar.tsx           # Thanh điều hướng (hamburger mobile)
│   ├── Hero.tsx             # Section banner đầu trang
│   ├── About.tsx            # Giới thiệu công ty + hoạt động nội bộ
│   ├── Products.tsx         # Danh sách sản phẩm (card/grid)
│   ├── Blogs.tsx            # Blog Q&A có expand
│   ├── Events.tsx           # Sự kiện hội nghị (slider)
│   ├── Clients.tsx          # Khách hàng/đối tác (marquee + grid)
│   ├── Contact.tsx          # Form liên hệ + bản đồ
│   └── Footer.tsx           # Footer
│
├── data/
│   └── data.ts              # Tất cả dữ liệu (sản phẩm, blog, sự kiện, KH)
│
└── public/
    ├── img/                 # ← Đặt tất cả ảnh tại đây
    └── video/               # ← Đặt video tại đây
```

---

## 📁 Danh sách hình ảnh cần bổ sung

### Sản phẩm (vào `/public/img/`)
| File | Dùng cho |
|------|----------|
| `VISCOS 80H.png` | Sản phẩm VISCOS 80H |
| `Hialurom Hondro.jpg` | Sản phẩm Hialurom Hondro |
| `Hialurom Tendon.webp` | Sản phẩm Hialurom Tendon |
| `KombiHylan.png` | Sản phẩm KombiHylan |
| `Proyal 60M.webp` | Sản phẩm Proyal 60M |
| `Singclean.png` | Sản phẩm Singclean |

### Blog (vào `/public/img/`)
| File | Dùng cho |
|------|----------|
| `blog_1.jpg` | Bài viết tiêm HA |
| `blog_2.jpg` | Bài viết tiêm dịch khớp |
| `blog_9.png` | Bài viết VISCOS 80H |
| `blog_10.jpg` | Bài viết HA trọng lượng cao |

### Hoạt động nội bộ (vào `/public/img/`)
| File | Dùng cho |
|------|----------|
| `GIANGSINH2025.jpg` | Giáng sinh 2025 |
| `GIANGSINH2025-2.jpg` | Giáng sinh 2025 (ảnh 2) |
| `tất niên 2025.jpg` | Tất niên 2025 |
| `hotram2025.jpg` | Du lịch Hồ Tràm 2025 |
| `hotram2025_2.jpg` | Du lịch Hồ Tràm (ảnh 2) |

### Sự kiện hội nghị (vào `/public/img/`)
| File | Dùng cho |
|------|----------|
| `HAS1.jpg` | Hội nghị HAS |
| `HAS2.jpg` | Hội nghị HAS (ảnh 2) |
| `BANTAY1.jpg` | Hội nghị bàn tay |
| `BANTAY2.jpg` | Hội nghị bàn tay (ảnh 2) |
| `VAAS.jpg` | Hội nghị VAAS |
| `APLAR.jpg` | Hội nghị APLAR |
| `Hội nghị Tái tạo khớp.jpg` | Hội nghị Tái tạo khớp |
| `HSMA.jpg` | Hội nghị HSMA |
| `VOA 2025.jpeg` | VOA 2025 |

### Khách hàng (vào `/public/img/`)
| File | Dùng cho |
|------|----------|
| `TAMANH.jpg` | BV Tâm Anh |
| `VINMEC.jpg` | BV VinMec |
| `HOANMY.webp` | BV Hoàn Mỹ |
| `MINHANH.jpg` | BV Minh Anh |
| `CHANTHUONGCHINHHINH.jpg` | BV CTCH Sài Gòn |
| `QUANDANYMIENDONG.png` | BV Quân Dân Y Miền Đông |

### Hero & khác (vào `/public/img/`)
| File | Dùng cho |
|------|----------|
| `hero-bg.jpg` | Ảnh nền Hero section |
| `hero-product.png` | Ảnh sản phẩm trong Hero card |

---

## Công nghệ sử dụng

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS** (responsive, mobile-first)
- **Lucide React** (icons)
- Google Fonts: **Be Vietnam Pro** + **Nunito**

## Tính năng

- ✅ Responsive mobile-first (tham khảo MoMo)
- ✅ Hamburger menu trên mobile
- ✅ Hero section với CTA
- ✅ Giới thiệu công ty + hoạt động nội bộ
- ✅ Sản phẩm card với background ảnh
- ✅ Blog Q&A expand/collapse
- ✅ Slider sự kiện hội nghị
- ✅ Marquee khách hàng
- ✅ Form liên hệ có validate
- ✅ Trang chi tiết sản phẩm (chỉ định, chống chỉ định, blog)
- ✅ Trang bài viết blog
- ✅ SEO metadata
- ✅ Animation scroll-reveal
- ✅ Footer đầy đủ thông tin
