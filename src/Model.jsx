import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Model(props) {

  const { camera, scene } = useThree()

  const model = useRef()

  const tl = gsap.timeline()

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
      x: -4,
      y: 8,
      z: -2,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      x: -1,
      y: 1,
      z: 2,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
    
    // TWO TO THREE
    
    .to(camera.position, {
      x: 0,
      y: 7,
      z: 1,
      scrollTrigger: {
        trigger: ".three",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      x: 0,
      y: 0,
      z: 0,
      scrollTrigger: {
        trigger: ".three",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    tl
    .to(model.current.rotation, {
      x: Math.PI * 2,
      // y: Math.PI * 2,
      // z: Math.PI / 1,
      scrollTrigger: {
        trigger: ".three",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    // THREE TO FOUR

    .to(camera.position, {
      x: -1,
      y: 10,
      z: 1,
      scrollTrigger: {
        trigger: ".four",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      x: -2,
      y: 1.5,
      z: -1.5,
      scrollTrigger: {
        trigger: ".four",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    tl
    .to(model.current.rotation, {
      // x: Math.PI * 2,
      y: Math.PI * -2,
      // z: Math.PI * 2,
      scrollTrigger: {
        trigger: ".four",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
    

  }, [])

  const { nodes, materials } = useGLTF("./iphone15.glb");
  return (
    <group {...props} dispose={null} ref={ model } >
      <mesh
        geometry={nodes.ADQitPWarQAjYav.geometry}
        material={materials.lines}
      />
      <mesh
        geometry={nodes.bUzWwtiHcgoAnSJ.geometry}
        material={materials.insideringofcamera}
      />
      <mesh
        geometry={nodes.dCDREfWArILxXdM_0.geometry}
        material={materials["YJdMUYjlxqCytts.001"]}
      />
      <mesh
        geometry={nodes.FEtRbVzoeMIftfE_0.geometry}
        material={materials["LFvultLJEaPByrO.001"]}
      />
      <mesh
        geometry={nodes.MeQvdvuDAihzaGS.geometry}
        material={materials["NrAvsfGzFYYEABl.001"]}
      />
      <mesh
        geometry={nodes.yFrSHOWbClhenqq.geometry}
        material={materials["mYJKhpohDLASTOA.001"]}
      />
      <mesh
        geometry={nodes.kAIGCjzZUXLwSyH_0.geometry}
        material={materials["outsiderail.001"]}
      />
      <mesh
        geometry={nodes.kuCyfPptUaqBTmt.geometry}
        material={materials["YJdMUYjlxqCytts.001"]}
      />
      <mesh
        geometry={nodes.qwzDfwJXazHMUbt_0.geometry}
        material={materials["outsiderail.001"]}
      />
      <mesh
        geometry={nodes.xvgCbYwIFChajPN_0.geometry}
        material={materials["outsiderail.001"]}
      />
      <mesh
        geometry={nodes.DaphPnSSMHqRDbk.geometry}
        material={materials["YJdMUYjlxqCytts.001"]}
      />
      <mesh
        geometry={nodes.QsViZQSWjAwDEEI.geometry}
        material={materials["outsiderail.001"]}
      />
      <mesh
        geometry={nodes.zfhqiavXDjarqhL.geometry}
        material={materials["VwBZYsiCbBLkQPF.001"]}
      />
      <mesh
        geometry={nodes.DghuuWQlstWpjrq.geometry}
        material={materials["YiKiKtTrtTyvHkX.001"]}
      />
      <mesh
        geometry={nodes.DsNRADikVrfnKcf.geometry}
        material={materials["ifwpkuPjiMbtRKk.001"]}
      />
      <mesh
        geometry={nodes.icKtJSUoXUmvGij.geometry}
        material={materials["mAsuLKlxkFllvaA.001"]}
      />
      <mesh
        geometry={nodes.msOqpZaPeOztUmE.geometry}
        material={materials.insideringofcamera}
      />
      <mesh
        geometry={nodes.UBwXpOTVmdyOdzL.geometry}
        material={materials["jkFPhaKfXOTCxen.001"]}
      />
      <mesh
        geometry={nodes.UMDrxCSlJBNZxvb.geometry}
        material={materials.lines}
      />
      <mesh
        geometry={nodes.vnAqIVBPagxzaIa.geometry}
        material={materials["jRrUsCPpcNaOjGa.001"]}
      />
      <mesh
        geometry={nodes.fNJSUFzKmyHfvXD.geometry}
        material={materials["WmVfENurxohWQCu.001"]}
      />
      <mesh
        geometry={nodes.gRIzbAYPrwqiDGU.geometry}
        material={materials.weirdhole}
      />
      <mesh
        geometry={nodes.KLqbdZHcwJmCYgd_0.geometry}
        material={materials["outsiderail.001"]}
      />
      <mesh
        geometry={nodes.yAJphLaEqbVihWq.geometry}
        material={materials["cyzcWmIEQuypnfA.001"]}
      />
      <mesh
        geometry={nodes.DjYWrPxrIIOCUPs.geometry}
        material={materials["RpqtQptWDVVNSlu.001"]}
      />
      <mesh
        geometry={nodes.rpYeDgwsdspqkAN.geometry}
        material={materials.cameraglass}
      />
      <mesh
        geometry={nodes.caaPDVlqZNoEbpl.geometry}
        material={materials.insideringofcamera}
      />
      <mesh
        geometry={nodes.cauKBYaxHivPIgB.geometry}
      >
        <meshPhysicalMaterial metalness={ 0.2 } roughness={ 0.75 } />
      </mesh>
      <mesh
        geometry={nodes.hpjfXAoHEzmpwSn.geometry}
        material={materials["CueIasJstEEoGwb.001"]}
      />
      <mesh
        geometry={nodes.jYJXpBTmOKOiNTi.geometry}
        material={materials.cameraback}
      />
      <mesh
        geometry={nodes.nGcCJeipgsTpNHw.geometry}
        material={materials.cameraglass}
      />
      <mesh
        geometry={nodes.qaVIaABMMpsBQTV.geometry}
        material={materials["ehaFECHstKLymGS.001"]}
      />
      <mesh
        geometry={nodes.alnDTBxmDyriloz.geometry}
        material={materials["PjULaUWyIVkMIEi.001"]}
      />
      <mesh
        geometry={nodes.IEVOuzrwhuOiXlH.geometry}
        material={materials["pDpaTvigkODBkCS.001"]}
      />
      <mesh
        geometry={nodes.RKSRUjayhqZEiIx.geometry}
        material={materials.lightglass}
      />
      <mesh
        geometry={nodes.SAccPngNwYanVfS.geometry}
        material={materials["RaalfSGWjqNoaHN.001"]}
      />
      <mesh
        geometry={nodes.ZEyDFXBmziQRgWz.geometry}
        material={materials["kkNJaRcUUOedPid.001"]}
      />
      <mesh
        geometry={nodes.dQCHDrXlwwIRczj.geometry}
        material={materials["TsDxyVJzUOBIcsg.001"]}
      />
      <mesh
        geometry={nodes.dxYtgFCvvUhAkHX.geometry}
        material={materials.insideringofcamera}
      />
      <mesh
        geometry={nodes.FnijlkukwZbBGil.geometry}
        material={materials.cameralightring}
      />
      <mesh
        geometry={nodes.gyVTHdaXygMvRCh.geometry}
        material={materials.outsiderail}
      />
      <mesh
        geometry={nodes.iGGKesQQHVLYJqI.geometry}
        material={materials["GxUQKBMEsBFIYRu.001"]}
      />
      <mesh
        geometry={nodes.kQVjiehgKgitchY.geometry}
        material={materials["BneHBUOdAXFezxu.001"]}
      />
      <mesh
        geometry={nodes.KZSjpIcWEBOxMsT.geometry}
        material={materials["outsiderail.001"]}
      />
      <mesh
        geometry={nodes.lwjakyLzEAwDTWZ.geometry}
        material={materials["BneHBUOdAXFezxu.001"]}
      />
      <mesh
        geometry={nodes.lxWsywyhkdcclcI.geometry}
        material={materials["GxUQKBMEsBFIYRu.001"]}
      />
      <mesh
        geometry={nodes.qSDuuFaFaJUcNhp.geometry}
        material={materials["BneHBUOdAXFezxu.001"]}
      />
      <mesh
        geometry={nodes.sFGzFXUSIvQzpol.geometry}
        material={materials["GxUQKBMEsBFIYRu.001"]}
      />
      <mesh
        geometry={nodes.VWibrTGaaabMyql.geometry}
        material={materials.lensglass}
      />
      <mesh
        geometry={nodes.ztObfHMiNUDvAsB.geometry}
        material={materials["lensglass.001"]}
      />
      <mesh
        geometry={nodes.acgRFDWrKLNrBUo.geometry}
        material={materials["GxUQKBMEsBFIYRu.001"]}
      />
      <mesh
        geometry={nodes.AYHvTTezEDWCfxr.geometry}
        material={materials.outsiderail}
      />
      <mesh
        geometry={nodes.DCySEaetTzJwZfy.geometry}
        material={materials.cameralightring}
      />
      <mesh
        geometry={nodes.jkcNsZdOdUIRDnR.geometry}
        material={materials["outsiderail.001"]}
      />
      <mesh
        geometry={nodes.LDnMUPREjJZopDl.geometry}
        material={materials["lensglass.001"]}
      />
      <mesh
        geometry={nodes.RFypFewatvAkKLm.geometry}
        material={materials.lensglass}
      />
      <mesh
        geometry={nodes.XnBYvKhLlLxznbC.geometry}
        material={materials.insideringofcamera}
      />
      <mesh
        geometry={nodes.UNarhURerPEIpYZ.geometry}
        material={materials.frontcameraglass}
      />
      <mesh
        geometry={nodes.XMWPObBfLfhBdeI.geometry}
        material={materials["TsDxyVJzUOBIcsg.001"]}
      />
      <mesh
        geometry={nodes.zyDfUICUtSyYzcK.geometry}
        material={materials.frontcameraglass}
      />
      <mesh
        geometry={nodes.dcXcnwZsQFDJNsE.geometry}
        material={materials["lensglass.001"]}
      />
      <mesh
        geometry={nodes.dnqMHwDXImJZjCO.geometry}
        material={materials.lensglass}
      />
      <mesh
        geometry={nodes.GRPjoyLjmOyQzYO.geometry}
        material={materials.insideringofcamera}
      />
      <mesh
        geometry={nodes.HHcwfIZoaXQOvgp.geometry}
        material={materials.outsiderail}
      />
      <mesh
        geometry={nodes.HyOisHvGLNjDeWM.geometry}
        material={materials.cameralightring}
      />
      <mesh
        geometry={nodes.OPsgacCwkQgCKpa.geometry}
        material={materials["GxUQKBMEsBFIYRu.001"]}
      />
      <mesh
        geometry={nodes.qVZrFmnrHQVdHEB.geometry}
        material={materials["outsiderail.001"]}
      />
      <mesh
        geometry={nodes.RScRPbiNzuOGriZ.geometry}
        material={materials["GxUQKBMEsBFIYRu.001"]}
      />
      <mesh
        geometry={nodes.tKHBYYvZyuyIzXB.geometry}
        material={materials["TsDxyVJzUOBIcsg.001"]}
      />
      <mesh
        geometry={nodes.HCYNKAoytFwdObo.geometry}
        material={materials.frontcameraglass}
      />
      <mesh
        geometry={nodes.IkCMZKsTBhCoPcg.geometry}
        material={materials.frontcameraglass}
      />
      <mesh
        geometry={nodes.etafzVtXJMyweKk.geometry}
        material={materials.airintake}
      />
      <mesh
        geometry={nodes.soKAoKbiNABHsps.geometry}
        material={materials["pzJqwZMvZMKblXM.001"]}
      />
      <mesh
        geometry={nodes.XFvwpwIGNNQAJxC.geometry}
        material={materials.airintake}
      />
      <mesh
        geometry={nodes.sINYchtqBJXtUAp.geometry}
        material={materials.notchfacescan}
      />
      <mesh
        geometry={nodes.vvVTlEeBFvHjkgs.geometry}
        material={materials.notchcamera}
      />
      <mesh
        geometry={nodes.zMjpNClHNDjNclH.geometry}
        material={materials.notchsmaalthing}
      />
      <mesh
        geometry={nodes.ARLlTVbJJzZKoIy.geometry}
        material={materials.notchfacescan}
      />
      <mesh
        geometry={nodes.AuFgEQrPRrKqrqF.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.lDwjnuGdxRuxrbT.geometry}
        material={materials.insideringofcamera}
      />
      <mesh
        geometry={nodes.nnDaSTgSqWKgcrP.geometry}
        material={materials.notchsmaalthing}
      />
      <mesh
        geometry={nodes.ExDIygsFPhfCMxG_1.geometry}
        material={materials.frontcamera}
      />
      <mesh
        geometry={nodes.ExDIygsFPhfCMxG_2.geometry}
        material={materials.frontcameraglass}
      />
    </group>
  );
}

useGLTF.preload("./iphone15.glb");