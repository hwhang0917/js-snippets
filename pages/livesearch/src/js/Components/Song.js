const { handleModalOpen } = require("../modal");

const Song = (song) => {
  const $Aside = document.createElement("aside");
  $Aside.className = "song-card";

  // Song Aside's ID should be song titles for search query
  $Aside.id =
    song.name["name-KRko"].toString().toUpperCase() +
    song.name["name-USen"].toString().toUpperCase();

  // Thumbnail
  const $Figure = document.createElement("div");
  $Figure.className = "song-thumbnail";
  $Figure.id = song["file-name"];
  const $Image = document.createElement("img");
  $Image.setAttribute("draggable", false);
  $Image.src = song["image_uri"];
  $Image.id = song.id;
  $Figure.appendChild($Image);
  $Figure.addEventListener("click", handleModalOpen);
  $Aside.appendChild($Figure);

  // Titles
  const $h3 = document.createElement("h3");
  $h3.textContent = song.name["name-KRko"];
  $h3.className = "kor-title";
  $Aside.appendChild($h3);
  const $p = document.createElement("p");
  $p.textContent = song.name["name-USen"];
  $p.className = "eng-title";
  $Aside.appendChild($p);

  return $Aside;
};

export default Song;
