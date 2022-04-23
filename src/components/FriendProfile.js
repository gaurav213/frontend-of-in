import React, { useState } from 'react'
import { ChatAltIcon, HeartIcon, ChatIcon, DotsHorizontalIcon, ChevronDownIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImgModal from './ImgModal';


const FriendProfile = () => {
    const [imgModal,setImgModal]=useState(false);
    const profile="https://pbs.twimg.com/profile_images/1426520543671382020/B_sjiJUZ_400x400.jpg"

    return (
        <>
        {/* this is a div */}
            <div className="h-[100vh] w-[100vw]  flex items-center justify-center">
                <div className="w-[80vw] h-full   shadow-md ">
                    <div className="h-[35vh] bg-[#FFF2F2] w-full flex items-center border-[1px]">
                        <div className="w-[35%] h-full flex items-center justify-center p-3 ">
                            <img onClick={()=>{setImgModal(!imgModal)}}  className="h-[200px]  border-[1px] p-1 w-[200px] rounded-full hover:scale-105 transform transition duration-500 ease-out cursor-pointer " src={profile} alt="vijay"></img>
                            <ImgModal imgModal={imgModal} setImgModal={setImgModal} photo={profile} />
                        </div>
                        <div className="w-[65%] h-full  overflow-scroll ">
                            <div className="flex items-center justify-between  mt-4">
                                <h1 className="container text-2xl font-bold">Vijay Dev</h1>
                                <div className="flex items-center container  justify-between p-2">
                                    <button className="border-[1px] border-blue-500 rounded-md p-2 hover:shadow-md ">Message</button>
                                    <button className="border-[1px] border-blue-500 rounded-md p-2 hover:shadow-md ">Follow</button>
                                    <button className="border-[1px] border-blue-500 rounded-md p-2 hover:shadow-md ">
                                        <ChevronDownIcon className="h-5" />

                                    </button>
                                    <button className="border-[1px] border-blue-500 rounded-md p-2 hover:shadow-md ">
                                        <DotsHorizontalIcon className="h-5" />

                                    </button>



                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between w-[70%] mt-5">
                                    <p><b>10</b> Posts</p>
                                    <p><b>102</b> Followers</p>
                                    <p><b>34</b> Following</p>

                                </div>
                                <div className="mt-4 flex flex-col space-y-3">
                                    <p className="font-bold text-gray-500">Mechanical Engineer</p>
                                    <div className="flex items-center gap-3 w-full">
                                        <LocationMarkerIcon className="h-5 font-bold" />
                                        <p className="font-bold">Sangamner,dist-Ahmednagar,state-Maharashtra</p>
                                    </div>
                                    <p className="text-sm w-[70%] ">Born in January 😎.I am a proffestional Mechanical Engineer from Pune University.I like to travel a lot😀😃.</p>
                                </div>
                                <div className="overflow-scroll">
                                    <div className="mt-4 flex items-center justify-between w-[50%]">
                                        <FacebookIcon className="hover:scale-105 hover:text-pink-400 transform transition duration-500 ease-out cursor-pointer" />
                                        <TwitterIcon className="hover:scale-105 hover:text-pink-400 transform transition duration-500 ease-out cursor-pointer" />
                                        <GitHubIcon className="hover:scale-105 hover:text-pink-400 transform transition duration-500 ease-out cursor-pointer" />
                                        <LinkedInIcon className="hover:scale-105 hover:text-pink-400 transform transition duration-500 ease-out cursor-pointer" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="h-[65%] mt-1 overflow-scroll">
                        <div className=" grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 h-[695px] ">

                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://www.pinkvilla.com/imageresize/devarkonda_on_drive_mai.jpg?width=752&format=webp&t=pvorg" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>434</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>34</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://i.pinimg.com/736x/95/3f/ae/953fae8a2cb36b4b01f10e4e5157ff8f.jpg" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>434</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>34</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://miro.medium.com/max/1080/1*cTRf8HPo0SIH_mNwgccqOw.jpeg" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>434</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>34</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://www.bollywoodhungama.com/wp-content/uploads/2021/11/620x450-6-1.jpg" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>434</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>34</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://im.rediff.com/movies/2022/feb/22vijay-deverakonda1.jpg" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>434</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>34</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDZninmU5MbIFXg1eJDlXKQlLfeHYU1qOKA&usqp=CAU" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>434</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>34</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://qph.fs.quoracdn.net/main-qimg-3f0feb44a7275a7810ba9e82d5dd1055-lq" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>434</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>34</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FriendProfile
