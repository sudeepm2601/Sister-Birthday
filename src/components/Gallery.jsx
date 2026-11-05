import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";
import "./Gallery.css";

const memories = [
  {
    image: "/images/photo1.jpg",
    caption: "A beautiful smile ❤️"
  },
  {
    image: "/images/photo2.jpg",
    caption: "Forever my favourite person"
  },
  {
    image: "/images/photo3.jpg",
    caption: "Little moments, big memories"
  },
  {
    image: "/images/photo4.jpg",
    caption: "Happiness looks like this"
  },
  {
    image: "/images/photo5.jpg",
    caption: "My forever partner in crime"
  },
  {
    image: "/images/photo6.jpg",
    caption: "Memories I'll always cherish"
  }
];

function Gallery({ onNext }) {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="gallery-heading"
      >
        <Heart fill="#ff6b9d" color="#ff6b9d" size={35} />

        <h1>Little Moments,</h1>
        <h1 className="gallery-highlight">
          Forever Memories ❤️
        </h1>

        <p>
          Every picture tells a story.
          Here are some moments worth remembering.
        </p>
      </motion.div>

      <div className="gallery-grid">

        {memories.map((memory, index) => (

          <motion.div
            className="memory-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.04 }}
            onClick={() => setSelectedImage(memory)}
          >

            <img src={memory.image} alt={memory.caption} />

            <div className="memory-caption">
              {memory.caption}
            </div>

          </motion.div>

        ))}

      </div>

      <button className="gallery-next" onClick={onNext}>
        Continue Our Story ❤️
      </button>

      <AnimatePresence>
        {selectedImage && (

          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >

            <button className="close-modal">
              <X size={30} />
            </button>

            <motion.img
              src={selectedImage.image}
              alt={selectedImage.caption}
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            />

            <p>{selectedImage.caption}</p>

          </motion.div>

        )}
      </AnimatePresence>

    </div>
  );
}

export default Gallery;