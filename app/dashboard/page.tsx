'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import UpcomingTrips from '@/components/dashboard/UpcomingTrips';
import PastTrips from '@/components/dashboard/PastTrips';
import PaymentHistory from '@/components/dashboard/PaymentHistory';
import AIRecommendations from '@/components/dashboard/AIRecommendations';
import { getUserBookings, getUserProfile } from '@/services/api';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/auth/login');
        return;
      }

      const [userResponse, bookingsResponse] = await Promise.all([
        getUserProfile(),
        getUserBookings(),
      ]);

      setUser(userResponse.data);
      setBookings(bookingsResponse.data);
    } catch (error: any) {
      console.error('Error loading user data:', error);
      if (error.response?.status === 401) {
        router.push('/auth/login');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="bg-gray-200 h-8 rounded w-1/3"></div>
          <div className="bg-gray-200 h-64 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-gray-600">
          Manage your trips and discover new adventures
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <UpcomingTrips bookings={bookings.filter(b => new Date(b.travelDate) > new Date())} />
          <PastTrips bookings={bookings.filter(b => new Date(b.travelDate) <= new Date())} />
          <PaymentHistory bookings={bookings} />
        </div>
        
        <div className="lg:col-span-1">
          <AIRecommendations user={user} />
        </div>
      </div>
    </div>
  );
}