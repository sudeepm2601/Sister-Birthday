import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Camera } from "lucide-react";
import "./Birthday.css";

function Birthday({ onNext }) {

  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 5,
        spread: 70,
        origin: { y: 0.6 }
      });

    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="birthday-container">

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="birthday-content"
      >

        <motion.div
          className="cake"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎂
        </motion.div>

        <h1>
          Belated Happy Birthday
          <br />
          <span>Akshatha!</span>
        </h1>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Heart fill="#ff6b9d" color="#ff6b9d" size={35} />
        </motion.div>

        <p className="birthday-message">
          
          <br />
          May your life be filled with endless happiness,
          beautiful memories and wonderful adventures.
        </p>

        <p className="birthday-date">
          November 3rd 🎀
        </p>

        <button className="memory-button" onClick={onNext}>
          <Camera size={20} />
          Explore Our Memories
        </button>

      </motion.div>

    </div>
  );
}

export default Birthday;