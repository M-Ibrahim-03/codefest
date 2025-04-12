import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CourseCard from './CourseCard';

gsap.registerPlugin(ScrollTrigger);

function StudentDashboard() {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      y: '+=100',
      scrollTrigger: {
        trigger: bgRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.fromTo(
      '.section',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen p-8 pt-16 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-b from-primary to-secondary opacity-20 z-[-1]"
        style={{
          height: '120%',
          transform: 'translateY(-10%)',
        }}
      />
      <h1 className="text-5xl font-bold text-center mb-12 text-white font-poppins">
        Student Dashboard
      </h1>
      <div className="section mb-12 relative z-10">
        <h2 className="text-3xl font-semibold mb-6 text-white font-poppins">
          Current Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard
            title="Mathematics"
            description="Master algebra, calculus, and more with interactive lessons."
          />
          <CourseCard
            title="Science"
            description="Explore physics, chemistry, and biology in depth."
          />
          <CourseCard
            title="History"
            description="Uncover the past and its impact on the present."
          />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;