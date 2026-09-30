'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MOCK_TRIPS } from '@/lib/mock-data';

interface AIRecommendationsProps {
  user?: any;
}

export default function AIRecommendations({ user }: AIRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    const shuffled = [...MOCK_TRIPS].sort(() => 0.5 - Math.random());
    setRecommendations(shuffled.slice(0, 3));
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
      <div className="flex items-center mb-6">
        <Sparkles className="w-5 h-5 text-[#CA8A04] mr-2" />
        <h2 className="text-xl font-serif text-white">AI Picks for You</h2>
      </div>
      
      <p className="text-sm text-gray-400 mb-6">
        Based on your travel history and preferences, our AI suggests these destinations.
      </p>
      
      <div className="space-y-4">
        {recommendations.map(trip => (
          <Link key={trip.id} href={`/trips/${trip.id}`} className="group block">
            <div className="flex items-center p-3 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="ml-4 flex-grow">
                <h4 className="text-white text-sm font-medium line-clamp-1 group-hover:text-[#CA8A04] transition-colors">{trip.title}</h4>
                <p className="text-xs text-gray-400 mt-1">${trip.price} • {trip.duration} days</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#CA8A04] transition-colors flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/10">
        <button className="w-full text-xs text-center text-gray-400 hover:text-white transition-colors">
          Refine my preferences
        </button>
      </div>
    </div>
  );
}