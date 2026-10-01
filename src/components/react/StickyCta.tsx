import { useEffect, useState } from "react";
import { withTracking } from "../../lib/checkout";

interface Props {
  href: string;
  label: string;
  price: string;
}

/** Barra CTA fija en móvil: aparece tras el hero y se oculta cuando la oferta es visible. */
export default function StickyCta({ href, label, price }: Props) {
  const [pastHero, setPastHero] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);
  const [link, setLink] = useState(href);

  useEffect(() => {
    setLink(withTracking(href, window.location.search));
  }, [href]);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const offer = document.getElementById("oferta");
    const observers: IntersectionObserver[] = [];

    if (hero) {
      const io = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting));
      io.observe(hero);
      observers.push(io);
    }
    if (offer) {
      const io = new IntersectionObserver(([entry]) => setOfferVisible(entry.isIntersecting));
      io.observe(offer);
      observers.push(io);
    }
    return () => observers.forEach((io) => io.disconnect());
  }, []);

  const visible = pastHero && !offerVisible;

  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-sage-200 bg-cream-50/95 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-md items-center gap-3">
        <span className="font-display text-xl font-bold text-ink">{price}</span>
        <a
          href={link}
          rel="noopener"
          className="flex-1 rounded-full bg-honey-400 px-5 py-3 text-center text-sm font-bold text-ink shadow-md transition active:scale-[0.98]"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
