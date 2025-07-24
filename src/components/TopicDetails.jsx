import { useParams, Link } from 'react-router-dom';
import { quizData } from '../data/quizzes';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { BsPlayCircle } from 'react-icons/bs';
import { useState } from 'react';

const TopicDetails = () => {
  const { topicId } = useParams();
  const topic = quizData.flatMap(cat => cat.topics).find(t => t.id === parseInt(topicId));

  const [showQuizOptions, setShowQuizOptions] = useState(false);
  const [backgroundMusic, setBackgroundMusic] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);

  if (!topic) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <p className="text-2xl text-gray-600">Topic not found.</p>
        <Link to="/categories" className="text-blue-500 mt-4 inline-block">Go back to Categories</Link>
      </div>
    );
  }

  // Find the category ID for the back button
  const category = quizData.find(cat => cat.topics.some(t => t.id === topic.id));
  const categoryId = category ? category.id : ''; // Fallback if category not found (though unlikely due to topic check)

  return (
    <div className='flex justify-center items-center bg-[#100421] min-h-screen p-4 sm:p-6 lg:p-8'>
      {/*
        Main content div.
        Removed absolute positioning from the back button's parent,
        and placed the back button directly inside this flex column.
      */}
      <div className='flex flex-col gap-2 max-w-lg w-full'>
        {/* Back button positioned relative to this flex column, just above the image/content */}
        <div className='mb-4'> {/* Added margin-bottom to space it from the image */}
          <Link to={`/categories/${categoryId}`}>
            <IoArrowBackCircleOutline size={36} className='text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:text-blue-800' />
          </Link>
        </div>

        <div className='flex flex-col justify-center items-center text-center'>
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-60 border-2-[#461F7F] shadow-xl rounded-xl object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{topic.title}</h1>
            <p className="text-white text-lg mb-6">{topic.description}</p>
            <div className="flex items-center justify-center mb-6">
              <span className="text-white font-semibold mr-2">Difficulty:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                topic.difficulty === 'Easy' ? 'bg-green-200 text-green-800' :
                topic.difficulty === 'Medium' ? 'bg-yellow-200 text-yellow-800' : 'bg-red-200 text-red-800'
              }`}>
                {topic.difficulty}
              </span>
            </div>
            <div className='items-center justify-center bg-gray-800 rounded-2xl h-20 w-90 '>
              <button
                onClick={() => setShowQuizOptions(true)}
                className="bg-[#461F7F] text-white px-8 py-4 rounded-2xl text-lg font-semibold h-18 w-90 transition-all duration-300 shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <BsPlayCircle size={24} /> Play Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {showQuizOptions && (
        <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-filter backdrop-blur-md bg-transparent">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#461F7F] w-11/12 max-w-md">
            <h2 className="text-2xl font-bold text-[#100421] mb-6 text-center">Quiz Options</h2>

            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-700 text-lg">Background Music</span>
              <label htmlFor="toggle-music" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="toggle-music"
                    className="sr-only"
                    checked={backgroundMusic}
                    onChange={() => setBackgroundMusic(!backgroundMusic)}
                  />
                  <div className={`block w-14 h-8 rounded-full ${backgroundMusic ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                  <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${backgroundMusic ? 'translate-x-full' : ''}`}></div>
                </div>
              </label>
            </div>

            <div className="flex items-center justify-between mb-8">
              <span className="text-gray-700 text-lg">Sound Effects</span>
              <label htmlFor="toggle-effects" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="toggle-effects"
                    className="sr-only"
                    checked={soundEffects}
                    onChange={() => setSoundEffects(!soundEffects)}
                  />
                  <div className={`block w-14 h-8 rounded-full ${soundEffects ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                  <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${soundEffects ? 'translate-x-full' : ''}`}></div>
                </div>
              </label>
            </div>

            <Link
              to={"/quiz/:topic.id"}
              className="bg-[#461F7F] text-white px-8 py-4 rounded-2xl text-lg font-semibold w-full block text-center transition-all duration-300 shadow-xl transform hover:scale-105"
              onClick={() => setShowQuizOptions(false)}
            >
              Start Quiz
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicDetails;