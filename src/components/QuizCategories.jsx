import React, { useRef } from 'react';
import { GoDotFill } from "react-icons/go";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { quizData } from '../data/quizzes';
import { Link } from 'react-router-dom';

const QuizCategories = () => {
    const scrollRefs = useRef({});

    const scroll = (categoryId, direction) => {
        const cardWidth = 280; // Assuming each card is min-w-[250px] + ~30px gap/margin
        const scrollAmount = cardWidth * 2;

        if (scrollRefs.current[categoryId]) {
            scrollRefs.current[categoryId].scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="py-6 bg-white overflow-hidden">
            {quizData.map((categoryData) => (
                <div key={categoryData.id} className="mb-8">

                    {/* Category Title and Arrows */}
          
                    <div className="max-w-7xl mx-auto px-0.5 flex justify-between items-center mb-6"> 
                        <h1 className="text-3xl font-bold flex items-center">
                            <span className="text-[#461F7F]"><GoDotFill className='text-3xl' /></span> {categoryData.category}
                        </h1>
                        <div className="hidden md:flex gap-3">
                            <button
                                onClick={() => scroll(categoryData.id, 'left')}
                                className="p-2 rounded-full bg-gray-200 hover:bg-[#461F7F] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                                aria-label={`Scroll left for ${categoryData.category} topics`}
                            >
                                <FaArrowLeft />
                            </button>
                            <button
                                onClick={() => scroll(categoryData.id, 'right')}
                                className="p-2 rounded-full bg-gray-200 hover:bg-[#461F7F] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                                aria-label={`Scroll right for ${categoryData.category} topics`}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>

                    {/* Scrollable Card Section */}
                   
                    <div
                        ref={el => scrollRefs.current[categoryData.id] = el}
                        className="flex gap-6 overflow-x-auto pb-8 scroll-smooth hide-scrollbar px-20 overflow-hidden"
                    >
                        {categoryData.topics.map((topic) => (
                            <Link
                                key={topic.id}
                                to={`/topic/${categoryData.id}/${topic.id}`}
                                className="min-w-[250px] flex-shrink-0 group bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl"
                            >
                                <figure className="w-full h-48 overflow-hidden rounded-t-xl">
                                    <img
                                        src={topic.image}
                                        alt={topic.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    />
                                </figure>
                                <div className="p-4 text-center">
                                    <h2 className="text-lg font-semibold">{topic.title}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default QuizCategories;