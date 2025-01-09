import React from 'react'
import Speaker_card from '../components/Speaker_card'

function Speakers() {
  return (
    <div className='h-auto text-justify px-10 mt-14'>
      <h1  className="inline font-bold text-2xl bg-[#389336] p-3 rounded-tl-3xl rounded-br-3xl">Keynote Speakers</h1>
      <div className='flex flex-wrap justify-center w-full mt-4'>
        <Speaker_card img={"../src/assets/david.png"} name='David Sanderson' designation='Professor and Inaugural Judith Neilson Chair' company='in Architecture, Faculty of Arts, Design and Architecture' location='UNSW Sydney, Australia' />

        <Speaker_card img={"../src/assets/prof._Nibedita.png"} name='Prof. Nibedita S. Ray-Bennett FRGS, FHEA' designation='Professor of Risk Management' company='School of Business 0.26 Teaching Centre,' location='Brookfield University of Leicester, Leicester' />

        <Speaker_card img={""} name='Prof. Deeksha Narula' designation='University School of Environment' company='Management' location='GGSIP University, Delhi'/>

        <Speaker_card img={"../src/assets/harish.png"} name='Prof. Harish Hirani HAG' designation='Former Director CSIR' company='(CMERI, Durgapur) Dept. of Mech. Engg.' location='IIT Delhi, ASME Fellow' />

        <Speaker_card img={"../src/assets/pankaj.png"} name='Dr. Pankaj Thakur'designation='Associate Professor,' company='Special Centre for Nano Science' location='JNU, Delhi' />

        <Speaker_card img={"../src/assets/pooja.png"} name='Dr. Pooja Devi' designation='Principal Scientist' company='' location='CSIR (CSIO), Chandigarh' />

        <Speaker_card img={"../src/assets/sujeet.png"} name='Prof. Sujeet Kumar Sinha' designation='(Expertise Biotribology and Viomaterial)' company='Dept. of Mechanical Engineering IIT Delhi' location='Former Faculty NUS Singapore' />
      </div>
    </div>
  )
}

export default Speakers
