import { useState } from 'react'

import './App.css'

function App() {

 let [counter,setCounter]= useState(15)


const addValue=()=>{
 
  // counter=counter+1

  if(counter<22){
    setCounter(counter+1)
  }
}
const removeValue=()=>{
  if(counter>0){
    setCounter(counter-1)
  }
 
}
  return (
   <>
    <h1>Chai aur react</h1>
    <h3>Counter value: {counter}</h3>

     <button onClick={addValue}>
      Add value:{counter}</button>
     <br/>
     <button onClick={removeValue}>Remove value:{counter}</button>
     <p>footer:{counter}</p>
   </>
  )
}

export default App
