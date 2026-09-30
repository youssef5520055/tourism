import os

base_dir = r'C:\Users\laptop.house\Documents\antigravity\tourism'
files = {
    r'app\destinations\page.tsx': '''\'use client\';

import React, { useState } from \'react\';
import Link from \'next/link\';
import { MOCK_TRIPS, CATEGORIES } from \'@/lib/mock-data\';
import { MapPin, Star, Clock } from \'lucide-react\';

export default function DestinationsPage() {
  const [activeCategory, setActiveCategory] = useState(\'All\');
  const [searchQuery, setSearchQuery] = useState(\'\');

  const filteredTrips = MOCK_TRIPS.filter(trip => {
    const matchesCategory = activeCategory === \'All\' || trip.category === activeCategory;
    const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          trip.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#1C1917] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Explore All Destinations</h1>
          <p className="text-[#44403C] text-lg max-w-2xl mx-auto">Discover our curated collection of extraordinary journeys around the globe.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0">
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              onClick={() => setActiveCategory(\'All\')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === \'All\' ? \'bg-[#CA8A04] text-white\' : \'bg-white/10 text-white hover:bg-white/20\'}`}
            >
              All
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === cat.name ? \'bg-[#CA8A04] text-white\' : \'bg-white/10 text-white hover:bg-white/20\'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#CA8A04]"
            />
          </div>
        </div>

        {filteredTrips.length === 0 ? (
          <div className="text-center py-24 bg-white/5 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-serif mb-2">No destinations found</h3>
            <p className="text-gray-400">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => { setActiveCategory(\'All\'); setSearchQuery(\'\'); }}
              className="mt-6 bg-[#CA8A04] text-white rounded-full px-8 py-3 hover:bg-[#B45309] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrips.map(trip => (
              <div key={trip.id} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                      {trip.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-[#CA8A04] text-sm font-medium mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {trip.location}
                  </div>
                  
                  <h3 className="text-xl font-serif text-white mb-2">{trip.title}</h3>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-[#CA8A04] mr-1 fill-current" />
                      {trip.rating}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Clock className="w-4 h-4 mr-1" />
                      {trip.duration} days
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-400">From</span>
                      <p className="text-lg font-bold text-white">${trip.price}</p>
                    </div>
                    <Link href={`/trips/${trip.id}`} className="bg-[#CA8A04] text-white rounded-full px-6 py-2 hover:bg-[#B45309] transition-colors text-sm">
                      View Trip
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}''',
    r'app\search\page.tsx': '''\'use client\';

import React, { useState, Suspense } from \'react\';
import { useSearchParams } from \'next/navigation\';
import Link from \'next/link\';
import { MOCK_TRIPS, CATEGORIES } from \'@/lib/mock-data\';
import { MapPin, Star, Clock, Filter } from \'lucide-react\';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get(\'destination\') || \'\';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(\'All\');
  const [priceRange, setPriceRange] = useState(15000); 
  
  const filteredTrips = MOCK_TRIPS.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          trip.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === \'All\' || trip.category === activeCategory;
    const matchesPrice = trip.price <= priceRange;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-[#1C1917] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="relative max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search destinations, experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 text-white text-lg placeholder:text-gray-400 focus:outline-none focus:border-[#CA8A04]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sticky top-28">
              <div className="flex items-center mb-6">
                <Filter className="w-5 h-5 text-[#CA8A04] mr-2" />
                <h2 className="text-xl font-serif">Filters</h2>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">Category</h3>
                <div className="space-y-2">
                  <div 
                    className={`cursor-pointer px-3 py-2 rounded-lg transition-colors ${activeCategory === \'All\' ? \'bg-[#CA8A04]/20 text-[#CA8A04]\' : \'hover:bg-white/5\'}`}
                    onClick={() => setActiveCategory(\'All\')}
                  >
                    All Categories
                  </div>
                  {CATEGORIES.map(cat => (
                    <div 
                      key={cat.id}
                      className={`cursor-pointer px-3 py-2 rounded-lg transition-colors ${activeCategory === cat.name ? \'bg-[#CA8A04]/20 text-[#CA8A04]\' : \'hover:bg-white/5\'}`}
                      onClick={() => setActiveCategory(cat.name)}
                    >
                      {cat.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">Max Price: ${priceRange}</h3>
                <input 
                  type="range" 
                  min="500" 
                  max="15000" 
                  step="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#CA8A04]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>$500</span>
                  <span>$15,000+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="mb-6">
              <p className="text-gray-300">Showing {filteredTrips.length} result{filteredTrips.length !== 1 ? \'s\' : \'\'}</p>
            </div>
            
            {filteredTrips.length === 0 ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
                <h3 className="text-2xl font-serif mb-4">No experiences match your criteria</h3>
                <p className="text-gray-400 mb-8">Try broadening your search, selecting a different category, or adjusting the price range.</p>
                <button 
                  onClick={() => { setSearchQuery(\'\'); setActiveCategory(\'All\'); setPriceRange(15000); }}
                  className="bg-[#CA8A04] text-white rounded-full px-8 py-3 hover:bg-[#B45309] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTrips.map(trip => (
                  <div key={trip.id} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                          {trip.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center text-[#CA8A04] text-xs font-medium mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {trip.location}
                      </div>
                      
                      <h3 className="text-lg font-serif text-white mb-2">{trip.title}</h3>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center text-xs text-gray-300">
                          <Star className="w-3 h-3 text-[#CA8A04] mr-1 fill-current" />
                          {trip.rating}
                        </div>
                        <div className="flex items-center text-xs text-gray-300">
                          <Clock className="w-3 h-3 mr-1" />
                          {trip.duration} days
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-400">From</span>
                          <p className="text-base font-bold text-white">${trip.price}</p>
                        </div>
                        <Link href={`/trips/${trip.id}`} className="bg-[#CA8A04] text-white rounded-full px-5 py-2 hover:bg-[#B45309] transition-colors text-sm">
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#1C1917] flex items-center justify-center text-[#CA8A04]">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}''',
    r'app\contact\page.tsx': '''\'use client\';

import React, { useState } from \'react\';
import { MapPin, Phone, Mail, Clock, Send } from \'lucide-react\';
import toast from \'react-hot-toast\';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: \'\',
    email: \'\',
    subject: \'\',
    message: \'\'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success(\'Message sent! We will get back to you shortly.\');
      setFormData({ name: \'\', email: \'\', subject: \'\', message: \'\' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#1C1917] text-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Contact Us</h1>
        <p className="text-lg text-[#44403C] max-w-2xl mx-auto">
          Have a question about a trip? Looking for a custom itinerary? Our travel experts are here to help design your perfect journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500">
                <MapPin className="w-8 h-8 text-[#CA8A04] mb-4" />
                <h3 className="text-xl font-serif mb-2">Our Office</h3>
                <p className="text-gray-400">123 Wanderlust Way<br />Suite 500<br />New York, NY 10001</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-8 h-8 text-[#CA8A04] mb-4" />
                <h3 className="text-xl font-serif mb-2">Phone</h3>
                <p className="text-gray-400">+1 (800) 123-4567<br />+1 (212) 987-6543</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500">
                <Mail className="w-8 h-8 text-[#CA8A04] mb-4" />
                <h3 className="text-xl font-serif mb-2">Email</h3>
                <p className="text-gray-400">hello@wanderai.com<br />support@wanderai.com</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500">
                <Clock className="w-8 h-8 text-[#CA8A04] mb-4" />
                <h3 className="text-xl font-serif mb-2">Business Hours</h3>
                <p className="text-gray-400">Mon - Fri: 9am - 6pm EST<br />Sat - Sun: 10am - 4pm EST</p>
              </div>
            </div>
            
            <div className="w-full h-64 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: \'radial-gradient(circle at center, #CA8A04 1px, transparent 1px)\', backgroundSize: \'20px 20px\' }}></div>
              <div className="flex flex-col items-center z-10 text-[#CA8A04]">
                <MapPin className="w-10 h-10 mb-2" />
                <span className="font-serif">Interactive Map Unavailable</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-10">
            <h2 className="text-3xl font-serif mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#CA8A04] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#CA8A04] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#CA8A04] transition-colors appearance-none"
                >
                  <option value="" className="bg-[#1C1917]">Select a topic...</option>
                  <option value="General Inquiry" className="bg-[#1C1917]">General Inquiry</option>
                  <option value="Custom Itinerary" className="bg-[#1C1917]">Custom Itinerary Request</option>
                  <option value="Booking Support" className="bg-[#1C1917]">Booking Support</option>
                  <option value="Feedback" className="bg-[#1C1917]">Feedback</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#CA8A04] transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#CA8A04] text-white rounded-xl px-8 py-4 font-medium hover:bg-[#B45309] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  \'Sending...\'
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}''',
    r'components\dashboard\UpcomingTrips.tsx': '''\'use client\';

import React from \'react\';
import Link from \'next/link\';
import { Calendar, Users, MapPin } from \'lucide-react\';

interface UpcomingTripsProps {
  bookings: any[];
}

export default function UpcomingTrips({ bookings }: UpcomingTripsProps) {
  const upcoming = bookings?.filter(b => b.status === \'confirmed\' || b.status === \'pending\') || [];

  if (upcoming.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
          <MapPin className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-serif text-white mb-2">No upcoming trips</h3>
        <p className="text-gray-400 mb-6 max-w-md">Your itinerary is currently empty. It\'s time to start planning your next great adventure!</p>
        <Link href="/destinations" className="bg-[#CA8A04] text-white rounded-full px-8 py-3 hover:bg-[#B45309] transition-colors">
          Start Exploring
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {upcoming.map((booking, idx) => (
        <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row">
          <div className="sm:w-1/3 h-48 sm:h-auto relative">
            <img src={booking.trip?.image || \'/images/placeholder.jpg\'} alt="Destination" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border border-white/10 backdrop-blur-md ${
                booking.status === \'confirmed\' ? \'bg-green-500/80 text-white\' : \'bg-yellow-500/80 text-white\'
              }`}>
                {booking.status.toUpperCase()}
              </span>
            </div>
          </div>
          
          <div className="p-6 sm:w-2/3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-serif text-white">{booking.trip?.title || \'Trip\'}</h3>
                <p className="text-xl font-semibold text-[#CA8A04]">${booking.totalPrice}</p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[#CA8A04]" />
                  {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[#CA8A04]" />
                  {booking.travelers} Travelers
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Link href={`/bookings/${booking.id}`} className="px-6 py-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors text-sm">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}''',
    r'components\dashboard\PastTrips.tsx': '''\'use client\';

import React from \'react\';
import Link from \'next/link\';
import { Calendar, Star } from \'lucide-react\';

interface PastTripsProps {
  bookings: any[];
}

export default function PastTrips({ bookings }: PastTripsProps) {
  const past = bookings?.filter(b => b.status === \'completed\') || [];

  if (past.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
        <h3 className="text-xl font-serif text-white mb-2">No past trips yet</h3>
        <p className="text-gray-400 mb-6">Once you complete a journey with us, it will appear here.</p>
        <Link href="/destinations" className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
          Book your first adventure
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {past.map((booking, idx) => (
        <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
          <div className="h-48 relative">
            <img src={booking.trip?.image || \'/images/placeholder.jpg\'} alt="Destination" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full px-4 py-2 text-sm flex items-center">
                <Star className="w-4 h-4 mr-2" /> Leave Review
              </button>
            </div>
          </div>
          
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-serif text-white mb-2 line-clamp-1">{booking.trip?.title || \'Trip\'}</h3>
            
            <div className="flex items-center text-xs text-gray-400 mb-3">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date(booking.startDate).toLocaleDateString()}
            </div>
            
            <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs text-gray-400">Total</span>
              <span className="font-semibold text-white">${booking.totalPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}''',
    r'components\dashboard\PaymentHistory.tsx': '''\'use client\';

import React from \'react\';
import { Receipt, Download } from \'lucide-react\';

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
                <td className="p-4 text-white font-medium">{booking.trip?.title || \'Trip Package\'}</td>
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
}''',
    r'components\dashboard\AIRecommendations.tsx': '''\'use client\';

import React, { useEffect, useState } from \'react\';
import Link from \'next/link\';
import { Sparkles, ArrowRight } from \'lucide-react\';
import { MOCK_TRIPS } from \'@/lib/mock-data\';

interface AIRecommendationsProps {
  user?: any;
}

export default function AIRecommendations({ user }: AIRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    const shuffled = [...MOCK_TRIPS].sort(() => 0.5 - Math.random());
    setRecommendations(shuffled.slice(0, 3));
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
      <div className="flex items-center mb-6">
        <Sparkles className="w-5 h-5 text-[#CA8A04] mr-2" />
        <h2 className="text-xl font-serif text-white">AI Picks for You</h2>
      </div>
      
      <p className="text-sm text-gray-400 mb-6">
        Based on your travel history and preferences, our AI suggests these destinations.
      </p>
      
      <div className="space-y-4">
        {recommendations.map(trip => (
          <Link key={trip.id} href={`/trips/${trip.id}`} className="group block">
            <div className="flex items-center p-3 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="ml-4 flex-grow">
                <h4 className="text-white text-sm font-medium line-clamp-1 group-hover:text-[#CA8A04] transition-colors">{trip.title}</h4>
                <p className="text-xs text-gray-400 mt-1">${trip.price} • {trip.duration} days</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#CA8A04] transition-colors flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/10">
        <button className="w-full text-xs text-center text-gray-400 hover:text-white transition-colors">
          Refine my preferences
        </button>
      </div>
    </div>
  );
}'''
}

for path, content in files.items():
    full_path = os.path.join(base_dir, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content.strip())
print('Files created successfully.')
