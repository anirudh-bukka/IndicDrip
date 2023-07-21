import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/indicdrip-ethnic.png";

function Navbar() {

    // const isLoggedIn = 

    return (
        <div className="border-b-[1px] border-[#90324F] w-full p-1 mt-[1px] px-2 flex flex-row justify-between lg:max-h-16 lg:min-h-16 z-50 bg-[#ffff] sticky top-0">
            <div>
                <img className="w-[120px] h-[65px]" src={logo}></img>
            </div>
            <div className="w-[30%] flex flex-row justify-evenly lg:p-2">
                <Link to="/" className='text-[#90324F] font-bold bg-white lg:max-h-12 p-2 rounded-lg hover:text-[#5B8190] duration-200'>Home</Link>
                <Link to="/blog" className='text-[#90324F] font-bold bg-white lg:max-h-12 p-2 rounded-lg hover:text-[#5B8190] duration-200'>Blog</Link>
                <Link to="/about" className='text-[#90324F] font-bold bg-white lg:max-h-12 p-2 rounded-lg hover:text-[#5B8190] duration-200'>About</Link>
            </div>
            <div className="flex flex-row justify-between lg:p-2">
                <Link to="/signup" className='lg:max-h-12 p-2 rounded-lg bg-[#90324F] text-white font-bold hover:bg-[#5B8190] duration-200'>Login / Sign Up</Link>
            </div>
        </div>
    )
};

export default Navbar;