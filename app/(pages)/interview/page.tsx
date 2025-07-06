import React from 'react'
import { getCurrentUser } from '@/lib/actions/auth.action'
import Agent from '@/components/agent'
const page = async() => {
  const user=await getCurrentUser();
  return (
    <>
    <h3>Interview Generation</h3>
    <Agent userName={user?.name} userId={user?.id} type="generate"/>
      
    </>
  )
}

export default page
