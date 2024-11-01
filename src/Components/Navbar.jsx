import React, { useRef, useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    navbarRef.current.classList.toggle('open');
  };

  return (
    <div className="header">
      <a href="#" className="logoname">
        <span>&copy; MANURI.</span>
      </a>
      <ul className="navbar" ref={navbarRef}>
        <li><a href="#info">INFO</a><span className='nav-dot'></span></li>
        <li><a href="#work">WORK</a><span className='nav-dot'></span></li>
        <li><a href="#contact">CONTACT</a><span className='nav-dot contact-nav-dot'></span></li>
      </ul>
      <div className="main">
        <button
          className="smallscreenmenu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
}
