import { Award, ChefHat, Star } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';

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
                src="https://images.pexels.com/photos/27101539/pexels-photo-27101539.jpeg"
                alt="Pastry Chef"
                className="h-80 w-80 rounded-3xl object-cover"
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
                A passionate Bakery & Pastry Chef with experience across luxury
                hospitality and fine dining environments. Having worked with
                renowned brands including Club Mahindra Resorts, Radisson Blu
                Hotels, Organic Café, and Kaia Restaurant in Muscat, she brings
                a wealth of expertise in pastry arts and dessert innovation.
              </p>

              <p className="mt-4 leading-8 text-ivory/75">
                Specializing in artisan breads, handcrafted pastries,
                celebration cakes, plated desserts, menu development, and
                creative dessert concepts, she combines technical precision with
                artistic creativity to craft desserts that delight every guest.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-ivory/10 p-4">
                  <Award className="text-gold" size={24} />
                  <h4 className="mt-3 font-semibold">
                    Luxury Hospitality Experience
                  </h4>
                  <p className="mt-2 text-sm text-ivory/60">
                    Experience across premium resorts, hotels, and fine dining
                    establishments.
                  </p>
                </div>

                <div className="rounded-xl border border-ivory/10 p-4">
                  <Star className="text-gold" size={24} />
                  <h4 className="mt-3 font-semibold">
                    Signature Dessert Creation
                  </h4>
                  <p className="mt-2 text-sm text-ivory/60">
                    Expert in artisan baking, pastry techniques, and innovative
                    dessert development.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}