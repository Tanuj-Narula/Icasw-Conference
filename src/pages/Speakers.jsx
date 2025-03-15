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
        img="/images/Arun.png"
        name="Dr. Arun Kansal"
        designation="Director (ICWMR) and Professor"
        company="TERI School of Advanced Studies"
        location=""
      />
      <SpeakerCard
        img="/images/pankaj.png"
        name="Dr. Pankaj Thakur"
        designation="Associate Professor"
        company="Special Centre for Nano Science"
        location="JNU, Delhi"
      />
      <SpeakerCard
        img="/images/Gopal.png"
        name="Dr. Gopal Krishan"
        designation="Professor,Dean"
        company="Jal Vigyan Bhawan Groundwater Hydrology Division"
        location="National Institute of Hydrology, Roorkee-247 667 (Uttarakhand)"
      />
      <SpeakerCard
        img="/images/sujeet.png"
        name="Prof. Sujeet Kumar Sinha"
        designation="Expertise Biotribology and Biomaterial"
        company="Dept. of Mechanical Engineering IIT Delhi"
        location="Former Faculty NUS Singapore"
      />
        <SpeakerCard
        img="/images/pooja.png"
        name="Dr.Pooja Devi"
        designation="Principal Scientist"
        company="CSIR-CSIO"
        location="Raman Research Fellow, Drexel University। Associate Professor, AcSIR I CC Member"
      />
    </div>
  );
}

export default App;
