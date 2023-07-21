import React, {useState} from "react";
import CartComponent from "../components/CartComponent";

function Cart() {
    const [checked, setChecked] = useState(false); 
    function handleChange(e) {
        setChecked(e.target.checked);
    }
    return (
        <div>
            <div className="flex flex-row justify-around">
                <div className="flex flex-col border border-[#90324F] rounded-lg p-2 w-[70%] mx-2 pb-4">
                    <div className="flex flex-row justify-between">
                        <div className="text-4xl text-[#90324F] font-bold mb-4">Cart</div>
                        <div>Delete</div>
                    </div>
                    <div className="flex flex-row justify-between rounded-lg mt-2 text-[#5B8190] font-bold">
                        {/* <div className="w-[10%] mx-1">Checkbox</div>   */}
                        <input value = "" type = "checkbox" onChange = {handleChange} className="border rounded-lg w-[10%] mx-1 my-1"/>
                        <div className="rounded-lg w-[50%] mx-1">PRODUCT</div>  
                        <div className="rounded-lg w-[20%] mx-1">QUANTITY</div>  
                        <div className="rounded-lg w-[20%] mx-1">PRICE</div>  
                        {/* border rounded-lg */}
                    </div>
                    <div className="border my-1 font-bold"></div>
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                </div>
                <div className="flex flex-col rounded-lg p-2 w-[30%] mx-2 bg-[#460B2F] text-white font-bold max-h-40">
                    <div className="flex flex-row justify-between px-2">
                        <div>Subtotal</div>
                        <div>₹xxxx</div>
                    </div>
                    <div className="flex flex-row justify-between px-2">
                        <div>Discount</div>
                        <div>₹xxxx</div>
                    </div>
                    <div className="border my-2"></div>
                    <div className="flex flex-row justify-between px-2">
                        <div>Grand Total</div>
                        <div>₹xxxx</div>
                    </div>
                    <div className="bg-white text-[#90324F] w-fit px-2 py-1 rounded-lg mt-2 mx-auto text-center">
                        <button
                            type="submit"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;