import React from "react";
import { Link } from "react-router-dom";
import Catalogue from "./Catalogue";

function HomePage() {
    return (
        <div className="">
            <div><Link to="/catalogue" className='m-2 p-2 hover:bg-[#007aff] lg:max-h-12 text-[#007aff] bg-white hover:text-white border rounded-lg duration-200'>Browse Catalogue 🚀</Link></div>
            <div></div>
        </div>
    )
};

export default HomePage;