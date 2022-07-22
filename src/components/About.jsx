import React from 'react'

const About = () => {
  return (
  <section name='about' className='w-full h-screen bg-[#E7F6F2] text-[#2C3333] '>
    <div className='w-full h-screen flex justify-center items-center '>
      <div className='max-w-[1000px] w-full px-4 flex flex-col items-center'>
        <div className='max-w-[1000px] w-full sm:flex'>
          <h3 className='w-[110px] text-4xl font-bold border-b-4 border-[#A5C9CA] sm:ml-[385px]'> About </h3>
        </div>
        <div className='max-w-[1000px] w-full px-1 sm:flex'>
          <p className='text-4xl font-bold my-3 sm:w-[%50] sm:text-right'>Hi, i'm Mariano, nice to meet you. Please take a look around. </p>
          <p className='w-full sm:w-[%50] pl-4 mt-3 pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Eaque asperiores dolorem nihil ea perferendis officiis vel. Assumenda ratione explicabo, accusantium odio soluta nostrum dignissimos dicta harum commodi, molestias ullam doloribus.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About