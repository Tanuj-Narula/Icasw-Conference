import React from 'react'

function Registration() {
  return (
    <div className='h-auto sm:text-justify p-10 mt-10'>
    <div>
      <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 shadow-slate-700 shadow-md p-2 text-black rounded-tl-3xl rounded-br-3xl">Registration Details</h1>
      <div className="grid grid-cols-2 mt-10 custom-grid">
      <div className="grid grid-cols-1 gap-4 mt-4">
        <p className='text-lg font-bold'>Category</p>
        <p className='text-lg font-bold'>Research Scholar & Student</p>
        <p className='text-lg font-bold'>Faculty Member</p>
        <p className='text-lg font-bold'>Registration</p>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <p>Registration Fee</p>
        <p>: 2500</p>
        <p>: 3000</p>
        <p>: <a href='' >Google Form URL</a></p>
      </div>
      </div>
    </div>
    <div className='h-auto sm:text-justify mt-20'>
      <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 shadow-slate-700 shadow-md p-2 text-black rounded-tl-3xl rounded-br-3xl">Bank details of IIPA</h1>
      <div className="grid grid-cols-2 mt-10 custom-grid">
      <div className="grid grid-cols-1 gap-3 mt-4">
        <p className='text-lg font-bold'>Beneficiary/ Account Name</p>
        <p className='text-lg font-bold'>Bank Name & Branch</p>
        <p className='text-lg font-bold'>Account No.</p>
        <p className='text-lg font-bold'>IFSC Code</p>
        <p className='text-lg font-bold'>MICR Code</p>
        <p className='text-lg font-bold'>TAN</p>
        <p className='text-lg font-bold'>PAN</p>
        <p className='text-lg font-bold'>STN</p>
      </div>
      <div className="grid grid-cols-1 gap-3 mt-4">
        <p>: Indian Institute of Public Administration</p>
        <p>: UCO Bank & IIPA 4 Block-B</p>
        <p>: 18200100002699</p>
        <p>: UCBA0001820</p>
        <p>: 110028041</p>
        <p>: DELI05218D</p>
        <p>: AAATI1032J</p>
        <p>: AAATI1032JSD001</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Registration
