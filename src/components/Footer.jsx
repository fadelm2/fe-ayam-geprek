import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6285283088941', '_blank');
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">Geprek Nusantara</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ayam geprek terenak dengan berbagai pilihan level pedas dan varian sambal yang bikin ketagihan.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Testimoni
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+62 852-8308-8941</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">info@gepreknusantara.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Jl. Kemang Raya No. 123<br />Jakarta Selatan, 12730</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Jam Buka</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-white font-semibold">Setiap Hari</p>
                  <p className="text-gray-400">10.00 - 22.00 WIB</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Geprek Nusantara. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;