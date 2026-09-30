'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import TripCard from '@/components/TripCard';
import SearchFilters from '@/components/search/SearchFilters';
import NaturalLanguageSearch from '@/components/search/NaturalLanguageSearch';
import { searchTrips } from '@/services/api';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    destination: searchParams.get('destination') || '',
    budget: { min: 0, max: 10000 },
    dateRange: { start: '', end: '' },
    tripType: '',
  });

  useEffect(() => {
    loadTrips();
  }, [filters]);

  const loadTrips = async () => {
    try {
      setLoading(true);
      const response = await searchTrips(filters);
      setTrips(response.data);
    } catch (error) {
      console.error('Error loading trips:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Search Results
        </h1>
        <NaturalLanguageSearch onSearch={loadTrips} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <SearchFilters filters={filters} onFiltersChange={setFilters} />
        </div>
        
        <div className="lg:col-span-3">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="mb-4">
                <p className="text-gray-600">
                  Found {trips.length} trips matching your criteria
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {trips.map((trip) => (
                  <TripCard key={trip._id} trip={trip} />
                ))}
              </div>
            </>
          )}
          
          {!loading && trips.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No trips found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or use natural language search
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}