import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Culture: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Skew effect on scroll
            const proxy = { skew: 0 };
            const skewSetter = gsap.quickSetter(".culture-text", "skewY", "deg");
            const clamp = gsap.utils.clamp(-20, 20);

            ScrollTrigger.create({
                trigger: containerRef.current,
                onUpdate: (self) => {
                    const skew = clamp(self.getVelocity() / -300);
                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                        proxy.skew = skew;
                        gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
                    }
                }
            });

            // Opposite direction scrolling lines
            gsap.to(".row-left", {
                xPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

            gsap.to(".row-right", {
                xPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const phrases = ["VIRAL TRENDS", "SOUND ON", "DUET THIS", "POV: YOU", "FOR YOU PAGE", "TIKTOK LIVE"];

    return (
        <section ref={containerRef} className="relative w-full py-40 overflow-hidden bg-tiktok-black z-20">
            <div className="flex flex-col gap-10">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className={`flex whitespace-nowrap overflow-hidden ${i % 2 === 0 ? 'row-left -translate-x-0' : 'row-right -translate-x-full'}`}>
                        <div className="flex gap-10 animate-none culture-text items-center">
                            {[...phrases, ...phrases, ...phrases].map((text, j) => (
                                <h2 key={j} className={`text-[10vw] font-black italic uppercase leading-none tracking-tighter transition-colors duration-300 hover:text-transparent hover:stroke-white ${j % 2 === 0 ? 'text-white' : 'text-transparent stroke-white'}`} style={j % 2 !== 0 ? { WebkitTextStroke: '2px white' } : {}}>
                                    {text}
                                </h2>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Glitch Overlay */}
            <div className="absolute inset-0 pointer-events-none mix-blend-difference bg-noise opacity-10"></div>
        </section>
    );
};

export default Culture;
