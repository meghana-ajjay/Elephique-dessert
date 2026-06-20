import { ArrowUpRight } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';
import { galleryGroups } from '../data/content.js';

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-ivory">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <SectionKicker text="Gallery" />
          <h2 className="section-title">A little glimpse into our sweet world.</h2>
        </div>
        <a href="@elephique_bake_mysore" className="inline-flex items-center gap-2 font-bold text-rose transition hover:text-cocoa">
          View on Instagram <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="mt-10 grid auto-rows-[15rem] gap-4 md:grid-cols-3">
        {galleryGroups.map((item) => (
          <figure key={item.label} className={`group relative overflow-hidden rounded-lg bg-cocoa ${item.className}`}>
            <img src={item.image} alt={`${item.label} by Elephique`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 text-ivory">
              <span className="font-display text-2xl font-semibold sm:text-3xl">{item.label}</span>
              <ArrowUpRight size={20} className="shrink-0 text-gold" />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
