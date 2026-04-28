import React, { useState } from 'react'

function K() {
    let [name,setName]=useState()
    let [age,setAge]=useState(0)
  return (
    <div>
      <h2>My name is {name} and I am {age} years old</h2>
      <button onClick={()=>{setName("Suhana");setAge(20)}}>Name&Age</button>
    
    </div>
  )
}

export default K
