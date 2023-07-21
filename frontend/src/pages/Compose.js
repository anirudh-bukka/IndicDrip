import React from "react";
import ComposeModal from "./ComposeModal.js";
import { Link } from "react-router-dom";

function Compose() {
    return (
        <div>
            <form className="flex flex-col ">
                <label>
                    <div className="font-semibold text-2xl text-center text-[#53405F]">Compose your post: <br /></div>
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
                        <textarea
                            name="postContent"
                            placeholder="Write about anything related to the tradition and evolution of Indian ethnic fashion!"
                            rows={4}
                            cols={40}
                            className="border rounded-lg border-[#9A031E] place-content-center w-[900px] my-2 text-[#5B8190] p-2"
                        />
                    </div>
                </label>
                <div className="mx-auto bg-white lg:max-h-12 p-2 rounded-lg ">
                    <button type="submit" className="bg-[#90324F] p-2 rounded-lg text-white font-bold hover:bg-[#5B8190] duration-200 place-content-center">Post!</button>
                </div>
                <div className="text-center mt-8 font-semibold text-2xl text-[#53405F]">OR </div>
                <div className="text-center font-semibold text-lg text-[#53405F]">Import your blog written in another website!</div>
                <div className="mx-auto bg-white lg:max-h-12 p-2 rounded-lg ">
                    <ComposeModal />
                </div>
            </form>
        </div>
    )
}

export default Compose;