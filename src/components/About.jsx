import { ChefHat, Clock3, Heart } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';

export default function About() {
  return (
    <section id="about" className="section pt-24 sm:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80" alt="Baker preparing fresh croissants" className="h-[28rem] w-full rounded-[2rem] object-cover shadow-soft" />
          <div className="absolute -bottom-8 right-5 max-w-xs rounded-3xl bg-ivory p-6 shadow-soft sm:right-10">
            <ChefHat className="mb-3 text-rosewood" size={28} />
            <p className="font-display text-2xl font-semibold text-cocoa">Premium cakes and desserts made for Mysore celebrations.</p>
          </div>
        </div>
        <div className="lg:pl-8">
          <SectionKicker text="About the bakery" />
          <h2 className="section-title">A local dessert studio with a premium, artful finish.</h2>
          <p className="mt-6 text-lg leading-8 text-ink/70">Elephique brings elegant baking to Mysore with cakes, pastries, brownies, hampers, and dessert tables made for birthdays, weddings, gifting, and everyday cravings. The brand style is refined, warm, and memorable.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Feature icon={<Heart size={21} />} title="Occasion ready" text="Custom cakes and dessert boxes for birthdays, engagements, events, and gifting." />
            <Feature icon={<Clock3 size={21} />} title="Made fresh" text="Small-batch baking with careful finishing, timely pickup, and local delivery options." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-cocoa/10 bg-ivory p-5">
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-rosewood/10 text-rosewood">{icon}</div>
      <h3 className="font-display text-2xl font-semibold text-cocoa">{title}</h3>
      <p className="mt-2 leading-7 text-ink/60">{text}</p>
    </div>
  );
}
