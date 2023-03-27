import React, { useState } from 'react';
// import data
import { reservationData } from '../data';
// import datepicker
import DatePicker from 'react-datepicker';
// import datepicker css
import 'react-datepicker/dist/react-datepicker.css';
// import timepicker
import TimePicker from 'react-time-picker';
// import timepicker css
import '../timepicker.css';
// import icons
import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../variants';

const Reservation = () => {
  // destructure reservation data
  const { title, subtitle,btnText } = reservationData;
  // date state
  const [startDate, setStartDate] = useState(new Date());
  // clock state
  const [value, setValue] = useState('10:00');

  return (
    <section className='relative top-96 z-30 pb-20 lg:py-[100px]'>
      <div className='container mx-auto'>
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          className='text-center'
        >
          {/* title */}
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1.6)}
            className='h2 capitalize'
          >
            {title}
          </motion.h2>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className='mb-8 text-dark'
          >
            {subtitle}
          </motion.p>

        </motion.div>
        {/* form */}
        <motion.form
          variants={fadeIn('up', 'tween', 0.7, 1.6)}
          initial='hidden'
          whileInView={'show'}
          action="https://getform.io/f/2706633e-5d59-457c-a853-10106ebeccc4 "
          method="POST"
        >
          <div className='flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8'>

            {/* person number */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaUsers />
                <div>Enter number of people </div>
              </div>
              <input className='input' type='text' placeholder=' ' name="person"/>
            </div>

            {/* datepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaCalendar />
                <div>Enter Date</div>
              </div>
              <DatePicker
                className='input'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="date-picker"
              />
            </div>

            {/* timepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaClock />
                <div>Enter Time</div>
              </div>
              <TimePicker
                className='input'
                clearIcon={false}
                clockIcon={false}
                onChange={setValue}
                value={value}
                name="time-picker"
              />
            </div>

   
          </div>


          {/* button */}
          <div className='max-w-[316px] mx-auto flex justify-center'>
            <button className='btn capitalize w-full lg:w-auto'>
              {btnText}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
