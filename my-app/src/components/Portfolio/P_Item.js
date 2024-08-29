import React, { useEffect, useRef, useState } from 'react'
import './Portfolio.css'
import more from '../../img/add.png'

const P_Item = (props) => {
  const languages = props.languages
  const [maxHeight, setMaxHeight] = useState(0);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const height1 = ref1.current.offsetHeight;
    console.log(height1)
    const height2 = ref2.current.offsetHeight;
    setMaxHeight(Math.max(height1, height2));
  });

    return (
    <div className='portfolio-item' data-aos="flip-left">
      <div className='portfolio-item-inner'>
        <div className='portfolio-item-front' ref={ref1}>
          <img className="portfolio-item-img" src={props.image} alt="modelism"></img>
          <p className='portfolio-item-text-title'>{props.title}</p>
          <div className='portfolio-item-more'>
            <div className='portfolio-item-more-text-container'>
              {languages.map((link,index)=>(
                <div className='portfolio-item-more-text-item' key={index}>{link}</div>))}
            </div>
          </div>
        </div>
        <div className='portfolio-item-back' >
          <div className='portfolio-item-text' ref={ref2}>
              <p>{props.text}</p>
          </div>
        </div>
        {/* <div className='portfolio-item-text'>
            <p className='portfolio-item-text-title'>{props.title}</p>
            <p>{props.text}</p>
        </div> */}
        {/* <div className='portfolio-item-more'>
          <div className='portfolio-item-more-text-container'>
            {languages.map((link,index)=>(
              <div className='portfolio-item-more-text-item' key={index}>{link}</div>))}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default P_Item