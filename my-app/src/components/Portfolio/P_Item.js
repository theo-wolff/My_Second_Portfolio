import React from 'react'
import './Portfolio.css'
import more from '../../img/add.png'

const P_Item = (props) => {
  const languages = props.languages;
  return (
    <div className='portfolio-item'>
        <img className="portfolio-item-img" src={props.image} alt="modelism"></img>
        <div className='portfolio-item-text'>
            <p className='portfolio-item-text-title'>{props.title}</p>
            <p>{props.text}</p>
        </div>
        <div className='portfolio-item-more'>
          <div className='portfolio-item-more-text-container'>
            {languages.map((link,index)=>(
              <div className='portfolio-item-more-text-item' key={index}>{link}</div>))}
          </div>
          {/* <a onClick={props.onHandleClick}><img src={more} className='portfolio-item-more-img'></img></a> */}
        </div>
    </div>
  )
}

export default P_Item