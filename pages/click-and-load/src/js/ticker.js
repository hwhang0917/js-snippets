import { state } from "./eventHandlers";
import { getPercentage } from "./utils";

// DOM elements
const fullLoader = document.getElementById("jsFullLoader"),
  fullLoadingBar = document.getElementById("jsLoadingBar"),
  fullPercentage = document.getElementById("jsPercentage"),
  fullTimeLeft = document.getElementById("jsTimeLeft"),
  fullTitle = document.querySelector(".title__main");

export let timeLapse = 0;

export const startLoading = (totalTimeLeft, filesArr) => {
  // Full Info Update

  setInterval(() => {
    if (!state.puased && !state.completed) {
      //   Individual Files Update
      filesArr.forEach((file) => {
        if (!file.completed) {
          let timeLeft = file.totalTime - timeLapse;
          let percentage = getPercentage(timeLapse, file.totalTime);

          file.loadingBar.style.width = `${percentage}%`;
          file.percentage.innerText = percentage;
          file.timeLeft.innerText = timeLeft;

          if (timeLeft === 0) {
            file.completed = true;
            file.element.classList.add("completed");
          }
        }
      });

      let globalTimeLeft = totalTimeLeft - timeLapse;
      let globalPercentage = getPercentage(timeLapse, totalTimeLeft);

      fullPercentage.innerText = globalPercentage;
      fullTimeLeft.innerText = globalTimeLeft;
      fullLoadingBar.style.width = `${globalPercentage}%`;

      if (globalTimeLeft === 0) {
        state.completed = true;
        fullLoader.classList.add("completed");
        fullTitle.innerHTML = "Upload Complete!";
      }

      timeLapse++;
    }
  }, 1000);
};
