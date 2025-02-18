import React, { useEffect } from "react";
import Carousel from "../components/Carousel";

function Partners() {

  const handleClick = () => {
    window.location.href = "./registration";
  };


  return (
   <>
    <div className='h-auto flex flex-wrap items-center gap-y-20 justify-evenly text-center w-screen p-10 pt-16 '>
      <div className="flex flex-col items-center  gap-6 h-auto border p-6 rounded-md w-[20vw] hover:shadow-md hover:cursor-pointer" >
        <img src="/images/KTH.png" alt="KTH" className="rounded-lg h-[150px]" />
        <p>KTH-International Groundwater Arsenic Research Group, Department of Sustainable Development, Environmental Science and Engineering,  KTH Royal Institute of Technology, Teknikringen 10B,SE-100 44 Stockholm, Sweden</p>
      </div>
      <div className="flex flex-col items-center gap-6 h-auto border p-6 rounded-md w-[20vw] hover:shadow-md hover:cursor-pointer" >
        <img src="/images/ISGSD.png" alt="ISGCD" className="rounded-lg h-[150px]" />
        <p>International Society of Groundwater for Sustainable Development (ISGSD)</p>
      </div>
      <div className="flex flex-col items-center gap-6 h-auto border p-6 rounded-md w-[20vw] hover:shadow-md hover:cursor-pointer" >
        <img src="/images/IPCA.png" alt="IPC" className="rounded-lg" />
        <p>Indian Pollution Control Association (IPCA)</p>
      </div>
      <div className="flex flex-col items-center gap-6 h-auto border p-6 rounded-md w-[20vw] hover:shadow-md hover:cursor-pointer" >
        <img src="/images/DTU.png" alt="DTU" className="rounded-lg h-[150px]" />
        <p>Delhi Technological University (DTU)</p>
      </div>
      <div className="flex flex-col items-center gap-6 h-auto border p-6 rounded-md w-[20vw] hover:shadow-md hover:cursor-pointer" >
        <img src="/images/jnu.jpeg" alt="jnu" className="rounded-lg h-[150px]" />
        <p>Jawaharlal Nehru University (jnu)</p>
      </div>
      <div className="flex flex-col items-center gap-6 h-auto border p-6 rounded-md w-[20vw] hover:shadow-md hover:cursor-pointer" >
        <img src="/images/ministry_of_environment.webp" alt="moefcc" className="rounded-lg h-[180px]" />
        <p>Ministry of Environment, Forest & Climate Change (MoEFCC)</p>
      </div>
      <div className="flex flex-col items-center gap-6 h-auto border p-6 rounded-md w-[20vw] hover:shadow-md hover:cursor-pointer" >
        <img src="/images/Leicester.jpg" alt="moefcc" className="rounded-lg h-[160px]" />
        <p>Ministry of Environment, Forest & Climate Change (MoEFCC)</p>
      </div>
    </div>
    </>
  );
}

export default Partners;
