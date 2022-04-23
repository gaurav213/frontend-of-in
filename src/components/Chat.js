import React, { useState } from 'react'

const Chat = () => {
    var time= new Date().toLocaleTimeString('en-US');
    const [ctime,setCtime]=useState(time);
    var updateTime=()=>{
         var ntime=new Date().toLocaleTimeString('en-US');
         setCtime(ntime);
    }
    setInterval(updateTime,1000);
    return (
        <div className="container flex items-center justify-center h-full w-full text-5xl mt-5">
            <h1>{time}</h1>
        </div>
    )
}

export default Chat
