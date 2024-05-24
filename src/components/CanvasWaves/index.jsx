import React, { useEffect, useRef } from 'react';
import './canvasWaves.css';

const CanvasWaves = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const waves = [];
        const waveCount = 25;

        for (let i = 0; i < waveCount; i++) {
            waves.push({
                y: (height / 2) - 100 + Math.random() * 200,
                length: 0.01 + Math.random() * 0.001,
                amplitude: 50 + Math.random() * 100,
                frequency: 0.01 + Math.random() * 0.03,
                phase: Math.random() * Math.PI * 2
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
            ctx.fillRect(0, 0, width, height);

            waves.forEach((wave, index) => {
                ctx.beginPath();
                ctx.moveTo(0, wave.y);
                for (let i = 0; i < width; i++) {
                    const yOffset = Math.sin(i * wave.length + wave.phase) * wave.amplitude * Math.sin(wave.phase);
                    ctx.lineTo(i, wave.y + yOffset);
                }
                ctx.strokeStyle = `hsl(${index / 2 + 170}, 100%, 50%)`;
                ctx.stroke();
                wave.phase += wave.frequency;
            });

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            waves.forEach((wave) => {
                wave.y = (height / 2) - 100 + Math.random() * 200;
            });
        };

        window.addEventListener('resize', handleResize);

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="container-canvas-waves">
            <canvas ref={canvasRef} id="waterCanvas"></canvas>
            <h4 className="text-canvas-waves">JavaScript background animation</h4>
        </div>
    );
};

export default CanvasWaves;
