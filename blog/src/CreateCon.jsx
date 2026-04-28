import React from 'react'
import { createContext } from 'react'
import UseCon from './UseCon'
export let age= createContext()
function CreateCon() {
  
  return (
    <div>
      <h2>Provider</h2>
      <age.Provider value="20">
        <UseCon/>
      </age.Provider>
    </div>
  )
}

export default CreateCon
