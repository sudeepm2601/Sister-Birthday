import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Gift, Heart } from "lucide-react";
import "./FinalSurprise.css";

function FinalSurprise() {

  const [opened, setOpened] = useState(false);

  const openGift = () => {
    setOpened(true);

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="final-container">

      <h1>A Little Something For You ❤️</h1>

      <AnimatePresence mode="wait">

        {!opened ? (

          <motion.div
            className="gift-box"
            key="closed"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, rotate: 20 }}
            onClick={openGift}
            whileHover={{ scale: 1.1 }}
          >
            <Gift size={110} color="#ff9fc5" />

            <p>Click to Open Your Gift!</p>
          </motion.div>

        ) : (

          <motion.div
            className="final-message"
            key="opened"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >

            <Heart
              size={65}
              fill="#ff6b9d"
              color="#ff6b9d"
            />

            <h2>Dear Akshatha ❤️</h2>

            <p>
              No matter how many birthdays pass,
              I will always wish to see you smiling.

              <br /><br />

              May your journey ahead be filled with
              happiness, success, love and beautiful memories.

              <br /><br />

              You deserve all the wonderful things
              life has to offer.

              <br /><br />

              
              You're free from me now.

              <br /><br />

              The person who keeps asking you for everything, depending on you for little things and troubling you with constant questions and requests — you don't have to deal with all that anymore.

              <br /><br />
               
               I thought about what you might actually like as a birthday gift. And I felt that perhaps this freedom would mean more to you than anything I could buy.
              <br /><br />

              So, consider this my gift to you. No expectations, no requests and no more unnecessary trouble from my side.
              

              <br /><br />
              I genuinely hope this gives you the space, peace and freedom you deserve.
              <br /><br />
              You deserve to live your life on your own terms.
              <br /><br />

              Happy Belated Birthday, Akshatha! 🎂

              <br /><br />

              Forever your loving brother ❤️
            </p>

            <h3>With Love, Always ❤️</h3>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}

export default FinalSurprise;