import { Award, ChefHat, Star } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';
import chef from '../assets/chef.png';

export default function ChefSection() {
  return (
    <section className="bg-cocoa py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionKicker text="Meet Our Chef" light />

          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Crafted by Experience. Inspired by Passion.
          </h2>

          <p className="mt-6 text-lg leading-8 text-ivory/75">
            Behind every Elephique creation is years of professional pastry
            expertise, luxury hospitality experience, and a commitment to
            creating unforgettable dessert experiences.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-ivory/10 bg-ivory/[0.05] p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
            
            {/* Chef Image */}
            <div className="mx-auto">
              <img
                src={chef}
                alt="Pastry Chef"
                className="h-64 w-64 sm:h-80 sm:w-80 rounded-3xl object-cover"
                />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3">
                <ChefHat className="text-gold" size={28} />
                <h3 className="font-display text-3xl font-semibold">
                  Jayashree Gowda
                </h3>
              </div>

              <p className="mt-2 text-gold">
                Bakery & Pastry Chef | Menu Developer
              </p>

              <p className="mt-6 leading-8 text-ivory/75">
                With experience across luxury hospitality and fine dining establishments in India and Muscat, Chef Jayashree brings refined pastry techniques, creative artistry, and a passion for exceptional desserts to every Elephique creation.
                </p>
              <div className="mt-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                    Experience & Expertise
                </h4>

                <div className="flex flex-wrap gap-3">

                    <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium">
                    Club Mahindra Resorts
                    </span>

                    <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium">
                    Radisson Blu Hotels
                    </span>

                    <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium">
                    Kaia Restaurant, Muscat
                    </span>

                    <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium">
                    Organic Café
                    </span>

                    <span className="rounded-full border border-ivory/20 bg-ivory/5 px-4 py-2 text-sm font-medium">
                    Artisan Breads
                    </span>

                    <span className="rounded-full border border-ivory/20 bg-ivory/5 px-4 py-2 text-sm font-medium">
                    Pastry Arts
                    </span>

                    <span className="rounded-full border border-ivory/20 bg-ivory/5 px-4 py-2 text-sm font-medium">
                    Celebration Cakes
                    </span>

                    <span className="rounded-full border border-ivory/20 bg-ivory/5 px-4 py-2 text-sm font-medium">
                    Menu Development
                    </span>

                    <span className="rounded-full border border-ivory/20 bg-ivory/5 px-4 py-2 text-sm font-medium">
                    Dessert Innovation
                    </span>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-ivory/10 p-4 text-center">
                        <p className="font-display text-2xl sm:text-3xl text-gold">4+</p>
                        <p className="text-sm text-ivory/60">Luxury Brands</p>
                    </div>

                    <div className="rounded-xl border border-ivory/10 p-4 text-center">
                        <p className="font-display text-3xl text-gold">100+</p>
                        <p className="text-sm text-ivory/60">Dessert Creations</p>
                    </div>

                    <div className="rounded-xl border border-ivory/10 p-4 text-center">
                        <p className="font-display text-3xl text-gold">Global</p>
                        <p className="text-sm text-ivory/60">Experience</p>
                    </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}