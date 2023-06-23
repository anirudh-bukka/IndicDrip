import React from "react";
import { Link } from "react-router-dom";
import Discord from "../assets/discord.svg";
import LinkedIn from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";

function Footer() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between mx-2">
                ANIRUDH BUKKA
                <div className="flex flex-row justify-around">
                    <a href="https://www.linkedin.com/in/anirudh-bukka/"><img src={LinkedIn} alt="LinkedIn" className='mx-1 lg:h-10 lg:w-10 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff]'/></a>
                    <a href=""><img src={Discord} alt="Discord" className='mx-1 lg:h-10 lg:w-10 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff]'/></a>
                    <a href="https://twitter.com/AnirudhBukka"><img src={Twitter} alt="Twitter" className='mx-1 lg:h-10 lg:w-10 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff]'/></a>
                    <a href="https://www.instagram.com/anidude09/"><img src={Instagram} alt="Instagram" className='mx-1 lg:h-10 lg:w-10 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff]'/></a>
                    <a href=""><img src={Facebook} alt="Facebook" className='mx-1 lg:h-10 lg:w-10 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff]'/></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;