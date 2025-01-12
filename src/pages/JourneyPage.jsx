import React from 'react';

export default function JourneyPage() {
  return (
    <div className="bg-gradient-to-r from-[#120a30] via-[#0d0822] to-[#0b061c] mb-11">
      {/* Journey Section */}
      <div id="journeySection" className="py-16 bg-gradient-to-r from-[#120a30] via-[#0d0822] to-[#0b061c] text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Your Journey Begins Here</h2>

        {/* Cards Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="p-8 bg-purple-700 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold mb-4">Find Your Perfect Watch</h3>
            <p className="mb-4">Take our quiz to find a watch that matches your style and preferences!</p>
            <a
              href="#quiz"
              className="inline-block bg-pink-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-pink-600 transition-colors"
            >
              Start Quiz
            </a>
          </div>

          <div className="p-8 bg-purple-700 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold mb-4">Personalized Recommendations</h3>
            <p className="mb-4">Based on your preferences, we’ll recommend the best watches for you.</p>
            <a
              href="#recommendations"
              className="inline-block bg-pink-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-pink-600 transition-colors"
            >
              Get Recommendations
            </a>
          </div>
        </div>

        {/* Another Cards Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="p-8 bg-purple-700 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold mb-4">Our Collections</h3>
            <p className="mb-4">Explore our curated collections of watches for every occasion.</p>
            <a
              href="#collections"
              className="inline-block bg-pink-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-pink-600 transition-colors"
            >
              Explore Collections
            </a>
          </div>

          <div className="p-8 bg-purple-700 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold mb-4">Watch Care Guide</h3>
            <p className="mb-4">Learn how to properly care for your watch to ensure it lasts for years.</p>
            <a
              href="#care-guide"
              className="inline-block bg-pink-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-pink-600 transition-colors"
            >
              View Guide
            </a>
          </div>

          <div className="p-8 bg-purple-700 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold mb-4">Customer Reviews</h3>
            <p className="mb-4">See what our customers are saying about their experience with us!</p>
            <a
              href="#testimonials"
              className="inline-block bg-pink-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-pink-600 transition-colors"
            >
              Read Testimonials
            </a>
          </div>
        </div>

        {/* Sign-up Section */}
        <div className="text-center mb-12">
          <a
            href="#sign-up"
            className="inline-block bg-pink-500 px-8 py-4 text-lg rounded-full text-white font-semibold hover:bg-pink-600 transition-colors"
          >
            Sign Up for Exclusive Offers
          </a>
        </div>

        {/* Guided Tour Section */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-4">Guided Tour of the Website</h3>
          <p className="mb-4">Get a personal guided tour of the features and collections on our website.</p>
          <a
            href="#tour"
            className="inline-block bg-pink-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-pink-600 transition-colors"
          >
            Take the Tour
          </a>
        </div>
      </div>
    </div>
  );
}
