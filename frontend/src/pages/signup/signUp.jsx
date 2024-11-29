import React from 'react'
import Checkbox from './checkbox'
const SignUp = () =>  {
    return (
      <div className='flex flex-col mx-auto min-w-96 items-center justify-center'>
          <div className='w-full rounded-lg shadow-md p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
              <h1 className='text-3xl font-semibold text-center text-gray-300'>
                  SignUp
                  <span className='text-blue-500 m-3'>ChitChat</span>
              </h1>
              <form action="">
              <div>
                      <label htmlFor="" className='label p-2'>
                          <span className='text-base label-text'>FullName</span>
                      </label>
                      <input type="text" placeholder='Enter your full name' className='w-full input input-bordered h-10'/>
                  </div>
                  <div>
                      <label htmlFor="" className='label p-2'>
                          <span className='text-base label-text'>Username</span>
                      </label>
                      <input type="text" placeholder='Enter your username' className='w-full input input-bordered h-10'/>
                  </div>
                  <div>
                      <label htmlFor="" className='label p-2'>
                          <span className='text-base label-text'>Password</span>
                      </label>
                      <input type="text" placeholder='Enter your password' className='w-full input input-bordered h-10'/>
                  </div>
                  <div>
                      <label htmlFor="" className='label p-2'>
                          <span className='text-base label-text'>Confirm</span>
                      </label>
                      <input type="text" placeholder='Enter password again' className='w-full input input-bordered h-10'/>
                  </div>
                 <Checkbox/>

                  <a href="#" className='mt-2 inline-block hover:underline hover:text-blue-600 text-sm'>
                      {"Already"} have an account? 
                  </a>
                  <button className='btn btn-block btn-sm mt-2'>Sign up</button>
              </form>
          </div>
        
      </div>
    )
  }

export default SignUp
