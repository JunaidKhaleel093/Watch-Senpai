import React, { useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0b29] via-[#150d35] to-[#1a0f40] flex items-center justify-center relative pt-16 pb-24">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-2 mb-6">
              <Lock className="h-5 w-5 text-purple-400 animate-rotate" />
              <span className="text-purple-400 font-medium">Secure Login</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              Access Your Account
            </h1>
            <p className="mt-6 text-lg leading-8 text-purple-200">
              Sign in to explore our legendary timepieces and manage your orders.
            </p>
            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
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
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-6 flex justify-between items-center">
                <a href="#" className="text-sm text-purple-200 hover:text-purple-400 transition-colors">
                  Forgot Password?
                </a>
                <button
                  type="submit"
                  className="rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-8 text-center">
              <p className="text-sm text-purple-200">
                Don’t have an account?{' '}
                <a href="/signup" className="text-purple-400 hover:text-purple-500 transition-colors">
                  Sign Up
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
