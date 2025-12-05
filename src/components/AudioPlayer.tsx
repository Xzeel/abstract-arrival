import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.7;
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/audio/bgm.mp3" loop />
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-foreground hover:bg-primary/30 transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </>
  );
};

export default AudioPlayer;
