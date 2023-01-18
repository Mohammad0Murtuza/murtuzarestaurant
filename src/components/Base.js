import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const ContainerVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
      },
    },
  };

  const ChildrenVariants = {
    hover: {
      scale: 1.3,
      originX: 0,
      color: "#f8e112",
    },
    visible: {
      transition: {
        type: "spring",
        stiffness: 30000,
      },
    },
  };

  const ButtonVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
    },
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
      className="base container"
      variants={ContainerVariants}
      initial="hidden"
      animate="visible">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              variants={ChildrenVariants}
              whileHover="hover">
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
              variants={ButtonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover">
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Base;
