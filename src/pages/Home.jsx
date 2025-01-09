import React from "react";

function Home() {

  const handleClick = () => {
    alert("Registration is not open yet");
  };


  return (
    <div className="text-justify px-10 mt-12 h-auto">
        <div>
        <h1 className="inline font-bold text-2xl bg-[#389336] p-2 rounded-tl-3xl rounded-br-3xl">About Conference</h1>
        <p className="mt-4">
            The Indian Institute of Public Administration (IIPA), in collaboration
            with Vivekananda Institute of Professional Studies - Technical Campus
            (VIPS-TC), is hosting the upcoming International Conference on
            "Integrating Climate Action, AI, SDGs, and Water Management" (ICASW),
            scheduled for March 19-20, 2025. This event envisages to be a
            transformative platform aimed at fostering interdisciplinary
            collaboration.
        </p>
        <p className="mt-3">
            With the global challenges posed by climate change, water scarcity, and
            environmental degradation, the International Conference will bring
            together experts from diverse fields, including climate science,
            artificial intelligence, sustainable development, and public policy. It
            will provide a unique forum for policymakers, academicians, researchers,
            conservationists, and industry leaders to exchange insights on
            innovative approaches to climate action and water management and
            conservation.
        </p>
        <p className="mt-3">
            Key themes of ICASW include AI-driven solutions for environmental
            monitoring, sustainable urban and rural water systems, nature-based
            solutions for climate resilience, and strategies to achieve the United
            Nations' Sustainable Development Goals (SDGs). Through technical
            sessions, keynote speeches, and interactive panel discussions, the event
            will explore cutting-edge technologies and collaborative policy
            frameworks to address the interconnected challenges of climate change
            and water resource management. By integrating advanced technologies like
            AI with sustainable development initiatives, ICASW aims to promote
            holistic strategies that balance ecological preservation with societal
            well-being, thereby contributing to resilient and sustainable
            communities.
          </p>
        </div>
    
        <div className="mt-8">
            <h1 className="inline font-bold text-2xl bg-[#389336] p-2 rounded-tl-3xl rounded-br-3xl">Conference Tracks</h1>
            <ol className="mt-4 list-decimal list-inside">
                <li>Mitigation and Adaptation Strategies for Climate Change in India.</li>
                <li>Integration of Sustainable Development Goals (SDGs) in Climate Action Plan.</li>
                <li> Harnessing Artificial Intelligence for Climate Resilience in Water Management.</li>
                <li> Policy Frameworks for Sustainable Water Resource Management in the Face of Climate Change.</li>
                <li>Community Engagement and Capacity Building for Climate Resilient Water Practices.</li>
                <li>Innovative Technologies for Water Conservation and Quality Monitoring.</li>
                <li> Addressing Equity and Social Justice in Access to Clean Water in India.</li>
                <li>Impact of Climate Change on Agriculture and Livelihoods: Water Resource Perspectives.</li>
                <li>Cross-Sector Collaboration for Sustainable Water Governance and Climate Resilience.</li>
                <li>Future Projections: AI-driven Solutions for Anticipating and Mitigating Climate-induced Water Challenges in India.</li>
                <li>Green material and technologies for sustainability.</li>
                <li>Green Mobility.</li>
                <li>Environmental assisted Degradation.</li>
                <li>Environmental & forest policies and laws</li>
            </ol>
        </div>
        <div className="w-full flex justify-center mt-8">
        <button className="border border-black p-4 rounded-lg bg-[#e3f0e0] hover:scale-110" onClick={handleClick}>Register Now</button>
        </div>
    </div>
  );
}

export default Home;
