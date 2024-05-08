import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

// Define defaultGen as a function that generates random numbers between 0 and 1
const defaultGen = () => Math.random();

function inSphere(buffer, sphere, rng = defaultGen) {
    for (let i = 0; i < buffer.length; i += 3) {
        const u = Math.pow(rng(), 1 / 3);
        let x = rng() * 2 - 1;
        let y = rng() * 2 - 1;
        let z = rng() * 2 - 1;
        const mag = Math.sqrt(x * x + y * y + z * z);
        x = u * x / mag;
        y = u * y / mag;
        z = u * z / mag;
        buffer[i] = x * sphere.radius + sphere.center[0];
        buffer[i + 1] = y * sphere.radius + sphere.center[1];
        buffer[i + 2] = z * sphere.radius + sphere.center[2];
    }
    return buffer;
}

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() =>
        inSphere(new Float32Array(5000), { radius: 1.2, center: [0, 0, 0] })
    );

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StyledStarsCanvas = () => {
    return (
        <StyledCanvasWrapper>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </StyledCanvasWrapper>
    );
};

export default StyledStarsCanvas;
