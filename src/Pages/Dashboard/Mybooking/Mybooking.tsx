/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import axios from "axios";
import Mybookingcard from "./Mybookingcard";
import Swal from "sweetalert2";

const Mybooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);


  const url = `https://house-swift-web-creations-server-sandy.vercel.app/mybooking?email=${user.email}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setBookings(res.data);
    });
  }, [url, user]);

  const calculateTotalAmount = () => {
    return bookings.reduce((total, booking : { rent_price : string}) => {
      return total + parseInt(booking?.rent_price);
    }, 0);
  };

  const handelCencel = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://house-swift-web-creations-server-sandy.vercel.app/mybooking/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your booking has been canceled.",
                "success"
              );
              const remaining = bookings.filter(
                (booking : { _id : any}) => booking._id !== id
              );
              setBookings(remaining);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire(
              "Error",
              "An error occurred while canceling the booking.",
              "error"
            );
          });
      }
    });
  };

  const totalAmount = calculateTotalAmount();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {bookings.map((singelbooking : { _id : any}) => (
          <Mybookingcard
            key={singelbooking._id}
            singelbooking={singelbooking}
            handelCencel={handelCencel}
          />
        ))}
      </div>
<div className="my-10 flex mx-auto">
<button  className="uppercase w-fit border border-[#09BE51] bg-[#09BE51] hover:bg-transparent text-white py-1 text-lg px-6 md:ml-8 hover:border hover:border-[#09BE51] hover:text-[#09BE51] duration-300 cursor-pointer">{`Pay now - Total Amount: $${totalAmount}`}</button>

</div>
    </div>
  );
};

export default Mybooking;
