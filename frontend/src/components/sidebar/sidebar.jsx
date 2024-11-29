import React from 'react'
import SearchInput from './SearchInput';
import LogoutButton from './LogoutButton';
import Conversations from './Conversations';

const Sidebar = () => {
  return (
    <div className='border border-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <div className='divider h-10 my-0 py-0'></div>
        <Conversations/>
        <LogoutButton/>
      
    </div>
  )
}

export default Sidebar;
