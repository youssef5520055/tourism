'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import BookingForm from '@/components/BookingForm';
import AIUpsells from '@/components/booking/AIUpsells';
import BookingSummary from '@/components/booking/BookingSummary';
import { getTripById } from '@/services/api';

export default function BookingPage() {
  const params = useParams();
  const [trip, setTrip] = useState<any>(null);
  const [bookingData, setBookingData] = useState({
    travelers: 1,
    selectedDate: '',
    extras: [],
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  });

  useEffect(() => {
    if (params.id) {
      loadTrip();
    }
  }, [params.id]);

  const loadTrip = async () => {
    try {
      const response = await getTripById(params.id);
      setTrip(response);
    } catch (error) {
      console.error('Error loading trip:', error);
    }
  };

  if (!trip) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="bg-gray-200 h-8 rounded mb-4"></div>
          <div className="bg-gray-200 h-64 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Book Your Trip
        </h1>
        <p className="text-gray-600">{trip.title}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Booking Form */}
        <div className="lg:col-span-2 space-y-8">
          <BookingForm
            trip={trip}
            bookingData={bookingData}
            onBookingDataChange={setBookingData}
          />
          
          <AIUpsells tripId={trip._id} />
        </div>

        {/* Booking Summary */}
        <div className="lg:col-span-1">
          <BookingSummary
            trip={trip}
            bookingData={bookingData}
          />
        </div>
      </div>
    </div>
  );
}