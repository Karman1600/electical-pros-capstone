import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ServiceRoomModel = ({ service }) => {
  // Log the current service to check if it's being passed correctly
  console.log("Selected service:", service);

  return (
    <div className="w-full h-[400px] bg-gray-200 mt-10 rounded-lg">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Floor */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="#D9B382" />
        </mesh>

        {/* Back Wall */}
        <mesh position={[0, 0.5, -2.5]}>
          <boxGeometry args={[5, 2.5, 0.1]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>

        {/* Left Wall */}
        <mesh position={[-2.5, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[5, 2.5, 0.1]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>

        {/* Right Wall */}
        <mesh position={[2.5, 0.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[5, 2.5, 0.1]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>

        {/* Consulting Services */}
        {service === 'Consulting Services' && (
          <mesh position={[0, 0.5, -2]}>
            <boxGeometry args={[1, 0.3, 0.3]} />
            <meshStandardMaterial color="purple" />
          </mesh>
        )}

        {/* Solution Design */}
        {service === 'Solution Design' && (
          <mesh position={[-1.5, 0.5, 1]}>
            <boxGeometry args={[1, 0.4, 0.3]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        )}

        {/* Electrical Engineering Drawing */}
        {service === 'Electrical Engineering Drawing' && (
          <mesh position={[1.5, 0.5, -1]}>
            <cylinderGeometry args={[0.3, 0.3, 0.8, 32]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        )}

        {/* System Analysis */}
        {service === 'System Analysis' && (
          <mesh position={[0, -0.5, 1]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="green" />
          </mesh>
        )}

        {/* Project Consulting */}
        {service === 'Project Consulting' && (
          <mesh position={[-1, 0.5, -1]}>
            <coneGeometry args={[0.5, 1, 32]} />
            <meshStandardMaterial color="teal" />
          </mesh>
        )}

        {/* Maintenance Services */}
        {service === 'Maintenance Services' && (
          <mesh position={[1, -0.5, 1]}>
            <torusGeometry args={[0.5, 0.2, 16, 100]} />
            <meshStandardMaterial color="red" />
          </mesh>
        )}

        {/* Training and Development */}
        {service === 'Training and Development' && (
          <mesh position={[0, 0.5, 2]}>
            <dodecahedronGeometry args={[0.5]} />
            <meshStandardMaterial color="yellow" />
          </mesh>
        )}

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default ServiceRoomModel;
