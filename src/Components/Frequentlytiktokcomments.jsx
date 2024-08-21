import React, { useState } from "react";
import "../Styles/frequently.css";

const faqData = [
  {
    question: "Are these real TikTok comments?",
    answer:
      "Yes, these are real TikTok comments. However, the comments may not always interact with your content in meaningful ways.",
  },
  {
    question: "What are TikTok comments?",
    answer:
      "TikTok comments are user-generated responses that appear below a TikTok video. They allow users to interact with the content and with each other, fostering community engagement. Comments can include text, emojis, and sometimes even hashtags or mentions. For creators and businesses, comments can be a valuable way to gauge audience reactions and build relationships with followers.",
  },
  {
    question: "Why choose us for TikTok comments?",
    answer:
      "We offer 24/7 customer support and ensure the highest quality in TikTok comments. Our service provides quick delivery, helping you boost engagement on your videos instantly.",
  },
  {
    question: "How fast is the delivery?",
    answer:
      "We process all orders instantly, so your TikTok comments will appear on your videos as soon as possible.",
  },
  {
    question: "How can people get more comments on TikTok?",
    answer:
      "You can buy TikTok comments from us, which are delivered instantly and can help increase the engagement on your posts.",
  },
  {
    question:
      "How long does it take for the comments to appear after purchase?",
    answer:
      "We typically deliver TikTok comments within a few minutes after purchase. In some rare cases, due to technical issues or high demand, it may take up to 12-24 hours. Our customer support team is always available to assist with any concerns regarding the delivery.",
  },
  {
    question: "Is it legal to buy TikTok comments?",
    answer:
      "Yes, it is safe and legal to buy TikTok comments from us. The comments come from real profiles, providing engagement that is similar to organic activity.",
  },
];

const Frequentlytiktokcomments = () => {
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

export default Frequentlytiktokcomments;
