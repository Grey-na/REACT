import React, { useContext } from 'react'
import { age } from './CreateCon'

function UseCon() {
    let data=useContext(age)
  return (
    <div>
        <h2>User</h2>
        {data}
      
    </div>
  )
}

export default UseCon
