// import { useState } from 'react';
import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input'
import { Link } from "react-router-dom";

function Signup() {
    const [value, setValue] = useState();
    return (
        <div className="container mx-auto my-5 max-w-lg flex flex-col justify-center">
            <form className="p-2 border rounded-lg flex flex-col">
                <div className="p-2 text-[#5B8190] font-semibold">
                    First Name:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2 text-[#5B8190] font-semibold">
                    Last Name:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2">
                    <PhoneInput
                        placeholder="Enter your phone number with country code (+91)"
                        value={value}
                        onChange={setValue}
                        className="w-[20px] m-2 py-5 text-[#5B8190] font-semibold"/>
                </div>
                <div className="p-2 text-[#5B8190] font-semibold">
                    Email ID:<br />
                    <input className="text-[#90324F] font-semibold my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2 text-[#5B8190] font-semibold">
                    Password:<br />
                    <input className="text-[#90324F] font-semibold my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="password" />
                </div>
                <div className="p-2 text-[#5B8190] font-semibold">
                    Re-enter Passowrd:<br />
                    <input className="text-[#90324F] font-semibold my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="password" />
                </div>
                <div className="mx-auto bg-white lg:max-h-12 p-2 rounded-lg ">
                    <button type="submit" className="bg-[#90324F] p-2 rounded-lg text-white font-bold hover:bg-[#5B8190] duration-200">Submit</button>
                </div>
            </form>
            <div className="flex flex-row justify-center my-2">
                <div className="mx-2 text-[#90324F]">Already have an account?</div> <br />
                <div className="border rounded-lg text-[#90324F] font-bold"><Link to="/login" className='bg-white lg:max-h-12 p-2 rounded-lg hover:text-[#5B8190] duration-200'>Login!</Link></div>
            </div>
        </div>
    );
};

export default Signup;