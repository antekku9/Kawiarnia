import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useState } from 'react';
import { stockImages } from '../lib/images';

interface ContactPageProps { onBack: () => void; }

export function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); alert('Dziękujemy za wiadomość! Odpowiemy wkrótce.'); setFormData({ name: '', email: '', subject: '', message: '' }); };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <button onClick={onBack} className="mb-8 text-foreground hover:underline text-sm">← Powrót do strony głównej</button>
        <h1 className="text-3xl text-center mb-8 text-foreground font-normal">Kontakt i lokalizacja</h1>
        <img src={stockImages.tableCoffee} alt="Stolik w kawiarni Beans Coffee" className="w-full h-64 object-cover rounded-lg border border-gray-300 mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border border-gray-300">
            <h2 className="text-lg mb-6 text-foreground">Napisz do nas</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                ['name', 'Imię i nazwisko', 'text'],
                ['email', 'Email', 'email'],
                ['subject', 'Temat', 'text'],
              ].map(([key, label, type]) => (
                <div key={key}>
                  <label className="block mb-2 text-sm text-foreground">{label}</label>
                  <input type={type} value={(formData as any)[key]} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm" required />
                </div>
              ))}
              <div>
                <label className="block mb-2 text-sm text-foreground">Wiadomość</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none text-sm" required />
              </div>
              <button type="submit" className="w-full text-white py-2.5 rounded transition-opacity hover:opacity-90 text-sm" style={{ backgroundColor: '#7A6343' }}>Wyślij wiadomość</button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg border border-gray-300">
              <h2 className="text-lg mb-6 text-foreground">Informacje kontaktowe</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-foreground mt-0.5" /><div><h3 className="text-sm mb-1 text-foreground">Adres</h3><p className="text-sm text-muted-foreground">ul. Kawowa 123, 00-001 Warszawa</p></div></div>
                <div className="flex items-start gap-3"><Mail className="h-5 w-5 text-foreground mt-0.5" /><div><h3 className="text-sm mb-1 text-foreground">Email</h3><a href="mailto:BeansCoffee@gmail.com" className="text-sm text-muted-foreground hover:underline">BeansCoffee@gmail.com</a></div></div>
                <div className="flex items-start gap-3"><Phone className="h-5 w-5 text-foreground mt-0.5" /><div><h3 className="text-sm mb-1 text-foreground">Telefon</h3><a href="tel:598634726" className="text-sm text-muted-foreground hover:underline">598-634-726</a></div></div>
                <div className="flex items-start gap-3"><Clock className="h-5 w-5 text-foreground mt-0.5" /><div><h3 className="text-sm mb-1 text-foreground">Godziny otwarcia</h3><p className="text-sm text-muted-foreground">Pon.–Pt. 8:00–20:00, sob.–nd. 9:00–18:00</p></div></div>
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-300 h-[300px]"><img src={stockImages.cafeInterior} alt="Wnętrze kawiarni" className="w-full h-full object-cover rounded" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
