"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { House, Phone, Sparkles, User } from 'lucide-react';

const BottomBar = () => {
    const [active, setActive] = useState('Home');
    const navItems = [
        { name: 'Home', icon: <House /> },
        { name: 'About', icon: <User /> },
        { name: 'Contact', icon: <Phone /> },
        { name: 'AI-recommendation', icon: <Sparkles /> },
    ];

    return (
        <motion.div
            className='lg:hidden fixed z-10 bottom-0 bg-black flex items-center justify-between w-full px-8 h-12 rounded-t-2xl'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50, duration: 1 }}
        >
            {navItems.map((item) => (
                <div
                    key={item.name}
                    onClick={() => setActive(item.name)}
                    className='relative flex items-center justify-center flex-1'
                >
                    {/* Moving white background */}
                    {active === item.name && (
                        <motion.div
                            layoutId='active-background'
                            className='absolute inset-0 bg-white rounded-xl z-0'
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                    )}
                    {/* Icon */}
                    <div className={`relative z-10 p-2 ${active === item.name ? 'text-black' : 'text-white'}`}>
                        {item.icon}
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default BottomBar;
