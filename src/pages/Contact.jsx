import React from 'react'
import '../App.css'

function Contact() {
  return (
    <>
  
    <div className='h-auto pt-16 sm:text-justify p-10 sm:text-lg'>
      <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 shadow-slate-700 shadow-md p-4 text-black rounded-tl-3xl rounded-br-3xl">Contact Information</h1>
  
    <div className="mt-8 pt-6 flex flex-col lg:flex-row gap-8">
    <div className="flex-1">
      <p><strong>Co-convener:</strong></p>
      <p><strong>Dr. Navneet Singh</strong> <a href="+91 8877066431">+91 8877066431</a></p>
      <p className='font-bold'>SCHOOL OF ENGINEERING & TECHNOLOGY</p>
      <p><strong>Phone:</strong> <a href="+ 91 (11) 27343401/02/03">+ 91 (11) 27343401/02/03</a></p>
      <p><strong>E-mail: </strong><a className='text-blue-700 text-decoration-line: underline' href="icasw.conference2025@vips.edu">icasw.conference2025@vips.edu</a></p>
    </div>

    <div className="flex-1">
      <p><strong>Co-convener:</strong></p>
      <p><strong>Dr. Kanishka Sharma</strong> <a href="+91 9999808901">+91 9999808901</a></p>
      <p className='font-bold'>Indian Institute of Public Administration</p>
      <p><strong>Phone:</strong> <a href="+ 91 (11) 2346 8378">+ 91 (11) 2346 8378</a></p>
      <p><strong>E-mail: </strong><a className='text-blue-700 text-decoration-line: underline' href="icasw.conference2025@vips.edu">icasw.conference2025@vips.edu</a></p>
    </div>
  </div>
</div>
 
    </>
  )
}

export default Contact
