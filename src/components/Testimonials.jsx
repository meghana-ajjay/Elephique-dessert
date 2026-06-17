import { Quote, Star } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';
import { testimonials } from '../data/content.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-cocoa text-cream">
      <div className="mx-auto max-w-3xl text-center">
        <SectionKicker text="Testimonials" light />
        <h2 className="font-display text-4xl font-semibold tracking-normal sm:text-6xl">Sample local reviews for a trust-building website.</h2>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-[1.5rem] border border-cream/10 bg-cream/10 p-7 backdrop-blur transition hover:-translate-y-1">
            <Quote className="text-gold" size={30} />
            <p className="mt-5 leading-8 text-cream/80">{item.text}</p>
            <div className="mt-7 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold">{item.name}</h3>
                <p className="text-sm text-cream/60">{item.role}</p>
              </div>
              <div className="flex text-gold">
                {[...Array(5)].map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
