import { IoLogoWhatsapp } from 'react-icons/io5';

export default function WhatsAppButton() {
  const whatsappNumber = '918095403379';

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hello%20Elephique%2C%20I%27d%20like%20to%20enquire%20about%20a%20cake%20or%20dessert%20order.`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-50
        flex h-16 w-16 items-center justify-center
        rounded-full bg-[#25D366] text-white
        shadow-[0_0_25px_rgba(37,211,102,0.8)]
        animate-bounce
        hover:scale-110
        transition-all duration-300
      "
      aria-label="Chat on WhatsApp"
    >
      <IoLogoWhatsapp size={34} />
    </a>
  );
}