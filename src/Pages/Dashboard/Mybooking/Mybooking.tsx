import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import axios from "axios";
import Mybookingcard from "./Mybookingcard";
import Swal from "sweetalert2";

const Mybooking = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:4000/mybooking?email=${user.email}`;

    useEffect(() => {

        axios.get(url)
        .then(res=>{
          setBookings(res.data)
        })
      
      }, [url,bookings, user]);
    

console.log(bookings)



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
      fetch(`http://localhost:4000/mybooking/${id}`, {
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
            const remaining =bookings.filter(booking=>booking._id==id);
            setBookings(remaining)
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











    return (
<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {bookings.map((singelbooking) => (
        <Mybookingcard
          key={bookings._id}
          singelbooking={singelbooking}
          handelCencel={handelCencel}
        ></Mybookingcard>
      ))}
    </div>
    );
};

export default Mybooking;