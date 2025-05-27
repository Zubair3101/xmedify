
import "./FAQs.css";

import doctorImg from "../assets/faq.png";
import heartIcon from "../assets/hearthand.png";

const FAQs = () => { 
  return (
    <div>
      <div className="header">
        <p className="faq-subtitle">Get Your Answer</p>
        <h2 className="faq-title">Frequently Asked Questions</h2>
      </div>
      <div className="faq-container">
        {/* Left Section */}
        <div className="faq-left">
          <div className="image-wrapper">
            <img
              src={doctorImg}
              alt="Doctor with patient"
              className="main-img"
            />
            <img src={heartIcon} alt="Heart icon" className="heart-icon" />
          </div>
        </div>

        {/* Right Section */}
        <div className="faq-right">
  <div className="accordion custom-accordion" id="faqAccordion">
    {[
      {
        id: 1,
        question: "Why choose our medical for your family?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex.",
        isOpen: true,
      },
      {
        id: 2,
        question: "Why we are different from others?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        question: "Trusted & experience senior care & love",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 4,
        question: "How to get appointment for emergency cases?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ].map((item) => (
      <div className="accordion-item border-0" key={item.id}>
        <h2 className="accordion-header" id={`heading${item.id}`}>
          <button
            className={`accordion-button ${!item.isOpen ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${item.id}`}
            aria-expanded={item.isOpen ? "true" : "false"}
            aria-controls={`collapse${item.id}`}
          >
            {item.question}
            <span className="icon-toggle ms-auto">
              <span className="plus">+</span>
              <span className="minus">✕</span>
            </span>
          </button>
        </h2>
        <div
          id={`collapse${item.id}`}
          className={`accordion-collapse collapse ${item.isOpen ? "show" : ""}`}
          aria-labelledby={`heading${item.id}`}
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">{item.answer}</div>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default FAQs;
