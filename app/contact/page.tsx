'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success('Message sent! We will get back to you shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
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
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #CA8A04 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
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
                  'Sending...'
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
}
