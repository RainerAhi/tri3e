import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Model(props) {

  const { camera, scene } = useThree()

  const model = useRef()
  
  const bracelet = useRef()

  const tl = gsap.timeline()

  useLayoutEffect(() => {

    //FIRST TO SECOND

    tl
    .to(model.current.rotation, {
      y: Math.PI * 2.5,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      z: 2,
      y: -0.5,

      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //SECOND TO THIRD

    .to(scene.position, {
      z: -3,
      x: 2,
      y: 0.5,
      scrollTrigger: {
        trigger: ".three",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(model.current.rotation, {
      y: Math.PI * 5,
      scrollTrigger: {
        trigger: ".three",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //THIRD TO FOURTH
    
    .to(scene.position, {
      z: 0,
      x: 0,
      y: 0,
      scrollTrigger: {
        trigger: ".four",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    
    .to(model.current.rotation, {
      y: Math.PI * 7.5,
      scrollTrigger: {
        trigger: ".four",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    // FOUR TO FIVE

    .to(model.current.rotation, {
      y: Math.PI * 10,
      scrollTrigger: {
        trigger: ".five",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //FIVE TO SIX

    .to(".bottle, .hat, .medicine, .shirt", {
      opacity: 0,
      width: "20%",
      rotation: 30,
      scrollTrigger: {
        trigger: ".six",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(model.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      scrollTrigger: {
        trigger: ".six",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(bracelet.current.scale, {
      x: 0.5,
      y: 0.5,
      z: 0.5,
      scrollTrigger: {
        trigger: ".six",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })

    //SIX TO SEVEN

    .to(bracelet.current.scale, {
      x: 0.25,
      y: 0.25,
      z: 0.25,
      scrollTrigger: {
        trigger: ".seven",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      z: -2.5,
      x: 2.5,
      y: 0,
      scrollTrigger: {
        trigger: ".seven",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(bracelet.current.rotation, {
      z: Math.PI * 2.5,
      scrollTrigger: {
        trigger: ".seven",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //SEVEN TO EIGHT

    .to(bracelet.current.rotation, {
      z: Math.PI * 4,
      scrollTrigger: {
        trigger: ".eight",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    // EIGHT TO NINE 

    .to(bracelet.current.rotation, {
      z: Math.PI * 6,
      scrollTrigger: {
        trigger: ".nine",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      z: 0,
      x: -4.5,
      y: 1,
      scrollTrigger: {
        trigger: ".nine",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(bracelet.current.scale, {
      x: 0.45,
      y: 0.45,
      z: 0.45,
      scrollTrigger: {
        trigger: ".nine",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })



  }, [])


  const { nodes, materials } = useGLTF("./chipbrace.glb");
  return (
    <group {...props} dispose={null}>
      <group   >
        <group
          position={[0, 0, 0]}
          rotation={[1.644, 0.073, 0.783]}
          scale={0}
          ref={ bracelet }
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chain_Material001_0.geometry}
            material={nodes.chain_Material001_0.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chain_blue_0.geometry}
            material={nodes.chain_blue_0.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chain_yellow_0.geometry}
            material={nodes.chain_yellow_0.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chain_green_0.geometry}
            material={nodes.chain_green_0.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chain_orange_0.geometry}
            material={nodes.chain_orange_0.material}
          />
        </group>
        <group scale={ 0.025 } ref={model} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./chipbrace.glb");