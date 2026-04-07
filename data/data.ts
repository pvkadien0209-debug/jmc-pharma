// data/data.ts

export const companyInfo = {
  nameVi: "CÔNG TY CỔ PHẦN DƯỢC PHẨM JMC PHARMA",
  nameEn: "JMC PHARMA JOINT STOCK COMPANY",
  shortName: "JMC PHARMA JSC",
  slogan: "Chất lượng chuẩn vàng - An toàn điều trị",
  founded: 2024,
  address: "25 Đường số 7, Phường 8, Bình Thới, Hồ Chí Minh, Việt Nam",
  phone: "(028) 22370456",
  email: "info@jmcpharm.com",
  businessReg: "318398456",
  taxCode: "318398456",
  facebook: "https://www.facebook.com/jmcpharma",
  description:
    "Công ty Cổ phần JMC Pharma là doanh nghiệp hoạt động trong lĩnh vực dược phẩm và thiết bị y tế, với định hướng cung cấp các sản phẩm và giải pháp chất lượng cao, đáp ứng nhu cầu chăm sóc sức khỏe ngày càng đa dạng của cộng đồng. JMC Pharma tập trung vào các hoạt động kinh doanh, phân phối dược phẩm, vật tư và trang thiết bị y tế, đồng thời tuân thủ nghiêm ngặt các quy định pháp luật và tiêu chuẩn chuyên ngành trong quá trình hoạt động.",
};

export const products = [
  {
    id: 1,
    slug: "viscos-80h",
    name: "VISCOS 80H",
    image: "/img/VISCOS 80H.png",
    shortDescription:
      "Gel tiêm nội khớp chứa acid hyaluronic giúp bôi trơn và cải thiện chức năng khớp.",
    description: `VISCOS 80H là một loại gel tiêm vô trùng, phân hủy sinh học, có đặc tính đẳng trương,
được sử dụng để tiêm trực tiếp vào các khớp.
Thành phần chính là acid hyaluronic có trọng lượng phân tử cao (2,5-3,5x10^6 Dalton),
được điều chế từ vi khuẩn Streptococcus equi, với nồng độ 20 mg/ml.
Sản phẩm có khả năng đàn hồi và bôi trơn cao, giúp phục hồi độ nhớt dịch khớp.`,
    indications: [
      "Phục hồi lưu biến của dịch khớp",
      "Hỗ trợ điều trị thoái hóa khớp",
      "Cải thiện khả năng vận động",
      "Giảm đau khớp",
    ],
    contraindications: [
      "Không dùng chung với hợp chất amoni bậc bốn (benzalkonium clorua)",
    ],
    seo: {
      title: "VISCOS 80H - Gel tiêm khớp",
      description:
        "Sản phẩm tiêm khớp chứa acid hyaluronic giúp giảm đau và cải thiện vận động.",
    },
    blogs: ["viscos-80h-co-gi-khac", "ha-trong-luong-cao"],
  },
  {
    id: 2,
    slug: "hialurom-hondro",
    name: "Hialurom Hondro",
    image: "/img/Hialurom Hondro.jpg",
    shortDescription:
      "Dung dịch tiêm khớp chứa HA và chondroitin giúp giảm đau và phục hồi khớp.",
    description: `Mỗi ống tiêm chứa 60 mg natri hyaluronat và 90 mg chondroitin sulfat.
Giúp tái tạo dịch hoạt dịch tự nhiên, giảm đau và tăng linh hoạt khớp.
Dung nạp tốt, phản ứng phụ nhẹ và tự hết trong 72 giờ.`,
    indications: [
      "Thoái hóa khớp (gối, vai, cột sống)",
      "Đau nhức xương khớp",
      "Người lớn tuổi",
      "Người chơi thể thao",
      "Phục hồi sau chấn thương",
    ],
    contraindications: [
      "Dị ứng thành phần thuốc",
      "Dị ứng protein vi khuẩn gram dương",
      "Nhiễm khuẩn da hoặc khớp",
      "Rối loạn đông máu",
    ],
    seo: {
      title: "Hialurom Hondro",
      description: "Giải pháp tiêm khớp hiệu quả cho thoái hóa khớp.",
    },
    blogs: ["tac-dung-tiem-ha", "tiem-dich-khop-la-gi"],
  },
  {
    id: 3,
    slug: "hialurom-tendon",
    name: "Hialurom Tendon",
    image: "/img/Hialurom Tendon.webp",
    shortDescription:
      "Gel tiêm hỗ trợ gân và giảm viêm, cải thiện vận động.",
    description: `Gel tiêm nội khớp thế hệ mới giúp bổ sung dịch nhờn và giảm viêm.
Giúp gân hoạt động trơn tru và thúc đẩy quá trình chữa lành.`,
    indications: [
      "Hỗ trợ điều trị tổn thương gân",
      "Giảm viêm",
      "Tăng khả năng vận động",
    ],
    contraindications: [
      "Dị ứng thành phần",
      "Nhiễm khuẩn vùng tiêm",
      "Đã tiêm sản phẩm khác tại cùng vị trí",
    ],
    seo: {
      title: "Hialurom Tendon",
      description: "Sản phẩm hỗ trợ gân và phục hồi vận động.",
    },
    blogs: [],
  },
  {
    id: 4,
    slug: "kombihylan",
    name: "KombiHylan",
    image: "/img/KombiHylan.png",
    shortDescription: "Dung dịch tiêm khớp chứa HA + chondroitin + NAG.",
    description: `Dung dịch vô trùng có tính nhớt và đàn hồi cao.
Được tiêm trực tiếp vào khớp, giúp cải thiện chức năng khớp.`,
    indications: [
      "Tiêm nội khớp điều trị thoái hóa",
      "Giảm đau khớp",
      "Cải thiện vận động",
    ],
    contraindications: [
      "Dị ứng thành phần",
      "Nhiễm khuẩn vùng tiêm",
      "Rối loạn đông máu",
      "Dị ứng hải sản",
    ],
    seo: {
      title: "KombiHylan",
      description: "Dung dịch tiêm khớp thế hệ mới.",
    },
    blogs: [],
  },
  {
    id: 5,
    slug: "proyal-60m",
    name: "Proyal 60M",
    image: "/img/Proyal 60M.webp",
    shortDescription:
      "Chất thay thế dịch khớp giúp giảm đau và phục hồi khớp.",
    description: `Giúp cải thiện chất lượng dịch khớp và bảo vệ khớp.
Hỗ trợ điều trị thoái hóa khớp và chấn thương.`,
    indications: ["Thoái hóa khớp", "Chấn thương khớp", "Giảm đau khớp"],
    contraindications: ["Chỉ tác dụng tại chỗ (nội khớp)"],
    seo: {
      title: "Proyal 60M",
      description: "Giải pháp tiêm khớp hiệu quả.",
    },
    blogs: [],
  },
  {
    id: 6,
    slug: "singclean",
    name: "Singclean",
    image: "/img/Singclean.png",
    shortDescription: "Natri Hyaluronate giúp ngăn dính sau phẫu thuật.",
    description: `Polymer tự nhiên có độ nhớt cao, giúp bôi trơn và phục hồi mô.
Dùng trong phẫu thuật để ngăn dính.`,
    indications: ["Ngăn dính sau phẫu thuật", "Giảm ma sát mô"],
    contraindications: [
      "Dị ứng thành phần",
      "Nhiễm trùng tại chỗ",
      "Nhiễm trùng khớp",
      "Rối loạn đông máu nặng",
    ],
    seo: {
      title: "Singclean",
      description: "Sản phẩm hỗ trợ phẫu thuật và phục hồi mô.",
    },
    blogs: [],
  },
];

export const activities = [
  {
    id: 1,
    slug: "giang-sinh-2025",
    title: "Giáng sinh 2025",
    description:
      "Hoạt động Giáng sinh nội bộ, gắn kết nhân sự và xây dựng văn hoá công ty.",
    images: ["/img/GIANGSINH2025.jpg", "/img/GIANGSINH2025-2.jpg"],
    thumbnail: "/img/GIANGSINH2025.jpg",
    year: 2025,
    type: "event",
    emoji: "🎄",
  },
  {
    id: 2,
    slug: "tat-nien-2025",
    title: "Tất niên 2025",
    description:
      "Sự kiện tổng kết cuối năm, tri ân và kết nối đội ngũ nhân sự.",
    images: ["/img/tất niên 2025.jpg"],
    thumbnail: "/img/tất niên 2025.jpg",
    year: 2025,
    type: "event",
    emoji: "🥂",
  },
  {
    id: 3,
    slug: "du-lich-ho-tram-2025",
    title: "Du lịch Hồ Tràm 2025",
    description:
      "Chuyến du lịch nghỉ dưỡng giúp tăng sự gắn kết và tái tạo năng lượng cho đội ngũ.",
    images: ["/img/hotram2025.jpg", "/img/hotram2025_2.jpg"],
    thumbnail: "/img/hotram2025.jpg",
    year: 2025,
    type: "travel",
    emoji: "🏖️",
  },
];

export const blogs = [
  {
    stt: 1,
    category: "Kiến thức chung",
    title: "Tác dụng của tiêm HA đối với khớp",
    image: "/img/blog_1.jpg",
    slug: "tac-dung-tiem-ha",
    categorySlug: "hyaluronic-acid",
    content: `Hyaluronic Acid (HA) là một thành phần tự nhiên của dịch khớp và mô sụn, đóng vai trò như một chất bôi trơn và giảm xóc trong khớp. Khi lượng HA trong khớp bị suy giảm do tuổi tác hoặc thoái hóa, chức năng bảo vệ khớp bị suy yếu đáng kể.

Tiêm HA trực tiếp vào khoang khớp mang lại nhiều tác dụng quan trọng: (1) Bôi trơn khớp – HA phục hồi độ nhớt của dịch khớp, giúp các bề mặt khớp trượt lên nhau dễ dàng hơn, giảm ma sát và mài mòn. (2) Giảm đau – HA có khả năng ức chế dẫn truyền tín hiệu đau qua các thụ thể thần kinh tại khớp. (3) Bảo vệ sụn khớp – HA tạo ra một lớp màng bảo vệ trên bề mặt sụn. (4) Kháng viêm – HA ức chế các cytokine gây viêm.

Ngoài ra, HA còn kích thích sản xuất HA nội sinh (viscosupplementation), giúp duy trì môi trường khớp lâu dài.`,
  },

  {
    stt: 2,
    category: "Kiến thức chung",
    title: "Tiêm dịch khớp là gì? Có nên tiêm không?",
    image: "/img/blog_2.jpg",
    slug: "tiem-dich-khop-la-gi",
    categorySlug: "tiem-khop",
    content: `Tiêm dịch khớp là kỹ thuật đưa Hyaluronic Acid trực tiếp vào khoang khớp nhằm phục hồi độ nhớt và chức năng vận động.

Thủ thuật thực hiện nhanh (10–15 phút), thường dưới hướng dẫn siêu âm để đảm bảo chính xác.

Phương pháp này phù hợp cho bệnh nhân thoái hóa khớp nhẹ đến trung bình khi điều trị bảo tồn không hiệu quả.

Lợi ích: giảm đau, cải thiện vận động, ít tác dụng phụ toàn thân.`,
  },

  {
    stt: 3,
    category: "Kiến thức chung",
    title: "So sánh HA và PRP trong điều trị khớp",
    image: "/img/blog_3.jpg",
    slug: "so-sanh-ha-va-prp",
    categorySlug: "tiem-khop",
    content: `HA và PRP là hai phương pháp tiêm phổ biến.

HA: tác động cơ học – bôi trơn, giảm ma sát, hiệu quả ổn định.

PRP: tác động sinh học – kích thích tái tạo sụn.

PRP phù hợp bệnh nhân trẻ, tổn thương sớm. HA phù hợp thoái hóa rõ ràng, cần hiệu quả ổn định.

Kết hợp HA + PRP đang cho thấy hiệu quả tốt.`,
  },

  {
    stt: 4,
    category: "Kiến thức chung",
    title: "Khi nào nên tiêm HA cho khớp gối?",
    image: "/img/blog_4.jpg",
    slug: "khi-nao-tiem-ha",
    categorySlug: "thoai-hoa-khop",
    content: `Tiêm HA được chỉ định khi thoái hóa khớp gối mức độ 1–3, đau ảnh hưởng sinh hoạt.

Đặc biệt phù hợp khi:
- Không đáp ứng thuốc
- Không dùng được NSAID
- Muốn trì hoãn phẫu thuật

Không nên tiêm khi nhiễm khuẩn khớp hoặc thoái hóa giai đoạn cuối.`,
  },

  {
    stt: 5,
    category: "Kiến thức chung",
    title: "Thoái hóa khớp là gì? Nguyên nhân và cách điều trị",
    image: "/img/blog_5.jpg",
    slug: "thoai-hoa-khop-la-gi",
    categorySlug: "thoai-hoa-khop",
    content: `Thoái hóa khớp là bệnh mạn tính gây mòn sụn, đau và hạn chế vận động.

Nguyên nhân:
- Tuổi tác
- Thừa cân
- Chấn thương
- Vận động sai

Điều trị theo bậc thang:
- Bảo tồn
- Thuốc
- Tiêm khớp
- Phẫu thuật`,
  },

  {
    stt: 6,
    category: "Kiến thức chung",
    title: "Tiêm HA có tác dụng bao lâu?",
    image: "/img/blog_6.jpg",
    slug: "tiem-ha-duoc-bao-lau",
    categorySlug: "hyaluronic-acid",
    content: `Hiệu quả tiêm HA thường xuất hiện sau 2–4 tuần.

Thời gian duy trì:
- HA thường: 3–6 tháng
- HA cao/cross-link: 6–12 tháng hoặc hơn

Hiệu quả phụ thuộc vào tình trạng bệnh và lối sống.`,
  },

  {
    stt: 7,
    category: "Kiến thức chung",
    title: "Tiêm khớp có đau không? Có nguy hiểm không?",
    image: "/img/blog_7.jpg",
    slug: "tiem-khop-co-dau-khong",
    categorySlug: "tiem-khop",
    content: `Tiêm khớp ít đau, thường chỉ châm chích nhẹ do có gây tê.

Biến chứng hiếm (<1%):
- Nhiễm khuẩn
- Viêm phản ứng
- Sai vị trí tiêm

Cần thực hiện tại cơ sở y tế chuẩn.`,
  },

  {
    stt: 8,
    category: "Kiến thức chung",
    title: "Các phương pháp điều trị thoái hóa khớp hiện nay",
    image: "/img/blog_8.jpg",
    slug: "dieu-tri-thoai-hoa-khop",
    categorySlug: "thoai-hoa-khop",
    content: `Điều trị gồm:
- Không dùng thuốc: tập luyện, giảm cân
- Thuốc: paracetamol, NSAID
- Tiêm: HA, PRP
- Phẫu thuật: thay khớp

Tiếp cận theo giai đoạn bệnh.`,
  },

  {
    stt: 9,
    category: "VISCOS 80H",
    title: "VISCOS 80H có gì khác so với các loại HA khác?",
    image: "/img/blog_9.png",
    slug: "viscos-80h-co-gi-khac",
    categorySlug: "viscos",
    content: `VISCOS 80H là HA trọng lượng phân tử cao.

Ưu điểm:
- Độ nhớt cao
- Bôi trơn tốt hơn
- Ít dị ứng (sinh học)
- Hiệu quả kéo dài

Có thể chỉ cần 1 mũi.`,
  },

  {
    stt: 10,
    category: "VISCOS 80H",
    title: "HA trọng lượng phân tử cao là gì?",
    image: "/img/blog_10.jpg",
    slug: "ha-trong-luong-cao",
    categorySlug: "viscos",
    content: `HA được phân loại theo MW:
- Thấp
- Trung bình
- Cao (>2000 kDa)

HA cao có:
- Độ nhớt cao
- Giảm xóc tốt
- Tác dụng lâu hơn`,
  },

  {
    stt: 11,
    category: "VISCOS 80H",
    title: "Tại sao HA giúp bôi trơn khớp?",
    image: "/img/blog_11.jpg",
    slug: "ha-boi-tron-khop",
    categorySlug: "viscos",
    content: `HA giữ nước mạnh → tạo lớp dịch nhớt.

Hoạt động:
- Bôi trơn
- Giảm ma sát
- Giảm sốc

Kết hợp với lubricin tăng hiệu quả.`,
  },

  {
    stt: 12,
    category: "Hialurom Hondro",
    title: "Chondroitin sulfate là gì?",
    image: "/img/blog_12.webp",
    slug: "chondroitin-la-gi",
    categorySlug: "hialurom-hondro",
    content: `Chondroitin là thành phần cấu trúc sụn.

Tác dụng:
- Giữ nước
- Ức chế phá hủy sụn
- Kích thích tái tạo

Thường dùng kết hợp glucosamine.`,
  },

  {
    stt: 13,
    category: "Hialurom Hondro",
    title: "Kết hợp HA + Chondroitin có lợi gì?",
    image: "/img/blog_13.jpg",
    slug: "ha-chondroitin-loi-ich",
    categorySlug: "hialurom-hondro",
    content: `HA: bôi trơn
Chondroitin: tái tạo sụn

Kết hợp:
- Giảm đau tốt hơn
- Làm chậm thoái hóa
- Tác dụng toàn diện`,
  },

  {
    stt: 14,
    category: "Hialurom Hondro",
    title: "Vì sao Hialurom Hondro hiệu quả trong thoái hóa khớp?",
    image: "/img/blog_14.jpg",
    slug: "hialurom-hondro-hieu-qua",
    categorySlug: "hialurom-hondro",
    content: `Kết hợp HA + Chondroitin:
- Giảm đau nhanh
- Tái tạo sụn
- Ức chế viêm

Tác dụng kéo dài và toàn diện.`,
  },

  {
    stt: 15,
    category: "Hialurom Tendon",
    title: "Điều trị viêm gân bằng HA có hiệu quả không?",
    image: "/img/blog_15.jpg",
    slug: "ha-dieu-tri-viem-gan",
    categorySlug: "hialurom-tendom",
    content: `HA giúp:
- Giảm ma sát gân
- Giảm đau
- Cải thiện chức năng

Hiệu quả tốt khi kết hợp tập phục hồi.`,
  },

  {
    stt: 16,
    category: "Hialurom Tendon",
    title: "Sự khác biệt giữa tiêm khớp và tiêm gân",
    image: "/img/blog_16.jpg",
    slug: "tiem-khop-vs-tiem-gan",
    categorySlug: "hialurom-tendom",
    content: `Tiêm khớp: vào khoang khớp  
Tiêm gân: quanh gân

Khác nhau về:
- Chỉ định
- Kỹ thuật
- Thuốc`,
  },

  {
    stt: 17,
    category: "Hialurom Tendon",
    title: "Khi nào cần điều trị tổn thương gân?",
    image: "/img/blog_17.webp",
    slug: "ton-thuong-gan-la-gi",
    categorySlug: "hialurom-tendom",
    content: `Cần điều trị khi:
- Đau > 2–4 tuần
- Giảm vận động
- Không cải thiện

Tránh tiến triển thành đứt gân.`,
  },

  {
    stt: 18,
    category: "KombiHylan",
    title: "N-acetylglucosamine (NAG) là gì?",
    image: "/img/blog_18.jpg",
    slug: "nag-la-gi",
    categorySlug: "kombihylan",
    content: `NAG là tiền chất tạo HA.

Tác dụng:
- Tăng HA nội sinh
- Bảo vệ niêm mạc
- Hỗ trợ da`,
  },

  {
    stt: 19,
    category: "KombiHylan",
    title: "Công nghệ cross-link trong HA là gì?",
    image: "/img/blog_19.jpg",
    slug: "cross-link-ha",
    categorySlug: "kombihylan",
    content: `Cross-link giúp HA:
- Bền hơn
- Tồn tại lâu hơn
- Ít mũi tiêm hơn`,
  },

  {
    stt: 20,
    category: "KombiHylan",
    title: "Tại sao KombiHylan có hiệu quả lâu dài?",
    image: "/img/blog_20.png",
    slug: "kombihylan-hieu-qua",
    categorySlug: "kombihylan",
    content: `KombiHylan là HA cross-linked:
- Tác dụng lâu
- Kích thích HA nội sinh
- Có thể chỉ 1 mũi`,
  },

  {
    stt: 21,
    category: "Proyal 60M",
    title: "Dịch khớp đóng vai trò gì trong vận động?",
    image: "/img/blog_21.webp",
    slug: "dich-khop-la-gi",
    categorySlug: "proyal",
    content: `Dịch khớp giúp:
- Bôi trơn
- Giảm xóc
- Nuôi dưỡng sụn`,
  },

  {
    stt: 22,
    category: "Proyal 60M",
    title: "Khi nào cần bổ sung dịch khớp?",
    image: "/img/blog_22.jpg",
    slug: "bo-sung-dich-khop",
    categorySlug: "proyal",
    content: `Khi:
- Đau kéo dài
- Cứng khớp
- Hẹp khe khớp

Nên can thiệp sớm.`,
  },

  {
    stt: 23,
    category: "Proyal 60M",
    title: "Phục hồi khớp sau chấn thương như thế nào?",
    image: "/img/blog_23.jpg",
    slug: "phuc-hoi-khop",
    categorySlug: "proyal",
    content: `3 giai đoạn:
- Cấp tính
- Bán cấp
- Phục hồi

Kết hợp vật lý trị liệu + tiêm HA.`,
  },

  {
    stt: 24,
    category: "SingClean",
    title: "Dính sau phẫu thuật là gì?",
    image: "/img/blog_24.jpg",
    slug: "dinh-sau-phau-thuat",
    categorySlug: "singclean",
    content: `Dính là mô xơ bất thường sau mổ.

Có thể gây:
- Tắc ruột
- Đau
- Cứng khớp`,
  },

  {
    stt: 25,
    category: "SingClean",
    title: "Cách phòng ngừa dính sau mổ",
    image: "/img/blog_25.jpg",
    slug: "phong-ngua-dinh",
    categorySlug: "singclean",
    content: `Phòng ngừa:
- Kỹ thuật mổ tốt
- Màng chống dính
- Vận động sớm`,
  },

  {
    stt: 26,
    category: "SingClean",
    title: "Vai trò của HA trong phẫu thuật",
    image: "/img/blog_26.png",
    slug: "ha-trong-phau-thuat",
    categorySlug: "singclean",
    content: `HA dùng trong:
- Phẫu thuật mắt
- Chỉnh hình
- Chống dính

Là vật liệu sinh học quan trọng.`,
  },
];

export const events = [
  {
    stt: 1,
    title: "Hội nghị HAS (20/7/2024)",
    images: ["/img/HAS1.jpg", "/img/HAS2.jpg"],
    description:
      "Nơi trao đổi khoa học giữa các phẫu thuật viên nội soi cơ xương khớp tại TpHCM, trong khu vực các tỉnh lân cận và trong cả nước nhằm nâng cao trình độ chẩn đoán và điều trị bệnh cơ-xương-khớp bằng phẫu thuật nội soi",
    date: "20/7/2024",
  },
  {
    stt: 2,
    title: "Hội nghị bàn tay (4/4/2025)",
    images: ["/img/BANTAY1.jpg", "/img/BANTAY2.jpg"],
    description:
      "Là hội nghị trao đổi chuyên môn, cập nhật kiến thức và chia sẻ thành quả nghiên cứu khoa học trong lĩnh vực chấn thương chỉnh hình, đặc biệt là phẫu thuật bàn tay tại bệnh viện Đa khoa tỉnh Khánh Hòa. Với 49 báo cáo khoa học chuyên sâu.",
    date: "4/4/2025",
  },
  {
    stt: 3,
    title: "Hội nghị VAAS (12/9/2024)",
    images: ["/img/VAAS.jpg"],
    description:
      "VAAS – ASSA 2024 là nơi các chuyên gia, các Y – Bác sĩ trong và ngoài nước giao lưu, trao đổi, học hỏi thêm nhiều kinh nghiệm hữu ích liên quan đến y học tái tạo trong việc bảo tồn sụn khớp gối, thay khớp gối, khớp háng, tái tạo dây chằng sau chấn thương.",
    date: "12/9/2024",
  },
  {
    stt: 4,
    title: "HỘI NGHỊ APLAR (09.2025)",
    images: ["/img/APLAR.jpg"],
    description:
      "Diễn đàn để các bác sĩ chuyên khoa thấp khớp tổ chức tại NHẬT BẢN, các nhà khoa học và nhân viên y tế cập nhật những tiến bộ mới nhất trong chẩn đoán, điều trị và nghiên cứu các bệnh tự miễn và cơ xương khớp",
    date: "09/2025",
  },
  {
    stt: 5,
    title: "Hội nghị Tái tạo khớp (22.11.2025)",
    images: ["/img/Hội nghị Tái tạo khớp.jpg"],
    description:
      "Diễn đàn được tổ chức tại Bệnh viên 115, là nơi để các bác sĩ tại Việt Nam tổng kết các ca lâm sàng khó và cập nhật xu hướng điều trị 'bảo tồn kết hợp tái tạo' nhằm cải thiện chất lượng sống cho bệnh nhân thoái hóa khớp",
    date: "22/11/2025",
  },
  {
    stt: 6,
    title: "Hội nghị HSMA (8/2024)",
    images: ["/img/HSMA.jpg"],
    description:
      "Hội nghị khoa học thường niên quy tụ các chuyên gia trong lĩnh vực giải phẫu, mô phôi và hình thái học. Hội nghị tập trung vào các báo cáo nghiên cứu về cấu trúc cơ thể người, những ứng dụng của giải phẫu trong ngoại khoa.",
    date: "8/2024",
  },
  {
    stt: 7,
    title: "VOA 2025",
    images: ["/img/VOA 2025.jpeg"],
    description:
      "Hội nghị Khoa học Thường niên Hội Chấn thương Chỉnh hình Việt Nam lần thứ 22 (VOA 2025) tại TP. Cần Thơ, kỷ niệm 25 năm thành lập Hội. Sự kiện tập trung vào chủ đề 'Nhiễm khuẩn trong Chấn thương Chỉnh hình: Quá khứ, hiện tại và tương lai'.",
    date: "2025",
  },
];

export const clients = [
  {
    stt: 1,
    name: "Bệnh viện Tâm Anh",
    products: ["Hondro"],
    image: "/img/TAMANH.jpg",
  },
  {
    stt: 2,
    name: "Bệnh viện VinMec",
    products: ["Hondro"],
    image: "/img/VINMEC.jpg",
  },
  {
    stt: 3,
    name: "Bệnh viện Hoàn Mỹ",
    products: ["Hondro"],
    image: "/img/HOANMY.webp",
  },
  {
    stt: 4,
    name: "Bệnh viện Minh Anh",
    products: ["Kombi", "Tendon", "Singclean"],
    image: "/img/MINHANH.jpg",
  },
  {
    stt: 5,
    name: "Bệnh viện quốc tế Chấn Thương Chỉnh Hình Sài Gòn",
    products: ["Singclean"],
    image: "/img/CHANTHUONGCHINHHINH.jpg",
  },
  {
    stt: 6,
    name: "Bệnh viện Quân Dân Y Miền Đông",
    products: ["Viscos", "Proyal"],
    image: "/img/QUANDANYMIENDONG.png",
  },
];
