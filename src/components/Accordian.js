import React, { useEffect, useState } from "react";
import FAQ from "./FAQ";

const Accordion = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems([
      {
        id: 1,
        title: "Will I receive a certificate for each course?",
        content: "Yes — each student who completes either Filmpire or NFT Marketplace will receive a certificate of completion to acknowledge their proficiency in either React.js or Solidity/Web 3.0 app development. We encourage students to include these on their LinkedIn profiles and in their job applications!",
      },
      {
        id: 2,
        title: "Can I join the masterclass if I purchase a course?",
        content: "Absolutely! The JSM Masterclass Experience was built for developers who want to gain practical experience through monthly group projects so they can beef up their resumes and CVs. You can purchase access to the masterclass options at any time.",
      },
      {
        id: 3,
        title: "How does the masterclass work?",
        content: "Students are divided into cohorts where they are given monthly projects to collaborate on and complete with coaching guidance and code review. We offer both a 3-month option (The Confident Coder) and a 6-month option (The Enlightened Engineer) depending on how many projects you wish to showcase to employers. The Enlightened Engineer includes a three-month-long capstone project that will serve as the pinnacle achievement to aid in your job search. Each month, students will participate in mock interviews and receive feedback on their progress as well as their resume/CV, LinkedIn, GitHub, etc.",
      },
      {
        id: 4,
        title: "How long does each course last?",
        content: "The duration of each course depends on how fast you wish to work through them — some students might take a few days, while others may wish to repeat specific exercises to gain a stronghold on the various concepts. Filmpire contains approximately seven hours of course material, while NFT Marketplace contains approximately 10 hours of course material.",
      },
    ]);
  }, []);
  
  return (
    <section className="px-4 md:px-6 py-12 bg-gradient-to-r from-gray-700 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center flex-col mb-10">
          <h2 className="font-bold text-3xl md:text-5xl leading-[32px] text-center space-y-4 pb-5">
            Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">Asked</span> Questions
          </h2>
          <FAQ items={items} />
        </div>
      </div>
    </section>
  );
};

export default Accordion;
