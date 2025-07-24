// src/components/TopicList.jsx
import { useParams, Link } from 'react-router-dom';
import { quizData } from '../data/quizzes';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const TopicList = () => {
  const { categoryName } = useParams();
  const category = quizData.find(cat => cat.id === categoryName);

  if (!category) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <p className="text-2xl text-gray-600">Category not found.</p>
        <Link to="/categories" className="text-blue-500 mt-4 inline-block">Go back to Categories</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-24 pb-12 px-4">
      <div className="flex items-center mb-8">
        <Link to="/categories" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 mr-2">
          <IoArrowBackCircleOutline size={36} />
        </Link>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Topics in {category.category}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.topics.map(topic => (
          <Link
            key={topic.id}
            to={`/topic/${topic.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={topic.image}
              alt={topic.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
              <p className="text-gray-500 mt-2">{topic.description.slice(0, 70)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicList;