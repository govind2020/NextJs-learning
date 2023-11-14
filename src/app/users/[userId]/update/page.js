'use client'

import { useEffect, useState } from "react";

const page = ({params}) => {
  const id = params.userId
  console.log(id);

  const [name , setName] = useState("");
  const [age , setAge] = useState("");
  const [email , setEmail] = useState("");

  useEffect(()=>{
    getUserDetails()
  },[])

  const updateUser = async() =>{
    let result =await fetch(`http://localhost:3000/api/users/${id}` ,{
      method: 'PUT',
      body:JSON.stringify({name,age,email})

    });
    result = await result.json()
    console.log(result)
    if(result.success){
      alert("User Information is Successfully update");
    }
    else{
      alert('Invalid Input');
    }
  }

  const getUserDetails= async()=>{
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  }

  return (
    <div>
      <h2>Update User Details</h2>
      <input type="text"className="input-field" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
      <input type="number" className="input-field" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" />
      <input type="text" className="input-field" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
      <button onClick={updateUser} className="btn">Update User</button>
    </div>
  )
}

export default page