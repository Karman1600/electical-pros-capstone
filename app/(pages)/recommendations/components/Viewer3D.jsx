'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Controls from './Controls';

const Viewer3D = ({ imageFile }) => {
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  // Function to load the 3D model
  const loadModel = (modelPath) => {
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const model = gltf.scene;
      setModel(model);
    });
  };

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add ambient lighting and a directional light
    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Load the model (replace 'modelName' with the correct model name)
    loadModel(`/api/serveModels?modelName=yourModelName`);

    const animate = () => {
      requestAnimationFrame(animate);
      if (model) {
        model.rotation.y = THREE.MathUtils.degToRad(rotation);
        model.scale.set(scale, scale, scale);
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      if (renderer) renderer.dispose();
    };
  }, [model, rotation, scale]);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <img
        src={`/uploads/${imageFile.filename}`}
        alt="Uploaded Site"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <Controls onChange={({ rotation, scale }) => {
        setRotation(rotation);
        setScale(scale);
      }} />
    </div>
  );
};

export default Viewer3D;
