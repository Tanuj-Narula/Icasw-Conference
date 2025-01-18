import React from 'react'
import SpeakerCard from '../components/Speaker_card'

// function Speakers() {
//   return (
//     <div className='h-auto text-justify px-10 mt-14'>
//       <h1  className="inline font-bold text-2xl bg-[#389336] p-3 rounded-tl-3xl rounded-br-3xl">Keynote Speakers</h1>
//       <div className='flex flex-wrap justify-center w-full mt-4'>
//         <Speaker_card img={"/david.png"} name='David Sanderson' designation='Professor and Inaugural Judith Neilson Chair' company='in Architecture, Faculty of Arts, Design and Architecture' location='UNSW Sydney, Australia' />

//         <Speaker_card img={"/Nibedita.png"} name='Prof. Nibedita S. Ray-Bennett FRGS, FHEA' designation='Professor of Risk Management' company='School of Business 0.26 Teaching Centre,' location='Brookfield University of Leicester, Leicester' />

//         <Speaker_card img={""} name='Prof. Deeksha Narula' designation='University School of Environment' company='Management' location='GGSIP University, Delhi'/>

//         <Speaker_card img={"/harish.png"} name='Prof. Harish Hirani HAG' designation='Former Director CSIR' company='(CMERI, Durgapur) Dept. of Mech. Engg.' location='IIT Delhi, ASME Fellow' />

//         <Speaker_card img={"/pankaj.png"} name='Dr. Pankaj Thakur'designation='Associate Professor,' company='Special Centre for Nano Science' location='JNU, Delhi' />

//         <Speaker_card img={"/pooja.png"} name='Dr. Pooja Devi' designation='Principal Scientist' company='' location='CSIR (CSIO), Chandigarh' />

//         <Speaker_card img={"/sujeet.png"} name='Prof. Sujeet Kumar Sinha' designation='(Expertise Biotribology and Viomaterial)' company='Dept. of Mechanical Engineering IIT Delhi' location='Former Faculty NUS Singapore' />
//       </div>
//     </div>
//   )
// }

// export default Speakers

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
       <SpeakerCard
        img="/images/david.png"
        name="David Sanderson"
        designation="Professor and Inaugural Judith Neilson Chair"
        company="in Architecture, Faculty of Arts, Design and Architecture"
        location="UNSW Sydney, Australia"
      />
      <SpeakerCard
        img="/images/Nibedita.png"
        name="Prof. Nibedita S. Ray-Bennett FRGS, FHEA"
        designation="Professor of Risk Management"
        company="School of Business 0.26 Teaching Centre"
        location="Brookfield University of Leicester, Leicester"
      />
      <SpeakerCard
        img="/images/Prateek.png"
        name="Prof. Prateek Sharma"
        designation="Vice – Chancellor"
        company="Delhi Technological University"
        location=""
      />
      <SpeakerCard
        img="/images/harish.png"
        name="Prof. Harish Hirani HAG"
        designation="Former Director CSIR"
        company="(CMERI, Durgapur) Dept. of Mech. Engg."
        location="IIT Delhi, ASME Fellow"
      />
      <SpeakerCard
        img="/images/pankaj.png"
        name="Dr. Pankaj Thakur"
        designation="Associate Professor"
        company="Special Centre for Nano Science"
        location="JNU, Delhi"
      />
      <SpeakerCard
        img="/images/Ranu.png"
        name="Prof. (Dr.) Ranu Gadi"
        designation="Professor,Dean"
        company="Dept. of App. Sciences & Humanities,(Industrial Res. & Development and Res.
& Consultancy)"
        location="Indira Gandhi Delhi Technical University for Women"
      />
      <SpeakerCard
        img="/images/sujeet.png"
        name="Prof. Sujeet Kumar Sinha"
        designation="(Expertise Biotribology and Viomaterial)"
        company="Dept. of Mechanical Engineering IIT Delhi"
        location="Former Faculty NUS Singapore"
      />
    </div>
  );
}

export default App;
