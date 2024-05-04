import React from 'react'
import './Portfolio.css'

const P_Item = (props) => {
  return (
    <div className='portfolio-item'>
        <img className="portfolio-item-img" src={props.image} alt="modelism"></img>
        <div className='portfolio-item-text'>
            <p className='portfolio-item-text-title'>{props.title}</p>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default P_Item