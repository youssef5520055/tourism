'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();
  const [searchData, setSearchData] = useState({
    destination: '',
    dates: '',
    travelers: '',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      destination: searchData.destination,
      dates: searchData.dates,
      travelers: searchData.travelers,
    }).toString();
    
    router.push(`/search?${params}`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Where would you like to go?
          </h2>
          <p className="text-gray-600">
            Search thousands of destinations or ask our AI for personalized recommendations
          </p>
        </div>

        <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Where to?"
                className="pl-10"
                value={searchData.destination}
                onChange={(e) => setSearchData({
                  ...searchData,
                  destination: e.target.value
                })}
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="When?"
                className="pl-10"
                value={searchData.dates}
                onChange={(e) => setSearchData({
                  ...searchData,
                  dates: e.target.value
                })}
              />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Travelers"
                className="pl-10"
                value={searchData.travelers}
                onChange={(e) => setSearchData({
                  ...searchData,
                  travelers: e.target.value
                })}
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
          
        </form>
      </div>
    </section>
  );
}