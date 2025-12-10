
import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/ui/GlitchText';
import { Search, Hash, TrendingUp } from 'lucide-react';

const tags = ['#DanceChallenge', '#AIArt', '#CyberPunk', '#RetroVibes', '#Foodie', '#TravelTok', '#Gaming', '#POV'];

const items = [
  { id: 1, type: 'video', color: 'bg-purple-900', height: 'h-64' },
  { id: 2, type: 'video', color: 'bg-blue-900', height: 'h-96' },
  { id: 3, type: 'video', color: 'bg-pink-900', height: 'h-72' },
  { id: 4, type: 'video', color: 'bg-indigo-900', height: 'h-80' },
  { id: 5, type: 'video', color: 'bg-red-900', height: 'h-64' },
  { id: 6, type: 'video', color: 'bg-green-900', height: 'h-96' },
  { id: 7, type: 'video', color: 'bg-yellow-900', height: 'h-72' },
  { id: 8, type: 'video', color: 'bg-teal-900', height: 'h-80' },
];

const Discover: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-black mb-6">
          <GlitchText text="DISCOVER" /> <span className="text-tiktok-blue">PULSE</span>
        </h1>
        <div className="max-w-2xl mx-auto relative group">
          <input 
            type="text" 
            placeholder="Search for trends, sounds, creators..." 
            className="w-full bg-white/10 border border-white/20 rounded-full px-8 py-4 text-xl text-white placeholder-gray-400 focus:outline-none focus:border-tiktok-red focus:bg-white/5 transition-all"
          />
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-tiktok-red" />
          <div className="absolute -inset-1 bg-gradient-to-r from-tiktok-red to-tiktok-blue opacity-0 group-focus-within:opacity-20 blur-lg rounded-full -z-10 transition-opacity" />
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="flex flex-wrap justify-center gap-4 mb-20 perspective-1000">
        {tags.map((tag, i) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10, z: 50 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full cursor-pointer hover:border-tiktok-blue transition-colors relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-tiktok-blue/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="flex items-center gap-2 font-mono text-sm">
               <Hash size={14} className="text-tiktok-red" /> {tag.replace('#', '')}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`break-inside-avoid mb-6 rounded-2xl overflow-hidden relative group ${item.height} ${item.color}`}
          >
            <img 
              src={`https://picsum.photos/400/${item.height.replace('h-', '')}0?random=${item.id + 10}`} 
              alt="Discover Content"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gray-700" />
                <span className="text-sm font-bold">@creator_{item.id}</span>
              </div>
              <p className="text-xs text-gray-300">Viral content description goes here... #fyp</p>
            </div>

            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <TrendingUp size={16} className="text-tiktok-blue" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
