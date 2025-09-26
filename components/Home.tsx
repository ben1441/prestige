'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import PORSCHE from '@/public/porsche.png'
import LAMBORGHINI from '@/public/lamborghini.png'
import FERRARI from '@/public/ferrari.png'
import MERCEDES from '@/public/mercedes.png'
import ROLLS_ROYCE from '@/public/rolls-royce.png'
import { motion, AnimatePresence } from 'framer-motion'
import { Inter, Anton } from 'next/font/google'
import { MoveLeft, MoveRight } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });

const cars = [
  { src: PORSCHE, name: 'PORSCHE', alt: 'Porsche', imageCN: 'max-lg:scale-120', additionalCN: 'bg-gradient-to-b from-white to-gray-600' },
  { src: LAMBORGHINI, name: 'LAMBORGHINI', alt: 'Lamborghini', imageCN: '-scale-x-100', additionalCN: 'bg-gradient-to-b from-yellow-300 to-yellow-900' },
  { src: FERRARI, name: 'FERRARI', alt: 'Ferrari', imageCN: 'lg:scale-170', additionalCN: 'bg-gradient-to-b from-red-500 to-red-950' },
  { src: MERCEDES, name: 'MERCEDES', alt: 'Mercedes', imageCN: 'lg:scale-170', additionalCN: 'bg-gradient-to-b from-green-400 to-green-900' },
  { src: ROLLS_ROYCE, name: 'ROLLS ROYCE', alt: 'Rolls Royce', imageCN: '-scale-x-100 lg:-scale-x-170 lg:scale-y-170', additionalCN: 'bg-gradient-to-b from-gray-900 to-[#b7b4b3]' },
];

const Home = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [direction, setDirection] = useState('left');

  const nextCar = () => {
    setDirection('left');
    setCurrentCarIndex((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setDirection('right');
    setCurrentCarIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

    const currentCar = cars[currentCarIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextCar();
      } else if (event.key === 'ArrowLeft') {
        prevCar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentCarIndex]); // Dependency to ensure correct state access
  return (
    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 50, duration: 1 }} className="flex flex-col justify-center items-center px-4 w-screen h-screen relative z-10">
      <motion.h1 key={currentCarIndex} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 50, duration: 1 }} className={`text-6xl md:text-9xl lg:text-[11rem] text-transparent bg-clip-text ${currentCar.additionalCN} text-center ${anton.className}`}>
        {currentCar.name}
      </motion.h1>

      <div className="z-10 w-[80%] flex justify-between items-center mt-4">
        {/* Left Arrow */}
        <div
          onClick={prevCar}
          className="hidden lg:block rounded-full p-3 bg-white/20 hover:bg-white cursor-pointer text-white hover:text-black transition-all duration-300 hover:scale-105"
        >
          <MoveLeft className="w-8 h-8" />
        </div>

        {/* Car Image with AnimatePresence */}

        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative md:mt-8 lg:mt-12 w-full md:w-4/5 h-auto flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => {
                      if (info.offset.x < -100) {
                          nextCar();
                      } else if (info.offset.x > 100) {
                          prevCar();
                      }
                  }}
                  key={currentCarIndex}
                  initial={{ opacity: 0, x: direction === 'left' ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
              >
                <Image
                  src={currentCar.src}
                  alt={currentCar.alt}
                  className={`w-full h-auto object-contain drop-shadow-2xl ${currentCar.imageCN}`}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-20 md:mt-32 z-10 flex items-center justify-center gap-2">
            {cars.map((car, index) => (
              <div key={index} onClick={() => setCurrentCarIndex(index)}className={`rounded-full bg-white${currentCarIndex == index ? '' : '/20'} w-4 h-4 cursor-pointer`}></div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <div
          onClick={nextCar}
          className="hidden lg:block rounded-full p-3 bg-white/20 hover:bg-white cursor-pointer text-white hover:text-black transition-all duration-300 hover:scale-105"
        >
          <MoveRight className="w-8 h-8" />
        </div>
      </div>
      <div className="absolute bottom-20 md:bottom-16 w-3/4 text-center">
        <h1 className='text-white/40 font-medium text-lg md:text-xl lg:text-2xl'>Prestige Drive is your one-stop High-end <span className='text-black bg-white/70 rounded px-1'>Car Rental Service.</span> We understand customer demands, our service ensures that every customers have any Car they like <br className='lg:hidden' /> <span className='text-black bg-white/70 rounded px-1'>without compromise</span></h1>
      </div>
    </motion.div>
  )
}

export default Home