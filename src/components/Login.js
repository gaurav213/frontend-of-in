import React from 'react'

const Login = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex mb-10  items-center  justify-center">
        <div>
          <div className="flex  justify-center container rounded-[20px] shadow-lg border   h-[40vh] w-[95vw] md:w-[80vw] lg:w-[60vw] xl:w-[40vw]">
            <div className="flex flex-col justify-around h-[100%] w-[80%] ">
              <div className="flex flex-col   items-center gap-8 justify-around ">
                <h1 className="text-3xl">Login to your account</h1>
                <input className="pl-2 border-b-2 border-gray-500  outline-none focus:border-pink-400 focus:outline-none h-[30px] rounded-lg  w-[90%]" type="email" placeholder="Enter your email address" />
                <input className="pl-2 border-b-2 border-gray-500  outline-none focus:border-pink-400 focus:outline-none h-[30px] rounded-lg  w-[90%]" type="password" placeholder="Enter your password" />

              </div>
              <div className="flex items-center justify-around">
                <button class="h-[54px] w-[108px] text-lg text-white rounded-lg bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300 ...">
                  Login
                </button>             <a href="/forgot-password" className="">Forgot password ?</a>

              </div>
            </div>
          </div>
        </div>



      </div>

    </>
  )
}

export default Login
