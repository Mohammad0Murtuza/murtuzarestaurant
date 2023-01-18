import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContainerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 1,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};
const ChildrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 5000);
  return (
    <motion.div
      className="container order"
      variants={ContainerVariants}
      initial="hidden"
      animate="visible">
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: "-100vw" }}>
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>
      <p>You ordered a {pizza.base} pizza with:</p>
      <motion.div variants={ChildrenVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
