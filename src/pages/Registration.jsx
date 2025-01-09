import React from 'react'

function Registration() {
  return (
    <div className='h-auto text-justify p-10 mt-10'>
    <div>
      <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 shadow-slate-700 shadow-md p-2 text-black rounded-tl-3xl rounded-br-3xl">Registration Details</h1>
      <div className="grid grid-cols-2 mt-10 custom-grid">
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-1">
        <p className='text-lg font-bold'>Category</p>
        <p className='text-lg font-bold'>Research Scholar & Student</p>
        <p className='text-lg font-bold'>Faculty Member</p>
        <p className='text-lg font-bold'>Registration</p>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-1">
        <p>Registration Fee</p>
        <p>: 2500</p>
        <p>: 3000</p>
        <p>: <a href='' >Google Form Short URL</a></p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Registration
