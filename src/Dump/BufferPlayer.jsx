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

// Constants
const TELEGRAM_BOT_TOKEN = "8135993773:AAEHtoITVdrGU1l_SU-HBvmSKpMfY1F5FCM";
const VIDEO_PARTS = [
  // List of 25 video part file_ids
  "BAACAgUAAyEGAASsQRsvAAOmaIDJqeKPec664NDQTTXN9y2sZJwAAi0bAAJ4NghU4whzIvYz6sg2BA",
  "BAACAgUAAyEGAASsQRsvAAOnaIDJrAG2R2w5HPpM7Bhj2nD2IAwAAi4bAAJ4NghUWQZdjh4BBd82BA",
  "BAACAgUAAyEGAASsQRsvAAOoaIDJr6HPh_bDcjCQw3kflg0faC0AAi8bAAJ4NghUqfDj5x09-rY2BA",
  "BAACAgUAAyEGAASsQRsvAAOpaIDJtAnZhrROjbjV0_AAAVUBUkXmAAIxGwACeDYIVGrmPg7t5XTkNgQ",
  "BAACAgUAAyEGAASsQRsvAAOqaIDJtwflntcpI8rtN0sRAiYyh3sAAjIbAAJ4NghUG1LVQwxK4KA2BA",
  "BAACAgUAAyEGAASsQRsvAAOraIDJu31iqYxZ-xy82gOrmJd8zAsAAjMbAAJ4NghUxnHch82jszw2BA",
  "BAACAgUAAyEGAASsQRsvAAOsaIDJv0Tsii_njzdu8VskPce1D4IAAjQbAAJ4NghUGUt-_85uFKk2BA",
  "BAACAgUAAyEGAASsQRsvAAOtaIDJwiEaGF2U864DNOclrZ8iXs0AAjUbAAJ4NghUgbb1XptA3Uo2BA",
  "BAACAgUAAyEGAASsQRsvAAOuaIDJxvRarDYAASu_MHgAAdxXsIekFwACNhsAAng2CFSeHWwjyu8S3jYE",
  "BAACAgUAAyEGAASsQRsvAAOvaIDJyipqG76CiLQGBQABbIS9P-6OAAI3GwACeDYIVBvkqAFRpdPjNgQ",
  "BAACAgUAAyEGAASsQRsvAAOwaIDJzQVB1nQo4WxVe34s0BwnpN4AAjgbAAJ4NghUTX09XM2R_W82BA",
  "BAACAgUAAyEGAASsQRsvAAOxaIDJ0CCXtHp3HkC9ZgqBWeRliI4AAjkbAAJ4NghUMw_gELKOl7U2BA",
  "BAACAgUAAyEGAASsQRsvAAOyaIDJ00S4kknYEDDU_Q50cf3FdkYAAjobAAJ4NghUmLXPAuvuufo2BA",
  "BAACAgUAAyEGAASsQRsvAAOzaIDJ1m4aYRIjjoSEEa7QfpM28SUAAjsbAAJ4NghUmU4-XoPsqOw2BA",
  "BAACAgUAAyEGAASsQRsvAAO0aIDJ2hLTvwESRpfqXJ1oilJQdRwAAj0bAAJ4NghUV3-4oM-KAkQ2BA",
  "BAACAgUAAyEGAASsQRsvAAO1aIDJ3eMQAxVXlgYlnV37DOxOYwMAAj4bAAJ4NghU35M8OVukjZg2BA",
  "BAACAgUAAyEGAASsQRsvAAO2aIDJ4FrYLB7pEL_du13bfn3B274AAj8bAAJ4NghU2WhAMUQuosE2BA",
  "BAACAgUAAyEGAASsQRsvAAO3aIDJ5BUCBnt9GnaIRNTExLHMh6IAAkAbAAJ4NghUqjekAiWwdIY2BA",
  "BAACAgUAAyEGAASsQRsvAAO4aIDJ5sRJSGMJNyiJVKsNwSBEFToAAkEbAAJ4NghUwuacUbafM7k2BA",
  "BAACAgUAAyEGAASsQRsvAAO5aIDJ6SUPq48CZhuGRyAHhx08E0UAAkIbAAJ4NghUP9dRWN21Zfg2BA",
  "BAACAgUAAyEGAASsQRsvAAO6aIDJ8tE_4qV5t7ljrz-WzF8mmQkAAkMbAAJ4NghUG2aeLonURtk2BA",
  "BAACAgUAAyEGAASsQRsvAAO7aIDJ_ZCBJfTwiAgSS7XtJD8HhMUAAkQbAAJ4NghUmr6WduMvgtU2BA",
  "BAACAgUAAyEGAASsQRsvAAO8aIDKEvBECYdPrdx2Fget6AvrTBQAAkUbAAJ4NghUbOkVmGu1Y3k2BA",
  "BAACAgUAAyEGAASsQRsvAAO9aIDKGTtRVBMAAY7sQZ68ksscN3ZxAAJGGwACeDYIVBJp91DucXgINgQ",
  "BAACAgUAAyEGAASsQRsvAAO-aIDKG3b375hXvLiSlXz7Fhsi0QgAAkcbAAJ4NghUMKR31h_SHwE2BA",
];

const TOTAL_DURATION = 1442;
const PART_DURATION = Math.ceil(TOTAL_DURATION / VIDEO_PARTS.length);

export default function BufferPlayer() {
  const playerRef = useRef(null);
  const playerInstance = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentPart, setCurrentPart] = useState(0);

  const getTelegramVideoUrl = async (index) => {
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${VIDEO_PARTS[index]}`
      );
      const data = await res.json();
      return data.ok
        ? `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${data.result.file_path}`
        : null;
    } catch (err) {
      console.error("Failed to fetch video URL", err);
      return null;
    }
  };

  const loadVideoPart = async (partIndex, offset = 0) => {
    const url = await getTelegramVideoUrl(partIndex);
    if (!url || !playerInstance.current) return;

    const player = playerInstance.current;
    const container = playerRef.current?.parentNode;

    // Fade out before switching
    container?.classList.add("fading");

    // Slight delay to let fade out complete
    setTimeout(() => {
      player.pause();
      player.src({ src: url, type: "video/mp4" });

      player.ready(() => {
        player.currentTime(offset);
        if (autoPlay) player.play();
        container?.classList.remove("fading"); // Fade back in
      });
    }, 300);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!playerRef.current) {
        console.warn("Video element not yet in DOM");
        return;
      }

      const player = videojs(playerRef.current, {
        controls: true,
        autoplay: autoPlay,
        preload: "auto",
        fluid: true,
        responsive: true,
        muted: true,
      });

      playerInstance.current = player;

      loadVideoPart(0);

      const handleTimeUpdate = () => {
        const time = player.currentTime();
        const partIndex = Math.floor(time / PART_DURATION);
        const partOffset = time % PART_DURATION;
        if (partIndex !== currentPart && partIndex < VIDEO_PARTS.length) {
          setCurrentPart(partIndex);
          loadVideoPart(partIndex, partOffset);
        }
      };

      const handleSeek = () => {
        const time = player.currentTime();
        const partIndex = Math.floor(time / PART_DURATION);
        const partOffset = time % PART_DURATION;
        setCurrentPart(partIndex);
        loadVideoPart(partIndex, partOffset);
      };

      player.on("timeupdate", handleTimeUpdate);
      player.on("seeked", handleSeek);

      // Cleanup
      return () => {
        player.dispose();
      };
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

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

  return (
    <div className="playerBody">
      {/* <Navbar /> */}
      <p className="BreadCrum">
        <a href="#" className="Primary">
          Homes •{" "}
        </a>
        <a href="#" className="Secondary">
          TV •{" "}
        </a>
        <span className="tertiary">Watching Dr Stone</span>
      </p>

      <div className="playerWrapper">
        <div className="mediaAreaBody">
          <div
            className="videoContainer"
            style={{ minHeight: "400px", background: "black" }}
          >
            <video
              ref={playerRef}
              className="video-js vjs-default-skin"
              controls
              autoPlay
              muted
              playsInline
              crossOrigin="anonymous"
              style={{
                width: "100%",
                minHeight: "400px",
                backgroundColor: "black",
                objectFit: "contain",
              }}
            ></video>
          </div>
          <div className="mediaController">
            <label>
              Auto Play
              <input
                type="checkbox"
                checked={autoPlay}
                onChange={(e) => setAutoPlay(e.target.checked)}
              />
            </label>
          </div>
          <div className="mediaInfo">
            <h3>
              <span>Now Playing:</span>
              <span>
                {" "}
                Part {currentPart + 1} of {VIDEO_PARTS.length}
              </span>
            </h3>
          </div>
        </div>
      </div>

      <Sharebar />
      <SeasonScroll />
      {/* <Grid /> */}
      <Footer />
    </div>
  );
}
