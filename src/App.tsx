import React from 'react';
import { AnimationProvider } from './context/AnimationContext';
import CustomCursor from './components/ui/CustomCursor';
import Background from './components/ui/Background';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import Timeline from './components/sections/Timeline';
import Culture from './components/sections/Culture';
import Trending from './components/sections/Trending';
import CreatorSpotlight from './components/sections/CreatorSpotlight';
import TrendFeed from './components/sections/TrendFeed';

const App: React.FC = () => {
  return (
    <AnimationProvider>
      <main className="w-full min-h-screen text-white selection:bg-tiktok-red selection:text-white overflow-x-hidden relative">
        <CustomCursor />
        <Background />

        <Hero />
        <Intro />
        <Timeline />
        <Culture />
        <Trending />
        <CreatorSpotlight />
        <TrendFeed />
        {/* Further sections will be added here */}
      </main>
    </AnimationProvider>
  );
};

export default App;
