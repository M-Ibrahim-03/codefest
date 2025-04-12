import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ThreeBackground from './ThreeBackground';
import ErrorBoundary from './ErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

function EducatorInsights() {
  const data = [
    { name: 'Jan', score: 80 },
    { name: 'Feb', score: 85 },
    { name: 'Mar', score: 90 },
    { name: 'Apr', score: 88 },
  ];

  useEffect(() => {
    gsap.fromTo(
      '.chart',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.chart',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
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
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-12 font-poppins"
        >
          Educator Insights
        </motion.h1>
        <div className="chart bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl backdrop-blur-md mb-8">
          <h2 className="text-3xl font-semibold mb-4 font-poppins text-primary">
            Student Performance
          </h2>
          <LineChart width={600} height={300} data={data} className="mx-auto">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ fill: '#4F46E5', r: 4 }}
            />
          </LineChart>
        </div>
        <div className="chart bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl backdrop-blur-md">
          <h2 className="text-3xl font-semibold mb-4 font-poppins text-primary">
            Engagement Heatmap
          </h2>
          <div className="grid grid-cols-7 gap-1">
            {[...Array(35)].map((_, i) => (
              <motion.div
                key={i}
                className="h-8 rounded"
                style={{ backgroundColor: `rgba(16, 185, 129, ${Math.random() * 0.8 + 0.2})` }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducatorInsights;