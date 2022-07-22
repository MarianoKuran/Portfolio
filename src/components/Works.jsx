import React from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'

const Works = () => {
  return (
    <section name='works' className='w-full md:h-screen bg-[#E7F6F2]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-[#2C3333] border-b-4 border-[#A5C9CA]'>Works</p>
          <p className='text-[#2C3333]'>Check out some of my recent works</p>
        </div>

        <div style={{backgroundImage: `url(${pic1})`}} className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='flex justify-center items-center  mx-auto content-div group container shadow-lg shadow-[#bcd8d3]'>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Works