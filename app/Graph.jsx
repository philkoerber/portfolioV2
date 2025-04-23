"use client";

import React from "react";
import { useRef, useCallback, useEffect, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";
import { usePathname } from "next/navigation";

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

const data = {
  nodes: [
    //main
    { id: "home" },
    { id: "about" },
    { id: "contact" },
    { id: "projects" },
    //sub
    { id: "projects/web" },
    { id: "projects/trading" },
  ],
  links: [
    //main
    { source: "about", target: "home", value: 3 },
    { source: "contact", target: "home", value: 4 },
    { source: "projects", target: "home", value: 2 },
    //sub
    { source: "projects", target: "projects/web", value: 2 },
    { source: "projects", target: "projects/trading", value: 3 },
  ],
};
const createCustomNode = (node) => {
  const group = new THREE.Group();

  const getModelById = (id) => {
    if (id === "projects/web") {
      return "/laptop.glb";
    }
    if (id === "projects") {
      return "/hammer.glb";
    }
    if (id === "contact") {
      return "/telephone.glb";
    }
    if (id === "projects/trading") {
      return "/chart.glb";
    }
    if (id === "about") {
      return "/human.glb";
    } else {
      return "";
    }
  };

  // Generate a random color
  const baseColor = new THREE.Color("#F9DBBD");

  // Load your 3D model here
  const loader = new GLTFLoader();
  loader.load(getModelById(node.id), (gltf) => {
    // Traverse the model's hierarchy to apply materials
    gltf.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Create a new material with the random color and standard shading
        const material = new THREE.MeshToonMaterial({
          wireframe: true,
          color: baseColor,
        });

        // Assign the new material to the mesh
        child.material = material;
      }
    });

    // Add your loaded model to the group
    group.add(gltf.scene);

    // You can customize the position, rotation, and scale of the model here
    gltf.scene.position.set(0, 0, 0);
    const targetSize = 5;

    const box = new THREE.Box3().setFromObject(gltf.scene);
    const size = new THREE.Vector3();
    box.getSize(size);

    const maxDimension = Math.max(size.x, size.y, size.z);
    const scale = targetSize / maxDimension;

    gltf.scene.scale.setScalar(scale);
    gltf.scene.rotation.set(0, 0, 0);

    const randomRotation = {
      x: Math.random() * 0.002 + 0.003,
      y: Math.random() * 0.002 + 0.003,
      z: Math.random() * 0.002 + 0.003,
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
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    fgRef.current.scene().background = new THREE.Color("#F9D6B4");
    //window resize logic
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

    console.log(nodeToFocus)

    if (nodeToFocus) {
      setTimeout(() => {
        handleClick(nodeToFocus);
      }, 100);
    }

  }, [pathname]);

  return (
    <ForceGraph3D
      ref={fgRef}
      width={windowSize.width}
      height={windowSize.height}
      graphData={data}
      nodeLabel="id"
      nodeAutoColorBy="group"
      nodeThreeObject={createCustomNode}
      showNavInfo={false}
      enableNodeDrag={false}
    />
  );
}

export default Graph;
