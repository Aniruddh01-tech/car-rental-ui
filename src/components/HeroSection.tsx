/* eslint-disable @next/next/no-img-element */
'use client';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { palette } from '../styles/palette';

const HeroSection = () => (
  <section className="relative w-full">
    {/* Full-width background image with overlay */}
    <div className="absolute inset-0 w-full h-full">
      <AspectRatio.Root ratio={21/9}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2527]/80 to-[#1a2527]/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Car Fleet"
          className="object-cover w-full h-full"
          loading="eager"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
          }}
        />
      </AspectRatio.Root>
    </div>

    {/* Content overlay with improved contrast */}
    <div className="relative z-20 container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-in space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 drop-shadow-lg">
            Premium Car Rental Service
          </h1>
          <div className=" rounded-xl p-8 shadow-xl">
            <p className="text-xl md:text-2xl text-black font-light">
              Experience luxury and comfort with AB Ghule Cabs. Choose from our fleet of well-maintained vehicles for your journey across Mumbai and beyond.
            </p>
            <div className="flex flex-wrap gap-6 justify-center mt-8">
              <button 
                className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#26393b] font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Book Now
              </button>
              <button 
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-all hover:shadow-lg"
              >
                View Fleet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1.2s ease-out;
      }
    `}</style>
  </section>
);

export default HeroSection;