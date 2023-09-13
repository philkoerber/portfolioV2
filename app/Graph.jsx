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
    { id: "home", group: 1, size: 50, color: "gray" },
    { id: "about", group: 1, size: 50, color: "gray" },
    { id: "contact", group: 1, size: 80, color: "gray" },
    { id: "discography", group: 1, size: 6, color: "gray" },
    { id: "equipment", group: 1, size: 7, color: "gray" },
    //sub
    { id: "discography/physical", group: 1, size: 50, color: "gray" },
    { id: "discography/digital", group: 1, size: 50, color: "gray" },
    { id: "discography/sets", group: 1, size: 50, color: "gray" },
  ],
  links: [
    //main
    { source: "about", target: "home", value: 3 },
    { source: "contact", target: "home", value: 4 },
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

  // Load your 3D model here
  const loader = new GLTFLoader();
  loader.load("path/to/your/model.gltf", (gltf) => {
    // Add your loaded model to the group
    group.add(gltf.scene);

    // You can customize the position, rotation, and scale of the model here
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.rotation.set(0, 0, 0);
    gltf.scene.scale.set(1, 1, 1);
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
      const distRatio = 1 + (distance * 2) / Math.hypot(node.x, node.y, node.z);

      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
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
      console.log("going to " + pathname);
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
      nodeThree={createCustomNode}
    />
  );
}

export default Graph;
