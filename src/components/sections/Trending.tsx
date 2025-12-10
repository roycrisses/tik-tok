import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const tags = [
    "#FYP", "#TikTokMadeMeBuyIt", "#DanceChallenge", "#FoodTok",
    "#TravelBucketList", "#GamingSetup", "#PetsofTikTok", "#OddlySatisfying",
    "#LearnOnTikTok", "#DIY", "#FashionHacks", "#Comedy"
];

const Trending: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Continuous floating animation for tags
            gsap.utils.toArray<HTMLElement>('.tag-item').forEach((tag, i) => {
                gsap.to(tag, {
                    y: "random(-20, 20)",
                    x: "random(-20, 20)",
                    rotation: "random(-10, 10)",
                    duration: "random(2, 4)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.1
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-tiktok-black to-[#111] overflow-hidden perspective-1000">
            <h2 className="text-6xl font-black mb-20 text-center relative z-10">
                <span className="text-tiktok-blue">#</span>
                <span className="text-white">TRENDING</span>
                <span className="text-tiktok-red">NOW</span>
            </h2>

            <div className="relative w-full max-w-6xl h-[600px] flex flex-wrap content-center justify-center gap-8 p-10 transform-style-3d">
                {tags.map((tag, i) => (
                    <div
                        key={i}
                        className="tag-item relative bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full cursor-pointer hover:bg-tiktok-red hover:border-tiktok-red transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(254,44,85,0.6)] group"
                    >
                        <span className="text-xl md:text-3xl font-bold text-white group-hover:text-black transition-colors">{tag}</span>
                        {/* Floating Emojis on Hover would go here */}
                    </div>
                ))}
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tiktok-blue opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default Trending;
