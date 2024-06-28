import React, { useContext, useRef, useEffect } from "react";
import { context } from "../../../context/index";
import "./html-charts.css";

// Définir le type de chaque pièce (coin)
type CoinType = {
  // Définissez ici les types pour les propriétés de chaque coin
};

// Définir les tranches (ranges) de pièces
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

const NeumorphismCharts: React.FC = () => {
  const { coins, coinRange, timePref } = useContext(context);
  const [start, end] = sliceValues[coinRange];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<any[]>([]);
  const animationIdRef = useRef<number>(); // Référence pour l'ID de l'animation

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Classe pour représenter une bulle
    class Bubble {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;

      constructor(x: number, y: number, radius: number, dx: number, dy: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx; // Vitesse horizontale
        this.dy = dy; // Vitesse verticale
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
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

    // Fonction pour générer des bulles sans superposition
    const generateBubble = (): Bubble => {
      const radius = Math.random() * 20 + 10;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;

      // Vérifier la collision avec les bulles existantes
      for (let i = 0; i < bubblesRef.current.length; i++) {
        const existingBubble = bubblesRef.current[i];
        const distanceX = x - existingBubble.x;
        const distanceY = y - existingBubble.y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < radius + existingBubble.radius) {
          return generateBubble();
        }
      }

      const dx = (Math.random() - 0.5) * 1; // Réduit la vitesse horizontale
      const dy = (Math.random() - 0.5) * 1; // Réduit la vitesse verticale
      const color = "blue"; // Couleur aléatoire ou fixe, selon vos besoins

      return new Bubble(x, y, radius, dx, dy, color);
    };

    // Initialisation des bulles
    const bubbles: Bubble[] = coins.slice(start, end).map(() => generateBubble());
    bubblesRef.current = bubbles;

    // Fonction d'animation
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

    // Démarrer l'animation
    animate();

    // Nettoyage avant le démontage du composant
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };

  }, [coins, coinRange, timePref]);

  return (
    <div className="bubble-chart">
      <canvas ref={canvasRef} style={{ border: "1px solid black" }}></canvas>
    </div>
  );
};

export default NeumorphismCharts;
