import React, { useContext } from 'react'
import { status } from './I'

function J() {
    let data=useContext(status)
  return (
    <div>
        {data? "Logout" : "Login"}
      {data} 
    </div>
  )
}

export default J
