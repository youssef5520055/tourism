'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

interface SearchFiltersProps {
  filters: {
    destination: string;
    budget: { min: number; max: number };
    dateRange: { start: string; end: string };
    tripType: string;
  };
  onFiltersChange: (filters: any) => void;
}

export default function SearchFilters({ filters, onFiltersChange }: SearchFiltersProps) {
  const handleFilterChange = (key: string, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const handleBudgetChange = (values: number[]) => {
    handleFilterChange('budget', { min: values[0], max: values[1] });
  };

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle>Filter Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Destination */}
        <div>
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            placeholder="Where do you want to go?"
            value={filters.destination}
            onChange={(e) => handleFilterChange('destination', e.target.value)}
          />
        </div>

        {/* Budget Range */}
        <div>
          <Label>Budget Range</Label>
          <div className="px-2 py-4">
            <Slider
              value={[filters.budget.min, filters.budget.max]}
              onValueChange={handleBudgetChange}
              max={10000}
              min={0}
              step={100}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>${filters.budget.min}</span>
              <span>${filters.budget.max}</span>
            </div>
          </div>
        </div>

        {/* Trip Type */}
        <div>
          <Label>Trip Type</Label>
          <Select
            value={filters.tripType}
            onValueChange={(value) => handleFilterChange('tripType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select trip type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="beach">Beach</SelectItem>
              <SelectItem value="cultural">Cultural</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
              <SelectItem value="family">Family</SelectItem>
              <SelectItem value="romantic">Romantic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Range */}
        <div className="space-y-3">
          <Label>Travel Dates</Label>
          <div>
            <Label htmlFor="startDate" className="text-sm">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={filters.dateRange.start}
              onChange={(e) => handleFilterChange('dateRange', {
                ...filters.dateRange,
                start: e.target.value
              })}
            />
          </div>
          <div>
            <Label htmlFor="endDate" className="text-sm">End Date</Label>
            <Input
              id="endDate"
              type="date"
              value={filters.dateRange.end}
              onChange={(e) => handleFilterChange('dateRange', {
                ...filters.dateRange,
                end: e.target.value
              })}
            />
          </div>
        </div>

        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => onFiltersChange({
            destination: '',
            budget: { min: 0, max: 10000 },
            dateRange: { start: '', end: '' },
            tripType: '',
          })}
        >
          Clear Filters
        </Button>
      </CardContent>
    </Card>
  );
}