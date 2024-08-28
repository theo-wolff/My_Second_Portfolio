import React from 'react'
import "./Links.css"
import { motion } from 'framer-motion'


const Links = () => {
  return (
    <>
    <motion.div className='links' >
    <motion.a href="#home" whileHover={{scale:1.4, opacity: 0.7}} whileTap={{scale:0.9}}>Home</motion.a >
    <motion.a href="#about-me"  whileHover={{scale:1.4, opacity: 0.7}} whileTap={{scale:0.9}}>About me</motion.a >
    <motion.a href="#skills" whileHover={{scale:1.4, opacity: 0.7}} whileTap={{scale:0.9}}>My skills</motion.a >
    <motion.a href="#experiences" className="links--h" whileHover={{scale:1.4, opacity: 0.7}} whileTap={{scale:0.9}}>Qualification</motion.a >
    <motion.a href="#portfolio" className="links--h" whileHover={{scale:1.4, opacity: 0.7}} whileTap={{scale:0.9}}>Portfolio</motion.a >
    
    </motion.div>
    </>
  )
}

export default Links