"use client";
import { useEffect, useState } from 'react';
import TSParticles from "@/components/Particles";
import { EmailSubscribe } from "@/components/EmailSubscribe";
import Image from 'next/image';

export default function Home() {
  const [colors, setColors] = useState({
    glow1: { r: 0, g: 0, b: 0 },
    glow2: { r: 0, g: 0, b: 0 }
  });

  useEffect(() => {
    setColors({
      glow1: {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
      },
      glow2: {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
      }
    });
  }, []);

  return (
    <div className="h-screen bg-[#001] text-white selection:bg-white selection:text-black overflow-hidden">
      <div className="absolute inset-0 z-1 translate-y-1/6 overflow-hidden">
        <TSParticles/>
        {/* Radial mask for particles */}
      </div>
      
      <div className="h-screen w-full flex flex-col items-center justify-center px-4 relative z-10 overflow-hidden">
        {/* Animated colored glows */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <div 
            className="absolute w-[300px] md:w-[30vw] h-[700px] md:h-[50vw] -bottom-20 rounded-full blur-[100px] animate-glow-float-1 -translate-x-1/4" 
            style={{ backgroundColor: `rgba(${colors.glow1.r}, ${colors.glow1.g}, ${colors.glow1.b}, 0.125)` }}
          />
          <div 
            className="absolute w-[450px] md:w-[45vw] h-[650px] md:h-[45vw] -bottom-20 rounded-full blur-[100px] animate-glow-float-2 translate-x-1/4"
            style={{ backgroundColor: `rgba(${colors.glow2.r}, ${colors.glow2.g}, ${colors.glow2.b}, 0.125)` }}
          />
        </div>
        
        {/* Cosmic horizon effect */}
        <div className="absolute top-[65%] w-full h-[400px] bg-gradient-to-t from-black via-purple-900/10 to-transparent" />
        
        {/* Multiple propulsion light beams */}
        {/* <div className="absolute top-[40%] w-full flex justify-center">
          <div className="relative w-48 flex justify-center">
            <div className="w-32 h-[60vh] bg-gradient-to-t from-white/5 via-white/10 to-transparent blur-2xl animate-beam-1" />
            <div className="absolute w-24 h-[50vh] bg-gradient-to-t from-white/10 via-white/20 to-transparent blur-xl animate-beam-2" />
            <div className="absolute w-16 h-[40vh] bg-gradient-to-t from-white/20 via-white/30 to-transparent blur-lg animate-beam-3" />
            
            <div className="absolute -left-8 w-8 h-[45vh] bg-gradient-to-t from-white/10 via-white/15 to-transparent blur-xl animate-beam-4" />
            <div className="absolute -right-12 w-12 h-[55vh] bg-gradient-to-t from-white/8 via-white/12 to-transparent blur-xl animate-beam-5" />
            <div className="absolute left-4 w-10 h-[35vh] bg-gradient-to-t from-white/15 via-white/20 to-transparent blur-lg animate-beam-6" />
          </div>
        </div> */}
        

        <div className="absolute bottom-0 left-0 w-1/2 h-screen bg-gradient-to-r from-black via-black to-transparent z-10 transform-gpu blur-xl -translate-x-1/2" />
        {/* Right to center gradient mask */}
        <div className="absolute bottom-0 right-0 w-1/2 h-screen bg-gradient-to-l from-black via-black to-transparent z-10 transform-gpu blur-xl translate-x-1/2" />
            
        {/* Outer glow */}
        <div className="absolute bottom-[-10%] w-screen">
          <div className="absolute -top-48 left-0 right-0 h-[75vh] ">
           {/* Base glow layers */}
            {/* <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-screen h-[75vh] bg-white/40 rounded-[500%] blur-lg transform-gpu" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-screen h-[75vh] bg-white/55 rounded-[500%] blur-lg transform-gpu" /> */}
            
            {/* Intense center glow */}
            {/* <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[50vw] h-[75vh] bg-white/60 rounded-[500%] blur-xl transform-gpu" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[25vw] h-[75vh] bg-white/80 rounded-[500%] blur-xl transform-gpu" />
             */}
            {/* Dark border to contain the glow */}
            <div className="absolute -top-34 left-1/2 -translate-x-1/2 w-[300vw] md:w-[150vw] h-[75vh] shadow-[0_0px_100px_10px_rgba(255,255,255,0.4),inset_0_0_50px_rgba(255,255,255,0.15)] bg-white z-1 rounded-[100%] transform-gpu" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500vw] md:w-[175vw] h-[75vh] shadow-[0_-15px_20px_-12px_rgba(255,255,255,0.15),inset_0_0_20px_rgba(255,255,255,1)] bg-[#001]  z-2 rounded-[100%] transform-gpu" />
          </div>
        </div>
        
        
        <div className="relative flex flex-col items-center animate-fallDown w-5/6 md:w-full mb-20 md:mb-0">
          {/* Profile image */}
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image 
              src="/profile.jpg" 
              alt="Profile" 
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Social links */}
          <div className="flex gap-4 mb-8">
            <a href="https://www.instagram.com/sajyd" className="px-4 py-2 bg-[rgba(255,255,255,0.1)] rounded-full text-sm hover:bg-[rgba(255,255,255,0.2)] transition-colors flex flex-row gap-1 items-center justify-center">
              <Image 
                alt="instagram icon" 
                src="/instagram.webp" 
                width={16}
                height={16}
                className='h-4 w-4'
              />
              <span>@sajyd</span>
            </a>
            <a href="https://www.linkedin.com/in/sajyd/" className="px-4 py-2 bg-[rgba(255,255,255,0.1)] rounded-full text-sm hover:bg-[rgba(255,255,255,0.2)] transition-colors flex flex-row gap-1 items-center justify-center">
              <Image 
                alt="linkedin icon" 
                src="/linkedin.webp" 
                width={16}
                height={16}
                className='h-4 w-4'
              />
              <span>@sajyd</span>
            </a>
          </div>

          {/* Main content */}
          <div className="text-center space-y-4 animate-fadeIn max-w-[600px] w-[90%] md:w-full">
            <h1 className="text-5xl flex justify-center gap-2">
              <span className="animate-[fadeIn_1s_ease-in]">
                <strong>Join</strong>
              </span>
              <span className="animate-[fadeIn_1s_ease-in_0.5s] italic font-serif font-cursive opacity-0 [animation-fill-mode:forwards]">
                my
              </span>
              <span className="font-serif italic font-cursive animate-[fadeIn_1s_ease-in_1s] opacity-0 [animation-fill-mode:forwards]">
                waitlist.
              </span>
            </h1>
            <p className="text-neutral-400">
              Be first in line for private events, 1:1 coaching & more. Limited spots.
            </p>
            
            <EmailSubscribe />
          </div>
        </div>
      </div>
    </div>
  );
}
