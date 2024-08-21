import React, { useState } from "react";
import "../Styles/frequently.css";

const faqData = [
  {
    question: "Are these real Twitter comments?",
    answer:
      "Yes, these are real Twitter comments. However, the comments may not always engage deeply with your content.",
  },
  {
    question: "What are Twitter comments?",
    answer:
      "Twitter comments, often referred to as replies, are user-generated responses to tweets. They allow users to interact with tweets, contribute to discussions, and engage with a broader audience. Comments can include text, emojis, images, GIFs, and links, and are a key part of how conversations and trends evolve on Twitter.",
  },
  {
    question: "Why choose us for Twitter comments?",
    answer:
      "We offer 24/7 customer support and ensure the highest quality in Twitter comments. Our service provides fast delivery, helping you enhance engagement on your tweets quickly.",
  },
  {
    question: "How fast is the delivery?",
    answer:
      "We process all orders instantly, so your Twitter comments will appear on your tweets as soon as possible.",
  },
  {
    question: "How can people get more comments on Twitter?",
    answer:
      "You can buy Twitter comments from us, which are delivered instantly and can help increase the engagement on your tweets.",
  },
  {
    question:
      "How long does it take for the comments to appear after purchase?",
    answer:
      "We typically deliver Twitter comments within a few minutes after purchase. In rare cases, due to technical issues or high demand, it may take up to 12-24 hours. Our customer support team is always available to assist with any concerns regarding the delivery.",
  },
  {
    question: "Is it legal to buy Twitter comments?",
    answer:
      "Yes, it is safe and legal to buy Twitter comments from us. The comments come from real profiles, providing engagement similar to organic activity.",
  },
];

const Frequentlytwittercomments = () => {
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

export default Frequentlytwittercomments;
