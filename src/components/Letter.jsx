import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import "./Letter.css";

function Letter({ onNext }) {
  return (
    <div className="letter-container">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <h1 className="letter-heading">
          A Letter From Your Brother 💌
        </h1>

        <div className="letter-paper">

          <h2>Dear Akshatha,</h2>

          <p>
            First of all, please accept my sincere apologies
            for wishing you a little late.
          </p>

          <p>
            I know your special day was on November 3rd.
            Although my wishes are arriving a little late,
            my love, respect and affection for you will never
            be limited to a particular day.
          </p>

          <p>
            You are someone truly special in my life.
            I genuinely wish to see you happy,
            successful and fulfilled in everything you do.
          </p>

          <p>
            May this new year of your life bring you endless
            happiness, good health, peace, confidence and
            countless opportunities. May all your dreams
            come true.
          </p>

          <p>
            Thank you for being a wonderful sister.
            No matter how much we grow or how life changes,
            the bond we share will always remain special.
          </p>

          <p>
            Once again, a very Happy Belated Birthday!
          </p>

          <div className="letter-signature">
            With lots of love and respect,
            <br />
            Your Brother ❤️
          </div>

        </div>

        <div style={{ textAlign: "center" }}>
          <button
            className="letter-next"
            onClick={onNext}
          >
            <Gift size={18} />
            One Last Surprise
          </button>
        </div>

      </motion.div>

    </div>
  );
}

export default Letter;