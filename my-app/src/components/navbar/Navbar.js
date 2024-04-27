import React from 'react'
import "./Navbar.css"
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/sidebar'

const Navbar = () => {
  return (
    <>
    
    <div className='wrapper'>
        <motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}}>
                My Portfolio
        </motion.span>
        <motion.div 
            className='social'
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
            }}>
            <a href="https://github.com/theo-wolff" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-github fa-spin fa-spin-reverse fa-2xl"></i></a>
            <a href="https://www.linkedin.com/in/th%C3%A9o-wolff-18b6401ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3du0DmcQR%2B2p83klniDhug%3D%3D" rel="noopener noreferrer" target="_blank"><i class=" fa-2xl fa-brands fa-linkedin fa-flip"></i></a>
        </motion.div>
        <Sidebar></Sidebar>
    </div>
    </>
  )
}

export default Navbar