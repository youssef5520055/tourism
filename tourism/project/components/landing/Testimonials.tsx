import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5,
      text: "WanderAI completely transformed how I plan my trips. The AI recommendations were spot-on, and I discovered places I never would have found otherwise. My trip to Japan was absolutely perfect!",
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'London, UK',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 5,
      text: "The booking process was seamless, and the personalized itinerary saved me hours of research. The hidden gems they suggested made our European adventure truly special.",
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'Sydney, Australia',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      rating: 5,
      text: "As a busy professional, I appreciated how WanderAI handled everything from flights to activities. The AI chatbot answered all my questions instantly, even at midnight!",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What Our Travelers Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied travelers who have discovered their perfect adventures with WanderAI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="relative">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-blue-200 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
          <span className="font-semibold text-gray-900 mr-1">4.9/5</span>
          <span className="text-gray-600">from 10,000+ reviews</span>
        </div>
      </div>
    </section>
  );
}