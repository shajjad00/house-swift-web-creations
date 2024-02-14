import { Key, useContext, useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import { GrFormSearch } from "react-icons/gr";
import Property from "./Property";
import "./properties.css";
import useAllProperty from "../../hook/useAllProperty";
import TransitionEffect from "../../Component/TransitionEffect/TransitionEffect";
import useAllPropertyPagination from "../../hook/useAllPropertyPagination";
import Recommendation from "./Recommendation";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Properties = () => {
  const [allProperty, refetch] = useAllProperty();
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(0);
  const [recommendationText, setRecommendationText] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [propertyPerPage] = useAllPropertyPagination(
    currentPage,
    itemsPerPage,
    selectedType
  );
  const { searchText, showText, setShowText } = useContext(AuthContext);

  const handleSearch = (event: { target: { value: string } }) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);
    setShowText(true);
    if (selectedValue.length > 0) {
      axios
        .get(
          `https://house-swift-web-creations-server-sandy.vercel.app/recommendation?searchData=${selectedValue}`
        )
        .then((res) => {
          setRecommendationText(res.data);
        });
    }
    refetch();
  };
  const count = allProperty.length;
  const totalPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(totalPage).keys()];

  const handlePrev = () => {
    if (currentPage + 1 === 1) {
      setCurrentPage(totalPage - 1);
    }
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    // refetch();
  };
  const handleNext = () => {
    if (currentPage + 1 === totalPage) {
      setCurrentPage(0);
    }
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
    }
    // refetch();
  };

  useEffect(() => {
    setSelectedType(searchText);
  }, [searchText]);

  return (
    <>
      <div className="py-24">
        <div>
          <SectionTitle first="All" second="Properties"></SectionTitle>
          <TransitionEffect></TransitionEffect>
          <div className="md:px-20  py-3 flex flex-col justify-end items-center max-w-7xl mx-auto">
            <div className="flex justify-end relative items-center">
              <input
                className="px-2 py-2 w-56 border-2 border-gray-500 rounded-lg"
                type="text"
                name="item"
                id="item"
                placeholder="Search Upazila..."
                onChange={handleSearch}
                value={selectedType}
              />
              <span className="absolute mr-1">
                <GrFormSearch className="text-black text-3xl"></GrFormSearch>
              </span>
            </div>
            {selectedType && showText && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 }}
                className="bg-gray-300 rounded-md z-20 absolute top-56 mt-5 w-56 block"
              >
                {recommendationText.map((item) => {
                  return <Recommendation item={item}></Recommendation>;
                })}
              </motion.div>
            )}
          </div>
          <div className="max-w-7xl mx-auto p-4 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
            {propertyPerPage.map(
              (
                property: {
                  _id: string;
                  name: string;
                  upazila: string;
                  district: string;
                  available_date: string;
                  description: string;
                  rent_price: number;
                  available_quantity: string;
                  image: string;
                  bedroom: number;
                  bathroom: number;
                  area: number;
                  agent_name: string;
                  agent_image: string;
                },
                idx: Key | null | undefined
              ) => (
                <Property key={idx} property={property}></Property>
              )
            )}
          </div>
          <div className="text-center pt-2">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-sm mr-2 bg-[#fca1296b] hover:text-white hover:bg-[#FCA129] duration-300"
            >
              Prev
            </button>
            {pages?.map((page) => (
              <button
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-sm mr-2 my-1 bg-orange-100 hover:bg-[#FCA129] duration-300 ${
                  currentPage === page ? "selected" : undefined
                }`}
                key={page}
              >
                {page + 1}
              </button>
            ))}
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-sm mr-2 bg-[#fca1296b] hover:text-white hover:bg-[#FCA129] duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Properties;
