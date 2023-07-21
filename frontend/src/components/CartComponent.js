import React, {useState} from "react";

function CartComponent() {

    const [checked, setChecked] = useState(false); 
    function handleChange(e) {
        setChecked(e.target.checked);
    }

    const [counter, setCounter] = useState(0);
 
    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };
    
    //decrease counter
    const decrease = () => {
        setCounter(count => count - 1);
    };
    
    //reset counter 
    const reset = () =>{
        setCounter(0)
    }

    return (
        // <div className="flex flex-row justify-around border rounded-lg">

        //     {/* <div className="w-[10%] mx-1 my-1">asdfg</div>  */}
        //     {/* <h4>
        //         {" "}
        //         Creating the <i> Custom controlled checkbox </i> in the React application {" "}
        //     </h4> */}
        //     <div className="w-[10%] mx-1 my-1 border rounded-lg">
        //         <input value = "test" type = "checkbox" onChange = {handleChange} />
        //     </div> 
        //     {/* <br></br> */}
        //     {/* {checked ? (
        //         <div> Checkbox is checked. </div>
        //     ) : (
        //         <div> Checkbox is not checked. </div>
        //     )} */}

        //     <div className="w-[50%] mx-1 my-1 border rounded-lg">asdfg</div>  
        //     {/* <div className="w-[20%] mx-1 my-1">asdfg</div>   */}
        //     <div className="flex flex-col border rounded-lg">
                // <div className="flex flex-row justify-evenly">
                //     <button className="" onClick={increase}>+</button>
                //     <span className="">{counter}</span>
                //     <button className="" onClick={decrease}>-</button>
                // </div>
        //         <button className="" onClick={reset}>Reset</button>
        //     </div>
        //     <div className="w-[20%] mx-1 my-1 border rounded-lg">asdfg</div>  
        // </div>
        <div className="flex flex-row justify-between rounded-lg mt-2 text-[#5B8190]">
            {/* <div className="w-[10%] mx-1">Checkbox</div>   */}
            <input value = "" type = "checkbox" onChange = {handleChange} className="border rounded-lg w-[10%] mx-1 my-1"/>
            <div className=" rounded-lg w-[50%] mx-1">[ProductName]</div> 
            <div className="flex flex-row justify-between rounded-lg w-[20%] pr-10">
                <button className="bg-[#90324F] text-white px-3 rounded-lg" onClick={decrease}>-</button>
                <span className="">{counter}</span>
                <button className="bg-[#90324F] text-white px-3 rounded-lg" onClick={increase}>+</button>
            </div>

            <div className="rounded-lg w-[20%] mx-1 font-semibold">₹[xxxx]</div>  
            {/* border rounded-lg */}
        </div>
    )
}

export default CartComponent;