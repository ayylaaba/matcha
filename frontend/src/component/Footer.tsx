import React from 'react'
import { HeartHandshake } from 'lucide-react';


const Footer = () => {
  return (
    <div className="w-screen h-[100px] flex justify-around items-baseline bg-rose-100 text-black text-center  pt-7">
       <div className="font-bold text-lg cursor-pointer flex">
        M3A
         <HeartHandshake className="w-6 h-6 text-rose-400 hover:text-rose-600" />  
         M3A
      </div>
      <p className='mt-2 text-gray-400' >
        © 2024 Matcha. All rights reserved.
      </p>
      <div className="flex justify-center items-center space-x-4">
        <a href="" className='hover:text-gray-400'>
          Privacy Policy | Terms of Service
        </a>
        <a href="" className='hover:text-gray-400'>
          Terms of Service
        </a>
        <a href="" className='hover:text-gray-400'>
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Footer
