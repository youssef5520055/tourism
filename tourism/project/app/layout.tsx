import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WanderAI - AI-Powered Travel Planning',
  description: 'Discover amazing destinations with AI-powered recommendations and seamless booking experience.',
  keywords: 'travel, tourism, AI travel planner, vacation packages, trip booking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Chatbot />
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
}