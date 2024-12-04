import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../signup/useLogin'
import toast from 'react-hot-toast'

const Login = () => {
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const {login}=useLogin();
    const handleSubmit=async(e)=>{
       e.preventDefault();
       if (!username || !password) {
        toast.error("Username and password are required")
        return
    }
       await login(username,password)
    }
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
                    <input type="text" onChange={(e)=>setUserName(e.target.value)} placeholder='Enter your username' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Enter your password' className='w-full input input-bordered h-10'/>
                </div>
                <Link to="/sign-up" href="#" className='mt-2 inline-block hover:underline hover:text-blue-600 text-sm'>
                    {"Don't "} have an account? 
                </Link>
                <button className='btn btn-block btn-sm mt-2' onClick={handleSubmit}>Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login 
