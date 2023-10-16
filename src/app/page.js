'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {useRouter} from 'next/navigation'

export default function Home() {
  // const [name , setName] = useState('Govind')
  // const handleClick = () =>{
  //   setName("govind Lowanshi")
  // }

  const router = useRouter();

  const navigate=(name)=>{
    console.log("name" , name)
    router.push(name)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* seniding the data to another component  */}
      {/* <User name="Govind" />
      <User last="lowanshi" /> */}
      <h1>Home Pages | Basic Routing for Next Js</h1> 
      <h2>Linking</h2>
      <div>
      <Link href='/login'>Go to Login Page</Link>
      </div>
      <br></br>
      <div>
      <Link href='/about'>Go to About Page</Link>
      </div>
      <h2>Navigation</h2>
      <div>
        <button onClick={()=>{navigate("/login")}} >Go to Login Page</button>
      </div>
      <br></br>
      <div>
        <button onClick={()=>{navigate("/about")}}>Go to About Page</button>
      </div>
      {/* <h1>Event , Function and State {name}</h1> */}
      
      {/* <button onClick={()=> alert("hello next js")} >Click Me</button> */}
      {/* <button onClick={()=>handleClick()} >Click For Update</button> */}
    </main>
  )
}


// const User = (props) =>{
//   return (
//     <div>
//       <h1>My name is {props.name} and my last name is {props.last}</h1>
//     </div>
//   )
// }
