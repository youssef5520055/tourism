'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Sparkles } from 'lucide-react';

interface NaturalLanguageSearchProps {
  onSearch: () => void;
}

export default function NaturalLanguageSearch({ onSearch }: NaturalLanguageSearchProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Process natural language query here
      console.log('Natural language query:', query);
      onSearch();
    }
  };

  return (
    <div className="bg-blue-50 rounded-lg p-6 mb-6">
      <div className="flex items-center mb-3">
        <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">
          AI-Powered Search
        </h3>
      </div>
      <p className="text-gray-600 mb-4">
        Describe your perfect trip in natural language and let our AI find the best matches for you.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., 'Find me a beach vacation in Europe for under $2000 in summer'"
          className="flex-1"
        />
        <Button type="submit" disabled={!query.trim()}>
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </form>
    </div>
  );
}