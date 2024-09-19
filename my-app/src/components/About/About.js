import React from 'react'
import "./About.css"
import bitmoji from "../../img/bitmoji.png"
import chesspiece from "../../img/chess-piece.png"
import computer from "../../img/computer.svg"
import cvFile from "../../img/cv-file.svg"
import cv_WT from "../../img/CV_Theo_Wolff.pdf"


const About = () => {
  return (
    <>
    <div className='about'>
      <h2 className='title-about'>About me</h2>
      <div className='about-bar'></div>
      <div className='container' data-aos="fade-up">
        <img className='img-bitmoji' src={bitmoji}></img>
        <ul className='about-items'>
          <li className='about-item'>
            <img className="about-img" src={computer}></img>
            <p>I am an engineering student with a keen interest in computer science. 
            I'm passionate about programming and aspire to specialize in software development.
            My aim is to contribute to innovative tech projects and further enhance my skills in this field.</p>
          </li>
          <li className='about-item'>
          <img className="about-img" src={chesspiece}></img>
            <p>I really like running, traveling, and playing chess. Running gives me clarity and strength, travel opens my mind to new horizons, and chess sharpens my strategic thinking</p>
          </li>
          <li className='about-item-cv'>
            <a href={cv_WT} target='_blank'>
              <div class="button">
                <div class="button-wrapper">
                  <div class="text">Download</div>
                  <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                  </span>
                </div>
              </div>
            </a>
            {/* <a href={cv_WT} target='_blank'><img className="about-img" src={cvFile}></img></a> */}
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default About