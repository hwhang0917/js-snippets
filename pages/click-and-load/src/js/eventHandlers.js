// DOM elements
const fullLoader = document.getElementById("jsFullLoader"),
  fullLoadingBar = document.getElementById("jsLoadingBar"),
  fullFileCount = document.getElementById("jsFileCount"),
  fullPercentage = document.getElementById("jsPercentage"),
  fullTimeLeft = document.getElementById("jsTimeLeft");

// DOM control buttons
const pauseResumeBtn = document.getElementById("jsPauseResumeBtn"),
  stopBtn = document.getElementById("jsStopBtn"),
  expandCompressBtn = document.getElementById("jsExpandCompressBtn"),
  menuBtn = document.getElementById("jsMenuBtn");

// Dynamic Fontawesome Icon DOM
const pauseResumeIcon = document.getElementById("jsPauseResumeIcon"),
  expandCompressIcon = document.getElementById("jsExpandCompressIcon");

// State
export const state = {
  puased: false,
  completed: false,
};

export const handleExpand = () => {
  // Change Icon to compress
  expandCompressIcon.className = "fas fa-compress-alt";

  //   Toggle enlarged CSS
  fullLoader.classList.toggle("enlarged");

  //   Remove and add new EventListener
  expandCompressBtn.removeEventListener("click", handleExpand);
  expandCompressBtn.addEventListener("click", handleCompress);
};

export const handleCompress = () => {
  // Change Icon to compress
  expandCompressIcon.className = "fas fa-expand-alt";

  //   Toggle enlarged CSS
  fullLoader.classList.toggle("enlarged");

  //   Remove and add new EventListener
  expandCompressBtn.removeEventListener("click", handleCompress);
  expandCompressBtn.addEventListener("click", handleExpand);
};

export const handlePause = () => {
  // Change Icon to sync
  pauseResumeIcon.className = "fas fa-sync";

  // Change state
  state.puased = true;

  //   Remove and add new EventListener
  pauseResumeBtn.removeEventListener("click", handlePause);
  pauseResumeBtn.addEventListener("click", handleResume);
};

export const handleResume = () => {
  // Change Icon to pause
  pauseResumeIcon.className = "fas fa-pause";

  // Change state
  state.puased = false;

  //   Remove and add new EventListener
  pauseResumeBtn.removeEventListener("click", handleResume);
  pauseResumeBtn.addEventListener("click", handlePause);
};
