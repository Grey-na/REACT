import React, { useEffect, useState } from 'react'

function Scroll() {
    let [scroll,setScroll]=useState(false)
    useEffect(()=>
    {
        const handleScroll=()=>{
            if(window.scrollY>100)
                setScroll(true)
            else
                setScroll(false)
        }
        window.addEventListener('scroll',handleScroll)
    },[])
    return (
    <div>
      <h1 className={scroll? 'text-amber-300 fixed':'text-red-700 ' }>Hello</h1>
    </div>
  )
}

export default Scroll
