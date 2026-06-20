import { Heart, MapPin, Sparkles, HeartHandshake } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';

export default function About() {
  return (
    <section id="about us" className="section">
      <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/33100288/pexels-photo-33100288.jpeg"
            alt="Pastry chef carefully finishing a handcrafted dessert"
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/30 bg-ivory/95 p-5 shadow-soft backdrop-blur sm:bottom-8 sm:left-auto sm:right-[-1.5rem] sm:max-w-xs sm:p-7">
            <div className="mb-4 flex items-center gap-3 text-rose">
              <HeartHandshake size={25} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">OUR PROMISE</span>
            </div>
            <h3 className="font-display text-3xl font-semibold text-cocoa">Quality in Every Creation</h3>
            <p className="mt-2 leading-7 text-ink/65">Thoughtfully crafted desserts made with care, creativity, and attention to every detail.</p>
          </div>
        </div>

        <div>
          <SectionKicker text="About Us" />
          <h2 className="section-title">From International Experience to Heartfelt Creations in Mysore</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-ink/68 sm:text-lg">
            <p>
              Elephique is a cloud bakery inspired by a passion for exceptional baking, artistic craftsmanship, and memorable celebrations. Drawing from international pastry traditions and years of experience in luxury hospitality and fine dining, including renowned establishments in Muscat, we create desserts that blend elegance, flavor, and creativity.
            </p>
            <p>
              Rooted in the warmth and heritage of Mysore, Elephique brings together global expertise and heartfelt hospitality. From handcrafted celebration cakes and artisanal pastries to signature desserts, every creation is thoughtfully prepared in small batches using carefully selected ingredients and refined techniques.
            </p>
            <p>
              At Elephique, we believe every dessert should be as memorable as the occasion it celebrates.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            <StoryPoint icon={<Sparkles size={20} />} title="Global craft" />
            <StoryPoint icon={<Heart size={20} />} title="Made with feeling" />
            <StoryPoint icon={<MapPin size={20} />} title="Rooted in Mysore" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryPoint({ icon, title }) {
  return (
    <div className="flex items-center gap-3 border-t border-cocoa/15 pt-4 text-cocoa">
      <span className="text-rose">{icon}</span>
      <span className="font-semibold">{title}</span>
    </div>
  );
}
