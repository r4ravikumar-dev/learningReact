import React from "react";
import { Carousel } from "./components/Carousel";
import slides from "./data/carosulData.json";
import Image from "./Image.jsx";
function App() {
  const data = slides.slides
  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-700 to to-slate-900 border-b-4 border-red-500">
      <div className="flex flex-wrap items-center justify-center text-center m-8">
      <h1 className="text-5xl font-bold text-blue-400 border-b-4 border-blue-400">
        random image caurosel
      </h1>
      </div>
      <Carousel data={data} autoSlide= {true} classname="h-[400px]" />
      <div className="flex flex-wrap items-center justify-center text-center m-8">
        <p className="text-xl font-semibold text-white">
          This carousel consisit of 5 random images, every time you refresh the page you will have different random image 
        </p>
      </div>
    </div>
    <Image/>
    </>
  );
}
export default App;


