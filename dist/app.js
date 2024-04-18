/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["App"] = factory();
	else
		root["App"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/evc.min.js":
/*!***********************!*\
  !*** ./js/evc.min.js ***!
  \***********************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n!function (t, e) {\n  \"object\" == ( false ? 0 : _typeof(exports)) && \"object\" == ( false ? 0 : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n}(self, function () {\n  return function () {\n    \"use strict\";\n\n    var t = {\n        d: function d(e, n) {\n          for (var i in n) t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {\n            enumerable: !0,\n            get: n[i]\n          });\n        },\n        o: function o(t, e) {\n          return Object.prototype.hasOwnProperty.call(t, e);\n        },\n        r: function r(t) {\n          \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {\n            value: \"Module\"\n          }), Object.defineProperty(t, \"__esModule\", {\n            value: !0\n          });\n        }\n      },\n      e = {};\n    t.r(e), t.d(e, {\n      CalendarEvent: function CalendarEvent() {\n        return l;\n      },\n      EventCalendar: function EventCalendar() {\n        return j;\n      }\n    });\n    var n = {\n      randomUUID: \"undefined\" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)\n    };\n    var i;\n    var r = new Uint8Array(16);\n    function o() {\n      if (!i && (i = \"undefined\" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i)) throw new Error(\"crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported\");\n      return i(r);\n    }\n    var a = [];\n    for (var _t = 0; _t < 256; ++_t) a.push((_t + 256).toString(16).slice(1));\n    var s = function s(t, e, i) {\n      if (n.randomUUID && !e && !t) return n.randomUUID();\n      var r = (t = t || {}).random || (t.rng || o)();\n      if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, e) {\n        i = i || 0;\n        for (var _t2 = 0; _t2 < 16; ++_t2) e[i + _t2] = r[_t2];\n        return e;\n      }\n      return function (t) {\n        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n        return a[t[e + 0]] + a[t[e + 1]] + a[t[e + 2]] + a[t[e + 3]] + \"-\" + a[t[e + 4]] + a[t[e + 5]] + \"-\" + a[t[e + 6]] + a[t[e + 7]] + \"-\" + a[t[e + 8]] + a[t[e + 9]] + \"-\" + a[t[e + 10]] + a[t[e + 11]] + a[t[e + 12]] + a[t[e + 13]] + a[t[e + 14]] + a[t[e + 15]];\n      }(r);\n    };\n    function u(t) {\n      return u = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n        return _typeof(t);\n      } : function (t) {\n        return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : _typeof(t);\n      }, u(t);\n    }\n    function h(t, e) {\n      for (var n = 0; n < e.length; n++) {\n        var i = e[n];\n        i.enumerable = i.enumerable || !1, i.configurable = !0, \"value\" in i && (i.writable = !0), Object.defineProperty(t, c(i.key), i);\n      }\n    }\n    function c(t) {\n      var e = function (t, e) {\n        if (\"object\" != u(t) || !t) return t;\n        var n = t[Symbol.toPrimitive];\n        if (void 0 !== n) {\n          var i = n.call(t, \"string\");\n          if (\"object\" != u(i)) return i;\n          throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n        }\n        return String(t);\n      }(t);\n      return \"symbol\" == u(e) ? e : e + \"\";\n    }\n    var l = function () {\n      return t = function t(e) {\n        var n = e.id,\n          i = void 0 === n ? null : n,\n          r = e.title,\n          o = e.start,\n          a = e.end,\n          u = void 0 === a ? null : a,\n          h = e.themeColor,\n          c = void 0 === h ? \"#03a9f4\" : h;\n        if (function (t, e) {\n          if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n        }(this, t), this.id = i || s(), this.title = r, u && void 0 !== u.weekDay && Number.isInteger(u.weekDay) && (void 0 === o.weekDay || !Number.isInteger(o.weekDay))) throw \"End day of weekly event is given but no start day is given\";\n        this.start = o, this.end = null != u ? u : {}, Object.assign(this.end, null != u ? u : this.start), this.validateHexColor(c) && (this.themeColor = c);\n      }, (e = [{\n        key: \"validateHexColor\",\n        value: function value(t) {\n          if (null !== t.match(/^#([0-9a-f]{3}){1,2}$/i)) return !0;\n          throw \"Invalid hex color \" + t;\n        }\n      }]) && h(t.prototype, e), Object.defineProperty(t, \"prototype\", {\n        writable: !1\n      }), t;\n      var t, e;\n    }();\n    function y(t) {\n      return y = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n        return _typeof(t);\n      } : function (t) {\n        return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : _typeof(t);\n      }, y(t);\n    }\n    function f(t, e) {\n      for (var n = 0; n < e.length; n++) {\n        var i = e[n];\n        i.enumerable = i.enumerable || !1, i.configurable = !0, \"value\" in i && (i.writable = !0), Object.defineProperty(t, v(i.key), i);\n      }\n    }\n    function v(t) {\n      var e = function (t, e) {\n        if (\"object\" != y(t) || !t) return t;\n        var n = t[Symbol.toPrimitive];\n        if (void 0 !== n) {\n          var i = n.call(t, \"string\");\n          if (\"object\" != y(i)) return i;\n          throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n        }\n        return String(t);\n      }(t);\n      return \"symbol\" == y(e) ? e : e + \"\";\n    }\n    function d(t, e, n) {\n      !function (t, e) {\n        if (e.has(t)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\");\n      }(t, e), e.set(t, n);\n    }\n    function m(t, e, n) {\n      return t.set(g(t, e), n), n;\n    }\n    function p(t, e) {\n      return t.get(g(t, e));\n    }\n    function g(t, e, n) {\n      if (\"function\" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;\n      throw new TypeError(\"Private element is not present on this object\");\n    }\n    var b = new WeakMap(),\n      w = new WeakMap(),\n      D = new WeakMap(),\n      E = new WeakMap(),\n      k = new WeakMap(),\n      S = new WeakMap(),\n      C = new WeakMap(),\n      N = new WeakMap(),\n      M = new WeakMap(),\n      j = function () {\n        return t = function t() {\n          var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).events,\n            n = void 0 === e ? [] : e;\n          if (function (t, e) {\n            if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n          }(this, t), d(this, b, new Date()), d(this, w, void 0), d(this, D, void 0), d(this, E, void 0), d(this, k, []), d(this, S, [new l({\n            title: \"Today\",\n            start: {\n              day: p(b, this).getDate(),\n              month: p(b, this).getMonth() + 1,\n              year: p(b, this).getFullYear()\n            },\n            themeColor: \"#8a4af3\"\n          })]), d(this, C, null), d(this, N, []), d(this, M, []), !this.validateNoDuplicateEvents(n)) throw \"Duplicate Events Not Allowed\";\n          this.events = n, this.setup();\n        }, e = [{\n          key: \"month\",\n          get: function get() {\n            return p(D, this);\n          },\n          set: function set(t) {\n            m(D, this, t), this.month > 11 ? (m(D, this, 0), this.year++) : this.month < 0 && (m(D, this, 11), this.year--), this.dispatchCustomEvent(\"monthChanged\", this.month), this.updateDays();\n          }\n        }, {\n          key: \"year\",\n          get: function get() {\n            return p(E, this);\n          },\n          set: function set(t) {\n            m(E, this, t), this.dispatchCustomEvent(\"yearChanged\", this.year), this.updateDays();\n          }\n        }, {\n          key: \"events\",\n          get: function get() {\n            return p(k, this);\n          },\n          set: function set(t) {\n            t.map(function (t) {\n              return new l(t);\n            }), m(k, this, t.map(function (t) {\n              return t instanceof l ? t : new l(t);\n            })), this.updateDays(), this.dispatchCustomEvent(\"eventsChanged\", this.events);\n          }\n        }, {\n          key: \"selectedDay\",\n          get: function get() {\n            return p(C, this);\n          },\n          set: function set(t) {\n            m(C, this, t), this.dispatchCustomEvent(\"selectedDayChanged\", {\n              day: this.selectedDay,\n              events: this.getEventsForDay(t)\n            }), this.updateDays();\n          }\n        }, {\n          key: \"days\",\n          get: function get() {\n            var t = this;\n            return p(w, this).map(function (e) {\n              return {\n                day: e,\n                events: t.getEventsForDay(e)\n              };\n            });\n          },\n          set: function set(t) {\n            m(w, this, t), this.dispatchCustomEvent(\"daysChanged\", this.days);\n          }\n        }, {\n          key: \"customEventStore\",\n          get: function get() {\n            return p(N, this);\n          },\n          set: function set(t) {\n            m(N, this, []);\n          }\n        }, {\n          key: \"setup\",\n          value: function value() {\n            this.events = this.events.concat(p(S, this)), this.month = p(b, this).getMonth(), this.year = p(b, this).getFullYear(), this.days = this.getDaysInMonth(this.month, this.year);\n          }\n        }, {\n          key: \"on\",\n          value: function value(t, e) {\n            var n = this;\n            p(N, this).push({\n              customEventName: t,\n              callback: e\n            });\n            var i = p(M, this).filter(function (e) {\n              return e.customEventName === t;\n            });\n            return i.length > 0 && (i.forEach(function (t) {\n              n.dispatchCustomEvent(t.customEventName, t.data);\n            }), m(M, this, p(M, this).filter(function (e) {\n              return e.customEventName !== t;\n            }))), this;\n          }\n        }, {\n          key: \"updateDays\",\n          value: function value() {\n            void 0 !== this.month && Number.isInteger(this.month) && void 0 !== this.year && Number.isInteger(this.year) && (this.days = this.getDaysInMonth(this.month, this.year));\n          }\n        }, {\n          key: \"addEvent\",\n          value: function value(t) {\n            if (t instanceof l || (t = new l(t)), !this.validateEventDoesntExistsAlready(t)) throw \"Duplicate Events Not Allowed\";\n            this.events = this.events.concat(t);\n          }\n        }, {\n          key: \"removeEvent\",\n          value: function value(t) {\n            t instanceof l || (t = new l(t)), this.events = this.events.filter(function (e) {\n              return e.title !== t.title && JSON.stringify(e) !== JSON.stringify(t);\n            });\n          }\n        }, {\n          key: \"dispatchCustomEvent\",\n          value: function value(t, e) {\n            var n = this;\n            p(N, this).length > 0 ? p(N, this).forEach(function (i) {\n              i.customEventName === t && i.callback(e, n);\n            }) : p(M, this).push({\n              customEventName: t,\n              data: e\n            });\n          }\n        }, {\n          key: \"getEventsForDay\",\n          value: function value(t) {\n            var e = this,\n              n = [];\n            return this.events.forEach(function (i) {\n              e.checkDayHasEvent(t, i) && n.push(i);\n            }), n;\n          }\n        }, {\n          key: \"checkDayHasEvent\",\n          value: function value(t, e) {\n            var n = function n() {\n                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];\n                return e.every(function (t) {\n                  return void 0 !== t && Number.isInteger(t);\n                });\n              },\n              i = !1 === n(e.start.day) ? 1 : e.start.day,\n              r = !1 === n(e.start.month) ? n(e.start.year) ? 1 : t.getMonth() + 1 : e.start.month,\n              o = !1 === n(e.start.year) ? t.getFullYear() : e.start.year,\n              a = !1 === n(e.start.weekDay) ? null : e.start.weekDay,\n              s = !1 === n(e.end.day) ? i : e.end.day,\n              u = !1 === n(e.end.month) ? r : e.end.month,\n              h = !1 === n(e.end.year) ? o : e.end.year,\n              c = !1 === n(e.end.weekDay) ? a : e.end.weekDay,\n              l = new Date(o, r - 1, i),\n              y = new Date(h, u - 1, s);\n            return null === a ? !(!this.matchSameDate(t, l) || !this.matchSameDate(t, y)) || t.getTime() >= l.getTime() && t.getTime() <= y.getTime() : null !== a && t.getDay() === a && null === c || null !== a && null !== c && t.getDay() >= a && t.getDay() <= c || void 0;\n          }\n        }, {\n          key: \"validateEventDoesntExistsAlready\",\n          value: function value(t) {\n            var e;\n            return 0 === (null !== (e = this.events) && void 0 !== e ? e : []).filter(function (e) {\n              return JSON.stringify(e) === JSON.stringify(t);\n            }).length;\n          }\n        }, {\n          key: \"validateNoDuplicateEvents\",\n          value: function value(t) {\n            var e = !1;\n            return t.forEach(function (n) {\n              !0 !== e && t.filter(function (t) {\n                return JSON.stringify(t) === JSON.stringify(n);\n              }).length > 1 && (e = !0);\n            }), !e;\n          }\n        }, {\n          key: \"getDaysInMonth\",\n          value: function value(t, e) {\n            for (var n = new Date(e, t, 1), i = []; n.getMonth() === t;) i.push(new Date(n)), n.setDate(n.getDate() + 1);\n            return i;\n          }\n        }, {\n          key: \"matchSameDate\",\n          value: function value(t, e) {\n            return t && e && t.getFullYear() === e.getFullYear() && t.getDate() === e.getDate() && t.getMonth() === e.getMonth();\n          }\n        }], e && f(t.prototype, e), Object.defineProperty(t, \"prototype\", {\n          writable: !1\n        }), t;\n        var t, e;\n      }();\n    return e;\n  }();\n});\n\n//# sourceURL=webpack://App/./js/evc.min.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _evc_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evc.min.js */ \"./js/evc.min.js\");\n/* harmony import */ var _evc_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_evc_min_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// storing the model cell so we can clone it while generating calendar cells\nvar dayCellModel = document.querySelector(\"#daysOfMonth #dayCellModel\").cloneNode(true);\ndocument.querySelector(\"#daysOfMonth #dayCellModel\").remove();\n\n// Generating calendar day cell using given data\nfunction generateCell(eventCalendar) {\n  var _dayData$day$getDate, _dayData$day;\n  var dayData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var newCell = dayCellModel.cloneNode(true);\n  newCell.innerHTML = (_dayData$day$getDate = dayData === null || dayData === void 0 || (_dayData$day = dayData.day) === null || _dayData$day === void 0 ? void 0 : _dayData$day.getDate()) !== null && _dayData$day$getDate !== void 0 ? _dayData$day$getDate : \"\";\n  if (dayData) {\n    var eventsForThisDay = dayData.events;\n    if (eventsForThisDay.length > 0) {\n      var gradientsToMake = eventsForThisDay.length;\n      var breakpoint = 100 / gradientsToMake;\n      var gradient = \"linear-gradient(90deg,\";\n      eventsForThisDay.forEach(function (ev, index) {\n        console.log(ev.id);\n        gradient += \"\".concat(ev.themeColor, \" \").concat(breakpoint * index, \"%, \").concat(ev.themeColor, \" \").concat(breakpoint * (index + 1), \"%\");\n        if (index !== eventsForThisDay.length - 1) {\n          gradient += \",\";\n        }\n      });\n      newCell.style.background = gradient + \")\";\n      newCell.style.color = \"#fff\";\n      newCell.style.textShadow = \"0px 0px 2px black\";\n    }\n    newCell.addEventListener(\"click\", function () {\n      eventCalendar.selectedDay = dayData.day;\n    });\n  }\n  document.getElementById(\"daysOfMonth\").appendChild(newCell);\n}\n\n// just using it so we can see the demo in current month everytime we open site\nvar currentMonth = function currentMonth() {\n  return new Date().getMonth() + 1;\n};\nvar currentYear = function currentYear() {\n  return new Date().getFullYear();\n};\nvar evc = new _evc_min_js__WEBPACK_IMPORTED_MODULE_0__.EventCalendar({\n  events: [{\n    title: \"John's Birthday\",\n    start: {\n      day: 23,\n      month: currentMonth()\n    }\n  }, {\n    title: \"My Exams\",\n    start: {\n      day: 2,\n      month: currentMonth(),\n      year: currentYear()\n    },\n    end: {\n      day: 12,\n      month: currentMonth(),\n      year: currentYear()\n    },\n    themeColor: \"#e91e63\"\n  }, {\n    title: \"Montly Quiz\",\n    start: {\n      day: 3\n    },\n    themeColor: \"#795548\"\n  }, {\n    title: \"Sunday :D\",\n    start: {\n      weekDay: 0\n    },\n    themeColor: \"#000000\"\n  }]\n});\nevc.on(\"monthChanged\", function (month) {\n  if (Number.isInteger(month)) {\n    document.querySelector(\"#calendarHeader #thisMonth\").innerHTML = Intl.DateTimeFormat(\"en\", {\n      month: \"short\"\n    }).format(new Date(month + 1 + \"\"));\n  }\n}).on(\"yearChanged\", function (year) {\n  document.querySelector(\"#calendarHeader #thisYear\").innerHTML = year;\n}).on(\"daysChanged\", function (days, eventCalendar) {\n  document.getElementById(\"daysOfMonth\").innerHTML = \"\";\n  days.forEach(function (dayData, i) {\n    // generate empty cells before first day if month doesn't start from Sunday\n    if (i === 0) {\n      // 0 = Sunday ... 6 = Sat \n      // We have Sunday as week's start day so dayInWeek is initiated with 0 representing Sunday\n      var dayInWeek = 0;\n      while (days[0].day.getDay() !== dayInWeek && dayInWeek <= 6) {\n        generateCell();\n        dayInWeek++;\n      }\n      if (days[0].day.getDay() === dayData.day.getDay()) {\n        generateCell(eventCalendar, dayData);\n      }\n    } else {\n      generateCell(eventCalendar, dayData);\n    }\n  });\n}).on(\"selectedDayChanged\", function (selectedDayData) {\n  document.querySelector(\"#calendarHeader #eventDescriptor\").innerHTML = \"\";\n  // using this to prevent showing duplicate event titles\n  var addedEvents = [];\n  selectedDayData.events.forEach(function (ev) {\n    if (!addedEvents.some(function (evnt) {\n      return ev === evnt;\n    })) {\n      var _ref;\n      document.querySelector(\"#calendarHeader #eventDescriptor\").innerHTML += (_ref = \"<div class=\\\"w-full\\\" style=\\\"text-shadow:0px 0px 2px black;color:white;background-color:\".concat(ev.themeColor, \"\\\">\") + (ev === null || ev === void 0 ? void 0 : ev.title) + \"</div>\") !== null && _ref !== void 0 ? _ref : \"\";\n      addedEvents.push(ev);\n    }\n  });\n});\n\n// set next month button\ndocument.querySelector(\"#calendarHeader #nextMonth\").addEventListener(\"click\", function () {\n  evc.month++;\n});\n\n// set prev month button\ndocument.querySelector(\"#calendarHeader #prevMonth\").addEventListener(\"click\", function () {\n  evc.month--;\n});\n\n//# sourceURL=webpack://App/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});