import React, { useState } from 'react';
import { Watch, ShoppingCart, Heart, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent backdrop-blur-md border-b border-purple-500/20 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Watch className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-xl brand-text bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Watch-Senpai</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-purple-100 hover:text-purple-400 transition-colors">Collections</Link>
            <Link to="/men" className="text-purple-100 hover:text-purple-400 transition-colors">Men</Link>
            <Link to="/women" className="text-purple-100 hover:text-purple-400 transition-colors">Women</Link>
            <Link to="/kids" className="text-purple-100 hover:text-purple-400 transition-colors">Kids</Link>
            <Link to="/about" className="text-purple-100 hover:text-purple-400 transition-colors">About</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-purple-800/50 rounded-full transition-colors">
              <Search className="h-5 w-5 text-purple-200" />
            </button>
            <button className="p-2 hover:bg-purple-800/50 rounded-full transition-colors">
              <Heart className="h-5 w-5 text-purple-200" />
            </button>
            <button className="p-2 hover:bg-purple-800/50 rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5 text-purple-200" />
            </button>

            <button
              className="md:hidden p-2 hover:bg-purple-800/50 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 text-purple-200" /> : <Menu className="h-5 w-5 text-purple-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-900/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-purple-100 hover:bg-purple-800/50 rounded-md">Collections</Link>
            <Link to="/men" className="block px-3 py-2 text-purple-100 hover:bg-purple-800/50 rounded-md">Men</Link>
            <Link to="/women" className="block px-3 py-2 text-purple-100 hover:bg-purple-800/50 rounded-md">Women</Link>
            <Link to="/kids" className="block px-3 py-2 text-purple-100 hover:bg-purple-800/50 rounded-md">Kids</Link>
            <Link to="/about" className="block px-3 py-2 text-purple-100 hover:bg-purple-800/50 rounded-md">About</Link>

            <div className="flex space-x-4 mt-4">
              <Link
                to="/login"
                className="block px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 anime-glow"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-lime-500 text-white font-semibold hover:from-green-600 hover:to-lime-600 transition-all duration-300 anime-glow"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
