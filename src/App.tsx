import React from "react";

export default function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white flex justify-center gap-6 py-4 shadow-lg z-50">
        <button onClick={() => scrollToSection("ar")} className="hover:text-yellow-400">
          عربی
        </button>
        <button onClick={() => scrollToSection("fa")} className="hover:text-yellow-400">
          فارسی
        </button>
        <button onClick={() => scrollToSection("en")} className="hover:text-yellow-400">
          English
        </button>
      </nav>

      {/* Arabic Section */}
      <section id="ar" className="h-screen flex flex-col justify-center items-center bg-yellow-100 text-right px-8">
        <h1 className="text-4xl font-bold mb-4">تصميم مواقع في العراق</h1>
        <p className="max-w-2xl text-lg mb-6">
          نحن نقدم خدمات تصميم مواقع الويب باستخدام React, Next.js, و WordPress. يمكنك التواصل معنا عبر WhatsApp لطلب
          عرض أسعار أو الحصول على استشارة مجانية.
        </p>
        <a
          href="https://wa.me/964XXXXXXXXX"
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600"
        >
          تواصل عبر واتساب
        </a>
      </section>

      {/* Persian Section */}
      <section id="fa" className="h-screen flex flex-col justify-center items-center bg-blue-100 text-right px-8">
        <h1 className="text-4xl font-bold mb-4">طراحی سایت در عراق</h1>
        <p className="max-w-2xl text-lg mb-6">
          ما انواع خدمات طراحی وب را با React، Next.js و وردپرس ارائه می‌دهیم. برای دریافت مشاوره یا نمونه اولیه آنلاین با
          ما در واتساپ در تماس باشید.
        </p>
        <a
          href="https://wa.me/964XXXXXXXXX"
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600"
        >
          تماس از طریق واتساپ
        </a>
      </section>

      {/* English Section */}
      <section id="en" className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-8">
        <h1 className="text-4xl font-bold mb-4">Web Design in Iraq</h1>
        <p className="max-w-2xl text-lg mb-6">
          We provide web design services using React, Next.js, and WordPress. Contact us via WhatsApp for pricing or a free
          consultation.
        </p>
        <a
          href="https://wa.me/964XXXXXXXXX"
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600"
        >
          Contact on WhatsApp
        </a>
      </section>
    </div>
  );
}