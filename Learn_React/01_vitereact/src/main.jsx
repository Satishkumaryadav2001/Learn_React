import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App ! chai</h1>
    </div>
  )
}
// const ReactElement ={
//   type:'a',
//   props:{
//       herf:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }
const otherUser="chai aur react"
const reactElement=React.createElement(
  'a',
  {herf:'https://google.com',target:'_black'},
  'click me to visit google',
  otherUser
)
const anotherElement=(
  <a herf="https://google.com" target='_blank'>visit google</a>

)
ReactDOM.createRoot(document.getElementById('root')).render(
  // anotherElement
  reactElement
  // <MyApp />
// MyApp()
// <App/> 
)