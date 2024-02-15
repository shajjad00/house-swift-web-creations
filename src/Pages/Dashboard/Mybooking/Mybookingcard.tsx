
const Mybookingcard = ({singelbooking}) => {
    const {image,name}=singelbooking;





    return (
    <>
    <div className="flex flex-col md:flex-row md:justify-between md:items-center"></div><div className="mt-8">
            <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
                <div className="flex-shrink-0">
                    <img
                          src={image}
                        alt="Product image"
                        className="w-32 h-32 object-cover" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="mt-2 text-gray-600"></p>
                    <div className="mt-4 flex items-center">
                        <span className="ml-auto font-bold"> Price: {}</span>

                    </div>
                    <div className="mt-4 flex items-center">
                        <span className="ml-auto font-bold">Booking Date:{}</span>
                    </div>

                    {/* <div className="flex justify-between">
                        <button
                            onClick={() => handleEdit(_id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Edit Date
                        </button>
                        <button
                            onClick={() => handelCencel(_id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Cencel
                        </button>
                    </div> */}
                </div>
            </div>
            {/* You can repeat the above structure for multiple products */}
        </div></>
    );
};

export default Mybookingcard;