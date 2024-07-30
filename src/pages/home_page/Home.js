import Sparkles from "../gallery_page/components/Sparkles";
import { Canvas } from '@react-three/fiber/';
import React, { Suspense } from "react";
import { useGLTF, OrbitControls } from '@react-three/drei'
import Scene from './Scene'
import styled from "styled-components";

useGLTF.preload('/scene.gltf')

function Box() {
    return (

        <mesh rotation={[0, 10, 0]}>
            <boxGeometry attach="geometry" args={[5, 5, 5]} />
            <meshStandardMaterial transparent={true} attach="material" color='purple' opacity={0.5} />

        </mesh>


    );
}


function Home() {
    return (
        <div>
            <h1><Sparkles>Summer 2024</Sparkles></h1>
            <Canvas style={{ height: "50%" }} camera={{ fov: 10, position: [25, 10, 10] }}>
                <OrbitControls />
                <Suspense fallback={null}>
                    <Scene />
                    <ambientLight intensity={0.1} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Home;