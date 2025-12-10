import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
    { year: '2016', title: 'The Beginning', desc: 'Douyin launches in China.', color: 'text-tiktok-blue' },
    { year: '2017', title: 'Global Launch', desc: 'TikTok hits international markets.', color: 'text-white' },
    { year: '2018', title: 'Musical.ly Merge', desc: 'Creating a global powerhouse.', color: 'text-tiktok-red' },
    { year: '2020', title: 'Cultural Phenomenon', desc: 'The most downloaded app.', color: 'text-tiktok-blue' },
    { year: '2022', title: 'TikTok Pulse', desc: 'Connecting brands with culture.', color: 'text-white' },
];

const Timeline: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !trackRef.current) return;

        const track = trackRef.current;

        // Horizontal Scroll Animation
        const scrollTween = gsap.to(track, {
            xPercent: -100 * (milestones.length - 1) / milestones.length,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                // The duration of the scroll relative to viewport height
                end: "+=3000",
            }
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-tiktok-dark flex flex-col justify-center">
            <div className="absolute top-10 left-10 z-10">
                <h2 className="text-4xl font-black uppercase text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>Evolution</h2>
            </div>

            {/* The Moving Track */}
            <div ref={trackRef} className="flex h-[60vh] items-center gap-[20vw] px-[10vw] w-fit">
                {milestones.map((item, index) => (
                    <div key={index} className="w-[60vw] md:w-[40vw] flex-shrink-0 group perspective-1000">
                        <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 p-10 rounded-3xl transform transition-transform duration-500 group-hover:rotate-y-6 hover:shadow-[0_0_30px_rgba(254,44,85,0.3)] relative overflow-hidden">
                            {/* Neon Glow Line */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${item.color.replace('text-', '')} to-transparent opacity-50`}></div>

                            <span className={`text-8xl font-black opacity-10 absolute top-2 right-4 ${item.color}`}>{item.year}</span>

                            <div className="relative z-10">
                                <h3 className={`text-6xl font-black mb-4 ${item.color}`}>{item.year}</h3>
                                <h4 className="text-3xl font-bold mb-2 text-white">{item.title}</h4>
                                <p className="text-gray-400 font-mono text-lg">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-tiktok-red animate-pulse-fast origin-left transform scale-x-0 timeline-progress"></div>
            </div>
        </section>
    );
};

export default Timeline;
