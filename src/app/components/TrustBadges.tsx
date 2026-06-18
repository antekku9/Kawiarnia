import { Truck, Coffee, Cookie, Gift } from 'lucide-react';

const badges = [
  {
    icon: Truck,
    title: 'Darmowa dostawa od 149 zł'
  },
  {
    icon: Coffee,
    title: 'Świeżo palona kawa'
  },
  {
    icon: Cookie,
    title: 'Ręcznie robione słodkości'
  },
  {
    icon: Gift,
    title: 'Pakowanie prezentowe'
  }
];

export function TrustBadges() {
  return (
    <section className="bg-white border-t border-b border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <div className="flex-shrink-0 border border-gray-300 rounded-md p-3">
                <badge.icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
              </div>
              <p className="text-xs text-foreground max-w-[120px]">{badge.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
