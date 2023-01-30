
import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

interface ICarouselProps {
    items: IImage[];
}
const Carousel = ({ items }: ICarouselProps) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
      setActiveIndex((activeIndex + 1) % items.length);
    };
  
    const handlePrev = () => {
      setActiveIndex(
        activeIndex === 0 ? items.length - 1 : activeIndex - 1
      );
    };



    return (
        <div className="relative overflow-hidden">
            <button
            className="absolute top-0 left-0 mt-40 ml-10 text-3xl font-medium text-gray-500 hover:text-white"
            onClick={handlePrev}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                </svg>
            </button>
            <button
            className="absolute top-0 right-0 mt-40 mr-10 text-3xl font-medium text-gray-500 hover:text-white"
            onClick={handleNext}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                </svg>
            </button>
            <img
            className="w-full h-96 object-cover"
            src={items[activeIndex].url}
            alt={items[activeIndex].alt}
            />
             <div className="absolute bottom-0 left-0 right-0 pb-10 flex justify-center">
              {items.map((item, index) => (
                <span
                  key={index}
                  className={`w-4 h-4 mr-2 rounded-full ${
                    index === activeIndex
                      ? "bg-white"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
      </div>
    )
}

export default Carousel