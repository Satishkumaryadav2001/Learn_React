import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj={
  userName:"Satish",
  age:22
}

let newArr=[1,2,3,4,5,6,7,8,9]
  return (
   <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS Test</h1>
  <Card username="Chain Aur Code" btnText="Click me"/>
   </>
   
  )
}

export default App
