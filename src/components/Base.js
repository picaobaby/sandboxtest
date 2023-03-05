import { motion } from "framer-motion";

const bases = ["base one", "base two", "base three", "base four"];

const ulVariants = {
  hide: { x: -100 },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
      // staggerDirection: -1,
      // when: 'beforeChildren',
      // repeat: Infinity,
    }
  },
  exit: { opacity: 0 }
};

const liVariants = {
  hide: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      // repeat: Infinity,
      // repeatType: 'reverse',
      // repeatDelay: .1,
      type: "spring",
      // ease: [0.17, 0.67, 0.83, 0.67],
      east: "eastInOut"
    }
  },
  exit: { opacity: 0 }
};

export default function Base({ data, setData, setCurrentPage }) {
  const onNextClick = () => {
    setCurrentPage("toppings");
  };

  const onSelectBase = (base) => {
    setData({ ...data, base: base });
  };

  return (
    <>
      <motion.ul
        variants={ulVariants}
        initial="hide"
        animate="show"
        className="base"
      >
        {bases.map((base) => (
          <motion.li
            key={base}
            variants={liVariants}
            onClick={() => onSelectBase(base)}
          >
            {base}
          </motion.li>
        ))}
      </motion.ul>
      {data.base && <button onClick={onNextClick}>Next</button>}
    </>
  );
}
