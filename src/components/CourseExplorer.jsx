import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeBackground from './ThreeBackground';
import ErrorBoundary from './ErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

function CourseExplorer() {
  const [category, setCategory] = useState('all');
  const courses = [
    { id: 1, title: 'Algebra Basics', category: 'Math', description: 'Learn equations and functions.' },
    { id: 2, title: 'Physics 101', category: 'Science', description: 'Explore mechanics and energy.' },
    { id: 3, title: 'World History', category: 'History', description: 'Discover ancient civilizations.' },
    { id: 4, title: 'Calculus', category: 'Math', description: 'Master derivatives and integrals.' },
  ];

  const filteredCourses = category === 'all' ? courses : courses.filter(c => c.category === category);

  React.useEffect(() => {
    gsap.fromTo(
      '.course-card',
      { opacity: 0, rotateY: 90 },
      {
        opacity: 1,
        rotateY: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.course-card',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [category]);

  return (
    <div className="relative min-h-screen p-8 pt-16">
      <ErrorBoundary>
        <ThreeBackground />
      </ErrorBoundary>
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-12 font-poppins"
        >
          Explore Courses
        </motion.h1>
        <div className="flex justify-center mb-8 space-x-4">
          {['all', 'Math', 'Science', 'History'].map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg font-poppins ${
                category === cat ? 'bg-primary text-white' : 'bg-white text-primary'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <motion.div
              key={course.id}
              className="course-card bg-white bg-opacity-90 p-6 rounded-xl shadow-2xl backdrop-blur-md"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <h3 className="text-xl font-semibold text-primary font-poppins mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 font-poppins">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseExplorer;