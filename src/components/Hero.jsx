import React from 'react';
import { Button } from './ui/button';
import { Phone, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6285283088941', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1696340034876-6245523babfa"
          alt="Ayam Geprek"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ayam Geprek <span className="text-red-500">Pedas</span> Nusantara
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            Rasakan sensasi pedas yang bikin nagih! Ayam goreng crispy dengan sambal geprek pilihan level pedasmu.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <Clock className="w-6 h-6 text-red-500 mb-2" />
              <p className="text-white font-semibold">Buka Setiap Hari</p>
              <p className="text-gray-300 text-sm">10.00 - 22.00 WIB</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <MapPin className="w-6 h-6 text-red-500 mb-2" />
              <p className="text-white font-semibold">Lokasi Strategis</p>
              <p className="text-gray-300 text-sm">Jakarta Selatan</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <Phone className="w-6 h-6 text-red-500 mb-2" />
              <p className="text-white font-semibold">Order Sekarang</p>
              <p className="text-gray-300 text-sm">Delivery & Dine-in</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Pesan via WhatsApp
            </Button>
            <Button
              onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="bg-white/20 backdrop-blur-md border-white text-white hover:bg-white/30 text-lg px-8 py-6 shadow-lg transition-all duration-300"
            >
              Lihat Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;