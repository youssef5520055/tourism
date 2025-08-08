'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminStats from '@/components/admin/AdminStats';
import TripManagement from '@/components/admin/TripManagement';
import BookingManagement from '@/components/admin/BookingManagement';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="bg-gray-200 h-8 rounded mb-4"></div>
          <div className="bg-gray-200 h-64 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage trips, bookings, and monitor performance
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trips">Trips</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <AdminStats />
        </TabsContent>

        <TabsContent value="trips">
          <TripManagement />
        </TabsContent>

        <TabsContent value="bookings">
          <BookingManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}