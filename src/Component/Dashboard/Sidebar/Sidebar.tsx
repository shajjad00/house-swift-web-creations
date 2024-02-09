import React, { useContext, useState } from "react";
import MenuItem from "../MenuItem";

import { GrLogout } from "react-icons/gr";
import { FcHome } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import {
  FaBookmark,
  FaRegHeart,
  FaUsers,
  FaRegWindowClose,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsHouseAddFill, BsHouseAdd, BsFillHouseFill } from "react-icons/bs";
import { GiHouseKeys } from "react-icons/gi";
import { FaHouseCircleExclamation } from "react-icons/fa6";

import logo from "../../../assets/images/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { GiStarsStack } from "react-icons/gi";
import useAdmin from "../../../hook/useAdmin";
import useAgent from "../../../hook/useAgent";


const Sidebar: React.FC = () => {
  const [isActive, setActive] = useState(!true);
  const { logOut }: { logOut: () => Promise<void> } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isAgent] = useAgent();

  // logOut from page
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-white text-gray-800 flex justify-end md:hidden">
        <button
          onClick={handleToggle}
          className="mobile-menu-button bg-white p-4 focus:outline-none"
        >
          {isActive ? (
            <AiOutlineBars className="h-7 w-7" />
          ) : (
            <FaRegWindowClose className="h-7 w-7" />
          )}
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between min-h-screen overflow-x-hidden bg-[#14b7a5] shadow-xl w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive ? "-translate-x-full" : "md:translate-x-0"
        } transition duration-200 ease-in-out`}

      >
        <div>
          {/* Nav Items */}
          <div>
              <img className="w-44" src={logo} alt="" />
            </Link>
          </div>

          <br />
          <hr />
          <div className='flex flex-col justify-between flex-1'>
            {/* If a user is a host */}
            <nav>
              {/* admin dashboard */}


              {/* <MenuItem icon={CgProfile} label='Admin Profile' address='/dashboard' />
              <MenuItem icon={BsHouseAddFill} label='Manage Properties' address='/dashboard/addProperty' />
              <MenuItem icon={FaUsers} label='Manage Users' address='/dashboard/manageUsers' /> */}
              {/* tour guide dashboard */}
              {/* tourist dash board */}

              {
                isAdmin ? <>
                  <MenuItem
                icon={CgProfile}
                label="Admin Profile"
                address="/dashboard"
              />
              <MenuItem
                icon={FaUsers}
                label="Manage Users"
                address="/dashboard/manageUsers"
              />
              <MenuItem
                icon={BsHouseAddFill}
                label="Manage Properties"
                address="/dashboard/manageProperties"
              />
              <MenuItem
                icon={GiStarsStack}
                label="Reviews"
                address="/dashboard/manageReviews"
              />
                </> :
                  isAgent ?  <>
                  <MenuItem
                    icon={CgProfile}
                    label="My Profile"
                    address="/dashboard"
                  />
                  <MenuItem
                    icon={BsFillHouseFill}
                    label="My Added Properties"
                    address="/dashboard/property"
                  />
                  <MenuItem
                    icon={BsHouseAdd}
                    label="Add Properties"
                    address="/dashboard/addProperty"
                  />
                  <MenuItem
                    icon={GiHouseKeys}
                    label="My Rented Properties"
                    address="/dashboard/rentedProperty"
                  />
                  <MenuItem
                    icon={FaHouseCircleExclamation}
                    label="My Requested Properties"
                    address="/dashboard/requestedProperty"
                  />
                </>
                    :
                    <>
                      <MenuItem
                        icon={CgProfile}
                        label='My Profile'
                        address='/dashboard'
                      />
                      <MenuItem
                        icon={FaBookmark}
                        label='My Bookings'
                        address='/dashboard/bookings'
                      />
                      <MenuItem
                        icon={FaRegHeart}
                        label='My Wishlist'
                        address='/dashboard/wishlist'
                      />
                    </>
              }
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <MenuItem
            icon={FcHome}
            label="Home"
            address="/"
          />
          <button
            className="flex w-full items-center px-4 py-2 my-3 text-white hover:bg-gray-200 rounded hover:text-gray-700 transition-colors duration-300 transform"
            onClick={handleLogOut}
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
