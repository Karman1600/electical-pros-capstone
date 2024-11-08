// components/RoomModel.js

// Importing React library to create a React component
import React from 'react';

// Importing the Canvas component from @react-three/fiber, which is used to create a 3D scene
import { Canvas } from '@react-three/fiber';

// Importing OrbitControls from @react-three/drei to enable user interaction (e.g., rotating the view)
import { OrbitControls } from '@react-three/drei';

// The RoomModel component takes `appliance` and `wiring` as props
const RoomModel = ({ appliance, wiring }) => {
  return (
    // A container for the 3D scene with styling
    <div className="w-full h-[400px] bg-gray-200 mt-10 rounded-lg">
      
      {/* Canvas is used to render the 3D scene */}
      <Canvas>
        {/* Adding ambient light to softly illuminate the scene */}
        <ambientLight intensity={0.5} />
        
        {/* Adding directional light to create shadows and depth */}
        <directionalLight position={[5, 5, 5]} />

        {/* Adding a floor to the 3D room */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 5]} /> // Defines the size of the floor
          <meshStandardMaterial color="#D9B382" /> // Sets the floor color
        </mesh>

        {/* Adding a back wall */}
        <mesh position={[0, 0.5, -2.5]}>
          <boxGeometry args={[5, 2.5, 0.1]} /> // Width, height, depth of the wall
          <meshStandardMaterial color="#F5F5F5" /> // Wall color
        </mesh>

        {/* Adding a left wall */}
        <mesh position={[-2.5, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[5, 2.5, 0.1]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>

        {/* Adding a right wall with a window */}
        <mesh position={[2.5, 0.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[5, 2.5, 0.1]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>

        {/* Adding different appliances based on the `appliance` prop */}
        {appliance === 'projector' && (
          <mesh position={[0, 0.5, -2.3]}>
            <boxGeometry args={[1, 0.3, 0.3]} /> // Shape of the projector
            <meshStandardMaterial color="gray" />
          </mesh>
        )}

        {appliance === 'heatingSystem' && (
          <mesh position={[-1.5, -0.5, 1]}>
            <boxGeometry args={[0.6, 0.4, 0.2]} /> // Shape of the heating system
            <meshStandardMaterial color="red" />
          </mesh>
        )}

        {appliance === 'airConditioner' && (
          <mesh position={[1.5, 1, -2.4]}>
            <boxGeometry args={[0.8, 0.3, 0.2]} /> // Shape of the air conditioner
            <meshStandardMaterial color="lightblue" />
          </mesh>
        )}

        {appliance === 'soundSystem' && (
          <mesh position={[0, -0.5, 2]}>
            <boxGeometry args={[0.4, 0.4, 0.4]} /> // Shape of the sound system
            <meshStandardMaterial color="black" />
          </mesh>
        )}

        {/* Adding different wiring types based on the `wiring` prop */}
        {wiring === 'standardWiring' && (
          <mesh position={[2.45, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 3.5, 32]} /> // Shape of the standard wiring
            <meshStandardMaterial color="blue" />
          </mesh>
        )}

        {wiring === 'smartWiring' && (
          <mesh position={[2.45, 0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 3.5, 32]} /> // Shape of the smart wiring
            <meshStandardMaterial color="green" />
          </mesh>
        )}

        {/* OrbitControls allow the user to rotate and zoom the 3D scene */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

// Exporting the RoomModel component so it can be imported and used in other files
export default RoomModel;
