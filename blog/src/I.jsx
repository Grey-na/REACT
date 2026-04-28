import React, { createContext, useState } from 'react'
import J from './J'
export let status=createContext()
function I() {
    let [mode, setMode]=useState(true)
  return (
    <div>
      <button onClick={()=>setMode(!mode)}>Status</button>
      <status.Provider value={mode}>
        <J/>
      </status.Provider>
    </div>
  )
}

export default I
