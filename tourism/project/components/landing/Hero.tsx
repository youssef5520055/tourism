import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
          alt="Adventure landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="mb-6">
          <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">AI-Powered Travel Planning</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Discover Your Next
            <span className="block text-blue-400">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let AI help you find the perfect destinations, create personalized itineraries, 
            and book unforgettable experiences around the world.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
            <Link href="/search">
              Start Exploring
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
          >
            <Link href="/about">
              Learn More
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400">120+</div>
            <div className="text-lg opacity-90">Destinations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">50K+</div>
            <div className="text-lg opacity-90">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">15</div>
            <div className="text-lg opacity-90">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}