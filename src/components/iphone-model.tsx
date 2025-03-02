import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const IphoneModel = () => {
  const iphoneRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/iphone_12_pro.glb");

  useFrame(() => {
    if (iphoneRef.current) {
      iphoneRef.current.rotation.y += 0.002;
    }
  });

  useEffect(() => {
    if (iphoneRef.current) {
      iphoneRef.current.position.set(-60, -80, -150);
      iphoneRef.current.rotation.y = 110;
    }

  }, []);

  return <primitive ref={iphoneRef} object={scene} />;
};

export default IphoneModel;
