'use client'
import React, { useState } from 'react'
import conditionalStyling from './custom.module.css'

function Home() {
  const {orange} = conditionalStyling
  const [headingColor, setHeadingColor] = useState('red')
  return (
    <>
    <h1 className={headingColor=='red'?conditionalStyling.red:conditionalStyling.green} >Conditional Styling!</h1>
    <p className={orange} >Dummy Text for style</p>
    <button onClick={()=>setHeadingColor('green')} >Update Color</button>
    </>
  )
}

export default Home