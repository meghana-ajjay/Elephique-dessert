import { Camera, Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionKicker text="Contact" />
          <h2 className="section-title">Take cake orders, dessert box enquiries, and custom requests.</h2>
          <p className="mt-5 leading-8 text-ink/70">This section can be connected to WhatsApp, email, or a backend form. For the sample, it shows how Elephique can collect enquiries from Mysore customers.</p>
          <div className="mt-8 grid gap-4">
            <ContactLine icon={<MapPin size={20} />} text="Mysore, Karnataka" />
            <ContactLine icon={<Phone size={20} />} text="+91 6362396678" />
            <ContactLine icon={<Mail size={20} />} text="hello@elephique.in" />
            <ContactLine icon={<Camera size={20} />} text="@elephique.mysore" />
          </div>
        </div>
        <form className="rounded-[1.75rem] border border-cocoa/10 bg-ivory p-5 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field">Name<input type="text" placeholder="Your name" /></label>
            <label className="field">Phone<input type="tel" placeholder="+91 7876549908" /></label>
          </div>
          <label className="field mt-5">Email<input type="email" placeholder="you@example.com" /></label>
          <label className="field mt-5">Occasion<select defaultValue=""><option value="" disabled>Choose one</option><option>Birthday</option><option>Wedding</option><option>Corporate event</option><option>Dessert box</option></select></label>
          <label className="field mt-5">Message<textarea rows="5" placeholder="Tell us about flavors, date, servings, and style." /></label>
          <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rosewood px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cocoa">Send Inquiry <Send size={18} /></button>
        </form>
      </div>
    </section>
  );
}

function ContactLine({ icon, text }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-ivory p-4 text-cocoa">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/20 text-rosewood">{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
}
