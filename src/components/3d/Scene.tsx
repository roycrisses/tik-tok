import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, OrbitControls } from '@react-three/drei';
import Logo3D from './Logo3D';

const Scene: React.FC = () => {
    return (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#FE2C55" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#25F4EE" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <Logo3D />
                </Float>

                <Environment preset="city" />
                {/* Helper controls for dev, remove or disable zoom in prod */}
                {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> */}
            </Canvas>
        </div>
    );
};

export default Scene;
