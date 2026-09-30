'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { MOCK_TRIPS, getTripById } from '@/lib/mock-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Clock, Users, CheckCircle, X, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function TripDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const trip = getTripById(params.id as string) || MOCK_TRIPS.find(t => t._id === params.id);
  const [selectedDate, setSelectedDate] = useState(trip?.startDates?.[0] || '');
  const [travelers, setTravelers] = useState(1);

  if (!trip) {
    return <div className="min-h-screen pt-24 text-center"><h1 className="text-3xl font-serif">Trip Not Found</h1></div>;
  }

  const handleBookNow = () => {
    router.push(`/book/${trip._id}`);
  };

  const totalPrice = trip.price * travelers;

  return (
    <div className="min-h-screen bg-[#1C1917] text-white">
      {/* Hero */}
      <div className="relative h-96 w-full">
        <Image src={trip.images?.[0] || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1'} alt={trip.title} layout="fill" objectFit="cover" className="brightness-50" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <p className="text-sm text-gray-300 mb-2">Destinations / {trip.location}</p>
          <h1 className="text-4xl md:text-5xl font-serif text-white">{trip.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="bg-white/10 border border-white/20 p-1 rounded-full mb-8">
                <TabsTrigger value="overview" className="rounded-full">Overview</TabsTrigger>
                <TabsTrigger value="itinerary" className="rounded-full">Itinerary</TabsTrigger>
                <TabsTrigger value="inclusions" className="rounded-full">Inclusions</TabsTrigger>
                <TabsTrigger value="pricing" className="rounded-full">Pricing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-8">
                <div className="flex gap-4 mb-6 flex-wrap">
                  <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2"><Clock size={18} className="text-[#CA8A04]"/> <span>{trip.duration} Days</span></div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2"><Users size={18} className="text-[#CA8A04]"/> <span>Max {trip.maxGroupSize} People</span></div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2"><Star size={18} className="text-[#CA8A04]"/> <span>{trip.rating} / 5</span></div>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-4 text-[#CA8A04]">About this trip</h2>
                  <p className="text-gray-300 leading-relaxed">{trip.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-4">Highlights</h3>
                  <ul className="space-y-3">
                    {trip.highlights?.map((h: string, i: number) => (
                      <li key={i} className="flex items-start gap-3"><CheckCircle className="text-[#CA8A04] mt-1" size={20} /> <span className="text-gray-300">{h}</span></li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="itinerary">
                <div className="space-y-6">
                  {trip.itinerary?.map((day: any, i: number) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#CA8A04] flex items-center justify-center font-bold text-white">Day {day.day}</div>
                        <h3 className="text-xl font-serif">{day.title}</h3>
                      </div>
                      <p className="text-gray-300 pl-14">{day.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="inclusions">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                    <h3 className="text-xl font-serif mb-4 text-green-400">What's Included</h3>
                    <ul className="space-y-3">
                      {trip.inclusions?.map((inc: string, i: number) => (
                        <li key={i} className="flex items-start gap-3"><CheckCircle className="text-green-400 mt-1" size={20} /> <span className="text-gray-300">{inc}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                    <h3 className="text-xl font-serif mb-4 text-red-400">Not Included</h3>
                    <ul className="space-y-3">
                      {trip.exclusions?.map((exc: string, i: number) => (
                        <li key={i} className="flex items-start gap-3"><X className="text-red-400 mt-1" size={20} /> <span className="text-gray-300">{exc}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pricing">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                  <h3 className="text-xl font-serif mb-4">Pricing Packages</h3>
                  <div className="space-y-4">
                    {trip.pricing?.map((p: any, i: number) => (
                      <div key={i} className="flex justify-between items-center p-4 border border-white/10 rounded-2xl">
                        <div>
                          <p className="font-semibold">{p.type}</p>
                          <p className="text-sm text-gray-400">{p.description}</p>
                        </div>
                        <div className="text-xl font-serif text-[#CA8A04]">${p.price}</div>
                      </div>
                    ))}
                    {(!trip.pricing || trip.pricing.length === 0) && (
                      <div className="flex justify-between items-center p-4 border border-white/10 rounded-2xl">
                        <div>
                          <p className="font-semibold">Standard Booking</p>
                          <p className="text-sm text-gray-400">Base price per person</p>
                        </div>
                        <div className="text-xl font-serif text-[#CA8A04]">${trip.price}</div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sticky top-24">
              <h3 className="text-2xl font-serif mb-2">Book this trip</h3>
              <p className="text-3xl font-serif text-[#CA8A04] mb-6">${trip.price} <span className="text-sm text-gray-400 font-sans">/ person</span></p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Select Date</label>
                  <select 
                    className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  >
                    {trip.startDates?.map((date: string, i: number) => (
                      <option key={i} value={date} className="bg-[#1C1917]">{date}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Travelers</label>
                  <div className="flex items-center justify-between border border-white/10 bg-black/20 rounded-xl p-2">
                    <button onClick={() => setTravelers(Math.max(1, travelers - 1))} className="w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center">-</button>
                    <span className="font-semibold">{travelers}</span>
                    <button onClick={() => setTravelers(Math.min(trip.maxGroupSize || 10, travelers + 1))} className="w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center">+</button>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 mb-6 space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>${trip.price} x {travelers} traveler(s)</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="text-[#CA8A04]">${totalPrice}</span>
                </div>
              </div>

              <button onClick={handleBookNow} className="w-full bg-[#CA8A04] hover:bg-[#B45309] text-white rounded-full py-4 font-semibold transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
