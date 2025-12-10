import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Intro: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Logo Parallax & Scale
        gsap.fromTo(logoRef.current,
            { scale: 0.8, y: 100, opacity: 0 },
            {
                scale: 1.2,
                y: -50,
                opacity: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            }
        );

        // Text Stagger Reveal
        const words = textRef.current?.querySelectorAll('.word');
        if (words) {
            gsap.fromTo(words,
                { y: 50, opacity: 0, rotateX: 45 },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "top 20%",
                        scrub: 0.5,
                    }
                }
            );
        }
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-[80vh] flex items-center justify-center p-10 overflow-hidden bg-tiktok-black">

            {/* Giant Background Logo Outline */}
            <div ref={logoRef} className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <svg viewBox="0 0 100 100" className="w-[120vw] h-[120vw] opacity-10 stroke-tiktok-blue fill-none stroke-[0.5px]">
                    {/* Simple Music Note Path Approximation */}
                    <path d="M30 60 Q 30 80 50 80 Q 70 80 70 60 L 70 20 L 90 20" />
                </svg>
            </div>

            <div className="relative z-10 max-w-4xl text-center">
                <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8">
                    <span className="block text-tiktok-red text-glow">The Global Platform</span>
                    <span className="block text-white">For Short-Form</span>
                    <span className="block text-tiktok-blue text-glow">Mobile Video</span>
                </h2>

                <div ref={textRef} className="text-xl md:text-2xl text-gray-300 font-light font-mono leading-relaxed perspective-1000">
                    {/* Manual word splitting for animation */}
                    {"TikTok is the leading destination for short-form mobile video. Our mission is to inspire creativity and bring joy.".split(" ").map((word, i) => (
                        <span key={i} className="word inline-block mr-2 origin-bottom">{word}</span>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Intro;
