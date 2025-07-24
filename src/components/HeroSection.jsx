import React from 'react';
// import wave from '../images/wave.svg'; // Wave SVG path removed
import StarryBackground from './StarryBackground'; // Static dots component

const HeroSection = () => {
  return (
    // Hero section container: sticky at top, full height, hides overflow, z-index lower than header
    <div className='relative  top-0 z-40 h-auto w-full overflow-hidden'>

      {/* Dark purple background */}
      <div className='absolute inset-0 bg-[#461F7F] z-0'></div>

      {/* Subtle dots background */}
      <StarryBackground />

      {/* Main content (quiz cards) - above background and particles */}
      <div className="relative z-20 flex flex-col md:flex-row items-stretch justify-center gap-8 py-20 px-4">
        {/* "Create Quiz" Card */}
        <div className="flex-1 bg-[#461F7F] border border-purple-700 p-8 rounded-lg  shadow-inner text-center max-w-sm flex flex-col justify-between">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Create Quiz</h2>
          <p className="text-white text-lg mb-8 flex-grow">
            Create interactive quizzes in minutes with our online quiz maker
          </p>
          <button className="group relative inline-flex items-center justify-center overflow-hidden bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <span className="relative z-10">Create Quiz</span>
            {/* Arrow icon */}
            {/* <FaArrowRight className="absolute right-2 opacity-0 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-2" /> */}
            {/* Note: FaArrowRight import removed as it was commented out in previous version,
                add 'import { FaArrowRight } from 'react-icons/fa';' if you want to use it. */}
          </button>
        </div>

        {/* "Quizard AI" Card */}
        <div className="flex-1 bg-[#461F7F] border border-purple-700 p-8 rounded-lg  shadow-inner text-center max-w-sm flex flex-col justify-between">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Quizard AI</h2>
          <p className="text-white text-lg mb-8 flex-grow">
            Create quizzes instantly with AI—just enter a topic and get engaging questions in seconds!
          </p>
          <button className="group relative inline-flex items-center justify-center overflow-hidden bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <span className="relative z-10">Generate Quiz</span>
            {/* Arrow icon */}
            {/* <FaArrowRight className="absolute right-2 opacity-0 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-2" /> */}
            {/* Note: FaArrowRight import removed as it was commented out in previous version,
                add 'import { FaArrowRight } from 'react-icons/fa';' if you want to use it. */}
          </button>
        </div>
      </div>

      {/* Wave SVG at bottom removed */}
      {/* <div className="absolute bottom-0 left-0 w-full z-10">
        <img src={wave} alt="Wave background" className="w-full h-auto block" />
      </div> */}

      {/* Removed the input and button section below the hero */}
    </div>
  );
}

export default HeroSection;
