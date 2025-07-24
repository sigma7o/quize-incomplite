import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import useSound from 'use-sound'; // Removed useSound as no audio will be used
import { quizData } from '../data/quizzes'; // Ensure this path is correct for your quiz data

// React Icons
import { IoExitOutline, IoCloseCircleOutline } from 'react-icons/io5'; // Exit icon, Close button for mute pop-up
import { MdOutlineQuiz } from "react-icons/md"; // Quiz icon (for performance link in header)
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs'; // Correct/wrong feedback icons
// import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi'; // Removed mute/unmute icons

// Removed all sound file imports
// import bgMusic from '../bg-music.mp3';
// import correctSound from '../correct.mp3';
// import wrongSound from '../wrong.mp3';
// import letsStartSound from '../lets-start.mp3';
// import countSound from '../count.mp3';
// import goSound from '../go.mp3';
// import timeUpSound from '../time-up.mp3';

// Constants for quiz behavior
const COIN_IMAGE_URL = 'https://quizard.app/images/coin.png'; // URL for the coin image
const TIME_PER_QUESTION = 60; // Set to 60 seconds as requested
const COINS_PER_CORRECT_ANSWER = 1; // 1 coin as per the image


const Quiz = ({ setPerformance }) => {
    // React Router hooks
    const { topicId } = useParams();
    const navigate = useNavigate();

    // Quiz State
    const [topic, setTopic] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [coins, setCoins] = useState(4); // Initial coins from screenshot
    const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null); // Index of the selected option
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [isOptionLocked, setIsOptionLocked] = useState(false); // Prevents multiple clicks after an answer

    // UI State
    const [showStartScreen, setShowStartScreen] = useState(true); // Initial "Let's Go" screen
    const [preQuizCountdown, setPreQuizCountdown] = useState(null); // For 3, 2, 1, GO!
    const [showTimeUpPopup, setShowTimeUpPopup] = useState(false); // For custom Time's Up popup
    const [timeUpCountdown, setTimeUpCountdown] = useState(3); // Countdown inside Time's Up popup
    // const [showMuteOptionsPopup, setShowMuteOptionsPopup] = useState(false); // Removed mute/unmute popup state

    // Audio State & Hooks from use-sound - ALL REMOVED
    // const [isMuted, setIsMuted] = useState(() => localStorage.getItem('quiz-muted') === 'true'); // Removed mute state
    // const [playCorrect] = useSound(correctSound, { volume: 0.5, soundEnabled: !isMuted });
    // const [playWrong] = useSound(wrongSound, { volume: 0.5, soundEnabled: !isMuted });
    // const [playLetsStart] = useSound(letsStartSound, { volume: 0.7, soundEnabled: !isMuted });
    // const [playCount] = useSound(countSound, { volume: 0.7, soundEnabled: !isMuted });
    // const [playGo] = useSound(goSound, { volume: 0.7, soundEnabled: !isMuted });
    // const [playTimeUpSound] = useSound(timeUpSound, { volume: 0.8, soundEnabled: !isMuted });
    // const [playBg, { stop: stopBg }] = useSound(bgMusic, { volume: 0.3, loop: true, soundEnabled: !isMuted });

    // Refs for DOM elements for animation targeting
    const coinHeaderRef = useRef(null); // Ref for the coin image in the header
    const wrongOptionButtonRef = useRef(null); // Ref for the specific button that was answered incorrectly

    // Ref for intervals
    const mainTimerIntervalRef = useRef(null);
    const timeUpCountdownIntervalRef = useRef(null);
    const preQuizCountdownIntervalRef = useRef(null);


    // --- Effects for Audio Control ---
    // Removed the useEffect for background music as it's no longer needed.
    /*
    useEffect(() => {
        if (!isMuted && !showStartScreen && topic && preQuizCountdown === null) {
            playBg();
        } else {
            stopBg();
        }
        localStorage.setItem('quiz-muted', isMuted);
    }, [isMuted, playBg, stopBg, showStartScreen, topic, preQuizCountdown]);
    */


    // --- Core Quiz Logic Functions ---

    // Clears all active timers
    const clearAllTimers = useCallback(() => {
        if (mainTimerIntervalRef.current) {
            clearInterval(mainTimerIntervalRef.current);
            mainTimerIntervalRef.current = null;
        }
        if (timeUpCountdownIntervalRef.current) {
            clearInterval(timeUpCountdownIntervalRef.current);
            timeUpCountdownIntervalRef.current = null;
        }
        if (preQuizCountdownIntervalRef.current) {
            clearInterval(preQuizCountdownIntervalRef.current);
            preQuizCountdownIntervalRef.current = null;
        }
    }, []);

    // Handles moving to the next question or finishing the quiz
    const goToNextQuestion = useCallback(() => {
        clearAllTimers(); // Clear all timers before proceeding

        setShowTimeUpPopup(false); // Hide time-up popup

        if (topic && currentQuestionIndex < topic.questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setTimeLeft(TIME_PER_QUESTION); // Reset timer for new question
            setSelectedOptionIndex(null); // Clear selected option
            setIsOptionLocked(false); // Unlock options for next question
        } else if (topic) {
            // Quiz finished: navigate to performance page
            const finalPerformance = {
                totalQuestions: topic.questions.length,
                correctAnswers: correctCount,
                incorrectAnswers: incorrectCount,
                coinsEarned: coins
            };
            setPerformance(finalPerformance); // Update parent's performance state
            navigate('/performance');
        }
    }, [currentQuestionIndex, topic, correctCount, incorrectCount, coins, setPerformance, navigate, clearAllTimers]);

    // Handles time running out for a question
    const handleTimeOut = useCallback(() => {
        // playTimeUpSound(); // Removed sound play
        setIncorrectCount(prev => prev + 1); // Mark as incorrect
        setIsOptionLocked(true); // Lock options

        setShowTimeUpPopup(true); // Show the custom time-up popup
        setTimeUpCountdown(3); // Start popup countdown from 3

        clearAllTimers(); // Clear main timer if it's still running

        // Countdown inside the "Time Up!" popup
        timeUpCountdownIntervalRef.current = setInterval(() => {
            setTimeUpCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timeUpCountdownIntervalRef.current);
                    timeUpCountdownIntervalRef.current = null;
                    goToNextQuestion(); // Move to next question automatically
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }, [goToNextQuestion, clearAllTimers]);

    // Handles user selecting an answer option
    const handleAnswer = useCallback((optionIndex, event) => {
        if (isOptionLocked) return; // Prevent multiple clicks

        setSelectedOptionIndex(optionIndex); // Set selected option
        setIsOptionLocked(true); // Lock options immediately
        clearAllTimers(); // Stop main timer

        const currentQuestionData = topic.questions[currentQuestionIndex];
        // Calculate correct answer index based on options array
        const correctAnswerIndex = currentQuestionData.options.indexOf(currentQuestionData.correctAnswer);
        const isCorrect = optionIndex === correctAnswerIndex;

        if (isCorrect) {
            // playCorrect(); // Removed sound play
            setCorrectCount(prev => prev + 1);
            setCoins(prev => prev + COINS_PER_CORRECT_ANSWER);

            // Trigger coin animation using the clicked button's position
            const sourceElement = event.currentTarget; // Get the clicked button element
            if (sourceElement && coinHeaderRef.current) {
                const coin = document.createElement('img');
                coin.src = COIN_IMAGE_URL;
                coin.style.position = 'fixed';
                coin.style.width = '24px'; // Size of the flying coin
                coin.style.height = '24px';
                coin.style.zIndex = 9999;
                coin.style.transition = 'transform 1.2s ease-in-out, opacity 1.2s ease-in-out'; // Slower animation

                const sourceRect = sourceElement.getBoundingClientRect();
                const targetRect = coinHeaderRef.current.getBoundingClientRect();

                // Initial position (center of the source element)
                coin.style.left = `${sourceRect.left + sourceRect.width / 2 - 12}px`;
                coin.style.top = `${sourceRect.top + sourceRect.height / 2 - 12}px`;
                coin.style.opacity = '1';

                document.body.appendChild(coin);

                // Final position (center of the target element)
                const targetX = targetRect.left + targetRect.width / 2 - 12;
                const targetY = targetRect.top + targetRect.height / 2 - 12;

                requestAnimationFrame(() => {
                    coin.style.transform = `translate(${targetX - (sourceRect.left + sourceRect.width / 2 - 12)}px, ${targetY - (sourceRect.top + sourceRect.height / 2 - 12)}px) scale(0.5)`;
                    coin.style.opacity = '0';
                });

                setTimeout(() => {
                    document.body.removeChild(coin);
                }, 1200); // Remove after animation duration
            }

        } else {
            // playWrong(); // Removed sound play
            setIncorrectCount(prev => prev + 1);
            // Assign ref to the wrong option button to trigger shake animation
            wrongOptionButtonRef.current = event.currentTarget;
            if (wrongOptionButtonRef.current) {
                wrongOptionButtonRef.current.classList.add('animate-shake');
                setTimeout(() => {
                    if (wrongOptionButtonRef.current) { // Check if ref still exists
                        wrongOptionButtonRef.current.classList.remove('animate-shake');
                        wrongOptionButtonRef.current = null; // Clear ref after use
                    }
                }, 600); // Remove class after animation
            }
        }

        // Auto-advance to next question after a short delay (for feedback)
        setTimeout(() => goToNextQuestion(), 1000);

    }, [isOptionLocked, currentQuestionIndex, topic, setCorrectCount, setCoins, setIncorrectCount, goToNextQuestion, clearAllTimers]);


    // --- Initialization & Lifecycle Effects ---

    // Effect to fetch topic data when component mounts or topicId changes
    useEffect(() => {
        const foundTopic = quizData.flatMap(cat => cat.topics).find(t => t.id === parseInt(topicId));
        if (foundTopic) {
            setTopic(foundTopic);
        } else {
            navigate('/categories'); // Redirect if topic not found
        }
        // Cleanup on unmount
        return () => clearAllTimers();
    }, [topicId, navigate, clearAllTimers]);

    // Effect for the main quiz timer
    useEffect(() => {
        if (!topic || showStartScreen || preQuizCountdown !== null || isOptionLocked || showTimeUpPopup) {
            clearInterval(mainTimerIntervalRef.current); // Ensure timer is stopped if conditions aren't met
            mainTimerIntervalRef.current = null;
            return;
        }

        mainTimerIntervalRef.current = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(mainTimerIntervalRef.current);
                    mainTimerIntervalRef.current = null;
                    handleTimeOut(); // Call timeout handler
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(mainTimerIntervalRef.current); // Cleanup on unmount or dependency change
    }, [topic, showStartScreen, preQuizCountdown, isOptionLocked, showTimeUpPopup, handleTimeOut]);


    // --- Pre-Quiz Start Screen & Countdown Logic ---

    // Handles clicking "Let's Go" on the start screen
    const handleStartQuiz = () => {
        // playLetsStart(); // Removed sound play
        setShowStartScreen(false); // Hide start screen
        setPreQuizCountdown(3); // Start pre-quiz countdown

        preQuizCountdownIntervalRef.current = setInterval(() => {
            setPreQuizCountdown(prev => {
                if (prev === 1) { // When it's about to become 0
                    clearInterval(preQuizCountdownIntervalRef.current);
                    preQuizCountdownIntervalRef.current = null;
                    // playGo(); // Removed sound play
                    return 0; // Set to 0 briefly for "GO!" display
                }
                if (prev > 0) {
                    // playCount(); // Removed sound play
                }
                return prev - 1;
            });
        }, 1000);
    };


    // --- Conditional Rendering for Different Screens ---

    // If topic data isn't loaded yet
    if (!topic) {
        return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-xl">Loading Quiz...</div>;
    }

    const currentQuestion = topic.questions[currentQuestionIndex];
    const totalQuestions = topic.questions.length;


    // Render Pre-Quiz Start Screen
    if (showStartScreen) {
        return (
            <div className="fixed inset-0 bg-[#1f3a40] flex items-center justify-center z-50">
                <button
                    onClick={handleStartQuiz}
                    className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-full text-3xl shadow-lg hover:bg-yellow-500 transform scale-105 transition-transform duration-300"
                    aria-label="Let's Go, start quiz"
                >
                    Let’s Go 🚀
                </button>
            </div>
        );
    }

    // Render Pre-Quiz Countdown (3, 2, 1, GO!)
    if (preQuizCountdown !== null) {
        return (
            <div className="fixed inset-0 bg-[#1f3a40] flex items-center justify-center z-50 text-white text-8xl font-bold animate-scaleUp">
                {preQuizCountdown === 0 ? "GO!" : preQuizCountdown}
            </div>
        );
    }


    // --- Main Quiz UI (visible after loader) ---
    return (
        <div className="min-h-screen bg-[#1f3a40] text-white relative flex flex-col items-center">
            {/* Header - Top Bar */}
            <div className="fixed top-0 left-0 right-0 z-40 bg-gray-900 bg-opacity-90 py-3 px-4 flex justify-between items-center shadow-lg">
                {/* Exit Icon (left) */}
                <Link to="/categories" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Exit Quiz">
                    <IoExitOutline size={32} />
                </Link>

                {/* Topic Title (center) */}
                <h1 className="text-xl md:text-2xl font-bold text-yellow-500 text-center flex-grow mx-4">
                    {topic.title}
                </h1>

                {/* Right side group: Mute, Coins, Performance Link */}
                <div className="flex items-center gap-4">
                    {/* Mute/Unmute Icon - REMOVED, as there's no sound to mute */}
                    {/*
                    <button
                        onClick={() => setShowMuteOptionsPopup(true)}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label={isMuted ? "Unmute Sounds" : "Mute Sounds"}
                    >
                        {isMuted ? <HiVolumeOff size={28} /> : <HiVolumeUp size={28} />}
                    </button>
                    */}
                    {/* Coins Display (Target for coin animation) */}
                    <div ref={coinHeaderRef} className="flex items-center gap-1.5" aria-label={`Current coins: ${coins}`}>
                        <img src={COIN_IMAGE_URL} alt="Coin icon" className="w-6 h-6" />
                        <span className="text-white text-lg font-bold">{coins}</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area - Pushed down by fixed header */}
            <div className="flex flex-col items-center flex-grow w-full max-w-3xl pt-20 pb-16 px-4 sm:px-6"> {/* pt-20 to clear fixed header */}

                {/* Question Info Bar & Timer (Top of the Quiz Card) */}
                <div className="bg-[#183239] w-full rounded-t-xl p-4 flex justify-between items-center shadow-md">
                    <h2 className="text-lg font-semibold text-white">Question {currentQuestionIndex + 1} of {totalQuestions}</h2>
                    <span className="text-sm bg-white text-black px-2 py-1 rounded-full">Single Select Question</span>
                    <div
                        className={`w-12 h-12 bg-gray-800 border-4 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-500 ${timeLeft > 30 ? 'border-pink-500' : timeLeft > 10 ? 'border-yellow-400' : 'border-red-500'}`}
                        aria-label={`Time left: ${timeLeft} seconds`}
                    >
                        {timeLeft}
                    </div>
                </div>

                {/* Quiz Card Content */}
                <div className="bg-[#183239] w-full rounded-b-xl p-6 shadow-md mb-6"> {/* Separated from top bar */}
                    {currentQuestion.image && (
                        <div className="mb-4 flex justify-center">
                            <img
                                src={currentQuestion.image}
                                alt="Question visual"
                                className="rounded-lg w-full max-h-72 object-cover"
                            />
                        </div>
                    )}

                    <div className="text-center text-lg font-medium text-white mb-6">
                        {currentQuestion.question}
                    </div>

                    <div className="space-y-3">
                        {currentQuestion.options.map((option, index) => {
                            const correctAnswerIndex = currentQuestion.options.indexOf(currentQuestion.correctAnswer);
                            const isCorrectAnswerOption = index === correctAnswerIndex;
                            const isSelected = selectedOptionIndex === index;
                            const isWrongButSelected = isSelected && !isCorrectAnswerOption;

                            return (
                                <button
                                    key={index}
                                    onClick={(e) => handleAnswer(index, e)} // Pass event object
                                    disabled={isOptionLocked}
                                    ref={isWrongButSelected ? wrongOptionButtonRef : null} // Assign ref only for the selected WRONG button
                                    className={`
                                        w-full flex items-center text-left px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer
                                        ${isOptionLocked && isCorrectAnswerOption ? 'bg-green-500 text-white' : // Correct answer revealed
                                          isWrongButSelected ? 'bg-red-500 text-white' : // Wrong answer selected
                                          'bg-white text-black hover:bg-yellow-100'}
                                        ${isOptionLocked && !isSelected && !isCorrectAnswerOption ? 'opacity-70' : ''} /* Dim unselected incorrect */
                                        disabled:cursor-not-allowed
                                    `}
                                    aria-label={`Option ${String.fromCharCode(65 + index)}: ${option}`}
                                >
                                    <span className="w-6 h-6 mr-4 bg-[#1f3a40] text-white rounded-full flex items-center justify-center font-bold">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                    <span className="flex-grow">{option}</span>
                                    {/* Visual feedback icons */}
                                    {isOptionLocked && (
                                        isCorrectAnswerOption ? (
                                            <BsCheckCircleFill className="text-white ml-auto" size={20} aria-label="Correct answer" />
                                        ) : isSelected ? (
                                            <BsXCircleFill className="text-white ml-auto" size={20} aria-label="Incorrect answer" />
                                        ) : null
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Next Question button */}
                    {isOptionLocked && (
                        <div className="mt-6 relative">
                            <button
                                onClick={goToNextQuestion}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl relative z-10 cursor-pointer"
                                aria-label={currentQuestionIndex < totalQuestions - 1 ? 'Go to next question' : 'Finish Quiz'}
                            >
                                {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Quiz'}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Fixed Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-900 bg-opacity-90 py-3 px-4 flex justify-between items-center shadow-top">
                <Link to="/categories" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Exit Quiz">
                    <IoExitOutline size={28} />
                </Link>
                <div className="flex items-center gap-4">
                    {/* Mute/Unmute Icon in bottom nav - REMOVED */}
                    {/*
                    <button
                        onClick={() => setShowMuteOptionsPopup(true)}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label={isMuted ? "Unmute Sounds" : "Mute Sounds"}
                    >
                        {isMuted ? <HiVolumeOff size={24} /> : <HiVolumeUp size={24} />}
                    </button>
                    */}
                    {/* Performance Link */}
                    <Link to="/performance" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="View Performance">
                        <MdOutlineQuiz size={28} />
                    </Link>
                </div>
            </div>

            {/* Mute/Unmute Options Popup - ENTIRELY REMOVED */}
            {/*
            {showMuteOptionsPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#461F7F] w-11/12 max-w-sm relative">
                        <button
                            onClick={() => setShowMuteOptionsPopup(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
                            aria-label="Close sound settings"
                        >
                            <IoCloseCircleOutline size={30} />
                        </button>
                        <h2 className="text-2xl font-bold text-[#100421] mb-6 text-center">Sound Settings</h2>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-700 text-lg">Mute All Sounds</span>
                            <label htmlFor="toggle-mute" className="flex items-center cursor-pointer">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        id="toggle-mute"
                                        className="sr-only"
                                        checked={isMuted}
                                        onChange={() => setIsMuted(prev => !prev)}
                                        aria-label="Toggle mute all sounds"
                                    />
                                    <div className={`block w-14 h-8 rounded-full ${isMuted ? 'bg-gray-400' : 'bg-green-500'}`}></div>
                                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isMuted ? '' : 'translate-x-full'}`}></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            )}
            */}

            {/* Custom "Time's Up!" Popup */}
            {showTimeUpPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center relative w-11/12 max-w-sm">
                        <h2 className="text-4xl font-bold text-red-600 mb-4">Time Up!</h2>
                        <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto text-6xl font-bold mb-4 animate-pulse" aria-live="polite">
                            {timeUpCountdown}
                        </div>
                    </div>
                </div>
            )}

            {/* IMPORTANT: MOVE THIS <style> BLOCK TO YOUR GLOBAL CSS FILE (e.g., src/index.css or src/App.css) */}
            <style>{`
                @keyframes scaleUp {
                    0% { transform: scale(0.5); opacity: 0; }
                    50% { transform: scale(1.2); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .animate-scaleUp {
                    animation: scaleUp 1s forwards;
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                    transform: translate3d(0, 0, 0);
                    backface-visibility: hidden;
                    perspective: 1000px;
                }
            `}</style>
        </div>
    );
};

export default Quiz;