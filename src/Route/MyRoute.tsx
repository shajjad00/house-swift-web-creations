import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../Pages/SignIn/SignIn";
import Properties from "../Pages/AllProperties/Properties";
import AddProperty from "../Pages/AddProperty/AddProperty";
import SignUp from "../Pages/SignUp/SignUp";
import SearchingHouses from "../Pages/searchingHouse/SearchingHouses";
import Dashboard from "../Layout/Dashboard";
import Profile from "../Pages/Dashboard/MyProfile";
import PropertyDetails from "../Pages/propertyDetails/PropertyDetails";
import BlogDetails from "../Pages/Home/Blog/BlogDetails";

import MyProperties from "../Pages/Dashboard/MyProperties/MyProperties";
import AgentRentedProperties from "../Pages/Dashboard/AgentRentedProperties/AgentRentedProperties";


import ManageProperties from "../Pages/Dashboard/AdminDashboard/ManageProperties/ManageProperties";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import ManageReviews from "../Pages/Dashboard/AdminDashboard/ManageReviews/ManageReviews";

import { Bookings } from "../Pages/Dashboard/UserRoute/Bookings";
import { Wishlist } from "../Pages/Dashboard/UserRoute/Wishlist";
import PrivateRoute from "./PrivateRoute";
import AgentAddedProperty from "../Pages/Dashboard/AgentRentedProperties/AgentAddedProperty";

// import BlogDetails from "../Pages/Home/Blog/BlogDetails";

const MyRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/allProperties",
        element: <Properties></Properties>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:4000/properties/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/searchingProperty",
        element: (
          <PrivateRoute>
            <SearchingHouses></SearchingHouses>,
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogDetails/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:4000/blogsData/${params.id}`
          ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Profile></Profile>,
      },
      {
        path: "property",
        element: (
          <PrivateRoute>
            <MyProperties></MyProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "addProperty",
        element: (
          <PrivateRoute>
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
      },
      {
        path: "rentedProperty",
        element: (
          <PrivateRoute>
            <AgentRentedProperties></AgentRentedProperties>
          </PrivateRoute>
        ),
      }, 
      {
        path: "manageProperties",
        element: <ManageProperties />,
      },
      {
        path: "manageUsers",
        element: <ManageUsers />,
      },
      {
        path: "manageReviews",
        element: <ManageReviews />,
      }, {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,

      },
      {
        path: "addProperty",
        element: (
          <PrivateRoute>
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
      },
      {
        path : "myAddedProperties",
        element : <AgentAddedProperty></AgentAddedProperty>
      }
    ],
  },
]);
export default MyRoute;
