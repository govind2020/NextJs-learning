import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    <>
    <h1>You Can Fetch the Data in Product page in Client Component</h1>
    <Link href="/productlist" >Go to ProductList Page</Link>
    </>
  )
}

export default Home