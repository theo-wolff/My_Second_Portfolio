import React, { act } from 'react'
import './Portfolio.css'
import P_Item from './P_Item'
import foule from '../../img/foule.png'
import portfolio from '../../img/portfolio.jpg'
import Predictive from '../../img/predictive.jpg'
import pcsn from '../../img/pcsn.jpg'
import opti  from '../../img/opti.jpg'
import proto  from '../../img/proto.jpg'
import pentesting  from '../../img/pentesting.jpg'
import perty from '../../img/perty.jpg'
import { useState } from 'react';
// import P_Item_Expand from './P_Item_Expand';
import { motion } from 'framer-motion';
import { hover } from '@testing-library/user-event/dist/hover'


const Portfolio = () => {
    // const [isPython, setPython]=useState(false); 
    // const [isC, setC]=useState(false); 
    const [current, setCurrent] = useState('All');
    const [isOpen, setIsOpen] = useState('');
    const [isClosed, setIsClosed]=useState(false);
    const [isHoveredAll, setIsHoveredAll] = useState(false);
    const [isHoveredWeb, setIsHoveredWeb] = useState(false);
    const [isHoveredPython, setIsHoveredPython] = useState(false);
    const [isHoveredC, setIsHoveredC] = useState(false);

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

    //IDEE 
    // carte qui se swap 

  return (
    <div className='portfolio-global-container'>
        <div className='portfolio'>
            <div className='portfolio-title'>Portfolio</div>
            <div className='portfolio-bar'></div>
            <div className='portfolio-category'>
                <div onClick={()=>setCurrent('All')} className='portfolio-category-item' style={{opacity: isHoveredAll ? 0.5 : current === 'All' ? 0.5 : 1, transition: 'opacity 0.3s',}} onMouseEnter={() => setIsHoveredAll(true)} onMouseLeave={() => setIsHoveredAll(false)}>All</div>
                <div onClick={()=>setCurrent('Web')} className='portfolio-category-item' style={{opacity: isHoveredWeb ? 0.5 : current=='Web'? 0.5 : 1}} onMouseEnter={() => setIsHoveredWeb(true)} onMouseLeave={() => setIsHoveredWeb(false)}>Web</div>
                <div onClick={()=>setCurrent('Python')} className='portfolio-category-item' style={{opacity: isHoveredPython ? 0.5 : current=='Python'? 0.5 : 1}} onMouseEnter={() => setIsHoveredPython(true)} onMouseLeave={() => setIsHoveredPython(false)} >Python</div>
                <div onClick={()=>setCurrent('C')} className='portfolio-category-item' style={{opacity: isHoveredC ? 0.5 : current=='C'? 0.5 : 1}} onMouseEnter={() => setIsHoveredC(true)} onMouseLeave={() => setIsHoveredC(false)}>C</div>
            </div>
            <div className='portfolio-items'>
                {(current=='All' || current=='Web') && <P_Item image={portfolio} languages={['React']} title="Portfolio" text="I created my first portfolio to familiarize myself with HTML, CSS, and JavaScript. After completing my internship at ASML, I was able to build a second portfolio using React, applying the knowledge and skills I developed during this experience."></P_Item>}
                {(current=='All' || current=='Web') && <P_Item image={perty} languages={['React', 'C#']} title="PERTY" text="During my internship at ASML, I developed an application that generates PERT diagrams with integrated Jira connectivity. This tool streamlines project management by visually representing tasks and timelines while staying connected to Jira for real-time updates and task tracking."></P_Item>}
                {(current=='All' || current=='Python') && <P_Item image={foule} languages={['Python']} title="Supervised self-initiative work" text="Modelling crowd movements during public buildings evacuation. Python modelling of a room evacuation with obstacles and visualisation of the room with a graphical interface (Tkinter)."></P_Item>}
                {(current=='All' || current=='SystemVerilog') && <P_Item image={pcsn} languages={['SystemVerilog']} title="PCSN" text="PCSN stands for digital system design project. We implemented the ASCON128 cryptographic algorithm using SystemVerilog."></P_Item>}
                {(current=='All' || current=='C') && <P_Item image={opti} languages={['C']} title="Challenge-Optimisation" text="The optimisation challenge was to place surveillance points in specific locations in order to cover as many targets as possible while avoiding obstacles. This takes place on a 2D grid. The objective was to minimise the number of surveillance points by finding the exact locations."></P_Item>}
                {(current=='All' || current=='Python') && <P_Item image={proto} languages={['Python']} title="Projet-Proto" text="This application measures soil dryness using a microcontroller and capacitive sensors. The data is transmitted via a serial connection. The application used to display data was designed with Tkinter."></P_Item>}
                {(current=='All' || current=='Python') && <P_Item image={pentesting} languages={['Python']} title="PyFlaSql" text="Pen testing assesses an organization's ability to protect its systems from unauthorized access. PyFlaSql is a website used to develop custom pentesting tools."></P_Item>}
                {(current=='All' || current=='C') && <P_Item image={Predictive} languages={['C']} title="Prediction text" text="The project focuses on predictive text input. The goal is to enter a series of characters, and the program suggests n words starting with that series from a certain dictionary. The dictionary updates with each search, and users can add, edit, or delete words from it."></P_Item>}
                
            
            
            </div>
            {/* // {(current=='Web') && <div className='portfolio-items'>
            //     <P_Item image={foule} languages={['HTML','CSS','JS']} title="jh zfiofa heziafo " text="hfkoezabfhjsdf gdzsha f gd hs fgdshqj fgdshqj fgdshqj fgdshqj fgdsqhjofzeatuyifodshqfj dkqfgchdsqjuo  fheoz afheiza fheuzaio fhezuai fheizu ahfeuzi afhgezuia fhgeuoizagf uie zafgeuizagfueiza gfueiza gfuezai fgeuizaf gjsklf bcnjdsakvgdzahjk"></P_Item>
            //     <P_Item image={foule} languages={['HTML']} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
            // </div>}
            // {(current=='Python') && <div className='portfolio-items'>
            //     <P_Item image={foule} languages={['Python']} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
            // </div>} */}
            {/* {(current=='Web') && <div className='portfolio-items'>
                <P_Item image={foule} title="jh zfiofa heziafo " text="hfkoeza fheoz afheiza fheuzaio fhezuai fheizu ahfeuzi afhgezuia fhgeuoizagf uie zafgeuizagfueiza gfueiza gfuezai fgeuizaf gjsklf bcnjdsakvgdzahjk"></P_Item>
                <P_Item image={foule} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
                <P_Item image={foule}></P_Item>
                <P_Item image={foule}></P_Item>
                
            </div>}
            {(current=='Python') && <div className='portfolio-items'>
                
                <P_Item image={foule} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
                <P_Item image={foule}></P_Item>
                <P_Item image={foule}></P_Item>
                <P_Item image={foule}></P_Item>
            </div>}
            {(current=='C') && <div className='portfolio-items'>
                <P_Item image={foule} title="jh zfiofa heziafo " text="hfkoeza fheoz afheiza fheuzaio fhezuai fheizu ahfeuzi afhgezuia fhgeuoizagf uie zafgeuizagfueiza gfueiza gfuezai fgeuizaf gjsklf bcnjdsakvgdzahjk"></P_Item>
                <P_Item image={foule} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
            </div>} */}
        </div>

    </div>
  )
}

export default Portfolio