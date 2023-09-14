"use client";

import React from "react";
import { useRef, useCallback, useEffect } from "react";
import ForceGraph3D from "react-force-graph-3d";
import { usePathname } from "next/navigation";

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

const data = {
  nodes: [
    //main
    { id: "home" },
    { id: "about" },
    { id: "socials" },
    { id: "discography" },
    { id: "equipment" },
    //sub
    { id: "discography/physical" },
    { id: "discography/digital" },
    { id: "discography/sets" },
  ],
  links: [
    //main
    { source: "about", target: "home", value: 3 },
    { source: "socials", target: "home", value: 4 },
    { source: "discography", target: "home", value: 2 },
    { source: "equipment", target: "home", value: 5 },
    //sub
    { source: "discography", target: "discography/sets", value: 2 },
    { source: "discography", target: "discography/physical", value: 5 },
    { source: "discography", target: "discography/digital", value: 3 },
  ],
};

const createCustomNode = (node) => {
  const group = new THREE.Group();

  const getModelById = (id) => {
    if (id === "discography/sets") {
      return "/turntable.glb";
    } else {
      return "/synthesizer.glb";
    }
  };
  // Load your 3D model here
  const loader = new GLTFLoader();
  loader.load(getModelById(node.id), (gltf) => {
    // Add your loaded model to the group
    group.add(gltf.scene);

    // You can customize the position, rotation, and scale of the model here
    gltf.scene.position.set(0, 0, 0);

    gltf.scene.scale.set(1, 1, 1);

    gltf.scene.rotation.set(0, 0, 0);
    const randomRotation = {
      x: Math.random() * 0.003 + 0.004,
      y: Math.random() * 0.003 + 0.004,
      z: Math.random() * 0.003 + 0.004,
    };

    const rotateNode = () => {
      // You can adjust the rotation speed and axes as needed
      gltf.scene.rotation.x += randomRotation.x; // Rotate around the X-axis
      gltf.scene.rotation.y += randomRotation.y; // Rotate around the Y-axis
      gltf.scene.rotation.z += randomRotation.z; // Rotate around the Z-axis

      // Request the next frame
      requestAnimationFrame(rotateNode);
    };

    rotateNode();
  });

  return group;
};

function Graph(props) {
  const pathname = usePathname();

  const fgRef = useRef();

  const handleClick = useCallback(
    (node) => {
      // Aim at node from outside it
      const distance = 20;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      fgRef.current.cameraPosition(
        {
          x: node.x * distRatio,
          y: node.y * distRatio,
          z: node.z * distRatio,
        }, // new position
        node, // lookAt ({ x, y, z })
        3000 // ms transition duration
      );
    },
    [fgRef]
  );

  useEffect(() => {
    // Find the node with the same ID as the current pathname
    const nodeToFocus = data.nodes.find(
      (node) => node.id === pathname.slice(1)
    );

    if (nodeToFocus) {
      setTimeout(() => {
        handleClick(nodeToFocus);
      }, 100);
    }
  }, [pathname]);

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={data} // Use the example data here
      nodeLabel="id"
      nodeAutoColorBy="group"
      nodeThreeObject={createCustomNode}
    />
  );
}

export default Graph;
