import React from 'react'

function Reviewer() {
  return (
    <>
    <div className='h-auto sm:text-justify p-10 pt-16 '>
      <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 rounded-[7px] shadow-heading p-4 text-black ">Review Committee</h1>
      <div className="overflow-x-auto mt-12">
      <table className="table-auto w-full border-collapse mx-auto">
        <thead>
          <tr className="bg-[#0C4f18] text-white text-lg border border-black">
            <th className="sm:text-lg font-semibold border border-black p-4">S.No.</th>
            <th className="sm:text-lg font-semibold border border-black p-4">First Name</th>
            <th className="border border-black p-4 font-semibold">Last Name</th>
            <th className="border border-black p-4 font-semibold">Affiliation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">1.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Pooja</td>
            <td className="border border-black p-4 font-semibold">Devi</td>
            <td className="border border-black p-4 font-semibold">CSIR, CSIO Chandigarh</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">2.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Prof. Sujit</td>
            <td className="border border-black p-4 font-semibold">Kumar</td>
            <td className="border border-black p-4 font-semibold">IIT Delhi</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">3.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Prosun</td>
            <td className="border border-black p-4 font-semibold">Bhattacharya</td>
            <td className="border border-black p-4 font-semibold">KTH Royal Institute of Technology, Stockholm, Sweden</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">4.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Ravi</td>
            <td className="border border-black p-4 font-semibold">Kumar</td>
            <td className="border border-black p-4 font-semibold">SRM Ghaziabad</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">5.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Arvind</td>
            <td className="border border-black p-4 font-semibold">Sharma</td>
            <td className="border border-black p-4 font-semibold">Bhagwan Parshuram Institute of Technology</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">6.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Divya</td>
            <td className="border border-black p-4 font-semibold">Madan</td>
            <td className="border border-black p-4 font-semibold">Akhilesh Das Gupta Institute of Professional Studies, New Delhi</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">7.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Richa</td>
            <td className="border border-black p-4 font-semibold">Sharma</td>
            <td className="border border-black p-4 font-semibold">Maharaja Agrasen Institute of Technology</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">8.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Shyamli</td>
            <td className="border border-black p-4 font-semibold">Singh</td>
            <td className="border border-black p-4 font-semibold">IIPA</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">9.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Shubhangi</td>
            <td className="border border-black p-4 font-semibold">Madan</td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">10.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Navneet</td>
            <td className="border border-black p-4 font-semibold">Kumar</td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">11.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Sonal</td>
            <td className="border border-black p-4 font-semibold">Khurana</td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">12.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Pravesh</td>
            <td className="border border-black p-4 font-semibold">Antil</td>
            <td className="border border-black p-4 font-semibold">Assistant Professor, CCS Haryana Agricultural University, Hisar</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">13.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Avdhaesh</td>
            <td className="border border-black p-4 font-semibold">Sharma</td>
            <td className="border border-black p-4 font-semibold">Associate Professor, VIT, Chennai</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">14.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Krishna Prakash</td>
            <td className="border border-black p-4 font-semibold">Yadav</td>
            <td className="border border-black p-4 font-semibold">Asstt. Professor NIT, Andhra Pradesh</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">15.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Faizal</td>
            <td className="border border-black p-4 font-semibold">Rahmani</td>
            <td className="border border-black p-4 font-semibold">Asstt Prof., BIT Mesra, Ranchi</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">16.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Jaswinder</td>
            <td className="border border-black p-4 font-semibold">Singh</td>
            <td className="border border-black p-4 font-semibold">Astt. Professor, Panjab Engineering College, Chandigarh</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">17.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Saurabh</td>
            <td className="border border-black p-4 font-semibold">Chandrakar</td>
            <td className="border border-black p-4 font-semibold">Asstt. Professor, Senior Gride, NIT, Suratkal</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">18.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Jayant</td>
            <td className="border border-black p-4 font-semibold">Singh</td>
            <td className="border border-black p-4 font-semibold">Akhilesh Das Gupta Institute of Professional Studies, New Delhi</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">19.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Neha</td>
            <td className="border border-black p-4 font-semibold">Chaudhary</td>
            <td className="border border-black p-4 font-semibold">Asstt. Professor, NIT, Suratkal</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">20.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Jayanthi</td>
            <td className="border border-black p-4 font-semibold">Pal</td>
            <td className="border border-black p-4 font-semibold">Central University of Rajasthan</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">21.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Supriya</td>
            <td className="border border-black p-4 font-semibold">Sharma</td>
            <td className="border border-black p-4 font-semibold">Mahraja Agrasen Institute of Technology, Delhi</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">22.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Vineet</td>
            <td className="border border-black p-4 font-semibold">Verma</td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">23.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Shweta</td>
            <td className="border border-black p-4 font-semibold">Taneja</td>
            <td className="border border-black p-4 font-semibold">Bhagwan Parshuram Institute of Technology</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">24.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Srishti</td>
            <td className="border border-black p-4 font-semibold">Singh</td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">25.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dharmender</td>
            <td className="border border-black p-4 font-semibold">Kumar</td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">26.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Kumar</td>
            <td className="border border-black p-4 font-semibold">Ankur</td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">27.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Tanuja</td>
            <td className="border border-black p-4 font-semibold">Nautiyal</td>
            <td className="border border-black p-4 font-semibold">Akhilesh Das Gupta Institute of Professional Studies, New Delhi</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">28.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Daisy</td>
            <td className="border border-black p-4 font-semibold">Bhat</td>
            <td className="border border-black p-4 font-semibold">Akhilesh Das Gupta Institute of Professional Studies, New Delhi</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">29.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Komal</td>
            <td className="border border-black p-4 font-semibold">Aggarwal</td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">30.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Archa</td>
            <td className="border border-black p-4 font-semibold">Gulati</td>
            <td className="border border-black p-4 font-semibold">Ramjas College, Delhi University</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">31.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Benu</td>
            <td className="border border-black p-4 font-semibold">Arora</td>
            <td className="border border-black p-4 font-semibold">Hansraj College, Delhi University</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">32.</td>
            <td className="sm:text-lg font-semibold border border-black p-4"> Dr. Adeel</td>
            <td className="border border-black p-4 font-semibold"> Hashmi </td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">33.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Vaneeta </td>
            <td className="border border-black p-4 font-semibold">Bharadwaj </td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">34.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Khushbu</td>
            <td className="border border-black p-4 font-semibold">   </td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
          <tr>
            <td className="sm:text-lg font-semibold border border-black p-4">35.</td>
            <td className="sm:text-lg font-semibold border border-black p-4">Dr. Mohammad Atif </td>
            <td className="border border-black p-4 font-semibold">Wahid</td>
            <td className="border border-black p-4 font-semibold">VIPS-TC</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>

  </>
  )
}

export default Reviewer
