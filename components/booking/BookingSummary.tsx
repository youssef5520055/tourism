import React from 'react';
import Image from 'next/image';

export default function BookingSummary({ trip, bookingData }: { trip: any, bookingData: any }) {
  if (!trip) return null;
  const travelers = bookingData?.travelers || 1;
  const subtotal = trip.price * travelers;
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;

  return (
    <div className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-xl text-white">
      <h3 className="text-2xl font-serif mb-6">Booking Summary</h3>
      {trip.images?.[0] && (
        <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-6">
          <Image src={trip.images[0]} alt={trip.title || trip.name} layout="fill" objectFit="cover" />
        </div>
      )}
      <h4 className="text-xl font-serif font-semibold">{trip.title || trip.name}</h4>
      <p className="text-gray-400 mb-6">{trip.location}</p>
      
      <div className="space-y-3 text-sm border-t border-white/10 pt-4">
        <div className="flex justify-between">
          <span className="text-gray-400">Date</span>
          <span>{bookingData?.date || 'Select Date'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Travelers</span>
          <span>{travelers}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Price per person</span>
          <span>${trip.price}</span>
        </div>
        <div className="flex justify-between border-t border-white/10 pt-3">
          <span className="text-gray-400">Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Taxes</span>
          <span>${taxes}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg mt-4 text-[#CA8A04]">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
}
