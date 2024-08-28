import { motion, useScroll } from "framer-motion";
import "./Experiences.css";
import Exp from "../../img/portfolio.png"
import Educ from "../../img/graduation-cap.png"


import React, { useState } from 'react';

const Experiences = () => {

    const [isOpen, setIsOpen] = useState('');
    const [isClosed, setIsClosed]=useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const onHandleClick=(val)=>{
        if(!isClosed){
            setIsOpen(val);
            setIsClosed(true);
        }
        else{
            setIsOpen('');
            setIsClosed(false);
        }
    }

    return (
        <>
        <div className="experiences-global-container">
            <div className='experiences'>
                <div className="experiences-title">Qualification</div>
                <div className="experiences-title-bar"></div>
                <div className="experiences-title-category">
                    <div className="experiences-title-category-item" onClick={()=>setIsClicked(false)} style={{opacity: isClicked? 1 : 0.5}}><img class="experiences-title-img" src={Educ}></img> Education</div>
                    <div className="experiences-title-category-item" onClick={()=>setIsClicked(true)} style={{opacity: isClicked? 0.5 : 1}}><img class="experiences-title-img" src={Exp}></img> Experience</div>
                </div>
                {!isClicked && <div className='experiences-container'>
                    <div className='experiences-items'>
                        <motion.div 
                                    // transition = {{duration:1, type:"spring"}} 
                                    layout="position" 
                                    onClick={()=>onHandleClick('1.1')} 
                                    className='experiences-item'
                                    >
                            <motion.h4 layout>Ecole des Mines de Saint-Etienne</motion.h4>
                        </motion.div>

                        {/* A CHANGER DANS NVT COMPOSANT */}
                        {isOpen=='1.1' && (
                        <motion.div className="experiences-expand" 
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration:1}}
                                    onClick={()=>onHandleClick('1.1')}
                                    >
                            <h2 className='experiences-item-title'>Ecole des Mines de Saint-Etienne</h2>
                            <div className='experiences-item-title-bar'></div>
                            <div className="experiences-item-text">
                                <p style={{opacity:0.6, fontWeight: "bold"}}>Since 2022 Gardanne</p>
                                <p>Second year of a three-year engineering masters degree in Computer Science and Microelectronics.</p>
                                <p>I am currently pursuing my studies at an esteemed engineering school, specializing in the fields of computer science and microelectronics, situated in the picturesque southern region of France.</p>
                                <p>Immersed in an intellectually stimulating environment, I am fortunate to be a part of an institution that fosters innovation and excellence in these cutting-edge disciplines. </p>
                            </div>
                        </motion.div>)}

                        
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>
                        <div className='experiences-empty'></div>
                    </div>
                    <div className='experiences-items'>
                        <div className='experiences-empty'></div>
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>
                        <motion.div transition = {{duration:1, type:"spring"}} 
                                    layout="position" 
                                    onClick={()=>onHandleClick('1.2')} 
                                    className='experiences-item'
                                    >
                            <motion.h4 layout>Lycée Kleber</motion.h4>
                        </motion.div>
                        {isOpen=='1.2' && (
                                    <motion.div className="experiences-expand" 
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration:0.5}}
                                    onClick={()=>onHandleClick('1.2')}
                                    >
                            <h2 className='experiences-item-title'>Lycée Kleber</h2>
                            <div className='experiences-item-title-bar'></div>
                            <div className="experiences-item-text">
                                <p style={{opacity:0.6, fontWeight: "bold"}}>From 2020 to 2022 Strasbourg</p>
                                <p>Preparatory classes: two-year intensive preparation for the national competitive entrance exams to leading French engineering schools</p>
                                <p>This intensive academic journey has instilled in me a strong sense of discipline and perseverance.</p>
                                <p>I have developed a robust skill set and a strategic mindset.</p>
                            </div>
                        </motion.div>)}   
                    </div>
                    <div className='experiences-items'>
                        <motion.div transition = {{duration:1, type:"spring"}} 
                                        layout="position" 
                                        onClick={()=> onHandleClick('1.3')} 
                                        className='experiences-item'
                                        >
                                <motion.h4 layout>Lycée Notre-Dame</motion.h4>
                        </motion.div>
                        {isOpen=='1.3' && (
                        <motion.div className="experiences-expand" 
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration:1}}
                                    onClick={()=> onHandleClick('1.3')} 
                                    >
                            <h2 className='experiences-item-title'>Lycée Notre-Dame</h2>
                            <div className='experiences-item-title-bar'></div>
                            <div className="experiences-item-text">
                                <p style={{opacity:0.6, fontWeight: "bold"}}>From 2017 to 2020 Strasbourg</p>
                                <p>Scientific Baccalauréat with major in Sciences, obtained, with honours, European Option. Equivalent to GCSE A-levels.</p>
                            </div>
                        </motion.div>)}
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>
                        <div className='experiences-empty'></div>
                    </div>
                </div>}




                {/* Personnal experiences */}
                {isClicked && <div className='experiences-container'>
                    <div className='experiences-items'>
                        <div className='experiences-empty'></div>
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>
                            <motion.div transition = {{duration:1, type:"spring"}} 
                                            layout="position" 
                                            onClick={()=> onHandleClick('2.1')} 
                                            className='experiences-item'
                                            >
                                    <motion.h4 layout>ASML: Software Intern</motion.h4>
                            </motion.div>
                            {isOpen=='2.1' && (
                            <motion.div className="experiences-expand" 
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{duration:1}}
                                        onClick={()=> onHandleClick('2.1')} 
                                        >
                                <h2 className='experiences-item-title'>ASML Software Intern</h2>
                                <div className='experiences-item-title-bar'></div>
                                <div className="experiences-item-text">
                                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444

                                </div>
                            </motion.div>)} 


                    </div>
                    <div className='experiences-items'>
                        <motion.div transition = {{duration:1, type:"spring"}} 
                                        layout="position" 
                                        onClick={()=> onHandleClick('2.2')} 
                                        className='experiences-item'
                                        >
                                <motion.h4 layout>Salesman / Animator</motion.h4>
                        </motion.div>
                        {isOpen=='2.2' && (
                        <motion.div className="experiences-expand" 
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration:1}}
                                    onClick={()=> onHandleClick('2.2')} 
                                    >
                            <h2 className='experiences-item-title'>Salesman / Animator</h2>
                            <div className='experiences-item-title-bar'></div>
                            <div className="experiences-item-text">
                                <p style={{opacity:0.6, fontWeight: "bold"}}>July 2023 Ravensburger Roppenheim</p>
                                <p>I worked for one month as a Salesman Animator at Ravensburger, where my responsibilities included managing inventory, ensuring shelves were consistently replenished, and driving product sales. I also provided personalized customer advice, helping clients choose the right products based on their needs and preferences. My role required strong communication skills and a keen understanding of the products to effectively engage with customers and enhance their shopping experience.</p>
                            </div>
                        </motion.div>)}                        
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>
                        <div className='experiences-empty'></div>
                    </div>
                    <div className='experiences-items'>
                        <div className='experiences-empty'></div>
                    
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>

                            <motion.div transition = {{duration:1, type:"spring"}} 
                                        layout="position" 
                                        onClick={()=> onHandleClick('2.3')} 
                                        className='experiences-item'
                                        >
                                <motion.h4 layout>Sidel HMI Intern</motion.h4>
                            </motion.div>
                            {isOpen=='2.3' && (
                            <motion.div className="experiences-expand" 
                                        onClick={()=> onHandleClick('2.3')} 
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{duration:1}}
                                        >
                                <h2 className='experiences-item-title'>Sidel HMI Intern</h2>
                                <div className='experiences-item-title-bar'></div>
                                <div className="experiences-item-text">
                                    <p style={{opacity:0.6, fontWeight: "bold"}}>January 2023 Strasbourg</p>
                                    <p>As part of my studies at Mines de Saint-Étienne in the ISMIN program (Engineering with a focus on Microelectronics and Computer Science), I had the opportunity to complete a one-month internship. In January, I had the privilege of undertaking this internship at Sidel (Société industrielle des emballages légers) in Reichstett, under the guidance of Mr. LINGER, an HMI engineer.</p>
                                    <p>Sidel is a major player in packaging line engineering, offering equipment and services for the packaging of liquids, food products, cleaning supplies, and personal care items</p>
                                    <p>My three missions were:</p>
                                    <ul>
                                        <li>Implementation of a Notepad allowing written communication between the support and the HMI user</li>
                                        <li>Patching hardening on test bench</li>
                                        <li>Development of a demo version of the HMI for customer presentation</li>
                                    </ul>
                                </div>
                            </motion.div>)}                        
                    </div>
                </div>}
            </div>
        </div>
        </>
        )
}

export default Experiences
