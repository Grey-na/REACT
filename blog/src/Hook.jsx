import React, { useState } from 'react'

function Hook() {
    let [count, setCount]=useState(0)
    let [arr, setArr]= useState(["Suhana","Angel","Bishnu"])
    let[obj, setObj]=useState({name:"Suhana" ,age:20})
    let abc=()=>{
        setCount(count - 1)
    }
    let f=()=>{
        if(count<arr.length-1)
            setCount(count + 1)
    }
    let de=()=>{
        if(count>0)
            setCount(count - 1)
    }
  return (
    <div>
      
      {arr[count]}
      <button onClick={f} >Next</button>
      <button onClick={de}>Previous</button>
      <p>{obj.name}</p>
      <p>{obj.age}</p>
    </div>
  )
}

export default Hook
