import { FC, MouseEvent } from "react";
import { FaTrash } from "react-icons/fa";
import useAllProperty from "../../../../hook/useAllProperty";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import { GrDocumentUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";

interface Property {
  _id: string;
  name: string;
  role: string;
  rent_price: number;
  district: string;
  image: string;
}

const ManageProperties: FC = () => {
  const [allProperty, refetch] = useAllProperty();

  const axiosPublic = useAxiosPublic();
  console.log(allProperty);

  // deleted users
  const handleDeleteProperty =
    (property: Property) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/properties/${property._id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${property.name} has been deleted.`,
                icon: "success",
              });
            }
          });
        }
      });
    };

  return (
    <div>
      ManageProperties:{allProperty.length}
      <div>
        <div className="flex justify-evenly items-center my-4 border-b-2 pb-5">
          <h2
            className="text-3xl border px-12 py-2 
         hover:border-red-400 text-blue-500 font-bold"
          >
            All Property
          </h2>
          <h2
            className="text-3xl border px-12 py-2 
         hover:border-red-400 font-bold text-blue-500"
          >
            Total Properties: {allProperty.length}
          </h2>
          <h2
            className="text-3xl  px-12 py-2 
         hover:border-red-400 text-blue-500 font-bold"
          >
            Add Property
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Property Name</th>
                <th>Role</th>
                <th>rent_price</th>
                <th>Location</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allProperty.map((property: Property, index: number) => (
                <tr key={property._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-12"
                      src={property.image}
                      alt={property.name}
                    />
                  </td>
                  <td>{property.name}</td>
                  <td>{property.role}</td>
                  <td>{property.rent_price}</td>
                  <td>{property.district}</td>
                  <td>
                    <Link to="/addProperty">
                      <button className="btn btn-ghost btn-lg hover:bg-red-500 text-white">
                        <GrDocumentUpdate />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={handleDeleteProperty(property)}
                      className="btn btn-ghost btn-lg hover:bg-red-500 text-white"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ManageProperties;
