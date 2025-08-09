/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/timeago.js/esm/format.js":
/*!***********************************************!*\
  !*** ./node_modules/timeago.js/esm/format.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   format: () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/date */ "./node_modules/timeago.js/esm/utils/date.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ "./node_modules/timeago.js/esm/register.js");


/**
 * format a TDate into string
 * @param date
 * @param locale
 * @param opts
 */
var format = function (date, locale, opts) {
    // diff seconds
    var sec = (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.diffSec)(date, opts && opts.relativeDate);
    // format it with locale
    return (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.formatDiff)(sec, (0,_register__WEBPACK_IMPORTED_MODULE_1__.getLocale)(locale));
};
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/timeago.js/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancel: () => (/* reexport safe */ _realtime__WEBPACK_IMPORTED_MODULE_4__.cancel),
/* harmony export */   format: () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.format),
/* harmony export */   register: () => (/* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_2__.register),
/* harmony export */   render: () => (/* reexport safe */ _realtime__WEBPACK_IMPORTED_MODULE_4__.render)
/* harmony export */ });
/* harmony import */ var _lang_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/en_US */ "./node_modules/timeago.js/esm/lang/en_US.js");
/* harmony import */ var _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/zh_CN */ "./node_modules/timeago.js/esm/lang/zh_CN.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./node_modules/timeago.js/esm/register.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format */ "./node_modules/timeago.js/esm/format.js");
/* harmony import */ var _realtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime */ "./node_modules/timeago.js/esm/realtime.js");
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */



(0,_register__WEBPACK_IMPORTED_MODULE_2__.register)('en_US', _lang_en_US__WEBPACK_IMPORTED_MODULE_0__["default"]);
(0,_register__WEBPACK_IMPORTED_MODULE_2__.register)('zh_CN', _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__["default"]);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/en_US.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/en_US.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {
    if (idx === 0)
        return ['just now', 'right now'];
    var unit = EN_US[Math.floor(idx / 2)];
    if (diff > 1)
        unit += 's';
    return [diff + " " + unit + " ago", "in " + diff + " " + unit];
}
//# sourceMappingURL=en_US.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/zh_CN.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/zh_CN.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {
    if (idx === 0)
        return ['刚刚', '片刻后'];
    var unit = ZH_CN[~~(idx / 2)];
    return [diff + " " + unit + "\u524D", diff + " " + unit + "\u540E"];
}
//# sourceMappingURL=zh_CN.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/realtime.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/realtime.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancel: () => (/* binding */ cancel),
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom */ "./node_modules/timeago.js/esm/utils/dom.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/date */ "./node_modules/timeago.js/esm/utils/date.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./node_modules/timeago.js/esm/register.js");



// all realtime timer
var TIMER_POOL = {};
/**
 * clear a timer from pool
 * @param tid
 */
var clear = function (tid) {
    clearTimeout(tid);
    delete TIMER_POOL[tid];
};
// run with timer(setTimeout)
function run(node, date, localeFunc, opts) {
    // clear the node's exist timer
    clear((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node));
    var relativeDate = opts.relativeDate, minInterval = opts.minInterval;
    // get diff seconds
    var diff = (0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.diffSec)(date, relativeDate);
    // render
    node.innerText = (0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.formatDiff)(diff, localeFunc);
    var tid = setTimeout(function () {
        run(node, date, localeFunc, opts);
    }, Math.min(Math.max((0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.nextInterval)(diff), minInterval || 1) * 1000, 0x7fffffff));
    // there is no need to save node in object. Just save the key
    TIMER_POOL[tid] = 0;
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.setTimerId)(node, tid);
}
/**
 * cancel a timer or all timers
 * @param node - node hosting the time string
 */
function cancel(node) {
    // cancel one
    if (node)
        clear((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node));
    // cancel all
    // @ts-ignore
    else
        Object.keys(TIMER_POOL).forEach(clear);
}
/**
 * render a dom realtime
 * @param nodes
 * @param locale
 * @param opts
 */
function render(nodes, locale, opts) {
    // by .length
    // @ts-ignore
    var nodeList = nodes.length ? nodes : [nodes];
    nodeList.forEach(function (node) {
        run(node, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDateAttribute)(node), (0,_register__WEBPACK_IMPORTED_MODULE_2__.getLocale)(locale), opts || {});
    });
    return nodeList;
}
//# sourceMappingURL=realtime.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/register.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/register.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocale: () => (/* binding */ getLocale),
/* harmony export */   register: () => (/* binding */ register)
/* harmony export */ });
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
/**
 * All supported locales
 */
var Locales = {};
/**
 * register a locale
 * @param locale
 * @param func
 */
var register = function (locale, func) {
    Locales[locale] = func;
};
/**
 * get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
var getLocale = function (locale) {
    return Locales[locale] || Locales['en_US'];
};
//# sourceMappingURL=register.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/date.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/date.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diffSec: () => (/* binding */ diffSec),
/* harmony export */   formatDiff: () => (/* binding */ formatDiff),
/* harmony export */   nextInterval: () => (/* binding */ nextInterval),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
var SEC_ARRAY = [
    60,
    60,
    24,
    7,
    365 / 7 / 12,
    12,
];
/**
 * format Date / string / timestamp to timestamp
 * @param input
 * @returns {*}
 */
function toDate(input) {
    if (input instanceof Date)
        return input;
    // @ts-ignore
    if (!isNaN(input) || /^\d+$/.test(input))
        return new Date(parseInt(input));
    input = (input || '')
        // @ts-ignore
        .trim()
        .replace(/\.\d+/, '') // remove milliseconds
        .replace(/-/, '/')
        .replace(/-/, '/')
        .replace(/(\d)T(\d)/, '$1 $2')
        .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
        .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400
    return new Date(input);
}
/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunc
 * @returns
 */
function formatDiff(diff, localeFunc) {
    /**
     * if locale is not exist, use defaultLocale.
     * if defaultLocale is not exist, use build-in `en`.
     * be sure of no error when locale is not exist.
     *
     * If `time in`, then 1
     * If `time ago`, then 0
     */
    var agoIn = diff < 0 ? 1 : 0;
    /**
     * Get absolute value of number (|diff| is non-negative) value of x
     * |diff| = diff if diff is positive
     * |diff| = -diff if diff is negative
     * |0| = 0
     */
    diff = Math.abs(diff);
    /**
     * Time in seconds
     */
    var totalSec = diff;
    /**
     * Unit of time
     */
    var idx = 0;
    for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {
        diff /= SEC_ARRAY[idx];
    }
    /**
     * Math.floor() is alternative of ~~
     *
     * The differences and bugs:
     * Math.floor(3.7) -> 4 but ~~3.7 -> 3
     * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552
     *
     * More information about the performance of algebraic:
     * https://www.youtube.com/watch?v=65-RbBwZQdU
     */
    diff = Math.floor(diff);
    idx *= 2;
    if (diff > (idx === 0 ? 9 : 1))
        idx += 1;
    return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString());
}
/**
 * calculate the diff second between date to be formatted an now date.
 * @param date
 * @param relativeDate
 * @returns {number}
 */
function diffSec(date, relativeDate) {
    var relDate = relativeDate ? toDate(relativeDate) : new Date();
    return (+relDate - +toDate(date)) / 1000;
}
/**
 * nextInterval: calculate the next interval time.
 * - diff: the diff sec between now and date to be formatted.
 *
 * What's the meaning?
 * diff = 61 then return 59
 * diff = 3601 (an hour + 1 second), then return 3599
 * make the interval with high performance.
 **/
function nextInterval(diff) {
    var rst = 1, i = 0, d = Math.abs(diff);
    for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
        diff /= SEC_ARRAY[i];
        rst *= SEC_ARRAY[i];
    }
    d = d % rst;
    d = d ? rst - d : rst;
    return Math.ceil(d);
}
//# sourceMappingURL=date.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/dom.js":
/*!**************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/dom.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDateAttribute: () => (/* binding */ getDateAttribute),
/* harmony export */   getTimerId: () => (/* binding */ getTimerId),
/* harmony export */   setTimerId: () => (/* binding */ setTimerId)
/* harmony export */ });
var ATTR_TIMEAGO_TID = 'timeago-id';
/**
 * get the datetime attribute, `datetime` are supported.
 * @param node
 * @returns {*}
 */
function getDateAttribute(node) {
    return node.getAttribute('datetime');
}
/**
 * set the node attribute, native DOM
 * @param node
 * @param timerId
 * @returns {*}
 */
function setTimerId(node, timerId) {
    // @ts-ignore
    node.setAttribute(ATTR_TIMEAGO_TID, timerId);
}
/**
 * get the timer id
 * @param node
 */
function getTimerId(node) {
    return parseInt(node.getAttribute(ATTR_TIMEAGO_TID));
}
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./source/_assets/css/main.css":
/*!*************************************!*\
  !*** ./source/_assets/css/main.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./source/_assets/js/main.js":
/*!***********************************!*\
  !*** ./source/_assets/js/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var timeago = __webpack_require__(/*! timeago.js */ "./node_modules/timeago.js/esm/index.js");
var nodes = document.querySelectorAll('.timeago');
timeago.render(nodes);

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./source/_assets/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./source/_assets/css/main.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;