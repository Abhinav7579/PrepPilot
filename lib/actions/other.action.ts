"use server"

import { db,auth } from "@/firebase/admin";

export async function Contactus(params:QueriesProps){
    const{name,email,subject,message }=params;

    try{
        const user=await auth.getUserByEmail(email);
        if (!user)
      return{
        success: false,
        message: "email does not exist",
      };

       await db.collection('query').add({
            name,subject,email,message,timestamp: new Date().toISOString(),
        })
        return({
            success:true,
            message:"Query submitted successfully."
        })

    }
    catch(e:any){
        console.error(e);
         return {
      success: false,
      message: "Failed to submit query.",
    };
    }

}