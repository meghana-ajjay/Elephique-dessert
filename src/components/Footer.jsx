import {
FaInstagram,
FaWhatsapp,
FaFacebookF,
} from 'react-icons/fa';

import {
MapPin,
Phone,
Mail,
} from 'lucide-react';

export default function Footer() {
return (
<footer
className="relative overflow-hidden"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1800&q=80')",
backgroundSize: 'cover',
backgroundPosition: 'center',
}}
>
{/* Overlay */} <div className="absolute inset-0 bg-cocoa/90" />

```
  <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">

    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">
          {/* <img
            src="/elephique-logo.jpeg"
            alt="Elephique"
            className="h-14 w-14 rounded-full object-cover"
          /> */}

          <h3 className="font-display text-4xl font-semibold text-gold">
            ELEPHIQUE
          </h3>
        </div>

        <p className="mt-5 leading-8 text-ivory/75">
          Premium cakes, pastries, cookies and desserts handcrafted
          with passion, creativity and exceptional attention to detail.
        </p>

        <div className="mt-6 flex gap-4">

          <a
            href="https://instagram.com/elephique.mysore"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ivory/20 p-3 text-ivory transition hover:border-gold hover:text-gold"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://wa.me/918095403379"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ivory/20 p-3 text-ivory transition hover:border-gold hover:text-gold"
          >
            <FaWhatsapp size={18} />
          </a>

          <a
            href="#"
            className="rounded-full border border-ivory/20 p-3 text-ivory transition hover:border-gold hover:text-gold"
          >
            <FaFacebookF size={18} />
          </a>

        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-display text-2xl text-gold">
          Quick Links
        </h4>

        <div className="mt-5 flex flex-col gap-3 text-ivory/75">

          <a href="#home" className="hover:text-gold transition">
            Home
          </a>

          <a href="#story" className="hover:text-gold transition">
            About Us
          </a>

          <a href="#signature" className="hover:text-gold transition">
            Signature Cakes
          </a>

          <a href="#menu" className="hover:text-gold transition">
            Menu
          </a>

          <a href="#gallery" className="hover:text-gold transition">
            Gallery
          </a>

          <a href="#contact" className="hover:text-gold transition">
            Contact
          </a>

        </div>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-display text-2xl text-gold">
          Contact Us
        </h4>

        <div className="mt-5 space-y-5 text-ivory/75">

          <div className="flex gap-3">
            <MapPin size={18} className="mt-1 shrink-0 text-gold" />
            <span>
              Mysore,
              Karnataka,
              India
            </span>
          </div>

          <a
            href="tel:+918095403379"
            className="flex gap-3 hover:text-gold transition"
          >
            <Phone size={18} className="shrink-0 text-gold" />
            +918095403379
          </a>

          <a
            href="mailto:hello@elephique.com"
            className="flex gap-3 hover:text-gold transition"
          >
            <Mail size={18} className="shrink-0 text-gold" />
            hello@elephique.com
          </a>

        </div>
      </div>

      {/* Why Choose Us */}
      <div>
        <h4 className="font-display text-2xl text-gold">
          Why Choose Us
        </h4>

        <div className="mt-5 space-y-4 text-ivory/75">

          <p>✓ Handcrafted Desserts</p>

          <p>✓ Premium Ingredients</p>

          <p>✓ Custom Celebration Cakes</p>

          <p>✓ Chef-Curated Recipes</p>

          <p>✓ Freshly Made To Order</p>

        </div>
      </div>

    </div>

    {/* Divider */}
    <div className="mt-14 border-t border-ivory/10 pt-8">

      <div className="flex flex-col gap-4 text-center text-sm text-ivory/50 lg:flex-row lg:items-center lg:justify-between">

        <p>
          © 2026 Elephique. All Rights Reserved.
        </p>

        <p className="font-display text-lg text-gold">
          Where Desserts Become Art
        </p>

        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-gold transition">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-gold transition">
            Terms & Conditions
          </a>
        </div>

      </div>

    </div>

  </div>
</footer>

);
}
