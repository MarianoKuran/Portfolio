import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return(
    <main name='home' className="bg-[#E7F6F2] w-full h-screen">
      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center ">
        <p className="text-[#2C3333]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#395B64]"> Mariano Kuran </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#2b444b]"> Frontend Developer </h2>
        
        <div className="mt-5">
          <button className="flex items-center px-6 py-3 my-2 group border-2 border-[#2b444b] text-[#2b444b] rounded-sm hover:bg-[#2b444b] hover:border-[#E7F6F2] hover:text-[#E7F6F2] duration-300">
            View Work 
            <span className="group-hover:rotate-90 duration-300">
              < HiArrowNarrowRight className="ml-2"/>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
