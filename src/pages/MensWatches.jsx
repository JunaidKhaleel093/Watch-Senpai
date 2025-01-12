import React from 'react';
import { Sparkles } from 'lucide-react';

const mensWatches = [
  {
    id: 1,
    name: 'Bold Maverick',
    price: '$2,499',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/05/08/wrist-watch-1869928_640.jpg',
  },
  {
    id: 2,
    name: 'Titanium Voyager',
    price: '$3,999',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/05/07/wrist-watch-1869927_640.jpg',
  },
  {
    id: 3,
    name: 'Regal Commander',
    price: '$1,799',
    image: 'https://cdn.pixabay.com/photo/2014/12/19/15/18/wrist-watch-571803_640.jpg',
  },
];

export default function MensWatches() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-blue-400 animate-rotate" />
            <span className="text-blue-400 font-medium">Men's Collection</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 text-transparent bg-clip-text">
            Sophisticated Elegance
          </h2>
          <p className="mt-4 text-lg leading-8 text-blue-200">
            Explore our premium collection designed exclusively for men.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {mensWatches.map((watch) => (
            <article key={watch.id} className="flex flex-col items-start group anime-card rounded-xl p-4">
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="h-96 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
              </div>
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <span className="text-blue-400">Men's Favorite</span>
              </div>
              <div className="relative mt-2">
                <h3 className="text-lg font-semibold leading-6 text-blue-100 group-hover:text-blue-400 transition-colors">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {watch.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-blue-300">{watch.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
