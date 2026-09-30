import React from 'react';

export default function PaymentSummary({ bookingData }: { bookingData: any }) {
  if (!bookingData) return null;
  const subtotal = bookingData.totalPrice || 0;
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;

  return (
    <div className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-xl text-white">
      <h3 className="text-2xl font-serif mb-6">Order Summary</h3>
      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-lg">{bookingData.tripName}</h4>
          <p className="text-gray-400">{bookingData.travelers} Traveler(s)</p>
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
  );
}
