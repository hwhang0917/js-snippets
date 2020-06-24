"use strict";
// Hangul CharCode
const HANGUL_START = 12593;
const HANGUL_END = 55203;

// Global vars
let string_size = -1;
let hangul_stats = {};

// DOM elements
const textArea = document.getElementById("jsTextArea"),
  wordCounter = document.getElementById("jsWordCount"),
  textForm = document.getElementById("jsHangulForm"),
  submitBtn = document.getElementById("submitBtn"),
  statsContainer = document.getElementById("jsChart");

const clearStats = () => {
  // Empty stats object
  hangul_stats = {};
};

const showStats = () => {
  if (Chart) {
    // Check if Chart.js loaded
    // Fill Stats through Chart JS and display chart
    let ctx = statsContainer.getContext("2d");
    let chart = new Chart(ctx, {
      // Type of chart
      type: "bar",

      // Data
      data: {
        labels: Object.keys(hangul_stats),
        datasets: [
          {
            label: "한글 글자수 통계",
            backgroundColor: "rgba(255, 99, 132, .8)",
            borderColor: "rgb(255, 99, 132)",
            data: Object.values(hangul_stats),
          },
        ],
      },

      // Configuration options
      options: {
        tooltips: {
          width: 500,
          height: 500,
          titleFont: 30,
        },
      },
    });

    // Remove hidden class name (display element)
    statsContainer.classList.remove("hidden");

    // Scroll smoothly to stats container
    statsContainer.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log("❌ Chart.js not loaded! Please reload.");
  }
};

const handleInput = (event) => {
  // Handles input event in textarea
  string_size = textArea.value.length - 1;
  wordCounter.textContent = string_size + 1;
};

const handleSubmit = (event) => {
  // Clears stats before running counter again
  clearStats();

  //   Prevent default form submit event
  event.preventDefault();
  let contents = textArea.value;

  if (string_size < 0) {
    alert("[오류] 글자수가 0개입니다!");
  } else {
    for (let i = 0; i < contents.length; i++) {
      let char = contents[i];
      let charCode = char.charCodeAt(0);
      // If content is Korean
      if (HANGUL_START <= charCode && charCode <= HANGUL_END) {
        // If it is first time appearing character, initiate as 1
        if (hangul_stats[char] === undefined) {
          hangul_stats[char] = 1;
        }
        // Else, increment counter
        else {
          hangul_stats[char]++;
        }
      }
      // Not Korean
      else {
        continue;
      }
    }

    // fire show stats
    showStats();
  }
};

function init() {
  // Handle input event in text area and count words
  textArea.addEventListener("input", handleInput);

  // Handle submit button click event
  textForm.addEventListener("submit", handleSubmit);
}

// Initiate when window load event fires
window.onload = () => {
  init();
};
