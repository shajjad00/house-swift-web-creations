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
          <img className="w-full h-72" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="text-2xl font-medium">{name}</h2>
            <h2>
              <span className="text-lg">Location:</span> {location}
            </h2>
            <h2>
              <span className="text-lg">quantity:</span> {available_quantity}
            </h2>
            <h2>
              <span className="text-lg">Price:</span> {rent_price}
            </h2>
            <h2 className="text-lg">{description}</h2>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Popular;
