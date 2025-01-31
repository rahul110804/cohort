import React from 'react';
import './CohortCard.css'; // Updated file name for clarity

const CohortCard = (props) => {
  return (
    <div className="Cohort-Card">
      <img className="Cohort-Card-image" src={props.img} alt={props.title} />
      <div className="Cohort-Card-overlay">
        <h2 className="Cohort-Card-title">{props.title}</h2>
        <p className="Cohort-Card-description">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default CohortCard;
