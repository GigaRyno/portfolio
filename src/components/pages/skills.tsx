"use client";

import { useSectionInView } from '@/lib/hooks'
import React, { useState } from 'react'
import {LargeSectionHeading, MediumSectionHeading, SmallSectionHeading} from '../ui/heading';
import { frontEndData, backEndData, toolsData } from '@/lib/data';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Skill() {
  const { ref } = useSectionInView("Skills", 0.5)

  return (
    <section
      ref={ref}
      id='skills'
      className='mb-20 mt-20 text-center scroll-mt-32'
    >
      <LargeSectionHeading>My Skills</LargeSectionHeading>
      <Tabs defaultValue="frontend">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="frontend">Front-End</TabsTrigger>
          <TabsTrigger value="backend">Back-End</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>
        <TabsContent value="frontend" className='smmobile:max-mobile:w-[300px] w-[600px] flex flex-wrap gap-2 justify-center mt-6'>
          {frontEndData.map((item, index) => (
            <motion.li 
              className='items-center flex flex-wrap border py-1 px-2 border-black bg-white rounded-lg 
                       hover:bg-gray-900 hover:text-white transform transition-transform duration-300 hover:scale-110
                       dark:hover:text-gray-900 dark:hover:bg-gray-50 dark:border-gray-50 dark:bg-gray-900 dark:text-white'
              key={index}
              initial="initial"
              viewport={{ once: true }}
              custom={index}
            >
              <span 
                className='text-3xl items-center'>
                {item.icon}
              </span> 
                {item.skill}
            </motion.li>
          ))}
        </TabsContent>
        <TabsContent value="backend" className='smmobile:max-mobile:w-[300px] w-[600px] flex flex-wrap gap-2 justify-center'>
          {backEndData.map((item, index) => (
            <motion.li 
              className='items-center flex flex-wrap border py-1 px-2 border-black bg-white rounded-lg 
                       hover:bg-gray-900 hover:text-white transform transition-transform duration-300 hover:scale-110
                       dark:hover:text-gray-900 dark:hover:bg-gray-50 dark:border-gray-50 dark:bg-gray-900 dark:text-white'
              key={index}
              initial="initial"
              viewport={{ once: true }}
              custom={index}
            >
              <span 
                className='text-3xl items-center'>
                {item.icon}
              </span> 
                {item.skill}
            </motion.li>
          ))}
        </TabsContent>
        <TabsContent value="tools" className='smmobile:max-mobile:w-[300px] w-[600px] flex flex-wrap gap-2 justify-center'>
          {toolsData.map((item, index) => (
            <motion.li 
              className='items-center flex flex-wrap border py-1 px-2 border-black bg-white rounded-lg 
                       hover:bg-gray-900 hover:text-white transform transition-transform duration-300 hover:scale-110 
                       dark:hover:text-gray-900 dark:hover:bg-gray-50 dark:border-gray-50 dark:bg-gray-900 dark:text-white '
              key={index}
              initial="initial"
              viewport={{ once: true }}
              custom={index}
            >
              <span 
                className='text-3xl items-center'>
                {item.icon}
              </span> 
                {item.skill}
            </motion.li>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}