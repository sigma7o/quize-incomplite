// src/components/PerformancePage.jsx
import { Link, useLocation } from 'react-router-dom';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';

const PerformancePage = ({ performance }) => {
  const location = useLocation();
  const performanceData = performance || location.state;

  if (!performanceData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Performance Not Found</h2>
        <p className="text-gray-600 mb-6">Please play a quiz to see your performance.</p>
        <Link to="/categories" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
          Go to Quizzes
        </Link>
      </div>
    );
  }

  const { totalQuestions, correctAnswers, incorrectAnswers, coinsEarned } = performanceData;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4 animate-bounce">
          Great Job!
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Here is your quiz performance report.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <BsCheckCircle size={24} className="text-green-500" />
              <span className="text-gray-800 text-lg">Correct Answers</span>
            </div>
            <span className="text-green-500 font-bold text-xl">{correctAnswers}</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <BsXCircle size={24} className="text-red-500" />
              <span className="text-gray-800 text-lg">Incorrect Answers</span>
            </div>
            <span className="text-red-500 font-bold text-xl">{incorrectAnswers}</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <FaCoins size={24} className="text-yellow-500" />
              <span className="text-gray-800 text-lg">Coins Earned</span>
            </div>
            <span className="text-yellow-500 font-bold text-xl">{coinsEarned}</span>
          </div>
        </div>

        <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 inline-block w-full">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PerformancePage;