import React, { useState } from "react";
import "../Styles/frequently.css";

const faqData = [
  {
    question: "Are these real reel views??",
    answer:
      "These are real views, however, the goal is to build social proof, not an actual Instagram audience.",
  },
  {
    question: "What are Instagram Reel Views?",
    answer:
      "Likes are a social media metric that is used to measure the success of Instagram content.",
  },
  {
    question: "Why choose Us?",
    answer:
      "We have a 24/7 customer support and is always here to answer to your burning questions. In addition, we provide the best quality when it comes to Instagram views.",
  },
  {
    question: "How Fast is the Delivery?",
    answer: "We process all orders Instantly.",
  },
  {
    question: "How Can People Get More views on Instagram Reels?",
    answer:
      "By buying Instagram reel views which are instant and are guaranteed to stay.",
  },
  {
    question: "How Does this Benefit My Instagram?",
    answer:
      "These are real likes, however, the goal is to build social proof, not an actual Instagram audience.",
  },
  {
    question: "Is It Legal to Buy Instagram Views?",
    answer:
      "Yes it is safe. Likes come from real profiles and are the same as organic engagement.",
  },
];

const Frequentlyinstaview = () => {
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

export default Frequentlyinstaview;
