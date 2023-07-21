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
      <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white p-4 rounded-lg z-10">
        {/* Your modal content goes here */}
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p>Modal content goes here...</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
        
    )
}

export default ComposeModal;