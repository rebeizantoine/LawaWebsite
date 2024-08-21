import React, { useState } from "react";
import "../Styles/frequently.css";

const faqData = [
  {
    question: "How long does it take to get the likes to my Tweet?",
    answer:
      "We process Twitter (X) like orders automatically, meaning your likes will start to appear right after you place an order. In rare cases we might need to process your order manually within 12 hours.",
  },
  {
    question: "Are these real Twitter Likes?",
    answer:
      "These are real accounts. However these users will not engage with Your account in any other way.",
  },
  {
    question: "Will Twitter (X) ban my account for buying likes?",
    answer:
      "No. Buying Twitter (X) likes is safe and will not affect your account negatively in any possible way. Just make sure you work with a reliable business whenever you buy Twitter (X) likes.",
  },
  {
    question: "How Fast is the Delivery?",
    answer: "We process all orders Instantly.",
  },
  {
    question: "How do TikTok views affect the Twitter algorithm?",
    answer:
      "Buying Twitter Likes will help you to get on top of the most popular hashtags and therefore your posts reach to the organic audience.",
  },
  {
    question: "How Does this Benefit My Twitter?",
    answer:
      "These are real likes, however, the goal is to build social proof, not an actual Twitter audience.",
  },
  {
    question: "Is It Legal to Buy Twitter Likes?",
    answer:
      "Yes it is safe. Likes come from real profiles and are the same as organic engagement.",
  },
];

const Frequentlytwitter = () => {
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

export default Frequentlytwitter;
