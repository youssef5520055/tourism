import sys

content = '''import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const destinations = [
  {
    id: 1,
    name: 'Amalfi Coast, Italy',
    description: 'Experience breathtaking sunsets and charming cliffside villages.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: ',299',
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    description: 'Immerse yourself in the perfect blend of tradition and modernity.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    price: ',899',
  },
  {
    id: 3,
    name: 'Swiss Alps',
    description: 'Adventure awaits in pristine mountain landscapes and chalets.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: ',599',
  },
  {
    id: 4,
    name: 'Maldives',
    description: 'Discover tropical paradise with stunning beaches and rich culture.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    price: ',199',
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1917] mb-4">Featured Destinations</h2>
          <p className="text-[#44403C] text-lg max-w-2xl mx-auto">
            Discover our most exclusive destinations, carefully selected for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <Card key={dest.id} className="group overflow-hidden border-0 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-semibold border border-white/20">
                  From {dest.price}
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white mb-2">
                    <MapPin className="w-4 h-4 mr-1 text-[#CA8A04]" />
                    <span className="text-sm font-medium">{dest.name}</span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-white">{dest.rating}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2">{dest.name.split(',')[0]}</h3>
                <p className="text-[#44403C] text-sm leading-relaxed">
                  {dest.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild variant="outline" className="rounded-full px-8 py-6 text-stone-800 border-stone-300 hover:bg-stone-100 transition-colors">
            <Link href="/search" className="flex items-center">
              Explore All Destinations
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
'''

with open('components/landing/FeaturedDestinations.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
