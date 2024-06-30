import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const BouncingBubble = ({ position, color, bubbles }) => {
  const meshRef = useRef();
  const [velocity] = useState(() => ({
    x: (Math.random() - 0.5) * 0.02,
    y: (Math.random() - 0.5) * 0.02,
    z: (Math.random() - 0.5) * 0.02,
  }));

  const gravity = 0.0001;
  const bounds = 1.5;

  useFrame(() => {
    const mesh = meshRef.current;

    // Update position based on velocity
    mesh.position.x += velocity.x;
    mesh.position.y += velocity.y;
    mesh.position.z += velocity.z;

    velocity.y -= gravity;

    // Rebound on the edges
    if (mesh.position.x > bounds || mesh.position.x < -bounds) velocity.x = -velocity.x;
    if (mesh.position.y > bounds || mesh.position.y < -bounds) velocity.y = -velocity.y;
    if (mesh.position.z > bounds || mesh.position.z < -bounds) velocity.z = -velocity.z;

    // Check for collisions with other bubbles
    for (let other of bubbles.current) {
      if (other !== mesh) {
        const dx = mesh.position.x - other.position.x;
        const dy = mesh.position.y - other.position.y;
        const dz = mesh.position.z - other.position.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 0.2) {  // Assuming bubble radius is 0.1
          // Simple collision response by inverting velocity
          velocity.x = -velocity.x;
          velocity.y = -velocity.y;
          velocity.z = -velocity.z;
        }
      }
    }
  });

  useEffect(() => {
    bubbles.current.push(meshRef.current);
    return () => {
      bubbles.current = bubbles.current.filter(b => b !== meshRef.current);
    };
  }, [bubbles]);

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default BouncingBubble;
