import React from "react";
import Carousel from "./Carousel";
import Trustedbycompanies from "./components/Trustedbycompanies";
import Initiative from "./components/Initiative";
import { useNavigate } from 'react-router-dom';
import "./App.css";

const images = [
  "/images/WhatsApp Image 2024-12-30 at 13.29.27_4762fabc.jpg",
  "/images/WhatsApp Image 2024-12-30 at 13.29.27_56f9d60c.jpg",
  "/images/dupot.jpg",
  "/images/WhatsApp Image 2024-12-30 at 21.59.19_72775a83.jpg",
];

const App = () => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    window.open('/Cohort', '_blank');
  };
  return (
    <div className="Container">
      <div className="row">
        <Trustedbycompanies />
        <Carousel
          images={images}
          displayTime={1000}
          transitionTime={100}
          rewindSpeed={70}
        />
      </div>
      <Initiative />
      <div className="learn-more">
        <button onClick={handleLearnMore}>Learn More</button>
      </div>
    </div>
  );
};

export default App;