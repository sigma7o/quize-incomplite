import React, { useState } from 'react';
import { PiGlobeSimple } from "react-icons/pi"; // Globe icon for language selector
import { IoMdArrowDropdown } from "react-icons/io"; // Dropdown arrow icon for language selector
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social icons from Font Awesome 5
import { FaXTwitter } from 'react-icons/fa6'; // X/Twitter icon from Font Awesome 6

const Footer = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // State to control language dropdown visibility

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <footer className="bg-[#461F7F] text-white py-8 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">

        {/* Left Column: Language Selector + Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4 mb-4 md:mb-0 relative"> {/* Added relative for dropdown positioning */}
          {/* Language Selector Button */}
          <button
            onClick={toggleLanguageDropdown}
            className="flex items-center gap-2 px-4 py-2 border h-10 w-35 border-white rounded-full text-lg hover:bg-white hover:text-[#461F7F] transition-colors duration-200"
          >
            <PiGlobeSimple className="text-xl" /> {/* Globe icon */}
            English
            <IoMdArrowDropdown
              className={`text-xl transition-transform duration-200 ${
                isLanguageOpen ? 'rotate-180' : 'rotate-0' // Rotate icon on click
              }`}
            /> {/* Dropdown arrow icon */}
          </button>

          {/* Language Dropdown Menu */}
          {isLanguageOpen && (
            <div className="absolute bottom-full mb-2 w-full bg-white  rounded-lg shadow-lg z-20 md:w-48"> {/* Positioned above the button */}
              <ul className="py-2">
                <li className="px-4 py-2 text-black hover:bg-white hover:text-[#461F7F] cursor-pointer transition-colors duration-150">English</li>
                <li className="px-4 py-2 text-black hover:bg-white hover:text-[#461F7F] cursor-pointer transition-colors duration-150">Hindi</li>
                <li className="px-4 py-2 text-black hover:bg-white hover:text-[#461F7F] cursor-pointer transition-colors duration-150">Spanish</li>
                <li className="px-4 py-2 text-black hover:bg-white hover:text-[#461F7F] cursor-pointer transition-colors duration-150">French</li>
              </ul>
            </div>
          )}

          {/* Copyright Text (moved below language button) */}
          <p className="text-sm text-center md:text-left">
            Quizard © 2025. All rights reserved.
          </p>
        </div>

        {/* Right Column: Social Media Icons + Footer Links */}
        <div className="flex flex-col items-center md:items-end gap-4">
          {/* Social Media Icons (moved to be above Footer Navigation Links) */}
          <div className="flex items-center gap-4 text-2xl mb-2"> {/* Added mb-2 for spacing */}
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              <FaFacebookF /> {/* Facebook icon */}
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              <FaInstagram /> {/* Instagram icon */}
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              <FaLinkedinIn /> {/* LinkedIn icon */}
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              <FaXTwitter /> {/* X/Twitter icon */}
            </a>
          </div>

          {/* Footer Navigation Links (moved below social media icons) */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-xl text-center md:text-right ">
            <a href="#" className="hover:underline transition-colors duration-200">About Us</a>
            <a href="#" className="hover:underline transition-colors duration-200">Contact Us</a>
            <a href="#" className="hover:underline transition-colors duration-200">Privacy & Cookies Policy</a>
            <a href="#" className="hover:underline transition-colors duration-200">Terms and Conditions</a>
            <a href="#" className="hover:underline transition-colors duration-200">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
