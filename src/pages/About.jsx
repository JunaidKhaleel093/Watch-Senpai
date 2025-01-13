import { Sparkles, CheckCircle, Heart } from 'lucide-react';

export default function About() {
    return (
      <div className="relative pt-16 pb-24 bg-gradient-to-br from-[#1a0f40] via-[#150d35] to-[#0f0b29] text-purple-100">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 lg:gap-x-8 items-center">
            <div className="lg:col-span-7">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-purple-400 animate-rotate" />
                  <span className="text-purple-400 font-medium">About Us</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                  The Art of Timekeeping
                </h1>
                <p className="mt-6 text-lg leading-8 text-purple-200">
                  We’re passionate about crafting more than just watches. We create timeless stories and bring artistry and precision together in a symphony of beauty and functionality. Each piece is designed to celebrate the magical moments of life.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:mt-0 mt-10">
              <img
                src="https://4kwallpapers.com/images/walls/thumbs_3t/14025.png"
                alt="Timeless Craftsmanship"
                className="rounded-2xl shadow-xl lg:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
  
        <div className="mt-20 bg-gradient-to-br from-[#120a30] via-[#0d0822] to-[#0b061c] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-lg leading-8 text-purple-200">
              Our commitment to excellence ensures each timepiece is a masterpiece.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold">Precision Engineering</h3>
                <p className="mt-2 text-sm text-purple-300">
                  Unmatched accuracy and performance in every watch we create.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Heart className="h-10 w-10 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold">Handcrafted with Love</h3>
                <p className="mt-2 text-sm text-purple-300">
                  Our timepieces are crafted by skilled artisans who care about every detail.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Sparkles className="h-10 w-10 text-teal-400 mb-4" />
                <h3 className="text-lg font-semibold">Magical Design</h3>
                <p className="mt-2 text-sm text-purple-300">
                  A seamless blend of elegance, innovation, and storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-20 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
            Behind Watch-Senpai.
            </h2>
            <p className="mt-4 text-lg leading-8 text-purple-200">
            A dreamer, creator, and perfectionist who lives for innovation and beauty.
            </p>
            <div className="mt-10 flex justify-center items-center gap-8">
              <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
                <img
                  src="./images/Me.jpg"
                  alt="Team Member"
                  className="rounded-full shadow-lg w-32 h-32 border-4 border-purple-500"
                />
                <h3 className="mt-4 text-xl font-semibold text-purple-100">Mohammed Junaid Ismail</h3>
                <p className="text-sm text-purple-300">Software Developer</p>
                <div className="mt-4 flex gap-4 text-purple-300">
                  <Heart className="h-6 w-6 cursor-pointer hover:text-pink-400" />
                  <Sparkles className="h-6 w-6 cursor-pointer hover:text-teal-400" />
                  <CheckCircle className="h-6 w-6 cursor-pointer hover:text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
