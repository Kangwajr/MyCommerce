import React from 'react';

const newArrivals = [
  {
    id: 1,
    name: 'Summer Collection 2024',
    description: 'Light and breezy pieces for the perfect summer look',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Autumn Essentials',
    description: 'Cozy and stylish must-haves for the season',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export function NewArrivals() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newArrivals.map((item) => (
            <div key={item.id} className="relative group">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-200 mb-4">{item.description}</p>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}