import React from 'react'

function Registration() {
  return (
    <div className='h-auto sm:text-justify p-10 mt-10'>
    <div>
      <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 p-2 text-black rounded-[7px] shadow-heading">Registration Details</h1>
      <div className="grid sm:grid-cols-custom grid-cols-custom-1 mt-10">
      <div className="grid grid-rows-6 sm:gap-4 gap-6 mt-4">
        <p className='text-lg font-bold'>Category</p>
        <p className='text-lg font-bold'>Student</p>
        <p className='text-lg font-bold'>Research Scholar</p>
        <p className='text-lg font-bold'>Faculty Member</p>
        <p className='text-lg font-bold'>Industry Professional</p>
        <p className='text-lg font-bold'>Registration</p>
      </div>
      <div className="grid grid-rows-6 sm:gap-4 gap-6 mt-4 ">
        <p>Registration Fee</p>
        <p>: 2000</p>
        <p>: 2800</p>
        <p>: 3300</p>
        <p>: 5000</p>
        <p><a className='text-blue-700 text-decoration-line: underline' href='https://forms.gle/oETcPWCkwrqDvZh97' target='_blanck'>Google Form URL</a></p>
      </div>
      </div>
    </div>
    <div class="flex flex-col items-center bg-white py-14 rounded-lg w-64">
  <img src="/images/qr.png" alt="QR" class="w-32 shadow-md shadow-green-700 h-32 object-contain mb-4" />
  <h3 class="text-lg font-semibold text-green-700">Scan to Register</h3>
</div>


    <div className='h-auto sm:text-justify mt-5'>
      <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 p-2 text-black rounded-[7px] shadow-heading">Bank details of IIPA</h1>
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
