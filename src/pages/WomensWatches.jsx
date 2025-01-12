import React from 'react';
import { Sparkles } from 'lucide-react';

const womensWatches = [
  {
    id: 1,
    name: 'Rose Elegance',
    price: '₹12,199',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/05/08/wrist-watch-1869926_640.jpg',
  },
  {
    id: 2,
    name: 'Pearl Grace',
    price: '₹13,299',
    image: 'https://cdn.pixabay.com/photo/2017/03/27/15/06/clock-2171570_640.jpg',
  },
  {
    id: 3,
    name: 'Luxe Bloom',
    price: '₹11,899',
    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/39/wrist-watch-691317_640.jpg',
  },
];

export default function WomensWatches() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-pink-400 animate-rotate" />
            <span className="text-pink-400 font-medium">Women's Collection</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 text-transparent bg-clip-text">
            Timeless Beauty
          </h2>
          <p className="mt-4 text-lg leading-8 text-pink-200">
            Celebrate elegance with our exclusive collection for women.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {womensWatches.map((watch) => (
            <article key={watch.id} className="flex flex-col items-start group anime-card rounded-xl p-4">
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="h-96 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
              </div>
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <span className="text-pink-400">Top Pick</span>
              </div>
              <div className="relative mt-2">
                <h3 className="text-lg font-semibold leading-6 text-pink-100 group-hover:text-pink-400 transition-colors">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {watch.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-pink-300">{watch.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
