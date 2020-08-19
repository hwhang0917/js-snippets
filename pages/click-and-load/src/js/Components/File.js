const createFileDivider = () => {
  const $fileDivider = document.createElement("div");
  $fileDivider.className = "file__divider";
  return $fileDivider;
};

const File = (file) => {
  /*
    <li class="file" id="file1">
  */
  const $fileItem = document.createElement("li");
  $fileItem.id = `file${file.id}`;
  $fileItem.className = "file";

  /*
    <div class="file__divider"></div>
  */
  const $firstDivider = createFileDivider();

  /*
    <h2 class="title" id="file2-title">Intro movie.mp4</h2>
  */
  const $title = document.createElement("h2");
  $title.className = "title";
  $title.id = `file${file.id}-title`;
  $title.innerText = file.name;
  $firstDivider.appendChild($title);

  /*
    <div class="loading-backdrop">
        <div class="loading-bar" id="file2-loadingBar"></div>
    </div>
  */
  const $loadingBackdrop = document.createElement("div");
  $loadingBackdrop.className = "loading-backdrop";
  const $loadingBar = document.createElement("div");
  $loadingBar.className = "loading-bar";
  $loadingBar.id = `file${file.id}-loadingBar`;
  $loadingBackdrop.appendChild($loadingBar);
  $firstDivider.appendChild($loadingBackdrop);

  /*
    <div class="file__divider"></div>
  */
  const $secondDivider = createFileDivider();

  /*
    <h2 class="sub-title">
        <span><span id="file2-percentage">33</span>%</span>
        <span><span id="file2-timeLeft">5</span> seconds left</span>
    </h2>
  */
  const $subTitle = document.createElement("h2");
  $subTitle.className = "sub-title";
  const $firstSpan = document.createElement("span");
  const $percentage = document.createElement("span");
  $percentage.id = `file${file.id}-percentage`;
  $percentage.className = "percentage";
  $percentage.innerText = 0;
  $firstSpan.appendChild($percentage);
  $subTitle.appendChild($firstSpan);
  const $secondSpan = document.createElement("span");
  const $timeLeft = document.createElement("span");
  $timeLeft.id = `file${file.id}-timeLeft`;
  $timeLeft.className = "time-left";
  $timeLeft.innerText = file.timeLeft;
  $secondSpan.appendChild($timeLeft);
  $subTitle.appendChild($secondSpan);
  $secondDivider.appendChild($subTitle);

  /*
    <div class="checkmark"><i class="fas fa-check"></i></div>
  */
  const $checkMark = document.createElement("div");
  $checkMark.className = "checkmark";
  const $checkIcon = document.createElement("i");
  $checkIcon.className = "fas fa-check";
  $checkMark.appendChild($checkIcon);
  $secondDivider.appendChild($checkMark);

  $fileItem.appendChild($firstDivider);
  $fileItem.appendChild($secondDivider);

  return {
    element: $fileItem,
    title: $title,
    percentage: $percentage,
    timeLeft: $timeLeft,
    loadingBar: $loadingBar,
  };
};

export default File;
