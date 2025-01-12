import React from 'react';
import { Sparkles } from 'lucide-react';

const collections = [
  {
    name: 'Mystic Collection',
    description: 'Timepieces for the bold adventurer',
    image: 'https://cdn.pixabay.com/photo/2020/07/10/01/17/time-5389154_640.jpg'
  },
  {
    name: 'Ethereal Collection',
    description: 'Elegant watches with enchanted precision',
    image: 'https://cdn.pixabay.com/photo/2018/01/09/23/51/wrist-watch-3072760_640.jpg'
  }
];

export default function Collections() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-purple-400 animate-rotate" />
            <span className="text-purple-400 font-medium">Our Collections</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
            Choose Your Path
          </h2>
          <p className="mt-4 text-lg leading-8 text-purple-200">
            Explore our enchanted collections designed for every magical moment.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {collections.map((collection, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl group anime-card">
              <img
                src={collection.image}
                alt={collection.name}
                className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent">
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-2xl font-bold text-white">{collection.name}</h3>
                  <p className="mt-2 text-purple-200">{collection.description}</p>
                  <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300 anime-glow">
                    Begin Quest
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
