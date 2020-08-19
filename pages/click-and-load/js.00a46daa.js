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
})({"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.files = void 0;
var files = [{
  id: 1,
  name: "Nature.mp4",
  timeLeft: 20
}, {
  id: 2,
  name: "Intro movie.mp4",
  timeLeft: 11
}, {
  id: 3,
  name: "Asset.mp4",
  timeLeft: 7
}];
exports.files = files;
},{}],"js/eventHandlers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleResume = exports.handlePause = exports.handleCompress = exports.handleExpand = exports.state = void 0;
// DOM elements
var fullLoader = document.getElementById("jsFullLoader"),
    fullLoadingBar = document.getElementById("jsLoadingBar"),
    fullFileCount = document.getElementById("jsFileCount"),
    fullPercentage = document.getElementById("jsPercentage"),
    fullTimeLeft = document.getElementById("jsTimeLeft"); // DOM control buttons

var pauseResumeBtn = document.getElementById("jsPauseResumeBtn"),
    stopBtn = document.getElementById("jsStopBtn"),
    expandCompressBtn = document.getElementById("jsExpandCompressBtn"),
    menuBtn = document.getElementById("jsMenuBtn"); // Dynamic Fontawesome Icon DOM

var pauseResumeIcon = document.getElementById("jsPauseResumeIcon"),
    expandCompressIcon = document.getElementById("jsExpandCompressIcon"); // State

var state = {
  puased: false,
  completed: false
};
exports.state = state;

var handleExpand = function handleExpand() {
  // Change Icon to compress
  expandCompressIcon.className = "fas fa-compress-alt"; //   Toggle enlarged CSS

  fullLoader.classList.toggle("enlarged"); //   Remove and add new EventListener

  expandCompressBtn.removeEventListener("click", handleExpand);
  expandCompressBtn.addEventListener("click", handleCompress);
};

exports.handleExpand = handleExpand;

var handleCompress = function handleCompress() {
  // Change Icon to compress
  expandCompressIcon.className = "fas fa-expand-alt"; //   Toggle enlarged CSS

  fullLoader.classList.toggle("enlarged"); //   Remove and add new EventListener

  expandCompressBtn.removeEventListener("click", handleCompress);
  expandCompressBtn.addEventListener("click", handleExpand);
};

exports.handleCompress = handleCompress;

var handlePause = function handlePause() {
  // Change Icon to sync
  pauseResumeIcon.className = "fas fa-sync"; // Change state

  state.puased = true; //   Remove and add new EventListener

  pauseResumeBtn.removeEventListener("click", handlePause);
  pauseResumeBtn.addEventListener("click", handleResume);
};

exports.handlePause = handlePause;

var handleResume = function handleResume() {
  // Change Icon to pause
  pauseResumeIcon.className = "fas fa-pause"; // Change state

  state.puased = false; //   Remove and add new EventListener

  pauseResumeBtn.removeEventListener("click", handleResume);
  pauseResumeBtn.addEventListener("click", handlePause);
};

exports.handleResume = handleResume;
},{}],"js/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPercentage = void 0;

var getPercentage = function getPercentage(curr, total) {
  return Math.round(curr / total * 100);
};

exports.getPercentage = getPercentage;
},{}],"js/ticker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startLoading = exports.timeLapse = void 0;

var _eventHandlers = require("./eventHandlers");

var _utils = require("./utils");

// DOM elements
var fullLoader = document.getElementById("jsFullLoader"),
    fullLoadingBar = document.getElementById("jsLoadingBar"),
    fullPercentage = document.getElementById("jsPercentage"),
    fullTimeLeft = document.getElementById("jsTimeLeft"),
    fullTitle = document.querySelector(".title__main");
var timeLapse = 0;
exports.timeLapse = timeLapse;

var startLoading = function startLoading(totalTimeLeft, filesArr) {
  // Full Info Update
  setInterval(function () {
    if (!_eventHandlers.state.puased && !_eventHandlers.state.completed) {
      //   Individual Files Update
      filesArr.forEach(function (file) {
        if (!file.completed) {
          var timeLeft = file.totalTime - timeLapse;
          var percentage = (0, _utils.getPercentage)(timeLapse, file.totalTime);
          file.loadingBar.style.width = "".concat(percentage, "%");
          file.percentage.innerText = percentage;
          file.timeLeft.innerText = timeLeft;

          if (timeLeft === 0) {
            file.completed = true;
            file.element.classList.add("completed");
          }
        }
      });
      var globalTimeLeft = totalTimeLeft - timeLapse;
      var globalPercentage = (0, _utils.getPercentage)(timeLapse, totalTimeLeft);
      fullPercentage.innerText = globalPercentage;
      fullTimeLeft.innerText = globalTimeLeft;
      fullLoadingBar.style.width = "".concat(globalPercentage, "%");

      if (globalTimeLeft === 0) {
        _eventHandlers.state.completed = true;
        fullLoader.classList.add("completed");
        fullTitle.innerHTML = "Upload Complete!";
      }

      exports.timeLapse = timeLapse = timeLapse + 1;
    }
  }, 1000);
};

exports.startLoading = startLoading;
},{"./eventHandlers":"js/eventHandlers.js","./utils":"js/utils.js"}],"js/Components/File.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var createFileDivider = function createFileDivider() {
  var $fileDivider = document.createElement("div");
  $fileDivider.className = "file__divider";
  return $fileDivider;
};

var File = function File(file) {
  /*
    <li class="file" id="file1">
  */
  var $fileItem = document.createElement("li");
  $fileItem.id = "file".concat(file.id);
  $fileItem.className = "file";
  /*
    <div class="file__divider"></div>
  */

  var $firstDivider = createFileDivider();
  /*
    <h2 class="title" id="file2-title">Intro movie.mp4</h2>
  */

  var $title = document.createElement("h2");
  $title.className = "title";
  $title.id = "file".concat(file.id, "-title");
  $title.innerText = file.name;
  $firstDivider.appendChild($title);
  /*
    <div class="loading-backdrop">
        <div class="loading-bar" id="file2-loadingBar"></div>
    </div>
  */

  var $loadingBackdrop = document.createElement("div");
  $loadingBackdrop.className = "loading-backdrop";
  var $loadingBar = document.createElement("div");
  $loadingBar.className = "loading-bar";
  $loadingBar.id = "file".concat(file.id, "-loadingBar");
  $loadingBackdrop.appendChild($loadingBar);
  $firstDivider.appendChild($loadingBackdrop);
  /*
    <div class="file__divider"></div>
  */

  var $secondDivider = createFileDivider();
  /*
    <h2 class="sub-title">
        <span><span id="file2-percentage">33</span>%</span>
        <span><span id="file2-timeLeft">5</span> seconds left</span>
    </h2>
  */

  var $subTitle = document.createElement("h2");
  $subTitle.className = "sub-title";
  var $firstSpan = document.createElement("span");
  var $percentage = document.createElement("span");
  $percentage.id = "file".concat(file.id, "-percentage");
  $percentage.className = "percentage";
  $percentage.innerText = 0;
  $firstSpan.appendChild($percentage);
  $subTitle.appendChild($firstSpan);
  var $secondSpan = document.createElement("span");
  var $timeLeft = document.createElement("span");
  $timeLeft.id = "file".concat(file.id, "-timeLeft");
  $timeLeft.className = "time-left";
  $timeLeft.innerText = file.timeLeft;
  $secondSpan.appendChild($timeLeft);
  $subTitle.appendChild($secondSpan);
  $secondDivider.appendChild($subTitle);
  /*
    <div class="checkmark"><i class="fas fa-check"></i></div>
  */

  var $checkMark = document.createElement("div");
  $checkMark.className = "checkmark";
  var $checkIcon = document.createElement("i");
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
    loadingBar: $loadingBar
  };
};

var _default = File;
exports.default = _default;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _data = require("./data");

var _eventHandlers = require("./eventHandlers");

var _ticker = require("./ticker");

var _File2 = _interopRequireDefault(require("./Components/File"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DOM elements
var fullLoadingBar = document.getElementById("jsLoadingBar"),
    fullFileCount = document.getElementById("jsFileCount"),
    fullPercentage = document.getElementById("jsPercentage"),
    fullTimeLeft = document.getElementById("jsTimeLeft"),
    fileList = document.getElementById("jsFileList"); // DOM control buttons

var pauseResumeBtn = document.getElementById("jsPauseResumeBtn"),
    stopBtn = document.getElementById("jsStopBtn"),
    expandCompressBtn = document.getElementById("jsExpandCompressBtn"),
    menuBtn = document.getElementById("jsMenuBtn");
var fileDOMArr = [];

function getState() {
  var timeLeftArr = [];

  _data.files.forEach(function (file) {
    timeLeftArr.push(file.timeLeft);
  });

  return {
    fileCount: _data.files.length,
    totalTimeLeft: Math.max.apply(Math, timeLeftArr),
    files: _data.files
  };
}

function setFullLoader(fileCount, totalTimeLeft) {
  fullLoadingBar.style.width = "0%";
  fullFileCount.innerText = fileCount;
  fullPercentage.innerText = 0;
  fullTimeLeft.innerText = totalTimeLeft;
}

function setFileList(files) {
  files.forEach(function (file) {
    var _File = (0, _File2.default)(file),
        element = _File.element,
        title = _File.title,
        percentage = _File.percentage,
        timeLeft = _File.timeLeft,
        loadingBar = _File.loadingBar;

    fileDOMArr.push({
      id: file.id,
      totalTime: file.timeLeft,
      element: element,
      title: title,
      percentage: percentage,
      timeLeft: timeLeft,
      loadingBar: loadingBar,
      completed: false
    });
    fileList.append(element);
  });
}

function init() {
  // Initialize state
  var _getState = getState(),
      fileCount = _getState.fileCount,
      totalTimeLeft = _getState.totalTimeLeft,
      files = _getState.files;

  setFullLoader(fileCount, totalTimeLeft);
  setFileList(files); // Add event listender for controller

  expandCompressBtn.addEventListener("click", _eventHandlers.handleExpand);
  pauseResumeBtn.addEventListener("click", _eventHandlers.handlePause); // Start ticking time

  (0, _ticker.startLoading)(totalTimeLeft, fileDOMArr);
}

init();
},{"./data":"js/data.js","./eventHandlers":"js/eventHandlers.js","./ticker":"js/ticker.js","./Components/File":"js/Components/File.js"}],"../../../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "11793" + '/');

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
},{}]},{},["../../../node_modules/parcel/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map