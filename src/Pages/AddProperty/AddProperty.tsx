import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type Inputs = {
  name: string;
  location: string;
  imageUrl: string;
  propertyRent: number;
  availableQuantity: number;
  description: string;
};

const AddProperty = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (propertyData) => {
    console.log(propertyData);

    axios
      .post("http://localhost:3000/property", propertyData)
      .then((res) => console.log(res.data));
  };

  return (
    <div className=" min-h-[90vh] mt-24 max-w-6xl mx-auto ">
      <form
        className=" space-y-3 max-w-2xl lg:max-w-4xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Property Name..."
          {...register("name")}
          type="text"
          className=" border focus:outline-none rounded-md border-gray-300 p-2 w-full"
        />
        {errors.name && <span className=" text-red-600">Name is required</span>}
        <input
          placeholder="Location..."
          className=" border border-gray-300 focus:outline-none rounded-md p-2 block w-full"
          type="text"
          {...register("location", { required: true })}
        />
        {errors.location && (
          <span className=" text-red-600">Location is required</span>
        )}
        <input
          placeholder="Image Url . . ."
          type="url"
          className=" border focus:outline-none rounded-md border-gray-300 p-2 block w-full"
          {...register("imageUrl", { required: true })}
        />
        {errors.location && (
          <span className=" text-red-600">Image is required</span>
        )}
        <input
          placeholder="Property Rent . . ."
          type="number"
          className=" border border-gray-300 focus:outline-none rounded-md p-2 block w-full"
          {...register("propertyRent", { required: true })}
        />
        {errors.propertyRent && (
          <span className=" text-red-600">Property Rent is required</span>
        )}
        <input
          placeholder="Available Quantity . . ."
          type="number"
          className=" border border-gray-300 focus:outline-none rounded-md p-2 block w-full"
          {...register("availableQuantity", { required: true })}
        />
        {errors.availableQuantity && (
          <span className=" text-red-600">Available Quantity is required</span>
        )}
        <textarea
          placeholder="Description . . ."
          rows={5}
          className=" border border-gray-300 focus:outline-none rounded-md p-2 block w-full"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className=" text-red-600">Description is required</span>
        )}

        <input
          className="uppercase border border-[#09BE51] bg-[#09BE51] hover:bg-transparent text-white py-1 text-lg px-6 hover:border hover:border-[#09BE51] hover:text-[#09BE51] duration-300 cursor-pointer w-full"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProperty;
