// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoginForm from './components/LoginForm';
import QuizCategories from './components/QuizCategories';
// import TopicList from './components/TopicList';
import TopicDetails from './components/TopicDetails';
import QuizPage from './components/QuizPage';
import PerformancePage from './components/PerformancePage';
import { quizData } from './data/quizzes';
import { useEffect, useState } from 'react';
import Input_section from './components/Input_section';
import Footer from './components/Footer';

function App() {
  const [performance, setPerformance] = useState(null);
 

  return (




    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/login" element={<div className="min-h-screen flex items-center justify-center bg-gray-100"><LoginForm /></div>} />
          <Route path="/categories" element={<WithNavbar><QuizCategories /></WithNavbar>} />
         
          <Route path="/topic/:categoryId/:topicId" element={<WithNavbar><TopicDetails /></WithNavbar>} />
          <Route path="/quiz/:topicId" element={<QuizPage setPerformance={setPerformance} />} />
          <Route path="/performance" element={<PerformancePage performance={performance} />} />
        </Routes>
      </div>
    </Router>
  );
}


const HomeLayout = () => (
  <>
    <Navbar />
    <HeroSection />
   <Input_section/>
    <QuizCategories />
    <Footer/>
  </>
);

const WithNavbar = ({ children }) => (
  <>
    <Navbar />
    {children}
     <Footer/>
  </>
);

export default App;