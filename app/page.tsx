"use client";

import React, { useEffect, useState } from 'react';
import Home from '@/components/Home';

const HomePage = () => {
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
      <Home />
    </div>
  );
};

export default HomePage;
