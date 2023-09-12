"use client";

import React from "react";
import { useRef, useCallback, useEffect } from "react";
import ForceGraph3D from "react-force-graph-3d";
import { useRouter, usePathname } from "next/navigation";

const data = {
  nodes: [
    { id: "about", group: 1, size: 50, color: "gray" },
    { id: "contact", group: 2, size: 80, color: "gray" },
    { id: "discography", group: 1, size: 6, color: "gray" },
    { id: "equipment", group: 3, size: 7, color: "gray" },
    { id: "sets", group: 2, size: 9, color: "gray" },
  ],
  links: [
    { source: "about", target: "about", value: 3 },
    { source: "contact", target: "about", value: 4 },
    { source: "discography", target: "about", value: 2 },
    { source: "equipment", target: "about", value: 5 },
    { source: "sets", target: "about", value: 3 },
  ],
};

function Graph(props) {
  const pathname = usePathname();

  const fgRef = useRef();

  const handleClick = useCallback(
    (node) => {
      // Aim at node from outside it
      const distance = 60;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

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
    console.log(pathname.slice(1));
    if (nodeToFocus) {
      handleClick(nodeToFocus);
    }
  }, [pathname]);

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={data} // Use the example data here
      nodeLabel="id"
      nodeAutoColorBy="group"
      onNodeClick={handleClick}
    />
  );
}

export default Graph;
