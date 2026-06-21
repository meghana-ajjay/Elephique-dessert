import { Clock3, MapPin, Navigation } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';

export default function Visit() {
return ( <section id="location" className="section"> <div className="grid overflow-hidden rounded-lg border border-cocoa/10 bg-ivory shadow-soft lg:grid-cols-[0.85fr_1.15fr]">
  
    {/* Left Content */}
    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
      <SectionKicker text="Find Elephique" />

      <h2 className="section-title">
        Serving Mysore & Nearby Areas
      </h2>

      <p className="mt-5 leading-7 text-ink/65">
        Order handcrafted cakes, pastries, and desserts for birthdays,
        celebrations, corporate events, and special occasions across Mysore.
      </p>

      <div className="mt-8 space-y-4">

        <div className="flex gap-3 text-cocoa">
          <MapPin
            className="shrink-0 text-rose"
            size={21}
          />
          <span>Mysore, Karnataka</span>
        </div>

        <div className="flex gap-3 text-cocoa">
          <Clock3
            className="shrink-0 text-rose"
            size={21}
          />
          <span>Open Daily • 10:00 AM – 8:00 PM</span>
        </div>

      </div>

      <a
        href="https://maps.google.com/?q=Mysore,Karnataka"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-cocoa px-6 py-4 font-bold text-cocoa transition hover:bg-cocoa hover:text-ivory sm:self-start"
      >
        <Navigation size={18} />
        Get Directions
      </a>
    </div>

    {/* Google Map */}
    <div className="min-h-[22rem]">
      <iframe
        title="Elephique Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124741.54700486285!2d76.56962622739461!3d12.304110612414942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1782047183546!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="h-full min-h-[22rem] w-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

  </div>
</section>

);
}
