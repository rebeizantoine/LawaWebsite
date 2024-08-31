import React, { useState } from "react";
import "../Styles/frequently.css";

const faqData = [
  {
    question: "Is it really possible to buy Twitch followers/views?",
    answer:
      " Yes, absolutely! SocialPlug provides genuine Twitch followers at a very affordable price.",
  },
  {
    question: "How many followers/views should I buy?",
    answer:
      "It depends on your budget and needs. If you want to test it out, we suggest you buy a few thousand followers at first. If you are satisfied with our service, then you can place a much bigger order.",
  },
  {
    question: "Will Twitter (X) ban my account for buying likes?",
    answer:
      "No. Buying Twitter (X) likes is safe and will not affect your account negatively in any possible way. Just make sure you work with a reliable business whenever you buy Twitter (X) likes.",
  },
  {
    question: "When will I receive the followers after making payments?",
    answer:
      "You will receive the followers on your Twitch channel a few minutes after making payments.",
  },
  {
    question: "Are the followers real people?",
    answer:
      "Yes, we provide 100% real followers. The followers we will provide will not interact with your video, but we guarantee that they are real..",
  },
  {
    question: "How Does this Benefit My Twitch?",
    answer:
      " the goal is to build social proof, not an actual Twitch audience.",
  },
  {
    question: "Do I need to share my login details?",
    answer:
      "No, we don’t need your login details to deliver the followers, we just need your channel link. ",
  },
];

const Frequentlytwitch = () => {
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

export default Frequentlytwitch;
