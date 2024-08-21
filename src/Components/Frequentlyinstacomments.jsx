import React, { useState } from "react";
import "../Styles/frequently.css";

const faqData = [
  {
    question: "Are these real comments?",
    answer:
      "These are real followers. However these followers may not interact with your posts.",
  },
  {
    question: "What are Instagram comments?",
    answer:
      "Instagram comments are user-generated responses that appear below an Instagram post. They are a crucial component of the Instagram experience since they let users engage with one another and create communities based on common interests. Comments can be written in text, emojis, images, or videos, and can be viewed by other users. Businesses and individuals may use them to solicit feedback on their offerings or content, reply to consumer questions, and cultivate connections with their followers.",
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
    question:
      "How long does it take for the comments to appear on my post after purchasing them?",
    answer:
      "We offer fast and reliable delivery of Instagram comments, usually within just a few minutes after making the purchase. In most cases, the comments will appear on your post instantly, but in rare cases, the delivery can take up to 12-24 hours due to technical issues or high demand. If you have any concerns about the delivery of your comments or any other aspect of our service, our customer support team is available to help. We pride ourselves on providing excellent customer service and are committed to ensuring that our customers are completely satisfied with their purchase.",
  },
  {
    question: "Is It Legal to Buy Instagram comments?",
    answer:
      "Yes it is safe. comments come from real profiles and are the same as organic engagement.",
  },
];

const Frequentlyinstacomments = () => {
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

export default Frequentlyinstacomments;
