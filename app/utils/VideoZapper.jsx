"use client";

import React from "react";
import { motion } from "framer-motion";

function VideoZapper({ children, active }) {
  return (
    <motion.div
      animate={{ scaleY: active ? 1 : 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}>
      {children}
    </motion.div>
  );
}

export default VideoZapper;
