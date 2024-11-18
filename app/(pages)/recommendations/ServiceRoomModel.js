import React from 'react'; // Import React
import { Canvas } from '@react-three/fiber'; // 3D rendering library
import { OrbitControls } from '@react-three/drei'; // Provides camera controls like zoom, rotate, etc.

const ServiceRoomModel = ({ service }) => {
  console.log("Selected service:", service); // Logs the selected service for debugging

  return (
    <div className="w-full h-[400px] bg-gray-200 mt-10 rounded-lg"> {/* Container for the 3D model */}
      <Canvas> {/* Canvas element from @react-three/fiber to render the 3D scene */}
        {/* Global lighting */}
        <ambientLight intensity={0.5} /> {/* Soft light */}
        <directionalLight position={[5, 5, 5]} /> {/* Focused directional light */}

        {/* Floor */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}> {/* Flat plane for the floor */}
          <planeGeometry args={[5, 5]} /> {/* Plane dimensions */}
          <meshStandardMaterial color="#D9B382" /> {/* Material and color */}
        </mesh>

        {/* Back Wall */}
        <mesh position={[0, 0.5, -2.5]}> {/* Wall behind the scene */}
          <boxGeometry args={[5, 2.5, 0.1]} /> {/* Thin rectangle for the wall */}
          <meshStandardMaterial color="#F5F5F5" /> {/* Light gray wall */}
        </mesh>

        {/* Left Wall */}
        <mesh position={[-2.5, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}> {/* Rotated left wall */}
          <boxGeometry args={[5, 2.5, 0.1]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>

        {/* Right Wall */}
        <mesh position={[2.5, 0.5, 0]} rotation={[0, -Math.PI / 2, 0]}> {/* Rotated right wall */}
          <boxGeometry args={[5, 2.5, 0.1]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>

        {/* Conditional Rendering of 3D Objects Based on Service */}
        {/* Consulting Services */}
        {service === 'Consulting Services' && (
          <mesh position={[0, 0.5, -2]}>
            <boxGeometry args={[1, 0.3, 0.3]} /> {/* Small rectangular box */}
            <meshStandardMaterial color="purple" /> {/* Purple for visual distinction */}
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
            <cylinderGeometry args={[0.3, 0.3, 0.8, 32]} /> {/* Cylinder shape */}
            <meshStandardMaterial color="orange" />
          </mesh>
        )}

        {/* System Analysis */}
        {service === 'System Analysis' && (
          <mesh position={[0, -0.5, 1]}>
            <sphereGeometry args={[0.5, 32, 32]} /> {/* Sphere shape */}
            <meshStandardMaterial color="green" />
          </mesh>
        )}

        {/* Project Consulting */}
        {service === 'Project Consulting' && (
          <mesh position={[-1, 0.5, -1]}>
            <coneGeometry args={[0.5, 1, 32]} /> {/* Cone shape */}
            <meshStandardMaterial color="teal" />
          </mesh>
        )}

        {/* Maintenance Services */}
        {service === 'Maintenance Services' && (
          <mesh position={[1, -0.5, 1]}>
            <torusGeometry args={[0.5, 0.2, 16, 100]} /> {/* Donut (torus) shape */}
            <meshStandardMaterial color="red" />
          </mesh>
        )}

        {/* Training and Development */}
        {service === 'Training and Development' && (
          <mesh position={[0, 0.5, 2]}>
            <dodecahedronGeometry args={[0.5]} /> {/* Geometric dodecahedron */}
            <meshStandardMaterial color="yellow" />
          </mesh>
        )}

        {/* Orbit Controls */}
        <OrbitControls enableZoom={true} /> {/* Allow user to zoom, rotate, and pan */}
      </Canvas>
    </div>
  );
};

export default ServiceRoomModel; // Export the component
