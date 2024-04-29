 import { useState } from 'react'


function App() {
  const [color, setColor] = useState("blue")
  return (
    <>
    <div className='min-w-full min-h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-gray-600 shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "gray"}}>Gray</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
