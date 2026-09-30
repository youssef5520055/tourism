import sys

content = '''import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1C1917]">
      {/* Background Image with Parallax & Liquid Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop"
          alt="Paris architecture luxury"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Iridescent/Glassmorphism Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1917]/80 via-[#1C1917]/50 to-[#1C1917]"></div>
        
        {/* Animated glowing orbs for liquid effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CA8A04]/30 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-[#FAFAF9] px-4 max-w-5xl mt-20">
        <div className="mb-8 flex flex-col items-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 shadow-xl">
            <Sparkles className="w-4 h-4 mr-2 text-[#CA8A04]" />
            <span className="text-sm font-medium tracking-wide uppercase">Bespoke AI Itineraries</span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight drop-shadow-lg">
            Redefine Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#CA8A04] to-yellow-200 italic font-medium">Journey</span>
          </h1>
          <p className="text-lg md:text-2xl text-stone-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the world's most exclusive destinations, curated perfectly for you by our sophisticated artificial intelligence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button asChild size="lg" className="bg-[#CA8A04] hover:bg-yellow-600 text-[#0C0A09] font-medium text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(202,138,4,0.3)] transition-all hover:scale-105 duration-300">
            <Link href="/search">
              Curate Your Trip
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="text-stone-800 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:text-white text-lg px-10 py-7 rounded-full transition-all duration-300"
          >
            <Link href="/about">
              Discover WanderAI
            </Link>
          </Button>
        </div>

        {/* Stats inside a glass pill */}
        <div className="mt-20 inline-grid grid-cols-1 md:grid-cols-3 gap-12 text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl py-8 px-16 shadow-2xl">
          <div>
            <div className="font-serif text-4xl text-[#CA8A04]">250+</div>
            <div className="text-sm tracking-widest uppercase text-stone-400 mt-2 font-medium">Curated Locales</div>
          </div>
          <div>
            <div className="font-serif text-4xl text-[#CA8A04]">10k+</div>
            <div className="text-sm tracking-widest uppercase text-stone-400 mt-2 font-medium">Elite Travelers</div>
          </div>
          <div>
            <div className="font-serif text-4xl text-[#CA8A04]">4.9</div>
            <div className="text-sm tracking-widest uppercase text-stone-400 mt-2 font-medium">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}
'''

with open('components/landing/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
