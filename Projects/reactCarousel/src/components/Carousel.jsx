import React, { useEffect } from 'react'
import { useState } from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

export const Carousel = ({data, autoSlide=false, autoSlideInterval=3000, classname}) => {
  const [slide, setslide] = useState(0);

  const nextSlide = () => {
    setslide(slide===data.length -1 ? 0 : slide + 1)
  };


  const prevSlide = () => {
    setslide(slide === 0 ? data.length -1:  slide - 1)
  }; 

  useEffect(()=>{
    if(!autoSlide) 
    return
    const interval = setInterval(nextSlide, autoSlideInterval)
    return () => {
      clearInterval(interval)
    }
  })
  return (
      <div className={`relative transition-transform ease-out duration-500`} style={{transform: `translateX (-${slide*100}%)`}}>
        <div className={`flex flex-row justify-center items-center`}>
          <BsArrowLeftCircleFill className='absolute w-[2rem] h-[2rem] fill-white left-[1rem] hover:cursor-pointer' onClick={prevSlide} />
          { data.map((item, idx) => (                         
              <img src={item.src} alt={item.alt} key= {idx} height={1600} width={1400} className={`rounded-lg shadow-md max-h-full max-w-full ${classname} ${slide === idx ? "block" : "hidden" }`}/>
            ))
          } 
        <BsArrowRightCircleFill className='absolute w-[2rem] h-[2rem] fill-white right-[1rem] hover: cursor-pointer drop-shadow-sm' onClick={nextSlide} />
          <span className='flex absolute bottom-[1rem]'>
          {
            data.map((_, idx) => (
              <button key={idx} onClick={() => setslide(idx)} className={`h-[0.5rem] w-[0.5rem] rounded-full border-none outline-none   shadow-sm shadow-black mx-[0.2rem] hover:cursor-pointer  ${slide === idx ? "bg-white h-[0.6rem] w-[0.6rem]" : " bg-gray-400 " } `}></button>
            ))
          }
        </span>
        </div>
    </div>
  )
}


