import { motion } from "framer-motion";

const toppings = ["apple", "orange", "pear", "peach", "red pepper"];

export default function Toppings({ data, setData, setCurrentPage }) {
  const onNextClick = () => {
    setCurrentPage("order");
  };

  const onPrevClick = () => {
    setCurrentPage("base");
  };

  const addTopping = (topping) => {
    let newToppings = [];

    if (!data.toppings.includes(topping)) {
      newToppings = [...data.toppings, topping];
    } else {
      newToppings = data.toppings.filter((item) => item !== topping);
    }

    setData({ ...data, toppings: newToppings });
  };

  return (
    <>
      <ul className="toppings">
        {toppings.map((topping) => (
          <motion.li
            key={topping}
            onClick={() => addTopping(topping)}
            className={data.toppings.includes(topping) ? "selected" : ""}
          >
            {topping}
          </motion.li>
        ))}
      </ul>
      <button onClick={onPrevClick}>Prev</button>
      {data.toppings.length > 0 && <button onClick={onNextClick}>Next</button>}
    </>
  );
}
