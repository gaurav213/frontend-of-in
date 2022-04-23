import React from 'react'
import Post from './Post'

//this is the users Array

const Users=[
    {name:"Vivek Thorat",caption:"this is my post",work:"Civil Engineer",avatar:"https://pbs.twimg.com/profile_images/1387822869619478540/lhocXKtV_400x400.jpg" ,img:"https://pbs.twimg.com/profile_images/1387822869619478540/lhocXKtV_400x400.jpg"},
    {name:"Aditya Gadge",caption:"How am I looking",work:"Interior Designer",avatar:"https://wikibio.in/wp-content/uploads/2019/04/Atif-Aslam.jpg",img:"https://wikibio.in/wp-content/uploads/2019/04/Atif-Aslam.jpg"},
    {name:"Gaurav Haral",caption:"Having good times",work:"Gavandi",avatar:"https://pbs.twimg.com/profile_images/1387822869619478540/lhocXKtV_400x400.jpg",img:"https://pbs.twimg.com/profile_images/1387822869619478540/lhocXKtV_400x400.jpg"}
]


const Posts = () => {
    return (
        <>
            {
                Users.map((user)=>(
                    <Post username={user.name} caption={user.caption} avatar={user.avatar} img={user.img} />
                ))
            }
            
        </>
    )
}

export default Posts
