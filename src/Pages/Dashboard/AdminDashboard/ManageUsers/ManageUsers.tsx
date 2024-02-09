import React from "react";
import { FaTrash, FaUsers } from "react-icons/fa";
import useUsersInfo from "../../../../hook/useUsersInfo";
import Swal from "sweetalert2";
import { FaUserEdit } from "react-icons/fa";

import useAxiosPublic from "../../../../hook/useAxiosPublic";
import { Link } from "react-router-dom";

interface UserInfo {
  name: string;
  _id: string;
  lastName: string;
  email: string;
  role: string;
}

const ManageUsers: React.FC = () => {
  const [usersInfo, refetch] = useUsersInfo();
  const axiosPublic = useAxiosPublic();

  // user make admin
  const handleMakeUserToAdmin = (user: UserInfo) => {
    axiosPublic.patch(`/propertyUsers/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  // user make admin
  const handleMakeUserToAgent = (user: UserInfo) => {
    axiosPublic.patch(`/propertyUsers/agent/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // deleted users
  const handleDeleteUser = (user: UserInfo) => {
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
        axiosPublic.delete(`/propertyUsers/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${user.name}has been deleted.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly items-center my-4 border-b-2 pb-5">
        <h2
          className="text-3xl border px-12 py-2 
         hover:border-red-400 text-blue-500 font-bold"
        >
          All Users
        </h2>
        <h2
          className="text-3xl border px-12 py-2 
         hover:border-red-400 font-bold text-blue-500"
        >
          Total Users: {usersInfo.length}
        </h2>
        <h2
          className="text-3xl  px-12 py-2 
         hover:border-red-400 text-blue-500 font-bold"
        >
          Add User
        </h2>
        <Link to="/signUp">
          <FaUserEdit className="text-3xl hover:text-5xl" />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersInfo.map((user: UserInfo, index: number) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeUserToAdmin(user)}
                      className="btn btn-lg text-2xl  hover:bg-green-500 text-white"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                  {user.role === "agent" ? (
                    "Agent"
                  ) : (
                    <button
                      onClick={() => handleMakeUserToAgent(user)}
                      className="btn btn-lg text-2xl  hover:bg-green-500 text-white"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-lg hover:bg-red-500 text-white"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  );
};

export default ManageUsers;
