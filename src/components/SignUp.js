import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="h-[100vh] w-[100vw] flex mb-10  items-center  justify-center">
            <div>
                <div className="flex w-[95vw] md:w-[80vw] lg:w-[60vw] xl:w-[40vw]  justify-center container rounded-[20px] shadow-lg border container ">
                    <div className="flex flex-col justify-around h-[100%] w-[80%] ">
                        <div className="flex flex-col container  items-center gap-8 justify-between ">
                            <h1 className="text-3xl mt-3">Create a new account</h1>
                            <div className="w-full flex flex-col gap-2">

                                <input className="pl-2 border-b-2 border-gray-500  outline-none focus:border-pink-400 focus:outline-none h-[30px] rounded-lg  w-[90%]" type="text" placeholder="Enter your Name " />


                            </div>
                            <div className="w-full">
                                <input className="pl-2 border-b-2 border-gray-500  focus:border-pink-400  focus:outline-none h-[30px] rounded-lg w-[90%]" type="text" placeholder="Enter your phone number" />

                            </div>
                            <div className="w-full">
                                <input className="pl-2 border-b-2 border-gray-500  focus:border-pink-400  focus:outline-none h-[30px] rounded-lg w-[90%]" type="email" placeholder="Enter your email address" />

                            </div>
                            <div className="w-full">
                                <input className="pl-2 border-b-2 border-gray-500  focus:border-pink-400  focus:outline-none rounded-lg h-[30px] w-[90%]" type="password" placeholder="Enter your password" />

                            </div>


                        </div>
                        <div className="flex items-center m-3 justify-around">
                            <button class=" p-2 text-lg text-white rounded-lg bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300 ...">
                                SignUp
                            </button>
                            <Link to="/login">
                                <p className="hover:text-pink-600">already have an account?</p>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default SignUp;
