
import './Projects.css'
import project1 from '../Assets/project1.png'
import figma from '../Assets/figma.png'
import projectone1 from '../Assets/projectone1.png'
import { fadeIn } from './Variants';
import { motion } from 'framer-motion';

import React, { useEffect, useState } from 'react';

import { FaEye } from 'react-icons/fa'
export default function Projects() {
    const [show, setShow] = useState(false); // Initially set to false to hide content

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;

            // Show content only when scrolling down
            if (currentScrollTop > 0) {
                setShow(true); // Show content when scrolled down
            } else {
                setShow(false); // Hide content at the top of the page
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, []);

  return (
    <div>
      <div className='project-container'>
        <button className='Pdot'></button>
        <span className='Ptitle'><strong>PROJECTS</strong></span>
        </div>
        

        <div className='flexbox'>
        <motion.div 
            className='card card1'
            variants={fadeIn('up', 0.3)} // 'up' for direction and 0.3 for delay
            initial="hidden" 
            whileInView="show" 
            viewport={{ amount: 0.5 }}
             
        >
                        <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye/></button>
                </div>
            </motion.div>

            <motion.div 
            className='card card1'
            variants={fadeIn('up', 0.3)} // 'up' for direction and 0.3 for delay
            initial="hidden" 
            whileInView="show" 
            viewport={{ amount: 0.5 }}
          
        >
                <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye/></button>
                </div>
                </motion.div>

            <motion.div 
            className='card card1'
            variants={fadeIn('up', 0.3)} // 'up' for direction and 0.3 for delay
            initial="hidden" 
            whileInView="show"
            viewport={{ amount: 0.5 }} 
         
        >
                <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye/></button>
                </div>
                </motion.div>


            <motion.div 
            className='card card1'
            variants={fadeIn('up', 0.3)} // 'up' for direction and 0.3 for delay
            initial="hidden" 
            whileInView="show" 
            viewport={{ amount: 0.5 }}
          
        >
                <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye/></button>
                </div>
                </motion.div>

            <motion.div 
            className='card card1'
            
            variants={fadeIn('up', 0.3)} // 'up' for direction and 0.3 for delay
            initial="hidden" 
            whileInView="show" 
            viewport={{ amount: 0.5 }}
      
        >
                <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye/></button>
                </div>
                </motion.div>


            <motion.div 
            className='card card1'
            variants={fadeIn('up', 0.3)} // 'up' for direction and 0.3 for delay
            initial="hidden" 
            whileInView="show" 
            
            viewport={{ amount: 0.5 }}
       
        >
                <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye/></button>
                </div>
                </motion.div>
        </div>


    </div>
  )
}
