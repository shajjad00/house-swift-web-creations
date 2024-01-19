import { Link, useLocation } from "react-router-dom";
import Button from "../../../Component/Button/Button";
import { useState } from "react";
import { GiSpookyHouse } from "react-icons/gi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const location = useLocation()
    console.log(location)
    const contents = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "SERVICES", link: "/services" },
        { name: "CONTACT", link: "/contact" },
    ];

    const [color, setColor] = useState(false)
    const changeColor = () =>{
        if(window.scrollY >= 90){
            setColor(true)
        }else
        {
            setColor(false)
        }
    }

    window.addEventListener('scroll' , changeColor)

    const [open, setOpen] = useState(false)

    const isHome = location.pathname === '/'

    return (
        <div className={isHome ? 'w-full fixed z-30 h-20 top-0 left-0 right-0' : 'w-full sticky z-30 h-20 top-0 left-0 right-0'}>
            <div className={color ? "md:flex items-center justify-between bg-green-600 shadow-xl py-4 md:px-10 px-7" : "md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7"}>
                <div className="font-bold text-2xl uppercase cursor-pointer text-rose-900 flex">
                    <span className="mr-2">
                    <GiSpookyHouse></GiSpookyHouse>
                    </span>
                    <Link to="/">
                    house-swift
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {
                        open ? <RxCross2/> : <CgMenuLeftAlt/>
                    }
                </div>
                <ul className={`md:flex ${color ? 'text-white' : 'text-black'} md:items-center w-full md:w-auto md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 md:pl-0 pl-9 transition-all duration-700 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                    {contents.map((content) => (
                        <li key={content.link} className="md:ml-8 text-xl md:my-0 my-5 border border-red-800">
                            <Link className=" hover:text-slate-500 duration-700" to={content.link}>{content.name}</Link>
                        </li>
                    ))}
                    <Button>
                        login
                    </Button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
