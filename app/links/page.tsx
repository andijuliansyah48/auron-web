export default function LinksPage() {
  const links = [
    { title: "ORDER VIA WHATSAPP", href: "https://wa.me/628131772818" },
    { title: "WEBSITE", href: "https://auron-web-xi.vercel.app" },
    { title: "INSTAGRAM", href: "https://www.instagram.com/auron.factory" },
    { title: "ALAMAT WORKSHOP", href: "https://maps.app.goo.gl/9vY1noxXFah9pXwX6" },
    { title: "KATALOG JERSEY", href: "https://drive.google.com/file/d/1GmgFVpM5Ga1SAOpkBjOJWEiP3NMQDWEe/view?usp=sharing" },
    { title: "KATALOG PAKAIAN UMUM", href: "https://drive.google.com/file/d/1lD1zXkZTJUagQcB9nhCldhHrM9KSsYuO/view?usp=sharing" },
  ];

  return (
    <main
      className="relative min-h-screen text-white px-5 py-8 flex justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg-links.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <section className="relative z-10 w-full max-w-md">
        <div className="text-center pt-8 pb-10">
          <img
            src="/auron-logo.png"
            alt="Auron Factory"
            className="w-28 h-28 mx-auto mb-6 object-contain"
          />

          <p className="text-xs tracking-[0.45em] text-yellow-400 mb-3">
            MADE FOR VICTORY
          </p>

          <h1 className="text-4xl font-black tracking-[-0.05em]">
            AURON FACTORY
          </h1>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            Custom Jersey Apparel Palembang
            <br />
            Monday-Saturday 08.00–17.00
          </p>
        </div>

        <div className="space-y-4">
          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              className="group block border border-yellow-400 bg-yellow-400 text-black rounded-none px-6 py-5 text-center font-bold tracking-wide hover:bg-yellow-300 transition"
            >
              {item.title}
            </a>
          ))}
        </div>

        <footer className="text-center mt-10 text-xs text-neutral-500 tracking-[0.3em]">
          AURON FACTORY — PALEMBANG
        </footer>
      </section>
    </main>
  );
}