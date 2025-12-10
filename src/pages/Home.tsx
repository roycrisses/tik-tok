
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Trending from '../components/Trending';
import Features from '../components/Features';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  const marqueeText = "CREATE. INSPIRE. SHARE. REPEAT. ";

  return (
    <div className="w-full relative">
      <Hero />
      <About />
      <Trending />
      
      {/* Marquee Section */}
      <div className="py-12 bg-tiktok-red overflow-hidden rotate-[-2deg] scale-110 border-y-4 border-black relative z-20">
        <div className="flex w-max animate-marquee">
            {/* First Set */}
            <div className="flex whitespace-nowrap">
                {[...Array(8)].map((_, i) => (
                    <span key={`a-${i}`} className="text-4xl md:text-6xl font-black italic mx-8 text-black">
                        {marqueeText}
                    </span>
                ))}
            </div>
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex whitespace-nowrap">
                {[...Array(8)].map((_, i) => (
                    <span key={`b-${i}`} className="text-4xl md:text-6xl font-black italic mx-8 text-black">
                        {marqueeText}
                    </span>
                ))}
            </div>
        </div>
      </div>

      <Features />
      <CTA />
    </div>
  );
};

export default Home;
