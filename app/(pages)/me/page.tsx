
import { getCurrentUser } from '@/lib/actions/auth.action'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';


async function page() {
    const user=await getCurrentUser();
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
      <p className='m-1 text-xl'> {user?.name}</p>
    </div>


    <div className='flex mt-[10px]'>
      <p className='text-2xl font-bold'>Email: </p>
      <p className='m-1 text-xl'> {user?.email}</p>
    </div>
    
    <div className='mt-[40px] bg-red-600 rounded-3xl h-[40px] w-[100px] flex justify-center text-xl font-bold p-1'>
        <Link href="">Logout</Link>

    </div>

  </div>
</div>

  )
}

export default page