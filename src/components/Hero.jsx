import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[94vh] bg-cocoa pt-24 text-cream">
      <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1800&q=85" alt="Premium bakery counter with pastries" className="absolute inset-0 h-full w-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-b from-cocoa/50 via-cocoa/60 to-cocoa/90" />
      <div className="relative mx-auto flex min-h-[calc(94vh-6rem)] max-w-7xl items-center px-5 pb-20 pt-12 lg:px-8">
        <div className="max-w-3xl animate-fadeUp">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 text-sm backdrop-blur">
            <Sparkles size={16} />
            Dessert and baking shop in Mysore
          </div>
          <img src="/elephique-logo.jpeg" alt="Elephique logo" className="mb-7 h-28 w-28 rounded-full border border-gold/45 bg-ivory object-cover p-1 shadow-glow sm:h-36 sm:w-36" />
          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">Elephique</h1>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.28em] text-gold">Where desserts become art.</p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/90 sm:text-xl">A premium Mysore dessert and baking shop for custom cakes, brownies, pastries, dessert boxes, and celebration-ready sweet tables.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#menu" className="btn-primary">Explore Desserts <ArrowRight size={18} /></a>
            <a href="#gallery" className="btn-secondary">View Gallery</a>
          </div>
        </div>
      </div>
      <div
        className="
          absolute
          bottom-0
          left-1/2
          grid
          w-[min(92%,62rem)]
          -translate-x-1/2
          translate-y-[35%]
          sm:translate-y-1/2
          grid-cols-1
          overflow-hidden
          rounded-[1.75rem]
          bg-ivory
          text-cocoa
          shadow-soft
          sm:grid-cols-3
        "
      >
              {[
          ['Mysore', 'Local dessert shop'],
          ['Fresh', 'Baked to order'],
          ['Custom', 'Cakes and hampers'],
        ].map(([stat, label]) => (
          <div key={label} className="border-b border-cocoa/10 px-7 py-6 text-center last:border-0 sm:border-b-0 sm:border-r">
            <div className="font-display text-4xl font-semibold">{stat}</div>
            <div className="mt-1 text-sm font-medium uppercase tracking-[0.22em] text-cocoa/60">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
