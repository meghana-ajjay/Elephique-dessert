import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';
import { productCategories } from '../data/content.js';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const selected = productCategories.find((category) => category.id === activeCategory);

  return (
    <section id="menu" className="section">
      <div className="mx-auto max-w-3xl text-center">
        <SectionKicker text="The Elephique Menu" />
        <h2 className="section-title">Beautifully made for every kind of craving.</h2>
        <p className="mt-5 leading-7 text-ink/65">Explore our handcrafted collections. Product photographs are placeholders ready to be replaced with Elephique&apos;s original creations.</p>
      </div>

      <div className="mt-10 flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="Menu categories">
        {productCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`shrink-0 rounded-full border px-5 py-3 text-sm font-bold transition ${
              activeCategory === category.id
                ? 'border-cocoa bg-cocoa text-ivory shadow-soft'
                : 'border-cocoa/15 bg-ivory text-cocoa hover:border-rose/40 hover:bg-blush'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {selected.products.map((product) => (
          <article key={product.name} className="product-card group">
            <div className="aspect-[4/3] overflow-hidden bg-blush">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex min-h-[10.5rem] flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold leading-tight text-cocoa">{product.name}</h3>
                <ArrowUpRight size={19} className="mt-1 shrink-0 text-gold transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/60">{product.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
