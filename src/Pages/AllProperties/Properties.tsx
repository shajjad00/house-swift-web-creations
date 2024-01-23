// import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
// import Popular from "./Popular";
import { useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { GrFormSearch } from 'react-icons/gr';
import Property from "./Property";

const Properties = () => {
  const [allProperties, setAllProperties] = useState([])
  useEffect(() => {
    fetch("./allproperties.json")
      .then((res) => res.json())
      .then(data => setAllProperties(data))
  }, [])
  return (
    <div className="py-24">
      <div>
        <SectionTitle first="All" second="Properties"></SectionTitle>
        <div className="md:px-20 py-3 flex justify-end items-center max-w-7xl mx-auto">
                {/* <div>
                    <p className="text-sm text-gray-500 py-2">Price</p>
                    <button className="px-3 py-1 rounded-full text-white font-bold bg-[#EB6753]" onClick={() => setSort(!sort)}>{sort ? 'See High to Low' : 'See Low to High'}</button>
                </div> */}
                <div className="flex justify-end items-center">
                    <input className="px-2 py-2 w-56 border-2 border-gray-500 rounded-lg" type="text" name="item" id="item" placeholder="Search Location..." />
                    <span className="absolute mr-1"><GrFormSearch className="text-black text-3xl"></GrFormSearch></span>
                </div>
            </div>
        <div className="max-w-7xl mx-auto p-4 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
          {allProperties.map((property, idx) => (
            <Property key={idx} property={property}></Property>
          ))}
        </div>
        {/* <div className="flex justify-center mb-3">
          <button className="uppercase border border-[#09BE51] bg-[#09BE51] hover:bg-transparent text-white py-1 text-lg px-6 hover:border hover:border-[#09BE51] hover:text-[#09BE51] duration-300 cursor-pointer">
            See All
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Properties;
