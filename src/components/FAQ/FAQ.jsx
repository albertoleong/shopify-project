import './FAQ.scss';
import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqData = [
    {
      question: 'How do I track my order?',
      answer: 'As soon as tracking is available for your order, you will receive an email with a link to track your package.',
    },
    {
      question: 'Where do I find my tracking information?',
      answer: 'A confirmation number and tracking link will be sent via email after you place an order. However, you can always send us an email if you need any status updates!',
    },
    {
      question: 'What do I do if my package was delivered to the wrong address?',
      answer: 'We are not responsible for an incorrect address. However, for any issues of wrong delivery within two hours after placing your order, we will be happy to help! Simply send us an email to support@support.com',
    },
    {
      question: 'Do I have to sign for my package?',
      answer: 'You do not need to sign for your delivery, as it is delivered by your local post office',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard orders typically take 4-7 business days from when they were placed to be delivered (depending on where you are located).',
    },
    {
      question: 'If I order on the weekend, do you ship on the weekend?',
      answer: 'We don’t ship on weekends. Our warehouse is closed on Saturday and Sunday. Any orders placed after Friday may not be shipped out until Monday.',
    },
  ];
  const toggleActiveIndex = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq__item">
          <div
            className={`faq__question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleActiveIndex(index)}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="faq__answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Faq;