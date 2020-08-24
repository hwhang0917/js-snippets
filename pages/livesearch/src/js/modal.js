import Plyr from "plyr";
const modal = document.getElementById("jsModal");
const player = new Plyr("#player");

export const handleModalClose = () => {
  modal.classList.remove("is-open");
  player.source = {
    type: "audio",
    sources: [],
  };
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
  modal.classList.add("is-open");
};
