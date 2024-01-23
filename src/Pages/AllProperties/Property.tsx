import { motion } from "framer-motion";

type PopularProps = {
    property: {
        name: string;
        location: string;
        description: string;
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

const Property = ({ property }: PopularProps) => {
    const { name, location, image, rent_price, available_quantity, bedroom, bathroom, area, agent_name, agent_image } = property || {};

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
                                <span className="text-sm"><span className="font-semibold">Bedroom:</span></span> {bedroom}
                            </h2>
                            <h2>
                                <span className="text-sm"><span className="font-semibold">Bathroom:</span></span> {bathroom}</h2>
                            <h2>
                                <span className="text-sm"><span className="font-semibold">Sq Ft:</span></span> {area}</h2>
                        </div>
                        <div className="flex justify-between pr-3">
                            <h2>
                                <span className="text-sm"><span className="font-semibold">Quantity:</span></span> {available_quantity}
                            </h2>
                            <h2 className="text-orange-500 font-semibold">
                                <span className="text-sm"><span className="font-semibold">Price:</span></span> {rent_price}/day
                            </h2>
                        </div>
                        <hr />
                        {/* <h2 className="text-sm">{description.slice(0,98)}...</h2> */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <img className="w-10 border h-10 rounded-full" src={agent_image} alt="agent_Image" />
                                <div className="">
                                    <h3>Added By</h3>
                                    <p>-{agent_name}</p>
                                </div>
                            </div>
                            <button className="px-5 py-1 border border-[#09BE51] text-[#09BE51] hover:bg-[#09BE51] hover:text-white duration-300">Details</button>
                        </div>

                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Property;
