import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaFacebookMessenger } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-8 px-4'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div className='col-span-1 lg:col-span-1 hidden lg:block'>
          {/* Empty div for spacing/alignment */}
        </div>
        <div className='col-span-1 lg:col-span-1 hidden md:block'>
          <h2 className='text-xl font-bold mb-4'>Last Minute Gift</h2>
          <ul className='text-sm'>
            <li className='mb-2 hover:text-white'>Valentine</li>
            <li className='mb-2 hover:text-white'>Birthday</li>
            <li className='mb-2 hover:text-white'>Anniversary</li>
            <li className='mb-2 hover:text-white'>Marriage</li>
          </ul>
        </div>
        <div className='col-span-1 lg:col-span-1 hidden md:block'>
          <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
          <ul className='text-sm'>
            <li className='mb-2 hover:text-white'>Gift Ideas</li>
            <li className='mb-2 hover:text-white'>Featured Products</li>
            <li className='mb-2 hover:text-white'>About Us</li>
            <li className='mb-2 hover:text-white'>Contact Us</li>
          </ul>
        </div>
        <div className='col-span-1 lg:col-span-1 hidden sm:block'>
          <h2 className='text-xl font-bold mb-4'>Customer Service</h2>
          <ul className='text-sm'>
            <li className='mb-2 hover:text-white'>Shipping Information</li>
            <li className='mb-2 hover:text-white'>Returns & Exchanges</li>
            <li className='mb-2 hover:text-white'>FAQs</li>
          </ul>
        </div>
        <div className='col-span-1 lg:col-span-2'>
          <h2 className='text-xl font-bold mb-4'>Subscribe to our Newsletter</h2>
          <p className='text-sm mb-4'>
            Get the latest deals, articles, and resources sent straight to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter your email..' />
            <button className='p-2 mb-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='max-w-[1400px] mx-auto px-2 py-4'>
        <div className='flex justify-center space-x-4 mt-4'>
          <FaFacebook className='text-2xl' />
          <FaInstagram className='text-2xl' />
          <FaTwitter className='text-2xl' />
          <FaFacebookMessenger className='text-2xl' />
        </div>
        <p className='text-center text-sm mt-4'>© 2024 GiftGuru. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
