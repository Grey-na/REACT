import React, { useState } from 'react'

function R1() {
    let [age,setAge]=useState(0)
    let [abc,setAbc]= useState(['cat','dog'])
  return (
    <div>
      <h2>This is demo {age}</h2>
      <button onClick={()=>setAge(40)}>Add age</button>
      <h2>{abc[0]}</h2>
    </div>
  )
}

export default R1
