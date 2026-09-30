'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import { MOCK_TRIPS } from '@/lib/mock-data';

export default function PaymentPage() {
  const router = useRouter();
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const data = sessionStorage.getItem('bookingData');
    if (data) {
      setBooking(JSON.parse(data));
    } else {
      setBooking({
        tripName: MOCK_TRIPS[0].title,
        travelers: 2,
        totalPrice: MOCK_TRIPS[0].price * 2
      });
    }
  }, []);

  const handlePayment = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      sessionStorage.removeItem('bookingData');
    }, 2000);
  };

  if (!booking) return null;

  const subtotal = booking.totalPrice;
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;

  if (success) {
    return (
      <div className="min-h-screen bg-[#1C1917] text-white flex flex-col items-center justify-center p-4">
        <CheckCircle className="text-green-500 w-24 h-24 mb-6" />
        <h1 className="text-4xl font-serif mb-4">Payment Successful!</h1>
        <p className="text-gray-400 mb-8 text-center max-w-md">Your booking for {booking.tripName} has been confirmed. We've sent a receipt to your email.</p>
        <button onClick={() => router.push('/dashboard')} className="bg-[#CA8A04] hover:bg-[#B45309] text-white rounded-full px-8 py-3 font-semibold transition-colors">
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1C1917] text-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif mb-12 text-[#CA8A04]">Secure Payment</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-serif mb-6">Payment Details</h2>
            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Cardholder Name</label>
                <input required type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Card Number</label>
                <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Expiry Date</label>
                  <input required type="text" placeholder="MM/YY" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">CVV</label>
                  <input required type="text" placeholder="123" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#CA8A04] outline-none" />
                </div>
              </div>

              <button disabled={loading} type="submit" className="w-full bg-[#CA8A04] hover:bg-[#B45309] text-white rounded-full py-4 font-semibold transition-colors duration-300 mt-8 disabled:opacity-50">
                {loading ? 'Processing...' : `Pay $${total.toLocaleString()}`}
              </button>
            </form>
          </div>

          {/* Right - Summary */}
          <div>
            <div className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-xl sticky top-24">
              <h3 className="text-2xl font-serif mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-lg">{booking.tripName}</h4>
                  <p className="text-gray-400">{booking.travelers} Traveler(s)</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Taxes (10%)</span>
                  <span>${taxes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-xl mt-4 pt-4 border-t border-white/10 text-[#CA8A04]">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
