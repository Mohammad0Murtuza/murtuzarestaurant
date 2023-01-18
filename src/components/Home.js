import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const ContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 5,
      },
    },
  };

  const ButtonVariant = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px #fff",
      textShadow: "0px 0px 8px #fff",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };
  return (
    <motion.div
      className="home container"
      variants={ContainerVariant}
      initial="hidden"
      animate="visible">
      <h2>Welcome to Restaurant</h2>
      <Link to="/base">
        <motion.button variants={ButtonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
