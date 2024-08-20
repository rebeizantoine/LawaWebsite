import React, { useState } from "react";
import "../Styles/frequently.css";

const faqData = [
  {
    question: "Are these real followers?",
    answer:
      "These are real followers. However, these followers may not interact with your posts.",
  },
  {
    question: "How can I raise my Instagram page brand awareness?",
    answer:
      "Buying Instagram followers is just a tool to help you reach your goals 10 times faster. To raise brand awareness, try running Instagram ads and working with Influencers.",
  },
  {
    question: "Could my account be banned for buying followers?",
    answer:
      "No, our accounts use the latest bot-detection systems to prevent your Instagram account from getting banned.",
  },
  {
    question: "How Fast is the Delivery?",
    answer: "We process all orders Instantly.",
  },
  {
    question: "Why should I buy Instagram followers?",
    answer:
      "Having lots of Instagram followers can easily grow your sales or just give you a higher social status.",
  },
  {
    question: "How Does this Benefit My Instagram?",
    answer:
      "By showcasing a large amount of followers on your Instagram, you can get more brand deals, build a larger community and snowball your social media growth.",
  },
  {
    question: "How to buy Followers on Instagram?",
    answer:
      "It's as easy as buying anything online. Be cautious of who you work with when buying Instagram followers. SocialPlug has proven to be the best site to buy Instagram followers.",
  },
];

const Frequently = () => {
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

export default Frequently;
