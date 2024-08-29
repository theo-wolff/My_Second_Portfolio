import React from 'react'
import "./footer.css"
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='footer-global-container' id="contact">
        <div className='footer'>
            <div className="footer-title">Contact</div>
            <div className='footer-items'>
                <div className='footer-item'>
                    <motion.a whileHover={{scale:1.2, opacity:0.9}} href="https://www.linkedin.com/in/th%C3%A9o-wolff-18b6401ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3du0DmcQR%2B2p83klniDhug%3D%3D" rel="noopener noreferrer" target="_blank"><i class=" fa-2xl fa-brands fa-linkedin fa-flip footer-cursor"></i></motion.a>
                </div>
                <div className='footer-item'>
                    <motion.a whileHover={{scale:1.2, opacity:0.9}} href="mailto:theo.wolff2407@gmail.com"><i class="fa-solid fa-envelope fa-beat fa-2xl footer-cursor"></i></motion.a>
                    <p className='footer-text'>theo.wolff2407@gmail.com</p>
                </div>
                <div className='footer-item'>
                    <motion.a whileHover={{scale:1.2, opacity:0.9}} ><i class="fa-solid fa-phone-volume fa-bounce fa-2xl"></i></motion.a>
                    <p className='footer-text'>+33646915537</p>
                </div>
                <div className='footer-item'>
                    <motion.a className="social-img" whileHover={{scale:1.2, opacity:0.9}} href="https://github.com/theo-wolff" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-github fa-spin fa-spin-reverse fa-2xl footer-cursor"></i></motion.a>
                </div>
            </div>
            <div className='footer-bottom'>Wolff Theo</div>
        </div>
    </div>
  )
}

export default Footer