import { Award, CakeSlice, ChefHat, HeartHandshake, MapPin, Wheat } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';

const reasons = [
  { icon: ChefHat, title: 'International Experience', text: "Professional dessert techniques shaped by our chef's journey in Muscat." },
  { icon: CakeSlice, title: 'Handcrafted Desserts', text: 'Every order is finished by hand in thoughtful, small-batch production.' },
  { icon: Wheat, title: 'Fresh Ingredients', text: 'Carefully selected chocolate, dairy, nuts, fruit and aromatic flavourings.' },
  { icon: HeartHandshake, title: 'Custom Orders', text: 'Personalised flavours and finishes for birthdays, weddings and gifting.' },
  { icon: Award, title: 'Premium Quality', text: 'Refined taste, balanced sweetness and meticulous presentation in every box.' },
  { icon: MapPin, title: 'Local Mysore Brand', text: 'A homegrown dessert boutique bringing global craft to our own community.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl text-center">
        <SectionKicker text="The Elephique Difference" />
        <h2 className="section-title">Why Mysore chooses Elephique.</h2>
      </div>
      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, text }) => (
          <article key={title} className="border-t border-cocoa/15 pt-6">
            <Icon size={26} className="text-rose" />
            <h3 className="mt-5 font-display text-3xl font-semibold text-cocoa">{title}</h3>
            <p className="mt-3 leading-7 text-ink/60">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
