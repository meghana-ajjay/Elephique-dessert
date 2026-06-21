import { ArrowDown, ArrowRight, MessageCircle, Cake } from 'lucide-react';
import Logo from '../assets/Logo.jpeg';
import HeroCake from '../assets/HeroCake.avif';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92svh] items-end overflow-hidden bg-cocoa pt-[4.75rem] text-ivory">
      <img
        src={HeroCake}
        alt="Luxury handcrafted celebration cake"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,21,20,0.92)_0%,rgba(39,21,20,0.7)_48%,rgba(39,21,20,0.25)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(39,21,20,0.72)_0%,transparent_55%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-end px-5 pb-14 pt-20 sm:pb-20 lg:px-8">
        <div className="max-w-3xl animate-fadeUp">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ivory/25 bg-ivory/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            <Cake size={20} className="text-gold" />
            Creating Moments Worth Celebrating.
          </div>
          <div className="mb-6 flex items-center gap-4">
            <img
              src={Logo}
              alt="Elephique Logo"
              className="h-14 w-14 rounded-full border border-gold/40 object-cover bg-white"
            />
            <p className="font-display text-3xl text-gold">
              ELEPHIQUE
            </p>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            FROM OUR OVEN TO YOUR MOMENTS OF JOY
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ivory/85 sm:text-xl sm:leading-8">
            Premium cakes, cupcakes, cookies and desserts baked fresh in Mysore for every celebration.
          </p>
          <div className="mt-9 grid gap-3 sm:flex">
            <a href="#menu" className="btn-primary">
              Explore Menu <ArrowRight size={18} />
            </a>
            <a href="https://wa.me/918095403379" className="btn-secondary">
              <MessageCircle size={18} /> Order on WhatsApp
            </a>
          </div>
          <a href="#about us" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ivory/70 transition hover:text-ivory">
            Discover our story <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
