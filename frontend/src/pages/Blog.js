import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

function Blog() {
    return (
        <div className="flex flex-col">
            <div className="text-[#460B2F] text-3xl text-center font-semibold">
                Want to publish a great read about India's rich ethnic art and culture in fashion?
            </div>
            <Link to="/compose" className='w-fit mx-auto my-4 text-center lg:max-h-12 p-2 rounded-lg bg-[#90324F] text-white font-bold hover:bg-[#5B8190] duration-200'>Write Now!</Link>
            <div className="text-[#9A031E] text-3xl text-center font-semibold">Read what other writers had to share!</div>
        </div>
    )
}
 
export default Blog;