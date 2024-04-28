import React from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import "./ToggleButton.css"
import { motion } from 'framer-motion'

const ToggleButton = ({setOpen}) => {

  return (
    <motion.div 
      initial={{opacity:0, scale:0}}
      animate={{opacity:1, scale:1}}
      transition={{duration:0.5}}
      whileHover={{scale:1.2, opacity:0.9}}
      className='ham' >
    <Hamburger rounded className="ham" onToggle={toggled => {
        setOpen((prev)=>!prev)
      }}></Hamburger>
    </motion.div>
  )
}

export default ToggleButton