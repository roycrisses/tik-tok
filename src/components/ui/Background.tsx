import React from 'react';

const Background: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-tiktok-black overflow-hidden">
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-tiktok-dark via-black to-tiktok-dark opacity-90"></div>

            {/* Floating Orbs (CSS Animation) */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tiktok-red blur-[150px] opacity-20 animate-pulse-fast rounded-full transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tiktok-blue blur-[150px] opacity-20 animate-pulse-fast delay-75 rounded-full transform translate-x-1/2 translate-y-1/2 mix-blend-screen"></div>

            {/* Scrolling Text Background */}
            <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 -rotate-12 opacity-5 pointer-events-none select-none">
                <div className="whitespace-nowrap animate-marquee text-[20vh] font-bold font-mono text-transparent stroke-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                    TIKTOK PULSE  TIKTOK PULSE  TIKTOK PULSE  TIKTOK PULSE
                </div>
                <div className="whitespace-nowrap animate-marquee text-[20vh] font-bold font-mono text-transparent stroke-white left-1/2 relative" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)', animationDirection: 'reverse' }}>
                    HYPER KINETIC  HYPER KINETIC  HYPER KINETIC  HYPER KINETIC
                </div>
            </div>

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
    );
};

export default Background;
