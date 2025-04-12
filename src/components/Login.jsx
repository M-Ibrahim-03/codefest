import React from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import ErrorBoundary from './ErrorBoundary';

function Login() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  const title = 'Welcome to Adaptive Learning';

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <ErrorBoundary>
        <ThreeBackground />
      </ErrorBoundary>
      <div className="relative z-10 w-full max-w-4xl mx-auto p-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4 font-poppins">
            {title.split('').map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl text-white font-poppins"
          >
            Personalized education at your fingertips
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-primary font-poppins">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary font-poppins"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary font-poppins"
                placeholder="Password"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full p-3 bg-primary text-white rounded-lg hover:bg-blue-600 font-poppins"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;