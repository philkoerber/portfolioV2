"use client";

import React from "react";
import { motion } from "framer-motion";

function Zapper({ children }) {
  const randomDuration = Math.random() * 0.8 + 0.1;
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: randomDuration }}>
      {children}
    </motion.div>
  );
}

export default Zapper;
