import { useState } from 'react';
import { CakeSlice, Camera, Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';
import { FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }

    const whatsappMessage = `
New Elephique Inquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Occasion: ${formData.occasion}

Message:
${formData.message}
`;

    setShowPopup(true);

    setTimeout(() => {
      window.open(
        `https://wa.me/918095403379?text=${encodeURIComponent(whatsappMessage)}`,
        '_blank',
      );
      setShowPopup(false);
    }, 1200);
  };

  return (
    <section id="contact" className="section bg-ivory">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionKicker text="Contact" />
          <h2 className="section-title">Order a cake, dessert box, or custom celebration spread.</h2>
          <p className="mt-5 leading-8 text-ink/70">
            Share your occasion, preferred flavors, serving size, and date. Our Mysore team will help you create the right dessert selection.
          </p>

          <div className="mt-8 grid gap-4">
            <ContactLine icon={<MapPin size={20} />} text="Mysore, Karnataka" />
            <ContactLine icon={<Phone size={20} />} text="+91 8095403379" />
            <ContactLine icon={<Mail size={20} />} text="Elephique.mysore@gmail.com" />
            <ContactLine
              icon={<FaInstagram size={20} />}
              text="@elephique_bake_mysore"
            />
          </div>
        </div>

        <form
          className="rounded-lg border border-cocoa/10 bg-white p-5 shadow-soft sm:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field">
              Name
              <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
            </label>
            <label className="field">
              Phone
              <input type="tel" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
            </label>
          </div>

          <label className="field mt-5">
            Email
            <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
          </label>

          <label className="field mt-5">
            Occasion
            <select name="occasion" value={formData.occasion} onChange={handleChange}>
              <option value="">Choose one</option>
              <option>Birthday</option>
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Anniversary</option>
              <option>Dessert Box</option>
            </select>
          </label>

          <label className="field mt-5">
            Message
            <textarea
              rows="5"
              name="message"
              placeholder="Tell us about flavors, date, servings, and style."
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <button
            type="button"
            onClick={handleSubmit}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rosewood px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cocoa"
          >
            Send Inquiry
            <Send size={18} />
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-2xl">
            <CakeSlice className="mx-auto mb-4 text-gold" size={48} />
            <h3 className="mb-3 font-display text-3xl font-semibold text-cocoa">Thank you for your inquiry</h3>
            <p className="leading-7 text-ink/70">
              WhatsApp will open with your order details. Send the prepared message and the Elephique team will get back to you.
            </p>
            <div className="mt-5 rounded-2xl bg-gold/10 p-3 text-sm font-medium text-cocoa">
              Custom Cakes | Birthday Orders | Dessert Boxes
            </div>
          </div>
        </div>
      )}
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
