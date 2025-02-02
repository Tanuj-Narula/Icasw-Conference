import React from 'react'

const SpeakerCard = ({ img, name, designation, company, location }) => {
  return (
    <figure className="flex flex-col md:flex-row rounded-xl p-6 shadow-2xl bg-[#c4f3c4] hover:shadow-md duration-200">
      <img
        className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0"
        src={img}
        alt={name}
      />
      <div className="pt-4 md:pt-0 md:pl-6 text-center md:text-left">
        <blockquote>
          <p className="text-lg font-medium text-gray-800">
            {designation}
          </p>
        </blockquote>
        <figcaption className="font-medium pt-4">
          <div className="text-sky-500 text-xl pb-3 font-bold">
            {name}
          </div>
          <div className="text-slate-700">{company}</div>
          <div className="text-slate-700">{location}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default SpeakerCard;

