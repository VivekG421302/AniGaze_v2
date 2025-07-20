// External Imports
import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

// Internal Imports
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import SeasonScroll from "../components/SeasonScroll";
import Sharebar from "../components/Sharebar";
import Footer from "../components/Footer";
import "../styles/Player.css";

// Initialization
export default function Player() {
  // Refs
  const playerRef = useRef(null);
  const playerInstance = useRef(null);

  // States
  const [currentEpisode, setCurrentEpisode] = useState(2);
  const [numEpisodes] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Tokens: Connecting Bot with Telegram (~T)
  const TELEGRAM_BOT_TOKEN = "8135993773:AAEHtoITVdrGU1l_SU-HBvmSKpMfY1F5FCM";

  // File id: Using same video for all episodes (~T)
  const TELEGRAM_FILE_ID =
    "BAACAgUAAyEFAASsQRsvAAMIaHosViFKVlORRzn2OX20t-vwN3MAAg0cAAJMP9BXR_S2t7lHH6w2BA";

  // Video Path Maker for Telegram {B/-}
  const getTelegramVideoUrl = async () => {
    // Fetch/ Sort/ Pop
    try {
      // Fetch
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${TELEGRAM_FILE_ID}`
      );
      const data = await res.json();
      if (!data.ok) throw new Error("Failed to get Telegram file");
      // Sort
      const filePath = data.result.file_path; //fileId ⇄ filePath
      // Pop-up
      setShowSuccessPopup(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setShowSuccessPopup(false);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${filePath}`;
    } catch (err) {
      console.error("Telegram error:", err);
      return null;
    }
  };

  // Initialization: video.js,
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      if (!playerRef.current || playerInstance.current) return;

      // video.js callibration
      const player = videojs(playerRef.current, {
        controls: true,
        autoplay: autoPlay,
        preload: "auto",
        fluid: true,
        responsive: true,
      });

      playerInstance.current = player; //Open instance for video.js

      player.ready(() => {
        player.src({ src: "", type: "video/mp4" }); // initial empty
      });

      // Autoplay
      player.on("ended", () => {
        if (currentEpisode < numEpisodes) {
          setCurrentEpisode((ep) => ep + 1);
        }
      });

      // Show Next ep button (D^)
      player.on("timeupdate", () => {
        const duration = player.duration();
        const current = player.currentTime();
        if (duration - current <= 30 && currentEpisode < numEpisodes) {
          setShowNextButton(true);
        } else {
          setShowNextButton(false);
        }
      });
    });

    // Disposal!
    return () => {
      cancelAnimationFrame(rafId);
      if (playerInstance.current) {
        playerInstance.current.dispose();
        playerInstance.current = null;
      }
    };
  }, []);

  // Initialization: feed url in the player
  useEffect(() => {
    const player = playerInstance.current;
    if (!player) return;

    const loadVideo = async () => {
      const telegramUrl = await getTelegramVideoUrl();
      if (telegramUrl) {
        player.src({ src: telegramUrl, type: "video/mp4" });
        if (autoPlay) player.play();
      }
    };

    loadVideo();
  }, [currentEpisode, autoPlay]);

  // Shortcuts
  useEffect(() => {
    const handleKeydown = (e) => {
      const player = playerInstance.current;
      if (!player) return;

      const key = e.key.toLowerCase();

      switch (key) {
        case "arrowup": //   (↑) volume up
          e.preventDefault();
          player.volume(Math.min(1, player.volume() + 0.1));
          break;
        case "arrowdown": // (↓) volume down
          e.preventDefault();
          player.volume(Math.max(0, player.volume() - 0.1));
          break;
        case "arrowright": // (→) forward 10s
          e.preventDefault();
          player.currentTime(player.currentTime() + 10);
          break;
        case "arrowleft": // (←) backward 10s
          e.preventDefault();
          player.currentTime(Math.max(0, player.currentTime() - 10));
          break;
        case "f": // (f) FullScreen Toggle
          e.preventDefault();
          const el = player.el();
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            el.requestFullscreen?.();
          }
          break;
        case "escape": // [Esc] Escape full screen
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
        case "m": // (m) Mute
          e.preventDefault();
          player.muted(!player.muted());
          break;
        case " ": // [␣] Pause and Play with spacebar
          e.preventDefault();
          player.paused() ? player.play() : player.pause();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  // Handle Functions

  // Previous Episode Handler
  const handlePrev = () =>
    currentEpisode > 1 && setCurrentEpisode((ep) => ep - 1);

  // Next Episode Handler
  const handleNext = () =>
    currentEpisode < numEpisodes && setCurrentEpisode((ep) => ep + 1);

  // Audio Track Switch <Broken/> !The browser is stopping us to peep into the tracks of video ~Whereas externally tracks can work(look for sync issues)
  const switchAudio = (index) => {
    const player = playerInstance.current;
    const at = player?.audioTracks();
    if (at) {
      for (let i = 0; i < at.length; i++) at[i].enabled = i === index;
    }
  };

  return (
    // Player_Body:
    // <Navbar/> + BreadCrum(~Popup~) + PlayerWrapper{EpisodeArea+Player} + <Sharebar/> + <SeasonScroller/> + <Episode_Grid/> + <Footer/>
    <div className="playerBody">
      <Navbar />
      {/* =============================================================== */}
      <p className="BreadCrum">
        <a href="#" className="Primary">
          Home •{" "}
        </a>
        <a href="#" className="Secondary">
          TV •{" "}
        </a>
        <span className="tertiary">Watching Dr Stone</span>
      </p>

      {showSuccessPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-20%, -50%)",
            backgroundColor: "#222",
            color: "#fff",
            padding: "20px 30px",
            borderRadius: "10px",
            zIndex: 9999,
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Success to fetch telegram video
        </div>
      )}
      {/* =============================================================== */}

      <div className="playerWrapper">
        <div className="episodeAreaBody">
          <h5>List of Episodes</h5>
          <div className="episodeGrid">
            {/* Temporarily used to show a dummy video from telegram */}
            <span
              onClick={() => setCurrentEpisode(1)}
              className={currentEpisode === 1 ? "activeEpisode" : ""}
              style={{ padding: "10px" }}
            >
              Telegram_Video
            </span>
            {/* This shows episodes to choose: !Temporarily Not available as the site is in devlopment */}
            {/* {Array.from({ length: numEpisodes }, (_, i) => (
              <span
                key={i}
                onClick={() => setCurrentEpisode(i + 1)}
                className={currentEpisode === i + 1 ? "activeEpisode" : ""}
              >
                {i + 1}
              </span>
            ))} */}
          </div>
        </div>
        {/* -------------------------------------------------------------- */}
        <div className="mediaAreaBody">
          <div className="videoContainer">
            <div data-vjs-player>
              <video
                ref={playerRef}
                className="video-js vjs-default-skin"
                controls
                playsInline
                style={{
                  width: "100%",
                  minHeight: "400px",
                  backgroundColor: "black",
                }}
              ></video>
            </div>

            {/* Appears in last 30s */}
            {showNextButton && (
              <div
                className="nextEpisodeOverlay"
                onClick={handleNext}
                title="Skip to next episode"
              >
                ▶ Next Episode
              </div>
            )}
          </div>
          <div className="mediaController">
            <button onClick={handlePrev} disabled={currentEpisode === 1}>
              ⏮ Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentEpisode === numEpisodes}
            >
              ⏭ Next
            </button>
            <label>
              Auto Play
              <input
                type="checkbox"
                checked={autoPlay}
                onChange={(e) => setAutoPlay(e.target.checked)}
              />
            </label>
            {/* Not functional: !Browser issues */}
            <div className="audioTracks">
              <span>Audio Track:</span>
              <button onClick={() => switchAudio(0)}>Track 1</button>
              <button onClick={() => switchAudio(1)}>Track 2</button>
            </div>
          </div>

          <div className="mediaInfo">
            <h3>
              <span>Now Playing:</span>
              <span>Episode {currentEpisode}</span>
            </h3>
          </div>
        </div>
      </div>

      {/* =============================================================== */}
      <Sharebar />
      {/* =============================================================== */}
      <SeasonScroll />
      {/* =============================================================== */}
      <Grid />
      {/* =============================================================== */}
      <Footer />
    </div>
  );
}
