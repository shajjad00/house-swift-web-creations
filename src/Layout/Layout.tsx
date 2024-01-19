import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
