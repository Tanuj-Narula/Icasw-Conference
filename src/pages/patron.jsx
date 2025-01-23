import React from 'react'
import '../App.css'

function Patron() {
  return (
    <>
<div className="h-auto sm:text-justify pt-16 p-10">
  <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 rounded-[7px] shadow-heading p-4 text-black ">Our Patrons</h1>
  
  <div className="overflow-x-auto pt-6 mt-8">
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
          <td className="sm:text-lg font-semibold border border-black p-4">Chief Patron</td>
          <td className="border border-black p-4 font-semibold">Shri Rajeev Mital (IAS), Director General, NMCG</td>
          <td className="border border-black p-4 font-semibold">Dr. S. C. Vats, Founder & Chairman, VIPS-TC</td>
        </tr>
        <tr>
          <td className="sm:text-lg font-semibold border border-black p-4">Patron</td>
          <td className="border border-black p-4 font-semibold">Shri S. N. Tripathi, Director General, IIPA</td>
          <td className="border border-black p-4 font-semibold">Shri Vineet Vats, Vice-Chairman, VIPS-TC</td>
        </tr>
        <tr>
          <td className="sm:text-lg font-semibold border border-black p-4">Advisory Chair</td>
          <td className="border border-black p-4 font-semibold">Prof. C. K. Varshney, Professor Emeritus, JNU <br/>Shri Amitabh Ranjan, Registrar, IIPA</td>
          <td className="border border-black p-4 font-semibold">Prof. Amita Dev, Director General, VSE&T and VSIT (VIPS-TC)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</>
  )
}

export default Patron
