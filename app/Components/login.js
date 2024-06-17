'use client'
import React from 'react'
import circle from '../../public/Assets/Circle.svg'
import Message from '../../public/Assets/Message.svg'
import Skeleton from '../../public/Assets/Skeleton.svg'
import logo from '../../public/Assets/logo.svg'
import google from '../../public/Assets/google.svg'
import { signIn } from 'next-auth/react'
const login = () => {
  return (
    <>
    {/* screen */}
    <div className=' w-[100%] h-[100vh] bg-[#FFE6C9] pt-1'>
      {/* inner parent */}
      <div className='rounded-xl border-[white] mx-auto mt-11  border-[solid] border-[7px] max-w-[1100px] h-[540px] flex justify-center'>
        {/* left */}
        <div className='w-[600px]'>
          {/* relative */}
          <div className='relative h-[478px]'>
          {/* circle */}
          <div className='absolute w-[48%] left-[9.3rem] top-[3rem]'> 
            <img src={circle.src}></img>
          </div>
          {/* skeleton */}
          <div className='w-[40%] absolute top-[120px] left-[10.5rem]'>
            <img src={Skeleton.src}></img>
          </div>
          {/* message */}
          <div className='w-[15%] absolute left-[23rem] top-40'>
            <img src={Message.src}></img>
          </div>
          {/* message */}
          <div className='w-[15%] absolute top-40 left-[8rem]'>
            <img src={Message.src}></img>
          </div>
          {/* text */}
        <div className=' absolute left-[60px] bottom-0'>
          {/* inner parent */}
          <div className='text-[#73114B] text-center'>
            {/* b-text */}
            <div className='font-extrabold text-[22px]'>Express your thoughts</div>
            {/* sm-text */}
            <div className='leading-[20px]'>Start for free and get attractive offers from the community</div>
          </div>
        </div>
        </div>
        </div>
        {/* right */}
        <div className='w-[500px] bg-white'>
          {/* fluid */}
          <div className='max-w-[290px] mx-auto mt-8'>
            {/* inner parent */}
            <div>
              {/* img */}
              <div>
                <img className='w-[10%]' src={logo.src}></img>
              </div>
              {/* b-text */}
              <div className='font-extrabold text-[22px] text-[#73114B]'>Login to your Accout</div>
              {/* sm-text */}
              <div className='text-[#73114B] text-[12px]'>See what is going on with your business</div>
            {/* button */}
            <div className='mt-7 relative border-[#c8c6c6] border-[1px] border-[solid] rounded-[4px] w-[100%]'>
              <div className='cursor-pointer absolute mt-[6px] left-14'><img src={google.src}></img></div>
              <button onClick={() =>signIn('google')} className='text-[14px] text-[#828282] py-2 text-center pl-7 w-[100%]' type='button'>Continue with Google</button></div>
            {/* sign in ------- */}
            <div className='relative mt-4 text-center'>
              <div className='cursor-pointer outline-none text-[#828282] text-[12px]'>------------ or Sign in with Email ------------</div>
            </div>
            {/* email */}
            <div className=' mt-6 text-[#828282] text-[14px]'>Email</div>
            <div className='mt-1 border-[#c8c6c6] border-[1.5px] border-[solid] rounded-[3px] w-[100%]'><input placeholder='mail@gmail.com' type='email' className='pl-2 text-[14px] text-[#828282] py-2 w-[100%]'></input></div>
            {/* password */}
            <div className=' mt-5 text-[#828282] text-[14px]'>Password</div>
            <div className='mt-1 border-[#c8c6c6] border-[1.5px] border-[solid] rounded-[3px] w-[100%]'><input placeholder='***********************' type='password' className='pl-2 text-[14px] text-[#828282] py-2 w-[100%]'></input></div>
            {/* left right checkboxes container */}
            <div className='flex justify-between items-center mt-2'>
              {/* left */}
              <div>
                {/* flex */}
                <div className='flex justify-start items-center'>
                {/* checkbox */}
                <div><input  className='accent-[#7F265B]' type='checkbox'></input></div>
                {/* text */}
                <div className='ml-2 text-[#828282] text-[11px]'>Remember Me</div>
                </div>
              </div>
              {/* right */}
              <div>
                <div className='cursor-pointer text-[#7F265B] text-[11px] font-bold'>Forgot Password?</div>
              </div>
            </div>
            {/* login button */}
            <div className='mt-5'><button placeholder='Continue with Google' className='text-[14px] bg-[#7F265B] text-white py-[10px] text-center rounded-[3px] w-[100%]' type='button'>Login</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default login
