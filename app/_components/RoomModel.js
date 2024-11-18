// components/RoomModel.js
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const RoomModel = ({ appliance, wiring }) => {
  // State to track hovered item information
  const [hoveredItem, setHoveredItem] = useState(null);

  // Hover information for appliances and wiring
  const infoData = {
    projector: {
      name: 'Projector',
      use: 'Projects visuals onto a surface.',
      alternatives: 'Television, LED Screen',
      price: '$400 - $1000',
    },
    heatingSystem: {
      name: 'Heating System',
      use: 'Heats the room efficiently.',
      alternatives: 'Portable Heaters, HVAC',
      price: '$200 - $800',
    },
    airConditioner: {
      name: 'Air Conditioner',
      use: 'Cools the room.',
      alternatives: 'Fans, Cooling Systems',
      price: '$300 - $1200',
    },
    soundSystem: {
      name: 'Sound System',
      use: 'Provides high-quality audio.',
      alternatives: 'Speakers, Soundbar',
      price: '$150 - $600',
    },
    standardWiring: {
      name: 'Standard Wiring',
      use: 'Basic electrical connection.',
      alternatives: 'Smart Wiring',
      price: '$50 - $200',
    },
    smartWiring: {
      name: 'Smart Wiring',
      use: 'Advanced wiring with smart controls.',
      alternatives: 'Standard Wiring',
      price: '$200 - $500',
    },
  };

  return (
    <div className="w-full h-[400px] bg-gray-200 mt-10 relative">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Room Structure */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="#D9B382" />
        </mesh>
        <mesh position={[0, 0.5, -2.5]}>
          <boxGeometry args={[5, 2.5, 0.1]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>
        <mesh position={[-2.5, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[5, 2.5, 0.1]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>
        <mesh position={[2.5, 0.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[5, 2.5, 0.1]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>

        {/* Appliances with hover detection */}
        {appliance === 'projector' && (
          <mesh
            position={[0, 0.8, -1]}
            onPointerOver={() => setHoveredItem(infoData.projector)}
            onPointerOut={() => setHoveredItem(null)}
          >
            <boxGeometry args={[0.5, 0.3, 0.3]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        )}

        {appliance === 'heatingSystem' && (
          <mesh
            position={[-1.5, -0.5, 1]}
            onPointerOver={() => setHoveredItem(infoData.heatingSystem)}
            onPointerOut={() => setHoveredItem(null)}
          >
            <boxGeometry args={[0.6, 0.4, 0.2]} />
            <meshStandardMaterial color="red" />
          </mesh>
        )}

        {appliance === 'airConditioner' && (
          <mesh
            position={[1.5, 1, -2.4]}
            onPointerOver={() => setHoveredItem(infoData.airConditioner)}
            onPointerOut={() => setHoveredItem(null)}
          >
            <boxGeometry args={[0.8, 0.3, 0.2]} />
            <meshStandardMaterial color="lightblue" />
          </mesh>
        )}

        {appliance === 'soundSystem' && (
          <mesh
            position={[0, -0.5, 2]}
            onPointerOver={() => setHoveredItem(infoData.soundSystem)}
            onPointerOut={() => setHoveredItem(null)}
          >
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <meshStandardMaterial color="black" />
          </mesh>
        )}

        {/* Wiring with hover detection */}
        {wiring === 'standardWiring' && (
          <mesh
            position={[2.45, 0.5, 0]}
            rotation={[0, Math.PI / 2, 0]}
            onPointerOver={() => setHoveredItem(infoData.standardWiring)}
            onPointerOut={() => setHoveredItem(null)}
          >
            <cylinderGeometry args={[0.02, 0.02, 3.5, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        )}

        {wiring === 'smartWiring' && (
          <mesh
            position={[2.45, 0.1, 0]}
            rotation={[0, Math.PI / 2, 0]}
            onPointerOver={() => setHoveredItem(infoData.smartWiring)}
            onPointerOut={() => setHoveredItem(null)}
          >
            <cylinderGeometry args={[0.02, 0.02, 3.5, 32]} />
            <meshStandardMaterial color="green" />
          </mesh>
        )}

        <OrbitControls enableZoom={true} />
      </Canvas>

      {/* Tooltip */}
      {hoveredItem && (
        <div className="absolute top-0 left-0 p-3 bg-white border border-gray-300 shadow-md rounded-md z-10">
          <p className="font-bold">{hoveredItem.name}</p>
          <p>Use: {hoveredItem.use}</p>
          <p>Alternatives: {hoveredItem.alternatives}</p>
          <p>Price: {hoveredItem.price}</p>
        </div>
      )}
    </div>
  );
};

export default RoomModel;
