import React from "react";

export default function Order({ data, setData, setCurrentPage }) {
  const onNextClick = () => {
    setCurrentPage("base");
    setData({ ...data, base: "", toppings: [] });
  };

  const onPrevClick = () => {
    setCurrentPage("toppings");
  };

  return (
    <div>
      <h3>Order Page</h3>
      <button onClick={onPrevClick}>Prev</button>
      {data.toppings.length > 0 && <button onClick={onNextClick}>Next</button>}
    </div>
  );
}
