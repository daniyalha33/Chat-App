import React, { useContext, useState } from 'react'
import Checkbox from './checkbox'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios';
import { AuthContext, useAuthContext } from '../../context/AuthContext';
const SignUp = () =>  {
    const [inputs,setInputs]=useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:"",
        email:""
    })
    const {authUser,setAuthUser}=useAuthContext()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputs.fullName || !inputs.username || !inputs.password || !inputs.confirmPassword || !inputs.gender || !inputs.email) {
            return toast.error("All fields must be filled");
        }
        if (inputs.password !== inputs.confirmPassword) {
            return toast.error("Passwords do not match");
        }
        if (inputs.password.length < 8) {
            return toast.error("Password must be at least 8 characters long");
        }
        try {
            const { data } = await axios.post("http://localhost:8000/api/auth/signup", inputs, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (data.success) {
                toast.success("User registered successfully!");
                localStorage.setItem('chat-user', JSON.stringify(data)); // Save to localStorage
                setAuthUser(data); // Update the authUser state
            } else {
                toast.error(data.message || "An error occurred");
            }
        } catch (error) {
            const errorMessage = error.response?.data?.error || "Something went wrong. Please try again.";
            toast.error(errorMessage);
        }
        
    };
    
    const handleCheckboxChange=(gender)=>{
        setInputs({...inputs,gender})
    }
    return (
      <div className='flex flex-col mx-auto min-w-96 items-center justify-center'>
          <div className='w-full rounded-lg shadow-md p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
              <h1 className='text-3xl font-semibold text-center text-gray-300'>
                  SignUp
                  <span className='text-blue-500 m-3'>ChitChat</span>
              </h1>
              <form onSubmit={handleSubmit}>
              <div>
                      <label htmlFor="" className='label p-2'>
                          <span className='text-base label-text'>FullName</span>
                      </label>
                      <input type="text" value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} placeholder='Enter your full name' className='w-full input input-bordered h-10'/>
                  </div>
                  <div>
                      <label htmlFor="" className='label p-2'>
                          <span className='text-base label-text'>Email</span>
                      </label>
                      <input type="text" value={inputs.email} onChange={(e)=>setInputs({...inputs,email:e.target.value})} placeholder='Enter your full name' className='w-full input input-bordered h-10'/>
                  </div>
                  <div>
                      <label htmlFor="" className='label p-2'>
                          <span className='text-base label-text'>Username</span>
                      </label>
                      <input type="text" placeholder='Enter your username'  value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})} className='w-full input input-bordered h-10'/>
                  </div>
                  <div>
                      <label htmlFor="" className='label p-2'>
                          <span className='text-base label-text'>Password</span>
                      </label>
                      <input type="text"  value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} placeholder='Enter your password' className='w-full input input-bordered h-10'/>
                  </div>
                  <div>
                      <label htmlFor="" className='label p-2'>
                          <span className='text-base label-text'>Confirm Password</span>
                      </label>
                      <input type="text" placeholder='Enter password again'  value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} className='w-full input input-bordered h-10'/>
                  </div>
                 <Checkbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

                  <Link to="/login" href="#" className='mt-2 inline-block hover:underline hover:text-blue-600 text-sm'>
                      {"Already"} have an account? 
                  </Link>
                  <button className='btn btn-block btn-sm mt-2'>Sign up</button>
              </form>
          </div>
        
      </div>
    )
  }

export default SignUp
