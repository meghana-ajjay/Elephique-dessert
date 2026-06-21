import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { navItems } from '../data/content.js';
import Logo from '../assets/Logo.jpeg'
import WhatsAppButton from './WhatsAppButton.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-cocoa/10 bg-ivory/95 shadow-sm backdrop-blur-xl'
          : 'bg-ivory/90 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={Logo}
            alt="Elephique logo"
            className="h-11 w-11 rounded-full border border-gold/40 object-cover"
          />
          <span className="font-display text-2xl font-semibold text-cocoa sm:text-3xl">
            ELEPHIQUE
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-cocoa font-medium hover:text-rose transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop WhatsApp Button */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 rounded-full bg-cocoa px-5 py-3 text-sm font-bold text-ivory transition hover:bg-rose"
        >
          Order now
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-cocoa/10 bg-ivory px-5 py-5 shadow-lg">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-cocoa hover:bg-blush transition"
              >
                {item}
              </a>
            ))}

            <a
              href="https://wa.me/918095403379"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-cocoa px-5 py-4 font-bold text-ivory"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}