import React, { useState, useEffect } from "react";


const ImageSlider = ({ images = [], displayTime = 2000, transitionTime = 1000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (images.length === 0) return;

        const timer = setTimeout(() => {
            setIsAnimating(true); // Start the transition
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsAnimating(false); // Reset animation state after transition
            }, transitionTime);
        }, displayTime);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [currentIndex, images.length, displayTime, transitionTime]);

    return (
        <div className="slider-container">
            <div
                className={`slider ${isAnimating ? "animate" : ""}`}
                style={{
                    transform: `translateY(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <div className="slider-image" key={index}>
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
