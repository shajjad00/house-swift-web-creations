import { useLoaderData } from "react-router-dom";
import { motion } from 'framer-motion';
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import TransitionEffect from "../../Component/TransitionEffect/TransitionEffect";
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
    const propertyDetails = useLoaderData();
    console.log(propertyDetails)
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
      <div className="mt-24">
      <SectionTitle first={name} second="Details"></SectionTitle>
        <TransitionEffect></TransitionEffect>
       <div className="card w-1/3">

       <figure>
          <img className="w-full h-48" src={image} alt={name} />
        </figure>
        <div className="card-body text-gray-600">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium">{name}</h2>

            <h2>
              <span className="text-sm">
                <span className="font-semibold">Location:</span>
              </span>
              {upazila}, {district}
            </h2>
            <h2>
              <span className="text-sm">
                <span className="font-semibold">Available From:</span>
              </span>
              {available_date}
            </h2>

            <div className="flex justify-between pr-3">
              <h2>
                <span className="text-sm">
                  <span className="font-semibold">Bedroom:</span>
                </span>{" "}
                {bedroom}
              </h2>
              <h2>
                <span className="text-sm">
                  <span className="font-semibold">Bathroom:</span>
                </span>{" "}
                {bathroom}
              </h2>
              <h2>
                <span className="text-sm">
                  <span className="font-semibold">Sq Ft:</span>
                </span>{" "}
                {area}
              </h2>
            </div>
            <div className="flex justify-between pr-3">
              <h2>
                <span className="text-sm">
                  <span className="font-semibold">Quantity:</span>
                </span>{" "}
                {available_quantity}
              </h2>
              <h2 className="text-[#FCA129] font-semibold">
                <span className="text-sm">
                  <span className="font-semibold">Price:</span>
                </span>
                {rent_price}/day
              </h2>
            </div>
            <hr />
            {/* <h2 className="text-sm">{description.slice(0,98)}...</h2> */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 border h-10 rounded-full"
                  src={agent_image}
                  alt="agent_Image"
                />
                <div className="">
                  <h3>Added By</h3>
                  <p>-{agent_name}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
       </div>
      </div>
      </motion.div>
    </>
    );
};

export default PropertyDetails;