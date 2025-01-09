import React from 'react'

function Speaker_card({img, name, designation, company, location}) {
  return (
    <div className='flex flex-col items-center bg-green-50 p-4 m-5 rounded-xl shadow-cstm w-[28vw]'>
      <img src={img} alt="" className='h-[9rem]' />
      <h2 className='mt-4 text-xl font-semibold'>{name}</h2>
      <p>{designation}</p>
      <p>{company}</p>
      <p>{location}</p>
    </div>
  )
}

export default Speaker_card
