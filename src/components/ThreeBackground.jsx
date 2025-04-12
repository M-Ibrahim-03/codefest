import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import debounce from 'lodash.debounce';

function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const particles = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000;
      positions[i + 1] = (Math.random() - 0.5) * 2000;
      positions[i + 2] = (Math.random() - 0.5) * 2000;
    }
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    const sphereGeometry = new THREE.SphereGeometry(300, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x4F46E5,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    camera.position.z = 1000;

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.001;
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const onWindowResize = debounce(() => {
      if (!mountRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, 100);

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationFrameId);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      particles.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
}

export default ThreeBackground;