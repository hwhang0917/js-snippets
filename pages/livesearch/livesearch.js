"use strict";

// DOM elements
const jsInput = document.getElementById("jsSearchInput"),
  jsForm = document.getElementById("jsForm"),
  jsLoading = document.getElementById("jsLoading"),
  jsModal = document.getElementById("jsModal"),
  jsSongTitle = document.getElementById("jsSongTitle"),
  jsCloseBtn = document.getElementById("jsCloseBtn"),
  jsModalRoot = document.getElementById("jsModalRoot");

// Root DOM element where song thumbnails go
const root = document.getElementById("root");

// Local Storage Keys
const SONGS_LS = "songs",
  LAST_SCRAPE_LS = "lastscrape";

// Time constant
const WEEK_IN_MS = 604800000;

// JSON API address (Golang hosted in Google Clound Functions)
const SONG_API = "Error";

// Global songs JS object
let songs = {};

// Handles input event in search input element
const handleInput = (event) => {
  let query = jsInput.value.toUpperCase();
  let songCards = document.getElementsByClassName("song-card");

  for (let i = 0; i < songCards.length; i++) {
    if (songCards[i].id.indexOf(query) > -1) {
      songCards[i].style.display = "";
    } else {
      songCards[i].style.display = "none";
    }
  }
};

// Get current date in format: YYYY-MM-DD
const getCurrentDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

// Check if given time has passed week
const passWeek = (timeStr) => {
  const storedTime = Date.parse(timeStr);
  const currentTime = Date.now();

  if (storedTime + WEEK_IN_MS < currentTime) {
    return true;
  } else {
    return false;
  }
};

// Should scrape again checker
const shouldScrapeAgain = () => {
  const loadedSongs = localStorage.getItem(SONGS_LS);
  const loadedStoredTime = localStorage.getItem(LAST_SCRAPE_LS);

  // Empty local storage
  if (loadedSongs === null || loadedStoredTime === null) {
    return true;
  } else {
    // Scrape data expired week
    if (passWeek(loadedStoredTime)) {
      return true;
    } else {
      return false;
    }
  }
};

// HTTP request for ACNH song JSON
const getSongs = () => {
  // Check if data should be scraped again
  if (shouldScrapeAgain()) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open("GET", SONG_API);
      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          songs = JSON.parse(request.response);

          // Set local storage
          localStorage.setItem(SONGS_LS, JSON.stringify(songs));
          localStorage.setItem(LAST_SCRAPE_LS, getCurrentDate());

          resolve(songs);

          // Test loading (3sec)
          // setTimeout(() => {
          //   resolve(songs);
          // }, 3000);
        } else {
          reject({ status: request.status, message: request.statusText });
        }
      };
      request.onerror = () => {
        reject({ status: request.status, message: request.statusText });
      };
      request.send();
    });
  } else {
    return new Promise((resolve, _) => {
      const loadedSongs = localStorage.getItem(SONGS_LS);
      songs = JSON.parse(loadedSongs);
      resolve(songs);
    });
  }
};

// Creates song aside DOM element
const createSongAside = (song) => {
  const songAside = document.createElement("aside");
  songAside.className = "song-card";

  // Song Aside's ID should be song titles for search query
  songAside.id =
    song.kor_title.toString().toUpperCase() +
    song.eng_title.toString().toUpperCase();

  // Thumbnail
  const thumbnailFig = document.createElement("figure");
  thumbnailFig.className = "song-thumbnail";
  thumbnailFig.id = song.id;
  const thumbnailImg = document.createElement("img");
  thumbnailImg.setAttribute("draggable", false);
  const playButton = document.createElement("h1");
  playButton.textContent = "▶";
  playButton.className = "play-button";
  thumbnailImg.src = song.thumbnail;
  thumbnailFig.appendChild(thumbnailImg);
  thumbnailFig.appendChild(playButton);
  songAside.appendChild(thumbnailFig);

  // Titles
  const korTitle = document.createElement("h3");
  korTitle.textContent = song.kor_title;
  korTitle.className = "kor-title";
  songAside.appendChild(korTitle);
  const engTitle = document.createElement("p");
  engTitle.textContent = song.eng_title;
  engTitle.className = "eng-title";
  songAside.appendChild(engTitle);

  return songAside;
};

// Populate (fill) DOM with JSON songs
const fillSongs = (songs) => {
  return new Promise((resolve, reject) => {
    jsLoading.style.display = "none";
    if (songs) {
      // For loop songs into MVP CSS aside tag element
      songs.forEach((song) => {
        root.appendChild(createSongAside(song));
      });
      resolve(songs);
    } else {
      // If no songs were received, display no Song error
      const newSection = document.createElement("section");
      const noSongH2 = document.createElement("h2");
      noSongH2.textContent =
        "노래를 불러올 수 없습니다. 관리자에게 문의하세요.";
      newSection.appendChild(noSongH2);
      root.appendChild(newSection);
      reject(new Error("❌ERROR: [fillSongs()] Did not recieve any songs"));
    }
  });
};

// Create audio DOM element
const createAudio = (src, autoplay = false) => {
  const newAudio = document.createElement("audio");
  newAudio.src = src;

  // Audio Options
  newAudio.autoplay = autoplay;
  newAudio.controls = true;
  newAudio.loop = true;
  newAudio.volume = 0.3;

  return newAudio;
};

// Populate modal with songs
const populateModal = (clickedSong) => {
  // default autoplay boolean
  const autoplay = true;

  // FLAC source
  const aircheckSrc = clickedSong["music"]["aircheck"];
  const liveSrc = clickedSong["music"]["live"];

  // Create aircheck figure
  const airCheckFig = document.createElement("figure");
  const airCheckCaption = document.createElement("figcaption");
  airCheckCaption.textContent = "Air Check";
  airCheckFig.appendChild(airCheckCaption);
  airCheckFig.appendChild(createAudio(aircheckSrc, autoplay));

  // Create live figure
  const liveFig = document.createElement("figure");
  const liveCaption = document.createElement("figcaption");
  liveCaption.textContent = "Live";
  liveFig.appendChild(liveCaption);
  liveFig.appendChild(createAudio(liveSrc));

  // Append music to modal
  jsModalRoot.appendChild(airCheckFig);
  jsModalRoot.appendChild(liveFig);
};

// Clear DOM modal element
const clearModal = () => {
  jsModalRoot.textContent = "";
};

// Handles click event for thumbnail
const handleThumbnailClick = (event) => {
  let songID = event.path[1].id;

  // Get clicked song
  let clickedSong = {};
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].id === songID) {
      clickedSong = songs[i];
    }
  }
  // Set Song Tilte
  jsSongTitle.textContent = clickedSong["kor_title"];

  // Populate modal with given video
  populateModal(clickedSong);

  // Display modal
  jsModal.style.display = "block";

  // Close Button Event
  jsCloseBtn.onclick = () => {
    jsModal.style.display = "none";
    clearModal();
  };
  // Backdrop click close event
  window.onclick = (event) => {
    if (event.target === jsModal) {
      jsModal.style.display = "none";
      clearModal();
    }
  };
};

// Adds click event listner for each song thumbnails
const addThumbnailClickEvent = () => {
  return new Promise((resolve, reject) => {
    let songThumbnails = document.getElementsByClassName("song-thumbnail");
    if (songThumbnails) {
      // found song thumbnails DOM elements
      for (let i = 0; i < songThumbnails.length; i++) {
        songThumbnails[i].addEventListener("click", handleThumbnailClick);
      }
      // Resolve Promise
      resolve();
    } else {
      // Cannot find any song thumbnails
      reject(
        new Error(
          "❌ERROR: [addThumbnailClickEvent()] Cannot find any song thumbnails"
        )
      );
    }
  });
};

// Initialization
const init = () => {
  getSongs() // Promise pattern
    .then(fillSongs)
    .then(addThumbnailClickEvent)
    .catch(console.log);
  jsSearchInput.addEventListener("input", handleInput);

  // Prevent default submit event for form
  jsForm.addEventListener("submit", (event) => event.preventDefault());
};

// Initiate when window loaded
window.onload = () => init();
