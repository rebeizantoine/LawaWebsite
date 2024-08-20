import React, { useState } from "react";
import "../Styles/frequently.css";

const faqData = [
  {
    question: "What are TikTok Views?",
    answer:
      "TikTok counts a view on the first second once someone sees Your TikTok. Simply put TikTok views are an indication that show how many people have seen your Tik Tok post.",
  },
  {
    question: "Are these real TikTok Views?",
    answer:
      "These are real accounts. However these users will not engage with Your account in any other way.",
  },
  {
    question: "Can you buy TikTok views?",
    answer:
      "Yes, buying TikTok views is as easy as buying anything from the internet.",
  },
  {
    question: "How Fast is the Delivery?",
    answer: "We process all orders Instantly.",
  },
  {
    question: "How do TikTok views affect the TikTok algorithm?",
    answer:
      "Buying TikTok Views will help you to get on top of the most popular hashtags and therefore your posts reach to the organic audience.",
  },
  {
    question: "How Does this Benefit My Tiktok?",
    answer:
      "These are real likes, however, the goal is to build social proof, not an actual Tiktok audience.",
  },
  {
    question: "Is It Legal to Buy tiktok views?",
    answer:
      "Yes it is safe. Likes come from real profiles and are the same as organic engagement.",
  },
];

const Frequentlytiktok = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="content-container">
        <h2 className="h2 h2-centre">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqData.map((faq, index) => (
            <div key={index} className="accordion-item-wrapper">
              <div
                className={`accordion-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion-trigger">
                  <div className="faq-item-title">{faq.question}</div>
                  <div className="accordion-arrow-wrap">
                    <div
                      className={`accordion-arrow ${
                        activeIndex === index ? "open" : ""
                      }`}
                    >
                      <span className="arrow-line _1"></span>
                      <span className="arrow-line _2"></span>
                    </div>
                  </div>
                </div>
                <div
                  className={`accordion-content ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  <p className="faq-paragraph">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frequentlytiktok;
