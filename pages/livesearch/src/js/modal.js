import Plyr from "plyr";
import { getSong } from "./api";
const modal = document.getElementById("jsModal");
const modalSection = document.getElementById("modalSection");
const modalLoading = document.getElementById("modalLoading");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const buyPrice = document.getElementById("buyPrice");
const sellPrice = document.getElementById("sellPrice");
const player = new Plyr("#player", {
  autoplay: true,
  loop: { active: true },
  controls: [
    "play",
    "progress",
    "mute",
    "volume",
    "settings",
    "pip",
    "airplay",
  ],
});

const populateModal = (id) => {
  getSong(id)
    .then((song) => {
      modalImg.src = `https://acnhapi.com/v1/images/songs/${song.id}`;
      modalTitle.innerText = song.name["name-KRko"];
      song["buy-price"]
        ? (buyPrice.innerText = song["buy-price"])
        : (buyPrice.innerText = "비매품");

      sellPrice.innerText = song["sell-price"];
      modalSection.style.display = "block";
    })
    .finally(() => {
      modalLoading.style.display = "none";
    });
};

export const handleModalClose = () => {
  modal.classList.remove("is-open");
  modalLoading.style.display = "block";
  modalSection.style.display = "none";
  player.stop();
};

export const handleModalOpen = ({ target }) => {
  const song = { id: 0 };

  if (target.id) {
    song.id = target.id;
  } else {
    song.id = target.className;
  }

  player.source = {
    type: "audio",
    sources: [
      {
        src: `https://acnhapi.com/v1/music/${song.id}`,
        type: "audio/mp3",
      },
    ],
  };

  populateModal(song.id);
  modal.classList.add("is-open");
};
