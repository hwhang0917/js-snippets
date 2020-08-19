import { files } from "./data";
import { handleExpand, handlePause } from "./eventHandlers";
import { startLoading } from "./ticker";
import File from "./Components/File";

// DOM elements
const fullLoadingBar = document.getElementById("jsLoadingBar"),
  fullFileCount = document.getElementById("jsFileCount"),
  fullPercentage = document.getElementById("jsPercentage"),
  fullTimeLeft = document.getElementById("jsTimeLeft"),
  fileList = document.getElementById("jsFileList");

// DOM control buttons
const pauseResumeBtn = document.getElementById("jsPauseResumeBtn"),
  stopBtn = document.getElementById("jsStopBtn"),
  expandCompressBtn = document.getElementById("jsExpandCompressBtn"),
  menuBtn = document.getElementById("jsMenuBtn");

const fileDOMArr = [];

function getState() {
  const timeLeftArr = [];
  files.forEach((file) => {
    timeLeftArr.push(file.timeLeft);
  });
  return {
    fileCount: files.length,
    totalTimeLeft: Math.max(...timeLeftArr),
    files,
  };
}

function setFullLoader(fileCount, totalTimeLeft) {
  fullLoadingBar.style.width = "0%";
  fullFileCount.innerText = fileCount;
  fullPercentage.innerText = 0;
  fullTimeLeft.innerText = totalTimeLeft;
}

function setFileList(files) {
  files.forEach((file) => {
    const { element, title, percentage, timeLeft, loadingBar } = File(file);
    fileDOMArr.push({
      id: file.id,
      totalTime: file.timeLeft,
      element,
      title,
      percentage,
      timeLeft,
      loadingBar,
      completed: false,
    });
    fileList.append(element);
  });
}

function init() {
  // Initialize state
  const { fileCount, totalTimeLeft, files } = getState();
  setFullLoader(fileCount, totalTimeLeft);
  setFileList(files);

  // Add event listender for controller
  expandCompressBtn.addEventListener("click", handleExpand);
  pauseResumeBtn.addEventListener("click", handlePause);

  // Start ticking time
  startLoading(totalTimeLeft, fileDOMArr);
}

init();
