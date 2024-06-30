import React, { useContext, useRef, useEffect } from "react";
import { context } from "../../../context/index";
import "./html-charts.css";

type CoinType = {
  symbol: string; // Ajoutez cette ligne pour inclure le symbole du coin
  performance: {
    months: number;
    year: number;
    day: number;
    // Ajoutez d'autres clés selon vos besoins
  };
  // Autres propriétés de chaque coin
};

const sliceValues: { [key: string]: [number, number] } = {
  "100": [0, 99],
  "200": [100, 199],
  "300": [200, 299],
  "400": [300, 399],
  "500": [400, 499],
  "600": [500, 599],
  "700": [600, 699],
  "800": [700, 799],
  "900": [800, 899],
  "1000": [900, 999],
};

const HtmlCharts: React.FC = () => {
  const { coins, coinRange, timePref } = useContext(context);
  const [start, end] = sliceValues[coinRange];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<any[]>([]);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    class Bubble {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
      performance: number;
      symbol: string; // Nouvelle propriété pour stocker le symbole du coin

      constructor(x: number, y: number, radius: number, dx: number, dy: number, color: string, performance: number, symbol: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.performance = performance;
        this.symbol = symbol;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        // Dessiner le pourcentage de performance au centre de la bulle
        ctx.fillStyle = "black"; // Couleur du texte
        ctx.font = `${this.radius / 4}px Arial`; // Taille du texte proportionnelle au rayon
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${this.performance}%`, this.x, this.y);

        // Dessiner le symbole du coin en dessous du pourcentage de performance
        ctx.font = `${this.radius / 6}px Arial`; // Taille du texte légèrement plus petite
        ctx.fillText(this.symbol, this.x, this.y + this.radius / 3);
      }

      update() {
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
          this.dx = -this.dx;
        }

        if (this.y + this.dy > canvas.height - this.radius || this.y + this.dy < this.radius) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      }

      checkCollision(otherBubble: Bubble) {
        const distanceX = this.x - otherBubble.x;
        const distanceY = this.y - otherBubble.y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < this.radius + otherBubble.radius) {
          const angle = Math.atan2(distanceY, distanceX);
          const overlap = this.radius + otherBubble.radius - distance;
          const moveX = overlap * Math.cos(angle);
          const moveY = overlap * Math.sin(angle);

          this.x += moveX;
          this.y += moveY;
        }
      }
    }

    const generateBubble = (coin: CoinType): Bubble => {
      let performanceValue = coin.performance[timePref];
      const normalizedPerformance = Math.max(0, performanceValue); // Assure que la performance est positive
      const radius = Math.sqrt(normalizedPerformance) * 10 + 45; // Ajustement pour le rayon, par exemple sqrt(performance) * 10
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 1;
      const dy = (Math.random() - 0.5) * 1;
      const color = performanceValue >= 0 ? "green" : "red"; // Couleur basée sur la performance

      return new Bubble(x, y, radius, dx, dy, color, performanceValue, coin.symbol); // Passer le symbole à la bulle
    };

    const bubbles: Bubble[] = coins.slice(start, end).map((coin: CoinType) => generateBubble(coin));
    bubblesRef.current = bubbles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubblesRef.current.forEach((bubble) => {
        bubble.update();
        bubblesRef.current.forEach((otherBubble) => {
          if (bubble !== otherBubble) {
            bubble.checkCollision(otherBubble);
          }
        });
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [coins, coinRange, timePref]);

  return (
    <div className="bubble-chart">
      <canvas ref={canvasRef} ></canvas>
    </div>
  );
};

export default HtmlCharts;
