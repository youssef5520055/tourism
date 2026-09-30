'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Users, MapPin } from 'lucide-react';

interface UpcomingTripsProps {
  bookings: any[];
}

export default function UpcomingTrips({ bookings }: UpcomingTripsProps) {
  const upcoming = bookings?.filter(b => b.status === 'confirmed' || b.status === 'pending') || [];

  if (upcoming.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
          <MapPin className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-serif text-white mb-2">No upcoming trips</h3>
        <p className="text-gray-400 mb-6 max-w-md">Your itinerary is currently empty. It's time to start planning your next great adventure!</p>
        <Link href="/destinations" className="bg-[#CA8A04] text-white rounded-full px-8 py-3 hover:bg-[#B45309] transition-colors">
          Start Exploring
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {upcoming.map((booking, idx) => (
        <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row">
          <div className="sm:w-1/3 h-48 sm:h-auto relative">
            <img src={booking.trip?.image || '/images/placeholder.jpg'} alt="Destination" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border border-white/10 backdrop-blur-md ${
                booking.status === 'confirmed' ? 'bg-green-500/80 text-white' : 'bg-yellow-500/80 text-white'
              }`}>
                {booking.status.toUpperCase()}
              </span>
            </div>
          </div>
          
          <div className="p-6 sm:w-2/3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-serif text-white">{booking.trip?.title || 'Trip'}</h3>
                <p className="text-xl font-semibold text-[#CA8A04]">${booking.totalPrice}</p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[#CA8A04]" />
                  {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[#CA8A04]" />
                  {booking.travelers} Travelers
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Link href={`/bookings/${booking.id}`} className="px-6 py-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors text-sm">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}