import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return(
    <main name='home' className="bg-[#E7F6F2] w-full h-screen">
      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center ">
        <p className="m-1 text-[#2C3333] font-semibold text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#395B64]"> Mariano Kuran </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#2b444b]"> Frontend Developer </h2>
        
        <div className="mt-5 font-bold">
          <button className="flex items-center px-6 py-3 m-1 group border-2 border-[#2b444b] text-[#2b444b] rounded-sm hover:bg-[#2b444b] hover:border-[#E7F6F2] hover:text-[#E7F6F2] duration-300">
            View Work 
            <span className="group-hover:rotate-90 duration-300">
              < HiArrowNarrowRight className="ml-2 mt-[3px]"/>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
