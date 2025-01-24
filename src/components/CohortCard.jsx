import React from 'react';
import './CohortCard.css'; // Updated file name for clarity

const CohortCard = () => {
  return (
    <div className="Cohort-Card">
      <img 
        src="https://media.licdn.com/dms/image/v2/C4E03AQGYWxFikxNp4Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1631604743405?e=2147483647&v=beta&t=9lsiPwrg8Yv3LFJXdlWK1iNDw3l9b4en2nenFANJraM" 
        alt="Techie" 
        className="Cohort-Card-image" 
      />
      <div className="Cohort-Card-overlay">
        <h2 className="Cohort-Card-title">Techie</h2>
        <p className="Cohort-Card-description">
          Ready to build groundbreaking products? Leverage your coding genius and turn prototypes into real-world solutions.
        </p>
      </div>
    </div>
  );
};

export default CohortCard;
