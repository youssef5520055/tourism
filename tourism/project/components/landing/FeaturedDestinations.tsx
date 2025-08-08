import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Star } from 'lucide-react';

export default function FeaturedDestinations() {
  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/161815/santorini-travel-island-greek-161815.jpeg',
      price: 'From $1,299',
      rating: 4.9,
      description: 'Experience breathtaking sunsets and charming white-washed villages.',
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg',
      price: 'From $899',
      rating: 4.8,
      description: 'Discover tropical paradise with stunning beaches and rich culture.',
    },
    {
      id: 3,
      name: 'Swiss Alps',
      image: 'https://images.pexels.com/photos/1757269/pexels-photo-1757269.jpeg',
      price: 'From $1,599',
      rating: 4.9,
      description: 'Adventure awaits in pristine mountain landscapes and charming villages.',
    },
    {
      id: 4,
      name: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg',
      price: 'From $1,199',
      rating: 4.7,
      description: 'Immerse yourself in the perfect blend of tradition and modernity.',
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Featured Destinations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our most popular destinations, carefully selected for unforgettable experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {destinations.map((destination) => (
          <div key={destination.id} className="group cursor-pointer">
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center mb-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{destination.name}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{destination.rating}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white text-gray-900 px-2 py-1 rounded-md text-sm font-semibold">
                {destination.price}
              </div>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {destination.name}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {destination.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/search">
            Explore All Destinations
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}