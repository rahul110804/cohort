import React from "react";
import "./flashcard.css";

const Flashcard = ({ data, position, isCenter, onClick }) => {
  return (
    <div
      className={`flashcard position-${position} ${isCenter ? "center" : ""}`}
      onClick={onClick}
    >
      <div className="flashcard-content">
        <h1 className="flashcard-title">{data.heading}</h1>
        <p className="flashcard-text">{data.description}</p>
      </div>
    </div>
  );
};

export default Flashcard;
