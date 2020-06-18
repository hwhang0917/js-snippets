// DOM elements
const jsInput = document.getElementById("jsSearchInput"),
  jsForm = document.getElementById("jsForm");
const root = document.getElementById("root");

// Boolean
let loaded = false;

// JSON mock API address
const SONG_API = "https://hwhang0917.github.io/acnh_json/api/acnh_songs.json";

// songs JS object
let songs = {};

// Handles keyup event in search input element
const handleKeyUp = (event) => {
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
const getSongs = (callback) => {
  let request = new XMLHttpRequest();
  request.open("GET", SONG_API, true);
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      console.log(
        `✅ Success ${request.status}: Retrieved JSON from ${SONG_API}`
      );
      fillSongs(JSON.parse(request.response));
      addThumbnailClickEvent();
    } else {
      console.log(`❌ Error ${request.status}: ${request.statusText}`);
      fillSongs(null);
    }
  };
};

// Creates play button
const createPlayButton = () => {};

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
  const playButton = document.createElement("div");
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
  const newSection = document.createElement("section");
  if (!songs) {
    // If no songs were received, display no Song error
    const noSongH2 = document.createElement("h2");
    noSongH2.textContent = "노래를 불러올 수 없습니다.";
    newSection.appendChild(noSongH2);
    root.appendChild(newSection);
  } else {
    // For loop songs into MVP CSS aside tag element
    songs.forEach((song) => {
      root.appendChild(createSongAside(song));
    });
    loaded = true;
  }
};

// Handles click event for thumbnail
const handleThumbnailClick = (event) => {
  let songID = event.path[1].id;
};

// Adds click event listner for each song thumbnails
const addThumbnailClickEvent = () => {
  console.log("😁 Adding event listners ... ");
  let songThumbnails = document.getElementsByClassName("song-thumbnail");
  for (let i = 0; i < songThumbnails.length; i++) {
    songThumbnails[i].addEventListener("click", handleThumbnailClick);
  }
};

// Initialization
const init = () => {
  getSongs(addThumbnailClickEvent);
  jsSearchInput.addEventListener("keyup", handleKeyUp);
  jsForm.addEventListener("submit", handleSubmit);
};

// Initiate when window loaded
// window.onload = () => init();
init();
