import React from 'react'

// function Speaker_card({img, name, designation, company, location}) {
//   return (
//     <div className='flex flex-col items-center bg-green-50 p-4 m-5 rounded-xl shadow-cstm w-[28vw]'>
//       <img src={img} alt="" className='h-[9rem]' />
//       <h2 className='mt-4 text-xl font-semibold'>{name}</h2>
//       <p>{designation}</p>
//       <p>{company}</p>
//       <p>{location}</p>
//     </div>
//   )
// }

// export default Speaker_card

const SpeakerCard = ({ img, name, designation, company, location }) => {
  return (
    <figure className="flex flex-col md:flex-row bg-slate-100 rounded-xl p-6 shadow-2xl dark:bg-green-100 hover:shadow-md duration-200">
      <img
        className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0"
        src={img}
        alt={name}
      />
      <div className="pt-4 md:pt-0 md:pl-6 text-center md:text-left">
        <blockquote>
          <p className="text-lg font-medium text-gray-900 dark:text-gray-900">
            {designation}
          </p>
        </blockquote>
        <figcaption className="font-medium pt-4">
          <div className="text-sky-500 dark:text-sky-400 text-xl font-semibold">
            {name}
          </div>
          <div className="text-slate-700 dark:text-slate-500">{company}</div>
          <div className="text-slate-700 dark:text-slate-500">{location}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default SpeakerCard;

