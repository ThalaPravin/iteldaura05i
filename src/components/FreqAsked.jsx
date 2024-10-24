import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    category: "Calls & Contacts",
    questions: [
      {
        question: "How to set music as a ringtone?",
        answer:
          "To set music as a ringtone, go to settings, sound, and select ringtone.",
      },
      {
        question: "Cannot make a call after activating data.",
        answer: `1. IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.
        2. Make sure the SIM account has enough balance and the place has a good signal.
        3. Check whether the phone is on 4G only mode, if yes, change to other modes.
        4. Try to reset factory settings, but remember to take data back up first.
        5. Visit the nearest customer service Centre for further check.`,
      },
      {
        question: "Cannot add new contacts to phone book or view phone book.",
        answer:
          "Make sure the contacts app is updated and check storage permissions.",
      },
      {
        question: "Copy contacts to another phone.",
        answer:
          "You can copy contacts via Bluetooth or sync them to your Google account.",
      },
    ],
  },
  {
    category: "Camera & Picture",
    questions: [
      {
        question: "How to set music as a ringtone?",
        answer:
          "To set music as a ringtone, go to settings, sound, and select ringtone.",
      },
      {
        question: "Cannot make a call after activating data.",
        answer: `1. IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.
        2. Make sure the SIM account has enough balance and the place has a good signal.
        3. Check whether the phone is on 4G only mode, if yes, change to other modes.
        4. Try to reset factory settings, but remember to take data back up first.
        5. Visit the nearest customer service Centre for further check.`,
      },
      {
        question: "Cannot add new contacts to phone book or view phone book.",
        answer:
          "Make sure the contacts app is updated and check storage permissions.",
      },
      {
        question: "Copy contacts to another phone.",
        answer:
          "You can copy contacts via Bluetooth or sync them to your Google account.",
      },
    ],
  },
  {
    category: "Charging",
    questions: [
      {
        question: "How to set music as a ringtone?",
        answer:
          "To set music as a ringtone, go to settings, sound, and select ringtone.",
      },
      {
        question: "Cannot make a call after activating data.",
        answer: `1. IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.
        2. Make sure the SIM account has enough balance and the place has a good signal.
        3. Check whether the phone is on 4G only mode, if yes, change to other modes.
        4. Try to reset factory settings, but remember to take data back up first.
        5. Visit the nearest customer service Centre for further check.`,
      },
      {
        question: "Cannot add new contacts to phone book or view phone book.",
        answer:
          "Make sure the contacts app is updated and check storage permissions.",
      },
      {
        question: "Copy contacts to another phone.",
        answer:
          "You can copy contacts via Bluetooth or sync them to your Google account.",
      },
    ],
  },
  {
    category: "Internet & Network",
    questions: [
      {
        question: "How to set music as a ringtone?",
        answer:
          "To set music as a ringtone, go to settings, sound, and select ringtone.",
      },
      {
        question: "Cannot make a call after activating data.",
        answer: `1. IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.
        2. Make sure the SIM account has enough balance and the place has a good signal.
        3. Check whether the phone is on 4G only mode, if yes, change to other modes.
        4. Try to reset factory settings, but remember to take data back up first.
        5. Visit the nearest customer service Centre for further check.`,
      },
      {
        question: "Cannot add new contacts to phone book or view phone book.",
        answer:
          "Make sure the contacts app is updated and check storage permissions.",
      },
      {
        question: "Copy contacts to another phone.",
        answer:
          "You can copy contacts via Bluetooth or sync them to your Google account.",
      },
    ],
  },
];

const FreqAsked = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Calls & Contacts");

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="max-w-6xl mx-auto my-14 p-4">
      <h2 className="text-6xl my-5 font-bold text-center mb-6">
        Frequently Asked Questions (FAQs)
      </h2>

      {/* Categories */}
      <div className="flex justify-center gap-6 my-12">
        {faqData.map((category, idx) => (
          <button
            key={idx}
            onClick={() => handleCategoryClick(category.category)}
            className={`px-6 py-3 rounded-full font-semibold ${
              activeCategory === category.category
                ? "bg-black text-white"
                : "bg-white text-black border border-black"
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Questions and Answers */}
      {faqData
        .find((cat) => cat.category === activeCategory)
        ?.questions.map((item, index) => (
          <div key={index} className=" border-t-2 border-gray-300">
            <button
              className="flex justify-between items-center w-full p-4  hover:bg-gray-100 rounded-t-md"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-xl font-">{item.question}</span>
              {openQuestion === index ? (
                <FiChevronUp className="text-lg" />
              ) : (
                <FiChevronDown className="text-lg" />
              )}
            </button>
            {openQuestion === index && (
              <div className="p-4 bg-white border-t border-gray-200 text-sm text-gray-600">
                <p className="whitespace-pre-line text-lg">{item.answer}</p>
              </div>
            )}
          </div>
        ))}

<div className="text-center mt-14 mx-24 flex justify-center items-center">
  <button className="flex items-center text-xl gap-2 text-black font-bold">
    Read More <FiChevronDown size={30} className="text-red-500" />
  </button>
</div>

    </div>
  );
};

export default FreqAsked;
