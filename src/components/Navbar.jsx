import React, { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg'; // Icon for opening/closing mobile menu
import { HiMenuAlt1 } from "react-icons/hi"; // Icon for opening mobile menu
import { RxAvatar } from "react-icons/rx"; // Avatar icon
import { CgClose } from 'react-icons/cg'; // Cross icon for closing menu
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu visibility

  return (
    // Added 'sticky top-0 z-50' to make the header sticky at the top and ensure it stays above other content.
    <div className="sticky top-0 z-50">
      <nav className="flex items-center justify-between px-4 py-2.5 bg-[#461F7F] lg:px-20">
        {/* Mobile Menu Toggle Button (on left on mobile, hidden on lg screens) */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none">
            {/* Use HiMenuAlt1 for open state, CgClose for close state */}
            {isOpen ? <CgClose /> : <HiMenuAlt1 />}
          </button>
        </div>

        {/* Logo (centered on mobile, left on lg screens) */}
        {/* Using absolute positioning to center the logo on mobile screens. */}
        <Link to={"/"} className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:translate-x-0 lg:flex-grow-0 lg:justify-start">
          <img
            src="https://quizard.app/logo_light.png"
            alt="logo"
            className="h-9 w-auto md:h-10" // Adjusted width to auto for better scaling
          />
        </Link>

        {/* Desktop Menu Links and Right Section (Avatar/Name, Coin) */}
        {/* This div now correctly wraps all desktop-specific navigation and user info.
            It's hidden on small screens and becomes a flex container on large screens. */}
        <div className="hidden lg:flex items-center gap-7 text-white font-medium text-xl">
          <a href="/" className="hover:text-gray-300 transition-colors duration-200">Discover</a>
          <a href="/" className="hover:text-gray-300 transition-colors duration-200">AI</a>
          <a href="/" className="hover:text-gray-300 transition-colors duration-200">Join</a>
          <a href="/" className="hover:text-gray-300 transition-colors duration-200">Live Quiz</a>
          <a href="/" className="hover:text-gray-300 transition-colors duration-200">Creator</a>

          {/* Avatar with Login/Signup on hover (Desktop only) */}
          <div className='relative flex items-center cursor-pointer group'> {/* Added 'group' class */}
            <RxAvatar className="text-2xl z-10" /> {/* Added z-10 to keep icon above text */}
            {/* Login/Signup text appearing on hover */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2
                        bg-gray-700 text-white text-sm rounded-md shadow-lg p-2 whitespace-nowrap
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                        transition-all duration-300 scale-90 group-hover:scale-100">
              <a href="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Login</a>
              <a href="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Sign Up</a>
            </div>
          </div>

          {/* Coin Display (visible on both mobile and desktop in the header) */}
          <div className='flex gap-1.5 items-center justify-center border border-white h-8 w-20 p-1 rounded-full'>
            <img
              src="https://quizard.app/images/coin.png"
              alt="coin"
              className='w-5 h-5'
            />
            <h2 className='text-amber-400 font-bold'>26</h2>
          </div>
        </div>

        {/* Coin Display for Mobile (visible only on mobile, hidden on lg screens) */}
        {/* This ensures the coin is always in the main header for mobile. */}
        <div className="lg:hidden flex items-center">
            <div className='flex gap-1.5 items-center justify-center border border-white h-8 w-20 p-1 rounded-full'>
                <img
                    src="https://quizard.app/images/coin.png"
                    alt="coin"
                    className='w-5 h-5'
                />
                <h2 className='text-amber-400 font-bold'>26</h2>
            </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#461F7F] z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full' // To slide from the left
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col items-start p-6 space-y-6 text-white text-xl font-medium pt-20">
          {/* Cross button to close mobile menu */}
          <div className="absolute top-4 right-4">
            <button onClick={() => setIsOpen(false)} className="text-white text-3xl focus:outline-none">
              <CgClose /> {/* Cross icon */}
            </button>
          </div>

          {/* Logo inside mobile menu */}
          <div className="mb-4"> {/* Margin below the logo */}
            <img
              src="https://quizard.app/logo_light.png"
              alt="logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Mobile Menu Links */}
          <a href="/" className="hover:text-gray-300 transition-colors duration-200" onClick={() => setIsOpen(false)}>Discover</a>
          <a href="/" className="hover:text-gray-300 transition-colors duration-200" onClick={() => setIsOpen(false)}>AI</a>
          <a href="/" className="hover:text-gray-300 transition-colors duration-200" onClick={() => setIsOpen(false)}>Join</a>
          <a href="/" className="hover:text-gray-300 transition-colors duration-200" onClick={() => setIsOpen(false)}>Live Quiz</a>
          <a href="/" className="hover:text-gray-300 transition-colors duration-200" onClick={() => setIsOpen(false)}>Creator</a>

          {/* Avatar and Name (in mobile sidebar) - Keeping for mobile sidebar, as it's common to have user info here */}
          <div className='flex items-center gap-2 cursor-pointer'>
            <RxAvatar className="text-2xl" />
            <span>Akash Kumar</span> {/* Keeping name in mobile sidebar */}
          </div>
          {/* Coin display removed from mobile sidebar as it's already in the main nav */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
