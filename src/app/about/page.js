import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
    <h1 className='heading'>About me Basic Routing</h1>
    <br></br>
    <Link href='/'>Go to Home Page</Link>
    <br></br>
    <Link href='/about/aboutcollage'>Go to About Collage Page</Link>
    <br></br>
    <Link href='/about/aboutstudent'>Go to About Student Page</Link>

    </>
  )
}

export default About