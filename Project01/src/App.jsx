import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if (counter < 25)
    setCounter(counter+1)
    else
      counter = 25
  }

  const removeValue = () => {
    if (counter > 0)
      setCounter(counter-1)
    else
      counter = 0
  }
  
  const resetValue =() => {
    setCounter(counter=15)
  }

  return (
    <div className="min-h-screen w-full flex flex-wrap flex-col justify-center bg-gradient-to-r from-violet-700 to to-fuchsia-900 ">
      <div className="flex flex-wrap items-center justify-center text-center ">
        <h1 className="text-5xl font-bold text-blue-400">Chai aur React</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center text-center mt-4 mb-8 ">
        <h1 className="text-7xl font-bold text-yellow-600 border-b-4 border-yellow-600">Number counter</h1>
      </div>
      <div className="flex flex-wrap flex-col items-center justify-center my-4 gap-4">
        <div className="flex flex-wrap items-center justify-center text-center">
          <h2 className="text-white font-semibold text-2xl">Counter Value: {counter}</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center text-center gap-2">
          <button className="text-lg font-semibold text-blue-700 px-4 border-2 border-blue-800 rounded-md bg-blue-300 hover:bg-blue-700 hover:text-white" onClick={addValue}> add value </button>
          <button className="text-lg font-semibold text-red-700 px-4 border-2 border-red-800 rounded-md bg-red-300 hover:bg-red-700 hover:text-white " onClick={removeValue}> remove value </button>
        </div>
        <button className="text-lg font-semibold text-black px-4 border-2 border-white rounded-md bg-white hover:bg-gray-600 hover:text-white hover:border-gray-600 " onClick={resetValue}> reset value </button>
      </div>
    </div>
  )
}

export default App
