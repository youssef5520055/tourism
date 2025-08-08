import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, Star } from 'lucide-react';

interface TripCardProps {
  trip: {
    _id: string;
    title: string;
    location: string;
    price: number;
    duration: number;
    images: string[];
    rating: number;
    maxGroupSize: number;
    description: string;
  };
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={trip.images?.[0] || 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg'}
          alt={trip.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm font-semibold">
          ${trip.price}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
              {trip.title}
            </h3>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {trip.location}
            </div>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2">
            {trip.description}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {trip.duration} days
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              Max {trip.maxGroupSize}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
              {trip.rating}
            </div>
          </div>

          <Button asChild className="w-full">
            <Link href={`/trips/${trip._id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}