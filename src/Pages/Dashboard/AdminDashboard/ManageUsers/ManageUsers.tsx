import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import { TiDocumentDelete } from "react-icons/ti";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import useUsersInfo from "../../../../hook/useUsersInfo";
import { FaUsers } from "react-icons/fa";

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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
    <>
      <div className="border p-2 text-2xl font-bold shadow-xl rounded-lg">
        Total User: {usersInfo.length}
      </div>
      <div className="overflow-x-auto">
        <TableContainer className="mt-10" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <span className="text-xl font-semibold text-black">ID</span>
                </TableCell>
                <TableCell>
                  <span className="text-xl font-semibold text-black">Name</span>
                </TableCell>
                <TableCell align="left">
                  <span className="text-xl font-semibold text-black">
                    Email
                  </span>
                </TableCell>
                <TableCell align="left">
                  <span className="text-xl font-semibold text-black">Role</span>
                </TableCell>

                <TableCell align="left">
                  <span className="text-xl font-semibold text-black">
                    Delete
                  </span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersInfo
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user: UserInfo, index: number) => (
                  <TableRow
                    key={user._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <span>{user.email}</span>
                    </TableCell>
                    <TableCell component="th" scope="row">
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
                          className="btn btn-lg text-2xl  hover:bg-green-500 text-white ml-4"
                        >
                          <FaUsers></FaUsers>
                        </button>
                      )}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="btn btn-lg text-2xl hover:bg-red-500 text-white"
                      >
                        <TiDocumentDelete />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={usersInfo.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </>
  );
};

export default ManageUsers;
