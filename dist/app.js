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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var evc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! evc */ \"./node_modules/evc/src/index.js\");\n // storing the model cell so we can clone it while generating calendar cells\n\nvar dayCellModel = document.querySelector(\"#daysOfMonth #dayCellModel\").cloneNode(true);\ndocument.querySelector(\"#daysOfMonth #dayCellModel\").remove(); // Generating calendar day cell using given data\n\nfunction generateCell(eventCalendar) {\n  var _dayData$day$getDate, _dayData$day;\n\n  var dayData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var newCell = dayCellModel.cloneNode(true);\n  newCell.innerHTML = (_dayData$day$getDate = dayData === null || dayData === void 0 ? void 0 : (_dayData$day = dayData.day) === null || _dayData$day === void 0 ? void 0 : _dayData$day.getDate()) !== null && _dayData$day$getDate !== void 0 ? _dayData$day$getDate : \"\";\n\n  if (dayData) {\n    var eventsForThisDay = dayData.events;\n\n    if (eventsForThisDay.length > 0) {\n      var gradientsToMake = eventsForThisDay.length;\n      var breakpoint = 100 / gradientsToMake;\n      var gradient = \"linear-gradient(90deg,\";\n      eventsForThisDay.forEach(function (ev, index) {\n        gradient += \"\".concat(ev.themeColor, \" \").concat(breakpoint * index, \"%, \").concat(ev.themeColor, \" \").concat(breakpoint * (index + 1), \"%\");\n\n        if (index !== eventsForThisDay.length - 1) {\n          gradient += \",\";\n        }\n      });\n      newCell.style.background = gradient + \")\";\n      newCell.style.color = \"#fff\";\n      newCell.style.textShadow = \"0px 0px 2px black\";\n    }\n\n    newCell.addEventListener(\"click\", function () {\n      eventCalendar.selectedDay = dayData.day;\n    });\n  }\n\n  document.getElementById(\"daysOfMonth\").appendChild(newCell);\n} // just using it so we can see the demo in current month everytime we open site\n\n\nvar currentMonth = function currentMonth() {\n  return new Date().getMonth() + 1;\n};\n\nvar currentYear = function currentYear() {\n  return new Date().getFullYear();\n};\n\nvar evc = new evc__WEBPACK_IMPORTED_MODULE_0__.EventCalendar({\n  events: [{\n    title: \"John's Birthday\",\n    start: {\n      day: 23,\n      month: currentMonth()\n    }\n  }, {\n    title: \"My Exams\",\n    start: {\n      day: 2,\n      month: currentMonth(),\n      year: currentYear()\n    },\n    end: {\n      day: 12,\n      month: currentMonth(),\n      year: currentYear()\n    },\n    themeColor: \"#e91e63\"\n  }, {\n    title: \"Montly Quiz\",\n    start: {\n      day: 3\n    },\n    themeColor: \"#795548\"\n  }, {\n    title: \"Sunday :D\",\n    start: {\n      weekDay: 0\n    },\n    themeColor: \"#000000\"\n  }]\n});\nevc.on(\"monthChanged\", function (month) {\n  if (Number.isInteger(month)) {\n    document.querySelector(\"#calendarHeader #thisMonth\").innerHTML = Intl.DateTimeFormat(\"en\", {\n      month: \"short\"\n    }).format(new Date(month + 1 + \"\"));\n  }\n}).on(\"yearChanged\", function (year) {\n  document.querySelector(\"#calendarHeader #thisYear\").innerHTML = year;\n}).on(\"daysChanged\", function (days, eventCalendar) {\n  document.getElementById(\"daysOfMonth\").innerHTML = \"\";\n  days.forEach(function (dayData, i) {\n    // 0 = Monday ... 6 = Sunday\n    if (i === 0) {\n      var dayInWeek = 0;\n\n      while (days[0].day.getDay() !== dayInWeek && dayInWeek <= 6) {\n        generateCell();\n        dayInWeek++;\n      }\n\n      if (days[0].day.getDay() === dayData.day.getDay()) {\n        generateCell(eventCalendar, dayData);\n      }\n    } else {\n      generateCell(eventCalendar, dayData);\n    }\n  });\n}).on(\"selectedDayChanged\", function (selectedDayData) {\n  document.querySelector(\"#calendarHeader #eventDescriptor\").innerHTML = \"\"; // using this to prevent showing duplicate event titles\n\n  var addedEvents = [];\n  selectedDayData.events.forEach(function (ev) {\n    if (!addedEvents.some(function (evnt) {\n      return ev === evnt;\n    })) {\n      var _ref;\n\n      document.querySelector(\"#calendarHeader #eventDescriptor\").innerHTML += (_ref = \"<div class=\\\"w-full\\\" style=\\\"text-shadow:0px 0px 2px black;color:white;background-color:\".concat(ev.themeColor, \"\\\">\") + (ev === null || ev === void 0 ? void 0 : ev.title) + \"</div>\") !== null && _ref !== void 0 ? _ref : \"\";\n      addedEvents.push(ev);\n    }\n  });\n}); // set next month button\n\ndocument.querySelector(\"#calendarHeader #nextMonth\").addEventListener(\"click\", function () {\n  evc.month++;\n}); // set prev month button\n\ndocument.querySelector(\"#calendarHeader #prevMonth\").addEventListener(\"click\", function () {\n  evc.month--;\n});\n\n//# sourceURL=webpack://App/./js/index.js?");

/***/ }),

/***/ "./node_modules/evc/src/CalendarEvent.js":
/*!***********************************************!*\
  !*** ./node_modules/evc/src/CalendarEvent.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CalendarEvent)\n/* harmony export */ });\nclass CalendarEvent {\r\n  constructor({ title, start, end = null, themeColor = \"#03a9f4\" }) {\r\n    this.title = title;\r\n\r\n    // if end day of weekly event is given but no start is given\r\n    if (\r\n      end &&\r\n      end.weekDay !== undefined &&\r\n      Number.isInteger(end.weekDay) &&\r\n      (start.weekDay === undefined || !Number.isInteger(start.weekDay))\r\n    ) {\r\n      throw \"End day of weekly event is given but no start day is given\";\r\n    }\r\n\r\n    this.start = start;\r\n    this.end = end ?? {};\r\n\r\n    Object.assign(this.end, end ?? this.start);\r\n\r\n    if (this.validateHexColor(themeColor)) {\r\n      this.themeColor = themeColor;\r\n    }\r\n  }\r\n\r\n  validateHexColor(color) {\r\n    if (color.match(/^#([0-9a-f]{3}){1,2}$/i) !== null) {\r\n      return true;\r\n    } else {\r\n      throw \"Invalid hex color \" + color;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://App/./node_modules/evc/src/CalendarEvent.js?");

/***/ }),

/***/ "./node_modules/evc/src/EventCalendar.js":
/*!***********************************************!*\
  !*** ./node_modules/evc/src/EventCalendar.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventCalendar)\n/* harmony export */ });\n/* harmony import */ var _CalendarEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarEvent.js */ \"./node_modules/evc/src/CalendarEvent.js\");\n\r\n\r\nclass EventCalendar {\r\n  #_today = new Date();\r\n  #_days;\r\n  #_month;\r\n  #_year;\r\n  #_events = [];\r\n  #_defaultEvents = [\r\n    new _CalendarEvent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n      title: \"Today\",\r\n      start: {\r\n        day: this.#_today.getDate(),\r\n        month: this.#_today.getMonth() + 1,\r\n        year: this.#_today.getFullYear(),\r\n      },\r\n      themeColor: \"#8a4af3\",\r\n    }),\r\n  ];\r\n  #_selectedDay = null;\r\n  #_customEventStore = [];\r\n  #_queuedCustomEvents = [];\r\n\r\n  constructor({ events = [] } = {}) {\r\n    // this.htmlElement = targetElement;\r\n    if (this.validateNoDuplicateEvents(events)) {\r\n      this.events = events;\r\n    } else {\r\n      throw \"Duplicate Events Not Allowed\";\r\n    }\r\n\r\n    this.setup();\r\n  }\r\n\r\n  set month(month) {\r\n    this.#_month = month;\r\n\r\n    if (this.month > 11) {\r\n      this.#_month = 0;\r\n\r\n      this.year++;\r\n    } else if (this.month < 0) {\r\n      this.#_month = 11;\r\n\r\n      this.year--;\r\n    }\r\n\r\n    //dispatch event\r\n    this.dispatchCustomEvent(\"monthChanged\", this.month);\r\n\r\n    // update days\r\n    this.updateDays();\r\n  }\r\n\r\n  get month() {\r\n    return this.#_month;\r\n  }\r\n\r\n  set year(year) {\r\n    this.#_year = year;\r\n\r\n    this.dispatchCustomEvent(\"yearChanged\", this.year);\r\n\r\n    // update days\r\n    this.updateDays();\r\n  }\r\n\r\n  get year() {\r\n    return this.#_year;\r\n  }\r\n\r\n  set events(events) {\r\n    events.map((ev) => new _CalendarEvent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ev));\r\n\r\n    // convert to calendar event if its not already\r\n    this.#_events = events.map((ev) =>\r\n      ev instanceof _CalendarEvent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ? ev : new _CalendarEvent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ev)\r\n    );\r\n\r\n    this.updateDays();\r\n\r\n    this.dispatchCustomEvent(\"eventsChanged\", this.events);\r\n  }\r\n\r\n  get events() {\r\n    return this.#_events;\r\n  }\r\n\r\n  set selectedDay(day) {\r\n    this.#_selectedDay = day;\r\n\r\n    this.dispatchCustomEvent(\"selectedDayChanged\", {\r\n      day: this.selectedDay,\r\n      events: this.getEventsForDay(day),\r\n    });\r\n\r\n    this.updateDays();\r\n  }\r\n\r\n  get selectedDay() {\r\n    return this.#_selectedDay;\r\n  }\r\n\r\n  set days(days) {\r\n    this.#_days = days;\r\n\r\n    this.dispatchCustomEvent(\"daysChanged\", this.days);\r\n  }\r\n\r\n  get days() {\r\n    let x = this.#_days.map((day) => {\r\n      return {\r\n        day: day,\r\n        events: this.getEventsForDay(day),\r\n      };\r\n    });\r\n\r\n    return x;\r\n  }\r\n\r\n  set customEventStore(customEvents) {\r\n    this.#_customEventStore = [];\r\n  }\r\n\r\n  get customEventStore() {\r\n    return this.#_customEventStore;\r\n  }\r\n\r\n  setup() {\r\n    this.events = this.events.concat(this.#_defaultEvents);\r\n    this.month = this.#_today.getMonth();\r\n    this.year = this.#_today.getFullYear();\r\n    this.days = this.getDaysInMonth(this.month, this.year);\r\n  }\r\n\r\n  on(customEvent, callback) {\r\n    this.#_customEventStore.push({\r\n      customEventName: customEvent,\r\n      callback: callback,\r\n    });\r\n\r\n    // check and even with this name is queued\r\n    const queuedCallsForThisEvent = this.#_queuedCustomEvents.filter(\r\n      (ev) => ev.customEventName === customEvent\r\n    );\r\n    if (queuedCallsForThisEvent.length > 0) {\r\n      queuedCallsForThisEvent.forEach((ev) => {\r\n        this.dispatchCustomEvent(ev.customEventName, ev.data);\r\n      });\r\n\r\n      // clear queued calls\r\n      this.#_queuedCustomEvents = this.#_queuedCustomEvents.filter(\r\n        (ev) => ev.customEventName !== customEvent\r\n      );\r\n    }\r\n\r\n    return this;\r\n  }\r\n\r\n  updateDays() {\r\n    if (\r\n      this.month !== undefined &&\r\n      Number.isInteger(this.month) &&\r\n      this.year !== undefined &&\r\n      Number.isInteger(this.year)\r\n    ) {\r\n      this.days = this.getDaysInMonth(this.month, this.year);\r\n    }\r\n  }\r\n\r\n  addEvent(event) {\r\n    // make sure event is an instance of CalendarEvent\r\n    if (event instanceof _CalendarEvent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n      // make sure event is not already in events\r\n      if (this.validateEventDoesntExistsAlready(event)) {\r\n        this.events = this.events.concat(event);\r\n      } else {\r\n        throw \"Duplicate Events Not Allowed\";\r\n      }\r\n    } else {\r\n      throw \"Event must be an instance of CalendarEvent\";\r\n    }\r\n  }\r\n\r\n  dispatchCustomEvent(customEvent, data) {\r\n    if (this.#_customEventStore.length > 0) {\r\n      this.#_customEventStore.forEach((ev) => {\r\n        if (ev.customEventName === customEvent) {\r\n          ev.callback(data, this);\r\n        }\r\n      });\r\n    } else {\r\n      this.#_queuedCustomEvents.push({\r\n        customEventName: customEvent,\r\n        data: data,\r\n      });\r\n    }\r\n  }\r\n\r\n  getEventsForDay(day) {\r\n    let eventsFound = [];\r\n    this.events.forEach((event) => {\r\n      if (this.checkDayHasEvent(day, event)) {\r\n        eventsFound.push(event);\r\n      }\r\n    });\r\n    return eventsFound;\r\n  }\r\n\r\n  checkDayHasEvent(day, event) {\r\n    // check if all values is not undefined and is integer\r\n    let validIntegers = (...value) =>\r\n      value.every((v) => v !== undefined && Number.isInteger(v));\r\n\r\n    let checkSameObj = (obj1, obj2) =>\r\n      JSON.stringify(obj1) === JSON.stringify(obj2);\r\n\r\n    let eventStartDay =\r\n      validIntegers(event.start.day) === false ? 1 : event.start.day;\r\n    let eventStartMonth =\r\n      validIntegers(event.start.month) === false\r\n        ? validIntegers(event.start.year)\r\n          ? 1\r\n          : day.getMonth() + 1\r\n        : event.start.month;\r\n    let eventStartYear =\r\n      validIntegers(event.start.year) === false\r\n        ? day.getFullYear()\r\n        : event.start.year;\r\n    let eventStartWeekDay =\r\n      validIntegers(event.start.weekDay) === false ? null : event.start.weekDay;\r\n\r\n    let eventEndDay =\r\n      validIntegers(event.end.day) === false ? eventStartDay : event.end.day;\r\n    let eventEndMonth =\r\n      validIntegers(event.end.month) === false\r\n        ? eventStartMonth\r\n        : event.end.month;\r\n    let eventEndYear =\r\n      validIntegers(event.end.year) === false ? eventStartYear : event.end.year;\r\n    let eventEndWeekDay =\r\n      validIntegers(event.end.weekDay) === false\r\n        ? eventStartWeekDay\r\n        : event.end.weekDay;\r\n\r\n    let eventStart = new Date(\r\n      eventStartYear,\r\n      eventStartMonth - 1,\r\n      eventStartDay\r\n    );\r\n    let eventEnd = new Date(eventEndYear, eventEndMonth - 1, eventEndDay);\r\n\r\n    //if its weekly event\r\n    if (eventStartWeekDay !== null) {\r\n      if (\r\n        eventStartWeekDay !== null &&\r\n        day.getDay() === eventStartWeekDay &&\r\n        eventEndWeekDay === null\r\n      ) {\r\n        return true;\r\n      } else if (\r\n        eventStartWeekDay !== null &&\r\n        eventEndWeekDay !== null &&\r\n        day.getDay() >= eventStartWeekDay &&\r\n        day.getDay() <= eventEndWeekDay\r\n      ) {\r\n        return true;\r\n      }\r\n    } else {\r\n      //for single day events\r\n      if (\r\n        this.matchSameDate(day, eventStart) &&\r\n        this.matchSameDate(day, eventEnd)\r\n      ) {\r\n        return true;\r\n      }\r\n\r\n      //for multi day events\r\n      else if (\r\n        day.getTime() >= eventStart.getTime() &&\r\n        day.getTime() <= eventEnd.getTime()\r\n      ) {\r\n        return true;\r\n      } else {\r\n        return false;\r\n      }\r\n    }\r\n  }\r\n\r\n  // makes sure event is not already in events\r\n  validateEventDoesntExistsAlready(event) {\r\n    let eventsAvailable = this.events ?? [];\r\n\r\n    return (\r\n      eventsAvailable.filter(\r\n        (ev) =>\r\n          ev.title === event.title &&\r\n          ev.start.getTime() === event.start.getTime() &&\r\n          ev.end.getTime() === event.end.getTime()\r\n      ).length === 0\r\n    );\r\n  }\r\n\r\n  //make sure no duplicate events are\r\n  validateNoDuplicateEvents(events) {\r\n    let foundDuplicate = false;\r\n    events.forEach((event) => {\r\n      if (foundDuplicate === true) {\r\n        return;\r\n      }\r\n\r\n      if (\r\n        events.filter((ev) => JSON.stringify(ev) === JSON.stringify(event))\r\n          .length > 1\r\n      ) {\r\n        foundDuplicate = true;\r\n      }\r\n    });\r\n\r\n    return !foundDuplicate;\r\n  }\r\n\r\n  getDaysInMonth(month, year) {\r\n    var date = new Date(year, month, 1);\r\n    var days = [];\r\n    while (date.getMonth() === month) {\r\n      days.push(new Date(date));\r\n      date.setDate(date.getDate() + 1);\r\n    }\r\n    return days;\r\n  }\r\n\r\n  matchSameDate(date1, date2) {\r\n    return (\r\n      date1 &&\r\n      date2 &&\r\n      date1.getFullYear() === date2.getFullYear() &&\r\n      date1.getDate() === date2.getDate() &&\r\n      date1.getMonth() === date2.getMonth()\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://App/./node_modules/evc/src/EventCalendar.js?");

/***/ }),

/***/ "./node_modules/evc/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/evc/src/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CalendarEvent\": () => (/* reexport safe */ _CalendarEvent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"EventCalendar\": () => (/* reexport safe */ _EventCalendar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _EventCalendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventCalendar.js */ \"./node_modules/evc/src/EventCalendar.js\");\n/* harmony import */ var _CalendarEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarEvent.js */ \"./node_modules/evc/src/CalendarEvent.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://App/./node_modules/evc/src/index.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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