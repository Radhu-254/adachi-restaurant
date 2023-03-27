import React from 'react';
// import data
import { newsletterData } from '../data';

const Newsletter = () => {
  // destructure newsletter data
  const { title, subtitle, placeholder, btnText } = newsletterData;
  return (
    <div className='none'>
      <div className='flex flex-col lg:flex-row justify-between items-center h-full'>
        {/* title & subtitle */}
        <div className='text-center lg:text-left mb-4'>
          <h3 className='text-[26px] font-primary  text-white capitalize mb-2'>
            {title}
          </h3>
          <p className='text-white'>{subtitle}</p>
        </div>
        {/* form */}
        <form className='flex flex-col lg:flex-row lg:gap-x-[10px] gap-y-4' action="https://getform.io/f/2706633e-5d59-457c-a853-10106ebeccc4 " method="POST">
          <input
            className='input bg-transparent placeholder:font-light placeholder:text-white text-white focus:ring-1 focus:ring-cyan-500 border border-white/20 transition-all'
            type='text'
            name="email"
            placeholder={placeholder}
          />
          <button className='btn capitalize w-full lg:max-w-[204px]'>
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
