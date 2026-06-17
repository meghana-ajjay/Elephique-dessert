import SectionKicker from './SectionKicker.jsx';
import { menuItems } from '../data/content.js';

export default function MenuSection() {
  return (
    <section id="menu" className="section bg-ivory">
      <div className="mx-auto max-w-3xl text-center">
        <SectionKicker text="Menu highlights" />
        <h2 className="section-title">Client-ready menu ideas for cakes, bakes, and dessert boxes.</h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {menuItems.map((item) => (
          <article key={item.name} className="group rounded-[1.5rem] border border-cocoa/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="rounded-full bg-pistachio/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-pistachio">{item.tag}</span>
                <h3 className="mt-4 font-display text-3xl font-semibold text-cocoa">{item.name}</h3>
              </div>
              <span className="font-display text-3xl font-semibold text-rosewood">{item.price}</span>
            </div>
            <p className="mt-4 leading-7 text-ink/60">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
