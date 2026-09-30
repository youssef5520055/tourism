'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { MOCK_TRIPS, getTripById } from '@/lib/mock-data';
import Image from 'next/image';

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const trip = getTripById(params.id as string) || MOCK_TRIPS.find(t => t._id === params.id);
  
  const [formData, setFormData] = useState({
    date: trip?.startDates?.[0] || '',
    travelers: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  if (!trip) {
    return <div className="min-h-screen pt-24 text-center"><h1 className="text-3xl font-serif text-white">Trip Not Found</h1></div>;
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const bookingData = {
      tripId: trip._id,
      tripName: trip.title,
      ...formData,
      pricePerPerson: trip.price,
      totalPrice: trip.price * formData.travelers
    };
    sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
    router.push('/payment');
  };

  return (
    <div className="min-h-screen bg-[#1C1917] text-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif mb-12 text-center text-[#CA8A04]">Complete Your Booking</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Booking Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-serif mb-6">Traveler Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">First Name</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                  <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Select Date</label>
                  <select name="date" value={formData.date} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none">
                    {trip.startDates?.map((d: string, i: number) => (
                      <option key={i} value={d} className="bg-[#1C1917]">{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Travelers</label>
                  <input required name="travelers" value={formData.travelers} onChange={handleChange} type="number" min="1" max={trip.maxGroupSize || 10} className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Special Requests</label>
                <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#CA8A04] hover:bg-[#B45309] text-white rounded-full py-4 font-semibold transition-colors duration-300 mt-8">
                Continue to Payment
              </button>
            </form>
          </div>

          {/* Right - Summary */}
          <div>
            <div className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-xl sticky top-24">
              <h3 className="text-2xl font-serif mb-6">Booking Summary</h3>
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                <Image src={trip.images?.[0] || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1'} alt={trip.title} layout="fill" objectFit="cover" />
              </div>
              <h4 className="text-xl font-serif font-semibold">{trip.title}</h4>
              <p className="text-gray-400 mb-6">{trip.location}</p>
              
              <div className="space-y-3 text-sm border-t border-white/10 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Date</span>
                  <span>{formData.date || 'TBD'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Travelers</span>
                  <span>{formData.travelers}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3">
                  <span className="text-gray-400">Price per person</span>
                  <span>${trip.price}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-4 text-[#CA8A04]">
                  <span>Total Due</span>
                  <span>${(trip.price * formData.travelers).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

