import { Mail, Phone, Send, Instagram, MapPin, Clock } from 'lucide-react';
import logoUrl from '@/imports/Nowe_logo_14.png';
import { useState } from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dziękujemy za zapis do newslettera!');
    setEmail('');
  };

  return (
    <footer style={{ backgroundColor: '#7A6343' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm uppercase mb-4 font-medium">INFORMACJE</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:underline">
                  O nas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('delivery')} className="hover:underline">
                  Dostawa i płatność
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:underline">
                  Regulamin
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('returns')} className="hover:underline">
                  Polityka zwrotów
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:underline">
                  Lokalizacja
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase mb-4 font-medium">KONTAKT</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:BeansCoffee@gmail.com" className="hover:underline">
                  BeansCoffee@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:598-634-726" className="hover:underline">
                  598-634-726
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a href="https://instagram.com/BeansCoffee" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  BeansCoffee
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase mb-4 font-medium">NEWSLETTER</h4>
            <p className="text-sm mb-3">Twój mail</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded bg-white/10 border border-white/30 placeholder:text-white/50 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs">Po zapisaniu się otrzymasz 15 % rabatu na pierwsze zamówienie</p>
            </form>
          </div>

          <div className="flex justify-center md:justify-end items-start">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center max-w-[220px]">
              <img
                src={logoUrl}
                alt="Beans Coffee"
                className="mx-auto mb-3 h-24 w-24 object-contain"
              />
              <p className="font-['Baguet_Script',cursive] text-3xl leading-none">Beans</p>
              <p className="text-sm uppercase tracking-[0.25em] text-white/80">Coffee</p>
              <div className="mt-4 space-y-2 text-xs text-white/85">
                <p className="flex items-center justify-center gap-2"><MapPin className="h-3.5 w-3.5" /> Łódź, ul. Kawowa 12</p>
                <p className="flex items-center justify-center gap-2"><Clock className="h-3.5 w-3.5" /> pn-pt 8:00-20:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
