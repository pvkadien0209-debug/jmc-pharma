"use client";
import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { companyInfo } from "@/data/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Vui lòng nhập họ tên";
    if (!form.phone.trim()) errs.phone = "Vui lòng nhập số điện thoại";
    else if (!/^[0-9]{9,11}$/.test(form.phone.replace(/\s/g, "")))
      errs.phone = "Số điện thoại không hợp lệ";
    if (!form.message.trim()) errs.message = "Vui lòng nhập nội dung";
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", message: "" });
  };

  const contactItems = [
    {
      icon: MapPin,
      label: "Địa chỉ",
      value: companyInfo.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`,
      color: "bg-rose-50 text-rose-600",
    },
    {
      icon: Phone,
      label: "Điện thoại",
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone.replace(/\D/g, "")}`,
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
      color: "bg-blue-50 text-blue-600",
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Liên hệ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">
            Kết nối với <span className="gradient-text">JMC Pharma</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Để lại thông tin, chúng tôi sẽ liên hệ tư vấn trong thời gian sớm nhất
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4 animate-on-scroll">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Địa chỉ" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all group"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-primary-600 transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Map embed placeholder */}
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden h-48">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JMC Pharma location"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-black text-xl text-slate-800">Gửi thành công!</h3>
                <p className="text-slate-500 text-center">
                  Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-black text-xl text-slate-800 mb-6">Gửi tin nhắn</h3>
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Họ và tên <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                      placeholder="Nguyễn Văn A"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        errors.name
                          ? "border-rose-300 bg-rose-50 focus:border-rose-500"
                          : "border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                      }`}
                    />
                    {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Số điện thoại <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                      placeholder="0901 234 567"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        errors.phone
                          ? "border-rose-300 bg-rose-50 focus:border-rose-500"
                          : "border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                      }`}
                    />
                    {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Nội dung <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                      placeholder="Tôi muốn tìm hiểu về sản phẩm..."
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none ${
                        errors.message
                          ? "border-rose-300 bg-rose-50 focus:border-rose-500"
                          : "border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                      }`}
                    />
                    {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 active:scale-95 text-white py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-primary-200"
                  >
                    <Send size={18} />
                    Gửi liên hệ
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
