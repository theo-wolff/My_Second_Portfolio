import React, { useState } from 'react'
import "./Sidebar.css"
import Links from './Links/Links'
import ToggleButton from './ToggleButton/ToggleButton'
import { motion } from 'framer-motion'

const Sidebar = () => {
const [open, setOpen] = useState(false);

  const variants = {
    open:{
      clipPath:"circle(1200px at 18rem 50px)",
      transition:{
        type:"spring",
        stiffness:20,
      },
    },
    closed:{
      clipPath: "circle(30px at 18rem 50px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness: 200,
        damping: 50,
      },
      whileHover:{
        scale:1.2
      }
    }
  }

  return (
    <motion.div className='sidebar'  animate={open ? "open":"closed"}>
        <motion.div className='sidebar background' variants={variants}>
            <Links></Links>
        </motion.div>
        <ToggleButton setOpen={setOpen}></ToggleButton>
    </motion.div>
  )
}

export default Sidebar