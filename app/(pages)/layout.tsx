
import React, { ReactNode } from 'react'

import Navbar from '@/components/Navbar'
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
async function Pagelayout({children}:{children:ReactNode}) {
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    redirect('/sign-in');
  }
  return (
    <div className='root-layout'>
     <Navbar/>
      {children}
    </div>
  )
}

export default Pagelayout