export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">
      
      {/* NAV */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center border-b border-white/10 pb-6">
        <h1 className="text-2xl font-black">AURON</h1>

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
          OUR STORY
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl">
          Dari keresahan tim lokal, lahir tempat bikin jersey tanpa ribet.
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto space-y-8 text-lg text-neutral-400 leading-relaxed">
        <p>
          Auron Factory lahir dari satu keresahan sederhana: kenapa tim lokal harus ribet dan jauh hanya untuk membuat jersey yang layak dipakai bertanding?
        </p>

        <p>
          Kami melihat banyak tim yang punya semangat besar, tapi terhambat oleh proses yang tidak praktis dan hasil yang tidak sesuai ekspektasi.
        </p>

        <p>
          Karena itu, Auron hadir bukan hanya sebagai tempat produksi, tapi sebagai partner dalam membangun identitas tim.
        </p>

        <p>
          Setiap desain bukan sekadar visual. Tapi representasi karakter, semangat, dan kebanggaan tim.
        </p>

        <p className="text-white font-bold text-xl">
          Jersey berkualitas, tanpa ribet.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto mt-20 text-center">
        <a
          href="https://wa.me/628131772818?text=Halo%20Auron%2C%20saya%20mau%konsultasu%desain.%0A%0ANama%20Tim%3A%0AJumlah%3A%0AKonsep%3A"
          className="inline-block bg-yellow-400 text-black px-10 py-4 font-bold tracking-widest hover:bg-white transition"
        >
          START YOUR DESIGN
        </a>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto mt-20 pt-10 border-t border-white/10 text-neutral-500 flex justify-between">
        <p>AURON FACTORY</p>
        <p>Palembang, Indonesia</p>
      </footer>
    </main>
  );
}