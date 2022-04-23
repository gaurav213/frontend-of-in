import React from 'react'
import { FilterIcon, SearchIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import Suggestions from './Suggestions';


const Filters = () => {
    return (
        
        <div className="container  w-[300px] h-[700px]  fixed  p-4 mt-2  rounded-lg">
            <div className="">
                <div className="flex items-center ml-5 space-x-3 ">
                    <FilterIcon className="h-7" />
                    <h2>Category</h2>
                    <div>
                        <form >

                            <select name="cars" id="cars" >
                                <option value="volvo">Engineer</option>
                                <option value="saab">Plumber</option>
                                <option value="opel"> Designer</option>
                                <option value="audi">Electrician</option>
                            </select>


                        </form>
                    </div>


                </div>



            </div>
            <div>
                <div className="flex items-center  mt-10 space-x-4 ml-5 ">
                    <LocationMarkerIcon className="h-7" />
                    <h2>Location</h2>
                    <div>
                        <form >

                            <select name="cars" id="cars">
                                <option value="Sangmaner">Sangmaner</option>
                                <option value="Akola">Akola</option>
                                <option value="Junnar">Junnar</option>
                                <option value="Shirdi">Shirdi</option>
                            </select>


                        </form>
                    </div>
                </div>

            </div>
            
        {/* suggestions */}
        <Suggestions />


        </div>
    )
}

export default Filters
