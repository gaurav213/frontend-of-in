import React from 'react'
import {
    EmojiHappyIcon,
    PencilAltIcon,
    CogIcon,
    SupportIcon,
    LogoutIcon,
    XCircleIcon
} from "@heroicons/react/outline";
import { Link } from 'react-router-dom';



const ProfileModal = ({openProfile,setOpenProfile}) => {
    return (
        <>
             <div className="wrapper" >
                            <div className={`${openProfile ? "md:inline" : "md:hidden"} inline  bg-gray-200 rounded-lg text-gray-600 absolute top-[80px] right-1 p-3 flex flex-col space-y-3 transition duration-500 ease-out  shadow-lg  `}>
                                <div onClick={()=>{setOpenProfile(!openProfile)}} className="flex items-center align-center space-x-2 hover:text-pink-500 hover:scale-105 transition-all duration-500 ease-in-out ">
                                    <EmojiHappyIcon className="h-5 text-pink-500" />
                                    <Link to="user">
                                             My profile
                                    </Link>

                                </div>
                               
                                <div className="flex items-center align-center space-x-2 hover:text-pink-500 hover:scale-105 transition-all duration-500 ease-in-out">
                                    <PencilAltIcon className="h-5 text-pink-500" />

                                    <a href="">Edit profile</a>

                                </div>
                                <div className="flex items-center align-center space-x-2 hover:text-pink-500 hover:scale-105 transition-all duration-500 ease-in-out">
                                    <CogIcon className="h-5 text-pink-500" />

                                    <a href="">Settings</a>

                                </div>
                                <div className="flex items-center align-center space-x-2 hover:text-pink-500 hover:scale-105 transition-all duration-500 ease-in-out">
                                    <SupportIcon className="h-5 text-pink-500" />

                                    <a href="">Help</a>

                                </div>
                                <div className="flex items-center align-center space-x-2 hover:text-pink-500 hover:scale-105 transition-all duration-500 ease-in-out">
                                    <LogoutIcon className="h-5 text-pink-500" />

                                    <a href="">Logout</a>

                                </div>
                                <div className="hidden md:inline-flex w-full cursor-pointer  items-center justify-center">
                                    <XCircleIcon onClick={() => setOpenProfile(!openProfile)} className="h-6 mt-4 hover:text-pink-500 hover:scale-105 transition-all duration-500 ease-in-out" />

                                </div>


                            </div>

                        </div>

        </>
    )
}

export default ProfileModal
