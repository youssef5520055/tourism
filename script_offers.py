import sys

content = '''import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight } from 'lucide-react';

const offers = [
  {
    title: 'Early Bird Elite',
    description: 'Book 90 days in advance and save up to 25% on luxury suites',
    discount: '25% OFF',
    validUntil: 'Valid until March 31, 2026',
    image: 'https://images.unsplash.com/photo-1542314831-c6a4d14eff50?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Summer Paradise',
    description: 'Exclusive beach destinations with private villa accommodations',
    discount: '20% OFF',
    validUntil: 'Limited time offer',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Alpine Escape',
    description: 'Mountain and hiking tours for the adventurous spirit',
    discount: '30% OFF',
    validUntil: 'Book by April 15, 2026',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop'
  }
];

export default function SeasonalOffers() {
  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1917] mb-4">Exclusive Offers</h2>
          <p className="text-[#44403C] text-lg max-w-2xl mx-auto">
            Take advantage of our limited-time promotions for your dream vacation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: \url(\)\ }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4 bg-[#CA8A04] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                  {offer.discount}
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-3">{offer.title}</h3>
                <p className="text-[#44403C] mb-6 leading-relaxed">
                  {offer.description}
                </p>
                <div className="flex items-center text-stone-500 text-sm mb-8">
                  <Clock className="w-4 h-4 mr-2" />
                  {offer.validUntil}
                </div>
                <Button className="w-full bg-[#1C1917] hover:bg-stone-800 rounded-full py-6 group">
                  Explore Deals
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
'''

with open('components/landing/SeasonalOffers.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
