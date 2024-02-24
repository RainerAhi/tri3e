import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Model(props) {

  const { camera, scene } = useThree()

  const model = useRef()

  const tl = gsap.timeline()

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useLayoutEffect(() => {

    tl
    .to(model.current.rotation, {
      x: Math.PI * 1,
      // y: Math.PI * 2,
      // z: Math.PI / 1,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(camera.position, {
      x: isMobile ? -3 : -4,
      y: isMobile ? 7 : 8,
      z: isMobile ? 5 : -2,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      x: isMobile ? 2 : -1,
      y: isMobile ? 13 : 1,
      z: isMobile ? 1 : 1,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
    

  }, [])

  const { nodes, materials } = useGLTF("/chip.gltf");
  return (
    <group {...props} dispose={null}  >
      <group rotation-z={ Math.PI / 8 } scale={0.01} ref={model} >
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
        >
          <meshPhysicalMaterial metalness={ 1 } roughness={ 1 } color={ "#ffffff" } />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/chip.gltf");