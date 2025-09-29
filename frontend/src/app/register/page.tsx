import React from 'react'
import Image from "next/image";
import coupleImage from "../../../public/rose/rose4.jpg";
import { arvo, exo2 } from "@/font";
import { FcGoogle } from "react-icons/fc";
import { ArrowRight, Heart, Mail, Lock, User, Eye, EyeOff, Check } from "lucide-react"
import { ImFacebook2 } from "react-icons/im";


const register = () => {
  return (
  <div className='flex justify-center items-center min-h-screen w-full py-8 mt-10 mb-20'>
    <div className="fixed inset-0 -z-10">
      <Image src={coupleImage} alt="couples"
          fill
          priority
          className="object-cover blur-[2px] brightness-70"
        />
      </div>
      <div className='absolute bg-gray-100 mt-10 h-[800px] w-[500px] rounded-lg shadow-lg'>
        <div className='flex justify-center items-center mt-10'>
          <Heart className="flex  justify-center items-center w-15 h-15 p-2 bg-gradient-to-r from-rose-400 to-pink-500  rounded-2xl text-white mb-3" />
        </div>
        <div className='flex flex-col justify-center items-center gap-y-2 mt-4'>
          <h1 className={`text-4xl bg-gradient-to-r from-rose-400 via-pink-500 to-orange-200 bg-clip-text text-transparent font-bold mb-2 ${arvo.className}`}>
            Find Your Match
          </h1>
          <p className={`text-gray-600 mb-6 text-[15px] ${exo2.className}`}>
            Create your account to start connecting
          </p>
        </div>
        <form className='flex flex-col justify-center items-center gap-y-4'>
            <div className='relative'>
                <User className='absolute h-4 w-4 left-3 top-3.5 text-gray-400' />
                <input type="text" placeholder='Username' className='pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400' />
            </div>
          <div className='relative'>
            <Mail className='absolute h-4 w-4 left-3 top-3.5 text-gray-400' />
            <input type="email" placeholder='Email' className='pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400' />
          </div>
          <div className='relative'>
            <Lock className='absolute h-4 w-4 left-3 top-3.5 text-gray-400' />
            <input type="password" placeholder='Password' className='pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400' />
          </div>
            <div className='relative'>
                <Lock className='absolute h-4 w-4 left-3 top-3.5 text-gray-400' />
                <input type="password" placeholder='Confirm Password' className='pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400' />
                <Eye className='absolute h-4 w-4 right-3 top-3.5 text-gray-400 cursor-pointer' />
                <EyeOff className='absolute h-4 w-4 right-3 top-3.5 text-gray-400 cursor-pointer' />
            </div>
            <div className='w-80 flex items-center'>
                <input type="checkbox" className='h-4 w-4 text-rose-500 focus:ring-rose-400 border-gray-300 rounded' />
                <span className='ml-2 text-sm text-gray-600'>
                    I agree to the <a href="#" className='text-rose-500 hover:underline'>Terms of Service</a> and <a href="#" className='text-rose-500 hover:underline'>Privacy Policy</a>
                </span>
            </div>
          <button type="submit" className="w-80 h-12 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 
              text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 
              shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            Sign In
          </button>
        </form>
        <div className='flex justify-center items-center mt-6'>
          <span className='absolute border-t border-gray-300 w-80'></span>
          <div className='relative bg-white px-4 text-gray-600 text-sm'>
            <p className=''>or continue with</p>
          </div>
        </div>
        <div className='flex flex-row row-2 justify-center items-center mt-4'>
          <div>
            <button className='w-40 h-15 border border-gray-300 rounded-xl flex items-center justify-center mr-4 mt-4 hover:shadow-md transition'>
              <div className="flex items-center gap-2 p-2">
                <FcGoogle />
                <span className='text-gray-600 font-semibold'>Google</span>
              </div>
            </button>
          </div>
          <div>
            <button className='w-40 h-15 border border-gray-300 rounded-xl flex items-center justify-center mr-4 mt-4 hover:shadow-md transition'>
              <div className="flex items-center gap-2 p-2">
                <ImFacebook2 />
                <span className='text-gray-600 font-semibold'>Google</span>
              </div>
            </button>
          </div>
        </div>
        <div className='relative flex justify-center items-center top-8'>
          <p className='text-gray-600 '>
            Don't have an account? 
          </p>
          <a href="#" className='text-rose-500 hover:underline ml-2'>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  )
}

export default register
