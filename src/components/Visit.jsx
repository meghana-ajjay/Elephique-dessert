import { Clock3, MapPin, Navigation } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';

export default function Visit() {
  return (
    <section id="location" className="section">
      <div className="grid overflow-hidden rounded-lg border border-cocoa/10 bg-ivory shadow-soft lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <SectionKicker text="Find Elephique" />
          <h2 className="section-title">Visit Us in Mysore</h2>
          <p className="mt-5 leading-7 text-ink/65">Visit our dessert studio for fresh bakes, order pickups and flavour consultations for your special day.</p>
          <div className="mt-8 space-y-4">
            <div className="flex gap-3 text-cocoa"><MapPin className="shrink-0 text-rose" size={21} /><span>Mysore, Karnataka</span></div>
            <div className="flex gap-3 text-cocoa"><Clock3 className="shrink-0 text-rose" size={21} /><span>Open daily, 10:00 AM to 8:00 PM</span></div>
          </div>
          <a href="https://maps.google.com/?q=Mysore,Karnataka" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-cocoa px-6 py-4 font-bold text-cocoa transition hover:bg-cocoa hover:text-ivory sm:self-start">
            <Navigation size={18} /> Get Directions
          </a>
        </div>
        <div className="relative min-h-[22rem] bg-[#eaded5]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 grid place-items-center p-6 text-center">
            <div>
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-rose text-white shadow-glow"><MapPin size={28} /></span>
              <p className="mt-5 font-display text-3xl font-semibold text-cocoa">Google Map</p>
              <p className="mt-2 text-sm text-ink/55"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
