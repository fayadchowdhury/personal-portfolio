import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Model } from "./HeroModelScene";

const HeroModel = () => {
  const isMobileSmall = useMediaQuery({ maxWidth: 770 });
  const isMobileMedium = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className="w-full lg:h-100 h-50">
      <Canvas camera={{ fov: 45 }}>
        <ambientLight intensity={3} color="#ecc4f2" />
        <directionalLight
          position={[20, 20, 20]}
          intensity={5}
          color={"#FFFFFF"}
        />

        <Bounds fit clip observe margin={1.75}>
          <group position={[0, -0.75, 0]}>
            <Model />
          </group>
        </Bounds>

        <OrbitControls
          enableZoom={!isMobileSmall || !isMobileMedium}
          minDistance={1.5}
          maxDistance={100}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          enablePan={false}
          autoRotate
          autoRotateSpeed={5}
        />
      </Canvas>
    </div>
  );
};

export default HeroModel;
