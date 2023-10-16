'use client'
import React from 'react'

function Student({params}) {
  return (
    <div>
        <h1>Student Page </h1>
        <h4>Name: {params.student}</h4>
    </div>
  )
}

export default Student