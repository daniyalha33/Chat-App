import React from 'react'

const Checkbox = () => {
  return (
    <div className='flex gap-4'>
        <div className='form-control'>
            <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Male</span>
                <input 
                  type="checkbox" 
                  className='checkbox border-slate-900 border-2 bg-white hover:border-black focus:ring-2 focus:ring-black' 
                />
            </label>
        </div>
        <div className='form-control'>
            <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Female</span>
                <input 
                  type="checkbox" 
                  className='checkbox border-slate-900 border-2 bg-white hover:border-black focus:ring-2 focus:ring-black' 
                />
            </label>
        </div>
    </div>
  )
}

export default Checkbox
