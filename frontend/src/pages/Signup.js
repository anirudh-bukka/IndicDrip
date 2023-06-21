// import { useState } from 'react';
import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input'
import { Link } from "react-router-dom";

function Signup() {
    const [value, setValue] = useState();
    return (
        <div className="container mx-auto my-5 max-w-lg flex flex-col justify-center">
            <form className="p-2 border rounded-lg">
                <div className="p-2 mx-auto">
                    First Name:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2 mx-auto">
                    Last Name:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2 mx-auto">
                    <PhoneInput
                        placeholder="Enter your phone number with country code (+91)"
                        value={value}
                        onChange={setValue}
                        className="w-[20px] m-2 py-5"/>
                </div>
                <div className="p-2 mx-auto">
                    Email ID:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="text" />
                </div>
                <div className="p-2 mx-auto">
                    Password:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="password" />
                </div>
                <div className="p-2 mx-auto">
                    Re-enter Passowrd:<br />
                    <input className="my-2 px-2 border rounded-lg min-w-full max-w-2xl" type="password" />
                </div>
            </form>
            <div className="flex flex-row justify-center">
                <div className="">Already have an account?</div> <br />
                <div className="border rounded-lg"><Link to="/login" className='bg-white lg:max-h-12 p-2 rounded-lg hover:text-[#007aff] duration-200'>Login!</Link></div>
            </div>
        </div>
    );
};

export default Signup;