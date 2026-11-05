import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";
import "./MusicPlayer.css";

function MusicPlayer() {

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMusic = async () => {

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Music playback failed:", error);
      }
    }
  };

  return (
    <div className="music-player">

      <audio
        ref={audioRef}
        src="/music/birthday-song.mp3"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="music-icon">
        <Music size={22} />
      </div>

      <div className="music-info">
        <span>Now Playing</span>
        <strong>Birthday Memories ❤️</strong>
      </div>

      <button
        className="music-control"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>

      <div className="volume-control">

        {volume === 0 ? (
          <VolumeX size={18} />
        ) : (
          <Volume2 size={18} />
        )}

        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Music volume"
        />

      </div>

    </div>
  );
}

export default MusicPlayer;