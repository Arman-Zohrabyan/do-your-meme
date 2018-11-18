webpackJsonp([0],Array(45).concat([
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Vk_VkWidget__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Vk_VkSettings__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_vk_actions__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_Language__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_html2canvas__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_html2canvas__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var VkContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(VkContainer, _Component);

  function VkContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VkContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VkContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "downloadImage", function () {
      __WEBPACK_IMPORTED_MODULE_7_html2canvas___default()(document.querySelector('#vk-chat-widget')).then(function (canvas) {
        var link = document.createElement('a');
        link.setAttribute('download', 'screenshot.png');
        link.setAttribute('href', canvas.toDataURL());
        link.click();
      });
    });

    return _this;
  }

  _createClass(VkContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          vk = _this$props.vk,
          onChange = _this$props.onChange,
          onChangeImage = _this$props.onChangeImage;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* Row */], {
        className: ""
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Col */], {
        md: "12",
        lg: "8",
        xl: "7",
        className: "widget-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "vk-container__preview"
      }, __WEBPACK_IMPORTED_MODULE_6__classes_Language__["a" /* default */].take('content.dialog.title')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-chat",
        style: {
          backgroundImage: 'url("./assets/images/descont.png")'
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Vk_VkWidget__["a" /* default */], {
        components: vk.components,
        header: vk.header,
        content: vk.content,
        users: {
          companion: vk.companion,
          current: vk.current
        },
        widgetContent: vk.widgetContent
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "vk_download-btn",
        onClick: this.downloadImage
      }, __WEBPACK_IMPORTED_MODULE_6__classes_Language__["a" /* default */].take('download').toUpperCase())))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Col */], {
        md: "12",
        lg: "4",
        xl: "5",
        className: "widget-right"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Vk_VkSettings__["a" /* default */], null)));
    }
  }]);

  return VkContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    vk: state.vk
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChange: function onChange(value, section, key) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__store_vk_actions__["b" /* change */])(value, section, key));
    },
    onChangeImage: function onChangeImage(type, key, img) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__store_vk_actions__["c" /* changeImage */])(type, key, img));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(VkContainer));

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserImage__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserImageSelect__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TextInput__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CheckBox__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MessageBox__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SettingButton__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__UserImageSelect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__UserImage__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__TextInput__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__SettingButton__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__MessageBox__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__CheckBox__["a"]; });








/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://dev.w3.org/csswg/css-color/

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEX3 = /^#([a-f0-9]{3})$/i;
var hex3 = function hex3(value) {
    var match = value.match(HEX3);
    if (match) {
        return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];
    }
    return false;
};

var HEX6 = /^#([a-f0-9]{6})$/i;
var hex6 = function hex6(value) {
    var match = value.match(HEX6);
    if (match) {
        return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];
    }
    return false;
};

var RGB = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgb = function rgb(value) {
    var match = value.match(RGB);
    if (match) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), null];
    }
    return false;
};

var RGBA = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
var rgba = function rgba(value) {
    var match = value.match(RGBA);
    if (match && match.length > 4) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];
    }
    return false;
};

var fromArray = function fromArray(array) {
    return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];
};

var namedColor = function namedColor(name) {
    var color = NAMED_COLORS[name.toLowerCase()];
    return color ? color : false;
};

var Color = function () {
    function Color(value) {
        _classCallCheck(this, Color);

        var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],
            _ref2 = _slicedToArray(_ref, 4),
            r = _ref2[0],
            g = _ref2[1],
            b = _ref2[2],
            a = _ref2[3];

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    _createClass(Color, [{
        key: 'isTransparent',
        value: function isTransparent() {
            return this.a === 0;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.a !== null && this.a !== 1 ? 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')' : 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
        }
    }]);

    return Color;
}();

exports.default = Color;


var NAMED_COLORS = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, null],
    antiquewhite: [250, 235, 215, null],
    aqua: [0, 255, 255, null],
    aquamarine: [127, 255, 212, null],
    azure: [240, 255, 255, null],
    beige: [245, 245, 220, null],
    bisque: [255, 228, 196, null],
    black: [0, 0, 0, null],
    blanchedalmond: [255, 235, 205, null],
    blue: [0, 0, 255, null],
    blueviolet: [138, 43, 226, null],
    brown: [165, 42, 42, null],
    burlywood: [222, 184, 135, null],
    cadetblue: [95, 158, 160, null],
    chartreuse: [127, 255, 0, null],
    chocolate: [210, 105, 30, null],
    coral: [255, 127, 80, null],
    cornflowerblue: [100, 149, 237, null],
    cornsilk: [255, 248, 220, null],
    crimson: [220, 20, 60, null],
    cyan: [0, 255, 255, null],
    darkblue: [0, 0, 139, null],
    darkcyan: [0, 139, 139, null],
    darkgoldenrod: [184, 134, 11, null],
    darkgray: [169, 169, 169, null],
    darkgreen: [0, 100, 0, null],
    darkgrey: [169, 169, 169, null],
    darkkhaki: [189, 183, 107, null],
    darkmagenta: [139, 0, 139, null],
    darkolivegreen: [85, 107, 47, null],
    darkorange: [255, 140, 0, null],
    darkorchid: [153, 50, 204, null],
    darkred: [139, 0, 0, null],
    darksalmon: [233, 150, 122, null],
    darkseagreen: [143, 188, 143, null],
    darkslateblue: [72, 61, 139, null],
    darkslategray: [47, 79, 79, null],
    darkslategrey: [47, 79, 79, null],
    darkturquoise: [0, 206, 209, null],
    darkviolet: [148, 0, 211, null],
    deeppink: [255, 20, 147, null],
    deepskyblue: [0, 191, 255, null],
    dimgray: [105, 105, 105, null],
    dimgrey: [105, 105, 105, null],
    dodgerblue: [30, 144, 255, null],
    firebrick: [178, 34, 34, null],
    floralwhite: [255, 250, 240, null],
    forestgreen: [34, 139, 34, null],
    fuchsia: [255, 0, 255, null],
    gainsboro: [220, 220, 220, null],
    ghostwhite: [248, 248, 255, null],
    gold: [255, 215, 0, null],
    goldenrod: [218, 165, 32, null],
    gray: [128, 128, 128, null],
    green: [0, 128, 0, null],
    greenyellow: [173, 255, 47, null],
    grey: [128, 128, 128, null],
    honeydew: [240, 255, 240, null],
    hotpink: [255, 105, 180, null],
    indianred: [205, 92, 92, null],
    indigo: [75, 0, 130, null],
    ivory: [255, 255, 240, null],
    khaki: [240, 230, 140, null],
    lavender: [230, 230, 250, null],
    lavenderblush: [255, 240, 245, null],
    lawngreen: [124, 252, 0, null],
    lemonchiffon: [255, 250, 205, null],
    lightblue: [173, 216, 230, null],
    lightcoral: [240, 128, 128, null],
    lightcyan: [224, 255, 255, null],
    lightgoldenrodyellow: [250, 250, 210, null],
    lightgray: [211, 211, 211, null],
    lightgreen: [144, 238, 144, null],
    lightgrey: [211, 211, 211, null],
    lightpink: [255, 182, 193, null],
    lightsalmon: [255, 160, 122, null],
    lightseagreen: [32, 178, 170, null],
    lightskyblue: [135, 206, 250, null],
    lightslategray: [119, 136, 153, null],
    lightslategrey: [119, 136, 153, null],
    lightsteelblue: [176, 196, 222, null],
    lightyellow: [255, 255, 224, null],
    lime: [0, 255, 0, null],
    limegreen: [50, 205, 50, null],
    linen: [250, 240, 230, null],
    magenta: [255, 0, 255, null],
    maroon: [128, 0, 0, null],
    mediumaquamarine: [102, 205, 170, null],
    mediumblue: [0, 0, 205, null],
    mediumorchid: [186, 85, 211, null],
    mediumpurple: [147, 112, 219, null],
    mediumseagreen: [60, 179, 113, null],
    mediumslateblue: [123, 104, 238, null],
    mediumspringgreen: [0, 250, 154, null],
    mediumturquoise: [72, 209, 204, null],
    mediumvioletred: [199, 21, 133, null],
    midnightblue: [25, 25, 112, null],
    mintcream: [245, 255, 250, null],
    mistyrose: [255, 228, 225, null],
    moccasin: [255, 228, 181, null],
    navajowhite: [255, 222, 173, null],
    navy: [0, 0, 128, null],
    oldlace: [253, 245, 230, null],
    olive: [128, 128, 0, null],
    olivedrab: [107, 142, 35, null],
    orange: [255, 165, 0, null],
    orangered: [255, 69, 0, null],
    orchid: [218, 112, 214, null],
    palegoldenrod: [238, 232, 170, null],
    palegreen: [152, 251, 152, null],
    paleturquoise: [175, 238, 238, null],
    palevioletred: [219, 112, 147, null],
    papayawhip: [255, 239, 213, null],
    peachpuff: [255, 218, 185, null],
    peru: [205, 133, 63, null],
    pink: [255, 192, 203, null],
    plum: [221, 160, 221, null],
    powderblue: [176, 224, 230, null],
    purple: [128, 0, 128, null],
    rebeccapurple: [102, 51, 153, null],
    red: [255, 0, 0, null],
    rosybrown: [188, 143, 143, null],
    royalblue: [65, 105, 225, null],
    saddlebrown: [139, 69, 19, null],
    salmon: [250, 128, 114, null],
    sandybrown: [244, 164, 96, null],
    seagreen: [46, 139, 87, null],
    seashell: [255, 245, 238, null],
    sienna: [160, 82, 45, null],
    silver: [192, 192, 192, null],
    skyblue: [135, 206, 235, null],
    slateblue: [106, 90, 205, null],
    slategray: [112, 128, 144, null],
    slategrey: [112, 128, 144, null],
    snow: [255, 250, 250, null],
    springgreen: [0, 255, 127, null],
    steelblue: [70, 130, 180, null],
    tan: [210, 180, 140, null],
    teal: [0, 128, 128, null],
    thistle: [216, 191, 216, null],
    tomato: [255, 99, 71, null],
    turquoise: [64, 224, 208, null],
    violet: [238, 130, 238, null],
    wheat: [245, 222, 179, null],
    white: [255, 255, 255, null],
    whitesmoke: [245, 245, 245, null],
    yellow: [255, 255, 0, null],
    yellowgreen: [154, 205, 50, null]
};

var TRANSPARENT = exports.TRANSPARENT = new Color([0, 0, 0, 0]);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateLengthFromValueWithUnit = exports.LENGTH_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(126);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LENGTH_WITH_UNIT = /([\d.]+)(px|r?em|%)/i;

var LENGTH_TYPE = exports.LENGTH_TYPE = {
    PX: 0,
    PERCENTAGE: 1
};

var Length = function () {
    function Length(value) {
        _classCallCheck(this, Length);

        this.type = value.substr(value.length - 1) === '%' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;
        var parsedValue = parseFloat(value);
        if (process.env.NODE_ENV !== 'production' && isNaN(parsedValue)) {
            console.error('Invalid value given for Length: "' + value + '"');
        }
        this.value = isNaN(parsedValue) ? 0 : parsedValue;
    }

    _createClass(Length, [{
        key: 'isPercentage',
        value: function isPercentage() {
            return this.type === LENGTH_TYPE.PERCENTAGE;
        }
    }, {
        key: 'getAbsoluteValue',
        value: function getAbsoluteValue(parentLength) {
            return this.isPercentage() ? parentLength * (this.value / 100) : this.value;
        }
    }], [{
        key: 'create',
        value: function create(v) {
            return new Length(v);
        }
    }]);

    return Length;
}();

exports.default = Length;


var getRootFontSize = function getRootFontSize(container) {
    var parent = container.parent;
    return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);
};

var calculateLengthFromValueWithUnit = exports.calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {
    switch (unit) {
        case 'px':
        case '%':
            return new Length(value + unit);
        case 'em':
        case 'rem':
            var length = new Length(value);
            length.value *= unit === 'em' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);
            return length;
        default:
            // TODO: handle correctly if unknown unit is used
            return new Length('0');
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBoundCurves = exports.calculatePaddingBoxPath = exports.calculateBorderBoxPath = exports.parsePathForBorder = exports.parseDocumentSize = exports.calculateContentBox = exports.calculatePaddingBox = exports.parseBounds = exports.Bounds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(130);

var _Vector2 = _interopRequireDefault(_Vector);

var _BezierCurve = __webpack_require__(175);

var _BezierCurve2 = _interopRequireDefault(_BezierCurve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOP = 0;
var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;

var H = 0;
var V = 1;

var Bounds = exports.Bounds = function () {
    function Bounds(x, y, w, h) {
        _classCallCheck(this, Bounds);

        this.left = x;
        this.top = y;
        this.width = w;
        this.height = h;
    }

    _createClass(Bounds, null, [{
        key: 'fromClientRect',
        value: function fromClientRect(clientRect, scrollX, scrollY) {
            return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);
        }
    }]);

    return Bounds;
}();

var parseBounds = exports.parseBounds = function parseBounds(node, scrollX, scrollY) {
    return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);
};

var calculatePaddingBox = exports.calculatePaddingBox = function calculatePaddingBox(bounds, borders) {
    return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));
};

var calculateContentBox = exports.calculateContentBox = function calculateContentBox(bounds, padding, borders) {
    // TODO support percentage paddings
    var paddingTop = padding[TOP].value;
    var paddingRight = padding[RIGHT].value;
    var paddingBottom = padding[BOTTOM].value;
    var paddingLeft = padding[LEFT].value;

    return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));
};

var parseDocumentSize = exports.parseDocumentSize = function parseDocumentSize(document) {
    var body = document.body;
    var documentElement = document.documentElement;

    if (!body || !documentElement) {
        throw new Error(process.env.NODE_ENV !== 'production' ? 'Unable to get document size' : '');
    }
    var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));

    var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));

    return new Bounds(0, 0, width, height);
};

var parsePathForBorder = exports.parsePathForBorder = function parsePathForBorder(curves, borderSide) {
    switch (borderSide) {
        case TOP:
            return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);
        case RIGHT:
            return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);
        case BOTTOM:
            return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);
        case LEFT:
        default:
            return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);
    }
};

var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
    var path = [];
    if (outer1 instanceof _BezierCurve2.default) {
        path.push(outer1.subdivide(0.5, false));
    } else {
        path.push(outer1);
    }

    if (outer2 instanceof _BezierCurve2.default) {
        path.push(outer2.subdivide(0.5, true));
    } else {
        path.push(outer2);
    }

    if (inner2 instanceof _BezierCurve2.default) {
        path.push(inner2.subdivide(0.5, true).reverse());
    } else {
        path.push(inner2);
    }

    if (inner1 instanceof _BezierCurve2.default) {
        path.push(inner1.subdivide(0.5, false).reverse());
    } else {
        path.push(inner1);
    }

    return path;
};

var calculateBorderBoxPath = exports.calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
    return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];
};

var calculatePaddingBoxPath = exports.calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
    return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];
};

var parseBoundCurves = exports.parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {
    var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);
    var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);
    var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);
    var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);
    var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);
    var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);
    var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);
    var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);

    var factors = [];
    factors.push((tlh + trh) / bounds.width);
    factors.push((blh + brh) / bounds.width);
    factors.push((tlv + blv) / bounds.height);
    factors.push((trv + brv) / bounds.height);
    var maxFactor = Math.max.apply(Math, factors);

    if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
    }

    var topWidth = bounds.width - trh;
    var rightHeight = bounds.height - brv;
    var bottomWidth = bounds.width - brh;
    var leftHeight = bounds.height - blv;

    return {
        topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _Vector2.default(bounds.left, bounds.top),
        topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),
        topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top),
        topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),
        bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top + bounds.height),
        bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),
        bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left, bounds.top + bounds.height),
        bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)
    };
};

var CORNER = {
    TOP_LEFT: 0,
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3
};

var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = r1 * kappa; // control point offset horizontal
    var oy = r2 * kappa; // control point offset vertical
    var xm = x + r1; // x-middle
    var ym = y + r2; // y-middle

    switch (position) {
        case CORNER.TOP_LEFT:
            return new _BezierCurve2.default(new _Vector2.default(x, ym), new _Vector2.default(x, ym - oy), new _Vector2.default(xm - ox, y), new _Vector2.default(xm, y));
        case CORNER.TOP_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(x, y), new _Vector2.default(x + ox, y), new _Vector2.default(xm, ym - oy), new _Vector2.default(xm, ym));
        case CORNER.BOTTOM_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(xm, y), new _Vector2.default(xm, y + oy), new _Vector2.default(x + ox, ym), new _Vector2.default(x, ym));
        case CORNER.BOTTOM_LEFT:
        default:
            return new _BezierCurve2.default(new _Vector2.default(xm, ym), new _Vector2.default(xm - ox, ym), new _Vector2.default(x, y + oy), new _Vector2.default(x, y));
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(123);

var _Color2 = _interopRequireDefault(_Color);

var _Util = __webpack_require__(127);

var _background = __webpack_require__(128);

var _border = __webpack_require__(136);

var _borderRadius = __webpack_require__(176);

var _display = __webpack_require__(177);

var _float = __webpack_require__(178);

var _font = __webpack_require__(179);

var _letterSpacing = __webpack_require__(180);

var _lineBreak = __webpack_require__(181);

var _listStyle = __webpack_require__(131);

var _margin = __webpack_require__(182);

var _overflow = __webpack_require__(183);

var _overflowWrap = __webpack_require__(144);

var _padding = __webpack_require__(143);

var _position = __webpack_require__(145);

var _textDecoration = __webpack_require__(135);

var _textShadow = __webpack_require__(184);

var _textTransform = __webpack_require__(146);

var _transform = __webpack_require__(185);

var _visibility = __webpack_require__(186);

var _wordBreak = __webpack_require__(187);

var _zIndex = __webpack_require__(188);

var _Bounds = __webpack_require__(125);

var _Input = __webpack_require__(147);

var _ListItem = __webpack_require__(138);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

var NodeContainer = function () {
    function NodeContainer(node, parent, resourceLoader, index) {
        var _this = this;

        _classCallCheck(this, NodeContainer);

        this.parent = parent;
        this.tagName = node.tagName;
        this.index = index;
        this.childNodes = [];
        this.listItems = [];
        if (typeof node.start === 'number') {
            this.listStart = node.start;
        }
        var defaultView = node.ownerDocument.defaultView;
        var scrollX = defaultView.pageXOffset;
        var scrollY = defaultView.pageYOffset;
        var style = defaultView.getComputedStyle(node, null);
        var display = (0, _display.parseDisplay)(style.display);

        var IS_INPUT = node.type === 'radio' || node.type === 'checkbox';

        var position = (0, _position.parsePosition)(style.position);

        this.style = {
            background: IS_INPUT ? _Input.INPUT_BACKGROUND : (0, _background.parseBackground)(style, resourceLoader),
            border: IS_INPUT ? _Input.INPUT_BORDERS : (0, _border.parseBorder)(style),
            borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? (0, _Input.getInputBorderRadius)(node) : (0, _borderRadius.parseBorderRadius)(style),
            color: IS_INPUT ? _Input.INPUT_COLOR : new _Color2.default(style.color),
            display: display,
            float: (0, _float.parseCSSFloat)(style.float),
            font: (0, _font.parseFont)(style),
            letterSpacing: (0, _letterSpacing.parseLetterSpacing)(style.letterSpacing),
            listStyle: display === _display.DISPLAY.LIST_ITEM ? (0, _listStyle.parseListStyle)(style) : null,
            lineBreak: (0, _lineBreak.parseLineBreak)(style.lineBreak),
            margin: (0, _margin.parseMargin)(style),
            opacity: parseFloat(style.opacity),
            overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? (0, _overflow.parseOverflow)(style.overflow) : _overflow.OVERFLOW.HIDDEN,
            overflowWrap: (0, _overflowWrap.parseOverflowWrap)(style.overflowWrap ? style.overflowWrap : style.wordWrap),
            padding: (0, _padding.parsePadding)(style),
            position: position,
            textDecoration: (0, _textDecoration.parseTextDecoration)(style),
            textShadow: (0, _textShadow.parseTextShadow)(style.textShadow),
            textTransform: (0, _textTransform.parseTextTransform)(style.textTransform),
            transform: (0, _transform.parseTransform)(style),
            visibility: (0, _visibility.parseVisibility)(style.visibility),
            wordBreak: (0, _wordBreak.parseWordBreak)(style.wordBreak),
            zIndex: (0, _zIndex.parseZIndex)(position !== _position.POSITION.STATIC ? style.zIndex : 'auto')
        };

        if (this.isTransformed()) {
            // getBoundingClientRect provides values post-transform, we want them without the transformation
            node.style.transform = 'matrix(1,0,0,1,0,0)';
        }

        if (display === _display.DISPLAY.LIST_ITEM) {
            var listOwner = (0, _ListItem.getListOwner)(this);
            if (listOwner) {
                var listIndex = listOwner.listItems.length;
                listOwner.listItems.push(this);
                this.listIndex = node.hasAttribute('value') && typeof node.value === 'number' ? node.value : listIndex === 0 ? typeof listOwner.listStart === 'number' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;
            }
        }

        // TODO move bound retrieval for all nodes to a later stage?
        if (node.tagName === 'IMG') {
            node.addEventListener('load', function () {
                _this.bounds = (0, _Bounds.parseBounds)(node, scrollX, scrollY);
                _this.curvedBounds = (0, _Bounds.parseBoundCurves)(_this.bounds, _this.style.border, _this.style.borderRadius);
            });
        }
        this.image = getImage(node, resourceLoader);
        this.bounds = IS_INPUT ? (0, _Input.reformatInputBounds)((0, _Bounds.parseBounds)(node, scrollX, scrollY)) : (0, _Bounds.parseBounds)(node, scrollX, scrollY);
        this.curvedBounds = (0, _Bounds.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius);

        if (process.env.NODE_ENV !== 'production') {
            this.name = '' + node.tagName.toLowerCase() + (node.id ? '#' + node.id : '') + node.className.toString().split(' ').map(function (s) {
                return s.length ? '.' + s : '';
            }).join('');
        }
    }

    _createClass(NodeContainer, [{
        key: 'getClipPaths',
        value: function getClipPaths() {
            var parentClips = this.parent ? this.parent.getClipPaths() : [];
            var isClipped = this.style.overflow !== _overflow.OVERFLOW.VISIBLE;

            return isClipped ? parentClips.concat([(0, _Bounds.calculatePaddingBoxPath)(this.curvedBounds)]) : parentClips;
        }
    }, {
        key: 'isInFlow',
        value: function isInFlow() {
            return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return !(0, _Util.contains)(this.style.display, _display.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === _visibility.VISIBILITY.VISIBLE;
        }
    }, {
        key: 'isAbsolutelyPositioned',
        value: function isAbsolutelyPositioned() {
            return this.style.position !== _position.POSITION.STATIC && this.style.position !== _position.POSITION.RELATIVE;
        }
    }, {
        key: 'isPositioned',
        value: function isPositioned() {
            return this.style.position !== _position.POSITION.STATIC;
        }
    }, {
        key: 'isFloating',
        value: function isFloating() {
            return this.style.float !== _float.FLOAT.NONE;
        }
    }, {
        key: 'isRootElement',
        value: function isRootElement() {
            return this.parent === null;
        }
    }, {
        key: 'isTransformed',
        value: function isTransformed() {
            return this.style.transform !== null;
        }
    }, {
        key: 'isPositionedWithZIndex',
        value: function isPositionedWithZIndex() {
            return this.isPositioned() && !this.style.zIndex.auto;
        }
    }, {
        key: 'isInlineLevel',
        value: function isInlineLevel() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_FLEX) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_GRID) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_LIST_ITEM) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }, {
        key: 'isInlineBlockOrInlineTable',
        value: function isInlineBlockOrInlineTable() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }]);

    return NodeContainer;
}();

exports.default = NodeContainer;


var getImage = function getImage(node, resourceLoader) {
    if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {
        var s = new XMLSerializer();
        return resourceLoader.loadImage('data:image/svg+xml,' + encodeURIComponent(s.serializeToString(node)));
    }
    switch (node.tagName) {
        case 'IMG':
            // $FlowFixMe
            var img = node;
            return resourceLoader.loadImage(img.currentSrc || img.src);
        case 'CANVAS':
            // $FlowFixMe
            var canvas = node;
            return resourceLoader.loadCanvas(canvas);
        case 'IFRAME':
            var iframeKey = node.getAttribute('data-html2canvas-internal-iframe-key');
            if (iframeKey) {
                return iframeKey;
            }
            break;
    }

    return null;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var contains = exports.contains = function contains(bit, value) {
    return (bit & value) !== 0;
};

var distance = exports.distance = function distance(a, b) {
    return Math.sqrt(a * a + b * b);
};

var copyCSSStyles = exports.copyCSSStyles = function copyCSSStyles(style, target) {
    // Edge does not provide value for cssText
    for (var i = style.length - 1; i >= 0; i--) {
        var property = style.item(i);
        // Safari shows pseudoelements if content is set
        if (property !== 'content') {
            target.style.setProperty(property, style.getPropertyValue(property));
        }
    }
    return target;
};

var SMALL_IMAGE = exports.SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBackgroundImage = exports.parseBackground = exports.calculateBackgroundRepeatPath = exports.calculateBackgroundPosition = exports.calculateBackgroungPositioningArea = exports.calculateBackgroungPaintingArea = exports.calculateGradientBackgroundSize = exports.calculateBackgroundSize = exports.BACKGROUND_ORIGIN = exports.BACKGROUND_CLIP = exports.BACKGROUND_SIZE = exports.BACKGROUND_REPEAT = undefined;

var _Color = __webpack_require__(123);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(124);

var _Length2 = _interopRequireDefault(_Length);

var _Size = __webpack_require__(174);

var _Size2 = _interopRequireDefault(_Size);

var _Vector = __webpack_require__(130);

var _Vector2 = _interopRequireDefault(_Vector);

var _Bounds = __webpack_require__(125);

var _padding = __webpack_require__(143);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BACKGROUND_REPEAT = exports.BACKGROUND_REPEAT = {
    REPEAT: 0,
    NO_REPEAT: 1,
    REPEAT_X: 2,
    REPEAT_Y: 3
};

var BACKGROUND_SIZE = exports.BACKGROUND_SIZE = {
    AUTO: 0,
    CONTAIN: 1,
    COVER: 2,
    LENGTH: 3
};

var BACKGROUND_CLIP = exports.BACKGROUND_CLIP = {
    BORDER_BOX: 0,
    PADDING_BOX: 1,
    CONTENT_BOX: 2
};

var BACKGROUND_ORIGIN = exports.BACKGROUND_ORIGIN = BACKGROUND_CLIP;

var AUTO = 'auto';

var BackgroundSize = function BackgroundSize(size) {
    _classCallCheck(this, BackgroundSize);

    switch (size) {
        case 'contain':
            this.size = BACKGROUND_SIZE.CONTAIN;
            break;
        case 'cover':
            this.size = BACKGROUND_SIZE.COVER;
            break;
        case 'auto':
            this.size = BACKGROUND_SIZE.AUTO;
            break;
        default:
            this.value = new _Length2.default(size);
    }
};

var calculateBackgroundSize = exports.calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {
    var width = 0;
    var height = 0;
    var size = backgroundImage.size;
    if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {
        var targetRatio = bounds.width / bounds.height;
        var currentRatio = image.width / image.height;
        return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _Size2.default(bounds.width, bounds.width / currentRatio) : new _Size2.default(bounds.height * currentRatio, bounds.height);
    }

    if (size[0].value) {
        width = size[0].value.getAbsoluteValue(bounds.width);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {
        height = image.height;
    } else if (size[1].size === BACKGROUND_SIZE.AUTO) {
        height = width / image.width * image.height;
    } else if (size[1].value) {
        height = size[1].value.getAbsoluteValue(bounds.height);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO) {
        width = height / image.height * image.width;
    }

    return new _Size2.default(width, height);
};

var calculateGradientBackgroundSize = exports.calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {
    var size = backgroundImage.size;
    var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;
    var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;

    return new _Size2.default(width, height);
};

var AUTO_SIZE = new BackgroundSize(AUTO);

var calculateBackgroungPaintingArea = exports.calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {
    switch (clip) {
        case BACKGROUND_CLIP.BORDER_BOX:
            return (0, _Bounds.calculateBorderBoxPath)(curves);
        case BACKGROUND_CLIP.PADDING_BOX:
        default:
            return (0, _Bounds.calculatePaddingBoxPath)(curves);
    }
};

var calculateBackgroungPositioningArea = exports.calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {
    var paddingBox = (0, _Bounds.calculatePaddingBox)(bounds, border);

    switch (backgroundOrigin) {
        case BACKGROUND_ORIGIN.BORDER_BOX:
            return bounds;
        case BACKGROUND_ORIGIN.CONTENT_BOX:
            var paddingLeft = padding[_padding.PADDING_SIDES.LEFT].getAbsoluteValue(bounds.width);
            var paddingRight = padding[_padding.PADDING_SIDES.RIGHT].getAbsoluteValue(bounds.width);
            var paddingTop = padding[_padding.PADDING_SIDES.TOP].getAbsoluteValue(bounds.width);
            var paddingBottom = padding[_padding.PADDING_SIDES.BOTTOM].getAbsoluteValue(bounds.width);
            return new _Bounds.Bounds(paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);
        case BACKGROUND_ORIGIN.PADDING_BOX:
        default:
            return paddingBox;
    }
};

var calculateBackgroundPosition = exports.calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {
    return new _Vector2.default(position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));
};

var calculateBackgroundRepeatPath = exports.calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {
    var repeat = background.repeat;
    switch (repeat) {
        case BACKGROUND_REPEAT.REPEAT_X:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];
        case BACKGROUND_REPEAT.REPEAT_Y:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];
        case BACKGROUND_REPEAT.NO_REPEAT:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];
        default:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(bounds.left), Math.round(bounds.height + bounds.top))];
    }
};

var parseBackground = exports.parseBackground = function parseBackground(style, resourceLoader) {
    return {
        backgroundColor: new _Color2.default(style.backgroundColor),
        backgroundImage: parseBackgroundImages(style, resourceLoader),
        backgroundClip: parseBackgroundClip(style.backgroundClip),
        backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)
    };
};

var parseBackgroundClip = function parseBackgroundClip(backgroundClip) {
    switch (backgroundClip) {
        case 'padding-box':
            return BACKGROUND_CLIP.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_CLIP.CONTENT_BOX;
    }
    return BACKGROUND_CLIP.BORDER_BOX;
};

var parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {
    switch (backgroundOrigin) {
        case 'padding-box':
            return BACKGROUND_ORIGIN.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_ORIGIN.CONTENT_BOX;
    }
    return BACKGROUND_ORIGIN.BORDER_BOX;
};

var parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {
    switch (backgroundRepeat.trim()) {
        case 'no-repeat':
            return BACKGROUND_REPEAT.NO_REPEAT;
        case 'repeat-x':
        case 'repeat no-repeat':
            return BACKGROUND_REPEAT.REPEAT_X;
        case 'repeat-y':
        case 'no-repeat repeat':
            return BACKGROUND_REPEAT.REPEAT_Y;
        case 'repeat':
            return BACKGROUND_REPEAT.REPEAT;
    }

    if (process.env.NODE_ENV !== 'production') {
        console.error('Invalid background-repeat value "' + backgroundRepeat + '"');
    }

    return BACKGROUND_REPEAT.REPEAT;
};

var parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {
    var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {
        if (backgroundImage.method === 'url') {
            var key = resourceLoader.loadImage(backgroundImage.args[0]);
            backgroundImage.args = key ? [key] : [];
        }
        return backgroundImage;
    });
    var positions = style.backgroundPosition.split(',');
    var repeats = style.backgroundRepeat.split(',');
    var sizes = style.backgroundSize.split(',');

    return sources.map(function (source, index) {
        var size = (sizes[index] || AUTO).trim().split(' ').map(parseBackgroundSize);
        var position = (positions[index] || AUTO).trim().split(' ').map(parseBackgoundPosition);

        return {
            source: source,
            repeat: parseBackgroundRepeat(typeof repeats[index] === 'string' ? repeats[index] : repeats[0]),
            size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],
            position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]
        };
    });
};

var parseBackgroundSize = function parseBackgroundSize(size) {
    return size === 'auto' ? AUTO_SIZE : new BackgroundSize(size);
};

var parseBackgoundPosition = function parseBackgoundPosition(position) {
    switch (position) {
        case 'bottom':
        case 'right':
            return new _Length2.default('100%');
        case 'left':
        case 'top':
            return new _Length2.default('0%');
        case 'auto':
            return new _Length2.default('0');
    }
    return new _Length2.default(position);
};

var parseBackgroundImage = exports.parseBackgroundImage = function parseBackgroundImage(image) {
    var whitespace = /^\s$/;
    var results = [];

    var args = [];
    var method = '';
    var quote = null;
    var definition = '';
    var mode = 0;
    var numParen = 0;

    var appendResult = function appendResult() {
        var prefix = '';
        if (method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }

            if (definition) {
                args.push(definition.trim());
            }

            var prefix_i = method.indexOf('-', 1) + 1;
            if (method.substr(0, 1) === '-' && prefix_i > 0) {
                prefix = method.substr(0, prefix_i).toLowerCase();
                method = method.substr(prefix_i);
            }
            method = method.toLowerCase();
            if (method !== 'none') {
                results.push({
                    prefix: prefix,
                    method: method,
                    args: args
                });
            }
        }
        args = [];
        method = definition = '';
    };

    image.split('').forEach(function (c) {
        if (mode === 0 && whitespace.test(c)) {
            return;
        }
        switch (c) {
            case '"':
                if (!quote) {
                    quote = c;
                } else if (quote === c) {
                    quote = null;
                }
                break;
            case '(':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    mode = 1;
                    return;
                } else {
                    numParen++;
                }
                break;
            case ')':
                if (quote) {
                    break;
                } else if (mode === 1) {
                    if (numParen === 0) {
                        mode = 0;
                        appendResult();
                        return;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    appendResult();
                    return;
                } else if (mode === 1) {
                    if (numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition.trim());
                        definition = '';
                        return;
                    }
                }
                break;
        }

        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PATH = exports.PATH = {
    VECTOR: 0,
    BEZIER_CURVE: 1,
    CIRCLE: 2
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(129);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.type = _Path.PATH.VECTOR;
    this.x = x;
    this.y = y;
    if (process.env.NODE_ENV !== 'production') {
        if (isNaN(x)) {
            console.error('Invalid x value given for Vector');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Vector');
        }
    }
};

exports.default = Vector;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseListStyle = exports.parseListStyleType = exports.LIST_STYLE_TYPE = exports.LIST_STYLE_POSITION = undefined;

var _background = __webpack_require__(128);

var LIST_STYLE_POSITION = exports.LIST_STYLE_POSITION = {
    INSIDE: 0,
    OUTSIDE: 1
};

var LIST_STYLE_TYPE = exports.LIST_STYLE_TYPE = {
    NONE: -1,
    DISC: 0,
    CIRCLE: 1,
    SQUARE: 2,
    DECIMAL: 3,
    CJK_DECIMAL: 4,
    DECIMAL_LEADING_ZERO: 5,
    LOWER_ROMAN: 6,
    UPPER_ROMAN: 7,
    LOWER_GREEK: 8,
    LOWER_ALPHA: 9,
    UPPER_ALPHA: 10,
    ARABIC_INDIC: 11,
    ARMENIAN: 12,
    BENGALI: 13,
    CAMBODIAN: 14,
    CJK_EARTHLY_BRANCH: 15,
    CJK_HEAVENLY_STEM: 16,
    CJK_IDEOGRAPHIC: 17,
    DEVANAGARI: 18,
    ETHIOPIC_NUMERIC: 19,
    GEORGIAN: 20,
    GUJARATI: 21,
    GURMUKHI: 22,
    HEBREW: 22,
    HIRAGANA: 23,
    HIRAGANA_IROHA: 24,
    JAPANESE_FORMAL: 25,
    JAPANESE_INFORMAL: 26,
    KANNADA: 27,
    KATAKANA: 28,
    KATAKANA_IROHA: 29,
    KHMER: 30,
    KOREAN_HANGUL_FORMAL: 31,
    KOREAN_HANJA_FORMAL: 32,
    KOREAN_HANJA_INFORMAL: 33,
    LAO: 34,
    LOWER_ARMENIAN: 35,
    MALAYALAM: 36,
    MONGOLIAN: 37,
    MYANMAR: 38,
    ORIYA: 39,
    PERSIAN: 40,
    SIMP_CHINESE_FORMAL: 41,
    SIMP_CHINESE_INFORMAL: 42,
    TAMIL: 43,
    TELUGU: 44,
    THAI: 45,
    TIBETAN: 46,
    TRAD_CHINESE_FORMAL: 47,
    TRAD_CHINESE_INFORMAL: 48,
    UPPER_ARMENIAN: 49,
    DISCLOSURE_OPEN: 50,
    DISCLOSURE_CLOSED: 51
};

var parseListStyleType = exports.parseListStyleType = function parseListStyleType(type) {
    switch (type) {
        case 'disc':
            return LIST_STYLE_TYPE.DISC;
        case 'circle':
            return LIST_STYLE_TYPE.CIRCLE;
        case 'square':
            return LIST_STYLE_TYPE.SQUARE;
        case 'decimal':
            return LIST_STYLE_TYPE.DECIMAL;
        case 'cjk-decimal':
            return LIST_STYLE_TYPE.CJK_DECIMAL;
        case 'decimal-leading-zero':
            return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
        case 'lower-roman':
            return LIST_STYLE_TYPE.LOWER_ROMAN;
        case 'upper-roman':
            return LIST_STYLE_TYPE.UPPER_ROMAN;
        case 'lower-greek':
            return LIST_STYLE_TYPE.LOWER_GREEK;
        case 'lower-alpha':
            return LIST_STYLE_TYPE.LOWER_ALPHA;
        case 'upper-alpha':
            return LIST_STYLE_TYPE.UPPER_ALPHA;
        case 'arabic-indic':
            return LIST_STYLE_TYPE.ARABIC_INDIC;
        case 'armenian':
            return LIST_STYLE_TYPE.ARMENIAN;
        case 'bengali':
            return LIST_STYLE_TYPE.BENGALI;
        case 'cambodian':
            return LIST_STYLE_TYPE.CAMBODIAN;
        case 'cjk-earthly-branch':
            return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
        case 'cjk-heavenly-stem':
            return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
        case 'cjk-ideographic':
            return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
        case 'devanagari':
            return LIST_STYLE_TYPE.DEVANAGARI;
        case 'ethiopic-numeric':
            return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
        case 'georgian':
            return LIST_STYLE_TYPE.GEORGIAN;
        case 'gujarati':
            return LIST_STYLE_TYPE.GUJARATI;
        case 'gurmukhi':
            return LIST_STYLE_TYPE.GURMUKHI;
        case 'hebrew':
            return LIST_STYLE_TYPE.HEBREW;
        case 'hiragana':
            return LIST_STYLE_TYPE.HIRAGANA;
        case 'hiragana-iroha':
            return LIST_STYLE_TYPE.HIRAGANA_IROHA;
        case 'japanese-formal':
            return LIST_STYLE_TYPE.JAPANESE_FORMAL;
        case 'japanese-informal':
            return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
        case 'kannada':
            return LIST_STYLE_TYPE.KANNADA;
        case 'katakana':
            return LIST_STYLE_TYPE.KATAKANA;
        case 'katakana-iroha':
            return LIST_STYLE_TYPE.KATAKANA_IROHA;
        case 'khmer':
            return LIST_STYLE_TYPE.KHMER;
        case 'korean-hangul-formal':
            return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
        case 'korean-hanja-formal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
        case 'korean-hanja-informal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
        case 'lao':
            return LIST_STYLE_TYPE.LAO;
        case 'lower-armenian':
            return LIST_STYLE_TYPE.LOWER_ARMENIAN;
        case 'malayalam':
            return LIST_STYLE_TYPE.MALAYALAM;
        case 'mongolian':
            return LIST_STYLE_TYPE.MONGOLIAN;
        case 'myanmar':
            return LIST_STYLE_TYPE.MYANMAR;
        case 'oriya':
            return LIST_STYLE_TYPE.ORIYA;
        case 'persian':
            return LIST_STYLE_TYPE.PERSIAN;
        case 'simp-chinese-formal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
        case 'simp-chinese-informal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
        case 'tamil':
            return LIST_STYLE_TYPE.TAMIL;
        case 'telugu':
            return LIST_STYLE_TYPE.TELUGU;
        case 'thai':
            return LIST_STYLE_TYPE.THAI;
        case 'tibetan':
            return LIST_STYLE_TYPE.TIBETAN;
        case 'trad-chinese-formal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
        case 'trad-chinese-informal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
        case 'upper-armenian':
            return LIST_STYLE_TYPE.UPPER_ARMENIAN;
        case 'disclosure-open':
            return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
        case 'disclosure-closed':
            return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
        case 'none':
        default:
            return LIST_STYLE_TYPE.NONE;
    }
};

var parseListStyle = exports.parseListStyle = function parseListStyle(style) {
    var listStyleImage = (0, _background.parseBackgroundImage)(style.getPropertyValue('list-style-image'));
    return {
        listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),
        listStyleImage: listStyleImage.length ? listStyleImage[0] : null,
        listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))
    };
};

var parseListStylePosition = function parseListStylePosition(position) {
    switch (position) {
        case 'inside':
            return LIST_STYLE_POSITION.INSIDE;
        case 'outside':
        default:
            return LIST_STYLE_POSITION.OUTSIDE;
    }
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textTransform = __webpack_require__(146);

var _TextBounds = __webpack_require__(148);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextContainer = function () {
    function TextContainer(text, parent, bounds) {
        _classCallCheck(this, TextContainer);

        this.text = text;
        this.parent = parent;
        this.bounds = bounds;
    }

    _createClass(TextContainer, null, [{
        key: 'fromTextNode',
        value: function fromTextNode(node, parent) {
            var text = transform(node.data, parent.style.textTransform);
            return new TextContainer(text, parent, (0, _TextBounds.parseTextBounds)(text, parent, node));
        }
    }]);

    return TextContainer;
}();

exports.default = TextContainer;


var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;

var transform = function transform(text, _transform) {
    switch (_transform) {
        case _textTransform.TEXT_TRANSFORM.LOWERCASE:
            return text.toLowerCase();
        case _textTransform.TEXT_TRANSFORM.CAPITALIZE:
            return text.replace(CAPITALIZE, capitalize);
        case _textTransform.TEXT_TRANSFORM.UPPERCASE:
            return text.toUpperCase();
        default:
            return text;
    }
};

function capitalize(m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }

    return m;
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ForeignObjectRenderer = __webpack_require__(149);

var testRangeBounds = function testRangeBounds(document) {
    var TEST_HEIGHT = 123;

    if (document.createRange) {
        var range = document.createRange();
        if (range.getBoundingClientRect) {
            var testElement = document.createElement('boundtest');
            testElement.style.height = TEST_HEIGHT + 'px';
            testElement.style.display = 'block';
            document.body.appendChild(testElement);

            range.selectNode(testElement);
            var rangeBounds = range.getBoundingClientRect();
            var rangeHeight = Math.round(rangeBounds.height);
            document.body.removeChild(testElement);
            if (rangeHeight === TEST_HEIGHT) {
                return true;
            }
        }
    }

    return false;
};

// iOS 10.3 taints canvas with base64 images unless crossOrigin = 'anonymous'
var testBase64 = function testBase64(document, src) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    return new Promise(function (resolve) {
        // Single pixel base64 image renders fine on iOS 10.3???
        img.src = src;

        var onload = function onload() {
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return resolve(false);
            }

            return resolve(true);
        };

        img.onload = onload;
        img.onerror = function () {
            return resolve(false);
        };

        if (img.complete === true) {
            setTimeout(function () {
                onload();
            }, 500);
        }
    });
};

var testCORS = function testCORS() {
    return typeof new Image().crossOrigin !== 'undefined';
};

var testResponseType = function testResponseType() {
    return typeof new XMLHttpRequest().responseType === 'string';
};

var testSVG = function testSVG(document) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    img.src = 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\'></svg>';

    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch (e) {
        return false;
    }
    return true;
};

var isGreenPixel = function isGreenPixel(data) {
    return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};

var testForeignObject = function testForeignObject(document) {
    var canvas = document.createElement('canvas');
    var size = 100;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(0, 0, size, size);

    var img = new Image();
    var greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    var svg = (0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, img);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size, size);

    return (0, _ForeignObjectRenderer.loadSerializedSVG)(svg).then(function (img) {
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, size, size).data;
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);

        var node = document.createElement('div');
        node.style.backgroundImage = 'url(' + greenImageSrc + ')';
        node.style.height = size + 'px';
        // Firefox 55 does not render inline <img /> tags
        return isGreenPixel(data) ? (0, _ForeignObjectRenderer.loadSerializedSVG)((0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, node)) : Promise.reject(false);
    }).then(function (img) {
        ctx.drawImage(img, 0, 0);
        // Edge does not render background-images
        return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    }).catch(function (e) {
        return false;
    });
};

var FEATURES = {
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RANGE_BOUNDS() {
        'use strict';

        var value = testRangeBounds(document);
        Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_SVG_DRAWING() {
        'use strict';

        var value = testSVG(document);
        Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_BASE64_DRAWING() {
        'use strict';

        return function (src) {
            var _value = testBase64(document, src);
            Object.defineProperty(FEATURES, 'SUPPORT_BASE64_DRAWING', { value: function value() {
                    return _value;
                } });
            return _value;
        };
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        'use strict';

        var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
        Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_IMAGES() {
        'use strict';

        var value = testCORS();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RESPONSE_TYPE() {
        'use strict';

        var value = testResponseType();
        Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_XHR() {
        'use strict';

        var value = 'withCredentials' in new XMLHttpRequest();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
        return value;
    }
};

exports.default = FEATURES;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("react-card-flip", [], factory);
	else if(typeof exports === 'object')
		exports["react-card-flip"] = factory();
	else
		root["react-card-flip"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(2);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCardFlip = function (_React$Component) {
  _inherits(ReactCardFlip, _React$Component);

  function ReactCardFlip(props) {
    _classCallCheck(this, ReactCardFlip);

    var _this = _possibleConstructorReturn(this, (ReactCardFlip.__proto__ || Object.getPrototypeOf(ReactCardFlip)).call(this, props));

    _this.state = {
      isFlipped: _this.props.isFlipped,
      rotation: 0
    };
    return _this;
  }

  _createClass(ReactCardFlip, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isFlipped !== this.props.isFlipped) {
        this.setState({ isFlipped: nextProps.isFlipped });
        this.setState({ rotation: this.state.rotation + 180 });
      }
    }
  }, {
    key: 'getComponent',
    value: function getComponent(key) {
      return this.props.children.filter(function (component) {
        return component.key === key;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = {
        container: {
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        },
        flipper: {
          position: 'relative',
          transformStyle: 'preserve-3d'
        },
        front: _extends({
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          left: '0',
          position: 'absolute',
          top: '0',
          transform: 'rotateY(' + (this.props.infinite ? this.state.rotation : this.state.isFlipped ? 180 : 0) + 'deg)',
          transformStyle: 'preserve-3d',
          width: '100%',
          zIndex: '2',
          transition: this.props.flipSpeedBackToFront + 's'
        }, this.props.cardStyles.front),
        back: _extends({
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          left: '0',
          position: 'absolute',
          transform: 'rotateY(' + (this.props.infinite ? this.state.rotation + 180 : this.state.isFlipped ? 0 : -180) + 'deg)',
          transformStyle: 'preserve-3d',
          top: '0',
          width: '100%',
          transition: this.props.flipSpeedFrontToBack + 's'
        }, this.props.cardStyles.back)
      };

      return _react2.default.createElement(
        'div',
        { className: 'react-card-flip', style: styles.container },
        _react2.default.createElement(
          'div',
          {
            className: 'react-card-flipper',
            style: styles.flipper
          },
          _react2.default.createElement(
            'div',
            { className: 'react-card-front', style: styles.front },
            this.getComponent('front')
          ),
          _react2.default.createElement(
            'div',
            { className: 'react-card-back', style: styles.back },
            this.getComponent('back')
          )
        )
      );
    }
  }]);

  return ReactCardFlip;
}(_react2.default.Component);

ReactCardFlip.propTypes = {
  cardStyles: _propTypes2.default.shape({
    front: _propTypes2.default.object,
    back: _propTypes2.default.object
  }),
  children: function children(props, propName, componentName) {
    if (_react2.default.Children.count(props[propName]) !== 2) {
      return new Error(componentName + ' requires two children.');
    }
    return null;
  },
  flipSpeedBackToFront: _propTypes2.default.number,
  flipSpeedFrontToBack: _propTypes2.default.number,
  infinite: _propTypes2.default.bool,
  isFlipped: _propTypes2.default.bool
};

ReactCardFlip.defaultProps = {
  cardStyles: {
    front: {},
    back: {}
  },
  flipSpeedBackToFront: 0.6,
  flipSpeedFrontToBack: 0.6,
  infinite: false,
  isFlipped: false
};

exports.default = ReactCardFlip;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(6);
} else {
  module.exports = __webpack_require__(7);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(1),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,A=n?Symbol.for("react.memo"):
60115,B=n?Symbol.for("react.lazy"):60116,C="function"===typeof Symbol&&Symbol.iterator;function aa(a,b,e,c,d,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[e,c,d,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);aa(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F={};
function G(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}G.prototype.isReactComponent={};G.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};G.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function H(){}H.prototype=G.prototype;function I(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}var J=I.prototype=new H;
J.constructor=I;k(J,G.prototype);J.isPureReactComponent=!0;var K={current:null,currentDispatcher:null},L=Object.prototype.hasOwnProperty,M={key:!0,ref:!0,__self:!0,__source:!0};
function N(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:d,_owner:K.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,e,c){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return e(c,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+U(d,h);g+=T(d,f,e,c)}else if(null===a||"object"!==typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,h++),g+=T(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function V(a,b,e){return null==a?0:T(a,"",b,e)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,function(a){return a}):null!=a&&(O(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(P,"$&/")+"/");b=R(b,g,c,d);V(a,da,b);S(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=R(null,null,b,e);V(a,ca,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){O(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:G,PureComponent:I,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:B,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:A,type:a,compare:void 0===b?null:b}},Fragment:r,StrictMode:t,unstable_ConcurrentMode:x,Suspense:z,unstable_Profiler:u,createElement:N,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),
g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=K.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=N.bind(null,a);b.type=a;return b},
isValidElement:O,version:"16.6.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:K,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.6.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var _assign = __webpack_require__(1);
var checkPropTypes = __webpack_require__(3);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.6.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var _args$map = args.map(function (item) {
        return '' + item;
      }),
          a = _args$map[0],
          b = _args$map[1],
          c = _args$map[2],
          d = _args$map[3],
          e = _args$map[4],
          f = _args$map[5],
          g = _args$map[6],
          h = _args$map[7];

      var message = 'Warning: ' + format;

      // We intentionally don't use spread (or .apply) because it breaks IE9:
      // https://github.com/facebook/react/issues/13610
      switch (args.length) {
        case 0:
          console.error(message);
          break;
        case 1:
          console.error(message, a);
          break;
        case 2:
          console.error(message, a, b);
          break;
        case 3:
          console.error(message, a, b, c);
          break;
        case 4:
          console.error(message, a, b, c, d);
          break;
        case 5:
          console.error(message, a, b, c, d, e);
          break;
        case 6:
          console.error(message, a, b, c, d, e, f);
          break;
        case 7:
          console.error(message, a, b, c, d, e, f, g);
          break;
        case 8:
          console.error(message, a, b, c, d, e, f, g, h);
          break;
        default:
          throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
      }
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var _message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(_message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null,
  currentDispatcher: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };
}

function forwardRef(render) {
  {
    if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  var name = void 0,
      propTypes = void 0;
  if (typeof type === 'function') {
    // Class or function component
    name = type.displayName || type.name;
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
    // ForwardRef
    var functionName = type.render.displayName || type.render.name || '';
    name = type.displayName || (functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef');
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(9)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(10)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(1);

var ReactPropTypesSecret = __webpack_require__(2);
var checkPropTypes = __webpack_require__(3);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(2);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=react-card-flip.js.map

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextDecoration = exports.TEXT_DECORATION_LINE = exports.TEXT_DECORATION = exports.TEXT_DECORATION_STYLE = undefined;

var _Color = __webpack_require__(123);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT_DECORATION_STYLE = exports.TEXT_DECORATION_STYLE = {
    SOLID: 0,
    DOUBLE: 1,
    DOTTED: 2,
    DASHED: 3,
    WAVY: 4
};

var TEXT_DECORATION = exports.TEXT_DECORATION = {
    NONE: null
};

var TEXT_DECORATION_LINE = exports.TEXT_DECORATION_LINE = {
    UNDERLINE: 1,
    OVERLINE: 2,
    LINE_THROUGH: 3,
    BLINK: 4
};

var parseLine = function parseLine(line) {
    switch (line) {
        case 'underline':
            return TEXT_DECORATION_LINE.UNDERLINE;
        case 'overline':
            return TEXT_DECORATION_LINE.OVERLINE;
        case 'line-through':
            return TEXT_DECORATION_LINE.LINE_THROUGH;
    }
    return TEXT_DECORATION_LINE.BLINK;
};

var parseTextDecorationLine = function parseTextDecorationLine(line) {
    if (line === 'none') {
        return null;
    }

    return line.split(' ').map(parseLine);
};

var parseTextDecorationStyle = function parseTextDecorationStyle(style) {
    switch (style) {
        case 'double':
            return TEXT_DECORATION_STYLE.DOUBLE;
        case 'dotted':
            return TEXT_DECORATION_STYLE.DOTTED;
        case 'dashed':
            return TEXT_DECORATION_STYLE.DASHED;
        case 'wavy':
            return TEXT_DECORATION_STYLE.WAVY;
    }
    return TEXT_DECORATION_STYLE.SOLID;
};

var parseTextDecoration = exports.parseTextDecoration = function parseTextDecoration(style) {
    var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);
    if (textDecorationLine === null) {
        return TEXT_DECORATION.NONE;
    }

    var textDecorationColor = style.textDecorationColor ? new _Color2.default(style.textDecorationColor) : null;
    var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);

    return {
        textDecorationLine: textDecorationLine,
        textDecorationColor: textDecorationColor,
        textDecorationStyle: textDecorationStyle
    };
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorder = exports.BORDER_SIDES = exports.BORDER_STYLE = undefined;

var _Color = __webpack_require__(123);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BORDER_STYLE = exports.BORDER_STYLE = {
    NONE: 0,
    SOLID: 1
};

var BORDER_SIDES = exports.BORDER_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = Object.keys(BORDER_SIDES).map(function (s) {
    return s.toLowerCase();
});

var parseBorderStyle = function parseBorderStyle(style) {
    switch (style) {
        case 'none':
            return BORDER_STYLE.NONE;
    }
    return BORDER_STYLE.SOLID;
};

var parseBorder = exports.parseBorder = function parseBorder(style) {
    return SIDES.map(function (side) {
        var borderColor = new _Color2.default(style.getPropertyValue('border-' + side + '-color'));
        var borderStyle = parseBorderStyle(style.getPropertyValue('border-' + side + '-style'));
        var borderWidth = parseFloat(style.getPropertyValue('border-' + side + '-width'));
        return {
            borderColor: borderColor,
            borderStyle: borderStyle,
            borderWidth: isNaN(borderWidth) ? 0 : borderWidth
        };
    });
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            } else {
                codePoints.push(value);
                i--;
            }
        } else {
            codePoints.push(value);
        }
    }
    return codePoints;
};

var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, arguments);
    }

    var length = arguments.length;
    if (!length) {
        return '';
    }

    var codeUnits = [];

    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = arguments.length <= index ? undefined : arguments[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        } else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}

var decode = exports.decode = function decode(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i = void 0,
        p = 0,
        encoded1 = void 0,
        encoded2 = void 0,
        encoded3 = void 0,
        encoded4 = void 0;

    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return buffer;
};

var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i = 0; _i < length; _i += 2) {
        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
    }
    return bytes;
};

var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i2 = 0; _i2 < length; _i2 += 4) {
        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
    }
    return bytes;
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCounterText = exports.inlineListItemElement = exports.getListOwner = undefined;

var _Util = __webpack_require__(127);

var _NodeContainer = __webpack_require__(126);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(132);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _listStyle = __webpack_require__(131);

var _Unicode = __webpack_require__(150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Margin between the enumeration and the list item content
var MARGIN_RIGHT = 7;

var ancestorTypes = ['OL', 'UL', 'MENU'];

var getListOwner = exports.getListOwner = function getListOwner(container) {
    var parent = container.parent;
    if (!parent) {
        return null;
    }

    do {
        var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;
        if (isAncestor) {
            return parent;
        }
        parent = parent.parent;
    } while (parent);

    return container.parent;
};

var inlineListItemElement = exports.inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {
    var listStyle = container.style.listStyle;

    if (!listStyle) {
        return;
    }

    var style = node.ownerDocument.defaultView.getComputedStyle(node, null);
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    (0, _Util.copyCSSStyles)(style, wrapper);

    wrapper.style.position = 'absolute';
    wrapper.style.bottom = 'auto';
    wrapper.style.display = 'block';
    wrapper.style.letterSpacing = 'normal';

    switch (listStyle.listStylePosition) {
        case _listStyle.LIST_STYLE_POSITION.OUTSIDE:
            wrapper.style.left = 'auto';
            wrapper.style.right = node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT + 'px';
            wrapper.style.textAlign = 'right';
            break;
        case _listStyle.LIST_STYLE_POSITION.INSIDE:
            wrapper.style.left = container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width) + 'px';
            wrapper.style.right = 'auto';
            wrapper.style.textAlign = 'left';
            break;
    }

    var text = void 0;
    var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);
    var styleImage = listStyle.listStyleImage;
    if (styleImage) {
        if (styleImage.method === 'url') {
            var image = node.ownerDocument.createElement('img');
            image.src = styleImage.args[0];
            wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
            wrapper.style.width = 'auto';
            wrapper.style.height = 'auto';
            wrapper.appendChild(image);
        } else {
            var size = parseFloat(container.style.font.fontSize) * 0.5;
            wrapper.style.top = container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size + 'px';
            wrapper.style.width = size + 'px';
            wrapper.style.height = size + 'px';
            wrapper.style.backgroundImage = style.listStyleImage;
        }
    } else if (typeof container.listIndex === 'number') {
        text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));
        wrapper.appendChild(text);
        wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
    }

    // $FlowFixMe
    var body = node.ownerDocument.body;
    body.appendChild(wrapper);

    if (text) {
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    } else {
        // $FlowFixMe
        container.childNodes.push(new _NodeContainer2.default(wrapper, container, resourceLoader, 0));
    }
};

var ROMAN_UPPER = {
    integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
};

var ARMENIAN = {
    integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
};

var HEBREW = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
};

var GEORGIAN = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
};

var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
    if (value < min || value > max) {
        return createCounterText(value, fallback, suffix.length > 0);
    }

    return symbols.integers.reduce(function (string, integer, index) {
        while (value >= integer) {
            value -= integer;
            string += symbols.values[index];
        }
        return string;
    }, '') + suffix;
};

var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
    var string = '';

    do {
        if (!isNumeric) {
            value--;
        }
        string = resolver(value) + string;
        value /= codePointRangeLength;
    } while (value * codePointRangeLength >= codePointRangeLength);

    return string;
};

var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
    var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;

    return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
        return (0, _Unicode.fromCodePoint)(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
    }) + suffix);
};

var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';

    var codePointRangeLength = symbols.length;
    return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
        return symbols[Math.floor(codePoint % codePointRangeLength)];
    }) + suffix;
};

var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;

var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
    if (value < -9999 || value > 9999) {
        return createCounterText(value, _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
    }
    var tmp = Math.abs(value);
    var string = suffix;

    if (tmp === 0) {
        return numbers[0] + string;
    }

    for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
        var coefficient = tmp % 10;

        if (coefficient === 0 && (0, _Util.contains)(flags, CJK_ZEROS) && string !== '') {
            string = numbers[coefficient] + string;
        } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && (0, _Util.contains)(flags, CJK_HUNDRED_COEFFICIENTS)) {
            string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
        } else if (coefficient === 1 && digit > 0) {
            string = multipliers[digit - 1] + string;
        }
        tmp = Math.floor(tmp / 10);
    }

    return (value < 0 ? negativeSign : '') + string;
};

var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
var JAPANESE_NEGATIVE = 'マイナス';
var KOREAN_NEGATIVE = '마이너스 ';

var createCounterText = exports.createCounterText = function createCounterText(value, type, appendSuffix) {
    var defaultSuffix = appendSuffix ? '. ' : '';
    var cjkSuffix = appendSuffix ? '、' : '';
    var koreanSuffix = appendSuffix ? ', ' : '';
    switch (type) {
        case _listStyle.LIST_STYLE_TYPE.DISC:
            return '•';
        case _listStyle.LIST_STYLE_TYPE.CIRCLE:
            return '◦';
        case _listStyle.LIST_STYLE_TYPE.SQUARE:
            return '◾';
        case _listStyle.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
            var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
            return string.length < 4 ? '0' + string : string;
        case _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL:
            return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.UPPER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_GREEK:
            return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ALPHA:
            return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.UPPER_ALPHA:
            return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARABIC_INDIC:
            return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARMENIAN:
        case _listStyle.LIST_STYLE_TYPE.UPPER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.BENGALI:
            return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CAMBODIAN:
        case _listStyle.LIST_STYLE_TYPE.KHMER:
            return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
            return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
            return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
            return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_FORMAL:
            return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
            return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
            return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.DEVANAGARI:
            return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GEORGIAN:
            return createAdditiveCounter(value, 1, 19999, GEORGIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GUJARATI:
            return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GURMUKHI:
            return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HEBREW:
            return createAdditiveCounter(value, 1, 10999, HEBREW, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA:
            return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA_IROHA:
            return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
        case _listStyle.LIST_STYLE_TYPE.KANNADA:
            return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA:
            return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA_IROHA:
            return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LAO:
            return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MONGOLIAN:
            return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MYANMAR:
            return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ORIYA:
            return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.PERSIAN:
            return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TAMIL:
            return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TELUGU:
            return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.THAI:
            return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TIBETAN:
            return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.DECIMAL:
        default:
            return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
};

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function UserImage(_ref) {
  var src = _ref.src,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size;
  var imageClasses = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(_defineProperty({
    'vk-widget__user-img': true
  }, "vk-widget__user-img-".concat(size), true));
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: imageClasses,
    src: src
  });
}

/* harmony default export */ __webpack_exports__["a"] = (UserImage);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return changeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addContent; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var change = function change(value, section, key) {
  return {
    type: 'VK_CHANGE_DATA',
    section: section,
    value: value,
    key: key
  };
};
var changeImage = function changeImage(type, key, img) {
  return function (dispatch) {
    if (type === 'temp') {
      dispatch({
        type: 'VK_CHANGE_IMAGE',
        src: img,
        key: key
      });
    } else {
      var reader = new FileReader();
      reader.readAsDataURL(img.target.files[0]);

      reader.onload = function () {
        dispatch({
          type: 'VK_CHANGE_IMAGE',
          src: reader.result,
          key: key
        });
      };

      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  };
};
var addContent = function addContent(groupName) {
  return function (dispatch, getState) {
    var _getState = getState(),
        vk = _getState.vk;

    var widgetContent = vk.widgetContent;

    var lastFroup = _getLastGroup(widgetContent);

    var section, name1, name2;

    if (groupName === 'separator') {
      section = 'content';
      name1 = 'separatorText';

      if (lastFroup.name === groupName) {
        widgetContent[lastFroup.key][lastFroup.name] = vk[section][name1];
      } else {
        var group = _defineProperty({}, groupName, vk[section][name1]);

        widgetContent.push(group);
      }

      dispatch(_setContent(widgetContent));
      dispatch(_clearInputValue(section, name1));
    } else {
      section = groupName;
      name1 = 'msgTime';
      name2 = 'message';

      if (lastFroup.name === groupName) {
        var _widgetContent$lastFr;

        widgetContent[lastFroup.key][lastFroup.name].push((_widgetContent$lastFr = {}, _defineProperty(_widgetContent$lastFr, name1, vk[section][name1]), _defineProperty(_widgetContent$lastFr, name2, vk[section][name2]), _widgetContent$lastFr));
      } else {
        var _ref;

        var _group2 = _defineProperty({}, groupName, [(_ref = {}, _defineProperty(_ref, name1, vk[section][name1]), _defineProperty(_ref, name2, vk[section][name2]), _ref)]);

        widgetContent.push(_group2);
      }

      dispatch(_setContent(widgetContent));
      dispatch(_clearInputValue(section, name1));
      dispatch(_clearInputValue(section, name2));
    }
  };
};

var _clearInputValue = function _clearInputValue(section, name) {
  return {
    type: 'VK_CLEAR_INPUT',
    section: section,
    name: name
  };
};

var _setContent = function _setContent(widgetContent) {
  return {
    type: 'VK_CHANGE_WIDGET_CONTENT',
    widgetContent: widgetContent
  };
};

var _getLastGroup = function _getLastGroup(widgetContent) {
  var key = widgetContent.length;
  var name = null;

  if (key !== 0) {
    key = key - 1;
    name = Object.keys(widgetContent[key])[0];
  }

  return {
    key: key,
    name: name
  };
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(129);

var _textDecoration = __webpack_require__(135);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addColorStops = function addColorStops(gradient, canvasGradient) {
    var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {
        return colorStop.stop;
    }));
    var f = 1 / Math.max(1, maxStop);
    gradient.colorStops.forEach(function (colorStop) {
        canvasGradient.addColorStop(f * colorStop.stop, colorStop.color.toString());
    });
};

var CanvasRenderer = function () {
    function CanvasRenderer(canvas) {
        _classCallCheck(this, CanvasRenderer);

        this.canvas = canvas ? canvas : document.createElement('canvas');
    }

    _createClass(CanvasRenderer, [{
        key: 'render',
        value: function render(options) {
            this.ctx = this.canvas.getContext('2d');
            this.options = options;
            this.canvas.width = Math.floor(options.width * options.scale);
            this.canvas.height = Math.floor(options.height * options.scale);
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            this.ctx.scale(this.options.scale, this.options.scale);
            this.ctx.translate(-options.x, -options.y);
            this.ctx.textBaseline = 'bottom';
            options.logger.log('Canvas renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + this.options.scale);
        }
    }, {
        key: 'clip',
        value: function clip(clipPaths, callback) {
            var _this = this;

            if (clipPaths.length) {
                this.ctx.save();
                clipPaths.forEach(function (path) {
                    _this.path(path);
                    _this.ctx.clip();
                });
            }

            callback();

            if (clipPaths.length) {
                this.ctx.restore();
            }
        }
    }, {
        key: 'drawImage',
        value: function drawImage(image, source, destination) {
            this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);
        }
    }, {
        key: 'drawShape',
        value: function drawShape(path, color) {
            this.path(path);
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'fill',
        value: function fill(color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'getTarget',
        value: function getTarget() {
            this.canvas.getContext('2d').setTransform(1, 0, 0, 1, 0, 0);
            return Promise.resolve(this.canvas);
        }
    }, {
        key: 'path',
        value: function path(_path) {
            var _this2 = this;

            this.ctx.beginPath();
            if (Array.isArray(_path)) {
                _path.forEach(function (point, index) {
                    var start = point.type === _Path.PATH.VECTOR ? point : point.start;
                    if (index === 0) {
                        _this2.ctx.moveTo(start.x, start.y);
                    } else {
                        _this2.ctx.lineTo(start.x, start.y);
                    }

                    if (point.type === _Path.PATH.BEZIER_CURVE) {
                        _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                    }
                });
            } else {
                this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);
            }

            this.ctx.closePath();
        }
    }, {
        key: 'rectangle',
        value: function rectangle(x, y, width, height, color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fillRect(x, y, width, height);
        }
    }, {
        key: 'renderLinearGradient',
        value: function renderLinearGradient(bounds, gradient) {
            var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);

            addColorStops(gradient, linearGradient);
            this.ctx.fillStyle = linearGradient;
            this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
        }
    }, {
        key: 'renderRadialGradient',
        value: function renderRadialGradient(bounds, gradient) {
            var _this3 = this;

            var x = bounds.left + gradient.center.x;
            var y = bounds.top + gradient.center.y;

            var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);
            if (!radialGradient) {
                return;
            }

            addColorStops(gradient, radialGradient);
            this.ctx.fillStyle = radialGradient;

            if (gradient.radius.x !== gradient.radius.y) {
                // transforms for elliptical radial gradient
                var midX = bounds.left + 0.5 * bounds.width;
                var midY = bounds.top + 0.5 * bounds.height;
                var f = gradient.radius.y / gradient.radius.x;
                var invF = 1 / f;

                this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {
                    return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);
                });
            } else {
                this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
        }
    }, {
        key: 'renderRepeat',
        value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), 'repeat');
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        }
    }, {
        key: 'renderTextNode',
        value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {
            var _this4 = this;

            this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(' ');

            textBounds.forEach(function (text) {
                _this4.ctx.fillStyle = color.toString();
                if (textShadows && text.text.trim().length) {
                    textShadows.slice(0).reverse().forEach(function (textShadow) {
                        _this4.ctx.shadowColor = textShadow.color.toString();
                        _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;
                        _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;
                        _this4.ctx.shadowBlur = textShadow.blur;

                        _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                    });
                } else {
                    _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                }

                if (textDecoration !== null) {
                    var textDecorationColor = textDecoration.textDecorationColor || color;
                    textDecoration.textDecorationLine.forEach(function (textDecorationLine) {
                        switch (textDecorationLine) {
                            case _textDecoration.TEXT_DECORATION_LINE.UNDERLINE:
                                // Draws a line at the baseline of the font
                                // TODO As some browsers display the line as more than 1px if the font-size is big,
                                // need to take that into account both in position and size
                                var _options$fontMetrics$ = _this4.options.fontMetrics.getMetrics(font),
                                    baseline = _options$fontMetrics$.baseline;

                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.OVERLINE:
                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.LINE_THROUGH:
                                // TODO try and find exact position for line-through
                                var _options$fontMetrics$2 = _this4.options.fontMetrics.getMetrics(font),
                                    middle = _options$fontMetrics$2.middle;

                                _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);
                                break;
                        }
                    });
                }
            });
        }
    }, {
        key: 'resizeImage',
        value: function resizeImage(image, size) {
            if (image.width === size.width && image.height === size.height) {
                return image;
            }

            var canvas = this.canvas.ownerDocument.createElement('canvas');
            canvas.width = size.width;
            canvas.height = size.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
            return canvas;
        }
    }, {
        key: 'setOpacity',
        value: function setOpacity(opacity) {
            this.ctx.globalAlpha = opacity;
        }
    }, {
        key: 'transform',
        value: function transform(offsetX, offsetY, matrix, callback) {
            this.ctx.save();
            this.ctx.translate(offsetX, offsetY);
            this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            this.ctx.translate(-offsetX, -offsetY);

            callback();

            this.ctx.restore();
        }
    }]);

    return CanvasRenderer;
}();

exports.default = CanvasRenderer;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger(enabled, id, start) {
        _classCallCheck(this, Logger);

        this.enabled = typeof window !== 'undefined' && enabled;
        this.start = start ? start : Date.now();
        this.id = id;
    }

    _createClass(Logger, [{
        key: 'child',
        value: function child(id) {
            return new Logger(this.enabled, id, this.start);
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'log',
        value: function log() {
            if (this.enabled && window.console && window.console.log) {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'error',
        value: function error() {
            if (this.enabled && window.console && window.console.error) {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }
    }]);

    return Logger;
}();

exports.default = Logger;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePadding = exports.PADDING_SIDES = undefined;

var _Length = __webpack_require__(124);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PADDING_SIDES = exports.PADDING_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = ['top', 'right', 'bottom', 'left'];

var parsePadding = exports.parsePadding = function parsePadding(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('padding-' + side));
    });
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW_WRAP = exports.OVERFLOW_WRAP = {
    NORMAL: 0,
    BREAK_WORD: 1
};

var parseOverflowWrap = exports.parseOverflowWrap = function parseOverflowWrap(overflow) {
    switch (overflow) {
        case 'break-word':
            return OVERFLOW_WRAP.BREAK_WORD;
        case 'normal':
        default:
            return OVERFLOW_WRAP.NORMAL;
    }
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var POSITION = exports.POSITION = {
    STATIC: 0,
    RELATIVE: 1,
    ABSOLUTE: 2,
    FIXED: 3,
    STICKY: 4
};

var parsePosition = exports.parsePosition = function parsePosition(position) {
    switch (position) {
        case 'relative':
            return POSITION.RELATIVE;
        case 'absolute':
            return POSITION.ABSOLUTE;
        case 'fixed':
            return POSITION.FIXED;
        case 'sticky':
            return POSITION.STICKY;
    }

    return POSITION.STATIC;
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TEXT_TRANSFORM = exports.TEXT_TRANSFORM = {
    NONE: 0,
    LOWERCASE: 1,
    UPPERCASE: 2,
    CAPITALIZE: 3
};

var parseTextTransform = exports.parseTextTransform = function parseTextTransform(textTransform) {
    switch (textTransform) {
        case 'uppercase':
            return TEXT_TRANSFORM.UPPERCASE;
        case 'lowercase':
            return TEXT_TRANSFORM.LOWERCASE;
        case 'capitalize':
            return TEXT_TRANSFORM.CAPITALIZE;
    }

    return TEXT_TRANSFORM.NONE;
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reformatInputBounds = exports.inlineSelectElement = exports.inlineTextAreaElement = exports.inlineInputElement = exports.getInputBorderRadius = exports.INPUT_BACKGROUND = exports.INPUT_BORDERS = exports.INPUT_COLOR = undefined;

var _TextContainer = __webpack_require__(132);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(128);

var _border = __webpack_require__(136);

var _Circle = __webpack_require__(193);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(130);

var _Vector2 = _interopRequireDefault(_Vector);

var _Color = __webpack_require__(123);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(124);

var _Length2 = _interopRequireDefault(_Length);

var _Bounds = __webpack_require__(125);

var _TextBounds = __webpack_require__(148);

var _Util = __webpack_require__(127);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INPUT_COLOR = exports.INPUT_COLOR = new _Color2.default([42, 42, 42]);
var INPUT_BORDER_COLOR = new _Color2.default([165, 165, 165]);
var INPUT_BACKGROUND_COLOR = new _Color2.default([222, 222, 222]);
var INPUT_BORDER = {
    borderWidth: 1,
    borderColor: INPUT_BORDER_COLOR,
    borderStyle: _border.BORDER_STYLE.SOLID
};
var INPUT_BORDERS = exports.INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];
var INPUT_BACKGROUND = exports.INPUT_BACKGROUND = {
    backgroundColor: INPUT_BACKGROUND_COLOR,
    backgroundImage: [],
    backgroundClip: _background.BACKGROUND_CLIP.PADDING_BOX,
    backgroundOrigin: _background.BACKGROUND_ORIGIN.PADDING_BOX
};

var RADIO_BORDER_RADIUS = new _Length2.default('50%');
var RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];
var INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];

var CHECKBOX_BORDER_RADIUS = new _Length2.default('3px');
var CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];
var INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];

var getInputBorderRadius = exports.getInputBorderRadius = function getInputBorderRadius(node) {
    return node.type === 'radio' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;
};

var inlineInputElement = exports.inlineInputElement = function inlineInputElement(node, container) {
    if (node.type === 'radio' || node.type === 'checkbox') {
        if (node.checked) {
            var size = Math.min(container.bounds.width, container.bounds.height);
            container.childNodes.push(node.type === 'checkbox' ? [new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _Vector2.default(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _Vector2.default(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _Vector2.default(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _Vector2.default(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _Vector2.default(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _Circle2.default(container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));
        }
    } else {
        inlineFormElement(getInputValue(node), node, container, false);
    }
};

var inlineTextAreaElement = exports.inlineTextAreaElement = function inlineTextAreaElement(node, container) {
    inlineFormElement(node.value, node, container, true);
};

var inlineSelectElement = exports.inlineSelectElement = function inlineSelectElement(node, container) {
    var option = node.options[node.selectedIndex || 0];
    inlineFormElement(option ? option.text || '' : '', node, container, false);
};

var reformatInputBounds = exports.reformatInputBounds = function reformatInputBounds(bounds) {
    if (bounds.width > bounds.height) {
        bounds.left += (bounds.width - bounds.height) / 2;
        bounds.width = bounds.height;
    } else if (bounds.width < bounds.height) {
        bounds.top += (bounds.height - bounds.width) / 2;
        bounds.height = bounds.width;
    }
    return bounds;
};

var inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {
    var body = node.ownerDocument.body;
    if (value.length > 0 && body) {
        var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
        (0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);
        wrapper.style.position = 'absolute';
        wrapper.style.left = container.bounds.left + 'px';
        wrapper.style.top = container.bounds.top + 'px';
        if (!allowLinebreak) {
            wrapper.style.whiteSpace = 'nowrap';
        }
        var text = node.ownerDocument.createTextNode(value);
        wrapper.appendChild(text);
        body.appendChild(wrapper);
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    }
};

var getInputValue = function getInputValue(node) {
    var value = node.type === 'password' ? new Array(node.value.length + 1).join('\u2022') : node.value;

    return value.length === 0 ? node.placeholder || '' : value;
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextBounds = exports.TextBounds = undefined;

var _Bounds = __webpack_require__(125);

var _textDecoration = __webpack_require__(135);

var _Feature = __webpack_require__(133);

var _Feature2 = _interopRequireDefault(_Feature);

var _Unicode = __webpack_require__(150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextBounds = exports.TextBounds = function TextBounds(text, bounds) {
    _classCallCheck(this, TextBounds);

    this.text = text;
    this.bounds = bounds;
};

var parseTextBounds = exports.parseTextBounds = function parseTextBounds(value, parent, node) {
    var letterRendering = parent.style.letterSpacing !== 0;
    var textList = letterRendering ? (0, _Unicode.toCodePoints)(value).map(function (i) {
        return (0, _Unicode.fromCodePoint)(i);
    }) : (0, _Unicode.breakWords)(value, parent);
    var length = textList.length;
    var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;
    var scrollX = defaultView ? defaultView.pageXOffset : 0;
    var scrollY = defaultView ? defaultView.pageYOffset : 0;
    var textBounds = [];
    var offset = 0;
    for (var i = 0; i < length; i++) {
        var text = textList[i];
        if (parent.style.textDecoration !== _textDecoration.TEXT_DECORATION.NONE || text.trim().length > 0) {
            if (_Feature2.default.SUPPORT_RANGE_BOUNDS) {
                textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));
            } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));
                node = replacementNode;
            }
        } else if (!_Feature2.default.SUPPORT_RANGE_BOUNDS) {
            node = node.splitText(text.length);
        }
        offset += text.length;
    }
    return textBounds;
};

var getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
        parentNode.replaceChild(wrapper, node);
        var bounds = (0, _Bounds.parseBounds)(wrapper, scrollX, scrollY);
        if (wrapper.firstChild) {
            parentNode.replaceChild(wrapper.firstChild, wrapper);
        }
        return bounds;
    }
    return new _Bounds.Bounds(0, 0, 0, 0);
};

var getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {
    var range = node.ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return _Bounds.Bounds.fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForeignObjectRenderer = function () {
    function ForeignObjectRenderer(element) {
        _classCallCheck(this, ForeignObjectRenderer);

        this.element = element;
    }

    _createClass(ForeignObjectRenderer, [{
        key: 'render',
        value: function render(options) {
            var _this = this;

            this.options = options;
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = Math.floor(options.width) * options.scale;
            this.canvas.height = Math.floor(options.height) * options.scale;
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            options.logger.log('ForeignObject renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + options.scale);
            var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);

            return loadSerializedSVG(svg).then(function (img) {
                if (options.backgroundColor) {
                    _this.ctx.fillStyle = options.backgroundColor.toString();
                    _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);
                }

                _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);
                return _this.canvas;
            });
        }
    }]);

    return ForeignObjectRenderer;
}();

exports.default = ForeignObjectRenderer;
var createForeignObjectSVG = exports.createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width);
    svg.setAttributeNS(null, 'height', height);

    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x);
    foreignObject.setAttributeNS(null, 'y', y);
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);

    foreignObject.appendChild(node);

    return svg;
};

var loadSerializedSVG = exports.loadSerializedSVG = function loadSerializedSVG(svg) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;

        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.breakWords = exports.fromCodePoint = exports.toCodePoints = undefined;

var _cssLineBreak = __webpack_require__(189);

Object.defineProperty(exports, 'toCodePoints', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.toCodePoints;
    }
});
Object.defineProperty(exports, 'fromCodePoint', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.fromCodePoint;
    }
});

var _NodeContainer = __webpack_require__(126);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _overflowWrap = __webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakWords = exports.breakWords = function breakWords(str, parent) {
    var breaker = (0, _cssLineBreak.LineBreaker)(str, {
        lineBreak: parent.style.lineBreak,
        wordBreak: parent.style.overflowWrap === _overflowWrap.OVERFLOW_WRAP.BREAK_WORD ? 'break-word' : parent.style.wordBreak
    });

    var words = [];
    var bk = void 0;

    while (!(bk = breaker.next()).done) {
        words.push(bk.value.slice());
    }

    return words;
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FontMetrics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(127);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAMPLE_TEXT = 'Hidden Text';

var FontMetrics = exports.FontMetrics = function () {
    function FontMetrics(document) {
        _classCallCheck(this, FontMetrics);

        this._data = {};
        this._document = document;
    }

    _createClass(FontMetrics, [{
        key: '_parseMetrics',
        value: function _parseMetrics(font) {
            var container = this._document.createElement('div');
            var img = this._document.createElement('img');
            var span = this._document.createElement('span');

            var body = this._document.body;
            if (!body) {
                throw new Error(process.env.NODE_ENV !== 'production' ? 'No document found for font metrics' : '');
            }

            container.style.visibility = 'hidden';
            container.style.fontFamily = font.fontFamily;
            container.style.fontSize = font.fontSize;
            container.style.margin = '0';
            container.style.padding = '0';

            body.appendChild(container);

            img.src = _Util.SMALL_IMAGE;
            img.width = 1;
            img.height = 1;

            img.style.margin = '0';
            img.style.padding = '0';
            img.style.verticalAlign = 'baseline';

            span.style.fontFamily = font.fontFamily;
            span.style.fontSize = font.fontSize;
            span.style.margin = '0';
            span.style.padding = '0';

            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;

            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));

            container.style.lineHeight = 'normal';
            img.style.verticalAlign = 'super';

            var middle = img.offsetTop - container.offsetTop + 2;

            body.removeChild(container);

            return { baseline: baseline, middle: middle };
        }
    }, {
        key: 'getMetrics',
        value: function getMetrics(font) {
            var key = font.fontFamily + ' ' + font.fontSize;
            if (this._data[key] === undefined) {
                this._data[key] = this._parseMetrics(font);
            }

            return this._data[key];
        }
    }]);

    return FontMetrics;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Proxy = undefined;

var _Feature = __webpack_require__(133);

var _Feature2 = _interopRequireDefault(_Feature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Proxy = exports.Proxy = function Proxy(src, options) {
    if (!options.proxy) {
        return Promise.reject(process.env.NODE_ENV !== 'production' ? 'No proxy defined' : null);
    }
    var proxy = options.proxy;

    return new Promise(function (resolve, reject) {
        var responseType = _Feature2.default.SUPPORT_CORS_XHR && _Feature2.default.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
        var xhr = _Feature2.default.SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();
        xhr.onload = function () {
            if (xhr instanceof XMLHttpRequest) {
                if (xhr.status === 200) {
                    if (responseType === 'text') {
                        resolve(xhr.response);
                    } else {
                        var reader = new FileReader();
                        // $FlowFixMe
                        reader.addEventListener('load', function () {
                            return resolve(reader.result);
                        }, false);
                        // $FlowFixMe
                        reader.addEventListener('error', function (e) {
                            return reject(e);
                        }, false);
                        reader.readAsDataURL(xhr.response);
                    }
                } else {
                    reject(process.env.NODE_ENV !== 'production' ? 'Failed to proxy resource ' + src.substring(0, 256) + ' with status code ' + xhr.status : '');
                }
            } else {
                resolve(xhr.responseText);
            }
        };

        xhr.onerror = reject;
        xhr.open('GET', proxy + '?url=' + encodeURIComponent(src) + '&responseType=' + responseType);

        if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
            xhr.responseType = responseType;
        }

        if (options.imageTimeout) {
            var timeout = options.imageTimeout;
            xhr.timeout = timeout;
            xhr.ontimeout = function () {
                return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) proxying ' + src.substring(0, 256) : '');
            };
        }

        xhr.send();
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VkHeader__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VkFooter__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widget_WidgetSeparator__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widget_WidgetMessage__ = __webpack_require__(162);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var VkWidget =
/*#__PURE__*/
function (_Component) {
  _inherits(VkWidget, _Component);

  function VkWidget() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VkWidget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VkWidget)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderHeader", function () {
      var _this$props = _this.props,
          header = _this$props.header,
          components = _this$props.components,
          users = _this$props.users;

      if (!components.header) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__VkHeader__["a" /* default */], {
        companion: users.companion.name,
        time: header.time,
        isMobile: header.mobile,
        img: users.companion.image
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderFooter", function () {
      var components = _this.props.components;

      if (!components.footer) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__VkFooter__["a" /* default */], null);
    });

    return _this;
  }

  _createClass(VkWidget, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          content = _this$props2.content,
          widgetContent = _this$props2.widgetContent,
          users = _this$props2.users;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget",
        id: "vk-chat-widget"
      }, this.renderHeader(), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_body",
        style: {
          height: "".concat(content.height, "px")
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_body__content vk-widget_content"
      }, widgetContent.map(function (elemet, key) {
        return Object.keys(elemet).map(function (groupName) {
          if (groupName === 'separator') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__widget_WidgetSeparator__["a" /* default */], {
              key: key,
              text: elemet[groupName]
            });
          }

          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__widget_WidgetMessage__["a" /* default */], {
            key: key,
            user: users[groupName],
            messageData: elemet[groupName]
          });
        });
      }))), this.renderFooter());
    }
  }]);

  return VkWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (VkWidget);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mini__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Language__ = __webpack_require__(21);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var VkHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(VkHeader, _Component);

  function VkHeader() {
    _classCallCheck(this, VkHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(VkHeader).apply(this, arguments));
  }

  _createClass(VkHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          companion = _this$props.companion,
          time = _this$props.time,
          img = _this$props.img,
          isMobile = _this$props.isMobile;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_header"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_header__left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "vk-widget_header__back-image",
        src: "./assets/images/back.svg"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_header__back"
      }, __WEBPACK_IMPORTED_MODULE_2__classes_Language__["a" /* default */].take('content.back'))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_header__center"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_header__user-name"
      }, companion), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_header__online-status"
      }, time, isMobile ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "vk-widget_header__online-status-image",
        src: "./assets/images/mobile.png"
      }) : null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_header__right"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_header__mini-img-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mini__["e" /* UserImage */], {
        src: img
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "vk-widget_header__dots",
        src: "./assets/images/dots.svg"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "vk-widget_header__search",
        src: "./assets/images/search.svg"
      })));
    }
  }]);

  return VkHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (VkHeader);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserImage__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Language__ = __webpack_require__(21);




function UserImageSelect(_ref) {
  var imgUrl = _ref.imgUrl,
      label = _ref.label,
      imgTemp = _ref.imgTemp,
      onChangeImage = _ref.onChangeImage,
      _onChange = _ref.onChange,
      tempKey = _ref.tempKey;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk_form vk_form__table"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk_form__label clearfix"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk_form__section-left"
  }, label, ": ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__UserImage__["a" /* default */], {
    src: imgUrl
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk_form__section-right"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "url",
    className: "vk_form__section-input",
    placeholder: __WEBPACK_IMPORTED_MODULE_2__classes_Language__["a" /* default */].take('config.imageSelect.link'),
    value: imgTemp,
    onChange: function onChange(e) {
      return _onChange(e.target.value, 'temp', "".concat(tempKey, "Img"));
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "vk_form__section-button",
    onClick: function onClick() {
      return onChangeImage('temp', tempKey, imgTemp);
    }
  }, __WEBPACK_IMPORTED_MODULE_2__classes_Language__["a" /* default */].take('config.imageSelect.button'))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    className: "vk_form__section-label"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk_form__section-button upload-button"
  }, __WEBPACK_IMPORTED_MODULE_2__classes_Language__["a" /* default */].take('config.imageSelect.upload')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    className: "d-none",
    type: "file",
    onChange: function onChange(image) {
      return onChangeImage('file', tempKey, image);
    }
  })))));
}

/* harmony default export */ __webpack_exports__["a"] = (UserImageSelect);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



function TextInput(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      inline = _ref.inline,
      table = _ref.table,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? 'false' : _ref$required,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder;
  var wrapper = __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
    'vk_form': true,
    'vk_form__inline': inline,
    'vk_form__table': table
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: wrapper
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    className: "vk_form__label"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "vk_form__label-text"
  }, "".concat(label, ": ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    required: required,
    type: type,
    className: "vk_form__input",
    value: value,
    onChange: onChange,
    placeholder: placeholder
  })));
}

/* harmony default export */ __webpack_exports__["a"] = (TextInput);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



function CheckBox(_ref) {
  var label = _ref.label,
      checked = _ref.checked,
      onChange = _ref.onChange,
      inline = _ref.inline,
      table = _ref.table;
  var wrapper = __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
    'vk_form': true,
    'vk_form__inline': inline,
    'vk_form__table': table
  });
  var image = checked ? 'checked' : 'check';
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: wrapper
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    className: "vk_form__label"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "vk_form__label-text"
  }, "".concat(label, ": ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk_form__checkbox-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "./assets/images/".concat(image, ".svg"),
    className: "vk_form__checkbox"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    className: "hide-element",
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }))));
}

/* harmony default export */ __webpack_exports__["a"] = (CheckBox);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Language__ = __webpack_require__(21);



function MessageBox(_ref) {
  var value = _ref.value,
      label = _ref.label,
      onChange = _ref.onChange,
      required = _ref.required,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk_form vk_form__table"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk_form__label clearfix"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk_form__section-left"
  }, label, ":"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk_form__section-right"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
    className: "vk_form__section-textarea",
    required: required,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }))));
}

/* harmony default export */ __webpack_exports__["a"] = (MessageBox);

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



function SettingButton(_ref) {
  var content = _ref.content,
      full = _ref.full,
      handleClick = _ref.handleClick,
      distance = _ref.distance,
      ligth = _ref.ligth;
  var wrapper = __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
    'vk_form__setting-button': true,
    'vk_form__setting-button-full': full,
    'vk_form__setting-button-distance': distance,
    'vk_form__setting-button-ligth': ligth
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: wrapper,
    onClick: handleClick
  }, content);
}

/* harmony default export */ __webpack_exports__["a"] = (SettingButton);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Language__ = __webpack_require__(21);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var VkHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(VkHeader, _Component);

  function VkHeader() {
    _classCallCheck(this, VkHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(VkHeader).apply(this, arguments));
  }

  _createClass(VkHeader, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_footer"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_footer__left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "vk-widget_footer__clip",
        src: "./assets/images/clip.svg"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_footer__center"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_footer__message"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_footer__message-text"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_footer__message-placeholder"
      }, __WEBPACK_IMPORTED_MODULE_1__classes_Language__["a" /* default */].take('content.writeMessage')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "vk-widget_footer__smile",
        src: "./assets/images/smile.svg"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "vk-widget_footer__photo",
        src: "./assets/images/photo.svg"
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_footer__right"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "vk-widget_footer__microphone",
        src: "./assets/images/microphone.svg"
      })));
    }
  }]);

  return VkHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (VkHeader);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function WidgetSeparator(_ref) {
  var text = _ref.text;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "vk-widget_content__separator"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "vk-widget_content__separator-content"
  }, text));
}

/* harmony default export */ __webpack_exports__["a"] = (WidgetSeparator);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mini__ = __webpack_require__(122);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




function WidgetMessage(_ref) {
  var user = _ref.user,
      messageData = _ref.messageData;

  var datas = _toConsumableArray(messageData);

  var firstData = datas.shift();
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk-widget_content__message-section"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk-widget_content__messages-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk-widget_content__message-left"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mini__["e" /* UserImage */], {
    src: user.image,
    size: "medium"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk-widget_content__message-right"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk-widget_content__message vk-widget_content__message-data"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "vk-widget_content__user-name"
  }, user.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "vk-widget_content__message-time"
  }, firstData.msgTime)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "vk-widget_content__message"
  }, firstData.message), datas.map(function (data, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "vk-widget_content__message second-message",
      key: key
    }, data.message);
  }))));
}

/* harmony default export */ __webpack_exports__["a"] = (WidgetMessage);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mini__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SettingSections__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_vk_actions__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_Language__ = __webpack_require__(21);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var VkSettings =
/*#__PURE__*/
function (_Component) {
  _inherits(VkSettings, _Component);

  function VkSettings() {
    _classCallCheck(this, VkSettings);

    return _possibleConstructorReturn(this, _getPrototypeOf(VkSettings).apply(this, arguments));
  }

  _createClass(VkSettings, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          vk = _this$props.vk,
          onChange = _this$props.onChange,
          onChangeImage = _this$props.onChangeImage,
          onAddContent = _this$props.onAddContent;
      var header = vk.header,
          components = vk.components,
          companion = vk.companion,
          current = vk.current,
          content = vk.content,
          temp = vk.temp;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "widget-right__wrapper"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "widget-right__config"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__SettingSections__["e" /* SectionTopPart */], {
        header: header,
        onChange: onChange
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__SettingSections__["b" /* SectionCurrentUser */], {
        current: current,
        temp: temp,
        onChange: onChange,
        onChangeImage: onChangeImage,
        addwidgetContent: onAddContent
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__SettingSections__["c" /* SectionInterlocutor */], {
        companion: companion,
        temp: temp,
        onChange: onChange,
        onChangeImage: onChangeImage,
        addwidgetContent: onAddContent
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__SettingSections__["a" /* SectionContent */], {
        content: content,
        onChange: onChange,
        addwidgetContent: onAddContent
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__SettingSections__["d" /* SectionSections */], {
        components: components,
        onChange: onChange
      })));
    }
  }]);

  return VkSettings;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    vk: state.vk
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChange: function onChange(value, section, key) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__store_vk_actions__["b" /* change */])(value, section, key));
    },
    onChangeImage: function onChangeImage(type, key, img) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__store_vk_actions__["c" /* changeImage */])(type, key, img));
    },
    onAddContent: function onAddContent(groupName) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__store_vk_actions__["a" /* addContent */])(groupName));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(VkSettings));

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SectionTopPart__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SectionContent__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SectionInterlocutor__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SectionSections__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SectionCurrentUser__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__SectionContent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__SectionInterlocutor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__SectionCurrentUser__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__SectionTopPart__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__SectionSections__["a"]; });







/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(21);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var SectionTopPart =
/*#__PURE__*/
function (_Component) {
  _inherits(SectionTopPart, _Component);

  function SectionTopPart() {
    _classCallCheck(this, SectionTopPart);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionTopPart).apply(this, arguments));
  }

  _createClass(SectionTopPart, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          header = _this$props.header,
          _onChange = _this$props.onChange;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "widget-right__section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "widget-right__config-title"
      }, __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.top.title')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["d" /* TextInput */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.top.online'),
        value: header.time,
        onChange: function onChange(e) {
          return _onChange(e.target.value, 'header', 'time');
        },
        required: true,
        table: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["a" /* CheckBox */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.top.mobile'),
        checked: header.mobile,
        onChange: function onChange(e) {
          return _onChange(e.target.checked, 'header', 'mobile');
        },
        table: true
      }));
    }
  }]);

  return SectionTopPart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SectionTopPart);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_card_flip__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SectionContent =
/*#__PURE__*/
function (_Component) {
  _inherits(SectionContent, _Component);

  function SectionContent(props) {
    var _this;

    _classCallCheck(this, SectionContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SectionContent).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAddSection", function () {
      var addwidgetContent = _this.props.addwidgetContent;

      _this.showFront();

      addwidgetContent('separator');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showBack", function () {
      _this.setState({
        isFlipped: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showFront", function () {
      _this.setState({
        isFlipped: false
      });
    });

    _this.state = {
      isFlipped: false
    };
    _this.front = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.back = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.section = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    return _this;
  }

  _createClass(SectionContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var frontHeight = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.front.current).offsetHeight;
      var backHeight = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.back.current).offsetHeight;
      var section = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.section.current);
      var height = frontHeight > backHeight ? frontHeight : backHeight;
      section.style.height = "".concat(height + 5, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          _onChange = _this$props.onChange;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: this.section,
        style: {
          'height': '101px'
        },
        className: "widget-right__section-border-top widget-right__section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_card_flip___default.a, {
        isFlipped: this.state.isFlipped
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: "front",
        ref: this.front
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "widget-right__config-title"
      }, __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.content.title')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["d" /* TextInput */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.content.height'),
        value: content.height,
        onChange: function onChange(e) {
          return _onChange(e.target.value, 'content', 'height');
        },
        type: "number",
        required: true,
        table: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["c" /* SettingButton */], {
        content: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.content.separator'),
        full: true,
        handleClick: this.showBack
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: "back",
        ref: this.back
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "widget-right__config-title"
      }, __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.content.separator')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["d" /* TextInput */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.content.separator.label'),
        placeholder: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.content.separator.placeholder'),
        value: content.separatorText,
        onChange: function onChange(e) {
          return _onChange(e.target.value, 'content', 'separatorText');
        },
        required: true,
        table: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["c" /* SettingButton */], {
        content: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('cancel'),
        handleClick: this.showFront,
        distance: true,
        ligth: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["c" /* SettingButton */], {
        content: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('add'),
        handleClick: this.handleAddSection,
        distance: true
      }))));
    }
  }]);

  return SectionContent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SectionContent);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_card_flip__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SectionInterlocutor =
/*#__PURE__*/
function (_Component) {
  _inherits(SectionInterlocutor, _Component);

  function SectionInterlocutor(props) {
    var _this;

    _classCallCheck(this, SectionInterlocutor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SectionInterlocutor).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAddSection", function () {
      var addwidgetContent = _this.props.addwidgetContent;

      _this.showFront();

      addwidgetContent('companion');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showBack", function () {
      _this.setState({
        isFlipped: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showFront", function () {
      _this.setState({
        isFlipped: false
      });
    });

    _this.state = {
      isFlipped: false
    };
    _this.front = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.back = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.section = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    return _this;
  }

  _createClass(SectionInterlocutor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var frontHeight = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.front.current).offsetHeight;
      var backHeight = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.back.current).offsetHeight;
      var section = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.section.current);
      var height = frontHeight > backHeight ? frontHeight : backHeight;
      section.style.height = "".concat(height + 5, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          companion = _this$props.companion,
          temp = _this$props.temp,
          _onChange = _this$props.onChange,
          onChangeImage = _this$props.onChangeImage;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: this.section,
        style: {
          'height': '175px'
        },
        className: "widget-right__section-border-top widget-right__section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_card_flip___default.a, {
        isFlipped: this.state.isFlipped
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: "front",
        ref: this.front
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "widget-right__config-title"
      }, __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.companion.title')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["d" /* TextInput */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.companion.fullName'),
        value: companion.name,
        onChange: function onChange(e) {
          return _onChange(e.target.value, 'companion', 'name');
        },
        required: true,
        table: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["f" /* UserImageSelect */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.companion.avatar'),
        imgUrl: companion.image,
        imgTemp: temp.companionImg,
        tempKey: "companion",
        onChange: _onChange,
        onChangeImage: onChangeImage
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["c" /* SettingButton */], {
        content: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.companion.message'),
        full: true,
        handleClick: this.showBack
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: "back",
        ref: this.back
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "widget-right__config-title"
      }, __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.companion.msg.title')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["d" /* TextInput */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.msgTime.label'),
        placeholder: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.msgTime.placeholder'),
        value: companion.msgTime,
        onChange: function onChange(e) {
          return _onChange(e.target.value, 'companion', 'msgTime');
        },
        required: true,
        table: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["b" /* MessageBox */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.msg.label'),
        placeholder: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('content.writeMessage'),
        value: companion.message,
        onChange: function onChange(e) {
          return _onChange(e.target.value, 'companion', 'message');
        },
        required: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["c" /* SettingButton */], {
        content: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('cancel'),
        handleClick: this.showFront,
        distance: true,
        ligth: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["c" /* SettingButton */], {
        content: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('add'),
        handleClick: this.handleAddSection,
        distance: true
      }))));
    }
  }]);

  return SectionInterlocutor;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SectionInterlocutor);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(21);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var SectionSections =
/*#__PURE__*/
function (_Component) {
  _inherits(SectionSections, _Component);

  function SectionSections() {
    _classCallCheck(this, SectionSections);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionSections).apply(this, arguments));
  }

  _createClass(SectionSections, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          components = _this$props.components,
          _onChange = _this$props.onChange;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "widget-right__section widget-right__section-border-top"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "widget-right__config-title"
      }, __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.sections.title')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["a" /* CheckBox */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.sections.top'),
        checked: components.header,
        onChange: function onChange(e) {
          return _onChange(e.target.checked, 'components', 'header');
        },
        table: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["a" /* CheckBox */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.sections.bottom'),
        checked: components.footer,
        onChange: function onChange(e) {
          return _onChange(e.target.checked, 'components', 'footer');
        },
        table: true
      }));
    }
  }]);

  return SectionSections;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SectionSections);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_card_flip__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SectionCurrentUser =
/*#__PURE__*/
function (_Component) {
  _inherits(SectionCurrentUser, _Component);

  function SectionCurrentUser(props) {
    var _this;

    _classCallCheck(this, SectionCurrentUser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SectionCurrentUser).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAddSection", function () {
      var addwidgetContent = _this.props.addwidgetContent;

      _this.showFront();

      addwidgetContent('current');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showBack", function () {
      _this.setState({
        isFlipped: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showFront", function () {
      _this.setState({
        isFlipped: false
      });
    });

    _this.state = {
      isFlipped: false
    };
    _this.front = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.back = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.section = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    return _this;
  }

  _createClass(SectionCurrentUser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var frontHeight = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.front.current).offsetHeight;
      var backHeight = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.back.current).offsetHeight;
      var section = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.section.current);
      var height = frontHeight > backHeight ? frontHeight : backHeight;
      section.style.height = "".concat(height + 5, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          current = _this$props.current,
          temp = _this$props.temp,
          _onChange = _this$props.onChange,
          onChangeImage = _this$props.onChangeImage;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: this.section,
        style: {
          'height': '175px'
        },
        className: "widget-right__section-border-top widget-right__section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_card_flip___default.a, {
        isFlipped: this.state.isFlipped
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: "front",
        ref: this.front
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "widget-right__config-title"
      }, __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.current.title')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["d" /* TextInput */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.current.fullName'),
        value: current.name,
        onChange: function onChange(e) {
          return _onChange(e.target.value, 'current', 'name');
        },
        required: true,
        table: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["f" /* UserImageSelect */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.current.avatar'),
        imgUrl: current.image,
        imgTemp: temp.currentImg,
        tempKey: "current",
        onChange: _onChange,
        onChangeImage: onChangeImage
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["c" /* SettingButton */], {
        content: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.current.message'),
        full: true,
        handleClick: this.showBack
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: "back",
        ref: this.back
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "widget-right__config-title"
      }, __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.current.msg.title')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["d" /* TextInput */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.msgTime.label'),
        placeholder: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.msgTime.placeholder'),
        value: current.msgTime,
        onChange: function onChange(e) {
          return _onChange(e.target.value, 'current', 'msgTime');
        },
        required: true,
        table: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["b" /* MessageBox */], {
        label: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('config.msg.label'),
        placeholder: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('content.writeMessage'),
        value: current.message,
        onChange: function onChange(e) {
          return _onChange(e.target.value, 'current', 'message');
        },
        required: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["c" /* SettingButton */], {
        content: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('cancel'),
        handleClick: this.showFront,
        distance: true,
        ligth: true
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__mini__["c" /* SettingButton */], {
        content: __WEBPACK_IMPORTED_MODULE_3__classes_Language__["a" /* default */].take('add'),
        handleClick: this.handleAddSection,
        distance: true
      }))));
    }
  }]);

  return SectionCurrentUser;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SectionCurrentUser);

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _CanvasRenderer = __webpack_require__(141);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _Logger = __webpack_require__(142);

var _Logger2 = _interopRequireDefault(_Logger);

var _Window = __webpack_require__(171);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html2canvas = function html2canvas(element, conf) {
    var config = conf || {};
    var logger = new _Logger2.default(typeof config.logging === 'boolean' ? config.logging : true);
    logger.log('html2canvas ' + "$npm_package_version");

    if (process.env.NODE_ENV !== 'production' && typeof config.onrendered === 'function') {
        logger.error('onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value');
    }

    var ownerDocument = element.ownerDocument;
    if (!ownerDocument) {
        return Promise.reject('Provided element is not within a Document');
    }
    var defaultView = ownerDocument.defaultView;

    var defaultOptions = {
        async: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        logging: true,
        proxy: null,
        removeContainer: true,
        foreignObjectRendering: false,
        scale: defaultView.devicePixelRatio || 1,
        target: new _CanvasRenderer2.default(config.canvas),
        useCORS: false,
        windowWidth: defaultView.innerWidth,
        windowHeight: defaultView.innerHeight,
        scrollX: defaultView.pageXOffset,
        scrollY: defaultView.pageYOffset
    };

    var result = (0, _Window.renderElement)(element, _extends({}, defaultOptions, config), logger);

    if (process.env.NODE_ENV !== 'production') {
        return result.catch(function (e) {
            logger.error(e);
            throw e;
        });
    }
    return result;
};

html2canvas.CanvasRenderer = _CanvasRenderer2.default;

module.exports = html2canvas;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderElement = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Logger = __webpack_require__(142);

var _Logger2 = _interopRequireDefault(_Logger);

var _NodeParser = __webpack_require__(172);

var _Renderer = __webpack_require__(194);

var _Renderer2 = _interopRequireDefault(_Renderer);

var _ForeignObjectRenderer = __webpack_require__(149);

var _ForeignObjectRenderer2 = _interopRequireDefault(_ForeignObjectRenderer);

var _Feature = __webpack_require__(133);

var _Feature2 = _interopRequireDefault(_Feature);

var _Bounds = __webpack_require__(125);

var _Clone = __webpack_require__(197);

var _Font = __webpack_require__(151);

var _Color = __webpack_require__(123);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderElement = exports.renderElement = function renderElement(element, options, logger) {
    var ownerDocument = element.ownerDocument;

    var windowBounds = new _Bounds.Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);

    // http://www.w3.org/TR/css3-background/#special-backgrounds
    var documentBackgroundColor = ownerDocument.documentElement ? new _Color2.default(getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color.TRANSPARENT;
    var bodyBackgroundColor = ownerDocument.body ? new _Color2.default(getComputedStyle(ownerDocument.body).backgroundColor) : _Color.TRANSPARENT;

    var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color2.default(options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color2.default(options.backgroundColor) : null;

    return (options.foreignObjectRendering ? // $FlowFixMe
    _Feature2.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {
        return supportForeignObject ? function (cloner) {
            if (process.env.NODE_ENV !== 'production') {
                logger.log('Document cloned, using foreignObject rendering');
            }

            return cloner.inlineFonts(ownerDocument).then(function () {
                return cloner.resourceLoader.ready();
            }).then(function () {
                var renderer = new _ForeignObjectRenderer2.default(cloner.documentElement);

                var defaultView = ownerDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = element.tagName === 'HTML' || element.tagName === 'BODY';

                var _ref = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(element, scrollX, scrollY),
                    width = _ref.width,
                    height = _ref.height,
                    left = _ref.left,
                    top = _ref.top;

                return renderer.render({
                    backgroundColor: backgroundColor,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height),
                    windowWidth: options.windowWidth,
                    windowHeight: options.windowHeight,
                    scrollX: options.scrollX,
                    scrollY: options.scrollY
                });
            });
        }(new _Clone.DocumentCloner(element, options, logger, true, renderElement)) : (0, _Clone.cloneWindow)(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 3),
                container = _ref3[0],
                clonedElement = _ref3[1],
                resourceLoader = _ref3[2];

            if (process.env.NODE_ENV !== 'production') {
                logger.log('Document cloned, using computed rendering');
            }

            var stack = (0, _NodeParser.NodeParser)(clonedElement, resourceLoader, logger);
            var clonedDocument = clonedElement.ownerDocument;

            if (backgroundColor === stack.container.style.background.backgroundColor) {
                stack.container.style.background.backgroundColor = _Color.TRANSPARENT;
            }

            return resourceLoader.ready().then(function (imageStore) {
                var fontMetrics = new _Font.FontMetrics(clonedDocument);
                if (process.env.NODE_ENV !== 'production') {
                    logger.log('Starting renderer');
                }

                var defaultView = clonedDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = clonedElement.tagName === 'HTML' || clonedElement.tagName === 'BODY';

                var _ref4 = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(clonedElement, scrollX, scrollY),
                    width = _ref4.width,
                    height = _ref4.height,
                    left = _ref4.left,
                    top = _ref4.top;

                var renderOptions = {
                    backgroundColor: backgroundColor,
                    fontMetrics: fontMetrics,
                    imageStore: imageStore,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height)
                };

                if (Array.isArray(options.target)) {
                    return Promise.all(options.target.map(function (target) {
                        var renderer = new _Renderer2.default(target, renderOptions);
                        return renderer.render(stack);
                    }));
                } else {
                    var renderer = new _Renderer2.default(options.target, renderOptions);
                    var canvas = renderer.render(stack);
                    if (options.removeContainer === true) {
                        if (container.parentNode) {
                            container.parentNode.removeChild(container);
                        } else if (process.env.NODE_ENV !== 'production') {
                            logger.log('Cannot detach cloned iframe as it is not in the DOM anymore');
                        }
                    }

                    return canvas;
                }
            });
        });
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeParser = undefined;

var _StackingContext = __webpack_require__(173);

var _StackingContext2 = _interopRequireDefault(_StackingContext);

var _NodeContainer = __webpack_require__(126);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(132);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _Input = __webpack_require__(147);

var _ListItem = __webpack_require__(138);

var _listStyle = __webpack_require__(131);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeParser = exports.NodeParser = function NodeParser(node, resourceLoader, logger) {
    if (process.env.NODE_ENV !== 'production') {
        logger.log('Starting node parsing');
    }

    var index = 0;

    var container = new _NodeContainer2.default(node, null, resourceLoader, index++);
    var stack = new _StackingContext2.default(container, null, true);

    parseNodeTree(node, container, stack, resourceLoader, index);

    if (process.env.NODE_ENV !== 'production') {
        logger.log('Finished parsing node tree');
    }

    return stack;
};

var IGNORED_NODE_NAMES = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'];

var parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {
    if (process.env.NODE_ENV !== 'production' && index > 50000) {
        throw new Error('Recursion error while parsing node tree');
    }

    for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {
        nextNode = childNode.nextSibling;
        var defaultView = childNode.ownerDocument.defaultView;
        if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {
            if (childNode.data.trim().length > 0) {
                parent.childNodes.push(_TextContainer2.default.fromTextNode(childNode, parent));
            }
        } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {
            if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {
                var container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                if (container.isVisible()) {
                    if (childNode.tagName === 'INPUT') {
                        // $FlowFixMe
                        (0, _Input.inlineInputElement)(childNode, container);
                    } else if (childNode.tagName === 'TEXTAREA') {
                        // $FlowFixMe
                        (0, _Input.inlineTextAreaElement)(childNode, container);
                    } else if (childNode.tagName === 'SELECT') {
                        // $FlowFixMe
                        (0, _Input.inlineSelectElement)(childNode, container);
                    } else if (container.style.listStyle && container.style.listStyle.listStyleType !== _listStyle.LIST_STYLE_TYPE.NONE) {
                        (0, _ListItem.inlineListItemElement)(childNode, container, resourceLoader);
                    }

                    var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== 'TEXTAREA';
                    var treatAsRealStackingContext = createsRealStackingContext(container, childNode);
                    if (treatAsRealStackingContext || createsStackingContext(container)) {
                        // for treatAsRealStackingContext:false, any positioned descendants and descendants
                        // which actually create a new stacking context should be considered part of the parent stacking context
                        var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                        var childStack = new _StackingContext2.default(container, parentStack, treatAsRealStackingContext);
                        parentStack.contexts.push(childStack);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, childStack, resourceLoader, index);
                        }
                    } else {
                        stack.children.push(container);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, stack, resourceLoader, index);
                        }
                    }
                }
            }
        } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {
            var _container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
            var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);
            if (_treatAsRealStackingContext || createsStackingContext(_container)) {
                // for treatAsRealStackingContext:false, any positioned descendants and descendants
                // which actually create a new stacking context should be considered part of the parent stacking context
                var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                var _childStack = new _StackingContext2.default(_container, _parentStack, _treatAsRealStackingContext);
                _parentStack.contexts.push(_childStack);
            } else {
                stack.children.push(_container);
            }
        }
    }
};

var createsRealStackingContext = function createsRealStackingContext(container, node) {
    return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);
};

var createsStackingContext = function createsStackingContext(container) {
    return container.isPositioned() || container.isFloating();
};

var isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {
    return node.nodeName === 'BODY' && container.parent instanceof _NodeContainer2.default && container.parent.style.background.backgroundColor.isTransparent();
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(126);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _position = __webpack_require__(145);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StackingContext = function () {
    function StackingContext(container, parent, treatAsRealStackingContext) {
        _classCallCheck(this, StackingContext);

        this.container = container;
        this.parent = parent;
        this.contexts = [];
        this.children = [];
        this.treatAsRealStackingContext = treatAsRealStackingContext;
    }

    _createClass(StackingContext, [{
        key: 'getOpacity',
        value: function getOpacity() {
            return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;
        }
    }, {
        key: 'getRealParentStackingContext',
        value: function getRealParentStackingContext() {
            return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();
        }
    }]);

    return StackingContext;
}();

exports.default = StackingContext;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Size = function Size(width, height) {
    _classCallCheck(this, Size);

    this.width = width;
    this.height = height;
};

exports.default = Size;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(129);

var _Vector = __webpack_require__(130);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lerp = function lerp(a, b, t) {
    return new _Vector2.default(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
};

var BezierCurve = function () {
    function BezierCurve(start, startControl, endControl, end) {
        _classCallCheck(this, BezierCurve);

        this.type = _Path.PATH.BEZIER_CURVE;
        this.start = start;
        this.startControl = startControl;
        this.endControl = endControl;
        this.end = end;
    }

    _createClass(BezierCurve, [{
        key: 'subdivide',
        value: function subdivide(t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        }
    }]);

    return BezierCurve;
}();

exports.default = BezierCurve;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorderRadius = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Length = __webpack_require__(124);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

var parseBorderRadius = exports.parseBorderRadius = function parseBorderRadius(style) {
    return SIDES.map(function (side) {
        var value = style.getPropertyValue('border-' + side + '-radius');

        var _value$split$map = value.split(' ').map(_Length2.default.create),
            _value$split$map2 = _slicedToArray(_value$split$map, 2),
            horizontal = _value$split$map2[0],
            vertical = _value$split$map2[1];

        return typeof vertical === 'undefined' ? [horizontal, horizontal] : [horizontal, vertical];
    });
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var DISPLAY = exports.DISPLAY = {
    NONE: 1 << 0,
    BLOCK: 1 << 1,
    INLINE: 1 << 2,
    RUN_IN: 1 << 3,
    FLOW: 1 << 4,
    FLOW_ROOT: 1 << 5,
    TABLE: 1 << 6,
    FLEX: 1 << 7,
    GRID: 1 << 8,
    RUBY: 1 << 9,
    SUBGRID: 1 << 10,
    LIST_ITEM: 1 << 11,
    TABLE_ROW_GROUP: 1 << 12,
    TABLE_HEADER_GROUP: 1 << 13,
    TABLE_FOOTER_GROUP: 1 << 14,
    TABLE_ROW: 1 << 15,
    TABLE_CELL: 1 << 16,
    TABLE_COLUMN_GROUP: 1 << 17,
    TABLE_COLUMN: 1 << 18,
    TABLE_CAPTION: 1 << 19,
    RUBY_BASE: 1 << 20,
    RUBY_TEXT: 1 << 21,
    RUBY_BASE_CONTAINER: 1 << 22,
    RUBY_TEXT_CONTAINER: 1 << 23,
    CONTENTS: 1 << 24,
    INLINE_BLOCK: 1 << 25,
    INLINE_LIST_ITEM: 1 << 26,
    INLINE_TABLE: 1 << 27,
    INLINE_FLEX: 1 << 28,
    INLINE_GRID: 1 << 29
};

var parseDisplayValue = function parseDisplayValue(display) {
    switch (display) {
        case 'block':
            return DISPLAY.BLOCK;
        case 'inline':
            return DISPLAY.INLINE;
        case 'run-in':
            return DISPLAY.RUN_IN;
        case 'flow':
            return DISPLAY.FLOW;
        case 'flow-root':
            return DISPLAY.FLOW_ROOT;
        case 'table':
            return DISPLAY.TABLE;
        case 'flex':
            return DISPLAY.FLEX;
        case 'grid':
            return DISPLAY.GRID;
        case 'ruby':
            return DISPLAY.RUBY;
        case 'subgrid':
            return DISPLAY.SUBGRID;
        case 'list-item':
            return DISPLAY.LIST_ITEM;
        case 'table-row-group':
            return DISPLAY.TABLE_ROW_GROUP;
        case 'table-header-group':
            return DISPLAY.TABLE_HEADER_GROUP;
        case 'table-footer-group':
            return DISPLAY.TABLE_FOOTER_GROUP;
        case 'table-row':
            return DISPLAY.TABLE_ROW;
        case 'table-cell':
            return DISPLAY.TABLE_CELL;
        case 'table-column-group':
            return DISPLAY.TABLE_COLUMN_GROUP;
        case 'table-column':
            return DISPLAY.TABLE_COLUMN;
        case 'table-caption':
            return DISPLAY.TABLE_CAPTION;
        case 'ruby-base':
            return DISPLAY.RUBY_BASE;
        case 'ruby-text':
            return DISPLAY.RUBY_TEXT;
        case 'ruby-base-container':
            return DISPLAY.RUBY_BASE_CONTAINER;
        case 'ruby-text-container':
            return DISPLAY.RUBY_TEXT_CONTAINER;
        case 'contents':
            return DISPLAY.CONTENTS;
        case 'inline-block':
            return DISPLAY.INLINE_BLOCK;
        case 'inline-list-item':
            return DISPLAY.INLINE_LIST_ITEM;
        case 'inline-table':
            return DISPLAY.INLINE_TABLE;
        case 'inline-flex':
            return DISPLAY.INLINE_FLEX;
        case 'inline-grid':
            return DISPLAY.INLINE_GRID;
    }

    return DISPLAY.NONE;
};

var setDisplayBit = function setDisplayBit(bit, display) {
    return bit | parseDisplayValue(display);
};

var parseDisplay = exports.parseDisplay = function parseDisplay(display) {
    return display.split(' ').reduce(setDisplayBit, 0);
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FLOAT = exports.FLOAT = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    INLINE_START: 3,
    INLINE_END: 4
};

var parseCSSFloat = exports.parseCSSFloat = function parseCSSFloat(float) {
    switch (float) {
        case 'left':
            return FLOAT.LEFT;
        case 'right':
            return FLOAT.RIGHT;
        case 'inline-start':
            return FLOAT.INLINE_START;
        case 'inline-end':
            return FLOAT.INLINE_END;
    }
    return FLOAT.NONE;
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var parseFontWeight = function parseFontWeight(weight) {
    switch (weight) {
        case 'normal':
            return 400;
        case 'bold':
            return 700;
    }

    var value = parseInt(weight, 10);
    return isNaN(value) ? 400 : value;
};

var parseFont = exports.parseFont = function parseFont(style) {
    var fontFamily = style.fontFamily;
    var fontSize = style.fontSize;
    var fontStyle = style.fontStyle;
    var fontVariant = style.fontVariant;
    var fontWeight = parseFontWeight(style.fontWeight);

    return {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontVariant: fontVariant,
        fontWeight: fontWeight
    };
};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseLetterSpacing = exports.parseLetterSpacing = function parseLetterSpacing(letterSpacing) {
    if (letterSpacing === 'normal') {
        return 0;
    }
    var value = parseFloat(letterSpacing);
    return isNaN(value) ? 0 : value;
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var LINE_BREAK = exports.LINE_BREAK = {
    NORMAL: 'normal',
    STRICT: 'strict'
};

var parseLineBreak = exports.parseLineBreak = function parseLineBreak(wordBreak) {
    switch (wordBreak) {
        case 'strict':
            return LINE_BREAK.STRICT;
        case 'normal':
        default:
            return LINE_BREAK.NORMAL;
    }
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseMargin = undefined;

var _Length = __webpack_require__(124);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top', 'right', 'bottom', 'left'];

var parseMargin = exports.parseMargin = function parseMargin(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('margin-' + side));
    });
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW = exports.OVERFLOW = {
    VISIBLE: 0,
    HIDDEN: 1,
    SCROLL: 2,
    AUTO: 3
};

var parseOverflow = exports.parseOverflow = function parseOverflow(overflow) {
    switch (overflow) {
        case 'hidden':
            return OVERFLOW.HIDDEN;
        case 'scroll':
            return OVERFLOW.SCROLL;
        case 'auto':
            return OVERFLOW.AUTO;
        case 'visible':
        default:
            return OVERFLOW.VISIBLE;
    }
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextShadow = undefined;

var _Color = __webpack_require__(123);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = /^([+-]|\d|\.)$/i;

var parseTextShadow = exports.parseTextShadow = function parseTextShadow(textShadow) {
    if (textShadow === 'none' || typeof textShadow !== 'string') {
        return null;
    }

    var currentValue = '';
    var isLength = false;
    var values = [];
    var shadows = [];
    var numParens = 0;
    var color = null;

    var appendValue = function appendValue() {
        if (currentValue.length) {
            if (isLength) {
                values.push(parseFloat(currentValue));
            } else {
                color = new _Color2.default(currentValue);
            }
        }
        isLength = false;
        currentValue = '';
    };

    var appendShadow = function appendShadow() {
        if (values.length && color !== null) {
            shadows.push({
                color: color,
                offsetX: values[0] || 0,
                offsetY: values[1] || 0,
                blur: values[2] || 0
            });
        }
        values.splice(0, values.length);
        color = null;
    };

    for (var i = 0; i < textShadow.length; i++) {
        var c = textShadow[i];
        switch (c) {
            case '(':
                currentValue += c;
                numParens++;
                break;
            case ')':
                currentValue += c;
                numParens--;
                break;
            case ',':
                if (numParens === 0) {
                    appendValue();
                    appendShadow();
                } else {
                    currentValue += c;
                }
                break;
            case ' ':
                if (numParens === 0) {
                    appendValue();
                } else {
                    currentValue += c;
                }
                break;
            default:
                if (currentValue.length === 0 && NUMBER.test(c)) {
                    isLength = true;
                }
                currentValue += c;
        }
    }

    appendValue();
    appendShadow();

    if (shadows.length === 0) {
        return null;
    }

    return shadows;
};

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTransform = undefined;

var _Length = __webpack_require__(124);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toFloat = function toFloat(s) {
    return parseFloat(s.trim());
};

var MATRIX = /(matrix|matrix3d)\((.+)\)/;

var parseTransform = exports.parseTransform = function parseTransform(style) {
    var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform ||
    // $FlowFixMe
    style.msTransform ||
    // $FlowFixMe
    style.oTransform);
    if (transform === null) {
        return null;
    }

    return {
        transform: transform,
        transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin ||
        // $FlowFixMe
        style.msTransformOrigin ||
        // $FlowFixMe
        style.oTransformOrigin)
    };
};

// $FlowFixMe
var parseTransformOrigin = function parseTransformOrigin(origin) {
    if (typeof origin !== 'string') {
        var v = new _Length2.default('0');
        return [v, v];
    }
    var values = origin.split(' ').map(_Length2.default.create);
    return [values[0], values[1]];
};

// $FlowFixMe
var parseTransformMatrix = function parseTransformMatrix(transform) {
    if (transform === 'none' || typeof transform !== 'string') {
        return null;
    }

    var match = transform.match(MATRIX);
    if (match) {
        if (match[1] === 'matrix') {
            var matrix = match[2].split(',').map(toFloat);
            return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];
        } else {
            var matrix3d = match[2].split(',').map(toFloat);
            return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
        }
    }
    return null;
};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var VISIBILITY = exports.VISIBILITY = {
    VISIBLE: 0,
    HIDDEN: 1,
    COLLAPSE: 2
};

var parseVisibility = exports.parseVisibility = function parseVisibility(visibility) {
    switch (visibility) {
        case 'hidden':
            return VISIBILITY.HIDDEN;
        case 'collapse':
            return VISIBILITY.COLLAPSE;
        case 'visible':
        default:
            return VISIBILITY.VISIBLE;
    }
};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WORD_BREAK = exports.WORD_BREAK = {
    NORMAL: 'normal',
    BREAK_ALL: 'break-all',
    KEEP_ALL: 'keep-all'
};

var parseWordBreak = exports.parseWordBreak = function parseWordBreak(wordBreak) {
    switch (wordBreak) {
        case 'break-all':
            return WORD_BREAK.BREAK_ALL;
        case 'keep-all':
            return WORD_BREAK.KEEP_ALL;
        case 'normal':
        default:
            return WORD_BREAK.NORMAL;
    }
};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseZIndex = exports.parseZIndex = function parseZIndex(zIndex) {
    var auto = zIndex === 'auto';
    return {
        auto: auto,
        order: auto ? 0 : parseInt(zIndex, 10)
    };
};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(137);

Object.defineProperty(exports, 'toCodePoints', {
  enumerable: true,
  get: function get() {
    return _Util.toCodePoints;
  }
});
Object.defineProperty(exports, 'fromCodePoint', {
  enumerable: true,
  get: function get() {
    return _Util.fromCodePoint;
  }
});

var _LineBreak = __webpack_require__(190);

Object.defineProperty(exports, 'LineBreaker', {
  enumerable: true,
  get: function get() {
    return _LineBreak.LineBreaker;
  }
});

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Trie = __webpack_require__(191);

var _linebreakTrie = __webpack_require__(192);

var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);

var _Util = __webpack_require__(137);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;

// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var SG = 6; //  Do not occur in well-formed text
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

var classes = exports.classes = {
    BK: BK,
    CR: CR,
    LF: LF,
    CM: CM,
    NL: NL,
    SG: SG,
    WJ: WJ,
    ZW: ZW,
    GL: GL,
    SP: SP,
    ZWJ: ZWJ,
    B2: B2,
    BA: BA,
    BB: BB,
    HY: HY,
    CB: CB,
    CL: CL,
    CP: CP,
    EX: EX,
    IN: IN,
    NS: NS,
    OP: OP,
    QU: QU,
    IS: IS,
    NU: NU,
    PO: PO,
    PR: PR,
    SY: SY,
    AI: AI,
    AL: AL,
    CJ: CJ,
    EB: EB,
    EM: EM,
    H2: H2,
    H3: H3,
    HL: HL,
    ID: ID,
    JL: JL,
    JV: JV,
    JT: JT,
    RI: RI,
    SA: SA,
    XX: XX
};

var BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';
var UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);

var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR, LF, NL];
var SPACE = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];

var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';

    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        } else {
            categories.push(false);
        }

        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indicies.push(index);
                return types.push(CB);
            }
        }

        if (classType === CM || classType === ZWJ) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indicies.push(index);
                return types.push(AL);
            }

            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indicies.push(indicies[index - 1]);
                return types.push(prev);
            }
            indicies.push(index);
            return types.push(AL);
        }

        indicies.push(index);

        if (classType === CJ) {
            return types.push(lineBreak === 'strict' ? NS : ID);
        }

        if (classType === SA) {
            return types.push(AL);
        }

        if (classType === AI) {
            return types.push(AL);
        }

        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                return types.push(ID);
            } else {
                return types.push(AL);
            }
        }

        types.push(classType);
    });

    return [indicies, types, categories];
};

var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while (i <= classTypes.length) {
            i++;
            var next = classTypes[i];

            if (next === b) {
                return true;
            }

            if (next !== SP) {
                break;
            }
        }
    }

    if (current === SP) {
        var _i = currentIndex;

        while (_i > 0) {
            _i--;
            var prev = classTypes[_i];

            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var _next = classTypes[n];

                    if (_next === b) {
                        return true;
                    }

                    if (_next !== SP) {
                        break;
                    }
                }
            }

            if (prev !== SP) {
                break;
            }
        }
    }
    return false;
};

var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        } else {
            return type;
        }
    }
    return 0;
};

var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
        return BREAK_NOT_ALLOWED;
    }

    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
        return BREAK_NOT_ALLOWED;
    }

    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];

    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];

    if (current === CR && next === LF) {
        return BREAK_NOT_ALLOWED;
    }

    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
        return BREAK_MANDATORY;
    }

    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB7 Do not break before spaces or zero width space.
    if (SPACE.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
        return BREAK_ALLOWED;
    }

    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB18 Break after spaces.
    if (current === SP) {
        return BREAK_ALLOWED;
    }

    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
        return BREAK_ALLOWED;
    }

    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23 Do not break between digits and letters.
    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
        return BREAK_NOT_ALLOWED;
    }

    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
    // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU ||
    // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            } else {
                break;
            }
        }
    }

    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (_prevIndex >= 0) {
            var _type = classTypes[_prevIndex];
            if (_type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(_type) !== -1) {
                _prevIndex--;
            } else {
                break;
            }
        }
    }

    // LB26 Do not break a Korean syllable.
    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
        return BREAK_NOT_ALLOWED;
    }

    // LB27 Treat a Korean Syllable Block the same as ID.
    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
        return BREAK_NOT_ALLOWED;
    }

    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI && next === RI) {
        var i = indicies[currentIndex];
        var count = 1;
        while (i > 0) {
            i--;
            if (classTypes[i] === RI) {
                count++;
            } else {
                break;
            }
        }
        if (count % 2 !== 0) {
            return BREAK_NOT_ALLOWED;
        }
    }

    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
        return BREAK_NOT_ALLOWED;
    }

    return BREAK_ALLOWED;
};

var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
    // LB2 Never break at the start of text.
    if (index === 0) {
        return BREAK_NOT_ALLOWED;
    }

    // LB3 Always break at the end of text.
    if (index >= codePoints.length) {
        return BREAK_MANDATORY;
    }

    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),
        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),
        indicies = _codePointsToCharacte2[0],
        classTypes = _codePointsToCharacte2[1];

    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
};

var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }

    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),
        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),
        indicies = _codePointsToCharacte4[0],
        classTypes = _codePointsToCharacte4[1],
        isLetterNumber = _codePointsToCharacte4[2];

    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) {
            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
        });
    }

    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {
        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : null;

    return [indicies, classTypes, forbiddenBreakpoints];
};

var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);
    var output = BREAK_NOT_ALLOWED;

    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),
        indicies = _cssFormattedClasses2[0],
        classTypes = _cssFormattedClasses2[1],
        forbiddenBreakpoints = _cssFormattedClasses2[2];

    codePoints.forEach(function (codePoint, i) {
        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
    });

    return output;
};

var Break = function () {
    function Break(codePoints, lineBreak, start, end) {
        _classCallCheck(this, Break);

        this._codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }

    _createClass(Break, [{
        key: 'slice',
        value: function slice() {
            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
        }
    }]);

    return Break;
}();

var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);

    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),
        indicies = _cssFormattedClasses4[0],
        classTypes = _cssFormattedClasses4[1],
        forbiddenBreakpoints = _cssFormattedClasses4[2];

    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;

    return {
        next: function next() {
            if (nextIndex >= length) {
                return { done: true };
            }
            var lineBreak = BREAK_NOT_ALLOWED;
            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}

            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }

            return { done: true };
        }
    };
};

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(137);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;

/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;

/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;

/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;

/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;

/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;

var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;

/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;

/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
    var buffer = (0, _Util.decode)(base64);
    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);
    var headerLength = 24;

    var index = view16.slice(headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));

    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};

var Trie = exports.Trie = function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        _classCallCheck(this, Trie);

        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }

    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */


    _createClass(Trie, [{
        key: 'get',
        value: function get(codePoint) {
            var ix = void 0;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }

            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        }
    }]);

    return Trie;
}();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(129);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function Circle(x, y, radius) {
    _classCallCheck(this, Circle);

    this.type = _Path.PATH.CIRCLE;
    this.x = x;
    this.y = y;
    this.radius = radius;
    if (process.env.NODE_ENV !== 'production') {
        if (isNaN(x)) {
            console.error('Invalid x value given for Circle');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Circle');
        }
        if (isNaN(radius)) {
            console.error('Invalid radius value given for Circle');
        }
    }
};

exports.default = Circle;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(125);

var _Font = __webpack_require__(151);

var _Gradient = __webpack_require__(195);

var _TextContainer = __webpack_require__(132);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(128);

var _border = __webpack_require__(136);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
    function Renderer(target, options) {
        _classCallCheck(this, Renderer);

        this.target = target;
        this.options = options;
        target.render(options);
    }

    _createClass(Renderer, [{
        key: 'renderNode',
        value: function renderNode(container) {
            if (container.isVisible()) {
                this.renderNodeBackgroundAndBorders(container);
                this.renderNodeContent(container);
            }
        }
    }, {
        key: 'renderNodeContent',
        value: function renderNodeContent(container) {
            var _this = this;

            var callback = function callback() {
                if (container.childNodes.length) {
                    container.childNodes.forEach(function (child) {
                        if (child instanceof _TextContainer2.default) {
                            var style = child.parent.style;
                            _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);
                        } else {
                            _this.target.drawShape(child, container.style.color);
                        }
                    });
                }

                if (container.image) {
                    var _image = _this.options.imageStore.get(container.image);
                    if (_image) {
                        var contentBox = (0, _Bounds.calculateContentBox)(container.bounds, container.style.padding, container.style.border);
                        var _width = typeof _image.width === 'number' && _image.width > 0 ? _image.width : contentBox.width;
                        var _height = typeof _image.height === 'number' && _image.height > 0 ? _image.height : contentBox.height;
                        if (_width > 0 && _height > 0) {
                            _this.target.clip([(0, _Bounds.calculatePaddingBoxPath)(container.curvedBounds)], function () {
                                _this.target.drawImage(_image, new _Bounds.Bounds(0, 0, _width, _height), contentBox);
                            });
                        }
                    }
                }
            };
            var paths = container.getClipPaths();
            if (paths.length) {
                this.target.clip(paths, callback);
            } else {
                callback();
            }
        }
    }, {
        key: 'renderNodeBackgroundAndBorders',
        value: function renderNodeBackgroundAndBorders(container) {
            var _this2 = this;

            var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;

            var hasRenderableBorders = container.style.border.some(function (border) {
                return border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent();
            });

            var callback = function callback() {
                var backgroundPaintingArea = (0, _background.calculateBackgroungPaintingArea)(container.curvedBounds, container.style.background.backgroundClip);

                if (HAS_BACKGROUND) {
                    _this2.target.clip([backgroundPaintingArea], function () {
                        if (!container.style.background.backgroundColor.isTransparent()) {
                            _this2.target.fill(container.style.background.backgroundColor);
                        }

                        _this2.renderBackgroundImage(container);
                    });
                }

                container.style.border.forEach(function (border, side) {
                    if (border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent()) {
                        _this2.renderBorder(border, side, container.curvedBounds);
                    }
                });
            };

            if (HAS_BACKGROUND || hasRenderableBorders) {
                var paths = container.parent ? container.parent.getClipPaths() : [];
                if (paths.length) {
                    this.target.clip(paths, callback);
                } else {
                    callback();
                }
            }
        }
    }, {
        key: 'renderBackgroundImage',
        value: function renderBackgroundImage(container) {
            var _this3 = this;

            container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {
                if (backgroundImage.source.method === 'url' && backgroundImage.source.args.length) {
                    _this3.renderBackgroundRepeat(container, backgroundImage);
                } else if (/gradient/i.test(backgroundImage.source.method)) {
                    _this3.renderBackgroundGradient(container, backgroundImage);
                }
            });
        }
    }, {
        key: 'renderBackgroundRepeat',
        value: function renderBackgroundRepeat(container, background) {
            var image = this.options.imageStore.get(background.source.args[0]);
            if (image) {
                var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                var backgroundImageSize = (0, _background.calculateBackgroundSize)(background, image, backgroundPositioningArea);
                var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
                var _path = (0, _background.calculateBackgroundRepeatPath)(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);

                var _offsetX = Math.round(backgroundPositioningArea.left + position.x);
                var _offsetY = Math.round(backgroundPositioningArea.top + position.y);
                this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);
            }
        }
    }, {
        key: 'renderBackgroundGradient',
        value: function renderBackgroundGradient(container, background) {
            var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
            var backgroundImageSize = (0, _background.calculateGradientBackgroundSize)(background, backgroundPositioningArea);
            var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
            var gradientBounds = new _Bounds.Bounds(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);

            var gradient = (0, _Gradient.parseGradient)(container, background.source, gradientBounds);
            if (gradient) {
                switch (gradient.type) {
                    case _Gradient.GRADIENT_TYPE.LINEAR_GRADIENT:
                        // $FlowFixMe
                        this.target.renderLinearGradient(gradientBounds, gradient);
                        break;
                    case _Gradient.GRADIENT_TYPE.RADIAL_GRADIENT:
                        // $FlowFixMe
                        this.target.renderRadialGradient(gradientBounds, gradient);
                        break;
                }
            }
        }
    }, {
        key: 'renderBorder',
        value: function renderBorder(border, side, curvePoints) {
            this.target.drawShape((0, _Bounds.parsePathForBorder)(curvePoints, side), border.borderColor);
        }
    }, {
        key: 'renderStack',
        value: function renderStack(stack) {
            var _this4 = this;

            if (stack.container.isVisible()) {
                var _opacity = stack.getOpacity();
                if (_opacity !== this._opacity) {
                    this.target.setOpacity(stack.getOpacity());
                    this._opacity = _opacity;
                }

                var _transform = stack.container.style.transform;
                if (_transform !== null) {
                    this.target.transform(stack.container.bounds.left + _transform.transformOrigin[0].value, stack.container.bounds.top + _transform.transformOrigin[1].value, _transform.transform, function () {
                        return _this4.renderStackContent(stack);
                    });
                } else {
                    this.renderStackContent(stack);
                }
            }
        }
    }, {
        key: 'renderStackContent',
        value: function renderStackContent(stack) {
            var _splitStackingContext = splitStackingContexts(stack),
                _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),
                negativeZIndex = _splitStackingContext2[0],
                zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],
                positiveZIndex = _splitStackingContext2[2],
                nonPositionedFloats = _splitStackingContext2[3],
                nonPositionedInlineLevel = _splitStackingContext2[4];

            var _splitDescendants = splitDescendants(stack),
                _splitDescendants2 = _slicedToArray(_splitDescendants, 2),
                inlineLevel = _splitDescendants2[0],
                nonInlineLevel = _splitDescendants2[1];

            // https://www.w3.org/TR/css-position-3/#painting-order
            // 1. the background and borders of the element forming the stacking context.


            this.renderNodeBackgroundAndBorders(stack.container);
            // 2. the child stacking contexts with negative stack levels (most negative first).
            negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
            this.renderNodeContent(stack.container);
            nonInlineLevel.forEach(this.renderNode, this);
            // 4. All non-positioned floating descendants, in tree order. For each one of these,
            // treat the element as if it created a new stacking context, but any positioned descendants and descendants
            // which actually create a new stacking context should be considered part of the parent stacking context,
            // not this new one.
            nonPositionedFloats.forEach(this.renderStack, this);
            // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
            nonPositionedInlineLevel.forEach(this.renderStack, this);
            inlineLevel.forEach(this.renderNode, this);
            // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:
            //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.
            //  For those with 'z-index: auto', treat the element as if it created a new stacking context,
            //  but any positioned descendants and descendants which actually create a new stacking context should be
            //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',
            //  treat the stacking context generated atomically.
            //
            //  All opacity descendants with opacity less than 1
            //
            //  All transform descendants with transform other than none
            zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this);
            // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index
            // order (smallest first) then tree order.
            positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
        }
    }, {
        key: 'render',
        value: function render(stack) {
            var _this5 = this;

            if (this.options.backgroundColor) {
                this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);
            }
            this.renderStack(stack);
            var target = this.target.getTarget();
            if (process.env.NODE_ENV !== 'production') {
                return target.then(function (output) {
                    _this5.options.logger.log('Render completed');
                    return output;
                });
            }
            return target;
        }
    }]);

    return Renderer;
}();

exports.default = Renderer;


var splitDescendants = function splitDescendants(stack) {
    var inlineLevel = [];
    var nonInlineLevel = [];

    var length = stack.children.length;
    for (var i = 0; i < length; i++) {
        var child = stack.children[i];
        if (child.isInlineLevel()) {
            inlineLevel.push(child);
        } else {
            nonInlineLevel.push(child);
        }
    }
    return [inlineLevel, nonInlineLevel];
};

var splitStackingContexts = function splitStackingContexts(stack) {
    var negativeZIndex = [];
    var zeroOrAutoZIndexOrTransformedOrOpacity = [];
    var positiveZIndex = [];
    var nonPositionedFloats = [];
    var nonPositionedInlineLevel = [];
    var length = stack.contexts.length;
    for (var i = 0; i < length; i++) {
        var child = stack.contexts[i];
        if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {
            if (child.container.style.zIndex.order < 0) {
                negativeZIndex.push(child);
            } else if (child.container.style.zIndex.order > 0) {
                positiveZIndex.push(child);
            } else {
                zeroOrAutoZIndexOrTransformedOrOpacity.push(child);
            }
        } else {
            if (child.container.isFloating()) {
                nonPositionedFloats.push(child);
            } else {
                nonPositionedInlineLevel.push(child);
            }
        }
    }
    return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];
};

var sortByZIndex = function sortByZIndex(a, b) {
    if (a.container.style.zIndex.order > b.container.style.zIndex.order) {
        return 1;
    } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {
        return -1;
    }

    return a.container.index > b.container.index ? 1 : -1;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformWebkitRadialGradientArgs = exports.parseGradient = exports.RadialGradient = exports.LinearGradient = exports.RADIAL_GRADIENT_SHAPE = exports.GRADIENT_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _NodeContainer = __webpack_require__(126);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _Angle = __webpack_require__(196);

var _Color = __webpack_require__(123);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(124);

var _Length2 = _interopRequireDefault(_Length);

var _Util = __webpack_require__(127);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;
var PERCENTAGE_ANGLES = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i;
var ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;
var FROM_TO_COLORSTOP = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i;
var RADIAL_SHAPE_DEFINITION = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i;

var GRADIENT_TYPE = exports.GRADIENT_TYPE = {
    LINEAR_GRADIENT: 0,
    RADIAL_GRADIENT: 1
};

var RADIAL_GRADIENT_SHAPE = exports.RADIAL_GRADIENT_SHAPE = {
    CIRCLE: 0,
    ELLIPSE: 1
};

var LENGTH_FOR_POSITION = {
    left: new _Length2.default('0%'),
    top: new _Length2.default('0%'),
    center: new _Length2.default('50%'),
    right: new _Length2.default('100%'),
    bottom: new _Length2.default('100%')
};

var LinearGradient = exports.LinearGradient = function LinearGradient(colorStops, direction) {
    _classCallCheck(this, LinearGradient);

    this.type = GRADIENT_TYPE.LINEAR_GRADIENT;
    this.colorStops = colorStops;
    this.direction = direction;
};

var RadialGradient = exports.RadialGradient = function RadialGradient(colorStops, shape, center, radius) {
    _classCallCheck(this, RadialGradient);

    this.type = GRADIENT_TYPE.RADIAL_GRADIENT;
    this.colorStops = colorStops;
    this.shape = shape;
    this.center = center;
    this.radius = radius;
};

var parseGradient = exports.parseGradient = function parseGradient(container, _ref, bounds) {
    var args = _ref.args,
        method = _ref.method,
        prefix = _ref.prefix;

    if (method === 'linear-gradient') {
        return parseLinearGradient(args, bounds, !!prefix);
    } else if (method === 'gradient' && args[0] === 'linear') {
        // TODO handle correct angle
        return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);
    } else if (method === 'radial-gradient') {
        return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);
    } else if (method === 'gradient' && args[0] === 'radial') {
        return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);
    }
};

var parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {
    var colorStops = [];

    for (var i = firstColorStopIndex; i < args.length; i++) {
        var value = args[i];
        var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);
        var lastSpaceIndex = value.lastIndexOf(' ');
        var _color = new _Color2.default(HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);
        var _stop = HAS_LENGTH ? new _Length2.default(value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length2.default('0%') : i === args.length - 1 ? new _Length2.default('100%') : null;
        colorStops.push({ color: _color, stop: _stop });
    }

    var absoluteValuedColorStops = colorStops.map(function (_ref2) {
        var color = _ref2.color,
            stop = _ref2.stop;

        var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;

        return {
            color: color,
            // $FlowFixMe
            stop: absoluteStop
        };
    });

    var previousColorStop = absoluteValuedColorStops[0].stop;
    for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {
        if (previousColorStop !== null) {
            var _stop2 = absoluteValuedColorStops[_i].stop;
            if (_stop2 === null) {
                var n = _i;
                while (absoluteValuedColorStops[n].stop === null) {
                    n++;
                }
                var steps = n - _i + 1;
                var nextColorStep = absoluteValuedColorStops[n].stop;
                var stepSize = (nextColorStep - previousColorStop) / steps;
                for (; _i < n; _i++) {
                    previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;
                }
            } else {
                previousColorStop = _stop2;
            }
        }
    }

    return absoluteValuedColorStops;
};

var parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {
    var angle = (0, _Angle.parseAngle)(args[0]);
    var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);
    var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);
    var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection(
    // if there is a prefix, the 0° angle points due East (instead of North per W3C)
    hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);
    var firstColorStopIndex = HAS_DIRECTION ? 1 : 0;

    // TODO: Fix some inaccuracy with color stops with px values
    var lineLength = Math.min((0, _Util.distance)(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);

    return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);
};

var parseRadialGradient = function parseRadialGradient(container, args, bounds) {
    var m = args[0].match(RADIAL_SHAPE_DEFINITION);
    var shape = m && (m[1] === 'circle' || // explicit shape specification
    m[3] !== undefined && m[5] === undefined) // only one radius coordinate
    ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;
    var radius = {};
    var center = {};

    if (m) {
        // Radius
        if (m[3] !== undefined) {
            radius.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[3], m[4]).getAbsoluteValue(bounds.width);
        }

        if (m[5] !== undefined) {
            radius.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[5], m[6]).getAbsoluteValue(bounds.height);
        }

        // Position
        if (m[7]) {
            center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];
        } else if (m[8] !== undefined) {
            center.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[8], m[9]);
        }

        if (m[10]) {
            center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];
        } else if (m[11] !== undefined) {
            center.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[11], m[12]);
        }
    }

    var gradientCenter = {
        x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),
        y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)
    };
    var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);

    return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);
};

var calculateGradientDirection = function calculateGradientDirection(radian, bounds) {
    var width = bounds.width;
    var height = bounds.height;
    var HALF_WIDTH = width * 0.5;
    var HALF_HEIGHT = height * 0.5;
    var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    var HALF_LINE_LENGTH = lineLength / 2;

    var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;
    var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;
    var x1 = width - x0;
    var y1 = height - y0;

    return { x0: x0, x1: x1, y0: y0, y1: y1 };
};

var parseTopRight = function parseTopRight(bounds) {
    return Math.acos(bounds.width / 2 / ((0, _Util.distance)(bounds.width, bounds.height) / 2));
};

var parseSideOrCorner = function parseSideOrCorner(side, bounds) {
    switch (side) {
        case 'bottom':
        case 'to top':
            return calculateGradientDirection(0, bounds);
        case 'left':
        case 'to right':
            return calculateGradientDirection(Math.PI / 2, bounds);
        case 'right':
        case 'to left':
            return calculateGradientDirection(3 * Math.PI / 2, bounds);
        case 'top right':
        case 'right top':
        case 'to bottom left':
        case 'to left bottom':
            return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);
        case 'top left':
        case 'left top':
        case 'to bottom right':
        case 'to right bottom':
            return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);
        case 'bottom left':
        case 'left bottom':
        case 'to top right':
        case 'to right top':
            return calculateGradientDirection(parseTopRight(bounds), bounds);
        case 'bottom right':
        case 'right bottom':
        case 'to top left':
        case 'to left top':
            return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);
        case 'top':
        case 'to bottom':
        default:
            return calculateGradientDirection(Math.PI, bounds);
    }
};

var parsePercentageAngle = function parsePercentageAngle(angle, bounds) {
    var _angle$split$map = angle.split(' ').map(parseFloat),
        _angle$split$map2 = _slicedToArray(_angle$split$map, 2),
        left = _angle$split$map2[0],
        top = _angle$split$map2[1];

    var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);

    return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);
};

var findCorner = function findCorner(bounds, x, y, closest) {
    var corners = [{ x: 0, y: 0 }, { x: 0, y: bounds.height }, { x: bounds.width, y: 0 }, { x: bounds.width, y: bounds.height }];

    // $FlowFixMe
    return corners.reduce(function (stat, corner) {
        var d = (0, _Util.distance)(x - corner.x, y - corner.y);
        if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
            return {
                optimumCorner: corner,
                optimumDistance: d
            };
        }

        return stat;
    }, {
        optimumDistance: closest ? Infinity : -Infinity,
        optimumCorner: null
    }).optimumCorner;
};

var calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {
    var x = center.x;
    var y = center.y;
    var rx = 0;
    var ry = 0;

    switch (extent) {
        case 'closest-side':
            // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, it exactly meets the closest side in each dimension.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'closest-corner':
            // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));
                var corner = findCorner(bounds, x, y, true);
                rx = (0, _Util.distance)(corner.x - x, (corner.y - y) / c);
                ry = c * rx;
            }
            break;

        case 'farthest-side':
            // Same as closest-side, except the ending shape is sized based on the farthest side(s)
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'farthest-corner':
            // Same as closest-corner, except the ending shape is sized based on the farthest corner.
            // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));
                var _corner = findCorner(bounds, x, y, false);
                rx = (0, _Util.distance)(_corner.x - x, (_corner.y - y) / _c);
                ry = _c * rx;
            }
            break;

        default:
            // pixel or percentage values
            rx = radius.x || 0;
            ry = radius.y !== undefined ? radius.y : rx;
            break;
    }

    return {
        x: rx,
        y: ry
    };
};

var transformWebkitRadialGradientArgs = exports.transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {
    var shape = '';
    var radius = '';
    var extent = '';
    var position = '';
    var idx = 0;

    var POSITION = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i;
    var SHAPE_AND_EXTENT = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;
    var RADIUS = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i;

    var matchStartPosition = args[idx].match(POSITION);
    if (matchStartPosition) {
        idx++;
    }

    var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);
    if (matchShapeExtent) {
        shape = matchShapeExtent[1] || '';
        extent = matchShapeExtent[2] || '';
        if (extent === 'contain') {
            extent = 'closest-side';
        } else if (extent === 'cover') {
            extent = 'farthest-corner';
        }
        idx++;
    }

    var matchStartRadius = args[idx].match(RADIUS);
    if (matchStartRadius) {
        idx++;
    }

    var matchEndPosition = args[idx].match(POSITION);
    if (matchEndPosition) {
        idx++;
    }

    var matchEndRadius = args[idx].match(RADIUS);
    if (matchEndRadius) {
        idx++;
    }

    var matchPosition = matchEndPosition || matchStartPosition;
    if (matchPosition && matchPosition[1]) {
        position = matchPosition[1] + (/^\d+$/.test(matchPosition[1]) ? 'px' : '');
        if (matchPosition[2]) {
            position += ' ' + matchPosition[2] + (/^\d+$/.test(matchPosition[2]) ? 'px' : '');
        }
    }

    var matchRadius = matchEndRadius || matchStartRadius;
    if (matchRadius) {
        radius = matchRadius[0];
        if (!matchRadius[1]) {
            radius += 'px';
        }
    }

    if (position && !shape && !radius && !extent) {
        radius = position;
        position = '';
    }

    if (position) {
        position = 'at ' + position;
    }

    return [[shape, extent, radius, position].filter(function (s) {
        return !!s;
    }).join(' ')].concat(args.slice(idx));
};

var transformObsoleteColorStops = function transformObsoleteColorStops(args) {
    return args.map(function (color) {
        return color.match(FROM_TO_COLORSTOP);
    })
    // $FlowFixMe
    .map(function (v, index) {
        if (!v) {
            return args[index];
        }

        switch (v[1]) {
            case 'from':
                return v[4] + ' 0%';
            case 'to':
                return v[4] + ' 100%';
            case 'color-stop':
                if (v[3] === '%') {
                    return v[4] + ' ' + v[2];
                }
                return v[4] + ' ' + parseFloat(v[2]) * 100 + '%';
        }
    });
};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ANGLE = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;

var parseAngle = exports.parseAngle = function parseAngle(angle) {
    var match = angle.match(ANGLE);

    if (match) {
        var value = parseFloat(match[1]);
        switch (match[2].toLowerCase()) {
            case 'deg':
                return Math.PI * value / 180;
            case 'grad':
                return Math.PI / 200 * value;
            case 'rad':
                return value;
            case 'turn':
                return Math.PI * 2 * value;
        }
    }

    return null;
};

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneWindow = exports.DocumentCloner = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(125);

var _Proxy = __webpack_require__(152);

var _ResourceLoader = __webpack_require__(198);

var _ResourceLoader2 = _interopRequireDefault(_ResourceLoader);

var _Util = __webpack_require__(127);

var _background = __webpack_require__(128);

var _CanvasRenderer = __webpack_require__(141);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _PseudoNodeContent = __webpack_require__(199);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';

var DocumentCloner = exports.DocumentCloner = function () {
    function DocumentCloner(element, options, logger, copyInline, renderer) {
        _classCallCheck(this, DocumentCloner);

        this.referenceElement = element;
        this.scrolledElements = [];
        this.copyStyles = copyInline;
        this.inlineImages = copyInline;
        this.logger = logger;
        this.options = options;
        this.renderer = renderer;
        this.resourceLoader = new _ResourceLoader2.default(options, logger, window);
        this.pseudoContentData = {
            counters: {},
            quoteDepth: 0
        };
        // $FlowFixMe
        this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
    }

    _createClass(DocumentCloner, [{
        key: 'inlineAllImages',
        value: function inlineAllImages(node) {
            var _this = this;

            if (this.inlineImages && node) {
                var style = node.style;
                Promise.all((0, _background.parseBackgroundImage)(style.backgroundImage).map(function (backgroundImage) {
                    if (backgroundImage.method === 'url') {
                        return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {
                            return img && typeof img.src === 'string' ? 'url("' + img.src + '")' : 'none';
                        }).catch(function (e) {
                            if (process.env.NODE_ENV !== 'production') {
                                _this.logger.log('Unable to load image', e);
                            }
                        });
                    }
                    return Promise.resolve('' + backgroundImage.prefix + backgroundImage.method + '(' + backgroundImage.args.join(',') + ')');
                })).then(function (backgroundImages) {
                    if (backgroundImages.length > 1) {
                        // TODO Multiple backgrounds somehow broken in Chrome
                        style.backgroundColor = '';
                    }
                    style.backgroundImage = backgroundImages.join(',');
                });

                if (node instanceof HTMLImageElement) {
                    this.resourceLoader.inlineImage(node.src).then(function (img) {
                        if (img && node instanceof HTMLImageElement && node.parentNode) {
                            var parentNode = node.parentNode;
                            var clonedChild = (0, _Util.copyCSSStyles)(node.style, img.cloneNode(false));
                            parentNode.replaceChild(clonedChild, node);
                        }
                    }).catch(function (e) {
                        if (process.env.NODE_ENV !== 'production') {
                            _this.logger.log('Unable to load image', e);
                        }
                    });
                }
            }
        }
    }, {
        key: 'inlineFonts',
        value: function inlineFonts(document) {
            var _this2 = this;

            return Promise.all(Array.from(document.styleSheets).map(function (sheet) {
                if (sheet.href) {
                    return fetch(sheet.href).then(function (res) {
                        return res.text();
                    }).then(function (text) {
                        return createStyleSheetFontsFromText(text, sheet.href);
                    }).catch(function (e) {
                        if (process.env.NODE_ENV !== 'production') {
                            _this2.logger.log('Unable to load stylesheet', e);
                        }
                        return [];
                    });
                }
                return getSheetFonts(sheet, document);
            })).then(function (fonts) {
                return fonts.reduce(function (acc, font) {
                    return acc.concat(font);
                }, []);
            }).then(function (fonts) {
                return Promise.all(fonts.map(function (font) {
                    return fetch(font.formats[0].src).then(function (response) {
                        return response.blob();
                    }).then(function (blob) {
                        return new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.onerror = reject;
                            reader.onload = function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            };
                            reader.readAsDataURL(blob);
                        });
                    }).then(function (dataUri) {
                        font.fontFace.setProperty('src', 'url("' + dataUri + '")');
                        return '@font-face {' + font.fontFace.cssText + ' ';
                    });
                }));
            }).then(function (fontCss) {
                var style = document.createElement('style');
                style.textContent = fontCss.join('\n');
                _this2.documentElement.appendChild(style);
            });
        }
    }, {
        key: 'createElementClone',
        value: function createElementClone(node) {
            var _this3 = this;

            if (this.copyStyles && node instanceof HTMLCanvasElement) {
                var img = node.ownerDocument.createElement('img');
                try {
                    img.src = node.toDataURL();
                    return img;
                } catch (e) {
                    if (process.env.NODE_ENV !== 'production') {
                        this.logger.log('Unable to clone canvas contents, canvas is tainted');
                    }
                }
            }

            if (node instanceof HTMLIFrameElement) {
                var tempIframe = node.cloneNode(false);
                var iframeKey = generateIframeKey();
                tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);

                var _parseBounds = (0, _Bounds.parseBounds)(node, 0, 0),
                    width = _parseBounds.width,
                    height = _parseBounds.height;

                this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {
                    return _this3.renderer(documentElement, {
                        async: _this3.options.async,
                        allowTaint: _this3.options.allowTaint,
                        backgroundColor: '#ffffff',
                        canvas: null,
                        imageTimeout: _this3.options.imageTimeout,
                        logging: _this3.options.logging,
                        proxy: _this3.options.proxy,
                        removeContainer: _this3.options.removeContainer,
                        scale: _this3.options.scale,
                        foreignObjectRendering: _this3.options.foreignObjectRendering,
                        useCORS: _this3.options.useCORS,
                        target: new _CanvasRenderer2.default(),
                        width: width,
                        height: height,
                        x: 0,
                        y: 0,
                        windowWidth: documentElement.ownerDocument.defaultView.innerWidth,
                        windowHeight: documentElement.ownerDocument.defaultView.innerHeight,
                        scrollX: documentElement.ownerDocument.defaultView.pageXOffset,
                        scrollY: documentElement.ownerDocument.defaultView.pageYOffset
                    }, _this3.logger.child(iframeKey));
                }).then(function (canvas) {
                    return new Promise(function (resolve, reject) {
                        var iframeCanvas = document.createElement('img');
                        iframeCanvas.onload = function () {
                            return resolve(canvas);
                        };
                        iframeCanvas.onerror = reject;
                        iframeCanvas.src = canvas.toDataURL();
                        if (tempIframe.parentNode) {
                            tempIframe.parentNode.replaceChild((0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);
                        }
                    });
                });
                return tempIframe;
            }

            if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {
                var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {
                    try {
                        if (rule && rule.cssText) {
                            return css + rule.cssText;
                        }
                        return css;
                    } catch (err) {
                        _this3.logger.log('Unable to access cssText property', rule.name);
                        return css;
                    }
                }, '');
                var style = node.cloneNode(false);
                style.textContent = css;
                return style;
            }

            return node.cloneNode(false);
        }
    }, {
        key: 'cloneNode',
        value: function cloneNode(node) {
            var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);

            var window = node.ownerDocument.defaultView;
            var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;
            var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':before') : null;
            var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':after') : null;

            if (this.referenceElement === node && clone instanceof window.HTMLElement) {
                this.clonedReferenceElement = clone;
            }

            if (clone instanceof window.HTMLBodyElement) {
                createPseudoHideStyles(clone);
            }

            var counters = (0, _PseudoNodeContent.parseCounterReset)(style, this.pseudoContentData);
            var contentBefore = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleBefore, this.pseudoContentData);

            for (var child = node.firstChild; child; child = child.nextSibling) {
                if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== 'SCRIPT' &&
                // $FlowFixMe
                !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' ||
                // $FlowFixMe
                !this.options.ignoreElements(child))) {
                    if (!this.copyStyles || child.nodeName !== 'STYLE') {
                        clone.appendChild(this.cloneNode(child));
                    }
                }
            }

            var contentAfter = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleAfter, this.pseudoContentData);
            (0, _PseudoNodeContent.popCounters)(counters, this.pseudoContentData);

            if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {
                if (styleBefore) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));
                }
                if (styleAfter) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));
                }
                if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {
                    (0, _Util.copyCSSStyles)(style, clone);
                }
                this.inlineAllImages(clone);
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                    this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                switch (node.nodeName) {
                    case 'CANVAS':
                        if (!this.copyStyles) {
                            cloneCanvasContents(node, clone);
                        }
                        break;
                    case 'TEXTAREA':
                    case 'SELECT':
                        clone.value = node.value;
                        break;
                }
            }
            return clone;
        }
    }]);

    return DocumentCloner;
}();

var getSheetFonts = function getSheetFonts(sheet, document) {
    // $FlowFixMe
    return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {
        return rule.type === CSSRule.FONT_FACE_RULE;
    }).map(function (rule) {
        var src = (0, _background.parseBackgroundImage)(rule.style.getPropertyValue('src'));
        var formats = [];
        for (var i = 0; i < src.length; i++) {
            if (src[i].method === 'url' && src[i + 1] && src[i + 1].method === 'format') {
                var a = document.createElement('a');
                a.href = src[i].args[0];
                if (document.body) {
                    document.body.appendChild(a);
                }

                var font = {
                    src: a.href,
                    format: src[i + 1].args[0]
                };
                formats.push(font);
            }
        }

        return {
            // TODO select correct format for browser),

            formats: formats.filter(function (font) {
                return (/^woff/i.test(font.format)
                );
            }),
            fontFace: rule.style
        };
    }).filter(function (font) {
        return font.formats.length;
    });
};

var createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {
    var doc = document.implementation.createHTMLDocument('');
    var base = document.createElement('base');
    // $FlowFixMe
    base.href = baseHref;
    var style = document.createElement('style');

    style.textContent = text;
    if (doc.head) {
        doc.head.appendChild(base);
    }
    if (doc.body) {
        doc.body.appendChild(style);
    }

    return style.sheet ? getSheetFonts(style.sheet, doc) : [];
};

var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
        ownerDocument.defaultView.scrollTo(x, y);
    }
};

var cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {
    try {
        if (clonedCanvas) {
            clonedCanvas.width = canvas.width;
            clonedCanvas.height = canvas.height;
            var ctx = canvas.getContext('2d');
            var clonedCtx = clonedCanvas.getContext('2d');
            if (ctx) {
                clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
            } else {
                clonedCtx.drawImage(canvas, 0, 0);
            }
        }
    } catch (e) {}
};

var inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return;
    }

    var anonymousReplacedElement = clone.ownerDocument.createElement('html2canvaspseudoelement');
    (0, _Util.copyCSSStyles)(style, anonymousReplacedElement);

    if (contentItems) {
        var len = contentItems.length;
        for (var i = 0; i < len; i++) {
            var item = contentItems[i];
            switch (item.type) {
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                    var img = clone.ownerDocument.createElement('img');
                    img.src = (0, _background.parseBackgroundImage)('url(' + item.value + ')')[0].args[0];
                    img.style.opacity = '1';
                    anonymousReplacedElement.appendChild(img);
                    break;
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                    anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));
                    break;
            }
        }
    }

    anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    clone.className += pseudoElt === PSEUDO_BEFORE ? ' ' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    if (pseudoElt === PSEUDO_BEFORE) {
        clone.insertBefore(anonymousReplacedElement, clone.firstChild);
    } else {
        clone.appendChild(anonymousReplacedElement);
    }

    return anonymousReplacedElement;
};

var URL_REGEXP = /^url\((.+)\)$/i;
var PSEUDO_BEFORE = ':before';
var PSEUDO_AFTER = ':after';
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';

var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';

var createPseudoHideStyles = function createPseudoHideStyles(body) {
    createStyles(body, '.' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + '\n         .' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};

var createStyles = function createStyles(body, styles) {
    var style = body.ownerDocument.createElement('style');
    style.innerHTML = styles;
    body.appendChild(style);
};

var initNode = function initNode(_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        element = _ref2[0],
        x = _ref2[1],
        y = _ref2[2];

    element.scrollLeft = x;
    element.scrollTop = y;
};

var generateIframeKey = function generateIframeKey() {
    return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);
};

var DATA_URI_REGEXP = /^data:text\/(.+);(base64)?,(.*)$/i;

var getIframeDocumentElement = function getIframeDocumentElement(node, options) {
    try {
        return Promise.resolve(node.contentWindow.document.documentElement);
    } catch (e) {
        return options.proxy ? (0, _Proxy.Proxy)(node.src, options).then(function (html) {
            var match = html.match(DATA_URI_REGEXP);
            if (!match) {
                return Promise.reject();
            }

            return match[2] === 'base64' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);
        }).then(function (html) {
            return createIframeContainer(node.ownerDocument, (0, _Bounds.parseBounds)(node, 0, 0)).then(function (cloneIframeContainer) {
                var cloneWindow = cloneIframeContainer.contentWindow;
                var documentClone = cloneWindow.document;

                documentClone.open();
                documentClone.write(html);
                var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
                    return documentClone.documentElement;
                });

                documentClone.close();
                return iframeLoad;
            });
        }) : Promise.reject();
    }
};

var createIframeContainer = function createIframeContainer(ownerDocument, bounds) {
    var cloneIframeContainer = ownerDocument.createElement('iframe');

    cloneIframeContainer.className = 'html2canvas-container';
    cloneIframeContainer.style.visibility = 'hidden';
    cloneIframeContainer.style.position = 'fixed';
    cloneIframeContainer.style.left = '-10000px';
    cloneIframeContainer.style.top = '0px';
    cloneIframeContainer.style.border = '0';
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
    if (!ownerDocument.body) {
        return Promise.reject(process.env.NODE_ENV !== 'production' ? 'Body element not found in Document that is getting rendered' : '');
    }

    ownerDocument.body.appendChild(cloneIframeContainer);

    return Promise.resolve(cloneIframeContainer);
};

var iframeLoader = function iframeLoader(cloneIframeContainer) {
    var cloneWindow = cloneIframeContainer.contentWindow;
    var documentClone = cloneWindow.document;

    return new Promise(function (resolve, reject) {
        cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {
            var interval = setInterval(function () {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                    clearInterval(interval);
                    resolve(cloneIframeContainer);
                }
            }, 50);
        };
    });
};

var cloneWindow = exports.cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {
    var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);
    var scrollX = ownerDocument.defaultView.pageXOffset;
    var scrollY = ownerDocument.defaultView.pageYOffset;

    return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {
        var cloneWindow = cloneIframeContainer.contentWindow;
        var documentClone = cloneWindow.document;

        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */

        var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
            cloner.scrolledElements.forEach(initNode);
            cloneWindow.scrollTo(bounds.left, bounds.top);
            if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {
                documentClone.documentElement.style.top = -bounds.top + 'px';
                documentClone.documentElement.style.left = -bounds.left + 'px';
                documentClone.documentElement.style.position = 'absolute';
            }

            var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);

            var onclone = options.onclone;

            return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === 'function' ? Promise.resolve().then(function () {
                return onclone(documentClone);
            }).then(function () {
                return result;
            }) : result : Promise.reject(process.env.NODE_ENV !== 'production' ? 'Error finding the ' + referenceElement.nodeName + ' in the cloned document' : '');
        });

        documentClone.open();
        documentClone.write(serializeDoctype(document.doctype) + '<html></html>');
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);
        documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);
        documentClone.close();

        return iframeLoad;
    });
};

var serializeDoctype = function serializeDoctype(doctype) {
    var str = '';
    if (doctype) {
        str += '<!DOCTYPE ';
        if (doctype.name) {
            str += doctype.name;
        }

        if (doctype.internalSubset) {
            str += doctype.internalSubset;
        }

        if (doctype.publicId) {
            str += '"' + doctype.publicId + '"';
        }

        if (doctype.systemId) {
            str += '"' + doctype.systemId + '"';
        }

        str += '>';
    }

    return str;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResourceStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Feature = __webpack_require__(133);

var _Feature2 = _interopRequireDefault(_Feature);

var _Proxy = __webpack_require__(152);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceLoader = function () {
    function ResourceLoader(options, logger, window) {
        _classCallCheck(this, ResourceLoader);

        this.options = options;
        this._window = window;
        this.origin = this.getOrigin(window.location.href);
        this.cache = {};
        this.logger = logger;
        this._index = 0;
    }

    _createClass(ResourceLoader, [{
        key: 'loadImage',
        value: function loadImage(src) {
            var _this = this;

            if (this.hasResourceInCache(src)) {
                return src;
            }
            if (isBlobImage(src)) {
                this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);
                return src;
            }

            if (!isSVG(src) || _Feature2.default.SUPPORT_SVG_DRAWING) {
                if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {
                    return this.addImage(src, src, false);
                } else if (!this.isSameOrigin(src)) {
                    if (typeof this.options.proxy === 'string') {
                        this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                            return _loadImage(src, _this.options.imageTimeout || 0);
                        });
                        return src;
                    } else if (this.options.useCORS === true && _Feature2.default.SUPPORT_CORS_IMAGES) {
                        return this.addImage(src, src, true);
                    }
                }
            }
        }
    }, {
        key: 'inlineImage',
        value: function inlineImage(src) {
            var _this2 = this;

            if (isInlineImage(src)) {
                return _loadImage(src, this.options.imageTimeout || 0);
            }
            if (this.hasResourceInCache(src)) {
                return this.cache[src];
            }
            if (!this.isSameOrigin(src) && typeof this.options.proxy === 'string') {
                return this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                    return _loadImage(src, _this2.options.imageTimeout || 0);
                });
            }

            return this.xhrImage(src);
        }
    }, {
        key: 'xhrImage',
        value: function xhrImage(src) {
            var _this3 = this;

            this.cache[src] = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status !== 200) {
                            reject('Failed to fetch image ' + src.substring(0, 256) + ' with status code ' + xhr.status);
                        } else {
                            var reader = new FileReader();
                            reader.addEventListener('load', function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            }, false);
                            reader.addEventListener('error', function (e) {
                                return reject(e);
                            }, false);
                            reader.readAsDataURL(xhr.response);
                        }
                    }
                };
                xhr.responseType = 'blob';
                if (_this3.options.imageTimeout) {
                    var timeout = _this3.options.imageTimeout;
                    xhr.timeout = timeout;
                    xhr.ontimeout = function () {
                        return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : '');
                    };
                }
                xhr.open('GET', src, true);
                xhr.send();
            }).then(function (src) {
                return _loadImage(src, _this3.options.imageTimeout || 0);
            });

            return this.cache[src];
        }
    }, {
        key: 'loadCanvas',
        value: function loadCanvas(node) {
            var key = String(this._index++);
            this.cache[key] = Promise.resolve(node);
            return key;
        }
    }, {
        key: 'hasResourceInCache',
        value: function hasResourceInCache(key) {
            return typeof this.cache[key] !== 'undefined';
        }
    }, {
        key: 'addImage',
        value: function addImage(key, src, useCORS) {
            var _this4 = this;

            if (process.env.NODE_ENV !== 'production') {
                this.logger.log('Added image ' + key.substring(0, 256));
            }

            var imageLoadHandler = function imageLoadHandler(supportsDataImages) {
                return new Promise(function (resolve, reject) {
                    var img = new Image();
                    img.onload = function () {
                        return resolve(img);
                    };
                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                    if (!supportsDataImages || useCORS) {
                        img.crossOrigin = 'anonymous';
                    }

                    img.onerror = reject;
                    img.src = src;
                    if (img.complete === true) {
                        // Inline XML images may fail to parse, throwing an Error later on
                        setTimeout(function () {
                            resolve(img);
                        }, 500);
                    }
                    if (_this4.options.imageTimeout) {
                        var timeout = _this4.options.imageTimeout;
                        setTimeout(function () {
                            return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : '');
                        }, timeout);
                    }
                });
            };

            this.cache[key] = isInlineBase64Image(src) && !isSVG(src) ? // $FlowFixMe
            _Feature2.default.SUPPORT_BASE64_DRAWING(src).then(imageLoadHandler) : imageLoadHandler(true);
            return key;
        }
    }, {
        key: 'isSameOrigin',
        value: function isSameOrigin(url) {
            return this.getOrigin(url) === this.origin;
        }
    }, {
        key: 'getOrigin',
        value: function getOrigin(url) {
            var link = this._link || (this._link = this._window.document.createElement('a'));
            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
            return link.protocol + link.hostname + link.port;
        }
    }, {
        key: 'ready',
        value: function ready() {
            var _this5 = this;

            var keys = Object.keys(this.cache);
            var values = keys.map(function (str) {
                return _this5.cache[str].catch(function (e) {
                    if (process.env.NODE_ENV !== 'production') {
                        _this5.logger.log('Unable to load image', e);
                    }
                    return null;
                });
            });
            return Promise.all(values).then(function (images) {
                if (process.env.NODE_ENV !== 'production') {
                    _this5.logger.log('Finished loading ' + images.length + ' images', images);
                }
                return new ResourceStore(keys, images);
            });
        }
    }]);

    return ResourceLoader;
}();

exports.default = ResourceLoader;

var ResourceStore = exports.ResourceStore = function () {
    function ResourceStore(keys, resources) {
        _classCallCheck(this, ResourceStore);

        this._keys = keys;
        this._resources = resources;
    }

    _createClass(ResourceStore, [{
        key: 'get',
        value: function get(key) {
            var index = this._keys.indexOf(key);
            return index === -1 ? null : this._resources[index];
        }
    }]);

    return ResourceStore;
}();

var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;

var isInlineImage = function isInlineImage(src) {
    return INLINE_IMG.test(src);
};
var isInlineBase64Image = function isInlineBase64Image(src) {
    return INLINE_BASE64.test(src);
};
var isBlobImage = function isBlobImage(src) {
    return src.substr(0, 4) === 'blob';
};

var isSVG = function isSVG(src) {
    return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
};

var _loadImage = function _loadImage(src, timeout) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;
        img.src = src;
        if (img.complete === true) {
            // Inline XML images may fail to parse, throwing an Error later on
            setTimeout(function () {
                resolve(img);
            }, 500);
        }
        if (timeout) {
            setTimeout(function () {
                return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) loading image' : '');
            }, timeout);
        }
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseContent = exports.resolvePseudoContent = exports.popCounters = exports.parseCounterReset = exports.TOKEN_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ListItem = __webpack_require__(138);

var _listStyle = __webpack_require__(131);

var PSEUDO_CONTENT_ITEM_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = {
    TEXT: 0,
    IMAGE: 1
};

var TOKEN_TYPE = exports.TOKEN_TYPE = {
    STRING: 0,
    ATTRIBUTE: 1,
    URL: 2,
    COUNTER: 3,
    COUNTERS: 4,
    OPENQUOTE: 5,
    CLOSEQUOTE: 6
};

var parseCounterReset = exports.parseCounterReset = function parseCounterReset(style, data) {
    if (!style || !style.counterReset || style.counterReset === 'none') {
        return [];
    }

    var counterNames = [];
    var counterResets = style.counterReset.split(/\s*,\s*/);
    var lenCounterResets = counterResets.length;

    for (var i = 0; i < lenCounterResets; i++) {
        var _counterResets$i$spli = counterResets[i].split(/\s+/),
            _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),
            counterName = _counterResets$i$spli2[0],
            initialValue = _counterResets$i$spli2[1];

        counterNames.push(counterName);
        var counter = data.counters[counterName];
        if (!counter) {
            counter = data.counters[counterName] = [];
        }
        counter.push(parseInt(initialValue || 0, 10));
    }

    return counterNames;
};

var popCounters = exports.popCounters = function popCounters(counterNames, data) {
    var lenCounters = counterNames.length;
    for (var i = 0; i < lenCounters; i++) {
        data.counters[counterNames[i]].pop();
    }
};

var resolvePseudoContent = exports.resolvePseudoContent = function resolvePseudoContent(node, style, data) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return null;
    }

    var tokens = parseContent(style.content);

    var len = tokens.length;
    var contentItems = [];
    var s = '';

    // increment the counter (if there is a "counter-increment" declaration)
    var counterIncrement = style.counterIncrement;
    if (counterIncrement && counterIncrement !== 'none') {
        var _counterIncrement$spl = counterIncrement.split(/\s+/),
            _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),
            counterName = _counterIncrement$spl2[0],
            incrementValue = _counterIncrement$spl2[1];

        var counter = data.counters[counterName];
        if (counter) {
            counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);
        }
    }

    // build the content string
    for (var i = 0; i < len; i++) {
        var token = tokens[i];
        switch (token.type) {
            case TOKEN_TYPE.STRING:
                s += token.value || '';
                break;

            case TOKEN_TYPE.ATTRIBUTE:
                if (node instanceof HTMLElement && token.value) {
                    s += node.getAttribute(token.value) || '';
                }
                break;

            case TOKEN_TYPE.COUNTER:
                var _counter = data.counters[token.name || ''];
                if (_counter) {
                    s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);
                }
                break;

            case TOKEN_TYPE.COUNTERS:
                var _counters = data.counters[token.name || ''];
                if (_counters) {
                    s += formatCounterValue(_counters, token.glue, token.format);
                }
                break;

            case TOKEN_TYPE.OPENQUOTE:
                s += getQuote(style, true, data.quoteDepth);
                data.quoteDepth++;
                break;

            case TOKEN_TYPE.CLOSEQUOTE:
                data.quoteDepth--;
                s += getQuote(style, false, data.quoteDepth);
                break;

            case TOKEN_TYPE.URL:
                if (s) {
                    contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
                    s = '';
                }
                contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE, value: token.value || '' });
                break;
        }
    }

    if (s) {
        contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
    }

    return contentItems;
};

var parseContent = exports.parseContent = function parseContent(content, cache) {
    if (cache && cache[content]) {
        return cache[content];
    }

    var tokens = [];
    var len = content.length;

    var isString = false;
    var isEscaped = false;
    var isFunction = false;
    var str = '';
    var functionName = '';
    var args = [];

    for (var i = 0; i < len; i++) {
        var c = content.charAt(i);

        switch (c) {
            case "'":
            case '"':
                if (isEscaped) {
                    str += c;
                } else {
                    isString = !isString;
                    if (!isFunction && !isString) {
                        tokens.push({ type: TOKEN_TYPE.STRING, value: str });
                        str = '';
                    }
                }
                break;

            case '\\':
                if (isEscaped) {
                    str += c;
                    isEscaped = false;
                } else {
                    isEscaped = true;
                }
                break;

            case '(':
                if (isString) {
                    str += c;
                } else {
                    isFunction = true;
                    functionName = str;
                    str = '';
                    args = [];
                }
                break;

            case ')':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    if (str) {
                        args.push(str);
                    }

                    switch (functionName) {
                        case 'attr':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.ATTRIBUTE, value: args[0] });
                            }
                            break;

                        case 'counter':
                            if (args.length > 0) {
                                var counter = {
                                    type: TOKEN_TYPE.COUNTER,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    counter.format = args[1];
                                }
                                tokens.push(counter);
                            }
                            break;

                        case 'counters':
                            if (args.length > 0) {
                                var _counters2 = {
                                    type: TOKEN_TYPE.COUNTERS,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    _counters2.glue = args[1];
                                }
                                if (args.length > 2) {
                                    _counters2.format = args[2];
                                }
                                tokens.push(_counters2);
                            }
                            break;

                        case 'url':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.URL, value: args[0] });
                            }
                            break;
                    }

                    isFunction = false;
                    str = '';
                }
                break;

            case ',':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    args.push(str);
                    str = '';
                }
                break;

            case ' ':
            case '\t':
                if (isString) {
                    str += c;
                } else if (str) {
                    addOtherToken(tokens, str);
                    str = '';
                }
                break;

            default:
                str += c;
        }

        if (c !== '\\') {
            isEscaped = false;
        }
    }

    if (str) {
        addOtherToken(tokens, str);
    }

    if (cache) {
        cache[content] = tokens;
    }

    return tokens;
};

var addOtherToken = function addOtherToken(tokens, identifier) {
    switch (identifier) {
        case 'open-quote':
            tokens.push({ type: TOKEN_TYPE.OPENQUOTE });
            break;
        case 'close-quote':
            tokens.push({ type: TOKEN_TYPE.CLOSEQUOTE });
            break;
    }
};

var getQuote = function getQuote(style, isOpening, quoteDepth) {
    var quotes = style.quotes ? style.quotes.split(/\s+/) : ["'\"'", "'\"'"];
    var idx = quoteDepth * 2;
    if (idx >= quotes.length) {
        idx = quotes.length - 2;
    }
    if (!isOpening) {
        ++idx;
    }
    return quotes[idx].replace(/^["']|["']$/g, '');
};

var formatCounterValue = function formatCounterValue(counter, glue, format) {
    var len = counter.length;
    var result = '';

    for (var i = 0; i < len; i++) {
        if (i > 0) {
            result += glue || '';
        }
        result += (0, _ListItem.createCounterText)(counter[i], (0, _listStyle.parseListStyleType)(format || 'decimal'), false);
    }

    return result;
};

/***/ })
]));