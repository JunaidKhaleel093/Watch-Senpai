import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Sparkles, Watch, ShoppingCart, Heart, Search, Menu, CheckCircle } from 'lucide-react';
import FeaturedWatches from "./components/FeaturedWatches";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MensWatches from "./pages/MensWatches";
import WomensWatches from "./pages/WomensWatches";
import KidsWatches from "./pages/KidsWatches";
import About from "./pages/About";
import JourneyPage from "./pages/JourneyPage";

const App = () => {
  useEffect(() => {
    const createDot = () => {
      const dot = document.createElement("div");
      dot.className = "dot";
      const size = Math.random() * 4 + 2;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${Math.random() * 100}vw`;
      dot.style.animationDuration = `${Math.random() * 10 + 15}s`;

      const dotsContainer = document.querySelector(".floating-dots");
      if (dotsContainer) {
        dotsContainer.appendChild(dot);
        setTimeout(() => dot.remove(), 25000);
      }
    };

    const interval = setInterval(createDot, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#1a0f40] via-[#150d35] to-[#0f0b29]">
        <div className="floating-dots"></div>

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] opacity-5 bg-fixed"></div>

        <div className="relative">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <FeaturedWatches />
                  <Collections />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/men" element={<MensWatches />} />
            <Route path="/women" element={<WomensWatches />} />
            <Route path="/kids" element={<KidsWatches />} />
            <Route path="/about" element={<About />} />
            <Route path="/journey" element={<JourneyPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
