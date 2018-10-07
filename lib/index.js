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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jQryObject = __webpack_require__(1);

var _jQryObject2 = _interopRequireDefault(_jQryObject);

var _Obj = __webpack_require__(3);

var _Obj2 = _interopRequireDefault(_Obj);

var _Event = __webpack_require__(7);

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function jQry(selector) {
    return new _jQryObject2.default(selector);
}

// Object

jQry.extend = _Obj2.default.assign;
jQry.assign = _Obj2.default.assign;
jQry.values = _Obj2.default.values;
jQry.keys = Object.keys;
jQry.indexOf = _Obj2.default.indexOf;

// Event

jQry.CustomEvent = function (type, params) {
    return new _Event2.default.CustomEvent(type, params);
};

// Global

jQry.global = function () {
    var alias = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$';

    if (typeof window[alias] === 'undefined' && window[alias] !== jQry) {
        window[alias] = jQry;
    }
};

exports.default = jQry;

/***/ }),
/* 1 */
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

var _Selector = __webpack_require__(2);

var _Selector2 = _interopRequireDefault(_Selector);

var _Style = __webpack_require__(4);

var _Style2 = _interopRequireDefault(_Style);

var _Prop = __webpack_require__(6);

var _Prop2 = _interopRequireDefault(_Prop);

var _DOM = __webpack_require__(5);

var _DOM2 = _interopRequireDefault(_DOM);

var _Event = __webpack_require__(7);

var _Event2 = _interopRequireDefault(_Event);

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

var jQryObject = function () {
    function jQryObject(selector) {
        var _this = this;

        _classCallCheck(this, jQryObject);

        var elements = _Selector2.default.select(selector);
        this.elements = [];
        var i = 0;
        _Obj2.default.values(elements).forEach(function (element) {
            if (_DOM2.default.isElement(element) || _DOM2.default.isWindow(element) || _DOM2.default.isDocument(element)) {
                _this.elements.push(element);
                _this[i++] = element;
            }
            if (!_DOM2.default.isConnected(element)) {
                document.body.appendChild(element);
                element.parentNode.removeChild(element);
            }
        });
        this.length = this.elements.length;
    }

    _createClass(jQryObject, [{
        key: 'forEach',
        value: function forEach(callback) {
            this.elements.forEach(callback);
            return this;
        }
    }, {
        key: 'each',
        value: function each(callback) {
            this.forEach(function (element, index) {
                callback(jQryObject(element), index);
            });
            return this;
        }

        /** Selector */

    }, {
        key: 'find',
        value: function find(selector) {
            return _Selector2.default.find(this, selector);
        }

        /** Style */

    }, {
        key: 'css',
        value: function css(styles, value) {
            return _Style2.default.css(this, styles, value);
        }

        /** Prop */

    }, {
        key: 'prop',
        value: function prop(propName, value) {
            return _Prop2.default.prop(this, propName, value);
        }

        /** DOM */

    }, {
        key: 'appendTo',
        value: function appendTo(selector) {
            return _DOM2.default.appendTo(this, selector);
        }
    }, {
        key: 'detach',
        value: function detach() {
            return _DOM2.default.detach(this);
        }
    }, {
        key: 'parent',
        value: function parent() {
            return _DOM2.default.parent(this);
        }

        /** Event */

    }, {
        key: 'on',
        value: function on(event, fn) {
            return _Event2.default.on(this, event, fn);
        }
    }, {
        key: 'off',
        value: function off(event, fn) {
            return _Event2.default.off(this, event, fn);
        }
    }, {
        key: 'trigger',
        value: function trigger(event, data) {
            return _Event2.default.trigger(this, event, data);
        }
    }, {
        key: 'click',
        value: function click() {
            return _Event2.default.click(this);
        }
    }]);

    return jQryObject;
}();

exports.default = jQryObject;

/***/ }),
/* 2 */
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

var _jQryObject = __webpack_require__(1);

var _jQryObject2 = _interopRequireDefault(_jQryObject);

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

var Selector = function () {
    function Selector() {
        _classCallCheck(this, Selector);
    }

    _createClass(Selector, null, [{
        key: 'select',
        value: function select(selector) {
            var elements = [];
            if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') {
                if (selector instanceof _jQryObject2.default) {
                    selector.forEach(function (element) {
                        elements.push(element);
                    });
                } else {
                    elements = Array.isArray(selector) ? selector : [selector];
                }
            } else if (typeof selector === 'string') {
                selector = selector.trim();
                if (selector.indexOf('<') === 0) {
                    var template = document.createElement('template');
                    template.innerHTML = selector;
                    elements = [template.content ? template.content.firstElementChild || template.content.firstChild : template.firstElementChild || template.firstChild];
                } else {
                    _Obj2.default.values(document.querySelectorAll(selector)).forEach(function (queryElement) {
                        elements.push(queryElement);
                    });
                }
            }
            return elements;
        }
    }, {
        key: 'find',
        value: function find(jObj, selector) {
            var elements = [];
            jObj.forEach(function (element) {
                _Obj2.default.values(element.querySelectorAll(selector)).forEach(function (queryElement) {
                    elements.push(queryElement);
                });
            });
            return new _jQryObject2.default(elements);
        }
    }]);

    return Selector;
}();

exports.default = Selector;

/***/ }),
/* 3 */
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
/* 4 */
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

var _DOM = __webpack_require__(5);

var _DOM2 = _interopRequireDefault(_DOM);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Style = function () {
    function Style() {
        _classCallCheck(this, Style);
    }

    _createClass(Style, null, [{
        key: 'css',
        value: function css(jObj, styles, value) {
            var css = {};
            if (typeof styles === 'string') {
                if (typeof value !== 'undefined') {
                    css[styles] = value;
                } else {
                    var element = jObj.length > 0 ? jObj[0] : false;
                    var styleValue = void 0;
                    if (element && typeof element.style !== 'undefined') {
                        var style = element.style;

                        var isConnected = _DOM2.default.isConnected(element);
                        if (!isConnected) {
                            document.body.appendChild(element);
                        }
                        var computedStyle = window.getComputedStyle(element);
                        if (element && (style || computedStyle)) {
                            styleValue = style[styles] || computedStyle[styles];
                        }
                        if (!isConnected) {
                            element.parentNode.removeChild(element);
                        }
                    }
                    return styleValue;
                }
            } else if ((typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object') {
                Object.keys(styles).forEach(function (key) {
                    css[key] = styles[key];
                });
            }

            jObj.forEach(function (element) {
                Object.keys(css).forEach(function (key) {
                    // Don't set styles on text and comment nodes
                    if (element.nodeType === 3 || element.nodeType === 8 || !element.style) {
                        return;
                    }
                    try {
                        element.style[key] = css[key];
                    } catch (e) {
                        // eslint-disable-next-line no-console
                        console.log(e);
                    }
                });
            });

            return jObj;
        }
    }]);

    return Style;
}();

exports.default = Style;

/***/ }),
/* 5 */
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

var _jQryObject = __webpack_require__(1);

var _jQryObject2 = _interopRequireDefault(_jQryObject);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var DOM = function () {
    function DOM() {
        _classCallCheck(this, DOM);
    }

    _createClass(DOM, null, [{
        key: 'isWindow',
        value: function isWindow(element) {
            return element && element.constructor === window.constructor;
        }
    }, {
        key: 'isDocument',
        value: function isDocument(element) {
            return element && element.constructor === document.constructor;
        }
    }, {
        key: 'isElement',
        value: function isElement(element) {
            return element && element instanceof Element;
        }
    }, {
        key: 'appendTo',
        value: function appendTo(jObj, selector) {
            var parents = false;
            if (selector instanceof _jQryObject2.default) {
                parents = selector;
            } else {
                parents = new _jQryObject2.default(selector);
            }
            parents.forEach(function (parentElement) {
                jObj.elements.forEach(function (element) {
                    parentElement.appendChild(element);
                });
            });
            return jObj;
        }
    }, {
        key: 'isConnected',
        value: function isConnected(element) {
            if (element && typeof element.isConnected !== 'undefined') {
                return element.isConnected;
            }
            if (element && element instanceof Element && !document.body.contains(element)) {
                return false;
            }
            return true;
        }
    }, {
        key: 'detach',
        value: function detach(jObj) {
            jObj.forEach(function (element) {
                element.parentNode.removeChild(element);
            });
            return jObj;
        }
    }, {
        key: 'parent',
        value: function parent(jObj) {
            var elements = [];
            jObj.forEach(function (element) {
                elements.push(element.parentNode);
            });
            return new _jQryObject2.default(elements);
        }
    }]);

    return DOM;
}();

exports.default = DOM;

/***/ }),
/* 6 */
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

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Prop = function () {
    function Prop() {
        _classCallCheck(this, Prop);
    }

    _createClass(Prop, null, [{
        key: 'prop',
        value: function prop(jObj, propName, value) {
            var element = jObj[0];
            if (element) {
                if (typeof value !== 'undefined') {
                    element[propName] = value;
                } else {
                    return element[propName];
                }
            }
            return jObj;
        }
    }]);

    return Prop;
}();

exports.default = Prop;

/***/ }),
/* 7 */
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
/******/ ]);
});
//# sourceMappingURL=index.js.map