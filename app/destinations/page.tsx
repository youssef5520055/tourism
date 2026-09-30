'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MOCK_TRIPS, CATEGORIES } from '@/lib/mock-data';
import { MapPin, Star, Clock } from 'lucide-react';

export default function DestinationsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrips = MOCK_TRIPS.filter(trip => {
    const matchesCategory = activeCategory === 'All' || trip.category === activeCategory;
    const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          trip.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#1C1917] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Explore All Destinations</h1>
          <p className="text-[#44403C] text-lg max-w-2xl mx-auto">Discover our curated collection of extraordinary journeys around the globe.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0">
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === 'All' ? 'bg-[#CA8A04] text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              All
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === cat ? 'bg-[#CA8A04] text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#CA8A04]"
            />
          </div>
        </div>

        {filteredTrips.length === 0 ? (
          <div className="text-center py-24 bg-white/5 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-serif mb-2">No destinations found</h3>
            <p className="text-gray-400">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-6 bg-[#CA8A04] text-white rounded-full px-8 py-3 hover:bg-[#B45309] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrips.map(trip => (
              <div key={trip._id} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={trip.images[0]} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                      {trip.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-[#CA8A04] text-sm font-medium mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {trip.location}
                  </div>
                  
                  <h3 className="text-xl font-serif text-white mb-2">{trip.title}</h3>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-[#CA8A04] mr-1 fill-current" />
                      {trip.rating}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Clock className="w-4 h-4 mr-1" />
                      {trip.duration} days
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-400">From</span>
                      <p className="text-lg font-bold text-white">${trip.price}</p>
                    </div>
                    <Link href={`/trips/${trip._id}`} className="bg-[#CA8A04] text-white rounded-full px-6 py-2 hover:bg-[#B45309] transition-colors text-sm">
                      View Trip
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}