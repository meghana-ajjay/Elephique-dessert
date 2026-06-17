import { useState } from 'react';
import { ArrowRight, Menu as MenuIcon, X } from 'lucide-react';
import { navItems } from '../data/content.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/40 bg-ivory/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <img src="/elephique-logo.jpeg" alt="Elephique logo" className="h-11 w-11 rounded-full border border-gold/40 object-cover" />
          <span className="font-display text-2xl font-semibold tracking-normal text-cocoa">Elephique</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-cocoa px-5 py-3 text-sm font-semibold text-cream transition hover:bg-rosewood lg:flex">
          Order Now <ArrowRight size={16} />
        </a>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-cocoa/15 bg-white/70 text-cocoa lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu">
          {open ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-cocoa/10 bg-ivory px-5 py-5 shadow-soft lg:hidden">
          <div className="grid gap-3">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="rounded-full px-4 py-3 font-medium text-cocoa transition hover:bg-cocoa hover:text-cream">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
