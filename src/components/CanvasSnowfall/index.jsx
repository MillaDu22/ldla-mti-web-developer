import React, { useRef, useEffect } from 'react';
import './canvasSnowfall.css';

const Snowfall = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId;

        canvas.width = width;
        canvas.height = height;

        window.addEventListener('resize', resizeCanvas, false);

        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initializeParticles();
        }

        const particles = [];

        function Particle() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.velocityY = Math.random() * 2 + 0.5;
            this.radius = Math.random() * 3 + 1;
            this.color = getRandomColor();
        }

        Particle.prototype.update = function () {
            this.y += this.velocityY;
            if (this.y > height) {
                this.y = 0;
                this.x = Math.random() * width;
            }
        };

        Particle.prototype.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        };

        function getRandomColor() {
            const hue = Math.floor(Math.random() * 360);
            return `hsla(${hue}, 100%, 50%, 0.8)`;
        }

        function initializeParticles() {
            particles.length = 0; // Clear existing particles
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        }

        initializeParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas, false);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="canvas" />;
};

export default Snowfall;

