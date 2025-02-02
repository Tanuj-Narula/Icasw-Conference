import React, { useState, useEffect } from 'react';

function Carousel() {
  const [active, setActive] = useState(0);
  const images = [
    '/ic-icasw2025/images/vipsbg.jpg',
    '/ic-icasw2025/images/iipabg1.jpg',
    '/ic-icasw2025/images/vipsbg1.jpg',
    '/ic-icasw2025/images/iipabg2.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % images.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setActive(index);
  }

  return (
    <div className="carousel relative w-full  h-[20vh] sm:h-[60vh] shadow-[0px_5px_12px_#000000a5] bg-slate-50">
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div key={index} className={`carousel-item absolute inset-0 transition-opacity duration-700 ease-in ${active === index ? 'opacity-100 ' : 'opacity-0 '}`} >
            <img src={src} alt={`Slide ${index}`} className='h-[100%] w-[100%] object-cover sm:object-fill transition' />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 sm:bottom-8 w-full justify-center flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${active === index ? 'bg-gray-950' : 'bg-gray-600'}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;