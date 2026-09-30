'use client';

import React, { useState } from 'react';

export default function AIUpsells({ tripId }: { tripId: string }) {
  const [addons, setAddons] = useState([
    { id: 'insurance', name: 'Travel Insurance', price: 89, desc: 'Comprehensive coverage for your peace of mind', selected: false },
    { id: 'transfer', name: 'Airport Transfer', price: 45, desc: 'Private luxury transfer to your hotel', selected: false },
    { id: 'guidebook', name: 'Premium Guidebook', price: 29, desc: 'AI-curated itinerary and local secrets', selected: false }
  ]);

  const toggleAddon = (id: string) => {
    setAddons(addons.map(a => a.id === id ? { ...a, selected: !a.selected } : a));
  };

  const totalAddons = addons.filter(a => a.selected).reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-white mt-8">
      <h3 className="text-xl font-serif mb-4 text-[#CA8A04]">Enhance Your Trip</h3>
      <div className="space-y-4">
        {addons.map(addon => (
          <div key={addon.id} className="flex items-center justify-between p-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <input 
                type="checkbox" 
                checked={addon.selected} 
                onChange={() => toggleAddon(addon.id)} 
                className="w-5 h-5 accent-[#CA8A04]"
              />
              <div>
                <h4 className="font-semibold">{addon.name}</h4>
                <p className="text-sm text-gray-400">{addon.desc}</p>
              </div>
            </div>
            <div className="font-serif font-semibold text-lg">+${addon.price}</div>
          </div>
        ))}
      </div>
      {totalAddons > 0 && (
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center font-bold">
          <span>Add-ons Total</span>
          <span className="text-[#CA8A04]">${totalAddons}</span>
        </div>
      )}
    </div>
  );
}
