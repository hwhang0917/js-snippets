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

// JSON mock API address
const SONG_API = "https://hwhang0917.github.io/acnh_json/api/acnh_songs.json";

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

// prevent default GET request when submit is entered
const handleSubmit = (event) => event.preventDefault();

// HTTP request for ACNH song JSON
const getSongs = () => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", SONG_API);
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        songs = JSON.parse(request.response);
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

// Populate modal with songs
const populateModal = (clickedSong) => {
  // Create aircheck figure
  const airCheckFig = document.createElement("figure");
  const airCheckCaption = document.createElement("figcaption");
  airCheckCaption.textContent = "Air Check";
  const airCheckAudio = document.createElement("audio");
  airCheckAudio.controls = true;
  airCheckAudio.src = clickedSong["music"]["aircheck"];
  airCheckFig.appendChild(airCheckCaption);
  airCheckFig.appendChild(airCheckAudio);

  // Create live figure
  const liveFig = document.createElement("figure");
  const liveCaption = document.createElement("figcaption");
  liveCaption.textContent = "Live";
  const liveAudio = document.createElement("audio");
  liveAudio.controls = true;
  liveAudio.src = clickedSong["music"]["live"];
  liveFig.appendChild(liveCaption);
  liveFig.appendChild(liveAudio);

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
  jsForm.addEventListener("submit", handleSubmit);
};

// Initiate when window loaded
window.onload = () => init();
