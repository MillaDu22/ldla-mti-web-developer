import React, { useEffect, useRef, useMemo } from 'react';
import "./canvasPolygon.css";

const CanvasPolygon = () => {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const tickRef = useRef(0);
    const linesRef = useRef([]);
    const dieXRef = useRef(0);
    const dieYRef = useRef(0);
    const baseRadRef = useRef(Math.PI * 2 / 6);

    const opts = useMemo(() => ({
        len: 20,
        count: 50,
        baseTime: 10,
        addedTime: 10,
        dieChance: 0.05,
        spawnChance: 1,
        sparkChance: 0.1,
        sparkDist: 10,
        sparkSize: 2,
        color: 'hsl(hue,100%,light%)',
        baseLight: 50,
        addedLight: 10,
        shadowToTimePropMult: 6,
        baseLightInputMultiplier: 0.01,
        addedLightInputMultiplier: 0.02,
        cx: window.innerWidth / 2,
        cy: window.innerHeight / 2,
        repaintAlpha: 0.04,
        hueChange: 0.1
    }), []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;
        tickRef.current = 0;
        linesRef.current = [];
        dieXRef.current = w / 2 / opts.len;
        dieYRef.current = h / 2 / opts.len;
        baseRadRef.current = Math.PI * 2 / 6;

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, w, h);

        const loop = () => {
            tickRef.current++;
            ctx.globalCompositeOperation = 'source-over';
            ctx.shadowBlur = 0;
            ctx.fillStyle = `rgba(0,0,0,${opts.repaintAlpha})`;
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = 'lighter';

            if (linesRef.current.length < opts.count && Math.random() < opts.spawnChance) {
                linesRef.current.push(new Line());
            }

            linesRef.current.forEach(line => line.step());

            window.requestAnimationFrame(loop);
        };

        window.requestAnimationFrame(loop);

        const handleResize = debounce(() => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, w, h);
            opts.cx = w / 2;
            opts.cy = h / 2;
            dieXRef.current = w / 2 / opts.len;
            dieYRef.current = h / 2 / opts.len;
        }, 100);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [opts]);

    function Line() {
        this.reset();
    }

    Line.prototype.reset = function () {
        this.x = 0;
        this.y = 0;
        this.addedX = 0;
        this.addedY = 0;
        this.rad = 0;
        this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
        this.color = opts.color.replace('hue', tickRef.current * opts.hueChange);
        this.cumulativeTime = 0;
        this.beginPhase();
    };

    Line.prototype.beginPhase = function () {
        this.x += this.addedX;
        this.y += this.addedY;
        this.time = 0;
        this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;
        this.rad += baseRadRef.current * (Math.random() < 0.5 ? 1 : -1);
        this.addedX = Math.cos(this.rad);
        this.addedY = Math.sin(this.rad);
        if (Math.random() < opts.dieChance || this.x > dieXRef.current || this.x < -dieXRef.current || this.y > dieYRef.current || this.y < -dieYRef.current)
            this.reset();
    };

    Line.prototype.step = function () {
        this.time++;
        this.cumulativeTime++;

        if (this.time >= this.targetTime) {
            this.beginPhase();
        }

        const prop = this.time / this.targetTime;
        const wave = Math.sin(prop * Math.PI / 2);
        const x = this.addedX * wave;
        const y = this.addedY * wave;
        const ctx = ctxRef.current;

        ctx.shadowBlur = prop * opts.shadowToTimePropMult;
        ctx.fillStyle = ctx.shadowColor = this.color.replace('light', opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier));
        ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);

        if (Math.random() < opts.sparkChance) {
            ctx.fillRect(
                opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - opts.sparkSize / 2,
                opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - opts.sparkSize / 2,
                opts.sparkSize,
                opts.sparkSize
            );
        }
    };

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    return (
        <div className="container-canvas-polygon">
            <canvas ref={canvasRef} id="c"></canvas>
        </div>
    );
};

export default CanvasPolygon;
