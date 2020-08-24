import Plyr from "plyr";
import { handleModalClose, handleModalOpen } from "./modal";

// DOM elements
const jsInput = document.getElementById("jsSearchInput"),
  modalCloseBtn = document.getElementById("modalCloseBtn");

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
  jsInput.addEventListener("input", handleInput);
  modalCloseBtn.addEventListener("click", handleModalClose);
}

init();
