import { Quote, Star } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';
import { testimonials } from '../data/content.js';

export default function Testimonials() {
  return (
    <section className="bg-cocoa py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionKicker text="Kind Words" light />
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">Made for moments people remember.</h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-lg border border-ivory/10 bg-ivory/[0.06] p-7">
              <div className="flex items-center justify-between">
                <Quote className="text-gold" size={28} />
                <div className="flex text-gold">{[...Array(5)].map((_, index) => <Star key={index} size={14} fill="currentColor" />)}</div>
              </div>
              <p className="mt-6 leading-8 text-ivory/75">{item.text}</p>
              <div className="mt-7 border-t border-ivory/10 pt-5">
                <h3 className="font-display text-2xl font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm text-ivory/50">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
