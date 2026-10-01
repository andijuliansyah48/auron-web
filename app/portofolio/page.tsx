import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import WhatsappButton from "@/components/WhatsappButton";

export default function PortfolioPage() {
 const portfolio = [
  {
    img: "/jersey1.webp",
    title: "Phoenix",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Clean blue identity dengan detail klasik dan kesan elite.",
  },
  {
    img: "/jersey2.webp",
    title: "Miami F.C",
    label: "CUSTOM TEAM JERSEY",
    desc: "Visual bold dengan nuansa neon, cocok untuk tim yang ingin standout.",
  },
  {
    img: "/jersey3.webp",
    title: "Sudirman",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Dark tactical look dengan karakter tegas dan profesional.",
  },
  {
    img: "/jersey4.webp",
    title: "Evergreen Ivory",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Kombinasi putih dan hijau dengan nuansa clean, klasik, dan fresh.",
  },
  {
    img: "/jersey5.webp",
    title: "Galaxy",
    label: "CUSTOM TEAM JERSEY",
    desc: "Identitas biru yang clean dengan detail modern dan sporty.",
  },
  {
    img: "/jersey6.webp",
    title: "Guard Ball",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Look maroon-gold yang terasa premium, heritage, dan powerful.",
  },
  {
    img: "/jersey7.webp",
    title: "The Growt",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Tema vintage luxury dengan warna soft dan detail ornamental.",
  },
  {
    img: "/jersey8.webp",
    title: "Green Leaf Rangers",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Motif hijau yang bold dengan nuansa natural, solid, dan kompetitif.",
  },
];
  return (
    <main className="min-h-screen bg-[#050505] text-white px-5 py-5 md:px-6 md:py-8">
      <SiteNav />

      <section className="max-w-6xl mx-auto py-10 md:py-24">
        <p className="text-sm tracking-[0.45em] text-yellow-400 mb-6">
          PORTFOLIO
        </p>

        <h1 className="text-4xl md:text-7xl font-black tracking-[-0.05em] leading-tight max-w-4xl">
          Desain jersey dengan karakter yang kuat.
        </h1>

        <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
          Beberapa karya awal Auron Factory untuk tim yang ingin tampil beda,
          bukan sekadar punya seragam.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-8 md:gap-8 md:mt-16">
          {portfolio.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden aspect-[4/5] rounded-2xl md:rounded-[2rem] border border-white/10 bg-white/[0.03]"
            >
              <Image
                src={item.img}
                fill
                sizes="(min-width: 1200px) 560px, (min-width: 768px) 45vw, calc(100vw - 40px)"
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <p className="text-xs tracking-[0.15em] md:tracking-[0.35em] text-yellow-400 mb-3">
                  {item.label}
                </p>

                <h3 className="text-3xl font-black">{item.title}</h3>

                <p className="mt-3 text-neutral-300 max-w-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-32 border-t border-white/10 pt-10 md:pt-20 text-center">
          <p className="text-sm tracking-[0.45em] text-yellow-400 mb-6">
            START YOUR DESIGN
          </p>

          <h2 className="text-3xl md:text-6xl font-black tracking-[-0.05em] leading-tight max-w-3xl mx-auto">
            Sekarang giliran tim kamu tampil beda.
          </h2>

          <p className="mt-6 text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
            Konsultasi gratis. Ceritakan konsep tim kamu, dan kami bantu ubah
            jadi jersey yang punya karakter.
          </p>

          <div className="mt-10 flex justify-center">
            <WhatsappButton
              label="portfolio_bottom_cta"
              className="px-8 py-4 bg-yellow-400 text-black font-bold tracking-wide hover:scale-105 transition duration-300"
            >
              CHAT VIA WHATSAPP
            </WhatsappButton>
          </div>
        </div>
      </section>
    </main>
  );
}