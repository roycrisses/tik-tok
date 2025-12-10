import React, { useEffect, useRef } from 'react';
import Scene from '../3d/Scene';
import gsap from 'gsap';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titlePart1Ref = useRef<HTMLSpanElement>(null);
    const titlePart2Ref = useRef<HTMLSpanElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Initial reveal animation
        if (titlePart1Ref.current && titlePart2Ref.current) {
            tl.fromTo([titlePart1Ref.current, titlePart2Ref.current],
                { y: 100, opacity: 0, scale: 0.8 },
                { y: 0, opacity: 1, scale: 1, duration: 1.5, stagger: 0.2 }
            )
                .fromTo(subtitleRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=1"
                );
        }
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
            {/* 3D Background Layer */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-80 mix-blend-screen">
                <Scene />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 text-center pointer-events-none">
                <h1 className="text-[12vw] sm:text-[15vw] font-black leading-none tracking-tighter flex items-center justify-center gap-4 mix-blend-exclusion">
                    <span ref={titlePart1Ref} className="text-tiktok-white drop-shadow-[0_0_10px_rgba(254,44,85,0.8)] inline-block">TIK</span>
                    <span ref={titlePart2Ref} className="text-tiktok-white drop-shadow-[0_0_10px_rgba(37,244,238,0.8)] inline-block">TOK</span>
                </h1>

                <p ref={subtitleRef} className="mt-8 text-xl sm:text-2xl font-mono uppercase tracking-[0.5em] text-tiktok-blue opacity-0">
                    Hyper Kinetic Experience
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-20">
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-tiktok-red to-transparent mx-auto overflow-hidden">
                    <div className="w-full h-1/2 bg-white animate-pulse-fast"></div>
                </div>
                <span className="text-[10px] font-mono tracking-widest mt-2 block text-gray-500">SCROLL TO EXPLORE</span>
            </div>
        </section>
    );
};

export default Hero;
