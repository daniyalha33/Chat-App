import {React,useState} from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../hooks/useConversation';
import useZustandConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const {conversations}=useConversation();
  const {setSelectedConversation}=useZustandConversation();
  const [search,setSearch]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if (!conversations || !Array.isArray(conversations)) {
      toast.error('Conversations data is unavailable');
      return;
    }
    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    }else{
      toast.error('No such user exists')
    }


  }
  return (
   <form onSubmit={handleSubmit} className='flex items-center gap-2'>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='input input-bordered rounded-full' placeholder='Search...' />
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'><FaSearch className='outline-none' /></button>
   </form>
  )
}

export default SearchInput
