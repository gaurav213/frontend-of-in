import React from 'react'
import Filters from './Filters'
import Posts from './Posts'




const MainPage = () => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-5 space-x-4    h-[700px] ">
                <div className="hidden  lg:hidden md:hidden xl:inline">
                    <div className=" pl-4 flex flex-col  justify-evenly space-y-4">

                        <div className="h-[300px] rounded-lg"></div>
                        <div className="h-[300px] brounded-lg"></div>

                    </div>
                </div>

                <div className=" rounded-lg col-span-2 ">
                    <div className=" flex flex-col items-center overflow-auto">
                        <Posts />
                    </div>
                </div>

                <div className="grid grid-rows-3 gap-4   rounded-lg ">
                    {/* top part */}
                    <div className=" row-span-2 h-[400px] rounded-lg  ">
                        {/* filters */}
                        <div className="flex flex-col">
                            <Filters />

                        </div>


                    </div>


                </div>


            </div>
        </>
    )
}

export default MainPage
