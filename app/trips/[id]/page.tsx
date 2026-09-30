import { notFound } from 'next/navigation';
import Image from 'next/image';
import BookNowButton from '@/components/trip-details/BookNowButton';
import ItinerarySection from '@/components/trip-details/ItinerarySection';
import InclusionsSection from '@/components/trip-details/InclusionsSection';
import PricingTable from '@/components/trip-details/PricingTable';
import { getTripById } from '@/services/api';
import { Metadata } from 'next';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const trip = await getTripById(params.id);
    return {
      title: `${trip.title} - WanderAI`,
      description: trip.description,
    };
  } catch {
    return {
      title: 'Trip Not Found - WanderAI',
    };
  }
}

export default async function TripDetails({ params }: Props) {
  let trip;
  
  try {
    trip = await getTripById(params.id);
  } catch (error) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-96 rounded-lg overflow-hidden mb-8">
        <Image
          src={trip.images?.[0] || 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg'}
          alt={trip.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
          <div className="p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{trip.title}</h1>
            <p className="text-xl opacity-90">{trip.location}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{trip.description}</p>
          </section>

          <ItinerarySection itinerary={trip.itinerary} />
          <InclusionsSection inclusions={trip.inclusions} exclusions={trip.exclusions} />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-bold text-blue-600">
                  ${trip.price}
                </span>
                <span className="text-gray-500">per person</span>
              </div>
              <p className="text-sm text-gray-600">{trip.duration} days</p>
            </div>

            <BookNowButton tripId={trip._id} />
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Trip Highlights</h3>
              <ul className="space-y-2">
                {trip.highlights?.map((highlight: any, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-sm text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <PricingTable availableDates={trip.availableDates} />
        </div>
      </div>
    </div>
  );
}