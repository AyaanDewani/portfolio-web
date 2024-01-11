'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>DSA</li>
                <li>ReactJS</li>
                <li>Node.js</li>
                <li>Flask</li>
                <li>JavaScript</li>
            </ul>
        )

    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Aga Khan Academy, Hyderabad</li>
                <li>Boston University</li>
                <li>Intern at the office of Admissions and Communications @Aga Khan Academy</li>
                <li>ML and Deep Neural Networks Academy tutor @idTech @MIT</li>
            </ul>
        )
    }, 
    {
        title: 'Awards',
        id: 'awards',
        content: (
            <ul className='list-disc pl-2'>
                <li>Recepient of Radhe Shyam Khanna Scholarship @BU, full ride</li>
                <li>State 1st in Physics Olympiad, Telangana, India</li>
                <li>State 3rd in Reasoning Olympiad, Telangana, India</li>
                <li>Runners Up @NASA Bootcamp</li>
                <li>Best Scout in 2021</li>
            </ul>
        )
    }, 
]


const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [ isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(()=> {
            setTab(id)
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>  
            <p className='text-base lg:text-lg'>
                I am a full stack developer with a passion for creating interactive and responsive web applications. I also have experience working with JS, React, Node.js, Express, Flask, Tailwind, Prisma. I am also passionate about creating Machine Learning Models.
            </p> 
            <div className="flex flex-row justify-start mt-8">
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education and Experience</TabButton>
                <TabButton selectTab={() => handleTabChange("awards")} active={tab === "awards"}>Awards</TabButton>
            </div>
        <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>    
        </div>
    </section>
  )
}

export default AboutSection