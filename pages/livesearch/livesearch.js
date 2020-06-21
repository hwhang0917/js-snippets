// DOM elements
const jsInput = document.getElementById("jsSearchInput"),
  jsForm = document.getElementById("jsForm"),
  jsModal = document.getElementById("jsModal"),
  jsSongTitle = document.getElementById("jsSongTitle"),
  jsCloseBtn = document.getElementById("jsCloseBtn"),
  jsModalRoot = document.getElementById("jsModalRoot");
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
      songs = JSON.parse(request.response);
      fillSongs(songs);
      addThumbnailClickEvent();
    } else {
      console.log(`❌ Error ${request.status}: ${request.statusText}`);
      fillSongs(null);
    }
  };
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
// TODO: Update thumbnail click event to match JSON
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
  // console.log("😁 Adding event listners ... ");
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
window.onload = () => init();
