exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Vk_VkWidget__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Vk_VkSettings__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_vk_actions__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_Language__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_html2canvas__ = __webpack_require__(41);
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Row"], {
        className: ""
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Col"], {
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
      }, __WEBPACK_IMPORTED_MODULE_6__classes_Language__["a" /* default */].take('download').toUpperCase())))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Col"], {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(VkContainer));

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserImage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserImageSelect__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TextInput__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CheckBox__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MessageBox__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SettingButton__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__UserImageSelect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__UserImage__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__TextInput__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__SettingButton__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__MessageBox__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__CheckBox__["a"]; });








/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(39);
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VkHeader__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VkFooter__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widget_WidgetSeparator__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widget_WidgetMessage__ = __webpack_require__(53);
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mini__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Language__ = __webpack_require__(2);
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserImage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Language__ = __webpack_require__(2);




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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(39);
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(39);
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Language__ = __webpack_require__(2);



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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(39);
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Language__ = __webpack_require__(2);
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
/* 52 */
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mini__ = __webpack_require__(42);
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
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mini__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SettingSections__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_vk_actions__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_Language__ = __webpack_require__(2);
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(VkSettings));

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SectionTopPart__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SectionContent__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SectionInterlocutor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SectionSections__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SectionCurrentUser__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__SectionContent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__SectionInterlocutor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__SectionCurrentUser__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__SectionTopPart__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__SectionSections__["a"]; });







/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(2);
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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip__ = __webpack_require__(40);
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip__ = __webpack_require__(40);
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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(2);
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
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip__ = __webpack_require__(40);
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
/* 61 */
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

/***/ })
];;