import React, { useEffect } from 'react'
import { useState } from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

export const Carousel = ({data, autoSlide=false, autoSlideInterval=3000}) => {
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
      <div className='flex flex-row items-center align-middle justify-center w-3/5 h-[500px] relative transition-transform ease-out duration-500' style={{transform: `translateX (-${slide*100}%)`}}>
      <BsArrowLeftCircleFill className='absolute w-[2rem] h-[2rem] fill-white left-[1rem] hover:cursor-pointer' onClick={prevSlide} />
        { data.map((item, idx) => (                         
          <img src={item.src} alt={item.alt} key= {idx} className={`rounded-lg shadow-md  h-full w-full ${slide === idx ? "block" : "hidden" }`} />
        ))
      } 
      <BsArrowRightCircleFill className='absolute w-[2rem] h-[2rem] fill-white right-[1rem] hover: cursor-pointer drop-shadow-sm' onClick={nextSlide} />
      <span className='flex absolute bottom-[1rem]'>
        {
          data.map((_, idx) => (
            <button key={idx} onClick={() => setslide(idx)} className={`h-[0.5rem] w-[0.5rem] rounded-full border-none outline-none shadow-sm shadow-black mx-[0.2rem] hover:cursor-pointer  ${slide === idx ? "bg-white h-[0.6rem] w-[0.6rem]" : " bg-gray-400 " }`}></button>
          ))
        }
      </span>
    </div>
  )
}


