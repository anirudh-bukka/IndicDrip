import React, { useState } from "react";

// function ComposeModal() {
    // const[modal, setModal] = useState(false);

    // const toggleModal = () => {
    //     setModal(!modal)
    // }
    const ComposeModal = ({ isOpen, onClose }) => {
        if (!isOpen) return null;
    

    return (
        // <div>
        //     <button
        //         onClick={toggleModal}
        //         className="bg-[#90324F] p-2 rounded-lg text-white font-bold hover:bg-[#5B8190] duration-200 place-content-center"
        //     >
        //         Import
        //     </button>
        //     <div className="modal">
        //         <div className="overlay">
        //             <div className="modal-content">
        //                 <h1>Hello Modal</h1>
        //                 <p>qwertyuiopasdfghjklzxcvbnm</p>
        //                 <button
        //                     className="close-modal"
        //                     onClick={toggleModal}
        //                 >
        //                     Submit
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-[#5B8190] opacity-75 backdrop-blur-lg"></div>
            <div className="bg-white p-4 rounded-lg z-10">
                {/* Your modal content goes here */}
                <div className="text-xl text-[#9A031E] font-bold mb-4">Enter link to import</div>
                <div className="text-center">    
                    <textarea
                        name="postTitle"
                        maxLength={60}
                        placeholder="Title"
                        rows={1}
                        cols={20}
                        className="border rounded-lg border-[#9A031E] place-content-center w-[900px] mt-4 font-bold text-[#5B8190] p-2"
                    />
                </div>
                <div className="text-center">
                <button
                    type="submit"
                    className="mt-4 bg-[#90324F] hover:bg-[#5B8190] duration-200 text-white py-2 px-4 rounded-lg"
                    onClick={onClose}
                >
                    Submit
                </button>
                </div>
            </div>
    </div>
        
    )
}

export default ComposeModal;