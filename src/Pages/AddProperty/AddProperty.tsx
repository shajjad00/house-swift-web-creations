import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Component/SectionTitle/SectionTitle.js";

type Inputs = {
  name: string;
  location: string;
  price : number;
  image: string;
  propertyRent: number;
  availableQuantity: number;
  description: string;
  agent_email : string;
  agent_name : string;
};

const AddProperty = () => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const handleAddProperty: SubmitHandler<Inputs> = (propertyData) => {
    console.log(propertyData);

    axios
      .post("http://localhost:3000/property", propertyData)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="py-8 md:px-20 mt-24">
            <Helmet>
                <title>House Swift | Add Property</title>
            </Helmet>
            <div className="mb-6">
                <SectionTitle first="Add" second="Property"></SectionTitle>
            </div>

            <form onSubmit={handleSubmit(handleAddProperty)} className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input {...register("name")} type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#09BE51] focus:outline-none focus:ring-0 focus:border-[#09BE51] peer" placeholder=" " required />
                    <label htmlFor="Property Title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#09BE51] peer-focus:dark:text-[#09BE51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input {...register("location")} type="text" name="location" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#09BE51] focus:outline-none focus:ring-0 focus:border-[#09BE51] peer" placeholder=" " required />
                    <label htmlFor="Location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#09BE51] peer-focus:dark:text-[#09BE51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                </div>
                </div>
                <div className="">
                    <div className="relative z-0 w-full mb-5 group">
                        <input {...register("price")} type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="min_price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#09BE51] focus:outline-none focus:ring-0 focus:border-[#09BE51] peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#09BE51] peer-focus:dark:text-[#09BE51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Min - Price</label>
                    </div>

                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input {...register("agent_email")} type="email" name="agent_email" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#09BE51] focus:outline-none focus:ring-0 focus:border-[#09BE51] peer" placeholder=" " defaultValue="{user?.email}" readOnly />
                        <label htmlFor="agent_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#09BE51] peer-focus:dark:text-[#09BE51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Agent Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input {...register("agent_name")} type="text" name="agent_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#09BE51] focus:outline-none focus:ring-0 focus:border-[#09BE51] peer" placeholder=" " defaultValue='{user?.displayName}' readOnly />
                        <label htmlFor="agent_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#09BE51] peer-focus:dark:text-[#09BE51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Agent name</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-1 md:gap-6">

                    <div className="relative z-0 w-full mb-5 group">
                        <textarea {...register("description")} name="desc" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#09BE51] focus:outline-none focus:ring-0 focus:border-[#09BE51] peer" placeholder=" " required />
                        <label htmlFor="agent_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#09BE51] peer-focus:dark:text-[#09BE51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="property_Image">Property Image</label>
                    <input  {...register("image")} name="image" className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file" />
                </div>
                <button type="submit" className="w-full font-semibold border bg-[#09BE51] hover:border hover:border-[#09BE51] hover:bg-transparent duration-300 hover:text-[#09BE51] text-white my-2 p-2 text-center ">
              Add Property
            </button>
                
            </form>
            <p>{ }</p>

        </div>
  );
};

export default AddProperty;
