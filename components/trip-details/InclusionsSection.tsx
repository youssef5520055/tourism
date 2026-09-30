import React from 'react';
import { CheckCircle, X } from 'lucide-react';

export default function InclusionsSection({ inclusions, exclusions }: { inclusions: string[], exclusions: string[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
        <h3 className="text-xl font-serif mb-4 text-green-400">What's Included</h3>
        <ul className="space-y-3">
          {inclusions?.map((inc, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-green-400 mt-1 shrink-0" size={20} /> 
              <span className="text-gray-300">{inc}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
        <h3 className="text-xl font-serif mb-4 text-red-400">Not Included</h3>
        <ul className="space-y-3">
          {exclusions?.map((exc, i) => (
            <li key={i} className="flex items-start gap-3">
              <X className="text-red-400 mt-1 shrink-0" size={20} /> 
              <span className="text-gray-300">{exc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
