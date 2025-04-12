import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ThreeBackground from './ThreeBackground';
import ErrorBoundary from './ErrorBoundary';

function Leaderboard() {
  const leaders = [
    { id: 1, name: 'Alex Smith', points: 1200, rank: 1 },
    { id: 2, name: 'Jamie Lee', points: 1100, rank: 2 },
    { id: 3, name: 'Sam Carter', points: 1000, rank: 3 },
    { id: 4, name: 'Taylor Brown', points: 900, rank: 4 },
  ];

  useEffect(() => {
    gsap.fromTo(
      '.leader',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen p-8 pt-16">
      <ErrorBoundary>
        <ThreeBackground />
      </ErrorBoundary>
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-12 font-poppins"
        >
          Leaderboard
        </motion.h1>
        <div className="max-w-3xl mx-auto">
          {leaders.map(leader => (
            <motion.div
              key={leader.id}
              className="leader bg-white bg-opacity-90 p-6 mb-4 rounded-xl shadow-2xl backdrop-blur-md flex items-center"
              whileHover={{ scale: 1.03 }}
            >
              <span
                className={`text-2xl font-bold mr-4 font-poppins ${
                  leader.rank === 1
                    ? 'text-yellow-400'
                    : leader.rank === 2
                    ? 'text-gray-400'
                    : leader.rank === 3
                    ? 'text-amber-600'
                    : 'text-primary'
                }`}
              >
                {leader.rank}
              </span>
              <div>
                <h3 className="text-xl font-semibold font-poppins text-primary">
                  {leader.name}
                </h3>
                <p className="text-gray-600 font-poppins">{leader.points} Points</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;