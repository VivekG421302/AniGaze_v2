import React, { useState } from "react";
import axios from "axios";
import "../styles/Admin.css";
import DropZone from "../components/DropZone";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  genreTags,
  rating,
  subbedLang,
  dubbedLang,
  animeSources,
  weekdays,
  animeLicensors,
  animeProducers,
  animeStudios,
  animeTimeZones,
  animeTypes,
} from "../Data/Genre";

function Admin() {
  const [animeType, setAnimeType] = useState("TV-Series");
  const [seasonNumber, setSeasonNumber] = useState(1);
  const [genreInput, setGenreInput] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [episodes, setEpisodes] = useState([{ id: 1 }]);

  const getField = (id) => document.getElementById(id)?.value || "";

  const handleAddGenre = (genre) => {
    if (!selectedGenres.includes(genre) && genre.trim()) {
      setSelectedGenres([...selectedGenres, genre]);
    }
    setGenreInput("");
  };

  const handleRemoveGenre = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g !== genre));
  };

  const handleAddEpisode = () => {
    setEpisodes([...episodes, { id: episodes.length + 1 }]);
  };

  const getSeason = (dateStr) => {
    const date = new Date(dateStr);
    const month = date.getMonth();
    const year = date.getFullYear();
    if (isNaN(month)) return "";
    if (month <= 2) return `Winter ${year}`;
    if (month <= 5) return `Spring ${year}`;
    if (month <= 8) return `Summer ${year}`;
    return `Fall ${year}`;
  };

  const handleSubmit = () => {
    const data = {
      anime_id: 1, //autoincrement
      title: getField("animeName"),
      en_title: getField("enTitle"),
      jp_title: getField("jpTitle"),
      title_synonyms: getField("animeTitle") || "N/A",
      type: animeType,
      genre: selectedGenres.join(", "),
      status: 0,
      aired_string: `${getField("startAir")} to ${getField("endAir")}`,
      broadcast: `${getField("weekSelector")} at ${getField("broadcastTime")} (${getField("timezoneSelector")})`,
      premiered: getSeason(getField("startAir")),
      rating: getField("ratingSelect"),
      score: 0,
      scored_by: 0,
      at_rank: 0,
      popularity: 0,
      members: 0,
      favorites: 0,
      source: getField("sourceSelect"),
      producer: getField("seasonProducer"),
      licensor: getField("seasonLicensor"),
      studio: getField("seasonStudio"),
      background: getField("description"),
      ep_no: episodes.length,
      is_season: animeType === "TV-Series" ? seasonNumber : 1,
      duration: "24 min. per ep.",
      poster_file_id: "https://yourcdn.com/poster.jpg",
      banner_file_id: "https://yourcdn.com/banner.jpg",
    };

    console.log("📦 JSON to submit:", JSON.stringify(data, null, 2));

    // axios.post("http://localhost:8080/api/anime", data)
    //   .then(res => console.log("✅ Success", res))
    //   .catch(err => console.error("❌ Error", err));
  };

  return (
    <div className="AdminBody">
      <Navbar />

      {/* 📦 Drop Zones */}
      <div className="section1">
        <div className="section1part1 section1Child">
          <div className="posterDrop">
            <DropZone
              label="Poster"
              onUpload={(file) => console.log(`Poster uploaded:, ${file.name}`)}
            />
          </div>
          <div className="bannerDrop">
            <DropZone
              label="Banner"
              onUpload={(file) => console.log("Banner uploaded:", file.name)}
            />
          </div>
        </div>

        {/* 📝 Input Fields */}
        <div className="section1part2 section1Child">
          <div className="section1ChildInputWrapper">
            <label>Anime Name</label>
            <input placeholder="eg. Demon Slayer" id="title"/>
          </div>
          <div className="section1ChildInputWrapper">
            <label>Anime Title</label>
            <input placeholder="eg. Mugen Train"/>
          </div>
          <div className="section1ChildInputWrapper">
            <label>English Title</label>
            <input placeholder="eg. Demon Slayer" id="enTitle"/>
          </div>
          <div className="section1ChildInputWrapper">
            <label>Japanese Title</label>
            <input placeholder="eg. 進撃の巨人 (Shingeki no Kyojin)" id="jpTitle"/>
          </div>
          <div className="section1ChildInputWrapper">
            <label>Description</label>
            <textarea type="text" placeholder="Describe the Story" id="description"/>
          </div>
        </div>
      </div>

      {/* 📊 Genre Input */}
      <div className="section3">
        <div className="section1ChildInputWrapper section1ChildGenre">
          <div className="genreLabelRow">
            <label>Genre:</label>
            {selectedGenres.map((genre) => (
              <span
                key={genre}
                className="genreBubble"
                title="Click to remove"
              >
                {genre}
                <button onClick={() => handleRemoveGenre(genre)} title="remove">
                  ×
                </button>
              </span>
            ))}
          </div>

          <input
            type="text"
            value={genreInput}
            onChange={(e) => setGenreInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && genreInput.trim()) {
                handleAddGenre(genreInput.trim());
              }
            }}
            placeholder="Type to add or choose"
            className="genreInput"
          />

          <div className="genreSuggestionList">
            {genreTags
              .filter(
                (tag) =>
                  !selectedGenres.includes(tag) &&
                  (genreInput === "" ||
                    tag.toLowerCase().startsWith(genreInput.toLowerCase()))
              )
              .map((tag) => (
                <span
                  key={tag}
                  className="genreSuggestionBubble"
                  onClick={() => handleAddGenre(tag)}
                >
                  {tag}
                </span>
              ))}

            {genreInput.trim() &&
              !genreTags.some(
                (tag) =>
                  tag.toLowerCase() === genreInput.trim().toLowerCase()
              ) &&
              !selectedGenres.includes(genreInput.trim()) && (
                <span
                  className="genreSuggestionBubble"
                  onClick={() => handleAddGenre(genreInput.trim())}
                >
                  {genreInput.trim()} +
                </span>
              )}
          </div>
        </div>
      </div>

      {/* 🔰 Anime Info Section */}
      <div className="section2">
        <div className="isSeasonType section2Selectors">
          <label>Type</label>
          <select
          id="animeType"
            className="section2select"
            value={animeType}
            onChange={(e) => {
              const selected = e.target.value;
              setAnimeType(selected);
              if (selected !== "TV-Series") setSeasonNumber(1);
            }}
          >
            <option value="TV-Series">TV-Series</option>
            {animeTypes.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="isSeasonInput section2Selectors">
          <label>Season Number</label>
          <input
          id="seasonNumber"
            type="number"
            min={1}
            value={seasonNumber}
            onChange={(e) =>
              setSeasonNumber(Math.max(1, Number(e.target.value)))
            }
            disabled={animeType !== "TV-Series"}
            placeholder="Season No."
          />
        </div>

        <div className="isSeasonCaption section2Selectors">
          <label>Subbed In</label>
          <select className="section2select" defaultValue="N/A">
            <option value="N/A" disabled>
              none
            </option>
            {subbedLang.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="isSeasonLang section2Selectors">
          <label>Dubbed In</label>
          <select className="section2select" defaultValue="Japnease">
            <option value="N/A" disabled>
              Japnease
            </option>
            {dubbedLang.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="isSeasonRating section2Selectors">
          <label>Rating</label>
          <select id="ratingSelect" className="section2select">
            {rating.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="isSeasonSource section2Selectors">
          <label>Source</label>
          <select id="sourceSelect" className="section2select">
            {animeSources.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="isSeasonAired section2Selectors">
          <label>Aired</label>
          <div className="airedDateSelector">
            <input type="date" id="startAir" className="airedInputs" />
            <span>to</span>
            <input type="date" id="endAir" className="airedInputs" />
          </div>
        </div>

        <div className="isSeasonBroadcast section2Selectors">
          <label>Broadcast</label>
          <div className="broadcastSelector">
            <select id="weekSelector">
              {weekdays.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
            <input type="time" id="broadcastTime" />
            <select id="timezoneSelector">
              {animeTimeZones.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="isSeasonLiscensor section2Selectors">
          <label>Licensor</label>
          <input id="seasonLicensor" type="text" list="licensorList" placeholder="Licensor" />
          <datalist id="licensorList">
            {animeLicensors.map((x) => (
              <option key={x} value={x} />
            ))}
          </datalist>
        </div>

        <div className="isSeasonProducer section2Selectors">
          <label>Producer</label>
          <input id="seasonProducer" type="text" list="producerList" placeholder="Producer" />
          <datalist id="producerList">
            {animeProducers.map((x) => (
              <option key={x} value={x} />
            ))}
          </datalist>
        </div>

        <div className="isSeasonStudio section2Selectors">
          <label>Studio</label>
          <input id="seasonStudio" type="text" list="studioList" placeholder="Studio" />
          <datalist id="studioList">
            {animeStudios.map((x) => (
              <option key={x} value={x} />
            ))}
          </datalist>
        </div>
      </div>

      {/* 🎬 Episodes Section */}
      <div className="section4">
        {episodes.map((episode, index) => (
          <div key={episode.id} className="episodeTile">
            <div className="episodeDropArea">
              <DropZone
                label={`Episode ${index + 1}`}
                onUpload={(file) =>
                  console.log(`Episode ${index + 1} uploaded:`, file.name)
                }
              />
            </div>
            <div className="episodeTileDetails">
              <input type="text" placeholder="Episode Title" />
              <p>
                <span>00m</span>
                <hr />
              </p>
              <textarea
                className="epDesc"
                placeholder="Enter Episode Description"
              ></textarea>
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center", margin: "1rem 0" }}>
          <button onClick={handleAddEpisode} className="addEpisodeButton">
            + Add Episode
          </button>
          <button onClick={handleSubmit} className="addEpisodeButton">
            {`Complete >`}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Admin;
