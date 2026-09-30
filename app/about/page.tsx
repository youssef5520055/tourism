import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Globe, Award, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, label: 'Happy Travelers', value: '50,000+' },
    { icon: Globe, label: 'Destinations', value: '120+' },
    { icon: Award, label: 'Awards Won', value: '25' },
    { icon: Heart, label: 'Years of Experience', value: '15' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      bio: 'With over 20 years in the travel industry, Sarah founded WanderAI to revolutionize how people discover and book their dream vacations.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Development',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Michael leads our AI initiatives, developing cutting-edge recommendation systems that help travelers find their perfect adventures.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Travel Experience Director',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      bio: 'Emily ensures every trip curated by our platform meets the highest standards of quality and creates unforgettable memories.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About WanderAI
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to make travel planning effortless and inspiring through the power of artificial intelligence and human expertise.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Founded in 2019, WanderAI was born from a simple observation: travel planning was becoming increasingly complex, yet travelers craved personalized, authentic experiences.
            </p>
            <p>
              We combined cutting-edge AI technology with deep travel expertise to create a platform that understands your unique preferences and connects you with extraordinary destinations and experiences worldwide.
            </p>
            <p>
              Today, we've helped over 50,000 travelers discover their perfect adventures, from hidden gems in remote villages to luxury escapes in world-famous destinations.
            </p>
          </div>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
            alt="Team planning travel"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission & Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Our Mission & Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Global Access
              </h3>
              <p className="text-gray-600">
                Making extraordinary travel experiences accessible to everyone, regardless of their travel expertise or budget.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Authentic Experiences
              </h3>
              <p className="text-gray-600">
                Connecting travelers with genuine, meaningful experiences that create lasting memories and cultural understanding.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                Delivering exceptional service and carefully curated experiences that exceed expectations at every step.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}