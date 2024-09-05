import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBox, useSphere, useCylinder } from '@react-three/rapier';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function Vehicle() {
  const [bodyRef] = useBox(() => ({
    mass: 1,
    position: [0, 1, 0],
  }));

  const [frontWheelRef] = useSphere(() => ({
    mass: 1,
    position: [0, 0.5, 1],
  }));

  const [backWheel1Ref] = useCylinder(() => ({
    mass: 1,
    position: [-0.5, 0.25, -1],
  }));

  const [backWheel2Ref] = useCylinder(() => ({
    mass: 1,
    position: [0.5, 0.25, -1],
  }));

  return (
    <>
      <mesh ref={bodyRef} position={[0, 1, 0]}>
        <boxGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh ref={frontWheelRef}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh ref={backWheel1Ref}>
        <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh ref={backWheel2Ref}>
        <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </>
  );
}

function Scene() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      <OrbitControls />
      <ambientLight />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Vehicle />
    </Canvas>
  );
}

export default Scene;
