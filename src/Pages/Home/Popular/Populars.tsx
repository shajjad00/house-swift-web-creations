import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import Popular from "./Popular";
import { useEffect, useState } from "react";

const Populars = () => {
  const [popularsData, setPopularsData] = useState([])
  useEffect(() => {
    fetch("./properties.json")
      .then((res) => res.json())
      .then(data => setPopularsData(data))
  }, [])
  return (
    <div>
      <div>
        <SectionTitle first="Best" second="Selling"></SectionTitle>
        <div className="max-w-7xl mx-auto p-4 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
          {popularsData.map((popular, idx) => (
            <Popular key={idx} popular={popular}></Popular>
          ))}
        </div>
        <div className="flex justify-center mb-3">
          <button className="uppercase border border-[#09BE51] bg-[#09BE51] hover:bg-transparent text-white py-1 text-lg px-6 hover:border hover:border-[#09BE51] hover:text-[#09BE51] duration-300 cursor-pointer">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Populars;
