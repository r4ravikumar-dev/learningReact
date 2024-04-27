import React from "react";
import { Carousel } from "./components/Carousel";
import image from "./data/image.json";

function Image() {
    const data = image.image
    return (
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-700 to to-slate-900">
        <div className="flex flex-wrap items-center justify-center text-center mt-12">
        <h1 className="text-4xl font-bold text-blue-400 border-b-2 border-blue-400">
          component reusebility test
        </h1>
        </div>
        <div className="h-min-screen mt-4">
          <Carousel data={data} autoSlide= {true} classname={'h-[400px] w-[600px]'} />
        </div>
        <div className="flex flex-wrap items-center justify-center text-center m-8">
          <p className="text-xl font-semibold text-white">
            Here I tested the reusebility of the component in the React 
          </p>
        </div>

      </div>
    );
  }
  export default Image;