import React from 'react';
import { Card, CardContent } from './ui/card';
import { Award, Users, Heart, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      number: '10K+',
      label: 'Pelanggan Puas'
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      number: '5',
      label: 'Tahun Pengalaman'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      number: '15+',
      label: 'Varian Menu'
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      number: '30 Menit',
      label: 'Delivery Cepat'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1732185269471-b62b52ca46f9"
                alt="About Geprek Nusantara"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-600 rounded-full opacity-10 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500 rounded-full opacity-10 -z-10" />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-red-600">Geprek Nusantara</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sejak 2019, kami telah menyajikan ayam geprek terbaik dengan resep rahasia yang bikin ketagihan. 
              Kami menggunakan ayam pilihan berkualitas tinggi dan bumbu rempah nusantara yang kaya akan cita rasa.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dengan berbagai pilihan level pedas dan varian sambal, kami memastikan setiap pelanggan bisa 
              menemukan ayam geprek favorit mereka. Dari yang ringan hingga yang super pedas!
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-3">{stat.icon}</div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;