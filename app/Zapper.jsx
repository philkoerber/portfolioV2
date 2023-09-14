"use client";

import React from "react";
import { motion } from "framer-motion";

function Zapper({ children }) {
  const randomDuration = Math.random() * 0.5 + 0.5;
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: randomDuration, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
}

export default Zapper;
