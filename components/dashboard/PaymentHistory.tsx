'use client';

import React from 'react';
import { Receipt, Download } from 'lucide-react';

interface PaymentHistoryProps {
  bookings: any[];
}

export default function PaymentHistory({ bookings }: PaymentHistoryProps) {
  if (!bookings || bookings.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
        <Receipt className="w-12 h-12 text-gray-500 mb-4" />
        <h3 className="text-xl font-serif text-white mb-2">No payment history</h3>
        <p className="text-gray-400">Your billing and payment records will appear here.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-wider text-gray-400">
              <th className="p-4 font-medium">Booking ID</th>
              <th className="p-4 font-medium">Trip</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Amount</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {bookings.map((booking, idx) => (
              <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 text-gray-300 font-mono text-xs">{booking.id?.substring(0, 8) || `BKG-${idx}`}</td>
                <td className="p-4 text-white font-medium">{booking.trip?.title || 'Trip Package'}</td>
                <td className="p-4 text-gray-400">{new Date(booking.createdAt || booking.startDate).toLocaleDateString()}</td>
                <td className="p-4 text-white font-semibold">${booking.totalPrice}</td>
                <td className="p-4">
                  <span className="inline-block bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-md border border-green-500/30">
                    Paid
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-[#CA8A04] hover:text-white transition-colors" title="Download Invoice">
                    <Download className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}