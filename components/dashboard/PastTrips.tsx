'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Star } from 'lucide-react';

interface PastTripsProps {
  bookings: any[];
}

export default function PastTrips({ bookings }: PastTripsProps) {
  const past = bookings?.filter(b => b.status === 'completed') || [];

  if (past.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
        <h3 className="text-xl font-serif text-white mb-2">No past trips yet</h3>
        <p className="text-gray-400 mb-6">Once you complete a journey with us, it will appear here.</p>
        <Link href="/destinations" className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
          Book your first adventure
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {past.map((booking, idx) => (
        <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
          <div className="h-48 relative">
            <img src={booking.trip?.image || '/images/placeholder.jpg'} alt="Destination" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full px-4 py-2 text-sm flex items-center">
                <Star className="w-4 h-4 mr-2" /> Leave Review
              </button>
            </div>
          </div>
          
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-serif text-white mb-2 line-clamp-1">{booking.trip?.title || 'Trip'}</h3>
            
            <div className="flex items-center text-xs text-gray-400 mb-3">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date(booking.startDate).toLocaleDateString()}
            </div>
            
            <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs text-gray-400">Total</span>
              <span className="font-semibold text-white">${booking.totalPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}