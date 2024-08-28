import React, { act } from 'react'
import './Portfolio.css'
import P_Item from './P_Item'
import foule from '../../img/foule.png'
import { useState } from 'react';
// import P_Item_Expand from './P_Item_Expand';
import { motion } from 'framer-motion';


const Portfolio = () => {
    // const [isPython, setPython]=useState(false); 
    // const [isC, setC]=useState(false); 
    const [current, setCurrent] = useState('All');
    const [isOpen, setIsOpen] = useState('');
    const [isClosed, setIsClosed]=useState(false);

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
                <div onClick={()=>setCurrent('All')} className='portfolio-category-item' style={{opacity: current=='All'? 0.5 : 1}} >All</div>
                <div onClick={()=>setCurrent('Web')} className='portfolio-category-item' style={{opacity: current=='Web'? 0.5 : 1}}>Web</div>
                <div onClick={()=>setCurrent('Python')} className='portfolio-category-item' style={{opacity: current=='Python'? 0.5 : 1}}>Python</div>
                <div onClick={()=>setCurrent('C')} className='portfolio-category-item' style={{opacity: current=='C'? 0.5 : 1}}>C</div>
            </div>
            {(current=='All') && <div className='portfolio-items'>
                <P_Item image={foule} languages={['HTML','CSS','JS']} title="jh zfiofa heziafo " text="hfkoezabfhjsdf gdzsha f gd hs fgdshqj fgdshqj fgdshqj fgdshqj fgdsqhjofzeatuyifodshqfj dkqfgchdsqjuo  fheoz afheiza fheuzaio fhezuai fheizu ahfeuzi afhgezuia fhgeuoizagf uie zafgeuizagfueiza gfueiza gfuezai fgeuizaf gjsklf bcnjdsakvgdzahjk"></P_Item>
                <P_Item image={foule} languages={['HTML']} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
                <P_Item image={foule} languages={['Python']} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
            </div>}
            {(current=='Web') && <div className='portfolio-items'>
                <P_Item image={foule} languages={['HTML','CSS','JS']} title="jh zfiofa heziafo " text="hfkoezabfhjsdf gdzsha f gd hs fgdshqj fgdshqj fgdshqj fgdshqj fgdsqhjofzeatuyifodshqfj dkqfgchdsqjuo  fheoz afheiza fheuzaio fhezuai fheizu ahfeuzi afhgezuia fhgeuoizagf uie zafgeuizagfueiza gfueiza gfuezai fgeuizaf gjsklf bcnjdsakvgdzahjk"></P_Item>
                <P_Item image={foule} languages={['HTML']} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
            </div>}
            {(current=='Python') && <div className='portfolio-items'>
                <P_Item image={foule} languages={['Python']} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
            </div>}
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