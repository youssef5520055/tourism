import Hero from '@/components/landing/Hero';
import SearchBar from '@/components/landing/SearchBar';
import FeaturedDestinations from '@/components/landing/FeaturedDestinations';
import SeasonalOffers from '@/components/landing/SeasonalOffers';
import Testimonials from '@/components/landing/Testimonials';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WanderAI - AI-Powered Travel Planning | Discover Your Next Adventure',
  description: 'Plan your perfect trip with AI recommendations. Explore destinations, get personalized itineraries, and book seamlessly.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative -mt-20 z-20">
        <SearchBar />
      </div>
      <FeaturedDestinations />
      <SeasonalOffers />
      <Testimonials />
    </>
  );
}
