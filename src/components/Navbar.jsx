import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const location = useLocation();
  const navItems = [
    { to: '/student', label: 'Dashboard' },
    { to: '/courses', label: 'Courses' },
    { to: '/quiz', label: 'Quiz' },
    { to: '/educator', label: 'Insights' },
    { to: '/leaderboard', label: 'Leaderboard' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-20 bg-white bg-opacity-90 backdrop-blur-md shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary font-poppins">
              <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Adaptive Learning
              </motion.span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {navItems.map(item => (
              <motion.div
                key={item.to}
                whileHover={{ rotateX: 10, rotateY: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  to={item.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium font-poppins ${
                    location.pathname === item.to
                      ? 'bg-primary text-white'
                      : 'text-primary hover:bg-primary hover:bg-opacity-10'
                  }`}
                >
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {item.label}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;