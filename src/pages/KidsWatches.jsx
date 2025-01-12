import React from 'react';
import { Sparkles } from 'lucide-react';

const kidsWatches = [
  {
    id: 1,
    name: 'Adventure Time',
    price: '$499',
    image: 'https://cdn.pixabay.com/photo/2016/10/09/13/07/clock-1731408_640.jpg',
  },
  {
    id: 2,
    name: 'Galaxy Glow',
    price: '$599',
    image: 'https://cdn.pixabay.com/photo/2014/12/19/15/18/wrist-watch-571801_640.jpg',
  },
  {
    id: 3,
    name: 'Superhero Squad',
    price: '$399',
    image: 'https://cdn.pixabay.com/photo/2014/12/19/15/18/wrist-watch-571802_640.jpg',
  },
];

export default function KidsWatches() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-teal-400 animate-rotate" />
            <span className="text-teal-400 font-medium">Kids' Collection</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
            Fun & Vibrant
          </h2>
          <p className="mt-4 text-lg leading-8 text-teal-200">
            Brighten up your child's day with our playful collection of watches.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {kidsWatches.map((watch) => (
            <article key={watch.id} className="flex flex-col items-start group anime-card rounded-xl p-4">
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="h-96 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
              </div>
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <span className="text-teal-400">Best Choice</span>
              </div>
              <div className="relative mt-2">
                <h3 className="text-lg font-semibold leading-6 text-teal-100 group-hover:text-teal-400 transition-colors">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {watch.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-teal-300">{watch.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
