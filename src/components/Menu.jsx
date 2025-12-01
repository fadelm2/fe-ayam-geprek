import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Flame, Phone } from 'lucide-react';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Geprek Original',
      price: 'Rp 15.000',
      description: 'Ayam goreng crispy dengan sambal geprek level 1-3',
      image: 'https://images.unsplash.com/photo-1696340034876-6245523babfa',
      spicyLevel: 2,
      popular: true
    },
    {
      id: 2,
      name: 'Geprek Keju',
      price: 'Rp 18.000',
      description: 'Ayam geprek dengan lelehan keju mozarella',
      image: 'https://images.pexels.com/photos/28041439/pexels-photo-28041439.jpeg',
      spicyLevel: 2,
      popular: true
    },
    {
      id: 3,
      name: 'Geprek Jumbo',
      price: 'Rp 22.000',
      description: 'Ayam geprek ukuran jumbo untuk yang super lapar',
      image: 'https://images.unsplash.com/photo-1732185269471-b62b52ca46f9',
      spicyLevel: 3,
      popular: false
    },
    {
      id: 4,
      name: 'Geprek Sambal Matah',
      price: 'Rp 17.000',
      description: 'Ayam geprek dengan sambal matah khas Bali',
      image: 'https://images.pexels.com/photos/28041446/pexels-photo-28041446.jpeg',
      spicyLevel: 1,
      popular: false
    },
    {
      id: 5,
      name: 'Geprek Sambal Ijo',
      price: 'Rp 17.000',
      description: 'Ayam geprek dengan sambal hijau pedas segar',
      image: 'https://images.unsplash.com/photo-1647102398925-e23f6486ca04',
      spicyLevel: 3,
      popular: false
    },
    {
      id: 6,
      name: 'Paket Hemat',
      price: 'Rp 20.000',
      description: 'Ayam geprek + nasi + es teh manis',
      image: 'https://images.unsplash.com/photo-1696340034876-6245523babfa',
      spicyLevel: 2,
      popular: true
    }
  ];

  const handleOrder = (itemName) => {
    const message = `Halo! Saya mau pesan ${itemName}`;
    window.open(`https://wa.me/6285283088941?text=${encodeURIComponent(message)}`, '_blank');
  };

  const renderSpicyLevel = (level) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(level)].map((_, i) => (
          <Flame key={i} className="w-4 h-4 text-red-500 fill-red-500" />
        ))}
        {[...Array(3 - level)].map((_, i) => (
          <Flame key={i + level} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Menu <span className="text-red-600">Pilihan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih level pedasmu! Dari yang ringan sampai yang bikin keringetan
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <Badge className="absolute top-4 right-4 bg-red-600 text-white">
                    Populer
                  </Badge>
                )}
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <span className="text-xl font-bold text-red-600">{item.price}</span>
                </div>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Level Pedas:</p>
                    {renderSpicyLevel(item.spicyLevel)}
                  </div>
                  <Button
                    onClick={() => handleOrder(item.name)}
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Pesan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;