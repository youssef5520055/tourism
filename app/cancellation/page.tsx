import React from "react";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <section className="bg-[#1C1917] text-white py-24 px-4 text-center">
        <div className="flex justify-center mb-6">
          <Calendar className="h-16 w-16 text-[#CA8A04]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Cancellation Policy</h1>
        <p className="text-xl text-stone-300 font-sans max-w-2xl mx-auto">
          Clear, transparent, and flexible options for your peace of mind.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        <div className="bg-white/10 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-serif font-bold text-[#1C1917] mb-6">Standard Refund Timeline</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-4 font-semibold text-[#1C1917]">Time Before Departure</th>
                  <th className="py-4 font-semibold text-[#1C1917]">Refund Amount</th>
                  <th className="py-4 font-semibold text-[#1C1917]">Conditions</th>
                </tr>
              </thead>
              <tbody className="text-[#44403C]">
                <tr className="border-b border-stone-100">
                  <td className="py-4">90+ days</td>
                  <td className="py-4 font-bold text-green-600">100% Refund</td>
                  <td className="py-4">Fully refundable minus non-refundable deposit</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-4">60-89 days</td>
                  <td className="py-4 font-bold text-[#CA8A04]">75% Refund</td>
                  <td className="py-4">25% retained as cancellation fee</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-4">30-59 days</td>
                  <td className="py-4 font-bold text-orange-500">50% Refund</td>
                  <td className="py-4">50% retained as cancellation fee</td>
                </tr>
                <tr>
                  <td className="py-4">Under 30 days</td>
                  <td className="py-4 font-bold text-red-500">No Refund</td>
                  <td className="py-4">Date transfer allowed for select bookings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 hover:shadow-xl transition-all">
            <h2 className="text-2xl font-serif font-bold text-[#1C1917] mb-4">How to Cancel</h2>
            <p className="text-[#44403C] font-sans">
              To cancel your booking, navigate to the "My Trips" section in your WanderAI dashboard and select the "Cancel Booking" option. You will receive immediate confirmation.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 hover:shadow-xl transition-all">
            <h2 className="text-2xl font-serif font-bold text-[#1C1917] mb-4">Special Circumstances</h2>
            <p className="text-[#44403C] font-sans">
              In cases of medical emergencies or extreme weather events, contact our support team. We review these on a case-by-case basis to offer maximum flexibility.
            </p>
          </div>
        </div>

        <div className="bg-[#1C1917] text-white rounded-3xl p-8 text-center shadow-2xl">
          <h2 className="text-2xl font-serif font-bold mb-4">Travel Insurance Recommendation</h2>
          <p className="text-stone-300 font-sans mb-6 max-w-2xl mx-auto">
            We strongly recommend purchasing comprehensive travel insurance to protect your investment against unforeseen circumstances that might force you to cancel your trip.
          </p>
          <Link href="/contact">
            <Button className="bg-[#CA8A04] text-white rounded-full px-8 py-4 hover:bg-[#B45309] transition-all">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us for Questions
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
