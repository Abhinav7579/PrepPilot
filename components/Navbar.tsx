"use client"
import {CircleUser,Phone} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
export default function Navbar(){
    const router=useRouter()
    return(
     <nav className=' mt-[-25px]'>
        <div className="flex justify-between">
        <Link href="/home" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={38} height={32}/>
        <h2 className='text-primary-100'>PrepPilot</h2>
        </Link>
         <div className="lg:gap-6 sm:gap-3 md:gap:5 flex justify-end">
            
        
        <Button  variant={"destructive"} size={"lg"}>
            <Link href="/apply">Apply for jobs</Link>
        </Button>
        <Phone className="cursor-pointer m-2" onClick={()=>{router.push("/contact")}}>
        </Phone>
        <CircleUser className="cursor-pointer m-2" onClick={()=>{router.push("/me")}}></CircleUser>
        </div>
        </div>
      </nav>
    )
}