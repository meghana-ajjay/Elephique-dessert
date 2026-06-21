import { Crown, MessageCircle, Sparkles } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';
import tiraMysore from '../assets/tira-mysore.jpeg';

export default function Signature() {
  return (
    <section id="special recepie" className="bg-cocoa text-ivory">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
        <div className="relative min-h-[28rem] overflow-hidden lg:min-h-[42rem]">
          <img
            src={tiraMysore}
            alt="Tira-Mysore signature dessert"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-ivory px-4 py-2 text-sm font-bold text-cocoa shadow-soft sm:left-8 sm:top-8">
            <Crown size={17} className="text-gold" />
            Elephique Original
          </div>
        </div>
        <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="max-w-xl">
            <SectionKicker text="Our Signature Creation" light />
            <div className="mb-6 flex items-center gap-3 text-gold">
              <Sparkles size={22} />
              <span className="h-px w-16 bg-gold/60" />
            </div>
            <h2 className="font-display text-5xl font-semibold sm:text-7xl">Tira-Mysore</h2>
            <p className="mt-7 text-lg leading-8 text-ivory/75">
              A unique creation inspired by classic tiramisu and the beloved Mysore Pak. Crafted to celebrate local heritage with a luxurious modern dessert experience.
            </p>
            <p className="mt-5 leading-7 text-ivory/60">
              Delicate coffee, mascarpone and cocoa meet the nostalgic richness of Mysore Pak in a dessert that feels both familiar and wonderfully new.
            </p>
            <a href="https://wa.me/918095403379?text=Hello%20Elephique%2C%20I%20would%20like%20to%20order%20Tira-Mysore." className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-4 font-bold text-cocoa transition hover:-translate-y-1 hover:bg-ivory">
              <MessageCircle size={18} /> Order Tira-Mysore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
