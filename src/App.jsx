
import Gallery from "./components/Gallery";
import Welcome from "./components/Welcome";
import Birthday from "./components/Birthday";
import Story from "./components/Story";
import Letter from "./components/Letter";
import FinalSurprise from "./components/FinalSurprise";
import MusicPlayer from "./components/MusicPlayer";
import React, { useState, useEffect } from "react";

function App() {

  const [page, setPage] = useState("welcome");
  useEffect(() => {

  // Add an initial browser history entry
  window.history.pushState(null, "", window.location.href);

  const handleBackButton = () => {

    // Prevent leaving the birthday website
    window.history.pushState(null, "", window.location.href);

  };

  window.addEventListener("popstate", handleBackButton);

  return () => {
    window.removeEventListener("popstate", handleBackButton);
  };

  }, []);

  return (
    <div>

      {page === "welcome" && (
        <Welcome onStart={() => setPage("birthday")} />
      )}

      {page === "birthday" && (
        <Birthday onNext={() => setPage("memories")} />
      )}

      {page === "memories" && (
       <Gallery onNext={() => setPage("story")} />
      )}

      {page === "story" && (
  <Story onNext={() => setPage("letter")} />
)}

{page === "letter" && (
  <Letter onNext={() => setPage("final")} />
)}

{page === "final" && (
  <FinalSurprise />
)}
    
    <MusicPlayer />

    </div>
  );
}

export default App;