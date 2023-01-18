import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

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
      className="toppings container"
      variants={ContainerVariants}
      initial="hidden"
      animate="visible">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              variants={ChildrenVariants}
              whileHover="hover">
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>
      <Link to="/order">
        <motion.button variants={ButtonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
