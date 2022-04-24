
import ReactDOM from 'react-dom';
import { XIcon, CloudUploadIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost } from "../Actions/Post";
import { loadUser } from "../Actions/User";
const PostImgModal = ({ openPostImg, setOpenPostImg }) => {
     const [image, setImage] = useState(null);
     const [caption, setCaption] = useState("");
  const { loading, error, message } = useSelector((state) => state.like);
  const dispatch = useDispatch();
  const alert = useAlert();
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };
   const submitHandler = async (e) => {
     e.preventDefault();
     await dispatch(createNewPost(caption, image));
     dispatch(loadUser());
   };
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch({ type: "clearErrors" });
      }

      if (message) {
        alert.success(message);
        dispatch({ type: "clearMessage" });
      }
    }, [dispatch, error, message, alert]);
    if (!openPostImg) return null;
    return ReactDOM.createPortal(
        <>
            <div className="fixed flex items-center justify-center top-0 bottom-0 right-0 left-0 z-[50] bg-black/70">
                <div className="fixed   top-[10px] left-[20px] right-[20px] bottom-[10px] h-[100vh] w-[100vw]  flex items-center justify-center">

                    <div className="relative h-[70vh] w-[85vw] md:w-[60vw] lg:w-[40vw] bg-white rounded-lg ">
                        <div className="flex items-center justify-center mt-2">
                            <p className="font-bold text-2xl">Upload a new Post</p>
                            <div onClick={() => { setOpenPostImg(!openPostImg) }} className=" absolute top-[-12px] right-[-10px] bg-pink-600 rounded-full cursor-pointer hover:scale-105  " >
                                <XIcon className="h-7 text-white " />
                            </div>


                        </div>
                        <div className=" flex flex-col gap-5 items-center justify-center h-full w-full rounded-lg">
                            <CloudUploadIcon className="h-[30%] w-[30%] " />
                            <label for="files" class="block">
                                <span className="sr-only">Choose profile photo</span>
                                <input id="files" type="file"  className="block w-full text-sm text-slate-500
                                       file:rounded-full file:border-0
                                       file:text-sm file:font-semibold
                                       file:bg-pink-50 file:text-pink-700
                                       hover:file:bg-pink-100
                                       file:mr-4 file:py-2 file:px-4
                                   "/>
                            </label>
                            <div className="flex gap-2">
                            <b>Caption</b> <input type="text" className="w-[100%] border-2 border-pink-500 rounded-md"/>

                            </div>
                            <button className="bg-pink-600 p-2 rounded-md w-[50%] mt-4 text-white hover:shadow-lg ">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('nportal1')
    )
}

export default PostImgModal
