import React, { useState, useEffect } from 'react';

function FallingShapes() {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const shape = Math.random() > 0.5 ? 'cube' : 'sphere';
      const x = Math.random() * 10 - 5;
      const y = 10;
      const z = Math.random() * 10 - 5;
      setShapes((prevShapes) => [...prevShapes, { shape, x, y, z }]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return shapes.map((s, index) => (
    <mesh key={index} position={[s.x, s.y, s.z]}>
      {s.shape === 'cube' ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : (
        <sphereGeometry args={[0.5, 16, 16]} />
      )}
      <meshStandardMaterial color="red" />
    </mesh>
  ));
}

export default FallingShapes;
