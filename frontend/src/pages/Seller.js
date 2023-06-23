import React from "react";
import { Link } from "react-router-dom";

function Seller() {
    return (
        <div className="container mx-auto my-5 max-w-lg flex flex-col justify-center">
            <form className="p-2 border rounded-lg flex flex-col">
                <div className="p-2">
                    Product Name:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2">
                    Product Category:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2">
                    Product Maker:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2">
                    3rd Party/Authorised Seller:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2">
                    Price:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2">
                    Registered Email ID:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2">
                    Password:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="password" />
                </div>
                <div className="mx-auto bg-white lg:max-h-12 p-2 rounded-lg hover:text-[#007aff] duration-200">
                    <button type="submit">Post</button>
                </div>
            </form>
            <div className="flex flex-row justify-center my-2">
                <div className="mx-2">Don't have an account?</div> <br />
                <div className="border rounded-lg mx-2"><Link to="/signup" className='bg-white lg:max-h-12 p-2 rounded-lg hover:text-[#007aff] duration-200'>Sign Up</Link></div>
            </div>
        </div>
    );
};

export default Seller;