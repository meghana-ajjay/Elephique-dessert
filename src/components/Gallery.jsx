import { ArrowRight } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';
import { galleryImages } from '../data/content.js';

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <SectionKicker text="Gallery" />
          <h2 className="section-title">A visual style for premium local desserts and celebration orders.</h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-rosewood transition hover:text-cocoa">Plan an order <ArrowRight size={18} /></a>
      </div>
      <div className="mt-10 grid auto-rows-[15rem] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <figure key={image.alt} className={`group overflow-hidden rounded-[1.5rem] bg-cocoa shadow-soft ${index === 0 || index === 5 ? 'lg:row-span-2' : ''}`}>
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
          </figure>
        ))}
      </div>
    </section>
  );
}
