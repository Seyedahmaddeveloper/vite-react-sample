import React, { useEffect } from "react"; import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom"; import { motion } from "framer-motion"; import { MessageCircle, Globe2, Wallet, CheckCircle2 } from "lucide-react";

/**

Single-file React app (SPA) with three language pages: Arabic (default), Persian, English

Great SEO basics for an SPA: dynamic <title>, <meta>, hreflang <link>, Organization JSON-LD


RTL support for AR & FA; LTR for EN


WhatsApp CTA, Crypto section (with placeholders), clear packages per market


Clean Tailwind UI and minimal animation


How to use:

1. Replace WHATSAPP_NUMBER and wallet addresses below.



2. (Optional) Adjust package prices per language.



3. Deploy anywhere (Vercel/Netlify/Render/Liara). Routes: / (AR), /fa (FA), /en (EN) */




// ========================= CONFIG ========================= const WHATSAPP_NUMBER = "+9647XXXXXXXX"; // e.g. +9647XXXXXXXX

const WALLETS = { USDT_TRC20: "Txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", BTC: "bc1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", ETH: "0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", };

// Price helpers (for display only; set real prices) const fmt = { ar: { iqd: (n) => new Intl.NumberFormat("ar-IQ").format(n) + " د.ع", usd: (n) => "$" + new Intl.NumberFormat("en-US").format(n), }, fa: { toman: (n) => new Intl.NumberFormat("fa-IR").format(n) + " تومان", usd: (n) => "$" + new Intl.NumberFormat("en-US").format(n), }, en: { usd: (n) => "$" + new Intl.NumberFormat("en-US").format(n), }, };

// Packages per language/currency const PACKAGES = { ar: [ { id: "react-site", title: "تصميم موقع بـ React", price: fmt.ar.usd(250), alt: fmt.ar.iqd(325000)}, { id: "next-site", title: "تصميم موقع بـ Next.js", price: fmt.ar.usd(350), alt: fmt.ar.iqd(455000)}, { id: "react-landing", title: "صفحة هبوط بـ React", price: fmt.ar.usd(180), alt: fmt.ar.iqd(235000)}, { id: "next-landing", title: "صفحة هبوط بـ Next.js", price: fmt.ar.usd(220), alt: fmt.ar.iqd(285000)}, { id: "wordpress", title: "موقع ووردبريس احترافي", price: fmt.ar.usd(300), alt: fmt.ar.iqd(390000)}, { id: "store-blog-corp", title: "متجر / مدونة / شركة", price: fmt.ar.usd(400), alt: fmt.ar.iqd(520000)}, ], fa: [ { id: "react-site", title: "طراحی سایت با React", price: fmt.fa.toman(15000000), alt: fmt.fa.usd(250)}, { id: "next-site", title: "طراحی سایت با Next.js", price: fmt.fa.toman(21000000), alt: fmt.fa.usd(350)}, { id: "react-landing", title: "طراحی لندینگ با React", price: fmt.fa.toman(10800000), alt: fmt.fa.usd(180)}, { id: "next-landing", title: "لندینگ با Next.js", price: fmt.fa.toman(13200000), alt: fmt.fa.usd(220)}, { id: "wordpress", title: "طراحی سایت با وردپرس", price: fmt.fa.toman(18000000), alt: fmt.fa.usd(300)}, { id: "store-blog-corp", title: "فروشگاه / وبلاگ / شرکتی", price: fmt.fa.toman(24000000), alt: fmt.fa.usd(400)}, ], en: [ { id: "react-site", title: "Website with React", price: fmt.en.usd(250) }, { id: "next-site", title: "Website with Next.js", price: fmt.en.usd(350) }, { id: "react-landing", title: "Landing Page with React", price: fmt.en.usd(180) }, { id: "next-landing", title: "Landing Page with Next.js", price: fmt.en.usd(220) }, { id: "wordpress", title: "WordPress Website", price: fmt.en.usd(300) }, { id: "store-blog-corp", title: "Store / Blog / Corporate", price: fmt.en.usd(400) }, ], };

// ========================= UTIL COMPONENTS ========================= function useSEO({ title, description, lang, path, altRefs }) { const loc = window.location; useEffect(() => { document.documentElement.lang = lang; document.title = title;

// meta description
let meta = document.querySelector('meta[name="description"]');
if (!meta) {
  meta = document.createElement("meta");
  meta.setAttribute("name", "description");
  document.head.appendChild(meta);
}
meta.setAttribute("content", description || "");

// canonical
const canonicalHref = loc.origin + path;
setOrCreateLink("canonical", canonicalHref);

// hreflang alternates
if (altRefs) {
  altRefs.forEach((ref) => setOrCreateHreflang(ref.lang, loc.origin + ref.href));
}

// JSON-LD Organization (basic)
setJsonLd({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: lang === "ar" ? "تصميم مواقع في العراق" : lang === "fa" ? "طراحی سایت در عراق" : "Web Design in Iraq",
  url: loc.origin,
  sameAs: [
    `https://wa.me/${WHATSAPP_NUMBER.replace('+','')}`,
  ],
  contactPoint: [{
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["ar", "fa", "en"],
    url: `https://wa.me/${WHATSAPP_NUMBER.replace('+','')}`,
  }],
});

}, [title, description, lang, path, altRefs]); }

function setOrCreateLink(rel, href) { let link = Array.from(document.querySelectorAll("link")) .find((l) => l.getAttribute("rel") === rel && (!l.getAttribute("hreflang") || rel !== "alternate")); if (!link) { link = document.createElement("link"); link.setAttribute("rel", rel); document.head.appendChild(link); } link.setAttribute("href", href); }

function setOrCreateHreflang(hreflang, href) { let link = Array.from(document.querySelectorAll("link[rel='alternate']")) .find((l) => l.getAttribute("hreflang") === hreflang); if (!link) { link = document.createElement("link"); link.setAttribute("rel", "alternate"); link.setAttribute("hreflang", hreflang); document.head.appendChild(link); } link.setAttribute("href", href); }

function setJsonLd(payload) { let script = document.getElementById("org-jsonld"); if (!script) { script = document.createElement("script"); script.type = "application/ld+json"; script.id = "org-jsonld"; document.head.appendChild(script); } script.textContent = JSON.stringify(payload); }

function Shell({ children, dir, navLabel, langLinks, hero, note, ctaLabel }) { const loc = useLocation(); return ( <div dir={dir} className="min-h-screen bg-white text-gray-900"> <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b"> <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"> <div className="flex items-center gap-2 font-bold text-lg"> <Globe2 className="w-5 h-5" /> <span>{navLabel}</span> </div> <nav className="flex items-center gap-4 text-sm"> {langLinks.map((x) => ( <Link key={x.to} to={x.to} className={hover:underline ${loc.pathname === x.to ? 'font-semibold' : ''}}> {x.label} </Link> ))} <a href={https://wa.me/${WHATSAPP_NUMBER.replace('+','')}} className="inline-flex items-center gap-2 rounded-2xl px-3 py-1 border shadow-sm hover:shadow transition" > <MessageCircle className="w-4 h-4" /> WhatsApp </a> </nav> </div> </header>

<main className="max-w-6xl mx-auto px-4 py-10">
    {hero}

    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {children}
    </section>

    <section className="mt-10 p-6 rounded-2xl border bg-gray-50 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <Wallet className="w-5 h-5" /> Crypto / رمزارز
      </div>
      <p className="text-sm opacity-80">
        {dir === 'rtl' ? (
          <>می‌توانید پس از تأیید نمونه اولیه، هزینه را از طریق رمزارز پرداخت کنید.</>
        ) : (
          <>After approving the online prototype, you can pay using cryptocurrency.</>
        )}
      </p>
      <div className="grid sm:grid-cols-3 gap-4 text-sm">
        <div className="p-3 rounded-xl border bg-white">
          <div className="font-semibold">USDT (TRC20)</div>
          <div className="mt-1 select-all break-all">{WALLETS.USDT_TRC20}</div>
        </div>
        <div className="p-3 rounded-xl border bg-white">
          <div className="font-semibold">BTC</div>
          <div className="mt-1 select-all break-all">{WALLETS.BTC}</div>
        </div>
        <div className="p-3 rounded-xl border bg-white">
          <div className="font-semibold">ETH</div>
          <div className="mt-1 select-all break-all">{WALLETS.ETH}</div>
        </div>
      </div>
    </section>

    <section className="mt-10 p-6 rounded-2xl border">
      {note}
    </section>
  </main>

  <footer className="border-t bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
      <div>© {new Date().getFullYear()} — Web Design Iraq</div>
      <div className="opacity-80">AR / FA / EN — React SPA</div>
    </div>
  </footer>
</div>

); }

function PackageCard({ title, price, alt, bullets }) { return ( <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="rounded-2xl border p-5 bg-white shadow-sm hover:shadow-md transition" > <div className="text-base font-semibold">{title}</div> <div className="mt-2 text-2xl font-bold">{price}</div> {alt && <div className="text-xs text-gray-500 mt-1">≈ {alt}</div>} <ul className="mt-4 space-y-2 text-sm"> {bullets?.map((b, i) => ( <li key={i} className="flex items-start gap-2"> <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span>{b}</span> </li> ))} </ul> <a href={https://wa.me/${WHATSAPP_NUMBER.replace('+','')}} className="mt-5 inline-block rounded-xl px-4 py-2 border font-medium hover:bg-gray-50" > WhatsApp </a> </motion.div> ); }

// ========================= LANGUAGE PAGES ========================= function ArabicPage() { useSEO({ title: "تصميم مواقع في العراق | React, Next.js, WordPress", description: "باقات تصميم المواقع في العراق: React، Next.js، ووردبريس. تواصل عبر واتساب. نماذج أولية قبل الدفع.", lang: "ar", path: "/", altRefs: [ { lang: "fa", href: "/fa" }, { lang: "en", href: "/en" }, { lang: "ar", href: "/" }, ], });

const bullets = [ "سرعة عالية وتحسين SEO", "تصميم متجاوب لجميع الأجهزة", "دعم عربي كامل وRTL", ];

return ( <Shell dir="rtl" navLabel="خدمات تصميم المواقع" langLinks={[ { to: "/", label: "العربية" }, { to: "/fa", label: "فارسی" }, { to: "/en", label: "English" }, ]} ctaLabel="تواصل عبر واتساب" hero={ <div className="text-center"> <h1 className="text-3xl sm:text-4xl font-extrabold">تصميم مواقع احترافية في العراق</h1> <p className="mt-3 text-gray-600"> نبني مواقع سريعة وحديثة باستخدام React و Next.js و WordPress. </p> </div> } note={ <div className="leading-8"> <h3 className="text-xl font-semibold mb-2">نموذج أولي قبل الدفع</h3> <p> يمكننا إنشاء نموذج أولي عبر الإنترنت لمشروعك حتى تتأكد من الجودة والاتجاه العام، وبعدها تتم إجراءات الدفع واستكمال التنفيذ. </p> </div> } > {PACKAGES.ar.map((p) => ( <PackageCard key={p.id} title={p.title} price={p.price} alt={p.alt} bullets={bullets} /> ))} </Shell> ); }

function PersianPage() { useSEO({ title: "طراحی سایت در عراق | React, Next.js, WordPress", description: "بسته‌های طراحی سایت: ری‌اکت، نکست‌جی‌اس، وردپرس. واتساپ مستقیم. نمونه اولیه آنلاین قبل از پرداخت.", lang: "fa", path: "/fa", altRefs: [ { lang: "ar", href: "/" }, { lang: "en", href: "/en" }, { lang: "fa", href: "/fa" }, ], });

const bullets = [ "سرعت بالا و سئوی استاندارد", "طراحی ریسپانسیو برای موبایل و دسکتاپ", "پشتیبانی کامل زبان فارسی و راست‌چین", ];

return ( <Shell dir="rtl" navLabel="خدمات طراحی سایت" langLinks={[ { to: "/", label: "العربية" }, { to: "/fa", label: "فارسی" }, { to: "/en", label: "English" }, ]} ctaLabel="گفتگو در واتساپ" hero={ <div className="text-center"> <h1 className="text-3xl sm:text-4xl font-extrabold">طراحی سایت حرفه‌ای در عراق</h1> <p className="mt-3 text-gray-600"> پیاده‌سازی با React، Next.js و WordPress با تمرکز بر سئو و سرعت. </p> </div> } note={ <div className="leading-8"> <h3 className="text-xl font-semibold mb-2">نمونه اولیه قبل از پرداخت</h3> <p> ابتدا یک نمونه اولیه آنلاین برای شما می‌سازیم؛ پس از تأیید، واریز وجه انجام می‌شود و پروژه کامل می‌گردد. </p> </div> } > {PACKAGES.fa.map((p) => ( <PackageCard key={p.id} title={p.title} price={p.price} alt={p.alt} bullets={bullets} /> ))} </Shell> ); }

function EnglishPage() { useSEO({ title: "Web Design in Iraq | React, Next.js, WordPress", description: "Modern web design packages: React, Next.js, WordPress. WhatsApp contact. Online prototype before payment.", lang: "en", path: "/en", altRefs: [ { lang: "ar", href: "/" }, { lang: "fa", href: "/fa" }, { lang: "en", href: "/en" }, ], });

const bullets = [ "Fast performance & SEO", "Responsive on all devices", "English support, clean UI", ];

return ( <Shell dir="ltr" navLabel="Web Design Services" langLinks={[ { to: "/", label: "العربية" }, { to: "/fa", label: "فارسی" }, { to: "/en", label: "English" }, ]} ctaLabel="Chat on WhatsApp" hero={ <div className="text-center"> <h1 className="text-3xl sm:text-4xl font-extrabold">Modern Web Design in Iraq</h1> <p className="mt-3 text-gray-600"> Built with React, Next.js, and WordPress — optimized for speed and SEO. </p> </div> } note={ <div className="leading-8"> <h3 className="text-xl font-semibold mb-2">Prototype First</h3> <p> We deliver an online prototype to validate direction and quality. After your approval, payment is made and we complete the project. </p> </div> } > {PACKAGES.en.map((p) => ( <PackageCard key={p.id} title={p.title} price={p.price} bullets={bullets} /> ))} </Shell> ); }

// ========================= ROOT APP ========================= export default function App() { // Redirect unknown routes to Arabic home const Redirector = () => { const nav = useNavigate(); useEffect(() => { nav("/", { replace: true }); }, [nav]); return null; };

return ( <BrowserRouter> <Routes> <Route path="/" element={<ArabicPage />} /> <Route path="/fa" element={<PersianPage />} /> <Route path="/en" element={<EnglishPage />} /> <Route path="*" element={<Redirector />} /> </Routes> </BrowserRouter> ); }

