import { useState } from "react";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({ base: "", toppings: [] });
  const [currentPage, setCurrentPage] = useState("base");

  return (
    <div className="App">
      {currentPage === "base" && (
        <Base data={data} setData={setData} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "toppings" && (
        <Toppings
          data={data}
          setData={setData}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "order" && (
        <Order data={data} setData={setData} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}
