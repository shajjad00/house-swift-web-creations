import { useForm } from "react-hook-form";

type allData = {
  arrivalDate: string;
  outgoingDate: string;
  roomSelector: string;
  personSelector: string;
  location: string;
};

const Search = () => {
  const {
    register,
    handleSubmit,
  } = useForm<allData>(); 

  const onSubmit = (data: allData) => {
// logic ay khane likte hobbe ...
    console.log("=============>",data);
  };

  return (
    <div>
      <section className="mt-8 lg:mt-0">
        <div className="bg-teal-500 text-white">
          <div className= " max-w-7xl mx-auto px-16">
            <div className="flex flex-col items-center py-10 text-center lg:py-20">
              <div className="w-full">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                    Looking for a solution?
                  </h2>
                  <p className="text-lg lg:text-xl opacity-80">
                   Search your House
                  </p>
                </div>
                <div className="relative">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                      <div>
                        <p className="md:text-left text-center uppercase">
                          Arrival Date
                        </p>
                        <input
                          type="date"
                          {...register("arrivalDate", { required: true })}
                          className="p-4 bg-white w-full text-gray-600 border
                         border-gray-300  focus:outline-none focus:ring 
                        focus:border-blue-300"
                        />
                      </div>
                      <div>
                        <p className="md:text-left text-center uppercase">
                          Outgoing Date
                        </p>
                        <input
                          type="date"
                          {...register("outgoingDate", { required: true })}
                          className="p-4 w-full bg-white text-gray-600 border
                         border-gray-300  focus:outline-none focus:ring 
                        focus:border-blue-300"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <label
                          htmlFor="roomSelector"
                          className="uppercase block"
                        >
                          Rooms
                        </label>
                        <select
                          id="roomSelector"
                          {...register("roomSelector", { required: true })}
                          className="p-4 w-full bg-white text-gray-600 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                        >
                          <option value="1">1 Room</option>
                          <option value="2">2 Rooms</option>
                          <option value="3">3 Rooms</option>
                          <option value="4">4 Rooms</option>
                          <option value="5">5 Rooms</option>
                        </select>
                      </div>

                      <div>
                        <p className="md:text-left text-center uppercase">
                        location
                        </p>
                        <input
                          type="text"
                          placeholder="search your location"
                          {...register("location", { required: true })}
                          className="p-4 bg-white w-full text-gray-600 border
                         border-gray-300  focus:outline-none focus:ring 
                        focus:border-blue-300"
                        />
                      </div>


                      <div className="md:col-span-1">
                        <button
                          type="submit"
                          className="p-4 hover:bg-transparent hover:text-[#09BE51] w-full text-white bg-[#09BE51] mt-[23px] border
                          border-gray-300  focus:outline-none focus:ring 
                         focus:border-blue-300"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;