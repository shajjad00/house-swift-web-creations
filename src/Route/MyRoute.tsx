import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";

const MyRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
path:"/about",
element:<AboutUs></AboutUs>

      },
      {
        path : "/contact",
        element : <Contact></Contact>
      }
    ],
  },
]);
export default MyRoute;
