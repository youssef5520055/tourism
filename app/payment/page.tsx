'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PaymentForm from '@/components/PaymentForm';
import PaymentSummary from '@/components/payment/PaymentSummary';

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const [bookingData, setBookingData] = useState(null);
  
  useEffect(() => {
    // Get booking data from sessionStorage or URL params
    const data = sessionStorage.getItem('bookingData');
    if (data) {
      setBookingData(JSON.parse(data));
    }
  }, []);

  if (!bookingData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            No booking data found
          </h1>
          <p className="text-gray-600">
            Please start your booking process from the trip page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Complete Your Payment
        </h1>
        <p className="text-gray-600">
          Secure payment processing for your trip booking
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PaymentForm bookingData={bookingData} />
        </div>
        
        <div className="lg:col-span-1">
          <PaymentSummary bookingData={bookingData} />
        </div>
      </div>
    </div>
  );
}