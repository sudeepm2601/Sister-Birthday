import React from "react";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import "./Story.css";

const stories = [
  {
    year: "Childhood",
    title: "Where It All Began 👶",
    description:
      "From our childhood days to growing up together, every little moment became a beautiful memory.",
    image: "/images/photo2.jpg"
  },
  {
    year: "Growing Up",
    title: "Partners in Crime 😂",
    description:
      "The silly fights, endless teasing, little arguments and laughter. Life was never boring with you!",
    image: "/images/photo6.jpg"
  },
  {
    year: "Special Moments",
    title: "Memories That Matter ❤️",
    description:
      "Through every happy moment and every difficult day, you have always been someone special.",
    image: "/images/photo5.jpg"
  },
  {
    year: "Forever",
    title: "My Favourite Sister 💕",
    description:
      "No matter where life takes us, you'll always have a special place in my heart.",
    image: "/images/photo3.jpg"
  }
];

function Story({ onNext }) {
  return (
    <div className="story-container">

      <div className="story-header">
        <Heart fill="#ff6b9d" color="#ff6b9d" size={35} />

        <h1>Our Beautiful Journey</h1>

        <p>
          A thousand memories, countless smiles,
          and one unbreakable bond.
        </p>
      </div>

      <div className="timeline">

        {stories.map((story, index) => (

          <motion.div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="timeline-card">

              <span className="story-year">
                <Star size={15} /> {story.year}
              </span>

              <img src={story.image} alt={story.title} />

              <h2>{story.title}</h2>

              <p>{story.description}</p>

            </div>

          </motion.div>

        ))}

      </div>

      <div className="story-ending">
        <h2>And Our Story Continues... ❤️</h2>

        <button onClick={onNext}>
          Read My Special Letter 💌
        </button>
      </div>

    </div>
  );
}

export default Story;