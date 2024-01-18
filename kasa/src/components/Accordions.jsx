import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export function Accordion({title, children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={toggleAccordion}>
        <h3 className="accordion__title">{title}</h3>
        <span className="accordion__icon">{isOpen ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}</span>
      </div>
      <div className={`accordion__content ${isOpen ? 'is-open' : ''}`}>{children}</div>
    </div>
  );
}