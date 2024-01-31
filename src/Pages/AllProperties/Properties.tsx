import { Key, useState } from "react";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { GrFormSearch } from "react-icons/gr";
import Property from "./Property";
import "./properties.css";
import useAllProperty from "../../hook/useAllProperty";
import TransitionEffect from "../../Component/TransitionEffect/TransitionEffect";
import useAllPropertyPagination from "../../hook/useAllPropertyPagination";

const Properties = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [allPropertyPagination] = useAllPropertyPagination(
    currentPage,
    itemsPerPage
  );
  const [allProperty, refetch] = useAllProperty();
  const verifiedAllProperty = allProperty.filter(
    (verifiedProperty: { verification_status: string }) =>
      verifiedProperty.verification_status === "verified"
  );
  const verifiedAllPropertyPagination = allPropertyPagination.filter(
    (verifiedProperty: { verification_status: string }) =>
      verifiedProperty.verification_status === "verified"
  );
  console.log(verifiedAllPropertyPagination);
  const [filterType, setFilterType] = useState([]);
  console.log(filterType);
  // TODO : modify the value of count from backend
  const [selectedType, setSelectedType] = useState("");
  const handleSearch = (event: { target: { value: string } }) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);

    if (selectedValue === "") {
      setFilterType(verifiedAllPropertyPagination);
    } else {
      const filteringProprties = verifiedAllPropertyPagination.filter(
        (property: { upazila: string }) =>
          property.upazila
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
      );
      setFilterType(filteringProprties);
    }
    refetch();
  };
  // const count = allProperties.length;
  const count = verifiedAllProperty.length;
  if (count > 100) {
    setItemsPerPage(18);
  }
  console.log(count);
  // const itemsPerPage = 9;
  const totalPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(totalPage).keys()];
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      {" "}
      <div className="py-24">
        <div>
          <SectionTitle first="All" second="Properties"></SectionTitle>
          <TransitionEffect></TransitionEffect>
          <div className="md:px-20 py-3 flex justify-end items-center max-w-7xl mx-auto">
            {/* <div>
                    <p className="text-sm text-gray-500 py-2">Price</p>
                    <button className="px-3 py-1 rounded-full text-white font-bold bg-[#EB6753]" onClick={() => setSort(!sort)}>{sort ? 'See High to Low' : 'See Low to High'}</button>
                </div> */}
            <div className="flex justify-end items-center">
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
          </div>
          <div className="max-w-7xl mx-auto p-4 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
            {filterType.length ? (
              <>
                {filterType.map(
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
              </>
            ) : (
              <>
                {verifiedAllPropertyPagination.map(
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
              </>
            )}
          </div>
          <h2>Current page: {currentPage}</h2>
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
