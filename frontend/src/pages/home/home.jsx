import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import useLogin from '../../hooks/useLogin'


const Home = () => {
  const [username,setUsername]=useState('dani123')
const [password,setPassword]=useState('12345678')
const handleSubmit=async(e)=>{
  e.preventDefault();
  login(username,password)
}
const {login}=useLogin();

  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessageContainer/>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Home
