import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import axios from "axios";
import Mybookingcard from "./Mybookingcard";

const Mybooking = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:4000/mybooking?email=${user.email}`;

    useEffect(() => {

        axios.get(url)
        .then(res=>{
          setBookings(res.data)
        })
      
      }, [url, user]);
    

console.log(bookings)












    return (
<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {bookings.map((singelbooking) => (
        <Mybookingcard
          key={bookings._id}
          singelbooking={singelbooking}
        ></Mybookingcard>
      ))}
    </div>
    );
};

export default Mybooking;