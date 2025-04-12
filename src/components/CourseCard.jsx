import React from 'react';
import { motion } from 'framer-motion';
import { Howl } from 'howler';

const sound = new Howl({ src: ['/hover.mp3'] });



function CourseCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
      whileTap={{ scale: 0.95 }}
      className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      onHoverStart={() => sound.play()}
    >
      <h3 className="text-xl font-semibold mb-2 text-primary font-poppins">{title}</h3>
      <p className="text-gray-600 font-poppins">{description}</p>
    </motion.div>
  );
}

export default CourseCard;