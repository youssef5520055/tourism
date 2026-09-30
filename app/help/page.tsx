import { MOCK_FAQS } from "@/lib/mock-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Mail, Plane, Map, CreditCard } from "lucide-react";
import Link from "next/link";

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      {/* Premium Hero Banner */}
      <section className="bg-[#1C1917] text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-black bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Help Center</h1>
          <p className="text-xl text-stone-300 font-sans max-w-2xl mx-auto mb-10">
            Search our knowledge base or browse categories below to find answers to your questions.
          </p>
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for articles..."
              className="w-full pl-6 pr-12 py-4 rounded-full text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#CA8A04] shadow-xl"
            />
            <HelpCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 h-6 w-6" />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Category 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[#CA8A04]/10 p-3 rounded-full">
                <Plane className="h-6 w-6 text-[#CA8A04]" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#1C1917]">Booking & Itineraries</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does WanderAI generate itineraries?</AccordionTrigger>
                <AccordionContent className="text-[#44403C]">
                  We use advanced AI algorithms to analyze your preferences, past trips, and millions of data points to craft a personalized luxury itinerary just for you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I modify my itinerary after booking?</AccordionTrigger>
                <AccordionContent className="text-[#44403C]">
                  Yes, you can easily request modifications through your dashboard up to 14 days before your departure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Category 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[#CA8A04]/10 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-[#CA8A04]" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#1C1917]">Payments & Refunds</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent className="text-[#44403C]">
                  We accept all major credit cards, PayPal, and wire transfers for premium concierge bookings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How are refunds processed?</AccordionTrigger>
                <AccordionContent className="text-[#44403C]">
                  Refunds are processed back to your original payment method within 5-7 business days, in accordance with our cancellation policy.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Category 3 */}
          <div className="bg-white/10 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[#CA8A04]/10 p-3 rounded-full">
                <Map className="h-6 w-6 text-[#CA8A04]" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#1C1917]">Destinations & Experiences</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Are all destinations covered?</AccordionTrigger>
                <AccordionContent className="text-[#44403C]">
                  We cover over 150 countries, focusing primarily on luxury and boutique experiences globally.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Category 4 */}
          <div className="bg-white/10 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[#CA8A04]/10 p-3 rounded-full">
                <HelpCircle className="h-6 w-6 text-[#CA8A04]" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#1C1917]">Account & Security</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How is my personal data protected?</AccordionTrigger>
                <AccordionContent className="text-[#44403C]">
                  We use bank-level encryption and strictly adhere to GDPR and CCPA guidelines to ensure your data is safe.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1C1917] py-24 text-center px-4">
        <h2 className="text-4xl font-serif font-bold text-white mb-6">Still need help?</h2>
        <p className="text-lg text-stone-300 font-sans max-w-2xl mx-auto mb-10">
          Our dedicated luxury travel concierges are available 24/7 to assist you with any inquiries.
        </p>
        <Link href="/contact">
          <Button className="bg-[#CA8A04] text-white rounded-full px-8 py-6 hover:bg-[#B45309] text-lg shadow-xl inline-flex items-center">
            <Mail className="mr-2 h-5 w-5" />
            Contact Support
          </Button>
        </Link>
      </section>
    </main>
  );
}
