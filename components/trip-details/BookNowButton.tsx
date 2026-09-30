'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function BookNowButton({ tripId }: { tripId: string }) {
  const router = useRouter();
  
  return (
    <button 
      onClick={() => router.push(`/book/${tripId}`)}
      className="w-full bg-[#CA8A04] hover:bg-[#B45309] text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
    >
      Book Now
    </button>
  );
}
