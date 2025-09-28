"use client";

import React from 'react'
import { motion } from 'framer-motion'
import LAMBORGHINI from '@/public/lamborghini.png'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import Image from 'next/image';

const items = [
    {title: "Wide range of cars", src: LAMBORGHINI, description: "Our collection ranges across 10+ brands and across 50+ different cars available always to choose between"},
    {title: "All Inclusive Pricing", src: LAMBORGHINI, description: "We offer all inclusive pricing with no hidden fees, so you can enjoy your ride without any surprises"},
    {title: "No Hidden Fees", src: LAMBORGHINI, description: "We offer all inclusive pricing with no hidden fees, so you can enjoy your ride without any surprises"},
    {title: "24/7 Customer Support", src: LAMBORGHINI, description: "Our team is available 24/7 to assist you with any questions or concerns you may have"},
];

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

const page = () => {
  return (
    <motion.div
        initial={{y: 100, opacity: 0}}
        animate={{y: 0,opacity: 1}}
        transition={{duration: 0.5}}
        className='flex items-center justify-center w-screen h-screen'>
            {/* <BentoGrid className='relative max-w-4xl mx-auto md:auto-rows-[20rem]'>
                {items.map((item, index) => (
                    <BentoGridItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        header={<Skeleton />}
                        className={`bg-black ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
                    />
                ))}
            </BentoGrid> */}
            <div className="relative z-10 grid grid-cols-3 gap-4 max-w-3/4">
                {items.map((item, index) => (
                    <div key={index} className={`bg-gradient-to-b from-neutral-900 to-neutral-800 border-2 border-white/30 flex flex-col items-start justify-end gap-4 p-4 rounded-xl ${index === 0 || index === 3 ? 'col-span-2' : ''}`}>
                        <Image src={item.src} alt={item.title} className={`${index === 0 || index === 3 ? 'w-3/4' : 'w-full'} h-auto rounded-xl bg-neutral-500 p-4 -scale-x-100`}/>
                        <h1 className='text-white text-xl font-bold mb-2'>{item.title}</h1>
                        <p className='text-white text-sm mb-2'>{item.description}</p>
                    </div>
                ))}
            </div>
     </motion.div>
  )
}

export default page