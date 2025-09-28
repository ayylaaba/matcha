import React from 'react'
import { HeartHandshake } from 'lucide-react';
import Link  from "next/link";

const Navbar = () => {
  return (
<div className="fixed top-0 w-full h-16 bg-black/10 backdrop-blur-md text-black flex items-center justify-between z-50 px-8">
      
      {/* Left side - Logo */}
      <div className="flex  font-bold text-lg cursor-pointer text-white ">
          <Link href="/" className="flex items-center space-x-2">
            M3A
            <HeartHandshake className="w-6 h-6 text-rose-400 hover:text-rose-600" />  
            M3A
          </Link>
      </div>

      {/* Center - Navigation buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-1 bg-rose-400 text-white rounded cursor-pointer hover:bg-rose-500 transition">
          <Link href="#feature" >
            Fetures
          </Link>
        </button>
        <button className="px-4 py-1 bg-rose-400 text-white rounded cursor-pointer hover:bg-rose-500 transition">
          <Link href="#howitworks">
            How It Works
          </Link>
        </button>
        <button className="px-4 py-1 bg-rose-400 text-white rounded cursor-pointer hover:bg-rose-500 transition">
          <Link href="#opinons">
            Voices of Success
          </Link>
        </button>
      </div>
      
      {/* Right side - Auth buttons */}
      <div className="flex">
        <Link href="/login">
          <button className="px-4 py-1 text-rose-500 hover:text-rose-600 cursor-pointer pointer-coarse: transition">
            Login
          </button>
        </Link>
        <Link  href="/register">
          <button className="px-4 py-1 bg-rose-400 text-white rounded cursor-pointer hover:bg-rose-600 transition">
            Get Started
          </button>
        </Link>
      </div>
      
    </div>
  )
}

export default Navbar

