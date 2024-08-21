import React, { useState } from "react";
import "../Styles/frequently.css";

const faqData = [
  {
    question: "Are these real followers?",
    answer:
      "These are real followers with Twitter engagement history. However these followers will not interact with your posts.",
  },
  {
    question: "Are these real Twitter Followers?",
    answer:
      "These are real accounts. However these users will not engage with Your account in any other way.",
  },
  {
    question: "Will Twitter (X) ban my account for buying followers?",
    answer:
      "No. Buying Twitter (X) followers is safe and will not affect your account negatively in any possible way. Just make sure you work with a reliable business whenever you buy Twitter (X) followers.",
  },
  {
    question: "How Fast is the Delivery?",
    answer: "We process all orders Instantly.",
  },
  {
    question: "How long does it take to get the followers to my Twitter page?",
    answer:
      "We process follower orders automatically, meaning your followers will start to appear right after you place an order. In rare cases we might need to process your order manually within 12 hours.",
  },
  {
    question: "How Does this Benefit My Twitter?",
    answer:
      "These are real Followers, however, the goal is to build social proof, not an actual Twitter audience.",
  },
  {
    question: "Is It Legal to Buy Twitter Followers?",
    answer:
      "Yes it is safe. Followers come from real profiles and are the same as organic engagement.",
  },
];

const Frequentlytwitterfollower = () => {
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

export default Frequentlytwitterfollower;
