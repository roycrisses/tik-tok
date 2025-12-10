import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        const colors = ['#FE2C55', '#25F4EE', '#ffffff'];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Create particles on move
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(mouseX, mouseY, colors[Math.floor(Math.random() * colors.length)]));
            }
        };

        window.addEventListener('mousemove', onMouseMove);

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;
            life: number;

            constructor(x: number, y: number, color: string) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = color;
                this.life = 1.0;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= 0.02;
                this.size *= 0.95;
            }

            draw(context: CanvasRenderingContext2D) {
                context.fillStyle = this.color;
                context.globalAlpha = this.life;
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fill();
                context.globalAlpha = 1.0;
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) => {
                particle.update();
                particle.draw(ctx);
                if (particle.life <= 0) {
                    particles.splice(index, 1);
                }
            });

            // Add a main follower circle
            ctx.beginPath();
            ctx.arc(mouseX, mouseY, 8, 0, Math.PI * 2);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1;
            ctx.stroke();

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 mix-blend-screen"
        />
    );
};

export default CustomCursor;
