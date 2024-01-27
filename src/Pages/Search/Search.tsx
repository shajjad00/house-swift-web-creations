import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAllProperty from "../../hook/useAllProperty";
import { useState } from "react";

type allData = {
  arrivalDate: string;
  outgoingDate: string;
  bedroom: string;
  location: string;
};

export const Search = () => {
  const [allProperty] = useAllProperty();
  console.log(allProperty);
  const [searching, setSearching] = useState([]);
  const naviGtae = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm<allData>();
  console.log(searching);

  const onSubmit = (data: allData) => {
    const filterLoaction = allProperty?.filter((item: { location: string }) =>
      item?.location?.toLowerCase().includes(data?.location.toLowerCase())
    );
    if (filterLoaction?.length <= 0) {
      toast("No room available in this loaction");
      return;
    }
    const roomFilter = filterLoaction?.filter(
      (item: { bedroom: number }) => item?.bedroom === Number(data?.bedroom)
    );

    if (roomFilter?.length <= 0) {
      toast("Your selected room is not available in this loaction");
      return;
    }
    setSearching(roomFilter);

    const arrivalDate = data.arrivalDate;
    const outgoingDate = data.outgoingDate;
    const bedroom = data.bedroom;
    const location = data.location;
    const addAvailableProperty = {
      arrivalDate,
      outgoingDate,
      bedroom,
      location,
    };
    console.log(addAvailableProperty);
    axiosPublic.post("/availableProperty", addAvailableProperty).then((res) => {
      // if (res.data.insertedId) {
      //   Swal.fire({
      //     position: "top",
      //     icon: "success",
      //     title: "Searching Property added  successfully",
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
      // }
      naviGtae("/searchingProperty");
      console.log(res.data);
    });
  };

  return (
    <>
      <div>
        <section className="-mt-2">
          <div className="bg-teal-500 text-white">
            <div className=" max-w-7xl mx-auto px-16">
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
                            id="bedroom"
                            {...register("bedroom", { required: true })}
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
        <ToastContainer />
      </div>
    </>
  );
};
