"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import BottomBar from '@/components/BottomBar';

const HomePage = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkFullscreen = () => {
    const fsElement = document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).msFullscreenElement;
    setIsFullscreen(!!fsElement);
  };

  const enterFullScreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) {
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) {
      (elem as any).msRequestFullscreen();
    }
  };

  useEffect(() => {
    // Detect if device is mobile
    const isMobileDevice = window.innerWidth < 1024; // lg breakpoint
    setIsMobile(isMobileDevice);

    // Check fullscreen state initially
    checkFullscreen();

    // Listen for fullscreen change
    const handler = () => checkFullscreen();
    document.addEventListener('fullscreenchange', handler);
    document.addEventListener('webkitfullscreenchange', handler);
    document.addEventListener('msfullscreenchange', handler);

    return () => {
      document.removeEventListener('fullscreenchange', handler);
      document.removeEventListener('webkitfullscreenchange', handler);
      document.removeEventListener('msfullscreenchange', handler);
    };
  }, []);

  // 💡 If on mobile and not fullscreen, show prompt
  if (isMobile && !isFullscreen) {
    return (
      <div className="min-h-screen w-full bg-black flex items-center justify-center text-white text-center px-4">
        <div>
          <p className="text-lg mb-4">For the best experience, please enable fullscreen mode.</p>
          <button
            onClick={enterFullScreen}
            className="bg-white text-black px-6 py-2 rounded-full text-base font-semibold hover:bg-gray-200 transition"
          >
            Enter Fullscreen
          </button>
        </div>
      </div>
    );
  }

  // ✅ Main App Content
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Dark Noise Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px, 30px 30px, 25px 25px",
          backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      />
      <Navbar />
      <Home />
      <BottomBar />
    </div>
  );
};

export default HomePage;
