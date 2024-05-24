import React, { useEffect, useRef } from 'react';
import './canvasPaint.css';

const CanvasPaint = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const c = canvasRef.current;
        const ctx = c.getContext('2d');
        let w = (c.width = window.innerWidth);
        let h = (c.height = window.innerHeight);

        let cosang, sinang, c2, c2Ctx, scd, scr, cx, maxsc, scy = 0;

        const delay = 1;
        let cnt = delay - 1;
        const num = 5;
        const pov = 300;
        let midX = w / 2;
        let midY = h / 2;
        const parr = {};
        const darr = {};
        const rndSp = 0.13;
        const rad = 8;
        const dia = 2 * rad;
        const sz = 140;
        scy = 0.95;
        const maxZ = Math.sqrt(2) * sz;
        maxsc = 0.5 * Math.ceil((2 * rad * pov) / (pov - maxZ));
        const sp = (2 * Math.PI) / 1200;
        let ang = 0;
        let st = Math.random() * (Math.PI * 2);
        const inct = (2 * Math.PI) / 4500;
        const p1 = Math.random() * (Math.PI * 2);
        const p2 = Math.random() * (Math.PI * 2);

        const draw = () => {
            const mind = 8;
            const maxd = 2 * maxsc;
            let _x = 0;
            let diam, _midX, _midY, rad, g;

            c2 = document.createElement('canvas');
            c2.width = (maxd * (maxd + 1)) / 2;
            c2.height = maxd;
            c2Ctx = c2.getContext('2d');

            for (diam = mind; diam <= maxd; diam++) {
                rad = diam / 2;
                const g1 = `hsla(${diam * maxd},85%, 60%,0)`;
                const g2 = `hsla(${diam * maxd},95%, 60%,.2)`;

                _midX = _x + rad;
                _midY = rad;
                g = c2Ctx.createRadialGradient(_midX, _midY, 0, _midX, _midY, rad);
                g.addColorStop(0, g1);
                g.addColorStop(0.5, g1);
                g.addColorStop(1, g2);
                c2Ctx.fillStyle = g;
                c2Ctx.beginPath();
                c2Ctx.arc(_midX, _midY, rad, 0, 2 * Math.PI, false);
                c2Ctx.closePath();
                c2Ctx.fill();

                _x += diam;
            }
        };

        const run = () => {
            window.requestAnimationFrame(run);
            go();
        };

        const go = () => {
            cnt++;
            if (cnt >= delay) {
                cnt = 0;
                for (let i = 0; i < num; i++) {
                    st = (st + inct) % (Math.PI * 2);
                    const _x = sz * Math.sin(8 * st + p1);
                    const _y = scy * sz * Math.cos(5 * st + p2);
                    const _z = sz * Math.cos(7 * st + 0.8 * Math.cos(3 * st));
                    const p = addParticle(_x, _y, _z, 0, 0, 0);
                    p.solid = 340;
                    p.fade = 401;
                }
            }
            ang = (ang + sp) % (Math.PI * 2);
            sinang = Math.sin(ang);
            cosang = Math.cos(ang);
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'hsla(0,0%,0%,1)';
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = 'lighter';
            let p = parr.first;
            while (p != null) {
                const nxt = p.next;
                p.age++;

                if (p.age > p.solid) {
                    p.velX += rndSp * (Math.random() * 2 - 1);
                    p.velY += rndSp * (Math.random() * 2 - 1);
                    p.velZ += rndSp * (Math.random() * 2 - 1);

                    p.x += p.velX;
                    p.y += p.velY;
                    p.z += p.velZ;
                    ctx.globalAlpha = 0.8 - (p.age - p.solid) / (p.fade - p.solid);
                }
                const rotX = cosang * p.x + sinang * p.z;
                const rotZ = -sinang * p.x + cosang * p.z;
                const m = pov / (pov - rotZ);
                p.px = rotX * m + midX;
                p.py = p.y * m + midY;
                if (p.age >= p.fade) {
                    p.dead = true;
                }
                const inV = rotZ > maxZ;
                if (p.dead) {
                    clearParticle(p);
                } else if (!inV) {
                    scd = Math.round(m * dia);
                    scr = 0.5 * scd;
                    cx = 0.5 * (scd - 1) * scd;
                    if (scr <= maxsc) {
                        ctx.drawImage(c2, cx, 0, scd, scd, p.px - scr, p.py - scr, scd, scd);
                    }
                }
                p = nxt;
            }
        };

        const addParticle = (_x, _y, _z, _vx, _vy, _vz) => {
            let newp;
            if (darr.first != null) {
                newp = darr.first;
                if (newp.next != null) {
                    darr.first = newp.next;
                    newp.next.prev = null;
                } else {
                    darr.first = null;
                }
            } else {
                newp = {};
            }
            if (parr.first == null) {
                parr.first = newp;
                newp.prev = null;
                newp.next = null;
            } else {
                newp.next = parr.first;
                parr.first.prev = newp;
                parr.first = newp;
                newp.prev = null;
            }
            newp.x = _x;
            newp.y = _y;
            newp.z = _z;
            newp.velX = _vx;
            newp.velY = _vy;
            newp.velZ = _vz;
            newp.age = 0;
            newp.dead = false;
            return newp;
        };

        const clearParticle = (p) => {
            if (parr.first === p) {
                if (p.next != null) {
                    p.next.prev = null;
                    parr.first = p.next;
                } else {
                    parr.first = null;
                }
            } else {
                if (p.next == null) {
                    p.prev.next = null;
                } else {
                    p.prev.next = p.next;
                    p.next.prev = p.prev;
                }
            }
            if (darr.first == null) {
                darr.first = p;
                p.prev = null;
                p.next = null;
            } else {
                p.next = darr.first;
                darr.first.prev = p;
                darr.first = p;
                p.prev = null;
            }
        };

        const handleResize = debounce(() => {
            w = c.width = window.innerWidth;
            h = c.height = window.innerHeight;
            midX = w / 2;
            midY = h / 2;
        }, 100);

        window.addEventListener('resize', handleResize);
        draw();
        run();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    return (
        <div className="container-canvas-paint">
            <canvas ref={canvasRef} id="canv"></canvas>
            <h4 className="text-canvas-paint">JavaScript background animation</h4>
        </div>
    );
};

export default CanvasPaint;
