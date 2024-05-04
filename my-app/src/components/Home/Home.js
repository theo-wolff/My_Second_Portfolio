import React from 'react'
import "./Home.css"
import CV from "../../img/CV_photo.jpg"
import Scroll from "../../img/scroll-down.png"
import { motion } from 'framer-motion'



const Home = () => {
  return (
    <>
    <div className='home'>
      <div className="intro">
        <h1 className="section__title section__title--intro">
            Hi, I am <strong>Théo Wolff</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Engineering student </p>
        <img src={CV} alt="a picture of me" className="intro__img"></img>
      </div>
      <div className='text-container'>
        <h2>I am currently looking for a 6-month intership starting in April in software development.</h2>
        <div className='buttons'>
          <button class="animated-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span class="text">Contact me</span>
            <span class="circle"></span>
            <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>
          <motion.a   href='#about-me'
                      initial={{opacity:0}}
                      animate= {{opacity:1}}
                      transition={{duration:2, repeat:Infinity}}
                      className='button-scroll'
            ><img src={Scroll} alt="scroll button" className='scroll__img'></img>
          </motion.a>
        </div>
      </div>
      <motion.div initial={{x:0, opacity:0.2}}
                  animate = {{x: "-340%"}}
                  transition={{repeat: Infinity, duration: 7, repeatType:"mirror"}}
                  className='text-container slidingText'>
        Engineer IT Programming
      </motion.div>
    </div>
    </>
  )
}

export default Home