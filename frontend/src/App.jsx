import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/login'
import SignUp from './pages/signup/signUp'
import Home from './pages/home/home'
import { Route, Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (

    
    <div className='p-4 flex items-center justify-center h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
      <Toaster/>
      
      
    </div>
  )
}

export default App
