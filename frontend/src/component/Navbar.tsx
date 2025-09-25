import React from 'react'
import { HeartHandshake } from 'lucide-react';

const Navbar = () => {
  return (
<div className="fixed top-0 w-full h-16 bg-black/10 backdrop-blur-md text-black flex items-center justify-between z-50 px-8">
      
      {/* Left side - Logo */}
      <div className="font-bold text-lg cursor-pointer flex">
        M3A
         <HeartHandshake className="w-6 h-6 text-rose-400 hover:text-rose-600" />  
         M3A
      </div>

      {/* Center - Navigation buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-1 bg-rose-400 text-white rounded cursor-pointer hover:bg-rose-500 transition">
          <a href="#feature" >
            Features
          </a>
        </button>
        <button className="px-4 py-1 bg-rose-400 text-white rounded cursor-pointer hover:bg-rose-500 transition">
          <a href="#how" >
            How It Works
          </a>
        </button>
        <button className="px-4 py-1 bg-rose-400 text-white rounded cursor-pointer hover:bg-rose-500 transition">
          <a href="opinons">
            Voices of Success
          </a>
        </button>
      </div>
      
      {/* Right side - Auth buttons */}
      <div className="flex">
        <button className="px-4 py-1 text-rose-500 hover:text-rose-600 cursor-pointer pointer-coarse: transition">
          Login
        </button>
        <button className="px-4 py-1 bg-rose-400 text-white rounded cursor-pointer hover:bg-rose-600 transition">
          Get Started
        </button>
      </div>
      
    </div>
  )
}

export default Navbar

