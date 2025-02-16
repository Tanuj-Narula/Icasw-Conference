import React from 'react'

function Organizing() {
  return (
    <>
    <div className="h-auto sm:text-justify pt-16 p-10">
      <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 rounded-[7px] shadow-heading p-4 text-black ">Organizing Committee</h1>
      
      <div className="overflow-x-auto mt-12">
        <table className="table-auto w-full border-collapse mx-auto">
          <thead>
            <tr className="bg-[#0C4f18] text-white text-lg border border-black">
              <th></th>
              <th>IIPA</th>
              <th>VIPS-TC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:text-lg font-semibold border border-black p-4">Conveners</td>
              <td className="border border-black p-4 font-semibold">Prof. Vinod K. Sharma, Senior Professor, IIPA<br/>Dr. Shyamli Singh, 
              Faculty and Coordinator ( Centre for environment and climate change)<br/> Indian Institute of Public Administration</td>
              <td className="border border-black p-4 font-semibold">Prof. Nidhi Sharma, Dean, Applied Sciences & Humanities, VSE&T (VIPS-TC)</td>
            </tr>
            <tr>
              <td className="sm:text-lg font-semibold border border-black p-4">Co-convener</td>
              <td className="border border-black p-4 font-semibold">Ar. Kanishka Sharma, Researcher, IIPA</td>
              <td className="border border-black p-4 font-semibold">Dr. Navneet Kumar, Faculty, VSE&T (VIPS-TC)</td>
            </tr>
            <tr>
              <td className="sm:text-lg font-semibold border border-black p-4">Organizing Team</td>
              <td className="border border-black p-4 font-semibold">Ms. Himanshi, Ms. Simran, Ms. Mahiya, Mr. Siddharth, Mr. Udit</td>
              <td className="border border-black p-4 font-semibold">Dr. Dharmender, Dr. Srishti, Dr. Nikita Sharma, Mr. Kumar Ankur, Dr. Shubhangi Madan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> 
    </>
  )
}

export default Organizing
