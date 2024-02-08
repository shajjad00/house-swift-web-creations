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
import PrivateRoute from "./PrivateRoute";
import { Bookings } from "../Pages/Dashboard/UserRoute/Bookings";
import { Wishlist } from "../Pages/Dashboard/UserRoute/Wishlist";
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
        path: "/addProperty",
        element: (
          <PrivateRoute>
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
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
        path : "bookings",
        element: <Bookings/>,
      },
      {
        path : "wishlist",
        element: <Wishlist/>,
      },
    ],
  },
]);
export default MyRoute;
