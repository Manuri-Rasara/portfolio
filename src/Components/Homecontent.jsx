import React, { useRef, useEffect } from 'react';
import './Homecontent.css';
import angle from '../Assets/angle.png'
import {motion} from 'framer-motion'
import { fadeIn } from './Variants';

export default function Homecontent() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      const textContent = text.textContent; // Get the text content
      text.innerHTML = ''; // Clear original text

      textContent.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.style.transform = `rotate(${i * 14}deg)`; // Adjust rotation for spacing
        span.textContent = char; // Set character
        text.appendChild(span); // Append span to the text container
      });
    }
  }, []);

  return (
    <>
      <div className='maincontent'>
        <span>DIGITAL<br /></span>
        <span>ARCHITECT<br /></span>
      </div>
      <div className='subcontent'>
        <span>Specialized in -  <br />Software Engineering | <br />Web Development | UI/UX<br /></span>
      </div>

      <div className='circle'>
        <div className='logo'></div>
        <div className='text'>
          <p ref={textRef}>  Located in the Sri Lanka </p>
        </div>
      </div>

      {/* <div className='scroll'>
        <a href='#'><img src={angle}/></a>
      </div> */}
    </>
  );
}
