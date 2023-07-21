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
                <div className="flex flex-col border rounded-lg p-2 w-[70%] mx-2">
                    <div className="flex flex-row justify-between">
                        <div className="text-4xl text-[#90324F] font-bold">Cart</div>
                        <div>Delete</div>
                    </div>
                    <div className="flex flex-row justify-between border rounded-lg mt-2 text-[#5B8190] font-bold">
                        {/* <div className="w-[10%] mx-1">Checkbox</div>   */}
                        <input value = "" type = "checkbox" onChange = {handleChange} className="border rounded-lg w-[10%] mx-1 my-1"/>
                        <div className="border rounded-lg w-[50%] mx-1">PRODUCT</div>  
                        <div className="border rounded-lg w-[20%] mx-1">QUANTITY</div>  
                        <div className="border rounded-lg w-[20%] mx-1">PRICE</div>  
                        {/* border rounded-lg */}
                    </div>
                    <div className="border mb-2"></div>
                    <CartComponent />
                </div>
                <div className="flex flex-col border rounded-lg p-2 w-[30%] mx-2 bg-[#460B2F] text-white font-bold">
                    <div className="flex flex-row justify-between px-2">
                        <div>Subtotal</div>
                        <div>₹xxxx</div>
                    </div>
                    <div className="flex flex-row justify-between px-2">
                        <div>Discount</div>
                        <div>₹xxxx</div>
                    </div>
                    <div className="border"></div>
                    <div className="flex flex-row justify-between px-2">
                        <div>Grand Total</div>
                        <div>₹xxxx</div>
                    </div>
                    <div className="text-center">
                        <div>Checkout</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;