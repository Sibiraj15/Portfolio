import React from 'react';
import { FaGithub, FaFigma } from 'react-icons/fa';
import { SiPostman, SiVercel } from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

// Custom VS Code icon (using an SVG)
const VsCodeIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" 
    alt="VS Code" 
    className="w-20 h-20" 
  />
);

const Tools = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Development Tools
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <VsCodeIcon />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <FaGithub className="text-7xl text-blue" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
          <SiPostman className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
          <FaFigma className="text-7xl text-pink-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(7)} className="p-4">
          <SiVercel className="text-7xl text-green" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tools;
