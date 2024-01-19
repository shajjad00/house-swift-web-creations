import { Outlet } from "react-router-dom";
import Header from "../Pages/Home/Header/Header";

const Layout = () => {
  return (
    <>
    <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
