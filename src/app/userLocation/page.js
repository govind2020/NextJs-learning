'use client'
import Script from 'next/script'

function UserLocation() {
  return (
    <div>
        <Script
        src='/location.js'
        onLoad={()=>{
            console.log("file loaded!")
        }}
        />
        <h1>Get Geo Location</h1>
    </div>
  )
}

export default UserLocation