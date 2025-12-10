import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Logo3D: React.FC = () => {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
            group.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    // Constructing a stylized "Music Note" / TikTok logo abstraction
    // Using primitives to avoid external asset loading
    return (
        <group ref={group} scale={1.5}>
            {/* Main Stem */}
            <RoundedBox args={[1, 4, 1]} radius={0.1} position={[-0.5, 0, 0]}>
                <meshStandardMaterial color="#000" metalness={0.8} roughness={0.2} />
            </RoundedBox>

            {/* Top Bar (The curved part approximation) */}
            <RoundedBox args={[2.5, 1, 1]} radius={0.1} position={[0.5, 1.5, 0]}>
                <meshStandardMaterial color="#000" metalness={0.8} roughness={0.2} />
            </RoundedBox>

            {/* The "Note" bottom circle */}
            <mesh position={[-1.2, -1.8, 0]}>
                <sphereGeometry args={[1.2, 32, 32]} />
                <MeshDistortMaterial
                    color="#000"
                    distort={0.4}
                    speed={2}
                    roughness={0.1}
                    metalness={1}
                />
            </mesh>

            {/* Red Shadow/Glow Layer (Offset) */}
            <group position={[0.2, 0.2, -0.5]}>
                <RoundedBox args={[1, 4, 1]} radius={0.1} position={[-0.5, 0, 0]}>
                    <meshBasicMaterial color="#FE2C55" transparent opacity={0.6} />
                </RoundedBox>
                <mesh position={[-1.2, -1.8, 0]}>
                    <sphereGeometry args={[1.2, 32, 32]} />
                    <meshBasicMaterial color="#FE2C55" transparent opacity={0.5} />
                </mesh>
            </group>

            {/* Blue Shadow/Glow Layer (Offset) */}
            <group position={[-0.2, -0.2, 0.5]}>
                <RoundedBox args={[1, 4, 1]} radius={0.1} position={[-0.5, 0, 0]}>
                    <meshBasicMaterial color="#25F4EE" transparent opacity={0.6} />
                </RoundedBox>
                <mesh position={[-1.2, -1.8, 0]}>
                    <sphereGeometry args={[1.2, 32, 32]} />
                    <meshBasicMaterial color="#25F4EE" transparent opacity={0.5} />
                </mesh>
            </group>

        </group>
    );
};

export default Logo3D;
