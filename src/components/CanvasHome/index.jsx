import React, { useEffect } from 'react';
import './canvasHome.css';

const CanvasHome = () => {
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouseX = e.pageX - canvas.offsetLeft;
            mouseY = e.pageY - canvas.offsetTop;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        document.addEventListener('mousemove', handleMouseMove);

        // set constants
        const width = canvas.width,
            height = canvas.height,
            MAX_PARTICLES = 100000,
            NFIELDS = 5, // x, y, vx, vy, age
            PARTICLES_LENGTH = MAX_PARTICLES * NFIELDS,
            PI = Math.PI,
            random = Math.random,
            cos = Math.cos,
            sin = Math.sin;

        let particles_i = 0,
            particles = new Float32Array(PARTICLES_LENGTH),
            t0 = new Date() * 1,
            mouseX = null,
            mouseY = null;

        const fuzzy = (range, base) => (base || 0) + (random() - 0.5) * range * 2;

        const checkBounds = (x, y) => x < 0 || x >= width || y < 0 || y >= height;

        const emit = (x, y) => {
            for (let i = 0; i < 250; i++) {
                particles_i = (particles_i + NFIELDS) % PARTICLES_LENGTH;
                particles[particles_i] = x;
                particles[particles_i + 1] = y;
                const alpha = fuzzy(PI),
                    radius = random() * 100,
                    vx = cos(alpha) * radius,
                    vy = sin(alpha) * radius,
                    age = random();
                particles[particles_i + 2] = vx;
                particles[particles_i + 3] = vy;
                particles[particles_i + 4] = age;
            }
        };

        const draw = () => {
            let t1 = new Date() * 1,
                td = (t1 - t0) / 1000,
                MAX_AGE = 5,
                gravity = 50,
                drag = 0.999,
                r = 120,
                g = 55,
                b = 10;

            t0 = t1;
            emit(mouseX, mouseY);

            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height),
                data = imgdata.data;

            for (let i = 0; i < PARTICLES_LENGTH; i += NFIELDS) {
                if ((particles[i + 4] += td) > MAX_AGE) continue;

                let x = ~~(particles[i] = (particles[i] + (particles[i + 2] *= drag) * td)),
                    y = ~~(particles[i + 1] = (particles[i + 1] + (particles[i + 3] = (particles[i + 3] + gravity * td) * drag) * td));

                if (checkBounds(x, y)) continue;

                const offset = (x + y * canvas.width) * 4;
                data[offset] += r;
                data[offset + 1] += g;
                data[offset + 2] += b;
            }

            ctx.putImageData(imgdata, 0, 0);
            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas id="canvas" className="canvas-background"></canvas>;
};

export default CanvasHome;
