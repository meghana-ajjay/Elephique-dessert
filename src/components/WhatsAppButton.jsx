import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '916362396678';

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hello%20Elephique%2C%20I%27d%20like%20to%20enquire%20about%20a%20cake%20or%20dessert%20order.`}
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:-translate-y-1 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      aria-label="Chat with Elephique on WhatsApp"
    >
      <MessageCircle size={27} />
    </a>
  );
}