"use client";

import Image from "next/image";
import WhatsappButton from "@/components/WhatsappButton";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden relative">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.16),transparent_35%)]" />

      <section className="relative max-w-6xl mx-auto text-center z-10">

        {/* TAGLINE */}
        <p className="text-xs tracking-[0.5em] text-yellow-400 mb-3">
          CUSTOM JERSEY MANUFACTURER
        </p>

        <p className="text-xs tracking-[0.3em] text-yellow-400 mb-8">
          PALEMBANG, INDONESIA
        </p>

        {/* LOGO + TITLE */}
        <div className="flex items-center justify-center flex-col gap-4 sm:flex-row sm:gap-8 md:gap-12">
          <Image
            src="/auron-logo.webp"
            width={128}
            height={128}
            alt="Auron Logo"
            className="w-20 md:w-32 drop-shadow-[0_0_50px_rgba(250,204,21,0.35)]"
          />

          <h1 className="text-6xl md:text-9xl font-black tracking-[-0.06em]">
            AURON
          </h1>
        </div>

        {/* TAGLINE */}
        <p className="mt-8 text-sm md:text-xl text-neutral-300 tracking-[0.35em]">
          MADE FOR VICTORY
        </p>

        {/* CTA MASUK WEBSITE */}
        <a
          href="/home"
          className="inline-block mt-12 border border-yellow-400/50 px-12 py-4 text-sm tracking-[0.35em] text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
        >
          LIHAT WEBSITE
        </a>

        {/* CTA WHATSAPP */}
        <div className="mt-6">
          <WhatsappButton
            label="welcome_contact"
            className="text-sm text-neutral-500 hover:text-white transition"
          >
            Konsultasi via WhatsApp
          </WhatsappButton>
        </div>

      </section>
    </main>
  );
}
