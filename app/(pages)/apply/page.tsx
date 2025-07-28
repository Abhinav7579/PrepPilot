import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex justify-center text-3xl font-bold'>
        Apply for latest jobs
      </div>
      <div className='bg-white rounded-2xl p-2 mt-4'>
       <p className="text-black">
        <span className="font-bold">Company-</span> Philips
      </p>
        <p className="text-black">
        <span className="font-bold">Position -</span> Intern
      </p>
        <p className="text-black">
        <span className="font-bold">Qualification-</span>  Bachelor’s/ Master’s Degree
      </p>
       
        <p className="text-black">
        <span className="font-bold">Experience-</span>  Freshers
      </p>
       <p className="text-black">
        <span className="font-bold">Link-</span>{' '}
         <a href="https://www.careers.philips.com/in/en/job/555310/Intern" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Click here
          </a>
         </p>
          
        
      </div>

    </div>
  )
}

export default page
