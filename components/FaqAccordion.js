import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className={`w-full text-left p-4 focus:outline-none transition-all duration-300 ease-in-out ${
          isOpen
            ? "bg-[#018EDE]  text-white rounded-t-lg"
            : "bg-white text-gray-800 hover:bg-gray-50"
        }`}
        onClick={onClick}
      >
        <div className="flex justify-between items-center">
          <span className="font-medium">{question}</span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isOpen ? "h-fit" : "max-h-0"
        }`}
      >
        <div
          className={`p-4 text-gray-600  ${
            isOpen ? " border-x-3 border-[#018EDE]" : "bg-white text-gray-800 hover:bg-gray-50"
          }`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

const FaqAccordion = ({ faqData, title = "Your Queries, Our Answers!" }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 lg:px-0 pt-10 pb-24">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-2xl lg:text-4xl font-bold text-center text-[#0C3D4C] mb-8">{title}</h3>
        <div className="rounded-lg space-y-3.5  overflow-hidden border border-gray-200">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
              className="space-y-3"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
