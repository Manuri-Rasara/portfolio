import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div>
      <footer class="lastfooter">
        <span className='footercopy'>&copy;2024  &nbsp;&nbsp;    All Rights Reserved. Design & Coded with ❤️</span>
        

        <ul className='footerlinks'>
            <li><a href='#'>LinkedIn</a></li>
            <li><a href='#'>GitHub</a></li>
            <li><a href='#'>Instergrame</a></li>
        </ul>

        
   
</footer>

    </div>
  )
}
