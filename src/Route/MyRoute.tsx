import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../Pages/SignIn/SignIn";
import Properties from "../Pages/AllProperties/Properties";
import AddProperty from "../Pages/AddProperty/AddProperty";

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
        path : "/allProperties",
        element : <Properties></Properties>
      }
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/addProperty",
        element: <AddProperty></AddProperty>,
      },
    ],
  }
]);
export default MyRoute;
