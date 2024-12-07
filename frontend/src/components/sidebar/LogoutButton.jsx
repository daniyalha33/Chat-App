import React from 'react'
import { SlLogout } from "react-icons/sl";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const {logout}=useLogout();
  return (
    <div className='mt-auto'>
      <SlLogout className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>
    </div>
  )
}

export default LogoutButton
