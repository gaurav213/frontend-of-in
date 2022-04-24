import React from 'react'
import PostModal from './PostModal';
import { XIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import { HeartIcon, ChatIcon, ShareIcon, BookmarkIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled }
    from "@heroicons/react/solid"
import { useState } from 'react';

const UserPost = ({ img, likes, comments, commentsCount }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <PostModal
        comments={comments}
        likes={likes}
        openModal={openModal}
        setOpenModal={setOpenModal}
        post={img}
      />

      <div
        onClick={() => setOpenModal(!openModal)}
        className="relative m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out"
      >
        <img
          onClick={() => setOpenModal(!openModal)}
          className=" w-full object-cover rounded-xl"
          src={img}
          alt=""
        />

        <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
          <div className="flex space-x-6 text-white">
            <div className="flex space-x-2 items-center">
              <HeartIcon className="h-9" />
              <p>{likes}</p>
            </div>
            <div className="flex space-x-2 items-center">
              <ChatIcon className="h-9" />
              <p>{commentsCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost
