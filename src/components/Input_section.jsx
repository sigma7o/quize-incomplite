import React from 'react';

const Input_section = () => {
  return (
    // Outermost container: Full width with a white background and vertical padding.
    <div className='w-full bg-white py-9'> {/* Increased vertical padding */}
      {/* Inner container: Theme-colored (purple), rounded, and centered. */}
      {/* This div acts as the second, smaller, rounded background layer. */}
      <div className='bg-[#461F7F] max-w-7xl mx-auto p-8 rounded-2xl shadow-2xs'> {/* Adjusted max-w, padding, and rounded for the effect */}
        {/* Content container: Holds the input and button, centered within the purple background. */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-9 justify-center items-center px-4'> {/* px-4 for horizontal padding */}
          <input
            type="text"
            placeholder='Enter code'
            // Input styling: white background, full width on mobile, specific width on md+, height, rounded corners, shadow, and no default outline on focus.
            className='bg-white w-full md:w-80 h-12 rounded-lg shadow-sm p-4 text-xl font-medium border border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500'
          />

          {/* The "Join Game" button */}
          <button className="group relative inline-flex items-center justify-center overflow-hidden bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer flex-shrink-0">
            <span className="relative z-10 whitespace-nowrap">Join Game</span>
            {/* Arrow icon (uncomment and import if needed) */}
            {/* <FaArrowRight className="absolute right-2 opacity-0 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-2" /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input_section;
