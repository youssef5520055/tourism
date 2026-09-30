'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { MOCK_TRIPS, CATEGORIES } from '@/lib/mock-data';
import { MapPin, Star, Clock, Filter } from 'lucide-react';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('destination') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(15000); 
  
  const filteredTrips = MOCK_TRIPS.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          trip.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || trip.category === activeCategory;
    const matchesPrice = trip.price <= priceRange;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-[#1C1917] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="relative max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search destinations, experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 text-white text-lg placeholder:text-gray-400 focus:outline-none focus:border-[#CA8A04]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sticky top-28">
              <div className="flex items-center mb-6">
                <Filter className="w-5 h-5 text-[#CA8A04] mr-2" />
                <h2 className="text-xl font-serif">Filters</h2>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">Category</h3>
                <div className="space-y-2">
                  <div 
                    className={`cursor-pointer px-3 py-2 rounded-lg transition-colors ${activeCategory === 'All' ? 'bg-[#CA8A04]/20 text-[#CA8A04]' : 'hover:bg-white/5'}`}
                    onClick={() => setActiveCategory('All')}
                  >
                    All Categories
                  </div>
                  {CATEGORIES.map(cat => (
                    <div 
                      key={cat}
                      className={`cursor-pointer px-3 py-2 rounded-lg transition-colors ${activeCategory === cat ? 'bg-[#CA8A04]/20 text-[#CA8A04]' : 'hover:bg-white/5'}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">Max Price: ${priceRange}</h3>
                <input 
                  type="range" 
                  min="500" 
                  max="15000" 
                  step="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#CA8A04]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>$500</span>
                  <span>$15,000+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="mb-6">
              <p className="text-gray-300">Showing {filteredTrips.length} result{filteredTrips.length !== 1 ? 's' : ''}</p>
            </div>
            
            {filteredTrips.length === 0 ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
                <h3 className="text-2xl font-serif mb-4">No experiences match your criteria</h3>
                <p className="text-gray-400 mb-8">Try broadening your search, selecting a different category, or adjusting the price range.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); setPriceRange(15000); }}
                  className="bg-[#CA8A04] text-white rounded-full px-8 py-3 hover:bg-[#B45309] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTrips.map(trip => (
                  <div key={trip._id} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img src={trip.images[0]} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                          {trip.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center text-[#CA8A04] text-xs font-medium mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {trip.location}
                      </div>
                      
                      <h3 className="text-lg font-serif text-white mb-2">{trip.title}</h3>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center text-xs text-gray-300">
                          <Star className="w-3 h-3 text-[#CA8A04] mr-1 fill-current" />
                          {trip.rating}
                        </div>
                        <div className="flex items-center text-xs text-gray-300">
                          <Clock className="w-3 h-3 mr-1" />
                          {trip.duration} days
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-400">From</span>
                          <p className="text-base font-bold text-white">${trip.price}</p>
                        </div>
                        <Link href={`/trips/${trip._id}`} className="bg-[#CA8A04] text-white rounded-full px-5 py-2 hover:bg-[#B45309] transition-colors text-sm">
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#1C1917] flex items-center justify-center text-[#CA8A04]">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}