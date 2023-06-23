import React from "react";
import { Link } from "react-router-dom";

function DetailsPage() {
    return (
        <div className="sm:flex sm:flex-col lg:flex lg:flex-row lg:justify-around">
            <div className="sm:mx-auto my-3 border text-center content-center rounded-lg w-full mx-2">
                Picture 
            </div>
            <div className="sm:mx-auto my-3 flex flex-col border rounded-lg w-full mx-2">
                <div className="mx-auto">Information</div>
                <div className="mx-auto flex flex-col my-4">
                    <div className="mx-auto">[Product Name]</div>
                    <div className="mx-auto">[Product Description]</div>
                </div>
                <div className="m-2 flex flex-row">
                    <div>Price:</div>
                    <div>[Price]</div>
                </div>
                <div className="m-2 flex flex-row">
                    <div>In stock:</div>
                    <div>[How many available]</div>
                </div>
                <div className="m-2 flex flex-row">
                    <div>Maker:</div>
                    <div>[Maker Name]</div>
                </div>
                <div className="m-2 flex flex-row">
                    <div>Seller:</div>
                    <div>[Seller Name]</div>
                </div>
                <div className="m-2 flex flex-row">
                    <div>Size</div>
                    <div>[Drop Down List]</div>
                </div>
                <div className="m-2 flex flex-row justify-center">
                    <Link to="/cart" className='border rounded-lg mx-2 bg-white lg:max-h-12 p-2 hover:text-white hover:bg-[#007aff] duration-200'>Add To Cart</Link>
                    <Link to="/wishlist" className='border hover:bg-[#e15987] rounded-lg mx-2 hover:text-white bg-white lg:max-h-12 p-2 duration-200'>Add To Wishlist</Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;