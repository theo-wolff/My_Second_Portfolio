import React, { useEffect, useRef } from 'react'
import "./Cursor.css"
import { m } from 'framer-motion'

const Cursor = () => {

    
    const myRef = useRef(document)

    useEffect(()=>{
        let innerCursor = document.querySelector(".inner-cursor")
        let outerCursor = document.querySelector(".outer-cursor")

        const moveCursor =  (e) =>{
            let x = e.clientX
            let y = e.clientY
    
            innerCursor.style.left = `${x}px`
            innerCursor.style.top = `${y}px`
            outerCursor.style.left = `${x}px`
            outerCursor.style.top = `${y}px`
            console.log('hey')
        }


        myRef.current.addEventListener('mousemove', moveCursor)

        return ()=>{
            myRef.current.removeEventListener('mousemove', moveCursor)
        }
    }, [])


  return (
    <>
    <div className='inner-cursor'></div>
    <div className='outer-cursor'></div>
    </>

  )
}

export default Cursor