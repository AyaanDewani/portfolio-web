"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { useRef } from 'react';

      

const HeroSection = () => {

    const handleDownload = () => {
        const fileUrl = 'https://drive.google.com/file/d/1bmpHjDFC7z-0GTOxlXOeVLLe8R80NZ8I/view?usp=sharing'; // Replace with your file URL
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'my-file.pdf'); // Optional filename
        link.click();
      };

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }; 
  return (
    
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">Hello, I'm {" "}</span>
                    <br></br>
                    <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Ayaan',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Web Developer',
          1000,
          'ML Engineer',
          1000,
          'Tutor',
          1000,
          'UI/UX Designer',
          1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    I am a Computer Science major at Boston University.
                </p>
                <div> 
                    <button onClick={scrollToBottom} className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 hover:bg-slate-200 text-white hover:text-slate-200' >Hire Me</button>
                    <button onClick={handleDownload} className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg-mt-0'>
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
                <Image
                    src='/images/hero-image.png'
                    alt='"hero image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection