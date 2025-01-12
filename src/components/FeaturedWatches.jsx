import React from 'react';
import { Sparkles } from 'lucide-react';

const watches = [
  {
    id: 1,
    name: 'Celestial Chronograph',
    price: '₹11,999',
    image: 'https://cdn.pixabay.com/photo/2014/12/19/17/45/wrist-watch-573395_640.jpg'
  },
  {
    id: 2,
    name: 'Mystic Diver',
    price: '₹10,499',
    image: 'https://cdn.pixabay.com/photo/2016/12/19/19/59/male-watch-1918973_640.jpg'
  },
  {
    id: 3,
    name: 'Ethereal Series',
    price: '₹8,999',
    image: 'https://cdn.pixabay.com/photo/2016/05/14/22/26/movement-1392757_640.jpg'
  }
];

export default function FeaturedWatches() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-purple-400 animate-rotate"/>
            <span className="text-purple-400 font-medium">Featured Collection</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
            Legendary Timepieces
          </h2>
          <p className="mt-4 text-lg leading-8 text-purple-200">
            Discover our most enchanting pieces, each crafted with magical precision.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {watches.map((watch) => (
            <article key={watch.id} className="flex flex-col items-start group anime-card rounded-xl p-4">
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="h-96 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
              </div>
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <span className="text-purple-400">New Arrival</span>
              </div>
              <div className="relative mt-2">
                <h3 className="text-lg font-semibold leading-6 text-purple-100 group-hover:text-purple-400 transition-colors">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {watch.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-purple-300">{watch.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
