import React, { useState } from 'react'
import { DotsVerticalIcon, } from "@heroicons/react/solid";
import { HeartIcon, ChatIcon, ShareIcon, BookmarkIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled }
    from "@heroicons/react/solid"
import PostOption from './PostOption';

const Post = ({ username, img,caption,avatar }) => {
    const [hasLiked, setHasLiked] = useState(false);
    const [mylikes, setMylikes] = useState(0);
    const [optionModal,setOptionModal] = useState(false);

    const likePost = () => {
        if (hasLiked === false) {
            setHasLiked(true);
            setMylikes(mylikes + 1);

        } else {
            setHasLiked(false);
            setMylikes(mylikes - 1);

        }

    }
    return (

        <div className="  rounded-lg shadow-lg container w-[500px] mx-auto mb-1 mt-1">
            {/* //top part  */}
            <div className="container flex align-center justify-between   shadow-lg">
                <div className="flex  align-center space-x-5">
                    <img src={avatar} className="mt-2 ml-2 h-10 rounded-full cursor-pointer object-contain" alt="profile-pic" />
                    <p className="font-bold pt-4 ">{username}</p>
                </div>
                <DotsVerticalIcon onClick={()=>{setOptionModal(!optionModal)}} className="h-4 mt-4 mr-2 cursor-pointer" />
                {/* this is a option modal */}
                <PostOption optionModal={optionModal} setOptionModal={setOptionModal} />


            </div>

            {/* //middle part   */}
            <div className="container ">
                <img className="w-full  object-cover" src={img} alt="" />

            </div>

            {/* bottom part */}

            <div className="container flex justify-between align-center">
                <div className="flex space-x-3 p-3">
                    {
                        hasLiked ? (
                            <HeartIconFilled onClick={likePost} className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out text-red-500  " />
                        ) : (
                            <HeartIcon onClick={likePost} className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out " />


                        )
                    }
                    <ChatIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out " />
                    <ShareIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out " />

                </div>
                <BookmarkIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out mt-3 ml-4 " />


            </div>
            <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">



                <div className="container">
                    <p className="p-5 truncate">
                        {
                            mylikes > 0 &&

                            <p className="font-bold mb-1">{mylikes} likes</p>

                        }

                        <span className="font-bold mr-1">{username} </span>{" "+caption}
                    </p>

                </div>

                <div className="flex items-center space-x-2 mb-3">
                    <img className="h-7 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqzD461xLPhFGm1S6KrJaq5zlYUrR_qegyA&usqp=CAU" alt="" />
                    <p className="text-sm flex-1"><span className="font-bold">Vivek</span> looking nice</p>
                    {/* <Moment>
                                        8 minutes ago
                                   </Moment> */}
                    <p className="pr-2">8 minutes ago</p>
                </div>







            </div>
            <form className="flex items-center p-4" action="">
                <EmojiHappyIcon className="h-7" />
                <input placeholder="Add a comment..." className="border-none  flex-1 focus:ring-0 outline-none" type="text" />
                <button type="submit" className="font-semibold text-pink-500">Post</button>
            </form>


        </div>


    )
}

export default Post;
