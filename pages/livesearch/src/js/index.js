import { handleModalClose } from "./modal";
import { getSongs } from "./api";
import Song from "./Components/Song";

// DOM elements
const jsInput = document.getElementById("jsSearchInput"),
  modalCloseBtn = document.getElementById("modalCloseBtn"),
  loading = document.getElementById("jsLoading"),
  errorBar = document.getElementById("jsError");

// Root DOM element where song thumbnails go
const root = document.getElementById("root");

const handleInput = ({ target: { value } }) => {
  let query = value.toUpperCase();
  const songCards = document.getElementsByClassName("song-card");

  for (let i = 0; i < songCards.length; i++) {
    if (songCards[i].id.indexOf(query) > -1) {
      songCards[i].style.display = "";
    } else {
      songCards[i].style.display = "none";
    }
  }
};

function init() {
  getSongs() // Get songs promise
    .then((data) => {
      const songs = Object.entries(data).map((item) => item[1]); // Get Array of song objects from data
      return songs;
    })
    .then((songs) =>
      songs.forEach((song) => {
        root.appendChild(Song(song)); // Populate DOM with song cars
      })
    )
    .catch(() => {
      errorBar.style.display = "block"; // Show Error Block
    })
    .finally(() => (loading.style.display = "none")); // Hide loading bar

  // Add event listeners
  jsInput.addEventListener("input", handleInput);
  modalCloseBtn.addEventListener("click", handleModalClose);
}

init();
