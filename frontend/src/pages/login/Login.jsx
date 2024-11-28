import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col mx-auto min-w-96 items-center justify-center'>
        <div className='w-full rounded-lg shadow-md p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500 m-3'>ChitChat</span>
            </h1>
            <form action="">
                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter your username' className='w-full input input-bordered h-10'/>
                </div>
                
            </form>
            <div>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter your username' className='w-full input input-bordered h-10'/>
                </div>
        </div>
      
    </div>
  )
}

export default Login 
