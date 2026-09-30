import React from 'react';

export default function PricingTable({ pricing }: { pricing: {type: string, price: number, description?: string}[] }) {
  if (!pricing?.length) return null;
  
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h3 className="text-xl font-serif mb-6 text-white">Pricing Packages</h3>
      <div className="space-y-4">
        {pricing.map((p, i) => (
          <div key={i} className={`flex justify-between items-center p-5 border rounded-2xl transition-all ${i === 0 ? 'border-[#CA8A04] bg-[#CA8A04]/10' : 'border-white/10 hover:border-white/20'}`}>
            <div>
              <p className="font-semibold text-white">{p.type}</p>
              {p.description && <p className="text-sm text-gray-400 mt-1">{p.description}</p>}
            </div>
            <div className="text-2xl font-serif text-[#CA8A04]">${p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
