import Popular from "./Popular";
import { useEffect, useState } from "react";

const Populars = () => {
const [popularsData, setPopularsData] = useState([])
  useEffect(() => {
    fetch("./properties.json")
    .then((res) => res.json())
    .then(data => setPopularsData(data))
  },[])
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-center mt-20 mb-10">
          <span className="text-green-500">BEST</span> SELLING
        </h1>
        <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {popularsData.map((popular, idx) => (
            <Popular key={idx} popular={popular}></Popular>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Populars;
