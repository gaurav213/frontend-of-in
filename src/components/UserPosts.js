import React from 'react'
import UserPost from './UserPost';
import UserProflie from './UserProflie';

const UserPosts = () => {
   
    
    const postsArray=[
                {
                    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Samantha_at_10_Enradhukulla_Teaser_Launch.jpg/1200px-Samantha_at_10_Enradhukulla_Teaser_Launch.jpg",
                    likes:"433", 
                    commentsCount:"2",
                    comments:[
                        {name:"sanket",text:"this is a comment1"},
                        {name:"anuj",text:"this is a comment2"},

                    ]
                },
                {
                    img:"https://assets.eenadu.net/article_img/1804Samantha001.jpg",
                    likes:"563", 
                    commentsCount:"2",
                    comments:[
                        {name:"Gaurav",text:"this is a comment1"},
                        {name:"Akash",text:"this is a comment2"},

                    ]
                },
    ]
        
        
        
    

    return (
        <>
            {
              postsArray.map((post)=>(
                  <UserPost img={post.img} likes={post.likes} commentsCount={post.commentsCount} comments={post.comments}/>
              ))
            }
        </>
    )
}

export default UserPosts 
