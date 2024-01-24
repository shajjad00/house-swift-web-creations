import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../../../Component/Button/Button";
import { useState } from "react";
// import { GiSpookyHouse } from "react-icons/gi";
import logo from "../../../assets/images/logo.png";
import logoWhite from "../../../assets/images/logo-white.png";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import "./header.css";

const Header = () => {
    const location = useLocation()
    console.log(location)
    const contents = [
        { name: "HOME", link: "/" },
        { name: "ALL PROPERTIES", link: "/allProperties" },
        { name: "ABOUT", link: "/about" },
        { name: "SERVICES", link: "/services" },
        { name: "CONTACT", link: "/contact" },
    ];


  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const [open, setOpen] = useState(false);

  const isHome = location.pathname === "/" || location.pathname === "/about";
  return (
    <div className={"w-full fixed z-30 h-20 top-0 left-0 right-0"}>
      <div className={color ? "bg-white shadow-lg" : "bg-transparent"}>
        <div
          className={
            color
              ? "md:flex items-center justify-between py-3 md:px-10  max-w-7xl mx-auto"
              : "md:flex items-center justify-between py-3 md:px-10 max-w-7xl mx-auto"
          }
        >
          <div className="font-bold text-2xl uppercase cursor-pointer text-rose-900 flex">
            <span className="mr-2">
              {/* <GiSpookyHouse></GiSpookyHouse> */}
            </span>
            <Link to="/">
              {/* house-swift */}
              {isHome ? (
                color ? (
                  <img
                    className="w-44"
                    src={logo}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-44"
                    src={logoWhite}
                    alt=""
                  />
                )
              ) : (
                <img
                  className="w-44"
                  src={logo}
                  alt=""
                />
              )}
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {color ? (
              isHome ? (
                <CgMenuLeftAlt className="text-black" />
              ) : (
                <CgMenuLeftAlt className="text-black" />
              )
            ) : isHome ? (
              <CgMenuLeftAlt className="text-white sm:text-black" />
            ) : (
              <CgMenuLeftAlt className="text-black" />
            )}
          </div>
          <ul
            className={`absolute md:flex text-black md:items-center w-full md:w-auto md:pb-0 pb-12 md:static bg-transparent md:z-auto md:pl-0 px-8 transition-all duration-500 ease-in ${
              open
                ? "right-[0px] top-0 bg-white md:bg-transparent z-50"
                : "-right-[800px] top-0"
            } pt-8 md:pt-0`}
          >
            {contents.map((content) => (
              <li
                onClick={() => setOpen(!open)}
                key={content.link}
                className={`md:ml-8 text-xl md:my-0 my-5 ${
                  color ? "text-black" : isHome ? "md:text-white" : "text-black"
                }`}
              >
                <NavLink
                  className="hover:text-slate-500 duration-400"
                  to={content.link}
                >
                  {content.name}
                </NavLink>
              </li>
            ))}
            <Link to="/login">
              {" "}
              <Button>login</Button>
            </Link>
            <div
              onClick={() => setOpen(!open)}
              className=""
            >
              <RxCross2 className="absolute top-5 right-5 md:hidden text-3xl" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
