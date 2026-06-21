import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Signature from './components/Signature.jsx';
import MenuSection from './components/MenuSection.jsx';
import Gallery from './components/Gallery.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
// import Testimonials from './components/Testimonials.jsx';
import ChefSection from './components/ChefSection.jsx';
import Instagram from './components/Instagram.jsx';
import Visit from './components/Visit.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <Header />
      <Hero />
      <About />
      <Signature />
      <WhyChooseUs />
      <MenuSection />
      <Gallery />
      {/* <Testimonials /> */}
      <ChefSection/>
      <Instagram />
      <Visit />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
