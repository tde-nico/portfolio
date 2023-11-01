import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

// https://pinetools.com/flip-image

const Computers = ({ isMobile }) => {
	const computer = useGLTF('./desktop_pc/scene.gltf');

	return (
		<mesh>
			{/*<hemisphereLight intensity={1} groundColor='black' position={isMobile ? [4, 2, 0.6] : [0, 0, 0]} />*/}
			{/*<spotLight
				position={isMobile ? [+2, -3.8, -21.8] : [+2, -5, -2.5]}
				angle={2.12}
				penumbra={1}
				intensity={10}
				castShadow={true}
				shadow-mapSize={1024}
			/>*/}
			<pointLight intensity={4} decay={0} position={isMobile ? [0, 2.3, 0.7] : [0, 0, 0]}/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 1 : 0.75}
				position={isMobile ? [0, -1.8, -2.2] : [0, -3.0, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	)
}

const ComputersCanvas = ({ isMobile }) => {
	return (
		<Canvas
			frameloop='demand'
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile}/>
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

export default ComputersCanvas;