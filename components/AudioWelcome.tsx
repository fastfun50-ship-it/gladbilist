"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Play, Pause, X, Volume2, VolumeX } from "lucide-react";

export function AudioWelcome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted for better auto-play chance
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState<string>(siteConfig.audio.defaultTrackId);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioConfig = siteConfig.audio;
  const currentTrack = audioConfig.tracks.find(t => t.id === currentTrackId) || audioConfig.tracks[0];

  // Load / switch track
  const loadTrack = (trackId: string, autoPlayAfter = false) => {
    const track = audioConfig.tracks.find(t => t.id === trackId);
    if (!track || !audioRef.current) return;

    const audio = audioRef.current;
    const wasPlaying = isPlaying;

    audio.pause();
    setIsPlaying(false);

    audio.src = track.src;
    audio.load();

    audio.onerror = (e) => {
      console.error('Audio load error for track', trackId, track.src, e);
    };

    const playIfNeeded = () => {
      if (autoPlayAfter || wasPlaying) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error('Play failed:', err);
          });
      }
    };

    // Wait for metadata so it can play smoothly
    audio.onloadedmetadata = () => {
      playIfNeeded();
    };

    // Fallback
    setTimeout(playIfNeeded, 400);
  };

  const switchTrack = (trackId: string) => {
    setCurrentTrackId(trackId);
    if (typeof window !== 'undefined') {
      localStorage.setItem('gladbilist-audio-track', trackId);
    }
    loadTrack(trackId, true); // switch and play
  };

  useEffect(() => {
    // Start with default track
    const defaultTrack = audioConfig.tracks.find(t => t.id === audioConfig.defaultTrackId) || audioConfig.tracks[0];
    const audio = new Audio(defaultTrack.src);
    audio.volume = 0.5;
    audio.muted = true; // Muted autoplay is allowed in most browsers
    audio.preload = "auto";
    audioRef.current = audio;

    audio.onerror = (e) => {
      console.error('Audio load/play error for', defaultTrack.src, e);
    };

    setCurrentTrackId(defaultTrack.id);

    const attemptAutoPlay = () => {
      const tryPlay = () => {
        audio.play().then(() => {
          setIsPlaying(true);
          setShowPlayer(true);
        }).catch((err) => {
          console.log("Autoplay blocked (even muted). Showing player.");
          setShowPlayer(true);
          console.error('Play failed:', err);
        });
      };

      if (audio.readyState >= 2) { // HAVE_CURRENT_DATA or more
        tryPlay();
      } else {
        audio.addEventListener('loadeddata', tryPlay, { once: true });
        audio.addEventListener('canplay', tryPlay, { once: true });
      }
    };

    // Show the UI immediately so user can interact
    setShowPlayer(true);

    // Restore saved preference from localStorage (after hydration to prevent mismatch)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gladbilist-audio-track');
      if (saved && audioConfig.tracks.some(t => t.id === saved) && saved !== currentTrackId) {
        setCurrentTrackId(saved);
        const track = audioConfig.tracks.find(t => t.id === saved);
        if (track && audioRef.current) {
          audioRef.current.src = track.src;
          audioRef.current.load();
        }
      }
    }

    const timer = setTimeout(() => {
      attemptAutoPlay();
    }, 1200);

    // On first user interaction anywhere, try to unmute for better "auto" experience
    const handleFirstInteraction = () => {
      const a = audioRef.current;
      if (a && a.muted) {
        a.muted = false;
        setIsMuted(false);
        a.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioConfig.defaultTrackId, audioConfig.tracks]);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      // Unmute and ensure playing
      audio.muted = false;
      setIsMuted(false);
      if (!isPlaying) {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // When playing manually, ensure sound is on
      if (isMuted) {
        audio.muted = false;
        setIsMuted(false);
      }
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setShowPlayer(true);
        })
        .catch((e) => {
          console.error("Play failed:", e);
        });
    }
  };

  const dismiss = () => {
    const audio = audioRef.current;
    if (audio) audio.pause();
    setShowPlayer(false);
    setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/95 backdrop-blur border border-border shadow-xl p-1 pr-3 sm:p-1.5 sm:pr-4 max-w-[calc(100vw-2rem)]">
      <button
        onClick={togglePlay}
        className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover transition-all active:scale-95 flex-shrink-0"
        aria-label={isPlaying ? audioConfig.pauseLabel : audioConfig.playLabel}
      >
        {isPlaying ? <Pause className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-0.5" />}
      </button>

      <div className="flex flex-col mr-1 min-w-0 flex-1">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="text-[10px] sm:text-xs font-semibold text-foreground tracking-tight truncate">
            {currentTrack.title}
          </span>
          {audioConfig.tracks.length > 1 && (
            <>
              <span className="text-[8px] sm:text-[9px] text-muted-foreground/70">•</span>
              <div className="flex gap-0.5 sm:gap-1 text-[9px] sm:text-[10px] font-medium flex-shrink-0">
                {audioConfig.tracks.map((track) => {
                  const short = track.id === 'velkomst' ? 'Velkomst' : 'Mødepligt';
                  return (
                    <button
                      key={track.id}
                      onClick={() => switchTrack(track.id)}
                      className={`px-1.5 py-0 sm:px-2 rounded border transition-all ${currentTrackId === track.id 
                        ? 'bg-primary text-white border-primary shadow-sm' 
                        : 'bg-white/80 hover:bg-white border-border text-muted-foreground hover:text-foreground'}`}
                      aria-label={`Skift til ${track.title}`}
                      title={track.title}
                    >
                      {short}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <span className="text-[9px] sm:text-[10px] text-muted-foreground -mt-0.5 leading-none truncate">
          {isPlaying ? (isMuted ? "Afspiller (klik for lyd)" : "Afspiller...") : "Tryk for lyd"}
        </span>
      </div>

      <button
        onClick={toggleSound}
        className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition flex-shrink-0"
        aria-label={isMuted ? "Tænd lyd" : "Slå lyd fra"}
        title={isMuted ? "Tænd lyd" : "Slå lyd fra"}
      >
        {isMuted ? <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
      </button>

      <button
        onClick={dismiss}
        className="ml-0.5 sm:ml-1 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition text-[10px] flex-shrink-0"
        aria-label="Luk"
      >
        <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
      </button>
    </div>
  );
}
