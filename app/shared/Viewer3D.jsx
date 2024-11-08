// app/shared/Viewer3D.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Viewer3D = ({ modelUrl }) => {
  const [model, setModel] = useState(null);
  const loader = new GLTFLoader();

  useEffect(() => {
    if (modelUrl) {
      loader.load(modelUrl, (gltf) => {
        setModel(gltf.scene);
      });
    }
  }, [modelUrl]);

  return (
    <div className="h-96">
      <Canvas>
        {model && (
          <primitive object={model} scale={0.5} position={[0, 0, 0]} />
        )}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Viewer3D;
