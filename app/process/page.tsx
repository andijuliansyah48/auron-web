import WhatsappButton from "@/components/WhatsappButton";

export default function ProcessPage() {
  const process = [
    [
      "01",
      "Konsultasi",
      "Konsultasikan desain seperti apa yang diinginkan dan pilih paket yang paling sesuai.",
    ],
    ["02", "DP 50%", "Order masuk setelah pembayaran DP 50%."],
    [
      "03",
      "Produksi 21 Hari",
      "Proses pengerjaan dihitung sejak DP masuk. Estimasi produksi 21 hari.",
    ],
    ["04", "Pelunasan", "Pelunasan dilakukan setelah produksi selesai."],
    ["05", "Dikirim", "Barang dikemas dan dikirim ke alamat customer."],
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">
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
          PROCESS
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl">
          Free konsultasi. Free desain. Produksi jelas.
        </h1>

        <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
          Dari konsep awal sampai jersey dikirim, semua proses dibuat jelas
          supaya tim kamu bisa order dengan tenang.
        </p>
      </section>

      {/* STEPS */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {process.map(([step, title, desc]) => (
          <div
            key={step}
            className="border border-white/10 bg-white/[0.04] p-7 rounded-3xl hover:border-yellow-400/50 transition"
          >
            <div className="h-11 w-11 bg-yellow-400 text-black flex items-center justify-center font-black mb-8">
              {step}
            </div>

            <h3 className="text-xl font-bold mb-4">{title}</h3>

            <p className="text-neutral-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto mt-32 border-t border-white/10 pt-20 text-center">
        <p className="text-sm tracking-[0.45em] text-yellow-400 mb-6">
          START YOUR ORDER
        </p>

        <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-3xl mx-auto">
          Sudah punya konsep? Langsung konsultasi dulu.
        </h2>

        <p className="mt-6 text-neutral-400 text-lg max-w-xl mx-auto">
          Ceritakan nama tim, jumlah jersey, warna, referensi desain, atau
          konsep yang ingin kamu bawa.
        </p>

        <div className="mt-10 flex justify-center">
          <WhatsappButton
            label="process_bottom_cta"
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