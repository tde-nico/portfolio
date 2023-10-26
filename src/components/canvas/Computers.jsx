import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

// https://pinetools.com/flip-image

const Computers = () => {
	const computer = useGLTF('./desktop_pc/scene.gltf');

	return (
		<mesh>
			<hemisphereLight intensity={1} groundColor='black' />
			<spotLight
				position={[+2, -5, -2.5]}
				angle={2.12}
				penumbra={1}
				intensity={10}
				castShadow={true}
				shadow-mapSize={1024}
			/>
			<pointLight intensity={4} decay={0}/>
			<primitive
				object={computer.scene}
				scale={0.75}
				position={[0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	)
}

const ComputersCanvas = () => {
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
				<Computers />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

export default ComputersCanvas;