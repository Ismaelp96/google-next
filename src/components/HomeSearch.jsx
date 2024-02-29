'use client';

import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (e) => {
    e.preventDefault();
    setRandomSearchLoading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTem=${response}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex items-center w-full mt-5 mx-auto max-w-[90%] border-gray-200 px-5 py-3 rounded-full shadow-sm  hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'
      >
        <AiOutlineSearch className='text-xl text-gray-500 mr-3 cursor-pointer' />
        <input
          type='text'
          className='flex-grow focus:outline-none'
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className='text-lg cursor-pointer' />
      </form>
      <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4'>
        <button
          onClick={handleSubmit}
          className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-800 focus:outline-none active:ring-green-300 hover:shadow-md w-36 h-10 transition-shadow'
        >
          Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-800 focus:outline-none active:ring-green-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 shadow-sm'
        >
          {randomSearchLoading ? 'Loading...' : 'I am feeling lucky'}
        </button>
      </div>
    </>
  );
}
