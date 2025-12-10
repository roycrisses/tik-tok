/// <reference types="vite/client" />
import { Object3DNode } from '@react-three/fiber';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ambientLight: any;
            pointLight: any;
            group: any;
            mesh: any;
            roundedBox: any;
            meshStandardMaterial: any;
            sphereGeometry: any;
            meshBasicMaterial: any;
            meshDistortMaterial: any;
            // Add others as needed or use 'any' for speed in this context
            primitive: any;
        }
    }
}
