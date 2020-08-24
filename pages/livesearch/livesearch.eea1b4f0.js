// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"livesearch.js":[function(require,module,exports) {
"use strict"; // DOM elements

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var jsInput = document.getElementById("jsSearchInput"),
    jsForm = document.getElementById("jsForm"),
    jsLoading = document.getElementById("jsLoading"),
    jsModal = document.getElementById("jsModal"),
    jsSongTitle = document.getElementById("jsSongTitle"),
    jsCloseBtn = document.getElementById("jsCloseBtn"),
    jsModalRoot = document.getElementById("jsModalRoot"); // Root DOM element where song thumbnails go

var root = document.getElementById("root"); // Local Storage Keys

var SONGS_LS = "songs",
    LAST_SCRAPE_LS = "lastscrape"; // Time constant

var WEEK_IN_MS = 604800000; // JSON API address (Update to use ACNHAPI)

var SONG_API = "https://acnhapi.com/v1/songs/"; // Global songs JS object

var songs = {}; // Handles input event in search input element

var handleInput = function handleInput(event) {
  var query = jsInput.value.toUpperCase();
  var songCards = document.getElementsByClassName("song-card");

  for (var i = 0; i < songCards.length; i++) {
    if (songCards[i].id.indexOf(query) > -1) {
      songCards[i].style.display = "";
    } else {
      songCards[i].style.display = "none";
    }
  }
}; // Get current date in format: YYYY-MM-DD


var getCurrentDate = function getCurrentDate() {
  var date = new Date();
  return "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
}; // Check if given time has passed week


var passWeek = function passWeek(timeStr) {
  var storedTime = Date.parse(timeStr);
  var currentTime = Date.now();

  if (storedTime + WEEK_IN_MS < currentTime) {
    return true;
  } else {
    return false;
  }
}; // Should scrape again checker


var shouldScrapeAgain = function shouldScrapeAgain() {
  var loadedSongs = localStorage.getItem(SONGS_LS);
  var loadedStoredTime = localStorage.getItem(LAST_SCRAPE_LS); // Empty local storage

  if (loadedSongs === null || loadedStoredTime === null) {
    return true;
  } else {
    // Scrape data expired week
    if (passWeek(loadedStoredTime)) {
      return true;
    } else {
      return false;
    }
  }
}; // HTTP request for ACNH song JSON


var getSongs = function getSongs() {
  // Check if data should be scraped again
  if (shouldScrapeAgain()) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open("GET", SONG_API);

      request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
          songs = JSON.parse(request.response); // Set local storage

          localStorage.setItem(SONGS_LS, JSON.stringify(songs));
          localStorage.setItem(LAST_SCRAPE_LS, getCurrentDate());
          resolve(songs); // Test loading (3sec)
          // setTimeout(() => {
          //   resolve(songs);
          // }, 3000);
        } else {
          reject({
            status: request.status,
            message: request.statusText
          });
        }
      };

      request.onerror = function () {
        reject({
          status: request.status,
          message: request.statusText
        });
      };

      request.send();
    });
  } else {
    return new Promise(function (resolve, _) {
      var loadedSongs = localStorage.getItem(SONGS_LS);
      songs = JSON.parse(loadedSongs);
      resolve(songs);
    });
  }
}; // Creates song aside DOM element


var createSongAside = function createSongAside(song) {
  var songAside = document.createElement("aside");
  songAside.className = "song-card"; // Song Aside's ID should be song titles for search query

  songAside.id = song.name["name-KRko"].toString().toUpperCase() + song.name["name-USen"].toString().toUpperCase(); // Thumbnail

  var thumbnailFig = document.createElement("div");
  thumbnailFig.className = "song-thumbnail";
  thumbnailFig.id = song["file-name"];
  var thumbnailImg = document.createElement("img");
  thumbnailImg.setAttribute("draggable", false);
  var playButton = document.createElement("h1");
  playButton.textContent = "▶";
  playButton.className = "play-button";
  thumbnailImg.src = song["image_uri"];
  thumbnailFig.appendChild(thumbnailImg);
  thumbnailFig.appendChild(playButton);
  songAside.appendChild(thumbnailFig); // Titles

  var korTitle = document.createElement("h3");
  korTitle.textContent = song.name["name-KRko"];
  korTitle.className = "kor-title";
  songAside.appendChild(korTitle);
  var engTitle = document.createElement("p");
  engTitle.textContent = song.name["name-USen"];
  engTitle.className = "eng-title";
  songAside.appendChild(engTitle);
  return songAside;
}; // Populate (fill) DOM with JSON songs


var fillSongs = function fillSongs(data) {
  var songs = Object.entries(data);
  return new Promise(function (resolve, reject) {
    jsLoading.style.display = "none";

    if (songs) {
      // For loop songs into MVP CSS aside tag element
      songs.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            _ = _ref2[0],
            song = _ref2[1];

        root.appendChild(createSongAside(song));
      });
      resolve(songs);
    } else {
      // If no songs were received, display no Song error
      var newSection = document.createElement("section");
      var noSongH2 = document.createElement("h2");
      noSongH2.textContent = "노래를 불러올 수 없습니다. 관리자에게 문의하세요.";
      newSection.appendChild(noSongH2);
      root.appendChild(newSection);
      reject(new Error("❌ERROR: [fillSongs()] Did not recieve any songs"));
    }
  });
}; // Create audio DOM element


var createAudio = function createAudio(src) {
  var autoplay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var newAudio = document.createElement("audio");
  newAudio.src = src; // Audio Options

  newAudio.autoplay = autoplay;
  newAudio.controls = true;
  newAudio.loop = true;
  newAudio.volume = 0.3;
  return newAudio;
}; // Populate modal with songs


var populateModal = function populateModal(clickedSong) {
  // default autoplay boolean
  var autoplay = true; // Audio source

  var audioSrc = clickedSong["music_uri"]; // Create audio figure

  var audioFig = document.createElement("figure");
  var audioCaption = document.createElement("figcaption");
  audioCaption.textContent = "Music";
  audioFig.appendChild(audioCaption);
  audioFig.appendChild(createAudio(audioSrc, autoplay)); // Append music to modal

  jsModalRoot.appendChild(audioFig);
}; // Clear DOM modal element


var clearModal = function clearModal() {
  jsModalRoot.textContent = "";
}; // Handles click event for thumbnail


var handleThumbnailClick = function handleThumbnailClick(event) {
  var data = Object.entries(songs);
  var songID = event.path[1].id; // Get clicked song

  var clickedSong = {};

  for (var i = 0; i < data.length; i++) {
    if (data[i][0] === songID) {
      clickedSong = data[i][1];
    }
  } // Set Song Tilte


  jsSongTitle.textContent = clickedSong.name["name-KRko"]; // Populate modal with given video

  populateModal(clickedSong); // Display modal

  jsModal.style.display = "block"; // Close Button Event

  jsCloseBtn.onclick = function () {
    jsModal.style.display = "none";
    clearModal();
  }; // Backdrop click close event


  window.onclick = function (event) {
    if (event.target === jsModal) {
      jsModal.style.display = "none";
      clearModal();
    }
  };
}; // Adds click event listner for each song thumbnails


var addThumbnailClickEvent = function addThumbnailClickEvent() {
  return new Promise(function (resolve, reject) {
    var songThumbnails = document.getElementsByClassName("song-thumbnail");

    if (songThumbnails) {
      // found song thumbnails DOM elements
      for (var i = 0; i < songThumbnails.length; i++) {
        songThumbnails[i].addEventListener("click", handleThumbnailClick);
      } // Resolve Promise


      resolve();
    } else {
      // Cannot find any song thumbnails
      reject(new Error("❌ERROR: [addThumbnailClickEvent()] Cannot find any song thumbnails"));
    }
  });
}; // Initialization


var init = function init() {
  getSongs() // Promise pattern
  .then(fillSongs).then(addThumbnailClickEvent).catch(console.log);
  jsSearchInput.addEventListener("input", handleInput); // Prevent default submit event for form

  jsForm.addEventListener("submit", function (event) {
    return event.preventDefault();
  });
}; // Initiate when window loaded


window.onload = function () {
  return init();
};
},{}],"../../../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "14110" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../node_modules/parcel/src/builtins/hmr-runtime.js","livesearch.js"], null)
//# sourceMappingURL=/livesearch.eea1b4f0.js.map