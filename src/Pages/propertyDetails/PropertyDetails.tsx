import { Helmet } from "react-helmet-async";
import Button from "../../Component/Button/Button";
import { useEffect } from "react";
import { motion } from "framer-motion"
import { useLoaderData } from "react-router";

type PopularProps = {
  property: {
    name: string;
    upazila: string;
    district: string;
    description: string;
    available_date: string;
    rent_price: number;
    available_quantity: string;
    image: string;
    bedroom: number;
    bathroom: number;
    area: number;
    agent_name: string;
    agent_image: string;
  };
};

const PropertyDetails = () => {
  useEffect(()=>{window.scrollTo(0,0)},[])
  const propertyDetails = useLoaderData();
  const {
    name,
    upazila,
    district,
    image,
    rent_price,
    available_quantity,
    bedroom,
    bathroom,
    area,
    available_date,
    agent_name,
    agent_image,
    description
  } = propertyDetails || {};

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className="card card-compact shadow-xl"
      >
      <div className="max-w-7xl mx-auto mt-20 my-8 md:px-20 py-8">
            <Helmet>
                <title>House Swift | Property Details</title>
            </Helmet>
            <div className="flex gap-10">
                <div className="w-4/6">
                    <div style={{ height: '560px' }} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <img className="p-5 rounded-t-lg w-full h-[400px]" src={image} alt="product image" />
                        </div>
                        <div className="px-5 pb-5">
                            <div className="flex justify-between items-start mr-3">
                            <div>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                <h3 className="text-sm text-gray-600">{upazila}, {district}</h3>
                            </div>
                            <h3 className="font-semibold text-gray-500">Bedroom - {bedroom}</h3>
                            <h3 className="font-semibold text-gray-500">Bathroom - {bathroom}</h3>
                            <h3 className="font-semibold text-gray-500">Area - {area} sq/ft</h3>
                            </div>
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <span className="bg-blue-100 text-[#EB6753] text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#EB6753] ms-3">5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-bold text-gray-900 dark:text-white">${rent_price}</span>
                                <Button>Add To Wishlist</Button>
                            </div>
                        </div>

                    </div>
                    <div className="shadow rounded-lg w-full mt-8 p-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-bold">Reviews (9+)</h3>
                            <Button>Review</Button>
                            {/* <!-- Modal toggle --> */}
                            
                        </div>
                        <div>
                            {/* each */}
                            <div className="py-8 border-b-2 border-gray-400">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img className="w-12 h-12 rounded-full" src={image} alt="" />
                                        <div>
                                            <h2 className="font-semibold">Soyeb Suvo</h2>
                                            <h3 className="text-sm text-gray-500">04/05/3009</h3>
                                        </div>
                                    </div>
                                    <div>
                                        ratings
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas debitis natus repellendus consequuntur error veniam illum inventore commodi. Molestias, autem. Labore ducimus animi ipsam impedit praesentium quas eligendi quo vel, sunt ullam. Culpa quis odio pariatur, nobis veniam mollitia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side Menu */}
                <div className="w-2/6">
                    <div className="bg-white shadow px-4 py-5 rounded-lg">
                        <h2 className="text-2xl font-bold pb-4">Get More Information</h2>
                        <div className="flex items-center gap-5 mb-4">
                            <img className="w-14 h-14 rounded-full" src={agent_image} alt="" />
                            <div>
                                <h3 className="font-bold">{agent_name}</h3>
                                <p>+88909***876</p>
                            </div>
                        </div>
                        <div>
                            <button className="uppercase w-full border border-[#09BE51] bg-[#09BE51] hover:bg-transparent text-white py-1 text-lg px-6 hover:border hover:border-[#09BE51] hover:text-[#09BE51] duration-300 cursor-pointer">Contact Agent</button>
                        </div>
                    </div>
                    <div className="p-4 shadow rounded-lg mt-5">
                        <h3 className="text-xl font-bold py-3">Property Description</h3>
                        <p className="text-sm text-gray-600">{description}</p>
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </>
  );
};

export default PropertyDetails;
