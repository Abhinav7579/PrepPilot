"use client"
import React, { useState } from 'react';


import { toast } from 'sonner';
import { Contactus } from '@/lib/actions/other.action';
import { useRouter } from 'next/navigation';

export default function Queries() {
 const router=useRouter();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    try{
      const query=await Contactus({
        name:name,
        email:email,
        subject:subject,
        message:message
      })

      if(!query.success){
        toast.error(query?.message);
        return
      }
      
      toast.success("query successfully submitted");
       setname("");
      setemail("");
      setsubject("");
      setmessage("");
      router.push("/home");

    }
    catch(error){
      console.log(error);
      toast.error(`There was an error: ${error}`);

    }
  };

  return (
    <div className=" bg-gray-900 rounded-2xl">
      

      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions about our test preparation programs? We're here to help you succeed on your journey to academic excellence.
          </p>
        </div>
      </section>

      
      
      <section className="py-20  bg-gray-900">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid  grid-cols-1  gap-12">
        
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e)=>{setname(e.target.value)}}
                        required
                        className="form-input w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e)=>{setemail(e.target.value)}}
                        required
                        className="form-input w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      onChange={(e)=>{setsubject(e.target.value)}}
                      required
                      className="form-input w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="courses">Course Information</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="partnership">Partnership Opportunities</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      onChange={(e)=>{setmessage(e.target.value)}}
                      required
                      rows={6}
                      className="form-input text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn-primary w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700"
                  >
                    
                    <span>Send Message</span>
                  </button>
                
              
          </div>
           
            </div>
        </div>
      </section>
      

      
      <section className="py-20 m-8 mt-[-20px] bg-white rounded-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions about prepPilot</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How quickly will I receive a response?</h3>
              <p className="text-gray-600">We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.</p>
            </div>
            
            <div className="bg-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">From where do you get all these interviews qustion?</h3>
              <p className="text-gray-600">At present, our content is sourced from Gemini. Please contact us for further details..</p>
            </div>
            
            <div className="bg-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer online or in-person classes?</h3>
              <p className="text-gray-600">We provide both online and in-person instruction options to accommodate different learning preferences and schedules.</p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}

