import React from "react";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      {/* Premium Hero Banner */}
      <section className="bg-[#1C1917] text-white py-24 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Terms of Service</h1>
        <p className="text-xl text-stone-300 font-sans max-w-2xl mx-auto">
          Please read these terms carefully before using WanderAI services.
        </p>
        <p className="mt-8 text-sm text-stone-400">Last updated: January 1, 2026</p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        {[
          {
            title: "1. Acceptance of Terms",
            content: "By accessing or using WanderAI's platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our service."
          },
          {
            title: "2. Service Description",
            content: "WanderAI provides an AI-powered luxury travel planning and booking service. We act as an intermediary between you and various travel service providers (hotels, airlines, tour operators)."
          },
          {
            title: "3. User Responsibilities",
            content: "You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate and complete information when booking travel through our platform."
          },
          {
            title: "4. Booking & Payment Terms",
            content: "All bookings are subject to availability. Prices are subject to change until confirmed. Full payment or a required deposit must be made at the time of booking confirmation."
          },
          {
            title: "5. Cancellation Policy",
            content: "Cancellations are subject to our standard Cancellation Policy, which is provided at the time of booking and available on our website. Supplier-specific cancellation rules may also apply."
          },
          {
            title: "6. Intellectual Property",
            content: "The WanderAI platform, including its original content, features, and functionality, are owned by WanderAI and are protected by international copyright, trademark, and other intellectual property laws."
          },
          {
            title: "7. Limitation of Liability",
            content: "WanderAI shall not be held liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or the actions of third-party travel providers."
          },
          {
            title: "8. Governing Law",
            content: "These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which WanderAI operates, without regard to its conflict of law provisions."
          }
        ].map((section, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-500">
            <h2 className="text-2xl font-serif font-bold text-[#1C1917] mb-4">{section.title}</h2>
            <p className="text-[#44403C] font-sans leading-relaxed">{section.content}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
