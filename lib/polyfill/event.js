(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("index", [], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Event = __webpack_require__(7);

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

if (typeof window.CustomEvent !== 'function') {
    window.CustomEvent = _Event2.default.CustomEvent;
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Obj = function () {
    function Obj() {
        _classCallCheck(this, Obj);
    }

    _createClass(Obj, null, [{
        key: 'assing',
        value: function assing() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var result = args.reduce(function (accumulator, currentValue) {
                if ((typeof currentValue === 'undefined' ? 'undefined' : _typeof(currentValue)) === 'object') {
                    Object.keys(currentValue).forEach(function (k) {
                        accumulator[k] = currentValue[k];
                    });
                }
                return accumulator;
            }, {});
            return result;
        }
    }, {
        key: 'extend',
        value: function extend() {
            var _Obj$assign;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return (_Obj$assign = Obj.assign).apply.apply(_Obj$assign, [Obj].concat(args));
        }
    }, {
        key: 'values',
        value: function values(obj) {
            return Object.keys(obj).map(function (item) {
                return obj[item];
            });
        }
    }, {
        key: 'indexOf',
        value: function indexOf(mix, searchvalue) {
            var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            var overStart = start === null;
            var found = -1;
            Object.keys(mix).forEach(function (i) {
                if (overStart && mix[i] === searchvalue) {
                    found = mix[i];
                    return false;
                }
                if (start === i) {
                    overStart = true;
                }
                return true;
            });
            return found;
        }
    }]);

    return Obj;
}();

exports.default = Obj;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _Obj = __webpack_require__(3);

var _Obj2 = _interopRequireDefault(_Obj);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Event = function () {
    function Event() {
        _classCallCheck(this, Event);
    }

    _createClass(Event, null, [{
        key: 'on',
        value: function on(jObj, event, fn) {
            _Obj2.default.values(jObj.elements).forEach(function (element) {
                element.addEventListener(event, fn, false);
            });
            return jObj;
        }
    }, {
        key: 'off',
        value: function off(jObj, event, fn) {
            if (typeof event === 'undefined' && typeof fn === 'undefined') {
                _Obj2.default.values(jObj.elements).forEach(function (element) {
                    var newElement = element.cloneNode(false);
                    while (element.hasChildNodes()) {
                        newElement.appendChild(element.firstChild);
                    }
                    element.parentNode.replaceChild(newElement, element);
                });
            } else {
                _Obj2.default.values(jObj.elements).forEach(function (element) {
                    element.removeEventListener(event, fn, false);
                });
            }
            return jObj;
        }
    }, {
        key: 'CustomEvent',
        value: function CustomEvent(type) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            params = _Obj2.default.assing({ bubbles: false, cancelable: false, detail: undefined }, params);

            if (typeof window.CustomEvent === 'function') {
                return new window.CustomEvent(type, params);
            }

            var CustomEvent = function CustomEvent(type_) {
                var params_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                var event = document.createEvent('CustomEvent');
                event.initCustomEvent(type, params_.bubbles, params_.cancelable, params_.detail);
                return event;
            };
            CustomEvent.prototype = window.Event.prototype;
            return CustomEvent(type, params);
        }
    }, {
        key: 'trigger',
        value: function trigger(jObj, event, data) {
            var eventObject = new Event.CustomEvent(event, {
                bubbles: false,
                cancelable: true,
                detail: data || {}
            });
            _Obj2.default.values(jObj.elements).forEach(function (element) {
                element.dispatchEvent(eventObject);
            });
            return jObj;
        }
    }, {
        key: 'click',
        value: function click(jObj) {
            _Obj2.default.values(jObj.elements).forEach(function (element) {
                element.click();
            });
            return jObj;
        }
    }]);

    return Event;
}();

exports.default = Event;

/***/ })

/******/ });
});
//# sourceMappingURL=event.js.map