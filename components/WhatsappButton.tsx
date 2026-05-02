"use client";

type Props = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export default function WhatsappButton({ label, children, className }: Props) {
  const whatsappLink =
    "https://wa.me/628131772818?text=Halo%20Auron%2C%20saya%20mau%20konsultasi%20desain.%0A%0ANama%20Tim%3A%0AJumlah%3A%0AKonsep%3A";

  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        event_category: "engagement",
        event_label: label,
      });
    }
  };

  return (
    <a href={whatsappLink} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}