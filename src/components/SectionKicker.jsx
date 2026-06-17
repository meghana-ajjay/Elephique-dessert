export default function SectionKicker({ text, light = false }) {
  return (
    <p className={`mb-3 text-sm font-bold uppercase tracking-[0.24em] ${light ? 'text-gold' : 'text-rosewood'}`}>
      {text}
    </p>
  );
}
