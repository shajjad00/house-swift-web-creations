import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";

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
        path : "/contact",
        element : <Contact></Contact>
      }
    ],
  },
]);
export default MyRoute;
