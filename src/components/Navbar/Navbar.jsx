import React, { useState } from 'react';
import giftpng from "./Designer__3_-removebg-preview.png";

const Navbar = ({ scrollToIntro,scrollToAbout, scrollToServices, scrollToBrands, scrollToLists }) => {
  const [open, setOpen] = useState(false);
  
  const handleScroll = (scrollFunction) => {
    setOpen(false);
    scrollFunction();
  };

  return (
    <div className='w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-orange-400 py-2 md:px-10 px-7 relative rounded-b-sm'>
        <div className='font-bold text-lg md:text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>
          <img className='w-16 h-13 md:w-14 md:h-12 p-0' src={giftpng} alt="" />
          <p className='text-2xl fuzzy-bubbles-bold'>GiftGuru</p>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-3 mr-4 font-bold absolute md:static bg-orange-400 left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? 'top-20' : '-top-64'}`}>
          <li className='md:ml-6 text-lg md:text-xl md:my-0 my-2 font-serif'>
            <button onClick={() => handleScroll(scrollToIntro)} className='text-white duration-500'>
              Home
            </button>
          </li>
          <li className='md:ml-6 text-lg md:text-xl md:my-0 my-2 font-serif'>
            <button onClick={() => handleScroll(scrollToAbout)} className='text-white duration-500'>
              About
            </button>
          </li>
          <li className='md:ml-6 text-lg md:text-xl md:my-0 my-2 font-serif'>
            <button onClick={() => handleScroll(scrollToServices)} className='text-white duration-500'>
              Services
            </button>
          </li>
          <li className='md:ml-6 text-lg md:text-xl md:my-0 my-2 font-serif'>
            <button onClick={() => handleScroll(scrollToBrands)} className='text-white duration-500'>
              Brands
            </button>
          </li>
          <li className='md:ml-6 text-lg md:text-xl md:my-0 my-2 font-serif'>
            <button onClick={() => handleScroll(scrollToLists)} className='text-white duration-500'>
              Lists
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
