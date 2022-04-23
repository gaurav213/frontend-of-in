import React from 'react'
import { LocationMarkerIcon, PhoneIcon, MailIcon, HeartIcon, ChatIcon } from "@heroicons/react/outline";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import BarChart from './BarChart';
import { useState } from 'react';
import ImgModal from './ImgModal';
import PostModal from './PostModal';
import { PsychologyOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import UserPosts from './UserPosts';
// import EditProfileModal from './PostOption';

const UserProflie = () => {
    const [imgModal, setImgModal] = useState(false);


    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">

            <div className="grid cols-1 md:grid-cols-3 shadow-xl rounded-lg h-[90vh] w-[75vw] bg-white">
                <div className="grid grid-rows-2 rounded-lg bg-[#FFC7BF] shadow-lg">

                    <div className=" flex flex-col items-center justify-between  ">
                        {/* user Avatar */}
                        <img onClick={() => { setImgModal(!imgModal) }} className="h-[250px] w-[250px] mt-3 pt-4 cursor-pointer shadow-md hover:shadow-xl rounded-full object-cover  hover:scale-110 transtion-all duration-500 ease-out" src="https://c.ndtvimg.com/2021-12/ebpsij18_samantha-ruth-prahu-naga-chaitanya_295x200_08_December_21.jpg" alt="" />
                        <ImgModal photo="https://c.ndtvimg.com/2021-12/ebpsij18_samantha-ruth-prahu-naga-chaitanya_295x200_08_December_21.jpg" imgModal={imgModal} setImgModal={setImgModal} />
                        {/* <PostModal postModal={postModal} setPostModal={setPostModal} post={post} /> */}
                        <Link to="/editprofle">
                            <button className="text-sm font-bold rounded-md hover:border border-black p-2 ">Edit Profile</button>
                        </Link>



                        <h1 className="text-3xl pb-5 hover:text-gray-500 hover:scale-95 transiton-all duration-500 ease-out">Samantha</h1>
                        {/* <button className="bg-white rounded-md p-2 hover:scale-105 transtion transform duration-500 ease-out active:scale-95 hover:shadow-xl">Edit Profile</button> */}
                    </div>
                    <div className="flex flex-col items-center justify-around">
                        <h1 className="font-bold text-5xl text-[#4C4267] hover:text-[#010001]">work 1</h1>
                        <div className="flex flex-col hover:scale-105  rounded-lg p-2 space-y-3 text-gray-700 transtion-all duration-500 ease-out">
                            <div className="flex space-x-3">
                                <LocationMarkerIcon className="h-6" />
                                <p>Sangamner,dist-Ahemed-Nagar </p>

                            </div>
                            <div className="flex space-x-3">
                                <PhoneIcon className="h-6" />

                                <p>5465765765 </p>

                            </div>
                            <div className="flex space-x-3">
                                <MailIcon className="h-6" />

                                <p>samanthaakhineni@gmail.com </p>

                            </div>

                        </div>
                        <div className="flex justify-between space-x-8">
                            <FacebookIcon className="cursor-pointer hover:scale-110 transtion-all duration-500 ease-out hover:text-gray-700" />
                            <LinkedInIcon className="cursor-pointer hover:scale-110 transtion-all duration-500 ease-out hover:text-gray-700" />
                            <GitHubIcon className="cursor-pointer hover:scale-110 transtion-all duration-500 ease-out hover:text-gray-700" />
                            <TwitterIcon className="cursor-pointer hover:scale-110 transtion-all duration-500 ease-out hover:text-gray-700" />

                        </div>
                    </div>
                </div>

                <div className="hidden md:inline flex flex-col col-span-2">
                    <div className="flex items-center justify-center bg-[#f8f1f0] w-full h-[100px] rounded-md">
                        <div className="flex text-md font-bold text-blue-900 justify-between w-[50%]">
                            <p className=" hover:text-gray-600 cursor-pointer hover:shadow-slate-600 tranform transtion duration-300 ease-out">2 Posts</p>
                            <p className=" hover:text-gray-600 cursor-pointer hover:shadow-slate-600 tranform transtion duration-300 ease-out">43 Following</p>
                            <p className=" hover:text-gray-600 cursor-pointer hover:shadow-slate-600 tranform transtion duration-300 ease-out">645 Followers</p>

                        </div>
                    </div>
                    <div className="overflow-scroll z-0 bg-[#FFF8F8]">
                        <div className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 h-[695px] rounded-md">
                           

                            <UserPosts />




                        </div>
                    </div>


                </div>

            </div>


        </div>

    )
}

export default UserProflie
