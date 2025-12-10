import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TrendFeed: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const phoneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Phone sway animation
            gsap.to(phoneRef.current, {
                y: -20,
                rotation: 5,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // "Feed" scroll animation inside the phone
            gsap.to(".feed-content", {
                yPercent: -50,
                duration: 10,
                ease: "linear",
                repeat: -1
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen py-20 flex items-center justify-center overflow-hidden bg-black">
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-tiktok-dark to-black opacity-80"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-20">
                <div className="text-right md:w-1/2">
                    <h2 className="text-6xl md:text-8xl font-black leading-none mb-6">
                        <span className="block text-white">THE</span>
                        <span className="block text-tiktok-blue">ALGORYTHM</span>
                        <span className="block text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>NEVER</span>
                        <span className="block text-tiktok-red">STOPS</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-mono max-w-md ml-auto">
                        Experience a feed that learns what you love. Endless entertainment tailored just for you.
                    </p>
                </div>

                {/* Simulated Phone UI */}
                <div ref={phoneRef} className="relative w-[350px] h-[700px] border-[12px] border-[#222] rounded-[3rem] bg-black overflow-hidden shadow-2xl shadow-tiktok-red/20 transform rotate-[-5deg]">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-[#222] rounded-b-xl z-30"></div>

                    {/* Feed Content */}
                    <div className="feed-content w-full absolute top-0 left-0 bg-gray-900">
                        {/* Repeating Mock Posts */}
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className={`w-full h-[700px] border-b border-white/10 relative flex items-center justify-center ${i % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}`}>
                                <span className="text-4xl font-black opacity-20">VIDEO {i + 1}</span>

                                {/* UI Elements Mockup */}
                                <div className="absolute right-4 bottom-20 flex flex-col gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                                </div>
                                <div className="absolute left-4 bottom-10">
                                    <div className="w-40 h-4 bg-gray-600 rounded mb-2"></div>
                                    <div className="w-24 h-4 bg-gray-600 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Nav Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-md flex justify-around items-center z-30 border-t border-white/10">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-6 h-6 rounded ${i === 2 ? 'w-10 bg-white' : 'bg-gray-500'}`}></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ambient Background Particles */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-tiktok-red blur-[120px] opacity-10 rounded-full pointer-events-none"></div>
        </section>
    );
};

export default TrendFeed;
