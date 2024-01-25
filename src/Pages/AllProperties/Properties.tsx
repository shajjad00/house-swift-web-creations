// import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
// import Popular from "./Popular";
import { useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { GrFormSearch } from 'react-icons/gr';
import Property from "./Property";
import './properties.css'

const Properties = () => {
    const [currentPage , setCurrentPage] = useState(0)
    // TODO : modify the value of count from backend
    const [allProperties, setAllProperties] = useState([])
    // const count = allProperties.length;
    const count = 50;
    const foodPerPage = 9;
    const totalPage = Math.ceil(count / foodPerPage);
    const pages = [...Array(totalPage).keys()]
  useEffect(() => {
    fetch("./allproperties.json")
      .then((res) => res.json())
      .then(data => setAllProperties(data))
  }, [])
  const handlePrev = () => {
    if(currentPage > 0){
        setCurrentPage(currentPage - 1)
    }
}
const handleNext = () => {
    if(currentPage < totalPage - 1){
        setCurrentPage(currentPage + 1)
    }
}
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
        <div className="text-center pt-2">
                
                <button onClick={handlePrev} className="px-4 py-2 rounded-sm mr-2 bg-[#fca1296b] hover:text-white hover:bg-[#FCA129] duration-300">Prev</button>
                {
                    pages?.map(page => <button onClick={() => setCurrentPage(page)} className={`px-4 py-2 rounded-sm mr-2 my-1 bg-orange-100 hover:bg-[#FCA129] duration-300 ${currentPage === page ? 'selected' : undefined}`} key={page}>{page + 1}</button>)
                }
                <button onClick={handleNext} className="px-4 py-2 rounded-sm mr-2 bg-[#fca1296b] hover:text-white hover:bg-[#FCA129] duration-300">Next</button>
            </div>
      </div>
    </div>
  );
};

export default Properties;
