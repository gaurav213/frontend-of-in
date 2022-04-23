import React from 'react'
import ReactDOM from 'react-dom';
import { XIcon } from "@heroicons/react/outline"
import JSONDATA from "./MOCK_DATA.json";


const SuggesionSeeAll = ({ seeAll, setSeeAll }) => {
    if (!seeAll) return null;
    return ReactDOM.createPortal(
        
        <>
            <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-[60] bg-black/70">
                <div className="h-[80vh] relative w-[30vw] bg-white rounded-md">
                    <div onClick={() => { setSeeAll(!seeAll) }} className="bg-pink-300 absolute cursor-pointer right-[-10px] top-[-10px] rounded-full ">
                        <XIcon className="h-6 " />

                    </div>
                    <div className="h-full w-full flex flex-col overflow-scroll items-center rounded-md">
                        {/* <div>
                            <img src="" alt="" className="rounded-full h-10"/>
                        </div> */}
                        {
                            JSONDATA.map((user)=>{
                                return (

                        <div className="flex items-center justify-between p-2 border rounded-md cursor-pointer mt-2 w-[95%] hover:shadow-md " >
                            <div>
                                <p className="font-bold">{user.first_name + " " + user.last_name}</p>
                                <p className="text-sm text-gray-400">{user.email}</p>
                            </div>
                            <div>
                                <button className="font-bold text-pink-500 text-sm">Follow</button>
                            </div>
                        </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default SuggesionSeeAll
