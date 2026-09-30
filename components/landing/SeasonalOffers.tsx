import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Tag, ArrowRight } from 'lucide-react';

export default function SeasonalOffers() {
  const offers = [
    {
      id: 1,
      title: 'Early Bird Special',
      description: 'Book 90 days in advance and save up to 25%',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg',
      discount: '25% OFF',
      validUntil: 'Valid until March 31, 2024',
      ctaText: 'Book Now',
    },
    {
      id: 2,
      title: 'Summer Paradise',
      description: 'Exclusive beach destinations with luxury accommodations',
      image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
      discount: '20% OFF',
      validUntil: 'Limited time offer',
      ctaText: 'Explore Deals',
    },
    {
      id: 3,
      title: 'Adventure Awaits',
      description: 'Mountain and hiking tours for the adventurous spirit',
      image: 'https://images.pexels.com/photos/1757269/pexels-photo-1757269.jpeg',
      discount: '30% OFF',
      validUntil: 'Book by April 15, 2024',
      ctaText: 'Start Adventure',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Seasonal Offers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take advantage of our limited-time offers and save on your dream vacation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {offer.discount}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {offer.description}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-1" />
                {offer.validUntil}
              </div>
              <Button className="w-full">
                {offer.ctaText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}