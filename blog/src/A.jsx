import React, { useEffect, useState } from 'react'

 function A() {
  let [data,setData]=useState([])
  useEffect(()=>{
    async function fetchData()
  {
  
    try{
        let a= await fetch("https://fakestoreapi.com/products")
        let b= await a.json()
        setData(b)
    }
    catch(err)
    {
        console.log(err)
    }
  }
  fetchData()
},[])
console.log(data)
  return (
    <div>
      {data.map(a=><li key={a.id}>{a.title}</li>)}
      
    </div>
  )
}

export default A
