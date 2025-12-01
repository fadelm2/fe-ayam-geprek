import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'Food Blogger',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      comment: 'Ayam gepreknya juara! Crispy di luar, juicy di dalam. Sambalnya pedas banget tapi bikin nagih. Recommended!'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      role: 'Mahasiswa',
      image: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      comment: 'Harganya terjangkau dan rasanya enak banget! Jadi langganan nih setiap pulang kuliah. Geprek keju favorit saya!'
    },
    {
      id: 3,
      name: 'Andi Wijaya',
      role: 'Karyawan Swasta',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      comment: 'Pesen via WhatsApp gampang banget. Deliverynya cepat dan makanan masih panas. Pelayanan sangat memuaskan!'
    },
    {
      id: 4,
      name: 'Dewi Lestari',
      role: 'Ibu Rumah Tangga',
      image: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      comment: 'Anak-anak suka banget sama ayam geprek di sini. Bisa pilih level pedasnya jadi aman buat anak-anak juga.'
    },
    {
      id: 5,
      name: 'Rudi Hermawan',
      role: 'Pengusaha',
      image: 'https://i.pravatar.cc/150?img=51',
      rating: 5,
      comment: 'Geprek jumbonya porsinya besar, cocok buat yang lagi lapar banget. Worth it dengan harganya!'
    },
    {
      id: 6,
      name: 'Maya Kusuma',
      role: 'Content Creator',
      image: 'https://i.pravatar.cc/150?img=26',
      rating: 5,
      comment: 'Sambal matahnya unik dan enak! Beda dari yang lain. Tempatnya juga nyaman buat nongkrong.'
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-red-600">Pelanggan?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ribuan pelanggan puas telah merasakan kelezatan ayam geprek kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-shadow duration-300 border-none shadow-lg">
              <CardContent className="p-6">
                {/* Rating */}
                {renderStars(testimonial.rating)}

                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;