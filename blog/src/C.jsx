import React, { useState } from 'react'

function C() {
    let[active,setActive]=useState(true)
  return (
    <div className=' flex item-center justify-center'>
      <h1 className={active?'show':'hidden'}>Demo</h1>
      <button onClick={()=>setActive(!active)} className='border-2 bg-amber-600 '>{active?'Hide':'Show'}</button>
    </div>
  )
}

export default C
