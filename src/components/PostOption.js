import React, { useEffect, useRef } from 'react'
import ReactDOM from "react-dom"
import {XIcon} from "@heroicons/react/outline"

const PostOption = ({optionModal,setOptionModal}) => {
  
    if(!optionModal) return null;
    return ReactDOM.createPortal(
        <>
            <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-[50] bg-black/70 ">
                 <div className="fixed h-[100vh] w-[100vw]   flex items-center justify-center  ">
                     <div className="h-[50vh] w-[60vw] md:w-[40vw] lg:w-[20vw] bg-white rounded-md relative">
                         <div onClick={()=>{setOptionModal(!optionModal)}} className="absolute right-[-15px] top-[-10px] cursor-pointer rounded-full bg-pink-200">
                         <XIcon className="h-6 "/>

                         </div>

                         <div  className="flex flex-col gap-3 p-2  h-full w-full">
                            <div className="rounded-md flex items-center justify-center hover:bg-pink-200 cursor-pointer h-10 border text-center">
                            <p >Unfollow</p>
                            
                            </div>
                            <div className="rounded-md flex items-center justify-center hover:bg-pink-200 cursor-pointer h-10 border text-center">
                            <p >Block</p>
                            
                            </div>
                            <div className="rounded-md flex items-center justify-center hover:bg-pink-200 cursor-pointer h-10 border text-center">
                            <p >Copy link</p>
                            
                            </div>
                            <div className="rounded-md flex items-center justify-center hover:bg-pink-200 cursor-pointer h-10 border text-center">
                            <p >Save Post</p>
                            
                            </div>
                            <div className="rounded-md flex items-center justify-center hover:bg-pink-200 cursor-pointer h-10 border text-center">
                            <p >Share Post</p>
                            
                            </div>
                            
                         </div>
                         

                     </div>

                 </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default PostOption;
