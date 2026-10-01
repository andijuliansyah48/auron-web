import SiteNav from "@/components/SiteNav";
import WhatsappButton from "@/components/WhatsappButton";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-5 py-5 md:px-6 md:py-10">
      {/* NAV */}
      <SiteNav />

      {/* HERO */}
      <section className="max-w-6xl mx-auto pt-10 pb-8 md:pt-16 md:pb-20">
        <p className="text-sm tracking-[0.4em] text-yellow-400 mb-6">
          OUR STORY
        </p>

        <h1 className="text-4xl md:text-7xl font-black leading-tight max-w-4xl">
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
        <WhatsappButton
          label="story_bottom_cta"
          className="inline-block bg-yellow-400 text-black px-10 py-4 font-bold tracking-widest hover:bg-white transition"
        >
          START YOUR DESIGN
        </WhatsappButton>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto mt-20 pt-10 border-t border-white/10 text-neutral-500 flex flex-col md:flex-row justify-between gap-4">
        <p>AURON FACTORY — MADE FOR VICTORY</p>
        <p>Palembang, Sumatera Selatan</p>
      </footer>
    </main>
  );
}