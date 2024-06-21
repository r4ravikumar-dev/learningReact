import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if (counter < 25)
    setCounter(counter+1)
    else {
      counter = 25
      alert("The value of the counter can't be more than 25");
    } 
  }

  const removeValue = () => {
    if (counter > 0)
      setCounter(counter-1)
    else{
      counter = 0
      alert("The value of the counter can't be negative");
    }  
  }
  
  const resetValue =() => {
    setCounter(counter=15)
  }

  return (
    <div className="min-h-screen w-full flex flex-wrap flex-col justify-center bg-gradient-to-r from-violet-700 to to-fuchsia-900 ">
      <div className="flex flex-wrap items-center justify-center text-center ">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-300 to-indigo-500 inline-block text-transparent bg-clip-text">Chai aur React</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center text-center mt-4 mb-8 ">
        <h1 className="text-6xl font-bold text-yellow-400 border-b-4 border-yellow-500">Number counter</h1>
      </div>
      <div className="flex flex-wrap flex-col items-center justify-center my-4 gap-4">
        <div className="flex flex-wrap flex-col items-center justify-center text-center">
          <h2 className="text-white font-semibold text-2xl mb-4">Counter Value:</h2>
          <h1 className="text-red-600 font-bold text-6xl  p-4 border-4 rounded-2xl border-red-600">{counter}</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center text-center gap-2 mt-16">
          <button className="text-lg font-semibold text-blue-700 px-4 border-2 border-blue-800 rounded-md bg-blue-300 hover:bg-blue-700 hover:text-white" onClick={addValue}> add value </button>
          <button className="text-lg font-semibold text-red-700 px-4 border-2 border-red-800 rounded-md bg-red-300 hover:bg-red-700 hover:text-white " onClick={removeValue}> remove value </button>
        </div>
        <button className="text-lg font-semibold text-black px-4 border-2 border-white rounded-md bg-white hover:bg-gray-600 hover:text-white hover:border-gray-600 " onClick={resetValue}> reset value </button>
      </div>
    </div>
  )
}

export default App
