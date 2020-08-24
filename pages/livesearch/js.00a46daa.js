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
})({"../../../node_modules/plyr/dist/plyr.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
"object" == typeof navigator && function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = e || self).Plyr = t();
}(this, function () {
  "use strict";

  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function t(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  function i(e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  }

  function n(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e;
  }

  function a(e, t) {
    var i = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }

    return i;
  }

  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(Object(i), !0).forEach(function (t) {
        n(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }

    return e;
  }

  function r(e, t) {
    if (null == e) return {};

    var i,
        n,
        a = function (e, t) {
      if (null == e) return {};
      var i,
          n,
          a = {},
          s = Object.keys(e);

      for (n = 0; n < s.length; n++) i = s[n], t.indexOf(i) >= 0 || (a[i] = e[i]);

      return a;
    }(e, t);

    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);

      for (n = 0; n < s.length; n++) i = s[n], t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i]);
    }

    return a;
  }

  function o(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var i = [],
          n = !0,
          a = !1,
          s = void 0;

      try {
        for (var r, o = e[Symbol.iterator](); !(n = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); n = !0);
      } catch (e) {
        a = !0, s = e;
      } finally {
        try {
          n || null == o.return || o.return();
        } finally {
          if (a) throw s;
        }
      }

      return i;
    }(e, t) || c(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function l(e) {
    return function (e) {
      if (Array.isArray(e)) return u(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    }(e) || c(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function c(e, t) {
    if (e) {
      if ("string" == typeof e) return u(e, t);
      var i = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? u(e, t) : void 0;
    }
  }

  function u(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];

    return n;
  }

  function d(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  function h(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e;
  }

  function p(e, t) {
    var i = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }

    return i;
  }

  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(Object(i), !0).forEach(function (t) {
        h(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }

    return e;
  }

  var f = {
    addCSS: !0,
    thumbWidth: 15,
    watch: !0
  };

  function g(e, t) {
    return function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }.call(e, t);
  }

  var y = function (e) {
    return null != e ? e.constructor : null;
  },
      v = function (e, t) {
    return !!(e && t && e instanceof t);
  },
      b = function (e) {
    return null == e;
  },
      w = function (e) {
    return y(e) === Object;
  },
      k = function (e) {
    return y(e) === String;
  },
      T = function (e) {
    return Array.isArray(e);
  },
      C = function (e) {
    return v(e, NodeList);
  },
      A = k,
      S = T,
      P = C,
      E = function (e) {
    return v(e, Element);
  },
      N = function (e) {
    return v(e, Event);
  },
      M = function (e) {
    return b(e) || (k(e) || T(e) || C(e)) && !e.length || w(e) && !Object.keys(e).length;
  };

  function x(e, t) {
    if (1 > t) {
      var i = function (e) {
        var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
      }(t);

      return parseFloat(e.toFixed(i));
    }

    return Math.round(e / t) * t;
  }

  var I,
      L,
      O,
      _ = function () {
    function e(t, i) {
      (function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, e), E(t) ? this.element = t : A(t) && (this.element = document.querySelector(t)), E(this.element) && M(this.element.rangeTouch) && (this.config = m({}, f, {}, i), this.init());
    }

    return function (e, t, i) {
      t && d(e.prototype, t), i && d(e, i);
    }(e, [{
      key: "init",
      value: function () {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
      }
    }, {
      key: "destroy",
      value: function () {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
      }
    }, {
      key: "listeners",
      value: function (e) {
        var t = this,
            i = e ? "addEventListener" : "removeEventListener";
        ["touchstart", "touchmove", "touchend"].forEach(function (e) {
          t.element[i](e, function (e) {
            return t.set(e);
          }, !1);
        });
      }
    }, {
      key: "get",
      value: function (t) {
        if (!e.enabled || !N(t)) return null;
        var i,
            n = t.target,
            a = t.changedTouches[0],
            s = parseFloat(n.getAttribute("min")) || 0,
            r = parseFloat(n.getAttribute("max")) || 100,
            o = parseFloat(n.getAttribute("step")) || 1,
            l = n.getBoundingClientRect(),
            c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
        return 0 > (i = 100 / l.width * (a.clientX - l.left)) ? i = 0 : 100 < i && (i = 100), 50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), s + x(i / 100 * (r - s), o);
      }
    }, {
      key: "set",
      value: function (t) {
        e.enabled && N(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function (e, t) {
          if (e && t) {
            var i = new Event(t, {
              bubbles: !0
            });
            e.dispatchEvent(i);
          }
        }(t.target, "touchend" === t.type ? "change" : "input"));
      }
    }], [{
      key: "setup",
      value: function (t) {
        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            n = null;
        if (M(t) || A(t) ? n = Array.from(document.querySelectorAll(A(t) ? t : 'input[type="range"]')) : E(t) ? n = [t] : P(t) ? n = Array.from(t) : S(t) && (n = t.filter(E)), M(n)) return null;
        var a = m({}, f, {}, i);

        if (A(t) && a.watch) {
          var s = new MutationObserver(function (i) {
            Array.from(i).forEach(function (i) {
              Array.from(i.addedNodes).forEach(function (i) {
                E(i) && g(i, t) && new e(i, a);
              });
            });
          });
          s.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        }

        return n.map(function (t) {
          return new e(t, i);
        });
      }
    }, {
      key: "enabled",
      get: function () {
        return "ontouchstart" in document.documentElement;
      }
    }]), e;
  }(),
      j = function (e) {
    return null != e ? e.constructor : null;
  },
      q = function (e, t) {
    return Boolean(e && t && e instanceof t);
  },
      D = function (e) {
    return null == e;
  },
      H = function (e) {
    return j(e) === Object;
  },
      F = function (e) {
    return j(e) === String;
  },
      R = function (e) {
    return j(e) === Function;
  },
      V = function (e) {
    return Array.isArray(e);
  },
      B = function (e) {
    return q(e, NodeList);
  },
      U = function (e) {
    return D(e) || (F(e) || V(e) || B(e)) && !e.length || H(e) && !Object.keys(e).length;
  },
      W = D,
      z = H,
      K = function (e) {
    return j(e) === Number && !Number.isNaN(e);
  },
      Y = F,
      Q = function (e) {
    return j(e) === Boolean;
  },
      X = R,
      $ = V,
      J = B,
      G = function (e) {
    return q(e, Element);
  },
      Z = function (e) {
    return q(e, Event);
  },
      ee = function (e) {
    return q(e, KeyboardEvent);
  },
      te = function (e) {
    return q(e, TextTrack) || !D(e) && F(e.kind);
  },
      ie = function (e) {
    return q(e, Promise) && R(e.then);
  },
      ne = function (e) {
    if (q(e, window.URL)) return !0;
    if (!F(e)) return !1;
    var t = e;
    e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));

    try {
      return !U(new URL(t).hostname);
    } catch (e) {
      return !1;
    }
  },
      ae = U,
      se = (I = document.createElement("span"), L = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    transition: "transitionend"
  }, O = Object.keys(L).find(function (e) {
    return void 0 !== I.style[e];
  }), !!Y(O) && L[O]);

  function re(e, t) {
    setTimeout(function () {
      try {
        e.hidden = !0, e.offsetHeight, e.hidden = !1;
      } catch (e) {}
    }, t);
  }

  var oe = {
    isIE:
    /* @cc_on!@ */
    !!document.documentMode,
    isEdge: window.navigator.userAgent.includes("Edge"),
    isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
    isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
  };

  function le(e, t) {
    return t.split(".").reduce(function (e, t) {
      return e && e[t];
    }, e);
  }

  function ce() {
    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) i[a - 1] = arguments[a];

    if (!i.length) return e;
    var s = i.shift();
    return z(s) ? (Object.keys(s).forEach(function (t) {
      z(s[t]) ? (Object.keys(e).includes(t) || Object.assign(e, n({}, t, {})), ce(e[t], s[t])) : Object.assign(e, n({}, t, s[t]));
    }), ce.apply(void 0, [e].concat(i))) : e;
  }

  function ue(e, t) {
    var i = e.length ? e : [e];
    Array.from(i).reverse().forEach(function (e, i) {
      var n = i > 0 ? t.cloneNode(!0) : t,
          a = e.parentNode,
          s = e.nextSibling;
      n.appendChild(e), s ? a.insertBefore(n, s) : a.appendChild(n);
    });
  }

  function de(e, t) {
    G(e) && !ae(t) && Object.entries(t).filter(function (e) {
      var t = o(e, 2)[1];
      return !W(t);
    }).forEach(function (t) {
      var i = o(t, 2),
          n = i[0],
          a = i[1];
      return e.setAttribute(n, a);
    });
  }

  function he(e, t, i) {
    var n = document.createElement(e);
    return z(t) && de(n, t), Y(i) && (n.innerText = i), n;
  }

  function pe(e, t, i, n) {
    G(t) && t.appendChild(he(e, i, n));
  }

  function me(e) {
    J(e) || $(e) ? Array.from(e).forEach(me) : G(e) && G(e.parentNode) && e.parentNode.removeChild(e);
  }

  function fe(e) {
    if (G(e)) for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1;
  }

  function ge(e, t) {
    return G(t) && G(t.parentNode) && G(e) ? (t.parentNode.replaceChild(e, t), e) : null;
  }

  function ye(e, t) {
    if (!Y(e) || ae(e)) return {};
    var i = {},
        n = ce({}, t);
    return e.split(",").forEach(function (e) {
      var t = e.trim(),
          a = t.replace(".", ""),
          s = t.replace(/[[\]]/g, "").split("="),
          r = o(s, 1)[0],
          l = s.length > 1 ? s[1].replace(/["']/g, "") : "";

      switch (t.charAt(0)) {
        case ".":
          Y(n.class) ? i.class = "".concat(n.class, " ").concat(a) : i.class = a;
          break;

        case "#":
          i.id = t.replace("#", "");
          break;

        case "[":
          i[r] = l;
      }
    }), ce(n, i);
  }

  function ve(e, t) {
    if (G(e)) {
      var i = t;
      Q(i) || (i = !e.hidden), e.hidden = i;
    }
  }

  function be(e, t, i) {
    if (J(e)) return Array.from(e).map(function (e) {
      return be(e, t, i);
    });

    if (G(e)) {
      var n = "toggle";
      return void 0 !== i && (n = i ? "add" : "remove"), e.classList[n](t), e.classList.contains(t);
    }

    return !1;
  }

  function we(e, t) {
    return G(e) && e.classList.contains(t);
  }

  function ke(e, t) {
    var i = Element.prototype;
    return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }).call(e, t);
  }

  function Te(e) {
    return this.elements.container.querySelectorAll(e);
  }

  function Ce(e) {
    return this.elements.container.querySelector(e);
  }

  function Ae() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    G(e) && (e.focus({
      preventScroll: !0
    }), t && be(e, this.config.classNames.tabFocus));
  }

  var Se,
      Pe = {
    "audio/ogg": "vorbis",
    "audio/wav": "1",
    "video/webm": "vp8, vorbis",
    "video/mp4": "avc1.42E01E, mp4a.40.2",
    "video/ogg": "theora"
  },
      Ee = {
    audio: "canPlayType" in document.createElement("audio"),
    video: "canPlayType" in document.createElement("video"),
    check: function (e, t, i) {
      var n = oe.isIPhone && i && Ee.playsinline,
          a = Ee[e] || "html5" !== t;
      return {
        api: a,
        ui: a && Ee.rangeInput && ("video" !== e || !oe.isIPhone || n)
      };
    },
    pip: !(oe.isIPhone || !X(he("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || he("video").disablePictureInPicture)),
    airplay: X(window.WebKitPlaybackTargetAvailabilityEvent),
    playsinline: "playsInline" in document.createElement("video"),
    mime: function (e) {
      if (ae(e)) return !1;
      var t = o(e.split("/"), 1)[0],
          i = e;
      if (!this.isHTML5 || t !== this.type) return !1;
      Object.keys(Pe).includes(i) && (i += '; codecs="'.concat(Pe[e], '"'));

      try {
        return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
      } catch (e) {
        return !1;
      }
    },
    textTracks: "textTracks" in document.createElement("video"),
    rangeInput: (Se = document.createElement("input"), Se.type = "range", "range" === Se.type),
    touch: "ontouchstart" in document.documentElement,
    transitions: !1 !== se,
    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
  },
      Ne = function () {
    var e = !1;

    try {
      var t = Object.defineProperty({}, "passive", {
        get: function () {
          return e = !0, null;
        }
      });
      window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
    } catch (e) {}

    return e;
  }();

  function Me(e, t, i) {
    var n = this,
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];

    if (e && "addEventListener" in e && !ae(t) && X(i)) {
      var o = t.split(" "),
          l = r;
      Ne && (l = {
        passive: s,
        capture: r
      }), o.forEach(function (t) {
        n && n.eventListeners && a && n.eventListeners.push({
          element: e,
          type: t,
          callback: i,
          options: l
        }), e[a ? "addEventListener" : "removeEventListener"](t, i, l);
      });
    }
  }

  function xe(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 ? arguments[2] : void 0,
        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    Me.call(this, e, t, i, !0, n, a);
  }

  function Ie(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 ? arguments[2] : void 0,
        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    Me.call(this, e, t, i, !1, n, a);
  }

  function Le(e) {
    var t = this,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = function r() {
      Ie(e, i, r, a, s);

      for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];

      n.apply(t, l);
    };

    Me.call(this, e, i, r, !0, a, s);
  }

  function Oe(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};

    if (G(e) && !ae(t)) {
      var a = new CustomEvent(t, {
        bubbles: i,
        detail: s(s({}, n), {}, {
          plyr: this
        })
      });
      e.dispatchEvent(a);
    }
  }

  function _e() {
    this && this.eventListeners && (this.eventListeners.forEach(function (e) {
      var t = e.element,
          i = e.type,
          n = e.callback,
          a = e.options;
      t.removeEventListener(i, n, a);
    }), this.eventListeners = []);
  }

  function je() {
    var e = this;
    return new Promise(function (t) {
      return e.ready ? setTimeout(t, 0) : xe.call(e, e.elements.container, "ready", t);
    }).then(function () {});
  }

  function qe(e) {
    ie(e) && e.then(null, function () {});
  }

  function De(e) {
    return !!($(e) || Y(e) && e.includes(":")) && ($(e) ? e : e.split(":")).map(Number).every(K);
  }

  function He(e) {
    if (!$(e) || !e.every(K)) return null;

    var t = o(e, 2),
        i = t[0],
        n = t[1],
        a = function e(t, i) {
      return 0 === i ? t : e(i, t % i);
    }(i, n);

    return [i / a, n / a];
  }

  function Fe(e) {
    var t = function (e) {
      return De(e) ? e.split(":").map(Number) : null;
    },
        i = t(e);

    if (null === i && (i = t(this.config.ratio)), null === i && !ae(this.embed) && $(this.embed.ratio) && (i = this.embed.ratio), null === i && this.isHTML5) {
      var n = this.media;
      i = He([n.videoWidth, n.videoHeight]);
    }

    return i;
  }

  function Re(e) {
    if (!this.isVideo) return {};
    var t = this.elements.wrapper,
        i = Fe.call(this, e),
        n = o($(i) ? i : [0, 0], 2),
        a = 100 / n[0] * n[1];

    if (t.style.paddingBottom = "".concat(a, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
      var s = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
          r = (s - a) / (s / 50);
      this.media.style.transform = "translateY(-".concat(r, "%)");
    } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== i);

    return {
      padding: a,
      ratio: i
    };
  }

  var Ve = {
    getSources: function () {
      var e = this;
      return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (t) {
        var i = t.getAttribute("type");
        return !!ae(i) || Ee.mime.call(e, i);
      }) : [];
    },
    getQualityOptions: function () {
      return this.config.quality.forced ? this.config.quality.options : Ve.getSources.call(this).map(function (e) {
        return Number(e.getAttribute("size"));
      }).filter(Boolean);
    },
    setup: function () {
      if (this.isHTML5) {
        var e = this;
        e.options.speed = e.config.speed.options, ae(this.config.ratio) || Re.call(e), Object.defineProperty(e.media, "quality", {
          get: function () {
            var t = Ve.getSources.call(e).find(function (t) {
              return t.getAttribute("src") === e.source;
            });
            return t && Number(t.getAttribute("size"));
          },
          set: function (t) {
            if (e.quality !== t) {
              if (e.config.quality.forced && X(e.config.quality.onChange)) e.config.quality.onChange(t);else {
                var i = Ve.getSources.call(e).find(function (e) {
                  return Number(e.getAttribute("size")) === t;
                });
                if (!i) return;
                var n = e.media,
                    a = n.currentTime,
                    s = n.paused,
                    r = n.preload,
                    o = n.readyState,
                    l = n.playbackRate;
                e.media.src = i.getAttribute("src"), ("none" !== r || o) && (e.once("loadedmetadata", function () {
                  e.speed = l, e.currentTime = a, s || qe(e.play());
                }), e.media.load());
              }
              Oe.call(e, e.media, "qualitychange", !1, {
                quality: t
              });
            }
          }
        });
      }
    },
    cancelRequests: function () {
      this.isHTML5 && (me(Ve.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
    }
  };

  function Be(e) {
    return $(e) ? e.filter(function (t, i) {
      return e.indexOf(t) === i;
    }) : e;
  }

  function Ue(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];

    return ae(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
      return i[t].toString();
    });
  }

  var We = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString());
  },
      ze = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.toString().replace(/\w\S*/g, function (e) {
      return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    });
  };

  function Ke() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = e.toString();
    return t = We(t, "-", " "), t = We(t, "_", " "), t = ze(t), We(t, " ", "");
  }

  function Ye(e) {
    var t = document.createElement("div");
    return t.appendChild(e), t.innerHTML;
  }

  var Qe = {
    pip: "PIP",
    airplay: "AirPlay",
    html5: "HTML5",
    vimeo: "Vimeo",
    youtube: "YouTube"
  },
      Xe = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (ae(e) || ae(t)) return "";
    var i = le(t.i18n, e);
    if (ae(i)) return Object.keys(Qe).includes(e) ? Qe[e] : "";
    var n = {
      "{seektime}": t.seekTime,
      "{title}": t.title
    };
    return Object.entries(n).forEach(function (e) {
      var t = o(e, 2),
          n = t[0],
          a = t[1];
      i = We(i, n, a);
    }), i;
  },
      $e = function () {
    function t(i) {
      e(this, t), this.enabled = i.config.storage.enabled, this.key = i.config.storage.key;
    }

    return i(t, [{
      key: "get",
      value: function (e) {
        if (!t.supported || !this.enabled) return null;
        var i = window.localStorage.getItem(this.key);
        if (ae(i)) return null;
        var n = JSON.parse(i);
        return Y(e) && e.length ? n[e] : n;
      }
    }, {
      key: "set",
      value: function (e) {
        if (t.supported && this.enabled && z(e)) {
          var i = this.get();
          ae(i) && (i = {}), ce(i, e), window.localStorage.setItem(this.key, JSON.stringify(i));
        }
      }
    }], [{
      key: "supported",
      get: function () {
        try {
          if (!("localStorage" in window)) return !1;
          return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0;
        } catch (e) {
          return !1;
        }
      }
    }]), t;
  }();

  function Je(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
    return new Promise(function (i, n) {
      try {
        var a = new XMLHttpRequest();
        if (!("withCredentials" in a)) return;
        a.addEventListener("load", function () {
          if ("text" === t) try {
            i(JSON.parse(a.responseText));
          } catch (e) {
            i(a.responseText);
          } else i(a.response);
        }), a.addEventListener("error", function () {
          throw new Error(a.status);
        }), a.open("GET", e, !0), a.responseType = t, a.send();
      } catch (e) {
        n(e);
      }
    });
  }

  function Ge(e, t) {
    if (Y(e)) {
      var i = Y(t),
          n = function () {
        return null !== document.getElementById(t);
      },
          a = function (e, t) {
        e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e);
      };

      if (!i || !n()) {
        var s = $e.supported,
            r = document.createElement("div");

        if (r.setAttribute("hidden", ""), i && r.setAttribute("id", t), s) {
          var o = window.localStorage.getItem("".concat("cache", "-").concat(t));

          if (null !== o) {
            var l = JSON.parse(o);
            a(r, l.content);
          }
        }

        Je(e).then(function (e) {
          ae(e) || (s && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({
            content: e
          })), a(r, e));
        }).catch(function () {});
      }
    }
  }

  var Ze = function (e) {
    return Math.trunc(e / 60 / 60 % 60, 10);
  },
      et = function (e) {
    return Math.trunc(e / 60 % 60, 10);
  },
      tt = function (e) {
    return Math.trunc(e % 60, 10);
  };

  function it() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!K(e)) return it(void 0, t, i);

    var n = function (e) {
      return "0".concat(e).slice(-2);
    },
        a = Ze(e),
        s = et(e),
        r = tt(e);

    return a = t || a > 0 ? "".concat(a, ":") : "", "".concat(i && e > 0 ? "-" : "").concat(a).concat(n(s), ":").concat(n(r));
  }

  var nt = {
    getIconUrl: function () {
      var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || oe.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors: e
      };
    },
    findElements: function () {
      try {
        return this.elements.controls = Ce.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
          play: Te.call(this, this.config.selectors.buttons.play),
          pause: Ce.call(this, this.config.selectors.buttons.pause),
          restart: Ce.call(this, this.config.selectors.buttons.restart),
          rewind: Ce.call(this, this.config.selectors.buttons.rewind),
          fastForward: Ce.call(this, this.config.selectors.buttons.fastForward),
          mute: Ce.call(this, this.config.selectors.buttons.mute),
          pip: Ce.call(this, this.config.selectors.buttons.pip),
          airplay: Ce.call(this, this.config.selectors.buttons.airplay),
          settings: Ce.call(this, this.config.selectors.buttons.settings),
          captions: Ce.call(this, this.config.selectors.buttons.captions),
          fullscreen: Ce.call(this, this.config.selectors.buttons.fullscreen)
        }, this.elements.progress = Ce.call(this, this.config.selectors.progress), this.elements.inputs = {
          seek: Ce.call(this, this.config.selectors.inputs.seek),
          volume: Ce.call(this, this.config.selectors.inputs.volume)
        }, this.elements.display = {
          buffer: Ce.call(this, this.config.selectors.display.buffer),
          currentTime: Ce.call(this, this.config.selectors.display.currentTime),
          duration: Ce.call(this, this.config.selectors.display.duration)
        }, G(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0;
      } catch (e) {
        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
      }
    },
    createIcon: function (e, t) {
      var i = nt.getIconUrl.call(this),
          n = "".concat(i.cors ? "" : i.url, "#").concat(this.config.iconPrefix),
          a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      de(a, ce(t, {
        "aria-hidden": "true",
        focusable: "false"
      }));
      var s = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          r = "".concat(n, "-").concat(e);
      return "href" in s && s.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r), a.appendChild(s), a;
    },
    createLabel: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = Xe(e, this.config),
          n = s(s({}, t), {}, {
        class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
      });
      return he("span", n, i);
    },
    createBadge: function (e) {
      if (ae(e)) return null;
      var t = he("span", {
        class: this.config.classNames.menu.value
      });
      return t.appendChild(he("span", {
        class: this.config.classNames.menu.badge
      }, e)), t;
    },
    createButton: function (e, t) {
      var i = this,
          n = ce({}, t),
          a = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = e.toString();
        return (t = Ke(t)).charAt(0).toLowerCase() + t.slice(1);
      }(e),
          s = {
        element: "button",
        toggle: !1,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };

      switch (["element", "icon", "label"].forEach(function (e) {
        Object.keys(n).includes(e) && (s[e] = n[e], delete n[e]);
      }), "button" !== s.element || Object.keys(n).includes("type") || (n.type = "button"), Object.keys(n).includes("class") ? n.class.split(" ").some(function (e) {
        return e === i.config.classNames.control;
      }) || ce(n, {
        class: "".concat(n.class, " ").concat(this.config.classNames.control)
      }) : n.class = this.config.classNames.control, e) {
        case "play":
          s.toggle = !0, s.label = "play", s.labelPressed = "pause", s.icon = "play", s.iconPressed = "pause";
          break;

        case "mute":
          s.toggle = !0, s.label = "mute", s.labelPressed = "unmute", s.icon = "volume", s.iconPressed = "muted";
          break;

        case "captions":
          s.toggle = !0, s.label = "enableCaptions", s.labelPressed = "disableCaptions", s.icon = "captions-off", s.iconPressed = "captions-on";
          break;

        case "fullscreen":
          s.toggle = !0, s.label = "enterFullscreen", s.labelPressed = "exitFullscreen", s.icon = "enter-fullscreen", s.iconPressed = "exit-fullscreen";
          break;

        case "play-large":
          n.class += " ".concat(this.config.classNames.control, "--overlaid"), a = "play", s.label = "play", s.icon = "play";
          break;

        default:
          ae(s.label) && (s.label = a), ae(s.icon) && (s.icon = e);
      }

      var r = he(s.element);
      return s.toggle ? (r.appendChild(nt.createIcon.call(this, s.iconPressed, {
        class: "icon--pressed"
      })), r.appendChild(nt.createIcon.call(this, s.icon, {
        class: "icon--not-pressed"
      })), r.appendChild(nt.createLabel.call(this, s.labelPressed, {
        class: "label--pressed"
      })), r.appendChild(nt.createLabel.call(this, s.label, {
        class: "label--not-pressed"
      }))) : (r.appendChild(nt.createIcon.call(this, s.icon)), r.appendChild(nt.createLabel.call(this, s.label))), ce(n, ye(this.config.selectors.buttons[a], n)), de(r, n), "play" === a ? ($(this.elements.buttons[a]) || (this.elements.buttons[a] = []), this.elements.buttons[a].push(r)) : this.elements.buttons[a] = r, r;
    },
    createRange: function (e, t) {
      var i = he("input", ce(ye(this.config.selectors.inputs[e]), {
        type: "range",
        min: 0,
        max: 100,
        step: .01,
        value: 0,
        autocomplete: "off",
        role: "slider",
        "aria-label": Xe(e, this.config),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": 0
      }, t));
      return this.elements.inputs[e] = i, nt.updateRangeFill.call(this, i), _.setup(i), i;
    },
    createProgress: function (e, t) {
      var i = he("progress", ce(ye(this.config.selectors.display[e]), {
        min: 0,
        max: 100,
        value: 0,
        role: "progressbar",
        "aria-hidden": !0
      }, t));

      if ("volume" !== e) {
        i.appendChild(he("span", null, "0"));
        var n = {
          played: "played",
          buffer: "buffered"
        }[e],
            a = n ? Xe(n, this.config) : "";
        i.innerText = "% ".concat(a.toLowerCase());
      }

      return this.elements.display[e] = i, i;
    },
    createTime: function (e, t) {
      var i = ye(this.config.selectors.display[e], t),
          n = he("div", ce(i, {
        class: "".concat(i.class ? i.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
        "aria-label": Xe(e, this.config)
      }), "00:00");
      return this.elements.display[e] = n, n;
    },
    bindMenuItemShortcuts: function (e, t) {
      var i = this;
      xe.call(this, e, "keydown keyup", function (n) {
        if ([32, 38, 39, 40].includes(n.which) && (n.preventDefault(), n.stopPropagation(), "keydown" !== n.type)) {
          var a,
              s = ke(e, '[role="menuitemradio"]');
          if (!s && [32, 39].includes(n.which)) nt.showMenuPanel.call(i, t, !0);else 32 !== n.which && (40 === n.which || s && 39 === n.which ? (a = e.nextElementSibling, G(a) || (a = e.parentNode.firstElementChild)) : (a = e.previousElementSibling, G(a) || (a = e.parentNode.lastElementChild)), Ae.call(i, a, !0));
        }
      }, !1), xe.call(this, e, "keyup", function (e) {
        13 === e.which && nt.focusFirstMenuItem.call(i, null, !0);
      });
    },
    createMenuItem: function (e) {
      var t = this,
          i = e.value,
          n = e.list,
          a = e.type,
          s = e.title,
          r = e.badge,
          o = void 0 === r ? null : r,
          l = e.checked,
          c = void 0 !== l && l,
          u = ye(this.config.selectors.inputs[a]),
          d = he("button", ce(u, {
        type: "button",
        role: "menuitemradio",
        class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
        "aria-checked": c,
        value: i
      })),
          h = he("span");
      h.innerHTML = s, G(o) && h.appendChild(o), d.appendChild(h), Object.defineProperty(d, "checked", {
        enumerable: !0,
        get: function () {
          return "true" === d.getAttribute("aria-checked");
        },
        set: function (e) {
          e && Array.from(d.parentNode.children).filter(function (e) {
            return ke(e, '[role="menuitemradio"]');
          }).forEach(function (e) {
            return e.setAttribute("aria-checked", "false");
          }), d.setAttribute("aria-checked", e ? "true" : "false");
        }
      }), this.listeners.bind(d, "click keyup", function (e) {
        if (!ee(e) || 32 === e.which) {
          switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, a) {
            case "language":
              t.currentTrack = Number(i);
              break;

            case "quality":
              t.quality = i;
              break;

            case "speed":
              t.speed = parseFloat(i);
          }

          nt.showMenuPanel.call(t, "home", ee(e));
        }
      }, a, !1), nt.bindMenuItemShortcuts.call(this, d, a), n.appendChild(d);
    },
    formatTime: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!K(e)) return e;
      var i = Ze(this.duration) > 0;
      return it(e, i, t);
    },
    updateTimeDisplay: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      G(e) && K(t) && (e.innerText = nt.formatTime(t, i));
    },
    updateVolume: function () {
      this.supported.ui && (G(this.elements.inputs.volume) && nt.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), G(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
    },
    setRange: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      G(e) && (e.value = t, nt.updateRangeFill.call(this, e));
    },
    updateProgress: function (e) {
      var t = this;

      if (this.supported.ui && Z(e)) {
        var i,
            n,
            a = 0;
        if (e) switch (e.type) {
          case "timeupdate":
          case "seeking":
          case "seeked":
            i = this.currentTime, n = this.duration, a = 0 === i || 0 === n || Number.isNaN(i) || Number.isNaN(n) ? 0 : (i / n * 100).toFixed(2), "timeupdate" === e.type && nt.setRange.call(this, this.elements.inputs.seek, a);
            break;

          case "playing":
          case "progress":
            !function (e, i) {
              var n = K(i) ? i : 0,
                  a = G(e) ? e : t.elements.display.buffer;

              if (G(a)) {
                a.value = n;
                var s = a.getElementsByTagName("span")[0];
                G(s) && (s.childNodes[0].nodeValue = n);
              }
            }(this.elements.display.buffer, 100 * this.buffered);
        }
      }
    },
    updateRangeFill: function (e) {
      var t = Z(e) ? e.target : e;

      if (G(t) && "range" === t.getAttribute("type")) {
        if (ke(t, this.config.selectors.inputs.seek)) {
          t.setAttribute("aria-valuenow", this.currentTime);
          var i = nt.formatTime(this.currentTime),
              n = nt.formatTime(this.duration),
              a = Xe("seekLabel", this.config);
          t.setAttribute("aria-valuetext", a.replace("{currentTime}", i).replace("{duration}", n));
        } else if (ke(t, this.config.selectors.inputs.volume)) {
          var s = 100 * t.value;
          t.setAttribute("aria-valuenow", s), t.setAttribute("aria-valuetext", "".concat(s.toFixed(1), "%"));
        } else t.setAttribute("aria-valuenow", t.value);

        oe.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"));
      }
    },
    updateSeekTooltip: function (e) {
      var t = this;

      if (this.config.tooltips.seek && G(this.elements.inputs.seek) && G(this.elements.display.seekTooltip) && 0 !== this.duration) {
        var i = "".concat(this.config.classNames.tooltip, "--visible"),
            n = function (e) {
          return be(t.elements.display.seekTooltip, i, e);
        };

        if (this.touch) n(!1);else {
          var a = 0,
              s = this.elements.progress.getBoundingClientRect();
          if (Z(e)) a = 100 / s.width * (e.pageX - s.left);else {
            if (!we(this.elements.display.seekTooltip, i)) return;
            a = parseFloat(this.elements.display.seekTooltip.style.left, 10);
          }
          a < 0 ? a = 0 : a > 100 && (a = 100), nt.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * a), this.elements.display.seekTooltip.style.left = "".concat(a, "%"), Z(e) && ["mouseenter", "mouseleave"].includes(e.type) && n("mouseenter" === e.type);
        }
      }
    },
    timeUpdate: function (e) {
      var t = !G(this.elements.display.duration) && this.config.invertTime;
      nt.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || nt.updateProgress.call(this, e);
    },
    durationUpdate: function () {
      if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
        if (this.duration >= Math.pow(2, 32)) return ve(this.elements.display.currentTime, !0), void ve(this.elements.progress, !0);
        G(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
        var e = G(this.elements.display.duration);
        !e && this.config.displayDuration && this.paused && nt.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && nt.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), nt.updateSeekTooltip.call(this);
      }
    },
    toggleMenuButton: function (e, t) {
      ve(this.elements.settings.buttons[e], !t);
    },
    updateSetting: function (e, t, i) {
      var n = this.elements.settings.panels[e],
          a = null,
          s = t;
      if ("captions" === e) a = this.currentTrack;else {
        if (a = ae(i) ? this[e] : i, ae(a) && (a = this.config[e].default), !ae(this.options[e]) && !this.options[e].includes(a)) return void this.debug.warn("Unsupported value of '".concat(a, "' for ").concat(e));
        if (!this.config[e].options.includes(a)) return void this.debug.warn("Disabled value of '".concat(a, "' for ").concat(e));
      }

      if (G(s) || (s = n && n.querySelector('[role="menu"]')), G(s)) {
        this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = nt.getLabel.call(this, e, a);
        var r = s && s.querySelector('[value="'.concat(a, '"]'));
        G(r) && (r.checked = !0);
      }
    },
    getLabel: function (e, t) {
      switch (e) {
        case "speed":
          return 1 === t ? Xe("normal", this.config) : "".concat(t, "&times;");

        case "quality":
          if (K(t)) {
            var i = Xe("qualityLabel.".concat(t), this.config);
            return i.length ? i : "".concat(t, "p");
          }

          return ze(t);

        case "captions":
          return rt.getLabel.call(this);

        default:
          return null;
      }
    },
    setQualityMenu: function (e) {
      var t = this;

      if (G(this.elements.settings.panels.quality)) {
        var i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
        $(e) && (this.options.quality = Be(e).filter(function (e) {
          return t.config.quality.options.includes(e);
        }));
        var n = !ae(this.options.quality) && this.options.quality.length > 1;

        if (nt.toggleMenuButton.call(this, "quality", n), fe(i), nt.checkMenu.call(this), n) {
          var a = function (e) {
            var i = Xe("qualityBadge.".concat(e), t.config);
            return i.length ? nt.createBadge.call(t, i) : null;
          };

          this.options.quality.sort(function (e, i) {
            var n = t.config.quality.options;
            return n.indexOf(e) > n.indexOf(i) ? 1 : -1;
          }).forEach(function (e) {
            nt.createMenuItem.call(t, {
              value: e,
              list: i,
              type: "quality",
              title: nt.getLabel.call(t, "quality", e),
              badge: a(e)
            });
          }), nt.updateSetting.call(this, "quality", i);
        }
      }
    },
    setCaptionsMenu: function () {
      var e = this;

      if (G(this.elements.settings.panels.captions)) {
        var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
            i = rt.getTracks.call(this),
            n = Boolean(i.length);

        if (nt.toggleMenuButton.call(this, "captions", n), fe(t), nt.checkMenu.call(this), n) {
          var a = i.map(function (i, n) {
            return {
              value: n,
              checked: e.captions.toggled && e.currentTrack === n,
              title: rt.getLabel.call(e, i),
              badge: i.language && nt.createBadge.call(e, i.language.toUpperCase()),
              list: t,
              type: "language"
            };
          });
          a.unshift({
            value: -1,
            checked: !this.captions.toggled,
            title: Xe("disabled", this.config),
            list: t,
            type: "language"
          }), a.forEach(nt.createMenuItem.bind(this)), nt.updateSetting.call(this, "captions", t);
        }
      }
    },
    setSpeedMenu: function () {
      var e = this;

      if (G(this.elements.settings.panels.speed)) {
        var t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
        this.options.speed = this.options.speed.filter(function (t) {
          return t >= e.minimumSpeed && t <= e.maximumSpeed;
        });
        var i = !ae(this.options.speed) && this.options.speed.length > 1;
        nt.toggleMenuButton.call(this, "speed", i), fe(t), nt.checkMenu.call(this), i && (this.options.speed.forEach(function (i) {
          nt.createMenuItem.call(e, {
            value: i,
            list: t,
            type: "speed",
            title: nt.getLabel.call(e, "speed", i)
          });
        }), nt.updateSetting.call(this, "speed", t));
      }
    },
    checkMenu: function () {
      var e = this.elements.settings.buttons,
          t = !ae(e) && Object.values(e).some(function (e) {
        return !e.hidden;
      });
      ve(this.elements.settings.menu, !t);
    },
    focusFirstMenuItem: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

      if (!this.elements.settings.popup.hidden) {
        var i = e;
        G(i) || (i = Object.values(this.elements.settings.panels).find(function (e) {
          return !e.hidden;
        }));
        var n = i.querySelector('[role^="menuitem"]');
        Ae.call(this, n, t);
      }
    },
    toggleMenu: function (e) {
      var t = this.elements.settings.popup,
          i = this.elements.buttons.settings;

      if (G(t) && G(i)) {
        var n = t.hidden,
            a = n;
        if (Q(e)) a = e;else if (ee(e) && 27 === e.which) a = !1;else if (Z(e)) {
          var s = X(e.composedPath) ? e.composedPath()[0] : e.target,
              r = t.contains(s);
          if (r || !r && e.target !== i && a) return;
        }
        i.setAttribute("aria-expanded", a), ve(t, !a), be(this.elements.container, this.config.classNames.menu.open, a), a && ee(e) ? nt.focusFirstMenuItem.call(this, null, !0) : a || n || Ae.call(this, i, ee(e));
      }
    },
    getMenuSize: function (e) {
      var t = e.cloneNode(!0);
      t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
      var i = t.scrollWidth,
          n = t.scrollHeight;
      return me(t), {
        width: i,
        height: n
      };
    },
    showMenuPanel: function () {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));

      if (G(n)) {
        var a = n.parentNode,
            s = Array.from(a.children).find(function (e) {
          return !e.hidden;
        });

        if (Ee.transitions && !Ee.reducedMotion) {
          a.style.width = "".concat(s.scrollWidth, "px"), a.style.height = "".concat(s.scrollHeight, "px");

          var r = nt.getMenuSize.call(this, n),
              o = function t(i) {
            i.target === a && ["width", "height"].includes(i.propertyName) && (a.style.width = "", a.style.height = "", Ie.call(e, a, se, t));
          };

          xe.call(this, a, se, o), a.style.width = "".concat(r.width, "px"), a.style.height = "".concat(r.height, "px");
        }

        ve(s, !0), ve(n, !1), nt.focusFirstMenuItem.call(this, n, i);
      }
    },
    setDownloadUrl: function () {
      var e = this.elements.buttons.download;
      G(e) && e.setAttribute("href", this.download);
    },
    create: function (e) {
      var t = this,
          i = nt.bindMenuItemShortcuts,
          n = nt.createButton,
          a = nt.createProgress,
          s = nt.createRange,
          r = nt.createTime,
          o = nt.setQualityMenu,
          l = nt.setSpeedMenu,
          c = nt.showMenuPanel;
      this.elements.controls = null, $(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(n.call(this, "play-large"));
      var u = he("div", ye(this.config.selectors.controls.wrapper));
      this.elements.controls = u;
      var d = {
        class: "plyr__controls__item"
      };
      return Be($(this.config.controls) ? this.config.controls : []).forEach(function (o) {
        if ("restart" === o && u.appendChild(n.call(t, "restart", d)), "rewind" === o && u.appendChild(n.call(t, "rewind", d)), "play" === o && u.appendChild(n.call(t, "play", d)), "fast-forward" === o && u.appendChild(n.call(t, "fast-forward", d)), "progress" === o) {
          var l = he("div", {
            class: "".concat(d.class, " plyr__progress__container")
          }),
              h = he("div", ye(t.config.selectors.progress));

          if (h.appendChild(s.call(t, "seek", {
            id: "plyr-seek-".concat(e.id)
          })), h.appendChild(a.call(t, "buffer")), t.config.tooltips.seek) {
            var p = he("span", {
              class: t.config.classNames.tooltip
            }, "00:00");
            h.appendChild(p), t.elements.display.seekTooltip = p;
          }

          t.elements.progress = h, l.appendChild(t.elements.progress), u.appendChild(l);
        }

        if ("current-time" === o && u.appendChild(r.call(t, "currentTime", d)), "duration" === o && u.appendChild(r.call(t, "duration", d)), "mute" === o || "volume" === o) {
          var m = t.elements.volume;

          if (G(m) && u.contains(m) || (m = he("div", ce({}, d, {
            class: "".concat(d.class, " plyr__volume").trim()
          })), t.elements.volume = m, u.appendChild(m)), "mute" === o && m.appendChild(n.call(t, "mute")), "volume" === o && !oe.isIos) {
            var f = {
              max: 1,
              step: .05,
              value: t.config.volume
            };
            m.appendChild(s.call(t, "volume", ce(f, {
              id: "plyr-volume-".concat(e.id)
            })));
          }
        }

        if ("captions" === o && u.appendChild(n.call(t, "captions", d)), "settings" === o && !ae(t.config.settings)) {
          var g = he("div", ce({}, d, {
            class: "".concat(d.class, " plyr__menu").trim(),
            hidden: ""
          }));
          g.appendChild(n.call(t, "settings", {
            "aria-haspopup": !0,
            "aria-controls": "plyr-settings-".concat(e.id),
            "aria-expanded": !1
          }));
          var y = he("div", {
            class: "plyr__menu__container",
            id: "plyr-settings-".concat(e.id),
            hidden: ""
          }),
              v = he("div"),
              b = he("div", {
            id: "plyr-settings-".concat(e.id, "-home")
          }),
              w = he("div", {
            role: "menu"
          });
          b.appendChild(w), v.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach(function (n) {
            var a = he("button", ce(ye(t.config.selectors.buttons.settings), {
              type: "button",
              class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
              role: "menuitem",
              "aria-haspopup": !0,
              hidden: ""
            }));
            i.call(t, a, n), xe.call(t, a, "click", function () {
              c.call(t, n, !1);
            });
            var s = he("span", null, Xe(n, t.config)),
                r = he("span", {
              class: t.config.classNames.menu.value
            });
            r.innerHTML = e[n], s.appendChild(r), a.appendChild(s), w.appendChild(a);
            var o = he("div", {
              id: "plyr-settings-".concat(e.id, "-").concat(n),
              hidden: ""
            }),
                l = he("button", {
              type: "button",
              class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
            });
            l.appendChild(he("span", {
              "aria-hidden": !0
            }, Xe(n, t.config))), l.appendChild(he("span", {
              class: t.config.classNames.hidden
            }, Xe("menuBack", t.config))), xe.call(t, o, "keydown", function (e) {
              37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0));
            }, !1), xe.call(t, l, "click", function () {
              c.call(t, "home", !1);
            }), o.appendChild(l), o.appendChild(he("div", {
              role: "menu"
            })), v.appendChild(o), t.elements.settings.buttons[n] = a, t.elements.settings.panels[n] = o;
          }), y.appendChild(v), g.appendChild(y), u.appendChild(g), t.elements.settings.popup = y, t.elements.settings.menu = g;
        }

        if ("pip" === o && Ee.pip && u.appendChild(n.call(t, "pip", d)), "airplay" === o && Ee.airplay && u.appendChild(n.call(t, "airplay", d)), "download" === o) {
          var k = ce({}, d, {
            element: "a",
            href: t.download,
            target: "_blank"
          });
          t.isHTML5 && (k.download = "");
          var T = t.config.urls.download;
          !ne(T) && t.isEmbed && ce(k, {
            icon: "logo-".concat(t.provider),
            label: t.provider
          }), u.appendChild(n.call(t, "download", k));
        }

        "fullscreen" === o && u.appendChild(n.call(t, "fullscreen", d));
      }), this.isHTML5 && o.call(this, Ve.getQualityOptions.call(this)), l.call(this), u;
    },
    inject: function () {
      var e = this;

      if (this.config.loadSprite) {
        var t = nt.getIconUrl.call(this);
        t.cors && Ge(t.url, "sprite-plyr");
      }

      this.id = Math.floor(1e4 * Math.random());
      var i = null;
      this.elements.controls = null;
      var n = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      },
          a = !0;
      X(this.config.controls) && (this.config.controls = this.config.controls.call(this, n)), this.config.controls || (this.config.controls = []), G(this.config.controls) || Y(this.config.controls) ? i = this.config.controls : (i = nt.create.call(this, {
        id: this.id,
        seektime: this.config.seekTime,
        speed: this.speed,
        quality: this.quality,
        captions: rt.getLabel.call(this)
      }), a = !1);
      var s, r;

      if (a && Y(this.config.controls) && (s = i, Object.entries(n).forEach(function (e) {
        var t = o(e, 2),
            i = t[0],
            n = t[1];
        s = We(s, "{".concat(i, "}"), n);
      }), i = s), Y(this.config.selectors.controls.container) && (r = document.querySelector(this.config.selectors.controls.container)), G(r) || (r = this.elements.container), r[G(i) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", i), G(this.elements.controls) || nt.findElements.call(this), !ae(this.elements.buttons)) {
        var l = function (t) {
          var i = e.config.classNames.controlPressed;
          Object.defineProperty(t, "pressed", {
            enumerable: !0,
            get: function () {
              return we(t, i);
            },
            set: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              be(t, i, e);
            }
          });
        };

        Object.values(this.elements.buttons).filter(Boolean).forEach(function (e) {
          $(e) || J(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e);
        });
      }

      if (oe.isEdge && re(r), this.config.tooltips.controls) {
        var c = this.config,
            u = c.classNames,
            d = c.selectors,
            h = "".concat(d.controls.wrapper, " ").concat(d.labels, " .").concat(u.hidden),
            p = Te.call(this, h);
        Array.from(p).forEach(function (t) {
          be(t, e.config.classNames.hidden, !1), be(t, e.config.classNames.tooltip, !0);
        });
      }
    }
  };

  function at(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        i = e;

    if (t) {
      var n = document.createElement("a");
      n.href = i, i = n.href;
    }

    try {
      return new URL(i);
    } catch (e) {
      return null;
    }
  }

  function st(e) {
    var t = new URLSearchParams();
    return z(e) && Object.entries(e).forEach(function (e) {
      var i = o(e, 2),
          n = i[0],
          a = i[1];
      t.set(n, a);
    }), t;
  }

  var rt = {
    setup: function () {
      if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !Ee.textTracks) $(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && nt.setCaptionsMenu.call(this);else {
        if (G(this.elements.captions) || (this.elements.captions = he("div", ye(this.config.selectors.captions)), function (e, t) {
          G(e) && G(t) && t.parentNode.insertBefore(e, t.nextSibling);
        }(this.elements.captions, this.elements.wrapper)), oe.isIE && window.URL) {
          var e = this.media.querySelectorAll("track");
          Array.from(e).forEach(function (e) {
            var t = e.getAttribute("src"),
                i = at(t);
            null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && Je(t, "blob").then(function (t) {
              e.setAttribute("src", window.URL.createObjectURL(t));
            }).catch(function () {
              me(e);
            });
          });
        }

        var t = Be((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
          return e.split("-")[0];
        })),
            i = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
        if ("auto" === i) i = o(t, 1)[0];
        var n = this.storage.get("captions");

        if (Q(n) || (n = this.config.captions.active), Object.assign(this.captions, {
          toggled: !1,
          active: n,
          language: i,
          languages: t
        }), this.isHTML5) {
          var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";
          xe.call(this, this.media.textTracks, a, rt.update.bind(this));
        }

        setTimeout(rt.update.bind(this), 0);
      }
    },
    update: function () {
      var e = this,
          t = rt.getTracks.call(this, !0),
          i = this.captions,
          n = i.active,
          a = i.language,
          s = i.meta,
          r = i.currentTrackNode,
          o = Boolean(t.find(function (e) {
        return e.language === a;
      }));
      this.isHTML5 && this.isVideo && t.filter(function (e) {
        return !s.get(e);
      }).forEach(function (t) {
        e.debug.log("Track added", t), s.set(t, {
          default: "showing" === t.mode
        }), "showing" === t.mode && (t.mode = "hidden"), xe.call(e, t, "cuechange", function () {
          return rt.updateCues.call(e);
        });
      }), (o && this.language !== a || !t.includes(r)) && (rt.setLanguage.call(this, a), rt.toggle.call(this, n && o)), be(this.elements.container, this.config.classNames.captions.enabled, !ae(t)), $(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && nt.setCaptionsMenu.call(this);
    },
    toggle: function (e) {
      var t = this,
          i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

      if (this.supported.ui) {
        var n = this.captions.toggled,
            a = this.config.classNames.captions.active,
            s = W(e) ? !n : e;

        if (s !== n) {
          if (i || (this.captions.active = s, this.storage.set({
            captions: s
          })), !this.language && s && !i) {
            var r = rt.getTracks.call(this),
                o = rt.findTrack.call(this, [this.captions.language].concat(l(this.captions.languages)), !0);
            return this.captions.language = o.language, void rt.set.call(this, r.indexOf(o));
          }

          this.elements.buttons.captions && (this.elements.buttons.captions.pressed = s), be(this.elements.container, a, s), this.captions.toggled = s, nt.updateSetting.call(this, "captions"), Oe.call(this, this.media, s ? "captionsenabled" : "captionsdisabled");
        }

        setTimeout(function () {
          s && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden");
        });
      }
    },
    set: function (e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          i = rt.getTracks.call(this);
      if (-1 !== e) {
        if (K(e)) {
          if (e in i) {
            if (this.captions.currentTrack !== e) {
              this.captions.currentTrack = e;
              var n = i[e],
                  a = n || {},
                  s = a.language;
              this.captions.currentTrackNode = n, nt.updateSetting.call(this, "captions"), t || (this.captions.language = s, this.storage.set({
                language: s
              })), this.isVimeo && this.embed.enableTextTrack(s), Oe.call(this, this.media, "languagechange");
            }

            rt.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && rt.updateCues.call(this);
          } else this.debug.warn("Track not found", e);
        } else this.debug.warn("Invalid caption argument", e);
      } else rt.toggle.call(this, !1, t);
    },
    setLanguage: function (e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

      if (Y(e)) {
        var i = e.toLowerCase();
        this.captions.language = i;
        var n = rt.getTracks.call(this),
            a = rt.findTrack.call(this, [i]);
        rt.set.call(this, n.indexOf(a), t);
      } else this.debug.warn("Invalid language argument", e);
    },
    getTracks: function () {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          i = Array.from((this.media || {}).textTracks || []);
      return i.filter(function (i) {
        return !e.isHTML5 || t || e.captions.meta.has(i);
      }).filter(function (e) {
        return ["captions", "subtitles"].includes(e.kind);
      });
    },
    findTrack: function (e) {
      var t,
          i = this,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          a = rt.getTracks.call(this),
          s = function (e) {
        return Number((i.captions.meta.get(e) || {}).default);
      },
          r = Array.from(a).sort(function (e, t) {
        return s(t) - s(e);
      });

      return e.every(function (e) {
        return !(t = r.find(function (t) {
          return t.language === e;
        }));
      }), t || (n ? r[0] : void 0);
    },
    getCurrentTrack: function () {
      return rt.getTracks.call(this)[this.currentTrack];
    },
    getLabel: function (e) {
      var t = e;
      return !te(t) && Ee.textTracks && this.captions.toggled && (t = rt.getCurrentTrack.call(this)), te(t) ? ae(t.label) ? ae(t.language) ? Xe("enabled", this.config) : e.language.toUpperCase() : t.label : Xe("disabled", this.config);
    },
    updateCues: function (e) {
      if (this.supported.ui) if (G(this.elements.captions)) {
        if (W(e) || Array.isArray(e)) {
          var t = e;

          if (!t) {
            var i = rt.getCurrentTrack.call(this);
            t = Array.from((i || {}).activeCues || []).map(function (e) {
              return e.getCueAsHTML();
            }).map(Ye);
          }

          var n = t.map(function (e) {
            return e.trim();
          }).join("\n");

          if (n !== this.elements.captions.innerHTML) {
            fe(this.elements.captions);
            var a = he("span", ye(this.config.selectors.caption));
            a.innerHTML = n, this.elements.captions.appendChild(a), Oe.call(this, this.media, "cuechange");
          }
        } else this.debug.warn("updateCues: Invalid input", e);
      } else this.debug.warn("No captions element to render to");
    }
  },
      ot = {
    enabled: !0,
    title: "",
    debug: !1,
    autoplay: !1,
    autopause: !0,
    playsinline: !0,
    seekTime: 10,
    volume: 1,
    muted: !1,
    duration: null,
    displayDuration: !0,
    invertTime: !0,
    toggleInvert: !0,
    ratio: null,
    clickToPlay: !0,
    hideControls: !0,
    resetOnEnd: !1,
    disableContextMenu: !0,
    loadSprite: !0,
    iconPrefix: "plyr",
    iconUrl: "https://cdn.plyr.io/3.6.2/plyr.svg",
    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
    quality: {
      default: 576,
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
      forced: !1,
      onChange: null
    },
    loop: {
      active: !1
    },
    speed: {
      selected: 1,
      options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
    },
    keyboard: {
      focused: !0,
      global: !1
    },
    tooltips: {
      controls: !1,
      seek: !0
    },
    captions: {
      active: !1,
      language: "auto",
      update: !1
    },
    fullscreen: {
      enabled: !0,
      fallback: !0,
      iosNative: !1
    },
    storage: {
      enabled: !0,
      key: "plyr"
    },
    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
    settings: ["captions", "quality", "speed"],
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      pip: "PIP",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled",
      enabled: "Enabled",
      advertisement: "Ad",
      qualityBadge: {
        2160: "4K",
        1440: "HD",
        1080: "HD",
        720: "HD",
        576: "SD",
        480: "SD"
      }
    },
    urls: {
      download: null,
      vimeo: {
        sdk: "https://player.vimeo.com/api/player.js",
        iframe: "https://player.vimeo.com/video/{0}?{1}",
        api: "https://vimeo.com/api/v2/video/{0}.json"
      },
      youtube: {
        sdk: "https://www.youtube.com/iframe_api",
        api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
      },
      googleIMA: {
        sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
      }
    },
    listeners: {
      seek: null,
      play: null,
      pause: null,
      restart: null,
      rewind: null,
      fastForward: null,
      mute: null,
      volume: null,
      captions: null,
      download: null,
      fullscreen: null,
      pip: null,
      airplay: null,
      speed: null,
      quality: null,
      loop: null,
      language: null
    },
    events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
    selectors: {
      editable: "input, textarea, select, [contenteditable]",
      container: ".plyr",
      controls: {
        container: null,
        wrapper: ".plyr__controls"
      },
      labels: "[data-plyr]",
      buttons: {
        play: '[data-plyr="play"]',
        pause: '[data-plyr="pause"]',
        restart: '[data-plyr="restart"]',
        rewind: '[data-plyr="rewind"]',
        fastForward: '[data-plyr="fast-forward"]',
        mute: '[data-plyr="mute"]',
        captions: '[data-plyr="captions"]',
        download: '[data-plyr="download"]',
        fullscreen: '[data-plyr="fullscreen"]',
        pip: '[data-plyr="pip"]',
        airplay: '[data-plyr="airplay"]',
        settings: '[data-plyr="settings"]',
        loop: '[data-plyr="loop"]'
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]'
      },
      display: {
        currentTime: ".plyr__time--current",
        duration: ".plyr__time--duration",
        buffer: ".plyr__progress__buffer",
        loop: ".plyr__progress__loop",
        volume: ".plyr__volume--display"
      },
      progress: ".plyr__progress",
      captions: ".plyr__captions",
      caption: ".plyr__caption"
    },
    classNames: {
      type: "plyr--{0}",
      provider: "plyr--{0}",
      video: "plyr__video-wrapper",
      embed: "plyr__video-embed",
      videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
      embedContainer: "plyr__video-embed__container",
      poster: "plyr__poster",
      posterEnabled: "plyr__poster-enabled",
      ads: "plyr__ads",
      control: "plyr__control",
      controlPressed: "plyr__control--pressed",
      playing: "plyr--playing",
      paused: "plyr--paused",
      stopped: "plyr--stopped",
      loading: "plyr--loading",
      hover: "plyr--hover",
      tooltip: "plyr__tooltip",
      cues: "plyr__cues",
      hidden: "plyr__sr-only",
      hideControls: "plyr--hide-controls",
      isIos: "plyr--is-ios",
      isTouch: "plyr--is-touch",
      uiSupported: "plyr--full-ui",
      noTransition: "plyr--no-transition",
      display: {
        time: "plyr__time"
      },
      menu: {
        value: "plyr__menu__value",
        badge: "plyr__badge",
        open: "plyr--menu-open"
      },
      captions: {
        enabled: "plyr--captions-enabled",
        active: "plyr--captions-active"
      },
      fullscreen: {
        enabled: "plyr--fullscreen-enabled",
        fallback: "plyr--fullscreen-fallback"
      },
      pip: {
        supported: "plyr--pip-supported",
        active: "plyr--pip-active"
      },
      airplay: {
        supported: "plyr--airplay-supported",
        active: "plyr--airplay-active"
      },
      tabFocus: "plyr__tab-focus",
      previewThumbnails: {
        thumbContainer: "plyr__preview-thumb",
        thumbContainerShown: "plyr__preview-thumb--is-shown",
        imageContainer: "plyr__preview-thumb__image-container",
        timeContainer: "plyr__preview-thumb__time-container",
        scrubbingContainer: "plyr__preview-scrubbing",
        scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
      }
    },
    attributes: {
      embed: {
        provider: "data-plyr-provider",
        id: "data-plyr-embed-id"
      }
    },
    ads: {
      enabled: !1,
      publisherId: "",
      tagUrl: ""
    },
    previewThumbnails: {
      enabled: !1,
      src: ""
    },
    vimeo: {
      byline: !1,
      portrait: !1,
      title: !1,
      speed: !0,
      transparent: !1,
      premium: !1,
      referrerPolicy: null
    },
    youtube: {
      noCookie: !0,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      modestbranding: 1
    }
  },
      lt = "picture-in-picture",
      ct = "inline",
      ut = {
    html5: "html5",
    youtube: "youtube",
    vimeo: "vimeo"
  },
      dt = "audio",
      ht = "video";

  var pt = function () {},
      mt = function () {
    function t() {
      var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e(this, t), this.enabled = window.console && i, this.enabled && this.log("Debugging enabled");
    }

    return i(t, [{
      key: "log",
      get: function () {
        return this.enabled ? Function.prototype.bind.call(console.log, console) : pt;
      }
    }, {
      key: "warn",
      get: function () {
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : pt;
      }
    }, {
      key: "error",
      get: function () {
        return this.enabled ? Function.prototype.bind.call(console.error, console) : pt;
      }
    }]), t;
  }(),
      ft = function () {
    function t(i) {
      var n = this;
      e(this, t), this.player = i, this.prefix = t.prefix, this.property = t.property, this.scrollPosition = {
        x: 0,
        y: 0
      }, this.forceFallback = "force" === i.config.fullscreen.fallback, this.player.elements.fullscreen = i.config.fullscreen.container && function (e, t) {
        return (Element.prototype.closest || function () {
          var e = this;

          do {
            if (ke.matches(e, t)) return e;
            e = e.parentElement || e.parentNode;
          } while (null !== e && 1 === e.nodeType);

          return null;
        }).call(e, t);
      }(this.player.elements.container, i.config.fullscreen.container), xe.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
        n.onChange();
      }), xe.call(this.player, this.player.elements.container, "dblclick", function (e) {
        G(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle();
      }), xe.call(this, this.player.elements.container, "keydown", function (e) {
        return n.trapFocus(e);
      }), this.update();
    }

    return i(t, [{
      key: "onChange",
      value: function () {
        if (this.enabled) {
          var e = this.player.elements.buttons.fullscreen;
          G(e) && (e.pressed = this.active), Oe.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0);
        }
      }
    }, {
      key: "toggleFallback",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

        if (e ? this.scrollPosition = {
          x: window.scrollX || 0,
          y: window.scrollY || 0
        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", be(this.target, this.player.config.classNames.fullscreen.fallback, e), oe.isIos) {
          var t = document.head.querySelector('meta[name="viewport"]'),
              i = "viewport-fit=cover";
          t || (t = document.createElement("meta")).setAttribute("name", "viewport");
          var n = Y(t.content) && t.content.includes(i);
          e ? (this.cleanupViewport = !n, n || (t.content += ",".concat(i))) : this.cleanupViewport && (t.content = t.content.split(",").filter(function (e) {
            return e.trim() !== i;
          }).join(","));
        }

        this.onChange();
      }
    }, {
      key: "trapFocus",
      value: function (e) {
        if (!oe.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
          var t = document.activeElement,
              i = Te.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
              n = o(i, 1)[0],
              a = i[i.length - 1];
          t !== a || e.shiftKey ? t === n && e.shiftKey && (a.focus(), e.preventDefault()) : (n.focus(), e.preventDefault());
        }
      }
    }, {
      key: "update",
      value: function () {
        var e;
        this.enabled ? (e = this.forceFallback ? "Fallback (forced)" : t.native ? "Native" : "Fallback", this.player.debug.log("".concat(e, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled");
        be(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      }
    }, {
      key: "enter",
      value: function () {
        this.enabled && (oe.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !t.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? ae(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
          navigationUI: "hide"
        }));
      }
    }, {
      key: "exit",
      value: function () {
        if (this.enabled) if (oe.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), qe(this.player.play());else if (!t.native || this.forceFallback) this.toggleFallback(!1);else if (this.prefix) {
          if (!ae(this.prefix)) {
            var e = "moz" === this.prefix ? "Cancel" : "Exit";
            document["".concat(this.prefix).concat(e).concat(this.property)]();
          }
        } else (document.cancelFullScreen || document.exitFullscreen).call(document);
      }
    }, {
      key: "toggle",
      value: function () {
        this.active ? this.exit() : this.enter();
      }
    }, {
      key: "usingNative",
      get: function () {
        return t.native && !this.forceFallback;
      }
    }, {
      key: "enabled",
      get: function () {
        return (t.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
      }
    }, {
      key: "active",
      get: function () {
        if (!this.enabled) return !1;
        if (!t.native || this.forceFallback) return we(this.target, this.player.config.classNames.fullscreen.fallback);
        var e = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
        return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target;
      }
    }, {
      key: "target",
      get: function () {
        return oe.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
      }
    }], [{
      key: "native",
      get: function () {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      }
    }, {
      key: "prefix",
      get: function () {
        if (X(document.exitFullscreen)) return "";
        var e = "";
        return ["webkit", "moz", "ms"].some(function (t) {
          return !(!X(document["".concat(t, "ExitFullscreen")]) && !X(document["".concat(t, "CancelFullScreen")])) && (e = t, !0);
        }), e;
      }
    }, {
      key: "property",
      get: function () {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      }
    }]), t;
  }();

  function gt(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return new Promise(function (i, n) {
      var a = new Image(),
          s = function () {
        delete a.onload, delete a.onerror, (a.naturalWidth >= t ? i : n)(a);
      };

      Object.assign(a, {
        onload: s,
        onerror: s,
        src: e
      });
    });
  }

  var yt = {
    addStyleHook: function () {
      be(this.elements.container, this.config.selectors.container.replace(".", ""), !0), be(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    },
    toggleNativeControls: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
    },
    build: function () {
      var e = this;
      if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void yt.toggleNativeControls.call(this, !0);
      G(this.elements.controls) || (nt.inject.call(this), this.listeners.controls()), yt.toggleNativeControls.call(this), this.isHTML5 && rt.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, nt.updateVolume.call(this), nt.timeUpdate.call(this), yt.checkPlaying.call(this), be(this.elements.container, this.config.classNames.pip.supported, Ee.pip && this.isHTML5 && this.isVideo), be(this.elements.container, this.config.classNames.airplay.supported, Ee.airplay && this.isHTML5), be(this.elements.container, this.config.classNames.isIos, oe.isIos), be(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
        Oe.call(e, e.media, "ready");
      }, 0), yt.setTitle.call(this), this.poster && yt.setPoster.call(this, this.poster, !1).catch(function () {}), this.config.duration && nt.durationUpdate.call(this);
    },
    setTitle: function () {
      var e = Xe("play", this.config);

      if (Y(this.config.title) && !ae(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t) {
        t.setAttribute("aria-label", e);
      }), this.isEmbed) {
        var t = Ce.call(this, "iframe");
        if (!G(t)) return;
        var i = ae(this.config.title) ? "video" : this.config.title,
            n = Xe("frameTitle", this.config);
        t.setAttribute("title", n.replace("{title}", i));
      }
    },
    togglePoster: function (e) {
      be(this.elements.container, this.config.classNames.posterEnabled, e);
    },
    setPoster: function (e) {
      var t = this,
          i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return i && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), je.call(this).then(function () {
        return gt(e);
      }).catch(function (i) {
        throw e === t.poster && yt.togglePoster.call(t, !1), i;
      }).then(function () {
        if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster");
      }).then(function () {
        return Object.assign(t.elements.poster.style, {
          backgroundImage: "url('".concat(e, "')"),
          backgroundSize: ""
        }), yt.togglePoster.call(t, !0), e;
      }));
    },
    checkPlaying: function (e) {
      var t = this;
      be(this.elements.container, this.config.classNames.playing, this.playing), be(this.elements.container, this.config.classNames.paused, this.paused), be(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
        Object.assign(e, {
          pressed: t.playing
        }), e.setAttribute("aria-label", Xe(t.playing ? "pause" : "play", t.config));
      }), Z(e) && "timeupdate" === e.type || yt.toggleControls.call(this);
    },
    checkLoading: function (e) {
      var t = this;
      this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
        be(t.elements.container, t.config.classNames.loading, t.loading), yt.toggleControls.call(t);
      }, this.loading ? 250 : 0);
    },
    toggleControls: function (e) {
      var t = this.elements.controls;

      if (t && this.config.hideControls) {
        var i = this.touch && this.lastSeekTime + 2e3 > Date.now();
        this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i));
      }
    },
    migrateStyles: function () {
      var e = this;
      Object.values(s({}, this.media.style)).filter(function (e) {
        return !ae(e) && e.startsWith("--plyr");
      }).forEach(function (t) {
        e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t);
      }), ae(this.media.style) && this.media.removeAttribute("style");
    }
  },
      vt = function () {
    function t(i) {
      e(this, t), this.player = i, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
    }

    return i(t, [{
      key: "handleKey",
      value: function (e) {
        var t = this.player,
            i = t.elements,
            n = e.keyCode ? e.keyCode : e.which,
            a = "keydown" === e.type,
            s = a && n === this.lastKey;

        if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && K(n)) {
          if (a) {
            var r = document.activeElement;

            if (G(r)) {
              var o = t.config.selectors.editable;
              if (r !== i.inputs.seek && ke(r, o)) return;
              if (32 === e.which && ke(r, 'button, [role^="menuitem"]')) return;
            }

            switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
              case 48:
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                s || (t.currentTime = t.duration / 10 * (n - 48));
                break;

              case 32:
              case 75:
                s || qe(t.togglePlay());
                break;

              case 38:
                t.increaseVolume(.1);
                break;

              case 40:
                t.decreaseVolume(.1);
                break;

              case 77:
                s || (t.muted = !t.muted);
                break;

              case 39:
                t.forward();
                break;

              case 37:
                t.rewind();
                break;

              case 70:
                t.fullscreen.toggle();
                break;

              case 67:
                s || t.toggleCaptions();
                break;

              case 76:
                t.loop = !t.loop;
            }

            27 === n && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = n;
          } else this.lastKey = null;
        }
      }
    }, {
      key: "toggleMenu",
      value: function (e) {
        nt.toggleMenu.call(this.player, e);
      }
    }, {
      key: "firstTouch",
      value: function () {
        var e = this.player,
            t = e.elements;
        e.touch = !0, be(t.container, e.config.classNames.isTouch, !0);
      }
    }, {
      key: "setTabFocus",
      value: function (e) {
        var t = this.player,
            i = t.elements;

        if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
          "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
          var n,
              a = e.timeStamp - this.lastKeyDown <= 20;
          if ("focus" !== e.type || a) n = t.config.classNames.tabFocus, be(Te.call(t, ".".concat(n)), n, !1), "focusout" !== e.type && (this.focusTimer = setTimeout(function () {
            var e = document.activeElement;
            i.container.contains(e) && be(document.activeElement, t.config.classNames.tabFocus, !0);
          }, 10));
        }
      }
    }, {
      key: "global",
      value: function () {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = this.player;
        t.config.keyboard.global && Me.call(t, window, "keydown keyup", this.handleKey, e, !1), Me.call(t, document.body, "click", this.toggleMenu, e), Le.call(t, document.body, "touchstart", this.firstTouch), Me.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0);
      }
    }, {
      key: "container",
      value: function () {
        var e = this.player,
            t = e.config,
            i = e.elements,
            n = e.timers;
        !t.keyboard.global && t.keyboard.focused && xe.call(e, i.container, "keydown keyup", this.handleKey, !1), xe.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
          var a = i.controls;
          a && "enterfullscreen" === t.type && (a.pressed = !1, a.hover = !1);
          var s = 0;
          ["touchstart", "touchmove", "mousemove"].includes(t.type) && (yt.toggleControls.call(e, !0), s = e.touch ? 3e3 : 2e3), clearTimeout(n.controls), n.controls = setTimeout(function () {
            return yt.toggleControls.call(e, !1);
          }, s);
        });

        var a = function (t) {
          if (!t) return Re.call(e);
          var n = i.container.getBoundingClientRect(),
              a = n.width,
              s = n.height;
          return Re.call(e, "".concat(a, ":").concat(s));
        },
            s = function () {
          clearTimeout(n.resized), n.resized = setTimeout(a, 50);
        };

        xe.call(e, i.container, "enterfullscreen exitfullscreen", function (t) {
          var n = e.fullscreen,
              r = n.target,
              l = n.usingNative;

          if (r === i.container && (e.isEmbed || !ae(e.config.ratio))) {
            var c = "enterfullscreen" === t.type,
                u = a(c);
            u.padding;
            !function (t, i, n) {
              if (e.isVimeo && !e.config.vimeo.premium) {
                var a = e.elements.wrapper.firstChild,
                    s = o(t, 2)[1],
                    r = o(Fe.call(e), 2),
                    l = r[0],
                    c = r[1];
                a.style.maxWidth = n ? "".concat(s / c * l, "px") : null, a.style.margin = n ? "0 auto" : null;
              }
            }(u.ratio, 0, c), l || (c ? xe.call(e, window, "resize", s) : Ie.call(e, window, "resize", s));
          }
        });
      }
    }, {
      key: "media",
      value: function () {
        var e = this,
            t = this.player,
            i = t.elements;

        if (xe.call(t, t.media, "timeupdate seeking seeked", function (e) {
          return nt.timeUpdate.call(t, e);
        }), xe.call(t, t.media, "durationchange loadeddata loadedmetadata", function (e) {
          return nt.durationUpdate.call(t, e);
        }), xe.call(t, t.media, "ended", function () {
          t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause());
        }), xe.call(t, t.media, "progress playing seeking seeked", function (e) {
          return nt.updateProgress.call(t, e);
        }), xe.call(t, t.media, "volumechange", function (e) {
          return nt.updateVolume.call(t, e);
        }), xe.call(t, t.media, "playing play pause ended emptied timeupdate", function (e) {
          return yt.checkPlaying.call(t, e);
        }), xe.call(t, t.media, "waiting canplay seeked playing", function (e) {
          return yt.checkLoading.call(t, e);
        }), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
          var n = Ce.call(t, ".".concat(t.config.classNames.video));
          if (!G(n)) return;
          xe.call(t, i.container, "click", function (a) {
            ([i.container, n].includes(a.target) || n.contains(a.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(a, t.restart, "restart"), e.proxy(a, function () {
              qe(t.play());
            }, "play")) : e.proxy(a, function () {
              qe(t.togglePlay());
            }, "play")));
          });
        }

        t.supported.ui && t.config.disableContextMenu && xe.call(t, i.wrapper, "contextmenu", function (e) {
          e.preventDefault();
        }, !1), xe.call(t, t.media, "volumechange", function () {
          t.storage.set({
            volume: t.volume,
            muted: t.muted
          });
        }), xe.call(t, t.media, "ratechange", function () {
          nt.updateSetting.call(t, "speed"), t.storage.set({
            speed: t.speed
          });
        }), xe.call(t, t.media, "qualitychange", function (e) {
          nt.updateSetting.call(t, "quality", null, e.detail.quality);
        }), xe.call(t, t.media, "ready qualitychange", function () {
          nt.setDownloadUrl.call(t);
        });
        var a = t.config.events.concat(["keyup", "keydown"]).join(" ");
        xe.call(t, t.media, a, function (e) {
          var n = e.detail,
              a = void 0 === n ? {} : n;
          "error" === e.type && (a = t.media.error), Oe.call(t, i.container, e.type, !0, a);
        });
      }
    }, {
      key: "proxy",
      value: function (e, t, i) {
        var n = this.player,
            a = n.config.listeners[i],
            s = !0;
        X(a) && (s = a.call(n, e)), !1 !== s && X(t) && t.call(n, e);
      }
    }, {
      key: "bind",
      value: function (e, t, i, n) {
        var a = this,
            s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            r = this.player,
            o = r.config.listeners[n],
            l = X(o);
        xe.call(r, e, t, function (e) {
          return a.proxy(e, i, n);
        }, s && !l);
      }
    }, {
      key: "controls",
      value: function () {
        var e = this,
            t = this.player,
            i = t.elements,
            n = oe.isIE ? "change" : "input";

        if (i.buttons.play && Array.from(i.buttons.play).forEach(function (i) {
          e.bind(i, "click", function () {
            qe(t.togglePlay());
          }, "play");
        }), this.bind(i.buttons.restart, "click", t.restart, "restart"), this.bind(i.buttons.rewind, "click", t.rewind, "rewind"), this.bind(i.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(i.buttons.mute, "click", function () {
          t.muted = !t.muted;
        }, "mute"), this.bind(i.buttons.captions, "click", function () {
          return t.toggleCaptions();
        }), this.bind(i.buttons.download, "click", function () {
          Oe.call(t, t.media, "download");
        }, "download"), this.bind(i.buttons.fullscreen, "click", function () {
          t.fullscreen.toggle();
        }, "fullscreen"), this.bind(i.buttons.pip, "click", function () {
          t.pip = "toggle";
        }, "pip"), this.bind(i.buttons.airplay, "click", t.airplay, "airplay"), this.bind(i.buttons.settings, "click", function (e) {
          e.stopPropagation(), e.preventDefault(), nt.toggleMenu.call(t, e);
        }, null, !1), this.bind(i.buttons.settings, "keyup", function (e) {
          var i = e.which;
          [13, 32].includes(i) && (13 !== i ? (e.preventDefault(), e.stopPropagation(), nt.toggleMenu.call(t, e)) : nt.focusFirstMenuItem.call(t, null, !0));
        }, null, !1), this.bind(i.settings.menu, "keydown", function (e) {
          27 === e.which && nt.toggleMenu.call(t, e);
        }), this.bind(i.inputs.seek, "mousedown mousemove", function (e) {
          var t = i.progress.getBoundingClientRect(),
              n = 100 / t.width * (e.pageX - t.left);
          e.currentTarget.setAttribute("seek-value", n);
        }), this.bind(i.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (e) {
          var i = e.currentTarget,
              n = e.keyCode ? e.keyCode : e.which;

          if (!ee(e) || 39 === n || 37 === n) {
            t.lastSeekTime = Date.now();
            var a = i.hasAttribute("play-on-seeked"),
                s = ["mouseup", "touchend", "keyup"].includes(e.type);
            a && s ? (i.removeAttribute("play-on-seeked"), qe(t.play())) : !s && t.playing && (i.setAttribute("play-on-seeked", ""), t.pause());
          }
        }), oe.isIos) {
          var a = Te.call(t, 'input[type="range"]');
          Array.from(a).forEach(function (t) {
            return e.bind(t, n, function (e) {
              return re(e.target);
            });
          });
        }

        this.bind(i.inputs.seek, n, function (e) {
          var i = e.currentTarget,
              n = i.getAttribute("seek-value");
          ae(n) && (n = i.value), i.removeAttribute("seek-value"), t.currentTime = n / i.max * t.duration;
        }, "seek"), this.bind(i.progress, "mouseenter mouseleave mousemove", function (e) {
          return nt.updateSeekTooltip.call(t, e);
        }), this.bind(i.progress, "mousemove touchmove", function (e) {
          var i = t.previewThumbnails;
          i && i.loaded && i.startMove(e);
        }), this.bind(i.progress, "mouseleave touchend click", function () {
          var e = t.previewThumbnails;
          e && e.loaded && e.endMove(!1, !0);
        }), this.bind(i.progress, "mousedown touchstart", function (e) {
          var i = t.previewThumbnails;
          i && i.loaded && i.startScrubbing(e);
        }), this.bind(i.progress, "mouseup touchend", function (e) {
          var i = t.previewThumbnails;
          i && i.loaded && i.endScrubbing(e);
        }), oe.isWebkit && Array.from(Te.call(t, 'input[type="range"]')).forEach(function (i) {
          e.bind(i, "input", function (e) {
            return nt.updateRangeFill.call(t, e.target);
          });
        }), t.config.toggleInvert && !G(i.display.duration) && this.bind(i.display.currentTime, "click", function () {
          0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, nt.timeUpdate.call(t));
        }), this.bind(i.inputs.volume, n, function (e) {
          t.volume = e.target.value;
        }, "volume"), this.bind(i.controls, "mouseenter mouseleave", function (e) {
          i.controls.hover = !t.touch && "mouseenter" === e.type;
        }), i.fullscreen && Array.from(i.fullscreen.children).filter(function (e) {
          return !e.contains(i.container);
        }).forEach(function (n) {
          e.bind(n, "mouseenter mouseleave", function (e) {
            i.controls.hover = !t.touch && "mouseenter" === e.type;
          });
        }), this.bind(i.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
          i.controls.pressed = ["mousedown", "touchstart"].includes(e.type);
        }), this.bind(i.controls, "focusin", function () {
          var n = t.config,
              a = t.timers;
          be(i.controls, n.classNames.noTransition, !0), yt.toggleControls.call(t, !0), setTimeout(function () {
            be(i.controls, n.classNames.noTransition, !1);
          }, 0);
          var s = e.touch ? 3e3 : 4e3;
          clearTimeout(a.controls), a.controls = setTimeout(function () {
            return yt.toggleControls.call(t, !1);
          }, s);
        }), this.bind(i.inputs.volume, "wheel", function (e) {
          var i = e.webkitDirectionInvertedFromDevice,
              n = o([e.deltaX, -e.deltaY].map(function (e) {
            return i ? -e : e;
          }), 2),
              a = n[0],
              s = n[1],
              r = Math.sign(Math.abs(a) > Math.abs(s) ? a : s);
          t.increaseVolume(r / 50);
          var l = t.media.volume;
          (1 === r && l < 1 || -1 === r && l > 0) && e.preventDefault();
        }, "volume", !1);
      }
    }]), t;
  }();

  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

  var bt = function (e, t) {
    return e(t = {
      exports: {}
    }, t.exports), t.exports;
  }(function (e, t) {
    e.exports = function () {
      var e = function () {},
          t = {},
          i = {},
          n = {};

      function a(e, t) {
        if (e) {
          var a = n[e];
          if (i[e] = t, a) for (; a.length;) a[0](e, t), a.splice(0, 1);
        }
      }

      function s(t, i) {
        t.call && (t = {
          success: t
        }), i.length ? (t.error || e)(i) : (t.success || e)(t);
      }

      function r(t, i, n, a) {
        var s,
            o,
            l = document,
            c = n.async,
            u = (n.numRetries || 0) + 1,
            d = n.before || e,
            h = t.replace(/[\?|#].*$/, ""),
            p = t.replace(/^(css|img)!/, "");
        a = a || 0, /(^css!|\.css$)/.test(h) ? ((o = l.createElement("link")).rel = "stylesheet", o.href = p, (s = "hideFocus" in o) && o.relList && (s = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (o = l.createElement("img")).src = p : ((o = l.createElement("script")).src = t, o.async = void 0 === c || c), o.onload = o.onerror = o.onbeforeload = function (e) {
          var l = e.type[0];
          if (s) try {
            o.sheet.cssText.length || (l = "e");
          } catch (e) {
            18 != e.code && (l = "e");
          }

          if ("e" == l) {
            if ((a += 1) < u) return r(t, i, n, a);
          } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";

          i(t, l, e.defaultPrevented);
        }, !1 !== d(t, o) && l.head.appendChild(o);
      }

      function o(e, i, n) {
        var o, l;

        if (i && i.trim && (o = i), l = (o ? n : i) || {}, o) {
          if (o in t) throw "LoadJS";
          t[o] = !0;
        }

        function c(t, i) {
          !function (e, t, i) {
            var n,
                a,
                s = (e = e.push ? e : [e]).length,
                o = s,
                l = [];

            for (n = function (e, i, n) {
              if ("e" == i && l.push(e), "b" == i) {
                if (!n) return;
                l.push(e);
              }

              --s || t(l);
            }, a = 0; a < o; a++) r(e[a], n, i);
          }(e, function (e) {
            s(l, e), t && s({
              success: t,
              error: i
            }, e), a(o, e);
          }, l);
        }

        if (l.returnPromise) return new Promise(c);
        c();
      }

      return o.ready = function (e, t) {
        return function (e, t) {
          e = e.push ? e : [e];
          var a,
              s,
              r,
              o = [],
              l = e.length,
              c = l;

          for (a = function (e, i) {
            i.length && o.push(e), --c || t(o);
          }; l--;) s = e[l], (r = i[s]) ? a(s, r) : (n[s] = n[s] || []).push(a);
        }(e, function (e) {
          s(t, e);
        }), o;
      }, o.done = function (e) {
        a(e, []);
      }, o.reset = function () {
        t = {}, i = {}, n = {};
      }, o.isDefined = function (e) {
        return e in t;
      }, o;
    }();
  });

  function wt(e) {
    return new Promise(function (t, i) {
      bt(e, {
        success: t,
        error: i
      });
    });
  }

  function kt(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Oe.call(this, this.media, e ? "play" : "pause"));
  }

  var Tt = {
    setup: function () {
      var e = this;
      be(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Re.call(e), z(window.Vimeo) ? Tt.ready.call(e) : wt(e.config.urls.vimeo.sdk).then(function () {
        Tt.ready.call(e);
      }).catch(function (t) {
        e.debug.warn("Vimeo SDK (player.js) failed to load", t);
      });
    },
    ready: function () {
      var e = this,
          t = this,
          i = t.config.vimeo,
          n = i.premium,
          a = i.referrerPolicy,
          l = r(i, ["premium", "referrerPolicy"]);
      n && Object.assign(l, {
        controls: !1,
        sidedock: !1
      });
      var c = st(s({
        loop: t.config.loop.active,
        autoplay: t.autoplay,
        muted: t.muted,
        gesture: "media",
        playsinline: !this.config.fullscreen.iosNative
      }, l)),
          u = t.media.getAttribute("src");
      ae(u) && (u = t.media.getAttribute(t.config.attributes.embed.id));
      var d,
          h = ae(d = u) ? null : K(Number(d)) ? d : d.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : d,
          p = he("iframe"),
          m = Ue(t.config.urls.vimeo.iframe, h, c);
      p.setAttribute("src", m), p.setAttribute("allowfullscreen", ""), p.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"), ae(a) || p.setAttribute("referrerPolicy", a);
      var f = t.poster;
      if (n) p.setAttribute("data-poster", f), t.media = ge(p, t.media);else {
        var g = he("div", {
          class: t.config.classNames.embedContainer,
          "data-poster": f
        });
        g.appendChild(p), t.media = ge(g, t.media);
      }
      Je(Ue(t.config.urls.vimeo.api, h), "json").then(function (e) {
        if (!ae(e)) {
          var i = new URL(e[0].thumbnail_large);
          i.pathname = "".concat(i.pathname.split("_")[0], ".jpg"), yt.setPoster.call(t, i.href).catch(function () {});
        }
      }), t.embed = new window.Vimeo.Player(p, {
        autopause: t.config.autopause,
        muted: t.muted
      }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
        return kt.call(t, !0), t.embed.play();
      }, t.media.pause = function () {
        return kt.call(t, !1), t.embed.pause();
      }, t.media.stop = function () {
        t.pause(), t.currentTime = 0;
      };
      var y = t.media.currentTime;
      Object.defineProperty(t.media, "currentTime", {
        get: function () {
          return y;
        },
        set: function (e) {
          var i = t.embed,
              n = t.media,
              a = t.paused,
              s = t.volume,
              r = a && !i.hasPlayed;
          n.seeking = !0, Oe.call(t, n, "seeking"), Promise.resolve(r && i.setVolume(0)).then(function () {
            return i.setCurrentTime(e);
          }).then(function () {
            return r && i.pause();
          }).then(function () {
            return r && i.setVolume(s);
          }).catch(function () {});
        }
      });
      var v = t.config.speed.selected;
      Object.defineProperty(t.media, "playbackRate", {
        get: function () {
          return v;
        },
        set: function (e) {
          t.embed.setPlaybackRate(e).then(function () {
            v = e, Oe.call(t, t.media, "ratechange");
          }).catch(function () {
            t.options.speed = [1];
          });
        }
      });
      var b = t.config.volume;
      Object.defineProperty(t.media, "volume", {
        get: function () {
          return b;
        },
        set: function (e) {
          t.embed.setVolume(e).then(function () {
            b = e, Oe.call(t, t.media, "volumechange");
          });
        }
      });
      var w = t.config.muted;
      Object.defineProperty(t.media, "muted", {
        get: function () {
          return w;
        },
        set: function (e) {
          var i = !!Q(e) && e;
          t.embed.setVolume(i ? 0 : t.config.volume).then(function () {
            w = i, Oe.call(t, t.media, "volumechange");
          });
        }
      });
      var k,
          T = t.config.loop;
      Object.defineProperty(t.media, "loop", {
        get: function () {
          return T;
        },
        set: function (e) {
          var i = Q(e) ? e : t.config.loop.active;
          t.embed.setLoop(i).then(function () {
            T = i;
          });
        }
      }), t.embed.getVideoUrl().then(function (e) {
        k = e, nt.setDownloadUrl.call(t);
      }).catch(function (t) {
        e.debug.warn(t);
      }), Object.defineProperty(t.media, "currentSrc", {
        get: function () {
          return k;
        }
      }), Object.defineProperty(t.media, "ended", {
        get: function () {
          return t.currentTime === t.duration;
        }
      }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (i) {
        var n = o(i, 2),
            a = n[0],
            s = n[1];
        t.embed.ratio = [a, s], Re.call(e);
      }), t.embed.setAutopause(t.config.autopause).then(function (e) {
        t.config.autopause = e;
      }), t.embed.getVideoTitle().then(function (i) {
        t.config.title = i, yt.setTitle.call(e);
      }), t.embed.getCurrentTime().then(function (e) {
        y = e, Oe.call(t, t.media, "timeupdate");
      }), t.embed.getDuration().then(function (e) {
        t.media.duration = e, Oe.call(t, t.media, "durationchange");
      }), t.embed.getTextTracks().then(function (e) {
        t.media.textTracks = e, rt.setup.call(t);
      }), t.embed.on("cuechange", function (e) {
        var i = e.cues,
            n = (void 0 === i ? [] : i).map(function (e) {
          return function (e) {
            var t = document.createDocumentFragment(),
                i = document.createElement("div");
            return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
          }(e.text);
        });
        rt.updateCues.call(t, n);
      }), t.embed.on("loaded", function () {
        (t.embed.getPaused().then(function (e) {
          kt.call(t, !e), e || Oe.call(t, t.media, "playing");
        }), G(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1);
      }), t.embed.on("bufferstart", function () {
        Oe.call(t, t.media, "waiting");
      }), t.embed.on("bufferend", function () {
        Oe.call(t, t.media, "playing");
      }), t.embed.on("play", function () {
        kt.call(t, !0), Oe.call(t, t.media, "playing");
      }), t.embed.on("pause", function () {
        kt.call(t, !1);
      }), t.embed.on("timeupdate", function (e) {
        t.media.seeking = !1, y = e.seconds, Oe.call(t, t.media, "timeupdate");
      }), t.embed.on("progress", function (e) {
        t.media.buffered = e.percent, Oe.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Oe.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
          e !== t.media.duration && (t.media.duration = e, Oe.call(t, t.media, "durationchange"));
        });
      }), t.embed.on("seeked", function () {
        t.media.seeking = !1, Oe.call(t, t.media, "seeked");
      }), t.embed.on("ended", function () {
        t.media.paused = !0, Oe.call(t, t.media, "ended");
      }), t.embed.on("error", function (e) {
        t.media.error = e, Oe.call(t, t.media, "error");
      }), setTimeout(function () {
        return yt.build.call(t);
      }, 0);
    }
  };

  function Ct(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Oe.call(this, this.media, e ? "play" : "pause"));
  }

  function At(e) {
    return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
  }

  var St = {
    setup: function () {
      var e = this;
      if (be(this.elements.wrapper, this.config.classNames.embed, !0), z(window.YT) && X(window.YT.Player)) St.ready.call(this);else {
        var t = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function () {
          X(t) && t(), St.ready.call(e);
        }, wt(this.config.urls.youtube.sdk).catch(function (t) {
          e.debug.warn("YouTube API failed to load", t);
        });
      }
    },
    getTitle: function (e) {
      var t = this;
      Je(Ue(this.config.urls.youtube.api, e)).then(function (e) {
        if (z(e)) {
          var i = e.title,
              n = e.height,
              a = e.width;
          t.config.title = i, yt.setTitle.call(t), t.embed.ratio = [a, n];
        }

        Re.call(t);
      }).catch(function () {
        Re.call(t);
      });
    },
    ready: function () {
      var e = this,
          t = e.media && e.media.getAttribute("id");

      if (ae(t) || !t.startsWith("youtube-")) {
        var i = e.media.getAttribute("src");
        ae(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
        var n,
            a,
            s = ae(n = i) ? null : n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : n,
            r = (a = e.provider, "".concat(a, "-").concat(Math.floor(1e4 * Math.random()))),
            o = he("div", {
          id: r,
          "data-poster": e.poster
        });
        e.media = ge(o, e.media);

        var l = function (e) {
          return "https://i.ytimg.com/vi/".concat(s, "/").concat(e, "default.jpg");
        };

        gt(l("maxres"), 121).catch(function () {
          return gt(l("sd"), 121);
        }).catch(function () {
          return gt(l("hq"));
        }).then(function (t) {
          return yt.setPoster.call(e, t.src);
        }).then(function (t) {
          t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
        }).catch(function () {});
        var c = e.config.youtube;
        e.embed = new window.YT.Player(r, {
          videoId: s,
          host: At(c),
          playerVars: ce({}, {
            autoplay: e.config.autoplay ? 1 : 0,
            hl: e.config.hl,
            controls: e.supported.ui ? 0 : 1,
            disablekb: 1,
            playsinline: e.config.fullscreen.iosNative ? 0 : 1,
            cc_load_policy: e.captions.active ? 1 : 0,
            cc_lang_pref: e.config.captions.language,
            widget_referrer: window ? window.location.href : null
          }, c),
          events: {
            onError: function (t) {
              if (!e.media.error) {
                var i = t.data,
                    n = {
                  2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                  5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                  100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                  101: "The owner of the requested video does not allow it to be played in embedded players.",
                  150: "The owner of the requested video does not allow it to be played in embedded players."
                }[i] || "An unknown error occured";
                e.media.error = {
                  code: i,
                  message: n
                }, Oe.call(e, e.media, "error");
              }
            },
            onPlaybackRateChange: function (t) {
              var i = t.target;
              e.media.playbackRate = i.getPlaybackRate(), Oe.call(e, e.media, "ratechange");
            },
            onReady: function (t) {
              if (!X(e.media.play)) {
                var i = t.target;
                St.getTitle.call(e, s), e.media.play = function () {
                  Ct.call(e, !0), i.playVideo();
                }, e.media.pause = function () {
                  Ct.call(e, !1), i.pauseVideo();
                }, e.media.stop = function () {
                  i.stopVideo();
                }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                  get: function () {
                    return Number(i.getCurrentTime());
                  },
                  set: function (t) {
                    e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Oe.call(e, e.media, "seeking"), i.seekTo(t);
                  }
                }), Object.defineProperty(e.media, "playbackRate", {
                  get: function () {
                    return i.getPlaybackRate();
                  },
                  set: function (e) {
                    i.setPlaybackRate(e);
                  }
                });
                var n = e.config.volume;
                Object.defineProperty(e.media, "volume", {
                  get: function () {
                    return n;
                  },
                  set: function (t) {
                    n = t, i.setVolume(100 * n), Oe.call(e, e.media, "volumechange");
                  }
                });
                var a = e.config.muted;
                Object.defineProperty(e.media, "muted", {
                  get: function () {
                    return a;
                  },
                  set: function (t) {
                    var n = Q(t) ? t : a;
                    a = n, i[n ? "mute" : "unMute"](), Oe.call(e, e.media, "volumechange");
                  }
                }), Object.defineProperty(e.media, "currentSrc", {
                  get: function () {
                    return i.getVideoUrl();
                  }
                }), Object.defineProperty(e.media, "ended", {
                  get: function () {
                    return e.currentTime === e.duration;
                  }
                });
                var r = i.getAvailablePlaybackRates();
                e.options.speed = r.filter(function (t) {
                  return e.config.speed.options.includes(t);
                }), e.supported.ui && e.media.setAttribute("tabindex", -1), Oe.call(e, e.media, "timeupdate"), Oe.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                  e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Oe.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Oe.call(e, e.media, "canplaythrough"));
                }, 200), setTimeout(function () {
                  return yt.build.call(e);
                }, 50);
              }
            },
            onStateChange: function (t) {
              var i = t.target;

              switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, Oe.call(e, e.media, "seeked")), t.data) {
                case -1:
                  Oe.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), Oe.call(e, e.media, "progress");
                  break;

                case 0:
                  Ct.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : Oe.call(e, e.media, "ended");
                  break;

                case 1:
                  e.config.autoplay || !e.media.paused || e.embed.hasPlayed ? (Ct.call(e, !0), Oe.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                    Oe.call(e, e.media, "timeupdate");
                  }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), Oe.call(e, e.media, "durationchange"))) : e.media.pause();
                  break;

                case 2:
                  e.muted || e.embed.unMute(), Ct.call(e, !1);
                  break;

                case 3:
                  Oe.call(e, e.media, "waiting");
              }

              Oe.call(e, e.elements.container, "statechange", !1, {
                code: t.data
              });
            }
          }
        });
      }
    }
  },
      Pt = {
    setup: function () {
      this.media ? (be(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), be(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && be(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = he("div", {
        class: this.config.classNames.video
      }), ue(this.media, this.elements.wrapper), this.elements.poster = he("div", {
        class: this.config.classNames.poster
      }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Ve.setup.call(this) : this.isYouTube ? St.setup.call(this) : this.isVimeo && Tt.setup.call(this)) : this.debug.warn("No media element found!");
    }
  },
      Et = function () {
    function t(i) {
      var n = this;
      e(this, t), this.player = i, this.config = i.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
        container: null,
        displayContainer: null
      }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
        n.on("loaded", e), n.on("error", t);
      }), this.load();
    }

    return i(t, [{
      key: "load",
      value: function () {
        var e = this;
        this.enabled && (z(window.google) && z(window.google.ima) ? this.ready() : wt(this.player.config.urls.googleIMA.sdk).then(function () {
          e.ready();
        }).catch(function () {
          e.trigger("error", new Error("Google IMA SDK failed to load"));
        }));
      }
    }, {
      key: "ready",
      value: function () {
        var e,
            t = this;
        this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
          t.clearSafetyTimer("onAdsManagerLoaded()");
        }), this.listeners(), this.setupIMA();
      }
    }, {
      key: "setupIMA",
      value: function () {
        var e = this;
        this.elements.container = he("div", {
          class: this.player.config.classNames.ads
        }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (t) {
          return e.onAdsManagerLoaded(t);
        }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (t) {
          return e.onAdError(t);
        }, !1), this.requestAds();
      }
    }, {
      key: "requestAds",
      value: function () {
        var e = this.player.elements.container;

        try {
          var t = new google.ima.AdsRequest();
          t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t);
        } catch (e) {
          this.onAdError(e);
        }
      }
    }, {
      key: "pollCountdown",
      value: function () {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");

        var i = function () {
          var t = it(Math.max(e.manager.getRemainingTime(), 0)),
              i = "".concat(Xe("advertisement", e.player.config), " - ").concat(t);
          e.elements.container.setAttribute("data-badge-text", i);
        };

        this.countdownTimer = setInterval(i, 100);
      }
    }, {
      key: "onAdsManagerLoaded",
      value: function (e) {
        var t = this;

        if (this.enabled) {
          var i = new google.ima.AdsRenderingSettings();
          i.restoreCustomPlaybackStateOnAdBreakComplete = !0, i.enablePreloading = !0, this.manager = e.getAdsManager(this.player, i), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
            return t.onAdError(e);
          }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
            t.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
              return t.onAdEvent(e);
            });
          }), this.trigger("loaded");
        }
      }
    }, {
      key: "addCuePoints",
      value: function () {
        var e = this;
        ae(this.cuePoints) || this.cuePoints.forEach(function (t) {
          if (0 !== t && -1 !== t && t < e.player.duration) {
            var i = e.player.elements.progress;

            if (G(i)) {
              var n = 100 / e.player.duration * t,
                  a = he("span", {
                class: e.player.config.classNames.cues
              });
              a.style.left = "".concat(n.toString(), "%"), i.appendChild(a);
            }
          }
        });
      }
    }, {
      key: "onAdEvent",
      value: function (e) {
        var t = this,
            i = this.player.elements.container,
            n = e.getAd(),
            a = e.getAdData();

        switch (function (e) {
          Oe.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()));
        }(e.type), e.type) {
          case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded"), this.pollCountdown(!0), n.isLinear() || (n.width = i.offsetWidth, n.height = i.offsetHeight);
            break;

          case google.ima.AdEvent.Type.STARTED:
            this.manager.setVolume(this.player.volume);
            break;

          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            this.player.ended ? this.loadAds() : this.loader.contentComplete();
            break;

          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            this.pauseContent();
            break;

          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            this.pollCountdown(), this.resumeContent();
            break;

          case google.ima.AdEvent.Type.LOG:
            a.adError && this.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()));
        }
      }
    }, {
      key: "onAdError",
      value: function (e) {
        this.cancel(), this.player.debug.warn("Ads error", e);
      }
    }, {
      key: "listeners",
      value: function () {
        var e,
            t = this,
            i = this.player.elements.container;
        this.player.on("canplay", function () {
          t.addCuePoints();
        }), this.player.on("ended", function () {
          t.loader.contentComplete();
        }), this.player.on("timeupdate", function () {
          e = t.player.currentTime;
        }), this.player.on("seeked", function () {
          var i = t.player.currentTime;
          ae(t.cuePoints) || t.cuePoints.forEach(function (n, a) {
            e < n && n < i && (t.manager.discardAdBreak(), t.cuePoints.splice(a, 1));
          });
        }), window.addEventListener("resize", function () {
          t.manager && t.manager.resize(i.offsetWidth, i.offsetHeight, google.ima.ViewMode.NORMAL);
        });
      }
    }, {
      key: "play",
      value: function () {
        var e = this,
            t = this.player.elements.container;
        this.managerPromise || this.resumeContent(), this.managerPromise.then(function () {
          e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize();

          try {
            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0;
          } catch (t) {
            e.onAdError(t);
          }
        }).catch(function () {});
      }
    }, {
      key: "resumeContent",
      value: function () {
        this.elements.container.style.zIndex = "", this.playing = !1, qe(this.player.media.play());
      }
    }, {
      key: "pauseContent",
      value: function () {
        this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause();
      }
    }, {
      key: "cancel",
      value: function () {
        this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
      }
    }, {
      key: "loadAds",
      value: function () {
        var e = this;
        this.managerPromise.then(function () {
          e.manager && e.manager.destroy(), e.managerPromise = new Promise(function (t) {
            e.on("loaded", t), e.player.debug.log(e.manager);
          }), e.initialized = !1, e.requestAds();
        }).catch(function () {});
      }
    }, {
      key: "trigger",
      value: function (e) {
        for (var t = this, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];

        var s = this.events[e];
        $(s) && s.forEach(function (e) {
          X(e) && e.apply(t, n);
        });
      }
    }, {
      key: "on",
      value: function (e, t) {
        return $(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this;
      }
    }, {
      key: "startSafetyTimer",
      value: function (e, t) {
        var i = this;
        this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout(function () {
          i.cancel(), i.clearSafetyTimer("startSafetyTimer()");
        }, e);
      }
    }, {
      key: "clearSafetyTimer",
      value: function (e) {
        W(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null);
      }
    }, {
      key: "enabled",
      get: function () {
        var e = this.config;
        return this.player.isHTML5 && this.player.isVideo && e.enabled && (!ae(e.publisherId) || ne(e.tagUrl));
      }
    }, {
      key: "tagUrl",
      get: function () {
        var e = this.config;
        if (ne(e.tagUrl)) return e.tagUrl;
        var t = {
          AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
          AV_CHANNELID: "5a0458dc28a06145e4519d21",
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: e.publisherId
        };
        return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(st(t));
      }
    }]), t;
  }(),
      Nt = function (e, t) {
    var i = {};
    return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i;
  },
      Mt = function () {
    function t(i) {
      e(this, t), this.player = i, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
        thumb: {},
        scrubbing: {}
      }, this.load();
    }

    return i(t, [{
      key: "load",
      value: function () {
        var e = this;
        this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(function () {
          e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0);
        });
      }
    }, {
      key: "getThumbnails",
      value: function () {
        var e = this;
        return new Promise(function (t) {
          var i = e.player.config.previewThumbnails.src;
          if (ae(i)) throw new Error("Missing previewThumbnails.src config attribute");

          var n = function () {
            e.thumbnails.sort(function (e, t) {
              return e.height - t.height;
            }), e.player.debug.log("Preview thumbnails", e.thumbnails), t();
          };

          if (X(i)) i(function (t) {
            e.thumbnails = t, n();
          });else {
            var a = (Y(i) ? [i] : i).map(function (t) {
              return e.getThumbnail(t);
            });
            Promise.all(a).then(n);
          }
        });
      }
    }, {
      key: "getThumbnail",
      value: function (e) {
        var t = this;
        return new Promise(function (i) {
          Je(e).then(function (n) {
            var a,
                s,
                r = {
              frames: (a = n, s = [], a.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
                var t = {};
                e.split(/\r\n|\n|\r/).forEach(function (e) {
                  if (K(t.startTime)) {
                    if (!ae(e.trim()) && ae(t.text)) {
                      var i = e.trim().split("#xywh="),
                          n = o(i, 1);

                      if (t.text = n[0], i[1]) {
                        var a = o(i[1].split(","), 4);
                        t.x = a[0], t.y = a[1], t.w = a[2], t.h = a[3];
                      }
                    }
                  } else {
                    var s = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                    s && (t.startTime = 60 * Number(s[1] || 0) * 60 + 60 * Number(s[2]) + Number(s[3]) + Number("0.".concat(s[4])), t.endTime = 60 * Number(s[6] || 0) * 60 + 60 * Number(s[7]) + Number(s[8]) + Number("0.".concat(s[9])));
                  }
                }), t.text && s.push(t);
              }), s),
              height: null,
              urlPrefix: ""
            };
            r.frames[0].text.startsWith("/") || r.frames[0].text.startsWith("http://") || r.frames[0].text.startsWith("https://") || (r.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
            var l = new Image();
            l.onload = function () {
              r.height = l.naturalHeight, r.width = l.naturalWidth, t.thumbnails.push(r), i();
            }, l.src = r.urlPrefix + r.frames[0].text;
          });
        });
      }
    }, {
      key: "startMove",
      value: function (e) {
        if (this.loaded && Z(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
          if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);else {
            var t = this.player.elements.progress.getBoundingClientRect(),
                i = 100 / t.width * (e.pageX - t.left);
            this.seekTime = this.player.media.duration * (i / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = it(this.seekTime);
          }
          this.showImageAtCurrentTime();
        }
      }
    }, {
      key: "endMove",
      value: function () {
        this.toggleThumbContainer(!1, !0);
      }
    }, {
      key: "startScrubbing",
      value: function (e) {
        (W(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()));
      }
    }, {
      key: "endScrubbing",
      value: function () {
        var e = this;
        this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : Le.call(this.player, this.player.media, "timeupdate", function () {
          e.mouseDown || e.toggleScrubbingContainer(!1);
        });
      }
    }, {
      key: "listeners",
      value: function () {
        var e = this;
        this.player.on("play", function () {
          e.toggleThumbContainer(!1, !0);
        }), this.player.on("seeked", function () {
          e.toggleThumbContainer(!1);
        }), this.player.on("timeupdate", function () {
          e.lastTime = e.player.media.currentTime;
        });
      }
    }, {
      key: "render",
      value: function () {
        this.elements.thumb.container = he("div", {
          class: this.player.config.classNames.previewThumbnails.thumbContainer
        }), this.elements.thumb.imageContainer = he("div", {
          class: this.player.config.classNames.previewThumbnails.imageContainer
        }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
        var e = he("div", {
          class: this.player.config.classNames.previewThumbnails.timeContainer
        });
        this.elements.thumb.time = he("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), G(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = he("div", {
          class: this.player.config.classNames.previewThumbnails.scrubbingContainer
        }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
      }
    }, {
      key: "destroy",
      value: function () {
        this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
      }
    }, {
      key: "showImageAtCurrentTime",
      value: function () {
        var e = this;
        this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
        var t = this.thumbnails[0].frames.findIndex(function (t) {
          return e.seekTime >= t.startTime && e.seekTime <= t.endTime;
        }),
            i = t >= 0,
            n = 0;
        this.mouseDown || this.toggleThumbContainer(i), i && (this.thumbnails.forEach(function (i, a) {
          e.loadedImages.includes(i.frames[t].text) && (n = a);
        }), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(n)));
      }
    }, {
      key: "loadImage",
      value: function () {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            i = this.showingThumb,
            n = this.thumbnails[t],
            a = n.urlPrefix,
            s = n.frames[i],
            r = n.frames[i].text,
            o = a + r;
        if (this.currentImageElement && this.currentImageElement.dataset.filename === r) this.showImage(this.currentImageElement, s, t, i, r, !1), this.currentImageElement.dataset.index = i, this.removeOldImages(this.currentImageElement);else {
          this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
          var l = new Image();
          l.src = o, l.dataset.index = i, l.dataset.filename = r, this.showingThumbFilename = r, this.player.debug.log("Loading image: ".concat(o)), l.onload = function () {
            return e.showImage(l, s, t, i, r, !0);
          }, this.loadingImage = l, this.removeOldImages(l);
        }
      }
    }, {
      key: "showImage",
      value: function (e, t, i, n, a) {
        var s = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        this.player.debug.log("Showing thumb: ".concat(a, ". num: ").concat(n, ". qual: ").concat(i, ". newimg: ").concat(s)), this.setImageSizeAndOffset(e, t), s && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(a) || this.loadedImages.push(a)), this.preloadNearby(n, !0).then(this.preloadNearby(n, !1)).then(this.getHigherQuality(i, e, t, a));
      }
    }, {
      key: "removeOldImages",
      value: function (e) {
        var t = this;
        Array.from(this.currentImageContainer.children).forEach(function (i) {
          if ("img" === i.tagName.toLowerCase()) {
            var n = t.usingSprites ? 500 : 1e3;

            if (i.dataset.index !== e.dataset.index && !i.dataset.deleting) {
              i.dataset.deleting = !0;
              var a = t.currentImageContainer;
              setTimeout(function () {
                a.removeChild(i), t.player.debug.log("Removing thumb: ".concat(i.dataset.filename));
              }, n);
            }
          }
        });
      }
    }, {
      key: "preloadNearby",
      value: function (e) {
        var t = this,
            i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return new Promise(function (n) {
          setTimeout(function () {
            var a = t.thumbnails[0].frames[e].text;

            if (t.showingThumbFilename === a) {
              var s;
              s = i ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
              var r = !1;
              s.forEach(function (e) {
                var i = e.text;

                if (i !== a && !t.loadedImages.includes(i)) {
                  r = !0, t.player.debug.log("Preloading thumb filename: ".concat(i));
                  var s = t.thumbnails[0].urlPrefix + i,
                      o = new Image();
                  o.src = s, o.onload = function () {
                    t.player.debug.log("Preloaded thumb filename: ".concat(i)), t.loadedImages.includes(i) || t.loadedImages.push(i), n();
                  };
                }
              }), r || n();
            }
          }, 300);
        });
      }
    }, {
      key: "getHigherQuality",
      value: function (e, t, i, n) {
        var a = this;

        if (e < this.thumbnails.length - 1) {
          var s = t.naturalHeight;
          this.usingSprites && (s = i.h), s < this.thumbContainerHeight && setTimeout(function () {
            a.showingThumbFilename === n && (a.player.debug.log("Showing higher quality thumb for: ".concat(n)), a.loadImage(e + 1));
          }, 300);
        }
      }
    }, {
      key: "toggleThumbContainer",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
        this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null);
      }
    }, {
      key: "toggleScrubbingContainer",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
        this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null);
      }
    }, {
      key: "determineContainerAutoSizing",
      value: function () {
        (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0);
      }
    }, {
      key: "setThumbContainerSizeAndPos",
      value: function () {
        if (this.sizeSpecifiedInCSS) {
          if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
            var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
            this.elements.thumb.imageContainer.style.width = "".concat(e, "px");
          } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
            var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
            this.elements.thumb.imageContainer.style.height = "".concat(t, "px");
          }
        } else {
          var i = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(i, "px");
        }

        this.setThumbContainerPos();
      }
    }, {
      key: "setThumbContainerPos",
      value: function () {
        var e = this.player.elements.progress.getBoundingClientRect(),
            t = this.player.elements.container.getBoundingClientRect(),
            i = this.elements.thumb.container,
            n = t.left - e.left + 10,
            a = t.right - e.left - i.clientWidth - 10,
            s = this.mousePosX - e.left - i.clientWidth / 2;
        s < n && (s = n), s > a && (s = a), i.style.left = "".concat(s, "px");
      }
    }, {
      key: "setScrubbingContainerSize",
      value: function () {
        var e = Nt(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        }),
            t = e.width,
            i = e.height;
        this.elements.scrubbing.container.style.width = "".concat(t, "px"), this.elements.scrubbing.container.style.height = "".concat(i, "px");
      }
    }, {
      key: "setImageSizeAndOffset",
      value: function (e, t) {
        if (this.usingSprites) {
          var i = this.thumbContainerHeight / t.h;
          e.style.height = "".concat(e.naturalHeight * i, "px"), e.style.width = "".concat(e.naturalWidth * i, "px"), e.style.left = "-".concat(t.x * i, "px"), e.style.top = "-".concat(t.y * i, "px");
        }
      }
    }, {
      key: "enabled",
      get: function () {
        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
      }
    }, {
      key: "currentImageContainer",
      get: function () {
        return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
      }
    }, {
      key: "usingSprites",
      get: function () {
        return Object.keys(this.thumbnails[0].frames[0]).includes("w");
      }
    }, {
      key: "thumbAspectRatio",
      get: function () {
        return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
      }
    }, {
      key: "thumbContainerHeight",
      get: function () {
        return this.mouseDown ? Nt(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
      }
    }, {
      key: "currentImageElement",
      get: function () {
        return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
      },
      set: function (e) {
        this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
      }
    }]), t;
  }(),
      xt = {
    insertElements: function (e, t) {
      var i = this;
      Y(t) ? pe(e, this.media, {
        src: t
      }) : $(t) && t.forEach(function (t) {
        pe(e, i.media, t);
      });
    },
    change: function (e) {
      var t = this;
      le(e, "sources.length") ? (Ve.cancelRequests.call(this), this.destroy.call(this, function () {
        t.options.quality = [], me(t.media), t.media = null, G(t.elements.container) && t.elements.container.removeAttribute("class");
        var i = e.sources,
            n = e.type,
            a = o(i, 1)[0],
            s = a.provider,
            r = void 0 === s ? ut.html5 : s,
            l = a.src,
            c = "html5" === r ? n : "div",
            u = "html5" === r ? {} : {
          src: l
        };
        Object.assign(t, {
          provider: r,
          type: n,
          supported: Ee.check(n, r, t.config.playsinline),
          media: he(c, u)
        }), t.elements.container.appendChild(t.media), Q(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), ae(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), yt.addStyleHook.call(t), t.isHTML5 && xt.insertElements.call(t, "source", i), t.config.title = e.title, Pt.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && xt.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && yt.build.call(t), t.isHTML5 && t.media.load(), ae(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new Mt(t))), t.fullscreen.update();
      }, !0)) : this.debug.warn("Invalid source format");
    }
  };

  var It,
      Lt = function () {
    function t(i, n) {
      var a = this;
      if (e(this, t), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = Ee.touch, this.media = i, Y(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || J(this.media) || $(this.media)) && (this.media = this.media[0]), this.config = ce({}, ot, t.defaults, n || {}, function () {
        try {
          return JSON.parse(a.media.getAttribute("data-plyr-config"));
        } catch (e) {
          return {};
        }
      }()), this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      }, this.captions = {
        active: null,
        currentTrack: -1,
        meta: new WeakMap()
      }, this.fullscreen = {
        active: !1
      }, this.options = {
        speed: [],
        quality: []
      }, this.debug = new mt(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Ee), !W(this.media) && G(this.media)) {
        if (this.media.plyr) this.debug.warn("Target already setup");else if (this.config.enabled) {
          if (Ee.check().api) {
            var s = this.media.cloneNode(!0);
            s.autoplay = !1, this.elements.original = s;
            var r = this.media.tagName.toLowerCase(),
                o = null,
                l = null;

            switch (r) {
              case "div":
                if (o = this.media.querySelector("iframe"), G(o)) {
                  if (l = at(o.getAttribute("src")), this.provider = function (e) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? ut.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? ut.vimeo : null;
                  }(l.toString()), this.elements.container = this.media, this.media = o, this.elements.container.className = "", l.search.length) {
                    var c = ["1", "true"];
                    c.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);

                if (ae(this.provider) || !Object.keys(ut).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                this.type = ht;
                break;

              case "video":
              case "audio":
                this.type = r, this.provider = ut.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                break;

              default:
                return void this.debug.error("Setup failed: unsupported type");
            }

            this.supported = Ee.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new vt(this), this.storage = new $e(this), this.media.plyr = this, G(this.elements.container) || (this.elements.container = he("div", {
              tabindex: 0
            }), ue(this.media, this.elements.container)), yt.migrateStyles.call(this), yt.addStyleHook.call(this), Pt.setup.call(this), this.config.debug && xe.call(this, this.elements.container, this.config.events.join(" "), function (e) {
              a.debug.log("event: ".concat(e.type));
            }), this.fullscreen = new ft(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && yt.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Et(this)), this.isHTML5 && this.config.autoplay && setTimeout(function () {
              return qe(a.play());
            }, 10), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new Mt(this))) : this.debug.error("Setup failed: no support");
          } else this.debug.error("Setup failed: no support");
        } else this.debug.error("Setup failed: disabled by config");
      } else this.debug.error("Setup failed: no suitable element passed");
    }

    return i(t, [{
      key: "play",
      value: function () {
        var e = this;
        return X(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(function () {
          return e.ads.play();
        }).catch(function () {
          return qe(e.media.play());
        }), this.media.play()) : null;
      }
    }, {
      key: "pause",
      value: function () {
        return this.playing && X(this.media.pause) ? this.media.pause() : null;
      }
    }, {
      key: "togglePlay",
      value: function (e) {
        return (Q(e) ? e : !this.playing) ? this.play() : this.pause();
      }
    }, {
      key: "stop",
      value: function () {
        this.isHTML5 ? (this.pause(), this.restart()) : X(this.media.stop) && this.media.stop();
      }
    }, {
      key: "restart",
      value: function () {
        this.currentTime = 0;
      }
    }, {
      key: "rewind",
      value: function (e) {
        this.currentTime -= K(e) ? e : this.config.seekTime;
      }
    }, {
      key: "forward",
      value: function (e) {
        this.currentTime += K(e) ? e : this.config.seekTime;
      }
    }, {
      key: "increaseVolume",
      value: function (e) {
        var t = this.media.muted ? 0 : this.volume;
        this.volume = t + (K(e) ? e : 0);
      }
    }, {
      key: "decreaseVolume",
      value: function (e) {
        this.increaseVolume(-e);
      }
    }, {
      key: "toggleCaptions",
      value: function (e) {
        rt.toggle.call(this, e, !1);
      }
    }, {
      key: "airplay",
      value: function () {
        Ee.airplay && this.media.webkitShowPlaybackTargetPicker();
      }
    }, {
      key: "toggleControls",
      value: function (e) {
        if (this.supported.ui && !this.isAudio) {
          var t = we(this.elements.container, this.config.classNames.hideControls),
              i = void 0 === e ? void 0 : !e,
              n = be(this.elements.container, this.config.classNames.hideControls, i);

          if (n && $(this.config.controls) && this.config.controls.includes("settings") && !ae(this.config.settings) && nt.toggleMenu.call(this, !1), n !== t) {
            var a = n ? "controlshidden" : "controlsshown";
            Oe.call(this, this.media, a);
          }

          return !n;
        }

        return !1;
      }
    }, {
      key: "on",
      value: function (e, t) {
        xe.call(this, this.elements.container, e, t);
      }
    }, {
      key: "once",
      value: function (e, t) {
        Le.call(this, this.elements.container, e, t);
      }
    }, {
      key: "off",
      value: function (e, t) {
        Ie(this.elements.container, e, t);
      }
    }, {
      key: "destroy",
      value: function (e) {
        var t = this,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

        if (this.ready) {
          var n = function () {
            document.body.style.overflow = "", t.embed = null, i ? (Object.keys(t.elements).length && (me(t.elements.buttons.play), me(t.elements.captions), me(t.elements.controls), me(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), X(e) && e()) : (_e.call(t), ge(t.elements.original, t.elements.container), Oe.call(t, t.elements.original, "destroyed", !0), X(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
              t.elements = null, t.media = null;
            }, 200));
          };

          this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (yt.toggleNativeControls.call(this, !0), n()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && X(this.embed.destroy) && this.embed.destroy(), n()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(n), setTimeout(n, 200));
        }
      }
    }, {
      key: "supports",
      value: function (e) {
        return Ee.mime.call(this, e);
      }
    }, {
      key: "isHTML5",
      get: function () {
        return this.provider === ut.html5;
      }
    }, {
      key: "isEmbed",
      get: function () {
        return this.isYouTube || this.isVimeo;
      }
    }, {
      key: "isYouTube",
      get: function () {
        return this.provider === ut.youtube;
      }
    }, {
      key: "isVimeo",
      get: function () {
        return this.provider === ut.vimeo;
      }
    }, {
      key: "isVideo",
      get: function () {
        return this.type === ht;
      }
    }, {
      key: "isAudio",
      get: function () {
        return this.type === dt;
      }
    }, {
      key: "playing",
      get: function () {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
    }, {
      key: "paused",
      get: function () {
        return Boolean(this.media.paused);
      }
    }, {
      key: "stopped",
      get: function () {
        return Boolean(this.paused && 0 === this.currentTime);
      }
    }, {
      key: "ended",
      get: function () {
        return Boolean(this.media.ended);
      }
    }, {
      key: "currentTime",
      set: function (e) {
        if (this.duration) {
          var t = K(e) && e > 0;
          this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
        }
      },
      get: function () {
        return Number(this.media.currentTime);
      }
    }, {
      key: "buffered",
      get: function () {
        var e = this.media.buffered;
        return K(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
      }
    }, {
      key: "seeking",
      get: function () {
        return Boolean(this.media.seeking);
      }
    }, {
      key: "duration",
      get: function () {
        var e = parseFloat(this.config.duration),
            t = (this.media || {}).duration,
            i = K(t) && t !== 1 / 0 ? t : 0;
        return e || i;
      }
    }, {
      key: "volume",
      set: function (e) {
        var t = e;
        Y(t) && (t = Number(t)), K(t) || (t = this.storage.get("volume")), K(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !ae(e) && this.muted && t > 0 && (this.muted = !1);
      },
      get: function () {
        return Number(this.media.volume);
      }
    }, {
      key: "muted",
      set: function (e) {
        var t = e;
        Q(t) || (t = this.storage.get("muted")), Q(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
      },
      get: function () {
        return Boolean(this.media.muted);
      }
    }, {
      key: "hasAudio",
      get: function () {
        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
      }
    }, {
      key: "speed",
      set: function (e) {
        var t = this,
            i = null;
        K(e) && (i = e), K(i) || (i = this.storage.get("speed")), K(i) || (i = this.config.speed.selected);
        var n = this.minimumSpeed,
            a = this.maximumSpeed;
        i = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
          return Math.min(Math.max(e, t), i);
        }(i, n, a), this.config.speed.selected = i, setTimeout(function () {
          t.media.playbackRate = i;
        }, 0);
      },
      get: function () {
        return Number(this.media.playbackRate);
      }
    }, {
      key: "minimumSpeed",
      get: function () {
        return this.isYouTube ? Math.min.apply(Math, l(this.options.speed)) : this.isVimeo ? .5 : .0625;
      }
    }, {
      key: "maximumSpeed",
      get: function () {
        return this.isYouTube ? Math.max.apply(Math, l(this.options.speed)) : this.isVimeo ? 2 : 16;
      }
    }, {
      key: "quality",
      set: function (e) {
        var t = this.config.quality,
            i = this.options.quality;

        if (i.length) {
          var n = [!ae(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(K),
              a = !0;

          if (!i.includes(n)) {
            var s = function (e, t) {
              return $(e) && e.length ? e.reduce(function (e, i) {
                return Math.abs(i - t) < Math.abs(e - t) ? i : e;
              }) : null;
            }(i, n);

            this.debug.warn("Unsupported quality option: ".concat(n, ", using ").concat(s, " instead")), n = s, a = !1;
          }

          t.selected = n, this.media.quality = n, a && this.storage.set({
            quality: n
          });
        }
      },
      get: function () {
        return this.media.quality;
      }
    }, {
      key: "loop",
      set: function (e) {
        var t = Q(e) ? e : this.config.loop.active;
        this.config.loop.active = t, this.media.loop = t;
      },
      get: function () {
        return Boolean(this.media.loop);
      }
    }, {
      key: "source",
      set: function (e) {
        xt.change.call(this, e);
      },
      get: function () {
        return this.media.currentSrc;
      }
    }, {
      key: "download",
      get: function () {
        var e = this.config.urls.download;
        return ne(e) ? e : this.source;
      },
      set: function (e) {
        ne(e) && (this.config.urls.download = e, nt.setDownloadUrl.call(this));
      }
    }, {
      key: "poster",
      set: function (e) {
        this.isVideo ? yt.setPoster.call(this, e, !1).catch(function () {}) : this.debug.warn("Poster can only be set for video");
      },
      get: function () {
        return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
      }
    }, {
      key: "ratio",
      get: function () {
        if (!this.isVideo) return null;
        var e = He(Fe.call(this));
        return $(e) ? e.join(":") : e;
      },
      set: function (e) {
        this.isVideo ? Y(e) && De(e) ? (this.config.ratio = e, Re.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video");
      }
    }, {
      key: "autoplay",
      set: function (e) {
        var t = Q(e) ? e : this.config.autoplay;
        this.config.autoplay = t;
      },
      get: function () {
        return Boolean(this.config.autoplay);
      }
    }, {
      key: "currentTrack",
      set: function (e) {
        rt.set.call(this, e, !1);
      },
      get: function () {
        var e = this.captions,
            t = e.toggled,
            i = e.currentTrack;
        return t ? i : -1;
      }
    }, {
      key: "language",
      set: function (e) {
        rt.setLanguage.call(this, e, !1);
      },
      get: function () {
        return (rt.getCurrentTrack.call(this) || {}).language;
      }
    }, {
      key: "pip",
      set: function (e) {
        if (Ee.pip) {
          var t = Q(e) ? e : !this.pip;
          X(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? lt : ct), X(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
        }
      },
      get: function () {
        return Ee.pip ? ae(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === lt : null;
      }
    }], [{
      key: "supported",
      value: function (e, t, i) {
        return Ee.check(e, t, i);
      }
    }, {
      key: "loadSprite",
      value: function (e, t) {
        return Ge(e, t);
      }
    }, {
      key: "setup",
      value: function (e) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = null;
        return Y(e) ? n = Array.from(document.querySelectorAll(e)) : J(e) ? n = Array.from(e) : $(e) && (n = e.filter(G)), ae(n) ? null : n.map(function (e) {
          return new t(e, i);
        });
      }
    }]), t;
  }();

  return Lt.defaults = (It = ot, JSON.parse(JSON.stringify(It))), Lt;
});
},{}],"js/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSong = exports.getSongs = void 0;
const API = "https://acnhapi.com/v1/songs/";

const getSongs = async () => {
  try {
    const response = await fetch(API);
    return response.json();
  } catch (error) {
    return error;
  }
};

exports.getSongs = getSongs;

const getSong = async id => {
  try {
    const response = await fetch(API + id);
    return response.json();
  } catch (error) {
    return error;
  }
};

exports.getSong = getSong;
},{}],"js/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleModalOpen = exports.handleModalClose = void 0;

var _plyr = _interopRequireDefault(require("plyr"));

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const modal = document.getElementById("jsModal");
const modalSection = document.getElementById("modalSection");
const modalLoading = document.getElementById("modalLoading");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const buyPrice = document.getElementById("buyPrice");
const sellPrice = document.getElementById("sellPrice");
const player = new _plyr.default("#player", {
  autoplay: true
});

const populateModal = id => {
  (0, _api.getSong)(id).then(song => {
    modalImg.src = "https://acnhapi.com/v1/images/songs/".concat(song.id);
    modalTitle.innerText = song.name["name-KRko"];
    song["buy-price"] ? buyPrice.innerText = song["buy-price"] : buyPrice.innerText = "비매품";
    sellPrice.innerText = song["sell-price"];
    modalSection.style.display = "block";
  }).finally(() => {
    modalLoading.style.display = "none";
  });
};

const handleModalClose = () => {
  modal.classList.remove("is-open");
  modalLoading.style.display = "block";
  modalSection.style.display = "none";
  player.stop();
};

exports.handleModalClose = handleModalClose;

const handleModalOpen = ({
  target
}) => {
  const song = {
    id: 0
  };

  if (target.id) {
    song.id = target.id;
  } else {
    song.id = target.className;
  }

  player.source = {
    type: "audio",
    sources: [{
      src: "https://acnhapi.com/v1/music/".concat(song.id),
      type: "audio/mp3"
    }]
  };
  populateModal(song.id);
  modal.classList.add("is-open");
};

exports.handleModalOpen = handleModalOpen;
},{"plyr":"../../../node_modules/plyr/dist/plyr.min.js","./api":"js/api.js"}],"js/Components/Song.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const {
  handleModalOpen
} = require("../modal");

const Song = song => {
  const $Aside = document.createElement("aside");
  $Aside.className = "song-card"; // Song Aside's ID should be song titles for search query

  $Aside.id = song.name["name-KRko"].toString().toUpperCase() + song.name["name-USen"].toString().toUpperCase(); // Thumbnail

  const $Figure = document.createElement("div");
  $Figure.className = "song-thumbnail";
  $Figure.id = song["file-name"];
  const $Image = document.createElement("img");
  $Image.setAttribute("draggable", false);
  const $h1 = document.createElement("h1");
  $h1.textContent = "▶";
  $h1.className = song.id;
  $Image.src = song["image_uri"];
  $Image.id = song.id;
  $Figure.appendChild($Image);
  $Figure.appendChild($h1);
  $Figure.addEventListener("click", handleModalOpen);
  $Aside.appendChild($Figure); // Titles

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

var _default = Song;
exports.default = _default;
},{"../modal":"js/modal.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _modal = require("./modal");

var _api = require("./api");

var _Song = _interopRequireDefault(require("./Components/Song"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DOM elements
const jsInput = document.getElementById("jsSearchInput"),
      modalCloseBtn = document.getElementById("modalCloseBtn"),
      loading = document.getElementById("jsLoading"),
      errorBar = document.getElementById("jsError"); // Root DOM element where song thumbnails go

const root = document.getElementById("root");

const handleInput = ({
  target: {
    value
  }
}) => {
  let query = value.toUpperCase();
  const songCards = document.getElementsByClassName("song-card");

  for (let i = 0; i < songCards.length; i++) {
    if (songCards[i].id.indexOf(query) > -1) {
      songCards[i].style.display = "";
    } else {
      songCards[i].style.display = "none";
    }
  }
};

function init() {
  (0, _api.getSongs)() // Get songs promise
  .then(data => {
    const songs = Object.entries(data).map(item => item[1]); // Get Array of song objects from data

    return songs;
  }).then(songs => songs.forEach(song => {
    root.appendChild((0, _Song.default)(song)); // Populate DOM with song cars
  })).catch(() => {
    errorBar.style.display = "block"; // Show Error Block
  }).finally(() => loading.style.display = "none"); // Hide loading bar
  // Add event listeners

  jsInput.addEventListener("input", handleInput);
  modalCloseBtn.addEventListener("click", _modal.handleModalClose);
}

init();
},{"./modal":"js/modal.js","./api":"js/api.js","./Components/Song":"js/Components/Song.js"}],"../../../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3068" + '/');

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
//# sourceMappingURL=js.00a46daa.js.map