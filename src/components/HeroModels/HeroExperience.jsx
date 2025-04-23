import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Laptop } from "./Laptop";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 70 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={100}
        minDistance={50}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />

      <group
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [0, -3.5, 0] : [2, -10.5, 0]}
        rotation={[0, -Math.PI / 7, 0]}
      >
        <Laptop />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
