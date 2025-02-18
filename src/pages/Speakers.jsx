import React from 'react'
import SpeakerCard from '../components/Speaker_card'

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
       <SpeakerCard
        img="/images/Rajib.png"
        name="Prof. Rajib Shaw"
        designation="Professor in Graduate School of Media and Governance"
        company=" Keio University’s"
        location="Shonan Fujisawa Campus (SFC)"
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
        img="/images/Prosun.png"
        name="Prof. Prosun Bhattacharya"
        designation="Professor of Groundwater Chemistry"
        company="Dept. of Sustainable Development, Environmental Science and Engineering"
        location="KTH Royal Institute of Technology, Stockholm, Sweden"
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
        company="Dept. of App. Sciences & Humanities,(Industrial Res. & Development and Res. & Consultancy)"
        location="Indira Gandhi Delhi Technical University for Women"
      />
      <SpeakerCard
        img="/images/sujeet.png"
        name="Prof. Sujeet Kumar Sinha"
        designation="Expertise Biotribology and Biomaterial"
        company="Dept. of Mechanical Engineering IIT Delhi"
        location="Former Faculty NUS Singapore"
      />
    </div>
  );
}

export default App;
