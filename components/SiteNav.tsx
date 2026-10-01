"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import WhatsappButton from "./WhatsappButton";

const pages = [
  ["/home", "Beranda"], ["/portofolio", "Karya"], ["/pricing", "Harga"],
  ["/process", "Proses"], ["/story", "Tentang"],
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20 mx-auto max-w-6xl border-b border-white/10 pb-4 md:pb-6">
      <div className="flex items-center justify-between gap-3">
        <Link href="/home" onClick={() => setOpen(false)} aria-label="Auron — beranda" className="flex min-h-11 items-center text-2xl font-black tracking-tight">AURON</Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 md:flex">
          {pages.map(([href, title]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`py-3 text-sm hover:text-yellow-400 ${pathname === href ? "text-yellow-400" : "text-neutral-300"}`}>{title}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <WhatsappButton label="navigation_contact" className="flex min-h-11 items-center border border-yellow-400/50 px-3 text-xs font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black md:px-5 md:text-sm">KONSULTASI</WhatsappButton>
          <button type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="min-h-11 min-w-11 border border-white/20 px-3 text-sm md:hidden">{open ? "Tutup" : "Menu"}</button>
        </div>
      </div>
      <nav id="mobile-menu" aria-label="Navigasi mobile" hidden={!open} className="mt-3 rounded-xl border border-white/10 bg-neutral-950 p-2 md:hidden" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
        {pages.map(([href, title]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? "page" : undefined} className={`block rounded-lg px-4 py-3 text-sm ${pathname === href ? "bg-yellow-400/10 text-yellow-400" : "text-neutral-200 hover:bg-white/5"}`}>{title}</Link>)}
      </nav>
    </header>
  );
}
