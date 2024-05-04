import React, { act } from 'react'
import './Portfolio.css'
import P_Item from './P_Item'
import foule from '../../img/foule.png'
import { useState } from 'react';


const Portfolio = () => {
    // const [isPython, setPython]=useState(false); 
    // const [isC, setC]=useState(false); 
    const [actual, setActual] = useState('All')

  return (
    <div className='portfolio-global-container'>
        <div className='portfolio'>
            <div className='portfolio-title'>Portfolio</div>
            <div className='portfolio-bar'></div>
            <div className='portfolio-category'>
                <div onClick={()=>setActual('All')} className='portfolio-category-item'>All</div>
                <div onClick={()=>setActual('Web')} className='portfolio-category-item'>Web</div>
                <div onClick={()=>setActual('Python')} className='portfolio-category-item'>Python</div>
                <div onClick={()=>setActual('C')} className='portfolio-category-item'>C-C++</div>
            </div>
            {(actual=='All') && <div className='portfolio-items'>
                <P_Item image={foule} title="jh zfiofa heziafo " text="hfkoeza fheoz afheiza fheuzaio fhezuai fheizu ahfeuzi afhgezuia fhgeuoizagf uie zafgeuizagfueiza gfueiza gfuezai fgeuizaf gjsklf bcnjdsakvgdzahjk"></P_Item>
                <P_Item image={foule} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
                <P_Item image={foule}></P_Item>
                <P_Item image={foule}></P_Item>
                <P_Item image={foule}></P_Item>
                <P_Item image={foule}></P_Item>
                <P_Item image={foule}></P_Item>
            </div>}
            {(actual=='Web') && <div className='portfolio-items'>
                <P_Item image={foule} title="jh zfiofa heziafo " text="hfkoeza fheoz afheiza fheuzaio fhezuai fheizu ahfeuzi afhgezuia fhgeuoizagf uie zafgeuizagfueiza gfueiza gfuezai fgeuizaf gjsklf bcnjdsakvgdzahjk"></P_Item>
                <P_Item image={foule} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
                <P_Item image={foule}></P_Item>
                <P_Item image={foule}></P_Item>
                
            </div>}
            {(actual=='Python') && <div className='portfolio-items'>
                
                <P_Item image={foule} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
                <P_Item image={foule}></P_Item>
                <P_Item image={foule}></P_Item>
                <P_Item image={foule}></P_Item>
            </div>}
            {(actual=='C') && <div className='portfolio-items'>
                <P_Item image={foule} title="jh zfiofa heziafo " text="hfkoeza fheoz afheiza fheuzaio fhezuai fheizu ahfeuzi afhgezuia fhgeuoizagf uie zafgeuizagfueiza gfueiza gfuezai fgeuizaf gjsklf bcnjdsakvgdzahjk"></P_Item>
                <P_Item image={foule} title="Melisml" text="hfjk fhezjkaf hezaf hezafio hezaoif ehzauif ehzaf ghezajhfgzah fgyuia fgezyua fgyuezai fgezayufi egazyuf iegzayufi gezayui"></P_Item>
            </div>}
        </div>

    </div>
  )
}

export default Portfolio