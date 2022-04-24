
import React from "react";
import "./User.css";

import { Link } from "react-router-dom";
const User = ({ userId, name, avatar,email }) => {
  return (
    <Link to={`/user/${userId}`} className="homeUser">
      <img src={avatar} alt={name} />
      <div className="flex flex-col w-full mt-3 border-1 border-gray-700">
        <h4 className=" text-lg">{name}</h4>
        <p className="text-gray-500 text-sm">{email}</p>
      </div>
     
    </Link>
  );
};

export default User;
