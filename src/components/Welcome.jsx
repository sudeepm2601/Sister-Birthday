import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import "./Welcome.css";

function Welcome({ onStart }) {
  return (
    <div className="welcome-container">

      <motion.div
        className="welcome-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart className="main-heart" size={55} fill="#ff6b9d" />
        </motion.div>

        <p className="welcome-small">
          ✨ A LITTLE SURPRISE FOR SOMEONE SPECIAL ✨
        </p>

        <h1>
          Hey Akshatha!
          <br />
          <span>Something Special Awaits You</span>
        </h1>

        <p className="welcome-description">
          love, memories,
          happiness and countless smiles.
        </p>

        <motion.button
          className="surprise-button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
        >
          <Sparkles size={20} />
          Open Your Surprise
          <Heart size={18} />
        </motion.button>

        <p className="welcome-footer">
          Made with ❤️ by your brother
        </p>

      </motion.div>
    </div>
  );
}

export default Welcome;