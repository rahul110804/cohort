import React, { useState } from "react";
import "./Initiative.css";
import Flashcard from "./flashcard";
import details from "./Details"; // Import the details array

function Initiative() {
    const [cards, setCards] = useState(details.map((_, index) => index)); // Track card order based on details

    const handleCardClick = (index) => {
        if (index !== 1) {
            const newCards = [...cards];
            // Swap the clicked card with the center card (index 1)
            [newCards[1], newCards[index]] = [newCards[index], newCards[1]];
            setCards(newCards);
        }
    };

    return (
        <div className="container">
            <h1>Initiatives</h1>
            <div className="flash-card-container">
                {cards.map((cardIndex, index) => (
                    <Flashcard
                        key={details[cardIndex].id} // Use unique ID from details
                        data={details[cardIndex]} // Pass the details of the card
                        position={index} // Position of the card
                        isCenter={index === 1} // Check if it's the center card
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Initiative;
