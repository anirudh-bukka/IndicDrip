import React from "react";
import { Link } from "react-router-dom";

function ProductCard() {
    return (
        <div className="border rounded-lg max-w-fit p-2 m-5">
            <div className="border rounded-lg max-w-fit pb-2"><img className="sm:min-w-[150px] sm:min-h-[200px] sm:max-w-[100px] sm:max-h-[100px] lg:min-w-[300px] lg:min-h-[400px] lg:max-w-[300px] lg:max-h-[400px]" src="https://m.media-amazon.com/images/I/41LQNl4GOJL._MCnd_AC_.jpg" /></div>
            <div className="border rounded-lg flex flex-col">
                <div className="border rounded-lg my-1 p-2">Product Name</div>
                <div className="border rounded-lg my-1 p-2">Product Description</div>
                <div className="flex flex-row my-1 border rounded-lg justify-between">
                    <div className="border rounded-lg lg:max-h-12 p-2">Price</div>
                    <Link to="/details" className='border rounded-lg bg-white lg:max-h-12 p-2 hover:text-[#007aff] duration-200'>Details</Link>
                    <Link to="/cart" className='border rounded-lg bg-white lg:max-h-12 p-2 hover:text-[#007aff] duration-200'>Add To Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;