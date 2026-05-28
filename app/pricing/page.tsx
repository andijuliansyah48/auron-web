import WhatsappButton from "@/components/WhatsappButton";

export default function PricingPage() {
  const packages = [
    {
      image: "/images/package-standard.png",
      name: "Print Baju Saja",
      price: "Rp150.000",
      desc: "Pilihan paling seimbang antara visual dan harga.",
      badge: "MOST POPULAR",
      highlight: true,
      label: "pricing_package_130k",
    },
    {
      image: "/images/package-premium.png",
      name: "Full Print",
      price: "Rp160.000",
      desc: "Untuk tim yang ingin tampil maksimal tanpa kompromi.",
      label: "pricing_package_150k",
    },
  ];

  const fabrics = [
    "Milano: Free",
    "Airwalk: +Rp10.000",
    "Emboss: +Rp20.000",
    "Jacquard: +Rp25.000",
  ];

  const addons = [
    "Tanpa celana: -Rp20.000",
    "Size anak: -Rp15.000",
    "Lengan panjang: +Rp10.000 / +Rp15.000",
    "Celana 3/4: +Rp10.000 / +Rp15.000",
    "Celana panjang: +Rp20.000 / +Rp30.000",
    "Logo DTF / Bordir / Woven / 3D Rubber: +Rp10.000",
    "Polyflex sponsor: +Rp10.000",
    "Polyflex nameset: +Rp30.000",
  ];

  const bonuses = [
    "Order 12 pcs: gratis 1 jersey",
    "Order 30 pcs: gratis team flag",
    "Order 50 pcs: gratis duffle bag",
    "Free string bag (paket + celana)",
    "Sticker pack",
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 md:px-16 py-10">
      {/* NAV */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center border-b border-white/10 pb-6">
        <a href="/" className="text-2xl font-black tracking-[-0.04em]">
          AURON
        </a>

        <a
          href="/"
          className="text-sm border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
        >
          BACK
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto pt-16 pb-20">
        <p className="text-sm tracking-[0.4em] text-yellow-400 mb-6">
          PRICE LIST
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-3xl">
          Pilih paket jersey sesuai kebutuhan tim lo.
        </h1>
      </section>

      {/* PACKAGES */}
      <section className="w-full max-w-none grid md:grid-cols-2 gap-6">
        {packages.map((item) => (
          <div
            key={item.name}
            className={`group relative overflow-hidden rounded-3xl bg-white/[0.04] border transition duration-500 ${
              item.highlight
                ? "border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.15)]"
                : "border-white/10 hover:border-yellow-400/50"
            }`}
          >
            {item.badge && (
              <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-black text-[10px] font-black tracking-[0.2em] px-3 py-2">
                {item.badge}
              </div>
            )}

            <div className="aspect-[4/5] bg-black overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-xl font-bold">{item.name}</h3>

              <p className="text-4xl font-black mt-6 text-yellow-400">
                {item.price}
              </p>

              <p className="text-neutral-400 mt-6 leading-relaxed">
                {item.desc}
              </p>

              <WhatsappButton
                label={item.label}
                className="inline-block mt-8 border border-yellow-400 text-yellow-400 px-6 py-3 text-sm hover:bg-yellow-400 hover:text-black transition"
              >
                ORDER
              </WhatsappButton>
            </div>
          </div>
        ))}
      </section>

      {/* EXTRA */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-12">
        <div className="border border-white/10 p-8 rounded-3xl bg-white/[0.04]">
          <h3 className="text-xl font-bold mb-6 text-yellow-400">
            Upgrade Bahan
          </h3>
          {fabrics.map((item) => (
            <p key={item} className="text-neutral-400 mb-3">
              {item}
            </p>
          ))}
        </div>

        <div className="border border-white/10 p-8 rounded-3xl bg-white/[0.04]">
          <h3 className="text-xl font-bold mb-6 text-yellow-400">
            Add-On
          </h3>
          {addons.map((item) => (
            <p key={item} className="text-neutral-400 mb-3">
              {item}
            </p>
          ))}
        </div>

        <div className="border border-white/10 p-8 rounded-3xl bg-white/[0.04]">
          <h3 className="text-xl font-bold mb-6 text-yellow-400">
            Bonus
          </h3>
          {bonuses.map((item) => (
            <p key={item} className="text-neutral-400 mb-3">
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto mt-32 border-t border-white/10 pt-20 text-center">
        <p className="text-sm tracking-[0.45em] text-yellow-400 mb-6">
          READY TO ORDER
        </p>

        <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-3xl mx-auto">
          Bingung pilih paket? Konsultasi dulu aja.
        </h2>

        <p className="mt-6 text-neutral-400 text-lg max-w-xl mx-auto">
          Ceritakan kebutuhan tim kamu, jumlah order, dan konsep desainnya.
          Kami bantu arahkan paket terbaik.
        </p>

        <div className="mt-10 flex justify-center">
          <WhatsappButton
            label="pricing_bottom_cta"
            className="px-8 py-4 bg-yellow-400 text-black font-bold hover:scale-105 transition"
          >
            CHAT VIA WHATSAPP
          </WhatsappButton>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto mt-20 pt-10 border-t border-white/10 text-neutral-500 flex flex-col md:flex-row justify-between gap-4">
        <p>AURON FACTORY — MADE FOR VICTORY</p>
        <p>Palembang, Sumatera Selatan</p>
      </footer>
    </main>
  );
}