import React from 'react';

export default function ItinerarySection({ itinerary }: { itinerary: {day: number, title: string, description: string}[] }) {
  if (!itinerary?.length) return null;
  return (
    <div className="space-y-6">
      {itinerary.map((day, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#CA8A04] flex items-center justify-center font-bold text-white shadow-lg">
              {day.day}
            </div>
            <h3 className="text-xl font-serif text-white">{day.title}</h3>
          </div>
          <p className="text-gray-300 pl-14 leading-relaxed">{day.description}</p>
        </div>
      ))}
    </div>
  );
}
