"use client";

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const navItems = ['Home', 'About', 'Contact'];

  const handleItemClick = (item: string) => {
    setActive(item);
  };

  return (
    <motion.div
      className='fixed z-20 flex items-center justify-between w-full p-4 lg:px-16 lg:py-6'
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, duration: 1 }}
    >
      <a href='/' className='text-3xl md:text-4xl text-white font-bold'>Prestige Drive</a>

      {/* Navigation Items */}
      <motion.div className="hidden lg:flex items-center justify-center gap-4">
        {navItems.map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className={`relative px-4 py-1 cursor-pointer rounded-full ${active === item ? '' : 'bg-white/20'}`}
          >
            {/* Moving White Background */}
            {active === item && (
              <motion.div
                layoutId="active-navbar-item"
                className="absolute inset-0 bg-white rounded-full z-0"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            {/* Text Content */}
            <span className={`relative z-10 text-lg ${active === item ? 'text-black font-bold' : 'text-white font-medium'}`}>
              {item}
            </span>
          </div>
        ))}

        {/* AI Recommendation Button */}
        <Button className='ml-8 rounded-full text-lg bg-white/20 text-white font-medium cursor-pointer hover:bg-white hover:text-black hover:opacity-80 hover:scale-105 transition-all duration-300'>
          AI Recommendation
        </Button>
      </motion.div>

      {/* Rent a Car Button */}
      <Button className='flex items-center justify-center rounded-full text-lg bg-white/20 text-white font-medium cursor-pointer hover:bg-white hover:text-black hover:opacity-80 hover:scale-105 transition-all duration-300'>
        Rent a Car
      </Button>
    </motion.div>
  )
}

export default Navbar;
