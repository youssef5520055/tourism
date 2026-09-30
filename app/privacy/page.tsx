import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <section className="bg-[#1C1917] text-white py-24 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Privacy Policy</h1>
        <p className="text-xl text-stone-300 font-sans max-w-2xl mx-auto">
          We are committed to protecting your privacy and personal data.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        {[
          {
            title: "1. Information We Collect",
            content: "We collect information you provide directly to us, such as your name, email, payment details, and travel preferences. We also automatically collect certain data about your device and usage of our platform."
          },
          {
            title: "2. How We Use Your Data",
            content: "Your data is used to provide, personalize, and improve our services, process transactions, communicate with you, and ensure security. Our AI algorithms analyze your preferences to curate bespoke travel experiences."
          },
          {
            title: "3. Data Sharing",
            content: "We only share your information with trusted third-party travel providers necessary to fulfill your bookings. We do not sell your personal data to advertisers."
          },
          {
            title: "4. Cookies",
            content: "We use cookies and similar tracking technologies to track activity on our platform and hold certain information to enhance your user experience."
          },
          {
            title: "5. Data Security",
            content: "We implement robust security measures, including encryption and secure servers, to protect your personal information against unauthorized access, alteration, or destruction."
          },
          {
            title: "6. Your Rights",
            content: "In accordance with GDPR and other privacy laws, you have the right to access, rectify, or erase your personal data. You may also object to processing and request data portability."
          },
          {
            title: "7. Contact Us",
            content: "If you have any questions about this Privacy Policy, please contact our Data Protection Officer at privacy@wanderai.com."
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
