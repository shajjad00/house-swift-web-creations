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
import PropertyDetails from "../Pages/propertyDetails/PropertyDetails";

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
        element: <Contact></Contact>,
      },
      {
        path: "/allProperties",
        element: <Properties></Properties>,
      },
      {
        path: "/property/:id",
        element: <PropertyDetails></PropertyDetails>,
        loader: ({params}) => fetch(`https://house-swift-web-creations-server.vercel.app/properties/${params.id}`)
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
        element: <AddProperty></AddProperty>,
      },
      {
        path: "/searchingProperty",
        element: <SearchingHouses></SearchingHouses>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default MyRoute;
