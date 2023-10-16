import Link from 'next/link'
import React from 'react'

function aboutTeacher() {
  return (
    <div>
        <h1 className='heading'>About Teacher</h1>
        <div>
            <Link className='heading' href='/about' >
                Back To About Menu --= this is used for condition layout
            </Link>
        </div>
    </div>
  )
}

export default aboutTeacher