import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="border-b-2 w-full p-1 mt-[1px] px-2 flex flex-row justify-between lg:max-h-16 lg:min-h-16 z-50 bg-[#ffff] sticky top-0">
            <div>
                <img className="p-2 w-[50px] h-[50px] border rounded-lg" src="http://elastic-env.eba-nspycpmu.eu-north-1.elasticbeanstalk.com/"></img>
            </div>
            <div className="w-[30%] flex flex-row justify-between lg:p-2">
                <Link to="/" className='bg-white lg:max-h-12 p-2 rounded-lg hover:text-[#007aff] duration-200'>Home</Link>
                <Link to="/blog" className='bg-white lg:max-h-12 p-2 rounded-lg hover:text-[#007aff] duration-200'>Blog</Link>
                <Link to="/about" className='bg-white lg:max-h-12 p-2 rounded-lg hover:text-[#007aff] duration-200'>About</Link>
            </div>
            <div className="flex flex-row justify-between lg:p-2 border rounded-lg">
                <Link to="/signup" className='bg-white lg:max-h-12 p-2 rounded-lg hover:text-[#007aff] duration-200'>Login / Sign Up</Link>
            </div>
        </div>
    )
};

export default Navbar;