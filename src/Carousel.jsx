import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images = [], displayTime = 2000, transitionTime = 300, rewindSpeed = 70 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRewinding, setIsRewinding] = useState(false);

    useEffect(() => {
        if (isRewinding) {
            const rewindTimer = setTimeout(() => {
                if (currentIndex > 0) {
                    setCurrentIndex((prevIndex) => prevIndex - 1);
                } else {
                    setIsRewinding(false);
                }
            }, rewindSpeed);
            return () => clearTimeout(rewindTimer);
        }

        const timer = setTimeout(() => {
            if (currentIndex === images.length - 1) {
                setIsRewinding(true);
            } else {
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }
        }, displayTime);

        return () => clearTimeout(timer);
    }, [currentIndex, displayTime, images.length, isRewinding, rewindSpeed]);

    return (
        <div className="carousel-container">
            <AnimatePresence>
                {images.map((image, index) =>
                    index === currentIndex ? (
                        <motion.div
                            key={index}
                            className="carousel-slide"
                            initial={{ y: isRewinding ? "-100%" : "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: isRewinding ? "100%" : "-100%" }}
                            transition={{ duration: transitionTime / 1000 }}
                        >
                            <img src={image} alt={`Slide ${index}`} className="carousel-image" />
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>
        </div>
    );
};

export default Carousel;
