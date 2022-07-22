import React from 'react'
import { IoLogoCss3, IoLogoNodejs, IoLogoGithub, IoLogoHtml5} from 'react-icons/io'
import { SiTailwindcss, SiJavascript, SiReact, SiRedux, SiExpress, SiSequelize, SiPostgresql } from 'react-icons/si'

const Skills = () => {
  return (
    <section name='skills' className='w-full h-screen bg-[#E7F6F2]'>
      <div className='max-w-[1000px] mx-auto'>

        <div>
          <p className='text-4xl font-bold inline text-[#2C3333] border-b-4 border-[#A5C9CA]'> Skills </p>
          <p className='py-4'> These are the tecnologies i've worked with </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

          <div className='flex flex-col justify-center items-center shadow-md shadow-[#bcd8d3] hover:scale-110 duration-200'>
            <IoLogoHtml5 color='#EF5B0C' size={100} className='my-2 '/>
            <p className='font-bold my-2'>HTML5</p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-md shadow-[#bcd8d3] hover:scale-110 duration-200'>
            <IoLogoCss3 color='#0078AA' size={100} className='my-2 '/>
            <p className='font-bold my-2'>CSS3</p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-md shadow-[#bcd8d3] hover:scale-110 duration-200'>
            <SiJavascript color='#F2DF3A' size={100} className='my-2 '/>
            <p className='font-bold my-2'>Javascript</p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-md shadow-[#bcd8d3] hover:scale-110 duration-200'>
            <SiTailwindcss color='#81CACF' size={100} className='my-2 '/>
            <p className='font-bold my-2'>Tailwind</p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-md shadow-[#bcd8d3] hover:scale-110 duration-200'>
            <SiReact color='#3AB4F2' size={100} className='my-2 '/>
            <p className='font-bold my-2'>React</p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-md shadow-[#bcd8d3] hover:scale-110 duration-200'>
            <SiRedux color='#A149FA' size={100} className='my-2 '/>
            <p className='font-bold my-2'>Redux</p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-md shadow-[#bcd8d3] hover:scale-110 duration-200'>
            <SiExpress color='#1B2430' size={100} className='my-2 '/>
            <p className='font-bold my-2'>Express</p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-md shadow-[#bcd8d3] hover:scale-110 duration-200'>
            <SiSequelize color='#0078AA' size={100} className='my-2 '/>
            <p className='font-bold my-2'>Sequelize</p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-md shadow-[#bcd8d3] hover:scale-110 duration-200'>
            <SiPostgresql color='#293462' size={100} className='my-2 '/>
            <p className='font-bold my-2'>Postgres</p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-md shadow-[#bcd8d3] hover:scale-110 duration-200'>
            <IoLogoNodejs color='#9EB23B' size={100} className='my-2 '/>
            <p className='font-bold my-2'>Node.js</p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-md shadow-[#bcd8d3] hover:scale-110 duration-200'>
            <IoLogoGithub color='#1B2430' size={100} className='my-2 '/>
            <p className='font-bold my-2'>Github</p>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Skills