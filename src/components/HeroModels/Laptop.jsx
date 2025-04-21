import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Laptop(props) {
  // const matcapTexture = useTexture("/images/xora.jpg");
  const { nodes, materials } = useGLTF("/models/laptop.glb");

  // const laptopImg = new THREE.MeshPhongMaterial({
  //   map: matcapTexture,
  // });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Frame_ComputerFrame_0.geometry}
        material={materials.ComputerFrame}
        position={[0, 0.976, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Screen_ComputerScreen_0.geometry}
        material={materials.ComputerScreen}
        position={[0, 0.65, -10.3]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={[100, 100, 88.235]}
      />
    </group>
  );
}

useGLTF.preload("/models/laptop.glb");
