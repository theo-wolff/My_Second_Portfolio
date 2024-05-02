import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div class="education" id="services">
            <h2 class="education-title">My Studies</h2>
            <div className='education-title-bar'></div>
            <div class="services">
                <div class="service">
                    <h3>Ecole des Mines de Saint Etienne</h3>
                    <p>I am currently pursuing my studies at an esteemed engineering school, specializing in the fields of computer science and microelectronics, situated in the picturesque southern region of France.</p>
                    <p>Immersed in an intellectually stimulating environment, I am fortunate to be a part of an institution that fosters innovation and excellence in these cutting-edge disciplines. </p>
                </div> 
                
                <div class="service">
                    <h3>Lycée Kléber</h3>
                    <p>Two-year intensive preparation for the national competitive entrance exams to leading French engineering schools</p>
                    <p>This intensive academic journey has instilled in me a strong sense of discipline and perseverance.</p>
                    <p>I have developed a robust skill set and a strategic mindset.</p>
                </div> 
            </div> 
            {/* <p>This led me to carry out some projects.</p>
            <a href="#work" class="btn">My Work</a> */}
    </div>
  )
}

export default Education