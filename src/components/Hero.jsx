import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-16">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-purple-400 animate-rotate" />
              <span className="text-purple-400 font-medium">Legendary Timepieces</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              Time Flows Like Magic
            </h1>
            <p className="mt-6 text-lg leading-8 text-purple-200">
              Discover our collection of enchanted timepieces where artistry meets precision. Each watch carries a story of mystical craftsmanship.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/journey"
                className="rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 anime-glow"
              >
                Begin Your Journey
              </a>
              <a href="/collections" className="text-sm font-semibold leading-6 text-purple-200 flex items-center hover:text-purple-400 transition-colors">
                Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <video
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full rounded-2xl shadow-2xl anime-glow"
            src="https://cdn.pixabay.com/video/2021/08/10/84574-586228759_large.mp4"
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
