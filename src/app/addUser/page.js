'use client'

import { useState } from "react"

export default function page() {
  const [name , setName] = useState("");
  const [age , setAge] = useState("");
  const [email , setEmail] = useState("");

  const handleAddUser= async() =>{
    let response = await fetch('http://localhost:3000/api/users',{
      method: "Post",
      body:JSON.stringify({name,age,email})
    });
    response = await response.json()
    if(response.success){
      alert('User Added SuccessFully');
    }else{
      alert('Input Fields Is Required ')
    }
    console.log(response)
  }

  return (
    <div className="add-user">
      <h2>Add User</h2>
      <input type="text"className="input-field" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
      <input type="number" className="input-field" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" />
      <input type="text" className="input-field" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
      <button onClick={handleAddUser} className="btn">Add User</button>
    </div>
  )
}
