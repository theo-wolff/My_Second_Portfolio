import React from 'react'
import './Portfolio.css'
import { motion } from 'framer-motion'

const P_Item_Expand = (props) => {
  return (
 
    <motion.div className="experiences-expand" 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.5}}
                >
        <h2 className='experiences-item-title'>ASML Software Intern</h2>
        <div className='experiences-item-title-bar'></div>
        <div className="experiences-item-text">
            44444444444444444444444444444444444444444444444444444444444444

        </div>
    </motion.div>)
}

export default P_Item_Expand