import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlitchText from '../components/ui/GlitchText';
import { ArrowRight } from 'lucide-react';

const creators = [
  { id: 1, name: 'ALEX RIVERA', handle: '@riveraflow', role: 'Dancer & Choreographer', img: 'https://picsum.photos/800/800?random=20' },
  { id: 2, name: 'SARAH TECH', handle: '@sarahtech', role: 'Tech Reviewer', img: 'https://picsum.photos/800/800?random=21' },
  { id: 3, name: 'JONNY COMEDY', handle: '@jonnylaughs', role: 'Comedy Skits', img: 'https://picsum.photos/800/800?random=22' },
  { id: 4, name: 'MIA COOKS', handle: '@miakitchen', role: 'Food Artist', img: 'https://picsum.photos/800/800?random=23' },
  { id: 5, name: 'URBAN VIBES', handle: '@urbanvibes', role: 'Street Photography', img: 'https://picsum.photos/800/800?random=24' },
];

const Creators: React.FC = () => {
  const [activeCreator, setActiveCreator] = useState(creators[0]);

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Image Reveal */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCreator.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeCreator.img})` }}
          />
          <div className="absolute inset-0 bg-black opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row h-full">
        <div className="md:w-1/2 flex flex-col justify-center">
             <motion.div 
               initial={{ x: -50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               className="mb-12"
             >
                <h1 className="text-6xl md:text-8xl font-black leading-none mb-4">
                  TOP <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-tiktok-red to-tiktok-blue">CREATORS</span>
                </h1>
                <p className="text-xl text-gray-400">The minds shaping the culture.</p>
             </motion.div>

             <div className="space-y-2">
                {creators.map((creator, index) => (
                    <motion.div
                      key={creator.id}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onMouseEnter={() => setActiveCreator(creator)}
                      className="group cursor-pointer"
                    >
                        <div className={`flex items-center justify-between p-4 border-b border-white/10 transition-all duration-300 ${activeCreator.id === creator.id ? 'pl-8 bg-white/5 border-tiktok-red' : 'hover:pl-4 hover:bg-white/5'}`}>
                             <div>
                                <h3 className={`text-2xl md:text-4xl font-black uppercase transition-colors ${activeCreator.id === creator.id ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                                    {creator.name}
                                </h3>
                                <p className="text-sm text-tiktok-blue font-mono">{creator.handle}</p>
                             </div>
                             <ArrowRight className={`transition-opacity ${activeCreator.id === creator.id ? 'opacity-100 text-tiktok-red' : 'opacity-0'}`} />
                        </div>
                    </motion.div>
                ))}
             </div>
        </div>

        {/* Creator Details (Floating) */}
        <div className="md:w-1/2 hidden md:flex items-center justify-center relative">
             <div className="relative w-80 h-[500px]">
                 <motion.div
                    key={activeCreator.id}
                    initial={{ opacity: 0, y: 20, rotate: 5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 relative shadow-2xl"
                 >
                     <img src={activeCreator.img} alt={activeCreator.name} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                     <div className="absolute bottom-8 left-8">
                         <h2 className="text-3xl font-bold mb-1">{activeCreator.name}</h2>
                         <p className="text-lg text-gray-300">{activeCreator.role}</p>
                         <div className="mt-4 flex gap-4">
                            <div className="text-center">
                                <span className="block font-bold text-xl">2.4M</span>
                                <span className="text-xs text-gray-400 uppercase">Followers</span>
                            </div>
                            <div className="text-center">
                                <span className="block font-bold text-xl">85M</span>
                                <span className="text-xs text-gray-400 uppercase">Likes</span>
                            </div>
                         </div>
                     </div>
                 </motion.div>

                 {/* Decorative Elements */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-tiktok-blue rounded-full blur-[80px] opacity-50 pointer-events-none" />
                 <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-tiktok-red rounded-full blur-[80px] opacity-50 pointer-events-none" />
             </div>
        </div>
      </div>
    </div>
  );
};

export default Creators;