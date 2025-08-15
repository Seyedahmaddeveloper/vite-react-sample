import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="w-full font-sans">
      {/* Meta tags برای SEO */}
      <head>
        <title>طراحی سایت حرفه‌ای در عراق | Web Design Iraq</title>
        <meta
          name="description"
          content="طراحی وب‌سایت چندزبانه، صفحه فرود، فروشگاه اینترنتی، با React، Next.js و وردپرس برای کسب‌وکار شما در عراق، ایران و جهان."
        />
        <meta
          name="keywords"
          content="طراحی سایت در عراق, طراحی سایت شرکتی, طراحی صفحه فرود, خرید با دینار, طراحی با React, Next.js, WordPress"
        />
      </head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50 flex justify-center gap-6 py-4">
        <a href="#arabic" className="hover:text-yellow-300">
          العربية
        </a>
        <a href="#persian" className="hover:text-green-300">
          فارسی
        </a>
        <a href="#english" className="hover:text-blue-300">
          English
        </a>
      </nav>

      {/* Arabic Section */}
      <section
        id="arabic"
        className="min-h-screen bg-yellow-400 text-white flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          تصميم مواقع احترافية في العراق
        </motion.h1>
        <p className="text-lg max-w-xl mb-6 leading-relaxed">
          نحن نقدم تصميم مواقع بأحدث التقنيات مثل React و Next.js و WordPress.
          سواء كنت تحتاج إلى موقع شركة، متجر إلكتروني، أو صفحة هبوط، نحن هنا
          لمساعدتك!
        </p>
        <ul className="mb-6 space-y-2 text-lg">
          <li>✔ تصميم مواقع باستخدام React</li>
          <li>✔ تصميم مواقع باستخدام Next.js</li>
          <li>✔ تصميم صفحات هبوط احترافية</li>
          <li>✔ مواقع شركات ومتاجر إلكترونية</li>
        </ul>
        <a
          href="https://wa.me/989034260454"
          className="bg-white text-yellow-500 px-6 py-3 rounded-full font-bold hover:bg-yellow-200 transition"
        >
          تواصل عبر واتساب
        </a>
      </section>

      {/* Persian Section */}
      <section
        id="persian"
        className="min-h-screen bg-gradient-to-r from-green-600 to-teal-500 text-white flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          طراحی سایت حرفه‌ای در عراق و ایران
        </motion.h2>
        <p className="text-lg max-w-xl mb-6 leading-relaxed">
          ما بهترین خدمات طراحی سایت را با جدیدترین تکنولوژی‌ها ارائه می‌دهیم:
          طراحی با React، Next.js، و حتی وردپرس. همچنین طراحی صفحات فرود
          اختصاصی برای افزایش فروش شما!
        </p>
        <ul className="mb-6 space-y-2 text-lg">
          <li>✔ طراحی سایت با React</li>
          <li>✔ طراحی سایت با Next.js</li>
          <li>✔ طراحی صفحه فرود حرفه‌ای</li>
          <li>✔ طراحی فروشگاه و سایت شرکتی</li>
        </ul>
        <a
          href="https://wa.me/989034260454"
          className="bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-green-300 transition"
        >
          ارتباط در واتساپ
        </a>
      </section>

      {/* English Section */}
      <section
        id="english"
        className="min-h-screen bg-blue-600 text-white flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h3
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Professional Web Design in Iraq
        </motion.h3>
        <p className="text-lg max-w-xl mb-6 leading-relaxed">
          We provide professional web design services using React, Next.js, and
          WordPress. Landing pages, corporate websites, and online stores for
          your business.
        </p>
        <ul className="mb-6 space-y-2 text-lg">
          <li>✔ React Web Design</li>
          <li>✔ Next.js Web Design</li>
          <li>✔ Landing Page Design</li>
          <li>✔ Corporate & E-commerce Websites</li>
        </ul>
        <a
          href="https://wa.me/989034260454"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-blue-300 transition"
        >
          Contact on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default App;