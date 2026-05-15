import WhatsappButton from "@/components/WhatsappButton";

export default function PortfolioPage() {
 const portfolio = [
  {
    img: "/jersey1.png",
    title: "Phoenix",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Clean blue identity dengan detail klasik dan kesan elite.",
  },
  {
    img: "/jersey2.png",
    title: "Miami F.C",
    label: "CUSTOM TEAM JERSEY",
    desc: "Visual bold dengan nuansa neon, cocok untuk tim yang ingin standout.",
  },
  {
    img: "/jersey3.png",
    title: "Sudirman",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Dark tactical look dengan karakter tegas dan profesional.",
  },
  {
    img: "/jersey4.png",
    title: "Evergreen Ivory",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Kombinasi putih dan hijau dengan nuansa clean, klasik, dan fresh.",
  },
  {
    img: "/jersey5.png",
    title: "Galaxy",
    label: "CUSTOM TEAM JERSEY",
    desc: "Identitas biru yang clean dengan detail modern dan sporty.",
  },
  {
    img: "/jersey6.png",
    title: "Guard Ball",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Look maroon-gold yang terasa premium, heritage, dan powerful.",
  },
  {
    img: "/jersey7.png",
    title: "The Growt",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Tema vintage luxury dengan warna soft dan detail ornamental.",
  },
  {
    img: "/jersey8.png",
    title: "Green Leaf Rangers",
    label: "CUSTOM FOOTBALL JERSEY",
    desc: "Motif hijau yang bold dengan nuansa natural, solid, dan kompetitif.",
  },
];
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-8">
      <nav className="max-w-6xl mx-auto flex justify-between items-center border-b border-white/10 pb-6">
        <a href="/" className="text-2xl font-black tracking-[-0.04em]">
          AURON
        </a>

        <WhatsappButton
          label="portfolio_nav_order"
          className="text-sm border border-yellow-400/50 text-yellow-400 px-5 py-2 hover:bg-yellow-400 hover:text-black transition"
        >
          ORDER NOW
        </WhatsappButton>
      </nav>

      <section className="max-w-6xl mx-auto py-24">
        <p className="text-sm tracking-[0.45em] text-yellow-400 mb-6">
          PORTFOLIO
        </p>

        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-tight max-w-4xl">
          Desain jersey dengan karakter yang kuat.
        </h1>

        <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
          Beberapa karya awal Auron Factory untuk tim yang ingin tampil beda,
          bukan sekadar punya seragam.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {portfolio.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs tracking-[0.35em] text-yellow-400 mb-3">
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

        <div className="mt-32 border-t border-white/10 pt-20 text-center">
          <p className="text-sm tracking-[0.45em] text-yellow-400 mb-6">
            START YOUR DESIGN
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-tight max-w-3xl mx-auto">
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