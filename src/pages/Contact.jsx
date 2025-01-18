import React from 'react'
import '../App.css'

function Contact() {
  return (
    <>
    <div className='h-auto sm:text-justify p-10 mt-14'>
      <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 shadow-slate-700 shadow-md p-2 text-black rounded-tl-3xl rounded-br-3xl">Advisory Committee</h1>
        <ul className="list-disc mt-8 w-[100%] ml-3 sm:ml-10">
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
    
    <div className='h-auto sm:text-justify p-10'>
      <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 shadow-slate-700 shadow-md p-2 text-black rounded-tl-3xl rounded-br-3xl">Organizing Committee</h1>
      <div className="grid grid-cols-2 mt-8 custom-grid">
      <div className="grid grid-cols-1 gap-10 sm:gap-4 mt-4">
        <p className='text-lg font-bold'>Chief Patron</p>
        <p className='text-lg font-bold'>Patron</p>
        <p className='text-lg font-bold'>Advisory Chair</p>
        <p className='text-lg font-bold'>Conveners</p>
        <p className='text-lg font-bold'>Co-convener</p>
        <p className='text-lg font-bold'>Organizing Team</p>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:gap-4 mt-4">
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
  <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 shadow-slate-700 shadow-md p-2 text-black rounded-tl-3xl rounded-br-3xl">Contact Information</h1>
  
  <div className="mt-8 flex flex-col lg:flex-row gap-8">
    <div className="flex-1">
      <p><strong>Co-convener:</strong></p>
      <p><strong>Dr. Navneet Singh</strong> <a href="+91 8877066431">+91 8877066431</a></p>
      <p className='font-bold'>SCHOOL OF ENGINEERING & TECHNOLOGY</p>
      <p><strong>Phone:</strong> <a href="+ 91 (11) 27343401/02/03">+ 91 (11) 27343401/02/03</a></p>
      <p><strong>E-mail: </strong><a className='text-blue-700 text-decoration-line: underline' href="icasw.conference2025@vips.edu">icasw.conference2025@vips.edu</a></p>
      <p><strong>Website:</strong> <a href="https://icasw-conference.vercel.app/" className='text-blue-700 text-decoration-line: underline'>https://icasw-conference.vercel.app/</a></p>
    </div>

    <div className="flex-1">
      <p><strong>Co-convener:</strong></p>
      <p><strong>Dr. Kanishka Sharma</strong> <a href="+91 9999808901">+91 9999808901</a></p>
      <p className='font-bold'>Indian Institute of Public Administration</p>
      <p><strong>Phone:</strong> <a href="+ 91 (11) 2346 8378">+ 91 (11) 2346 8378</a></p>
      <p><strong>E-mail: </strong><a className='text-blue-700 text-decoration-line: underline' href="icasw.conference2025@vips.edu">icasw.conference2025@vips.edu</a></p>
      <p><strong>Website:</strong> <a href="https://icasw-conference.vercel.app/" className='text-blue-700 text-decoration-line: underline'>https://icasw-conference.vercel.app/</a></p>
    </div>
  </div>
</div>
 
    </>
  )
}

export default Contact
