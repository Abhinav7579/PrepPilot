import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Play,
  Star,
  Zap
} from 'lucide-react';

function App() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Practice",
      description: "Train with our advanced AI that adapts to your industry and role, providing realistic interview scenarios."
    },
    {
      icon: Target,
      title: "Targeted Feedback",
      description: "Get detailed analysis of your responses, answering skills, and communication skills with actionable insights."
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your improvement over time with comprehensive analytics and performance metrics."
    },
    {
      icon: Users,
      title: "Industry Experts",
      description: "Questions curated by ai to help you ace your interview"
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white">
     
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black">
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full"></div>
                
              </div>
            </div>
            <div className="flex justify-center mt-[-100px] pb-[80px]">
               <p className=" text-5xl sm:text-5xl lg:text-7xl font-bold p-4 text-blue-300">PrepPilot</p> <Image src="logo.svg" alt="logo" width={100} height={100} ></Image></div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master Your Interviews with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                AI-Powered
              </span>{' '}
              Practice
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              PrepPilot transforms your interview preparation with personalized AI coaching, 
              real-time feedback, and industry-specific scenarios. Build confidence and land your dream job.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105">
                <Play className="h-5 w-5" />
                  <Link href="/sign-up">Get Started</Link>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-gray-900/50">
                 <Link href="/sign-in">Signin</Link>
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span></span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>voice assistant</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="h-4 w-4 text-blue-500" />
                <span>Easy to use</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="features" className="mt-[-100px] py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose PrepPilot?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform provides everything you need to excel in your next interview
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-blue-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-gradient-to-r from-blue-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of professionals who've transformed their interview skills with PrepPilot. 
            Start your free trial today and experience the future of interview preparation.
          </p>
        </div>
      </section>

     
      
    </div>
  );
}

export default App;