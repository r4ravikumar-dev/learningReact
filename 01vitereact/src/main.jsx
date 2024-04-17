import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>custom chai</h1>
    </div>
  )
}



const anotherElement =(
  <a href="https://reactjs.org" target="_blank">Click me to visit this page</a>
)

const ractElement = React.createElement(
  'a',
  { href: 'https://reactjs.org', target: '_blank' },
  'Click me to visit this page' 
) // this is the strucute how react compiled


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App />
    <MyApp />
    anotherElement
    reactElement
    </>
  </React.StrictMode>,
)
