import React, {useState} from "react";
import activeStep from "../assets/png/activeStep.png";
import nonActiveStep from "../assets/png/nonActiveStep.png";

const steps = [
  {
    title: "Step 1: Resume Screening",
    content:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    title: "Step 2: Video Interview",
    content:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    title: "Step 3: Technical Evaluation",
    content:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    title: "Step 4: Application Review",
    content:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    title: "Step 5: Lets get to work",
    content:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
];

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the currently open accordion
    } else {
      setOpenIndex(index); // Open the clicked accordion
    }
  };

  return (
    <div className="text-[#202229] lg:w-5/12 mt-8">
      {steps.map((step, index) => (
        <div key={index} className="mb-4 shadow-md">
          <div
            className="flex justify-between items-center  p-4 rounded-md cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center">
              <span className="mr-5">
                {" "}
                <img
                  src={openIndex === index ? activeStep : nonActiveStep}
                  alt=""
                />{" "}
              </span>
              <h2 className="font-medium text-lg ">
                <span className="font-bold">{`Step ${index + 1}: `}</span>
                <span className="font-normal">{step.title.split(": ")[1]}</span>
              </h2>
            </div>
            <div>
              {/* {openIndex === index ? <FaChevronUp /> : <FaChevronDown />} */}
            </div>
          </div>
          {openIndex === index && (
            <div className="bg-whit  p-4 rounded-lg mt-2">
              <p>{step.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
