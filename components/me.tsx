"use client"
import React from 'react'
import Image from 'next/image';
import { toast } from 'sonner';
import { removeUser } from '@/lib/actions/auth.action';
const Me = ({username,useremail}:Meprops) => {
    async function logout(){
        const action=await removeUser();
         if(action.success){
                toast.success(action.message);
              }



    }
  return (
     <div className='flex justify-center'>
  <div className='flex flex-col items-center justify-center bg-blue-950/100  h-[600px] w-[900px] rounded-2xl'>
    <div>
        <p className='text-5xl font-bold mt-[-40px]'>Your Profile</p>
    </div>
    <div className=' rounded-2xl mt-[70px] bg-white w-[200px] h-[200px] overflow-hidden'>
      <Image 
        src="/user-avatar.png" 
        alt="user-avatar" 
        width={200} 
        height={200} 
        className='object-cover w-full h-full' 
      />
    </div>

    <div className='mt-[30px] flex'>
      <p className='text-2xl font-bold'>Username: </p>
      <p className='m-1 text-xl'> {username}</p>
    </div>


    <div className='flex mt-[10px]'>
      <p className='text-2xl font-bold'>Email: </p>
      <p className='m-1 text-xl'> {useremail}</p>
    </div>
    
    <button className='mt-[40px] bg-red-600 hover:cursor-pointer  rounded-3xl h-[40px] w-[100px] flex justify-center text-xl font-bold p-1' onClick={logout}>
      Logout
    </button>
    

  </div>
</div>

  )
}

export default Me
