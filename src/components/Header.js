import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <motion.div
        className="logo"
        drag
        dragConstraints={{
          top: "-100vh",
          left: "-100vw",
          bottom: "100vh",
          right: "100vw",
        }}>
        <svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
        </svg>
      </motion.div>
      <motion.div
        className="title"
        initial={{ y: -200 }}
        animate={{ y: -15 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 140 }}>
        <h1>Restaurant</h1>
      </motion.div>
    </header>
  );
};

export default Header;
