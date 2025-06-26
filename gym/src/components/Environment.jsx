import { useRef, useState } from 'react'
import environment1 from '../images/environment1.avif'
import environment2 from '../images/environment2.avif'
import environment3 from '../images/environment3.jpg'
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa6";
import { useEffect } from 'react';
export default function Environment(){
    const urls = [environment1, environment2]
      const extendedSlides = [
    urls[urls.length - 1], // fake last
    ...urls,               // real slides
    urls[0],               // fake first
  ];
    const[index, setIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef();
    const moveRight = () => {
        setIndex(prev => prev + 1);
        setIsTransitioning(true);
    };


    const moveLeft = () => {
        setIndex(prev => prev - 1);
        setIsTransitioning(true);
    };
      // Reset position after fake slides
  useEffect(() => {
    if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(urls.length); // jump to real last
      }, 700); // match duration
    } else if (index === urls.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1); // jump to real first
      }, 700);
    }
  }, [index, urls.length]);
        return(
    <div className="flex overflow-hidden relative "> 
        {extendedSlides.map((url, i) => (
        <div key={i}
            ref={sliderRef}
            className={`flex items-center justify-center min-w-full ${
            isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
            transform: `translateX(-${index * 100}%)`,
            width: `${extendedSlides.length * 100}%`,
            }}
        >
            <img 
              key={i}
              src={url}
              alt={`slide-${i}`}
              className={i === index ? "active" : ""}
              style={{ minWidth: "80%", objectFit: "cover", borderRadius:"40px", padding:"30px", height:"80%" }}
              
            />
            </div>
          ))}
             
                <button
                 className="flex justify-center items-center absolute top-[47%] left-12 md:top-[49%] md:left-36
                  bg-[black] z-20 p-2 md:p-3 rounded-[50%]"
                 onClick={moveLeft}>
                <FaCaretLeft className="text-white text-xl md:text-2xl lg:text-3xl" />
                </button>
                <button 
                className="flex justify-center items-center absolute top-[47%] right-12 md:top-[49%] md:right-36 bg-[black] z-20 p-2 md:p-3 rounded-[50%]" 
                onClick={moveRight} >
                <FaCaretRight className="text-white text-xl md:text-2xl lg:text-3xl"/>
                </button> 
            
        </div> 
        
        )
}