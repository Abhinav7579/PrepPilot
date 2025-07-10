import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser} from '@/lib/actions/auth.action'
import { getInterviewByUserId, getLatestInterviews } from '@/lib/actions/general.action'

async function page() {
  const user=await getCurrentUser();

  const[userInterviews,latestInterviews]=await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({userId:user?.id!})
  ])


  //@ts-ignore
  const hasPastInterviews=userInterviews?.length>0;
  //@ts-ignore
  const hasUpcomingInterviews=latestInterviews?.length>0;
  

  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-4 '>
        <p className=' text-xl lg:text-3xl '>Get Interview-Ready with AI-powered Practise and Feedback</p>
        <p >practice real interview questions and get instant feedback</p>
        <Button className='btn-primary max-sm:w-full mt-2'>
          <Link href="/interview">Start an interview</Link>
        </Button>
      </div>
      <Image src="/robot.png" alt="robo" width={400} height={400} className="max-sm:hidden"></Image>
    </section>
    <section className='flex flex-col gap-6 mt-8'>
      <h2>Your Interviews</h2>
      <div className='interviews-section'>
        
        {
         hasPastInterviews?(
          userInterviews?.map((interview)=>(
            <InterviewCard {...interview} key={interview.id}/>
           ))): ( <p>no interview yet</p> )
        }

      </div>
    </section>
    <section className='flex flex-col gap-6 mt-8 '>
      <h2>Take an interview</h2>
      <div className='interviews-section'>
    
       {
         hasUpcomingInterviews?(
          latestInterviews?.map((interview)=>(
            <InterviewCard {...interview} key={interview.id}/>
           ))): ( <p>there are no new interviews available</p> )
        }
      </div>
    </section>
    </>
  )
}

export default page