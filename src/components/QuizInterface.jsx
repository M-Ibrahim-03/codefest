import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import ErrorBoundary from './ErrorBoundary';

function QuizInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
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

  const handleAnswer = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert('Quiz completed!');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8">
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
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className="bg-primary h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
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
                    onClick={handleAnswer}
                    className="w-full p-3 bg-secondary text-white rounded-lg font-poppins hover:bg-green-600"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default QuizInterface;