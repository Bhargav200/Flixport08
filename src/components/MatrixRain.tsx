import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (expanded character set for more variety)
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0);
    
    // Speed variation for each column
    const speeds: number[] = new Array(columns).fill(0).map(() => Math.random() * 0.5 + 0.5);
    
    // Color variation
    const getColor = () => {
      // Occasionally use different colors for variety
      if (Math.random() < 0.05) {
        return `rgb(${Math.random() * 50}, ${Math.random() * 255}, ${Math.random() * 50})`;
      }
      
      // Default green with brightness variation
      const brightness = Math.random() * 50 + 50;
      return `rgb(0, ${brightness + 150}, 0)`;
    };

    // Animation
    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Set color
        ctx.fillStyle = getColor();
        
        // Add glow effect to some characters
        if (Math.random() < 0.1) {
          ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
          ctx.shadowBlur = 10;
        } else {
          ctx.shadowBlur = 0;
        }
        
        // Draw the character
        ctx.fillText(char, x, y);

        // Reset drop when it reaches bottom or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          // Move drop down at variable speed
          drops[i] += speeds[i];
        }
        
        // Occasionally change speed
        if (Math.random() < 0.002) {
          speeds[i] = Math.random() * 0.5 + 0.5;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none"
    />
  );
};

export default MatrixRain;