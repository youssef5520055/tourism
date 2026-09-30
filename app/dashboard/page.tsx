'use client';

import React from 'react';
import { MOCK_USER, MOCK_BOOKINGS } from '@/lib/mock-data';

export default function DashboardPage() {
  const user = MOCK_USER;
  const bookings = MOCK_BOOKINGS || [];
  
  const upcoming = bookings.filter((b: any) => b.status === 'upcoming');
  const past = bookings.filter((b: any) => b.status === 'completed');
  const totalSpent = bookings.reduce((sum: number, b: any) => sum + (b.totalPrice || 0), 0);

  return (
    <div className="min-h-screen bg-[#1C1917] text-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif mb-8 text-[#CA8A04]">Welcome back, {user?.firstName || 'Alex'}!</h1>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <p className="text-gray-400 text-sm mb-1">Total Trips</p>
            <p className="text-3xl font-serif">{bookings.length}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <p className="text-gray-400 text-sm mb-1">Total Spent</p>
            <p className="text-3xl font-serif">${totalSpent.toLocaleString()}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <p className="text-gray-400 text-sm mb-1">Upcoming</p>
            <p className="text-3xl font-serif text-[#CA8A04]">{upcoming.length}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <p className="text-gray-400 text-sm mb-1">Past Trips</p>
            <p className="text-3xl font-serif">{past.length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Bookings */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-serif mb-6">Upcoming Trips</h2>
              {upcoming.length > 0 ? (
                <div className="space-y-4">
                  {upcoming.map((b: any, i: number) => (
                    <div key={i} className="bg-white/10 border border-white/20 rounded-3xl p-6 flex justify-between items-center hover:bg-white/15 transition-all">
                      <div>
                        <h3 className="font-serif text-xl text-[#CA8A04] mb-1">{b.tripName || 'Luxury Trip'}</h3>
                        <p className="text-gray-400 text-sm">Date: {b.date || 'TBD'} | Travelers: {b.travelers || 1}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">Confirmed</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic">No upcoming trips.</p>
              )}
            </section>
            
            <section>
              <h2 className="text-2xl font-serif mb-6">Past Trips</h2>
              {past.length > 0 ? (
                <div className="space-y-4">
                  {past.map((b: any, i: number) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 flex justify-between items-center opacity-75 hover:opacity-100 transition-all">
                      <div>
                        <h3 className="font-serif text-lg mb-1">{b.tripName || 'Luxury Trip'}</h3>
                        <p className="text-gray-400 text-sm">Date: {b.date || 'Past'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic">No past trips.</p>
              )}
            </section>
          </div>

          {/* Right - AI Recommendations */}
          <div>
            <div className="bg-gradient-to-b from-[#CA8A04]/20 to-transparent border border-[#CA8A04]/30 rounded-3xl p-6 sticky top-24">
              <h2 className="text-2xl font-serif mb-4 flex items-center gap-2">
                <span className="text-[#CA8A04]">✦</span> AI Recommendations
              </h2>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">Based on your previous bookings, our AI suggests these curated experiences for your next adventure.</p>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 hover:border-[#CA8A04]/50 cursor-pointer transition-all">
                  <h4 className="font-semibold mb-1">Kyoto Cherry Blossoms</h4>
                  <p className="text-xs text-gray-400">Similar to your Tokyo trip</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 hover:border-[#CA8A04]/50 cursor-pointer transition-all">
                  <h4 className="font-semibold mb-1">Swiss Alps Retreat</h4>
                  <p className="text-xs text-gray-400">Perfect for winter lovers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

