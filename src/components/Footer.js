import React from 'react';
import '../styles/Footer.css';
import {FaYoutube, FaFacebook, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa'


export default function Footer () {
  return (
    <footer>
      <div className='socials'>
        <FaYoutube className='fa'/>
        <FaFacebook className='fa'/> 
        <FaLinkedin className='fa'/> 
        <FaInstagram className='fa'/> 
        <FaTwitter className='fa'/>
      </div>

      <div className='terms'>
        <p> Terms of Service </p>
        <p> Privacy Policy </p>
      </div>

      <p> Copyright @ Peddle Technologies. All rights reserved </p>
    </footer>
  )
}