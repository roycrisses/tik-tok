import React from 'react';

const creators = [
    { name: '@charlidamelio', followers: '150M', color: 'tiktok-red' },
    { name: '@khaby.lame', followers: '160M', color: 'tiktok-blue' },
    { name: '@mrbeast', followers: '90M', color: 'white' },
];

const CreatorSpotlight: React.FC = () => {
    return (
        <section className="relative w-full py-40 px-10 bg-tiktok-dark overflow-hidden flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl font-black text-center mb-20 text-white tracking-tighter">
                TOP <span className="text-transparent stroke-tiktok-red" style={{ WebkitTextStroke: '2px #FE2C55' }}>CREATORS</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl perspective-1000">
                {creators.map((creator, i) => (
                    <div key={i} className="group relative w-full aspect-[9/16] bg-gray-900 rounded-3xl border border-white/10 overflow-hidden transform transition-all duration-500 hover:rotate-y-12 hover:rotate-x-6 hover:scale-105 hover:shadow-[0_0_50px_rgba(254,44,85,0.4)]">

                        {/* Fake Video Placeholder Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        </div>

                        {/* Profile Info */}
                        <div className="absolute bottom-10 left-10 z-10 transform transition-transform duration-300 group-hover:translate-x-2">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 mb-4 border-2 border-white"></div>
                            <h3 className="text-3xl font-bold text-white mb-1">{creator.name}</h3>
                            <p className={`font-mono text-sm ${creator.color === 'white' ? 'text-gray-400' : 'text-' + creator.color}`}>{creator.followers} Followers</p>
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                            </div>
                        </div>

                        {/* Neon Border on Hover */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-tiktok-blue rounded-3xl transition-colors duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CreatorSpotlight;
