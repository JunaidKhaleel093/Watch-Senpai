import React from 'react';
import { Watch, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <div className="text-purple-300">
            <div className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
              <Mail className="h-5 w-5" />
              <span>junaidkhaleel@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 mt-2 hover:text-purple-400 transition-colors">
              <Phone className="h-5 w-5" />
              <span>+91 8217009727</span>
            </div>
            <div className="flex items-center space-x-2 mt-2 hover:text-purple-400 transition-colors">
              <MapPin className="h-5 w-5" />
              <span>Jujutsu-High</span>
            </div>
          </div>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center">
            <Watch className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-xl brand-text bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Watch-Senpai</span>
          </div>
          <p className="mt-2 text-center text-xs leading-5 text-purple-300">
            &copy; 2025 Watch-Senpai, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
