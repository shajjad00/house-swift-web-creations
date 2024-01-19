import { motion } from "framer-motion";
type PopularProps = {
  popular: {
    name: string;
    location: string;
    description: string;
    rent_price: number;
    available_quantity: string;
    image: string;
  };
};

const Popular = ({ popular }: PopularProps) => {
  const { name, location, image, description, rent_price, available_quantity } =
    popular;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className="card card-compact shadow-xl"
      >
        <figure>
          <img className="w-full h-48" src={image} alt={name} />
        </figure>
        <div className="card-body text-gray-600">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium">{name}</h2>
            <h2>
              <span className="text-sm"><span className="font-semibold">Location:</span></span> {location}
            </h2>
            <div className="flex justify-between pr-3">
            <h2>
              <span className="text-sm"><span className="font-semibold">Quantity:</span></span> {available_quantity}
            </h2>
            <h2>
              <span className="text-sm"><span className="font-semibold">Price:</span></span> {rent_price}/day
            </h2>
            </div>
            <h2 className="text-sm">{description}...</h2>
            <div className="flex justify-end mb-3 pr-2">
              <button className="px-5 py-1 border border-[#09BE51] text-[#09BE51] hover:bg-[#09BE51] hover:text-white duration-300">Details</button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Popular;
