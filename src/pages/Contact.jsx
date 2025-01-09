import React from 'react'
import '../App.css'

function Contact() {
  return (
    <>
    <div className='h-auto text-justify p-10 mt-14'>
      <h1 className="inline font-bold text-2xl bg-[#389336] p-3 rounded-tl-3xl rounded-br-3xl">Advisory Committee</h1>
        <ul className="list-disc mt-4 w-[90%] ml-10">
          <li>Shri S.N. Tripathi, DG IIPA</li>
          <li>Prof. David Sanderson, Professor and Inaugural Judith Neilson Chair in Architecture Faculty of Arts,Design and Architecture UNSW Sydney, Australia</li>
          <li>Professor Nibedita S. Ray-Bennett FRGS, FHEAProfessor of Risk Management Founder & President, Avoidable Deaths NetworkInterim Associate Director & Research Challenge Leader, Institute for Environmental FuturesMarketing and Strategy, School of Business0.26 Teaching Centre, BrookfieldUniversity of Leicester, Leicester</li>
          <li>Prof. C. K. Varshney, Professor Emeritus, JNU</li>
          <l>Dr. Sachidananda Satapathy, Ex-Director Climate Change, MOEFCC</l>
          <li> Mr. Ashish Jain, IPCA Director</li>
          <li>Prof. J. S. Kamyotra, CPCB</li>
          <li> Prof. Gulshan Dhamija, COE, GGSIPU, Delhi</li>
          <li>Dr. Jayanta Boruah, Dept. of Law, Central University of Karnataka</li>
          <li>Dr. Pankaj Kumar Singh, Director DSEU (Wazirpur Campus)</li>
          <li>Prof. Rajeev Chaudhary, HOD, Mechanical Engineering, Delhi Technological University</li>
          <li>Prof. Ranu Gadi, Professor (Chemistry), Dean (Research & Development Cell and Res. & Consultancy), Director (Anveshan Foundation), IGDTW, Delhi</li>
          <li>Prof. S.G. Warkar, Dean Student Welfare, Delhi Technological University, Delhi</li>
        </ul>
    </div>
    
    <div className='h-auto text-justify p-10'>
      <h1 className="inline font-bold text-2xl bg-[#389336] p-3 rounded-tl-3xl rounded-br-3xl">Organizing Committee</h1>
      <div className="grid grid-cols-2 mt-4 custom-grid">
      <div className="grid grid-cols-1 gap-4 mt-4">
        <p className='text-lg font-bold'>Chief Patron</p>
        <p className='text-lg font-bold'>Patron</p>
        <p className='text-lg font-bold'>Advisory Chair</p>
        <p className='text-lg font-bold'>Conveners</p>
        <p className='text-lg font-bold'>Co-convener</p>
        <p className='text-lg font-bold'>Organizing Team</p>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <p>Dr. S. C. Vats, Founder & Chairman, VIPS-TC</p>
        <p>Shri Vineet Vats, Vice-Chairman, VIPS-TC</p>
        <p>Prof. Amita Dev, Director General, VSE&T and VSIT (VIPS-TC)</p>
        <p>Prof. Nidhi Sharma, Dean, Applied Sciences & Humanities, VSE&T (VIPS-TC), Dr. Shyamli Singh, IIPA Faculty, Prof. Vinod K. Sharma</p>
        <p>Dr. Navneet Kumar, Faculty, VSE&T (VIPS-TC)</p>
        <p>Dr. Dharmender, Dr. Srishti, Mr. Kumar Ankur</p>
      </div>
      </div>
    </div>
    <div className='h-auto text-justify p-10 text-lg'>
      <h1 className="inline font-bold text-2xl bg-[#389336] p-3 rounded-tl-3xl rounded-br-3xl">Contact Information</h1>
      <p className='mt-4'>Co-convener:</p>
      <p>Dr. Navneet Singh (+91 8877066431)</p>
      <p>SCHOOL OF ENGINEERING & TECHNOLOGY</p>
      <p>Phone: + 91 (11) 27343401/02/03</p>
      <p>E-mail:</p>
      <p>Website: <a href="https://www.vips.edu" target='_blank' className='underline text-blue-700'>www.vips.edu</a></p> 
    </div>
    </>
  )
}

export default Contact
