import React from 'react'
import  ReactDOM  from 'react-dom';

const Modal = ({ showModal, setShowModal }) => {
    if (!showModal) return null;
    return ReactDOM.createPortal (
        <>
           
            <div className="fixed top-0 bottom-0 right-0 left-0 z-0 bg-black/70" />
         
        
                 <div className="fixed z-0 flex h-[100vh] w-[100vw] items-center  justify-center">
                    <div className=" h-[30vh] w-[30vh] bg-blue-300">
                        <button onClick={()=>{setShowModal(!showModal)}}>close</button>
                        <h1 className="mt-10">I am a Modal</h1>
                    </div>
                </div>
            


        </>,
        document.getElementById('portal')
    )
}

export default Modal
