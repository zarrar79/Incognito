import React from 'react'
import circle from '../../public/Assets/Circle.svg'
import Message from '../../public/Assets/Message.svg'
import Skeleton from '../../public/Assets/Skeleton.svg'
import logo from '../../public/Assets/logo.svg'
import google from '../../public/Assets/google.svg'
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
          <div className='max-w-[290px] mx-auto'>
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
            {/* input */}
            <div className='mt-7 relative border-[#c8c6c6] border-[1px] border-[solid] rounded-[4px] w-[100%]'>
              <div className='cursor-pointer absolute mt-[6px] left-14'><img src={google.src}></img></div>
              <button placeholder='Continue with Google' className='text-[14px] text-[#828282] py-2 text-center pl-7 w-[100%]' type='button'>Continue with Google</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default login
