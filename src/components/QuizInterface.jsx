import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import ErrorBoundary from './ErrorBoundary';

function QuizInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      id: 1,
      text: 'What is 2 + 2?',
      options: ['3', '4', '5'],
      correct: '4',
    },
    {
      id: 2,
      text: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin'],
      correct: 'Paris',
    },
  ];

  const handleAnswer = option => {
    setSelectedOption(option);
    const correct = option === questions[currentQuestion].correct;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 pt-16">
      <ErrorBoundary>
        <ThreeBackground />
      </ErrorBoundary>
      <div className="relative z-10 w-full max-w-2xl">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-8 font-poppins"
        >
          Quiz Time
        </motion.h1>
        <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl backdrop-blur-md">
          {!showResult ? (
            <>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className="bg-primary h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                </div>
                <p className="text-center mt-2 font-poppins text-primary">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-4 font-poppins text-primary">
                    {questions[currentQuestion].text}
                  </h2>
                  <div className="space-y-2">
                    {questions[currentQuestion].options.map(option => (
                      <motion.button
                        key={option}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleAnswer(option)}
                        disabled={selectedOption !== null}
                        className={`w-full p-3 rounded-lg font-poppins text-white transition-colors ${
                          selectedOption === option
                            ? isCorrect
                              ? 'bg-secondary'
                              : 'bg-red-500'
                            : selectedOption !== null
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-primary hover:bg-blue-600'
                        }`}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-4 font-poppins text-primary">
                Quiz Completed!
              </h2>
              <p className="text-xl mb-6 font-poppins text-gray-600">
                Your Score: {score} / {questions.length}
              </p>
              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-primary text-white rounded-lg font-poppins hover:bg-blue-600"
                >
                  Retry Quiz
                </motion.button>
                <Link to="/student">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-secondary text-white rounded-lg font-poppins hover:bg-green-600"
                  >
                    Back to Dashboard
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizInterface;