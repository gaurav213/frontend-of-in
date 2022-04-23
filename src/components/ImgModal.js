import React from 'react'
import  ReactDOM  from 'react-dom';

import { XIcon} from "@heroicons/react/outline";


const ImgModal = ({imgModal,setImgModal,photo}) => {
    if(!imgModal) return null;
    return ReactDOM.createPortal(
        <>
        <div className="fixed top-0 bottom-0 right-0 left-0 z-[50] bg-black/70"></div>
            <div className="fixed z-[60] top-[10px] left-[20px] right-[20px] bottom-[10px] h[100vh] w-[100vw] flex items-center justify-center">
                <div className="rounded-xl h-[80vh] w-[40vw] bg-black/40 ">
                   <div className="flex justify-end">
                   <XIcon onClick={()=>setImgModal(!imgModal)} className="h-8 m-3 text-white hover:scale-110 cursor-pointer transtion-all duration-500 ease-out" />
                   </div>
                   <div className="h-[75vh] w-[35vw]rounded-xl ">
                   <img className="w-full h-full   object-cover" src={photo} alt="" />

                   </div>

                </div>

            </div>
        </>,
        document.getElementById('portal')
    )
}

export default ImgModal
