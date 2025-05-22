import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

function ContactInfo() {
  return (
    <div className='w-full max-w-md shadow-xl flex flex-col justify-center rounded-2xl items-center bg-violet-500 p-8'>
      <form className='w-full flex flex-col gap-5'>
        <div>
          <label className='font-poppins text-white'>Name</label>
          <input
            type="text"
            className='w-full h-12 font-poppins rounded-full pl-5 bg-white mt-1'
            required
          />
        </div>

        <div>
          <label className='font-poppins text-white'>Email</label>
          <input
            type="email"
            className='w-full h-12 font-poppins rounded-full pl-5 bg-white mt-1'
            required
          />
        </div>

        <div className='relative'>
          <label className='font-poppins text-white'>Project Type</label>
          <select
            className='w-full h-12 font-poppins rounded-full pl-5 pr-10 mt-1 appearance-none bg-white outline-none'
            defaultValue=""
            required
          >
            <option value="" disabled>Choose project type</option>
            <option value="mobile">Mobile Application</option>
            <option value="desktop">Desktop Application</option>
            <option value="static">Website (Static)</option>
            <option value="webapp">Website Application</option>
          </select>
          <FaChevronDown className='absolute right-4 bottom-3.5 text-gray-500 pointer-events-none' />
        </div>

        <div>
          <label className='font-poppins text-white'>Message</label>
          <textarea
            rows="4"
            className='w-full font-poppins rounded-2xl p-4 bg-white mt-1 resize-none'
            placeholder="Write your message here..."
            required
          />
        </div>

        <button
          type="submit"
          className='bg-white text-black font-bold py-2 text-lg rounded-full mt-4 hover:bg-gray-100 transition'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactInfo;