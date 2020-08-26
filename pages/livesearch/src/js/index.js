import { handleModalClose } from "./modal";
import { getSongs } from "./api";
import { handleInput } from "./livesearch";
import {
  shouldFetch,
  saveSongsInLocalStorage,
  getSongsFromLocalStorage,
} from "./localStorage";
import Song from "./Components/Song";

// DOM elements
const jsInput = document.getElementById("jsSearchInput"),
  jsForm = document.getElementById("jsForm"),
  modalCloseBtn = document.getElementById("modalCloseBtn"),
  loading = document.getElementById("jsLoading"),
  errorBar = document.getElementById("jsError");

// Root DOM element where song thumbnails go
const root = document.getElementById("root");

const fetchSongs = () => {
  getSongs() // Get songs promise
    .then((data) => {
      const songs = Object.entries(data).map((item) => item[1]); // Get Array of song objects from data
      saveSongsInLocalStorage(songs);
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
};

const getLocalSongs = () => {
  const songs = getSongsFromLocalStorage();
  songs.forEach((song) => {
    root.appendChild(Song(song)); // Populate DOM with song cars
  });
  loading.style.display = "none";
};

function init() {
  // Add event listeners
  jsForm.addEventListener("submit", (e) => e.preventDefault());
  jsInput.addEventListener("input", handleInput);
  modalCloseBtn.addEventListener("click", handleModalClose);

  shouldFetch() ? fetchSongs() : getLocalSongs();
}

init();
