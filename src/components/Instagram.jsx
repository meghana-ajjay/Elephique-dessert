import { Camera } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import SectionKicker from './SectionKicker.jsx';
import { galleryGroups } from '../data/content.js';

export default function Instagram() {
  return (
    <section className="bg-blush/55 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionKicker text="Instagram" />
            <h2 className="section-title">Follow Our Sweet Journey</h2>
            <p className="mt-4 text-ink/60">@elephique_bake_mysore</p>
          </div>
          <a href="https://instagram.com/" className="inline-flex items-center justify-center gap-2 rounded-full bg-rose px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-cocoa">
            <FaInstagram size={19} /> Follow on Instagram
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
          {galleryGroups.map((item) => (
            <div key={item.label} className="group aspect-square overflow-hidden bg-ivory">
              <img src={item.image} alt={`${item.label} Instagram preview`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
