const whatsappLink =
  "https://wa.me/628131772818?text=Halo%20Auron%2C%20saya%20mau%20konsultasi%20desain.%0A%0ANama%20Tim%3A%0AJumlah%3A%0AKonsep%3A";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.16),transparent_35%)]" />

      <section className="relative max-w-6xl mx-auto text-center">
        <p className="text-xs tracking-[0.5em] text-yellow-400 mb-3">
          CUSTOM JERSEY MANUFACTURER
        </p>

        <p className="text-xs tracking-[0.3em] text-yellow-400 mb-8">
          PALEMBANG, INDONESIA
        </p>

        <div className="flex items-center justify-center gap-8 md:gap-12">
          <img
            src="/auron-logo.png"
            alt="Auron Logo"
            className="w-20 md:w-32 drop-shadow-[0_0_50px_rgba(250,204,21,0.35)]"
          />

          <h1 className="text-6xl md:text-9xl font-black tracking-[-0.06em]">
            AURON
          </h1>
        </div>

        <p className="mt-8 text-sm md:text-xl text-neutral-300 tracking-[0.35em]">
          MADE FOR VICTORY
        </p>

        <a
          href="/home"
          className="inline-block mt-12 border border-yellow-400/50 px-12 py-4 text-sm tracking-[0.35em] text-yellow-400 hover:bg-yellow-400 hover:text-black transition cursor-pointer"
        >
          WELCOME
        </a>

        <a
          href={whatsappLink}
          className="block mt-6 text-sm text-neutral-500 hover:text-white transition"
        >
          Contact via WhatsApp
        </a>
      </section>
    </main>
  );
}