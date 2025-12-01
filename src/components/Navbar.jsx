import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Tentang', href: '#about' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Kontak', href: '#contact' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/6285283088941', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-red-600">Geprek Nusantara</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Order via WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Order via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;