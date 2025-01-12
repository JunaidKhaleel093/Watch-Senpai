import React, { useState } from 'react';
import { ArrowRight, UserPlus } from 'lucide-react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0b29] via-[#150d35] to-[#1a0f40] flex items-center justify-center relative pt-16 pb-24">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-2 mb-6">
              <UserPlus className="h-5 w-5 text-purple-400 animate-rotate" />
              <span className="text-purple-400 font-medium">Create Your Account</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              Join Us Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-purple-200">
              Sign up and start your journey to owning legendary timepieces.
            </p>
            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-200">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 block w-full px-3 py-2 text-purple-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-200">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 block w-full px-3 py-2 text-purple-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-purple-200">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 block w-full px-3 py-2 text-purple-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Create a password"
                />
              </div>
              <div className="mt-6 flex justify-between items-center">
                <button
                  type="submit"
                  className="rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-8 text-center">
              <p className="text-sm text-purple-200">
                Already have an account?{' '}
                <a href="/login" className="text-purple-400 hover:text-purple-500 transition-colors">
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"></div>
      </div>
    </div>
  );
}
