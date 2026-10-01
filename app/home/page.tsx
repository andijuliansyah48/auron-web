import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import WhatsappButton from "@/components/WhatsappButton";

const explore = [
  { title: "Karya jersey", desc: "Temukan inspirasi tim kamu.", href: "/portofolio", image: "/explore-portfolio.webp" },
  { title: "Paket & harga", desc: "Pilih sesuai kebutuhan tim.", href: "/pricing", image: "/explore-pricing.webp" },
  { title: "Proses order", desc: "Dari konsultasi sampai dikirim.", href: "/process", image: "/explore-process.webp" },
  { title: "Tentang Auron", desc: "Kenali cerita di balik Auron.", href: "/story", image: "/explore-story.webp" },
];
const benefits = [
  { title: "Desain berkarakter", desc: "Setiap jersey punya konsep, bukan sekadar template." },
  { title: "Produksi serius", desc: "Bahan, detail desain, dan finishing benar-benar diperhatikan." },
  { title: "Proses jelas", desc: "Alur transparan dari konsultasi sampai barang diterima." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 py-5 text-white md:px-6 md:py-8">
      <SiteNav />
      <section className="mx-auto grid max-w-6xl items-center gap-8 py-10 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <p className="mb-4 text-xs tracking-[0.25em] text-yellow-400 md:text-sm">CUSTOM JERSEY · PALEMBANG</p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.05em] md:text-7xl">Jersey bukan sekadar desain. Ini identitas tim.</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300 md:mt-8 md:text-lg">Auron Factory membantu tim menciptakan jersey custom dengan karakter, filosofi, dan kualitas produksi yang terasa berbeda.</p>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-10">
            <WhatsappButton label="home_hero_order" className="flex min-h-12 items-center justify-center bg-yellow-400 px-5 text-sm font-black text-black transition hover:bg-white">KONSULTASI JERSEY</WhatsappButton>
            <Link href="/pricing" className="flex min-h-12 items-center justify-center border border-white/25 px-5 text-sm font-bold hover:border-yellow-400">LIHAT HARGA</Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 md:rounded-3xl">
          <Image src="/jersey1.webp" alt="Jersey Phoenix biru dengan detail emas dari Auron Factory" fill sizes="(min-width: 1200px) 544px, (min-width: 768px) 45vw, calc(100vw - 40px)" preload className="object-cover" />
        </div>
      </section>
      <section className="mx-auto max-w-6xl border-t border-white/10 py-10 md:py-20">
        <h2 className="mb-5 text-xs font-bold tracking-[0.25em] text-yellow-400">JELAJAHI AURON</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {explore.map((item) => <Link key={item.href} href={item.href} className="group relative flex min-h-36 flex-col justify-between overflow-hidden rounded-xl border border-white/15 bg-white/[0.04] p-4 transition hover:border-yellow-400/50 md:min-h-72 md:rounded-3xl md:p-6">
            <div className="absolute inset-0 hidden md:block"><Image src={item.image} alt="" fill sizes="(min-width: 1200px) 270px, 25vw" className="object-cover brightness-[0.25]" /></div>
            <h3 className="relative text-lg font-black leading-tight md:text-2xl">{item.title}</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-neutral-300">{item.desc} <span aria-hidden="true" className="text-yellow-400">↗</span></p>
          </Link>)}
        </div>
      </section>
      <section className="mx-auto max-w-6xl border-t border-white/10 py-10 md:py-20">
        <p className="mb-4 text-xs tracking-[0.25em] text-yellow-400">WHY AURON</p>
        <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-6xl">Dibuat untuk dipakai. Dan dibanggakan.</h2>
        <div className="mt-6 grid gap-3 md:mt-10 md:grid-cols-3 md:gap-6">
          {benefits.map((item, index) => <div key={item.title} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 md:block md:p-7">
            <span aria-hidden="true" className="text-sm font-black text-yellow-400 md:mb-5 md:block">0{index + 1}</span>
            <div><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-neutral-300">{item.desc}</p></div>
          </div>)}
        </div>
      </section>
      <section className="mx-auto max-w-6xl border-t border-white/10 py-12 text-center md:py-24">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight md:text-6xl">Siap bikin jersey tim lo naik kelas?</h2>
        <WhatsappButton label="home_bottom_order" className="mt-6 inline-flex min-h-12 items-center bg-yellow-400 px-6 text-sm font-black text-black hover:bg-white md:mt-10">KONSULTASI VIA WHATSAPP</WhatsappButton>
      </section>
      <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-3 border-t border-white/10 py-8 text-xs text-neutral-400 md:flex-row md:py-14 md:text-sm"><p>AURON FACTORY — MADE FOR VICTORY</p><p>Palembang, Sumatera Selatan</p></footer>
    </main>
  );
}
