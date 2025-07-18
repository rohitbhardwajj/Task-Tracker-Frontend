import React from 'react';
import { FaNotesMedical } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';

const Head = () => {
  return (
    <div className='flex justify-center items-center gap-2 bg-black h-[10%]'>
      <h1 className='text-[clamp(1.5rem,3.5vw,5rem)] font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent my-20'>
        <Typewriter
          words={['Task Tracker ']}
          loop={0}
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <FaNotesMedical className='text-[clamp(1.2rem,3vw,5rem)] text-white' />
    </div>
  );
};

export default Head;
