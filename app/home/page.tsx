"use client";

import WhatsappButton from "@/components/WhatsappButton";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-8 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_30%)]" />

      <nav className="relative max-w-6xl mx-auto flex justify-between items-center border-b border-white/10 pb-6">
        <a href="/" className="text-2xl font-black tracking-[-0.04em]">
          AURON
        </a>

        <WhatsappButton
          label="home_nav_order"
          className="text-sm border border-yellow-400/50 text-yellow-400 px-5 py-2 hover:bg-yellow-400 hover:text-black transition"
        >
          ORDER NOW
        </WhatsappButton>
      </nav>

      <section className="relative max-w-6xl mx-auto pt-24 pb-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp}>
          <p className="text-sm tracking-[0.45em] text-yellow-400 mb-6">
            WHO WE ARE
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.05em]">
            Jersey bukan sekadar desain. Ini identitas tim.
          </h2>

          <p className="mt-8 text-neutral-400 text-lg leading-relaxed max-w-xl">
            Auron Factory membantu tim menciptakan jersey custom dengan
            karakter, filosofi, dan kualitas produksi yang terasa berbeda.
          </p>

          <WhatsappButton
            label="home_hero_order"
            className="inline-block mt-10 bg-yellow-400 text-black px-9 py-4 text-sm tracking-widest font-black hover:bg-white transition"
          >
            ORDER NOW
          </WhatsappButton>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-yellow-400/10 blur-3xl rounded-full" />
          <img
            src="/jersey1.png"
            alt="Auron Jersey"
            className="relative w-full rounded-3xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </section>

      <section className="relative max-w-6xl mx-auto py-28 border-t border-white/10">
        <motion.p
          {...fadeUp}
          className="text-sm tracking-[0.45em] text-yellow-400 mb-10"
        >
          EXPLORE
        </motion.p>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "PORTFOLIO",
              desc: "Lihat hasil desain jersey kami.",
              href: "/portofolio",
              image: "/explore-portfolio.png",
            },
            {
              title: "PAKET JERSEY",
              desc: "Pilih paket sesuai kebutuhan tim.",
              href: "/pricing",
              image: "/explore-pricing.png",
            },
            {
              title: "PROSES",
              desc: "Alur produksi dari awal sampai jadi.",
              href: "/process",
              image: "/explore-process.png",
            },
            {
              title: "OUR STORY",
              desc: "Cerita di balik Auron Factory.",
              href: "/story",
              image: "/explore-story.png",
            },
          ].map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              {...fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="relative group h-[300px] md:h-[340px] rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-400/50 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover blur-md scale-110 brightness-[0.35] group-hover:brightness-[0.5] group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm text-neutral-300 max-w-xs leading-relaxed opacity-80 group-hover:opacity-100 transition">
                  {item.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto py-24 border-t border-white/10">
        <motion.div {...fadeUp}>
          <p className="text-sm tracking-[0.45em] text-yellow-400 mb-6">
            WHY AURON
          </p>

          <h2 className="text-4xl md:text-6xl font-black max-w-3xl leading-tight">
            Dibuat bukan cuma untuk dipakai. Tapi untuk dibanggakan.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "DESAIN BERKARAKTER",
              desc: "Setiap jersey punya konsep, bukan sekadar template.",
              image: "/why-design.png",
            },
            {
              title: "PRODUKSI SERIUS",
              desc: "Detail desain, bahan, dan finishing benar-benar diperhatikan.",
              image: "/why-production.png",
            },
            {
              title: "PROSES JELAS",
              desc: "Alur kerja transparan dari awal sampai barang diterima.",
              image: "/why-process.png",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="relative group h-[300px] md:h-[340px] rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-400/50 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover blur-md scale-110 brightness-[0.35] group-hover:brightness-[0.5] group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm text-neutral-300 max-w-xs leading-relaxed opacity-80 group-hover:opacity-100 transition">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative max-w-4xl mx-auto py-24 text-center border-t border-white/10">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Siap bikin jersey tim lo naik kelas?
          </h2>

          <WhatsappButton
            label="home_bottom_order"
            className="inline-block mt-10 bg-yellow-400 text-black px-10 py-5 font-black tracking-widest hover:bg-white transition"
          >
            ORDER SEKARANG
          </WhatsappButton>
        </motion.div>
      </section>

      <footer className="relative max-w-6xl mx-auto py-14 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-neutral-500">
        <p>AURON FACTORY — MADE FOR VICTORY</p>
        <p>Palembang, Sumatera Selatan</p>
      </footer>
    </main>
  );
}