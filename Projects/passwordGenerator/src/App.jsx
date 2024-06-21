import { useState, useCallback, useEffect, useRef } from "react"


function App() {
  const [length, setLenght] = useState(10);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*_+=-<>?:;,./|`"

    for (let i = 1; i <= length ; i++) {
      let char= Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, numberAllowed, charAllowed, setpassword])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,64);
    window.navigator.clipboard.writeText(password)}, [password])

  return (
    <>
      <div className=" min-h-screen w-full flex flex-wrap flex-col justify-center items-center">
        <div className="flex flex-col w-full sm:w-1/2 item center justify-center bg-cover rounded-xl overflow-hidden" style={{backgroundImage: `url('/image.png')`}}>
        <div className="max-w-md mx-auto mt-8">
        <h1 className="text-4xl item-center font-bold font-mono text-white bg-blue-600 rounded-xl px-6 py-2 cursor-pointer ">
          Password Generator_
        </h1>
        </div>
        <div className="w-full max-w-md mx-auto border-2 border-blue-200 shadow-md rounded-lg px-4 mb-16 mt-8 text-orange-500 bg-gray-200">
          <h1 className="text-center text-xl font-semibold text-green-600 mt-2 cursor-pointer ">
            Your generated password is:
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mt-4 mb-6">
            <input type="text" 
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
               />
            <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-600 text-white px-4 py-1 shrink-0">
              copy
              </button>
          </div>
          <div className="flex justify-between text-sm font-medium text-red-600 gap-x-2 mb-8">
            <div className="flex items-center gap-x-1">
              <input type="range"
              min={8}
              max={64}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {setLenght(e.target.value)}} />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1 mx-2">
              <input type="checkbox" 
              defaultChecked = {numberAllowed}
              id = "numberInput"
              onChange={()=> {
                setnumberAllowed((prev)=>!prev);
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
              <div className="flex items-center gap-x-1 ml-4">
                <input type="checkbox"
                defaultChecked = {charAllowed}
                id="characterInput"
                onChange={()=> {
                  setcharAllowed((prev)=>!prev);
                }} 
                />
                <label 
                htmlFor="characterInput">Characters</label>
              </div>
            </div>
          </div>
          <div className="text-center text-[14px] mb-4">
            made with &#9829; by &nbsp;
            <a href="http://github.com/r4ravikumar-dev" className="text-gray-400 border-b-2 border-gray-400">Ravi Kumar</a>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
