
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

export default async function  Rootlayout({children}:{children:ReactNode}) {
    const isUserAuth=await isAuthenticated();
        if(isUserAuth) redirect('/home')
  return (
    <div className=''>
      {children}
    </div>
  )
}

