/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _languages = __webpack_require__(10);

var _languages2 = _interopRequireDefault(_languages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Language = function Language() {
	var _this = this;

	_classCallCheck(this, Language);

	this.language = '';

	this.setCurrentLang = function (language) {
		_this.language = language;
	};

	this.take = function (key) {
		var language = _this.language;

		return _languages2.default[language][key];
	};
};

exports.default = new Language();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = exports.SettingButton = exports.TextInput = exports.UserImage = exports.UserImageSelect = undefined;

var _UserImage = __webpack_require__(9);

var _UserImage2 = _interopRequireDefault(_UserImage);

var _UserImageSelect = __webpack_require__(22);

var _UserImageSelect2 = _interopRequireDefault(_UserImageSelect);

var _TextInput = __webpack_require__(23);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _CheckBox = __webpack_require__(24);

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _SettingButton = __webpack_require__(25);

var _SettingButton2 = _interopRequireDefault(_SettingButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UserImageSelect = _UserImageSelect2.default;
exports.UserImage = _UserImage2.default;
exports.TextInput = _TextInput2.default;
exports.SettingButton = _SettingButton2.default;
exports.CheckBox = _CheckBox2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VkContainer = __webpack_require__(19);

var _VkContainer2 = _interopRequireDefault(_VkContainer);

var _Home = __webpack_require__(32);

var _Home2 = _interopRequireDefault(_Home);

var _Fb = __webpack_require__(33);

var _Fb2 = _interopRequireDefault(_Fb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Language from './classes/Language';

var routes = [{
  path: '/',
  exact: true,
  component: _Home2.default,
  config: {
    title: 'titles.home'
  }
}, {
  path: '/vkontakte',
  exact: true,
  component: _VkContainer2.default,
  config: {
    title: 'titles.vk'
  }
}, {
  path: '/facebook',
  exact: true,
  component: _Fb2.default,
  config: {
    title: 'titles.fb'
  }
}];

exports.default = routes;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UserImage(_ref) {
  var src = _ref.src,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'small' : _ref$size;

  var imageClasses = (0, _classnames2.default)(_defineProperty({
    'vk-widget__user-img': true
  }, 'vk-widget__user-img-' + size, true));

  return _react2.default.createElement('img', {
    className: imageClasses,
    src: src
  });
}

exports.default = UserImage;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'ru': {
    'store.vk.online': 'был в сети 19 минут назад',
    'titles.home': 'Развлекательный сайт',
    'titles.vk': 'Создать переписку Вконтакте',
    'titles.fb': 'Создать переписку Фейсбук',
    'menu.vk': 'ВКонтакте',
    'menu.fb': 'Фейсбук',
    'content.dialog.title': 'Предварительный показ',
    'content.back': 'Назад',
    'content.writeMessage': 'Напишите сообщение...',
    'config.top.title': 'Верхняя часть',
    'config.top.online': 'Время в сети',
    'config.top.mobile': 'С мобильного',
    'config.current.title': 'Текущий пользователь',
    'config.current.fullName': 'Полное имя',
    'config.current.message': 'Добавить сообщение',
    'config.current.avatar': 'Аватар',
    'config.companion.title': 'Собеседник',
    'config.companion.fullName': 'Полное имя',
    'config.companion.avatar': 'Аватар',
    'config.companion.message': 'Добавить сообщение',
    'config.content.title': 'Контент',
    'config.content.height': 'Высота контента',
    'config.content.separator': 'Добавить разделитель',
    'config.content.separator.label': 'Текст разделителя',
    'config.content.separator.placeholder': 'пример: 6 ноября',
    'config.sections.title': 'Разделы',
    'config.sections.top': 'Показать верхнюю часть',
    'config.sections.bottom': 'Показать нижнюю часть',
    'config.imageSelect.link': 'Ссылка на аватар',
    'config.imageSelect.button': 'Добавить',
    'config.imageSelect.upload': 'Загрузить аватар',
    'download': 'скачать',
    'cancel': 'Отменить',
    'add': 'Добавить'
  },
  'en': {
    'store.vk.online': 'was online 19 minutes ago',
    'titles.home': 'Entertaining web site',
    'titles.vk': 'Create a correspondence VKontakte',
    'titles.fb': 'Create a correspondence FaceBook',
    'menu.vk': 'VKontakte',
    'menu.fb': 'Facebook',
    'content.dialog.title': 'Preview',
    'content.back': 'Back',
    'content.writeMessage': 'Write a message...',
    'config.top.title': 'Top part',
    'config.top.online': 'Online time',
    'config.top.mobile': 'From mobile',
    'config.current.title': 'Current user',
    'config.current.fullName': 'Full name',
    'config.current.avatar': 'Avatar',
    'config.current.message': 'Add new message',
    'config.companion.title': 'Interlocutor',
    'config.companion.fullName': 'Full name',
    'config.companion.avatar': 'Avatar',
    'config.companion.message': 'Add new message',
    'config.content.title': 'Content',
    'config.content.height': 'Content height',
    'config.content.separator': 'Add separator',
    'config.content.separator.label': 'Separator text',
    'config.content.separator.placeholder': 'example: november 6',
    'config.sections.title': 'Sections',
    'config.sections.top': 'Show top side',
    'config.sections.bottom': 'Show bottom side',
    'config.imageSelect.link': 'Avatar link',
    'config.imageSelect.button': 'Add',
    'config.imageSelect.upload': 'Upload image',
    'download': 'download',
    'cancel': 'Cancel',
    'add': 'Add'
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import { Helmet } from 'react-helmet';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(35);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(8);

var _serializeJavascript = __webpack_require__(36);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Store = __webpack_require__(37);

var _Store2 = _interopRequireDefault(_Store);

var _App = __webpack_require__(43);

var _App2 = _interopRequireDefault(_App);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageGenerator = function () {
  function PageGenerator() {
    _classCallCheck(this, PageGenerator);
  }

  _createClass(PageGenerator, null, [{
    key: 'page',

    /**
     * Renders html page.
     *
     * @param  {Object} params Page params
     * @return {string}        Page html
     */
    value: function page(_ref) {
      var state = _ref.state,
          head = _ref.head,
          body = _ref.body;

      return ['<!DOCTYPE html>', '<html>', '<head>', '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">', '<title>' + _Language2.default.take(head.title) + '</title>', '<meta name="viewport" content="width=600, initial-scale=0.6, maximum-scale=1"/>', '<meta charset="utf-8">', '<script src="/bundle.js" defer></script>', '<link href="/bundle.css" rel="stylesheet">', '<script>window.__INITIAL_STATE__ = ' + (0, _serializeJavascript2.default)(state) + '</script>', '</head>', '<body>', '<div id="app">' + body + '</div>', '</body>', '</html>'].join('\n');
    }

    /**
     * Returns page html.
     *
     * @param  {Object}  state     Initial state.
     * @return {string}            Page html.
     */

  }, {
    key: 'getPage',
    value: function getPage() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var head = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';

      _Language2.default.setCurrentLang(state.app.language);

      var store = _Store2.default.init(state);

      var body = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouterDom.StaticRouter,
          { location: url, context: { state: state } },
          _react2.default.createElement(_App2.default, { language: state.app.language })
        )
      ));

      // const helmet = Helmet.renderStatic();
      return this.page({
        state: store.getState(),
        head: head,
        body: body
      });
    }

    /**
     * Returns page 404.
     *
     * @return {string} Page html.
     */

  }, {
    key: 'notFound',
    value: function notFound() {
      return ['<!DOCTYPE html>', '<html lang="ru">', '<head>', '</head>', '<body>', '<div id="notFound">', '<p>Запрашиваемая страница не существует</p>', '<a href="/">Вернуться на главную страницу</a>', '</div>', '</body>', '</html>'].join('\n');
    }
  }]);

  return PageGenerator;
}();

exports.default = PageGenerator;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(13);

var _cors2 = _interopRequireDefault(_cors);

var _cookieParser = __webpack_require__(14);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _customMiddlewares = __webpack_require__(15);

var _customMiddlewares2 = _interopRequireDefault(_customMiddlewares);

var _routerSocialPages = __webpack_require__(34);

var _routerHome = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Initializes express */
var app = (0, _express2.default)();

/* Enables cors */
app.use((0, _cors2.default)());
/* Uses cookie parser middleware */
app.use((0, _cookieParser2.default)());
/* Tells the app to look for static files in these directories */
app.use(_express2.default.static('public'));
/* Sets custom middlewares */
app.use(_customMiddlewares2.default);

app.get('/*', _routerHome.router);
app.get('/*', _routerSocialPages.router);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Server is listening on port: 3000');
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MiddlewaresHandler = __webpack_require__(16);

var _MiddlewaresHandler2 = _interopRequireDefault(_MiddlewaresHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customMiddlewares = function customMiddlewares(req, res, next) {
  res.locals.language = _MiddlewaresHandler2.default.getLanguage(req, res);
  res.locals.activeRoute = _MiddlewaresHandler2.default.getActiveRoute(req);

  next();
};

exports.default = customMiddlewares;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = __webpack_require__(2);

var _geoipLite = __webpack_require__(17);

var _geoipLite2 = _interopRequireDefault(_geoipLite);

var _requestIp = __webpack_require__(18);

var _requestIp2 = _interopRequireDefault(_requestIp);

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

var _languages = __webpack_require__(10);

var _languages2 = _interopRequireDefault(_languages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MiddlewaresHandler = function MiddlewaresHandler() {
  _classCallCheck(this, MiddlewaresHandler);
};

MiddlewaresHandler.getActiveRoute = function (req) {
  return _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};
};

MiddlewaresHandler.languageAction = function (req) {
  var userIp = _requestIp2.default.getClientIp(req);
  var geo = _geoipLite2.default.lookup(userIp) || {};
  if (geo.country) {
    var userLanguage = geo.country.toLowerCase();
    var supportedLanguages = Object.keys(_languages2.default);
    if (supportedLanguages.includes(userLanguage)) {
      return userLanguage;
    }
  }
  return 'en';
};

MiddlewaresHandler.getLanguage = function (req, res) {
  var supportedLanguages = Object.keys(_languages2.default);
  var cookieLanguage = req.cookies.language;

  if (cookieLanguage && supportedLanguages.includes(cookieLanguage)) {
    return cookieLanguage;
  }
  var language = MiddlewaresHandler.languageAction(req);
  res.cookie('language', language, { maxAge: 30 * 24 * 60 * 60 });
  return language;
};

exports.default = MiddlewaresHandler;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("geoip-lite");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("request-ip");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(5);

var _reactRedux = __webpack_require__(8);

var _VkWidget = __webpack_require__(20);

var _VkWidget2 = _interopRequireDefault(_VkWidget);

var _VkSettings = __webpack_require__(27);

var _VkSettings2 = _interopRequireDefault(_VkSettings);

var _actions = __webpack_require__(30);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

var _html2canvas = __webpack_require__(31);

var _html2canvas2 = _interopRequireDefault(_html2canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VkContainer = function (_Component) {
  _inherits(VkContainer, _Component);

  function VkContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VkContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VkContainer.__proto__ || Object.getPrototypeOf(VkContainer)).call.apply(_ref, [this].concat(args))), _this), _this.downloadImage = function () {
      (0, _html2canvas2.default)(document.querySelector('#vk-chat-widget')).then(function (canvas) {
        var link = document.createElement('a');
        link.setAttribute('download', 'screenshot.png');
        link.setAttribute('href', canvas.toDataURL());
        link.click();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VkContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          vk = _props.vk,
          onChange = _props.onChange,
          onChangeImage = _props.onChangeImage;


      return _react2.default.createElement(
        _reactstrap.Row,
        { className: '' },
        _react2.default.createElement(
          _reactstrap.Col,
          { md: '12', lg: '8', xl: '7', className: 'widget-left' },
          _react2.default.createElement(
            'div',
            { className: 'vk-container' },
            _react2.default.createElement(
              'h2',
              { className: 'vk-container__preview' },
              _Language2.default.take('content.dialog.title')
            ),
            _react2.default.createElement(
              'div',
              { className: 'vk-chat', style: { backgroundImage: 'url("./assets/images/descont.png")' } },
              _react2.default.createElement(_VkWidget2.default, {
                components: vk.components,
                header: vk.header,
                content: vk.content,
                companion: vk.companion
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'text-center' },
              _react2.default.createElement(
                'button',
                {
                  className: 'vk_download-btn',
                  onClick: this.downloadImage
                },
                _Language2.default.take('download').toUpperCase()
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Col,
          { md: '12', lg: '4', xl: '5', className: 'widget-right' },
          _react2.default.createElement(_VkSettings2.default, {
            components: vk.components,
            header: vk.header,
            content: vk.content,
            current: vk.current,
            companion: vk.companion,
            temp: vk.temp,
            onChange: onChange,
            onChangeImage: onChangeImage
          })
        )
      );
    }
  }]);

  return VkContainer;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    vk: state.vk
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChange: function onChange(value, section, key) {
      dispatch((0, _actions.change)(value, section, key));
    },
    onChangeImage: function onChangeImage(type, key, img) {
      dispatch((0, _actions.changeImage)(type, key, img));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VkContainer);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _VkHeader = __webpack_require__(21);

var _VkHeader2 = _interopRequireDefault(_VkHeader);

var _VkFooter = __webpack_require__(26);

var _VkFooter2 = _interopRequireDefault(_VkFooter);

var _mini = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VkWidget = function (_Component) {
  _inherits(VkWidget, _Component);

  function VkWidget() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VkWidget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VkWidget.__proto__ || Object.getPrototypeOf(VkWidget)).call.apply(_ref, [this].concat(args))), _this), _this.renderHeader = function () {
      var _this$props = _this.props,
          header = _this$props.header,
          components = _this$props.components,
          companion = _this$props.companion;

      if (!components.header) {
        return null;
      }
      return _react2.default.createElement(_VkHeader2.default, {
        companion: companion.name,
        time: header.time,
        isMobile: header.mobile,
        img: companion.image
      });
    }, _this.renderFooter = function () {
      var components = _this.props.components;

      if (!components.footer) {
        return null;
      }
      return _react2.default.createElement(_VkFooter2.default, null);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VkWidget, [{
    key: 'render',
    value: function render() {
      var content = this.props.content;


      return _react2.default.createElement(
        'div',
        { className: 'vk-widget', id: 'vk-chat-widget' },
        this.renderHeader(),
        _react2.default.createElement(
          'div',
          { className: 'vk-widget_body', style: { height: content.height + 'px' } },
          _react2.default.createElement(
            'div',
            { className: 'vk-widget_body__content vk-widget_content' },
            _react2.default.createElement(
              'h5',
              { className: 'vk-widget_content__separator' },
              _react2.default.createElement(
                'span',
                { className: 'vk-widget_content__separator-content' },
                '6 \u043D\u043E\u044F\u0431\u0440\u044F'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'vk-widget_content__message-section' },
              _react2.default.createElement(
                'div',
                { className: 'vk-widget_content__messages-wrapper' },
                _react2.default.createElement(
                  'div',
                  { className: 'vk-widget_content__message-left' },
                  _react2.default.createElement(_mini.UserImage, {
                    src: './assets/images/user.png',
                    size: 'medium'
                  })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'vk-widget_content__message-right' },
                  _react2.default.createElement(
                    'div',
                    { className: 'vk-widget_content__message vk-widget_content__message-data' },
                    _react2.default.createElement(
                      'span',
                      { className: 'vk-widget_content__user-name' },
                      'valodik'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'vk-widget_content__message-time' },
                      '14:00'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'vk-widget_content__message' },
                    '\u041B\u0430\u0434\u043D\u043E \u0431\u0440\u0430\u0442\u0435\u0446. ^^) \u0412\u0435\u0440\u043D\u0443\u0441\u044C \u0434\u043E\u043C\u043E\u0439, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u044E.'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'vk-widget_content__message-section' },
              _react2.default.createElement(
                'div',
                { className: 'vk-widget_content__messages-wrapper' },
                _react2.default.createElement(
                  'div',
                  { className: 'vk-widget_content__message-left' },
                  _react2.default.createElement(_mini.UserImage, {
                    src: './assets/images/user.png',
                    size: 'medium'
                  })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'vk-widget_content__message-right' },
                  _react2.default.createElement(
                    'div',
                    { className: 'vk-widget_content__message vk-widget_content__message-data' },
                    _react2.default.createElement(
                      'span',
                      { className: 'vk-widget_content__user-name' },
                      'valodik'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'vk-widget_content__message-time' },
                      '14:00'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'vk-widget_content__message' },
                    '\u041B\u0430\u0434\u043D\u043E \u0431\u0440\u0430\u0442\u0435\u0446. ^^) \u0412\u0435\u0440\u043D\u0443\u0441\u044C \u0434\u043E\u043C\u043E\u0439, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u044E.'
                  )
                )
              )
            )
          )
        ),
        this.renderFooter()
      );
    }
  }]);

  return VkWidget;
}(_react.Component);

exports.default = VkWidget;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mini = __webpack_require__(6);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VkHeader = function (_Component) {
  _inherits(VkHeader, _Component);

  function VkHeader() {
    _classCallCheck(this, VkHeader);

    return _possibleConstructorReturn(this, (VkHeader.__proto__ || Object.getPrototypeOf(VkHeader)).apply(this, arguments));
  }

  _createClass(VkHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          companion = _props.companion,
          time = _props.time,
          img = _props.img,
          isMobile = _props.isMobile;


      return _react2.default.createElement(
        'div',
        { className: 'vk-widget_header' },
        _react2.default.createElement(
          'div',
          { className: 'vk-widget_header__left' },
          _react2.default.createElement('img', {
            className: 'vk-widget_header__back-image',
            src: './assets/images/back.svg'
          }),
          _react2.default.createElement(
            'div',
            { className: 'vk-widget_header__back' },
            _Language2.default.take('content.back')
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'vk-widget_header__center' },
          _react2.default.createElement(
            'div',
            { className: 'vk-widget_header__user-name' },
            companion
          ),
          _react2.default.createElement(
            'div',
            { className: 'vk-widget_header__online-status' },
            time,
            isMobile ? _react2.default.createElement('img', {
              className: 'vk-widget_header__online-status-image',
              src: './assets/images/mobile.png'
            }) : null
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'vk-widget_header__right' },
          _react2.default.createElement(
            'div',
            { className: 'vk-widget_header__mini-img-container' },
            _react2.default.createElement(_mini.UserImage, { src: img })
          ),
          _react2.default.createElement('img', {
            className: 'vk-widget_header__dots',
            src: './assets/images/dots.svg'
          }),
          _react2.default.createElement('img', {
            className: 'vk-widget_header__search',
            src: './assets/images/search.svg'
          })
        )
      );
    }
  }]);

  return VkHeader;
}(_react.Component);

exports.default = VkHeader;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _UserImage = __webpack_require__(9);

var _UserImage2 = _interopRequireDefault(_UserImage);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserImageSelect(_ref) {
  var imgUrl = _ref.imgUrl,
      label = _ref.label,
      imgTemp = _ref.imgTemp,
      onChangeImage = _ref.onChangeImage,
      _onChange = _ref.onChange,
      tempKey = _ref.tempKey;

  return _react2.default.createElement(
    'div',
    { className: 'vk_form vk_form__table' },
    _react2.default.createElement(
      'div',
      { className: 'vk_form__label clearfix' },
      _react2.default.createElement(
        'div',
        { className: 'vk_form__img-select-left' },
        label,
        ': ',
        _react2.default.createElement(_UserImage2.default, { src: imgUrl })
      ),
      _react2.default.createElement(
        'div',
        { className: 'vk_form__img-select-right' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', {
            type: 'url',
            className: 'vk_form__img-select-input',
            placeholder: _Language2.default.take('config.imageSelect.link'),
            value: imgTemp,
            onChange: function onChange(e) {
              return _onChange(e.target.value, 'temp', tempKey + 'Img');
            }
          }),
          _react2.default.createElement(
            'button',
            {
              className: 'vk_form__img-select-button',
              onClick: function onClick() {
                return onChangeImage('temp', tempKey, imgTemp);
              }
            },
            _Language2.default.take('config.imageSelect.button')
          )
        ),
        _react2.default.createElement(
          'label',
          { className: 'vk_form__img-select-label' },
          _react2.default.createElement(
            'div',
            {
              className: 'vk_form__img-select-button upload-button'
            },
            _Language2.default.take('config.imageSelect.upload')
          ),
          _react2.default.createElement('input', {
            className: 'd-none',
            type: 'file',
            onChange: function onChange(image) {
              return onChangeImage('file', tempKey, image);
            }
          })
        )
      )
    )
  );
}

exports.default = UserImageSelect;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TextInput(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      inline = _ref.inline,
      table = _ref.table,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'text' : _ref$type,
      _ref$required = _ref.required,
      required = _ref$required === undefined ? 'false' : _ref$required,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? '' : _ref$placeholder;

  var wrapper = (0, _classnames2.default)({
    'vk_form': true,
    'vk_form__inline': inline,
    'vk_form__table': table
  });

  return _react2.default.createElement(
    'div',
    { className: wrapper },
    _react2.default.createElement(
      'label',
      { className: 'vk_form__label' },
      _react2.default.createElement(
        'span',
        { className: 'vk_form__label-text' },
        label + ': '
      ),
      _react2.default.createElement('input', {
        required: required,
        type: type,
        className: 'vk_form__input',
        value: value,
        onChange: onChange,
        placeholder: placeholder
      })
    )
  );
}

exports.default = TextInput;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckBox(_ref) {
  var label = _ref.label,
      checked = _ref.checked,
      onChange = _ref.onChange,
      inline = _ref.inline,
      table = _ref.table;

  var wrapper = (0, _classnames2.default)({
    'vk_form': true,
    'vk_form__inline': inline,
    'vk_form__table': table
  });

  var image = checked ? 'checked' : 'check';

  return _react2.default.createElement(
    'div',
    { className: wrapper },
    _react2.default.createElement(
      'label',
      { className: 'vk_form__label' },
      _react2.default.createElement(
        'span',
        { className: 'vk_form__label-text' },
        label + ': '
      ),
      _react2.default.createElement(
        'div',
        { className: 'vk_form__checkbox-wrapper' },
        _react2.default.createElement('img', {
          src: './assets/images/' + image + '.svg',
          className: 'vk_form__checkbox'
        }),
        _react2.default.createElement('input', {
          className: 'hide-element',
          type: 'checkbox',
          checked: checked,
          onChange: onChange
        })
      )
    )
  );
}

exports.default = CheckBox;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SettingButton(_ref) {
  var content = _ref.content,
      full = _ref.full,
      handleClick = _ref.handleClick,
      distance = _ref.distance,
      ligth = _ref.ligth;

  var wrapper = (0, _classnames2.default)({
    'vk_form__setting-button': true,
    'vk_form__setting-button-full': full,
    'vk_form__setting-button-distance': distance,
    'vk_form__setting-button-ligth': ligth
  });

  return _react2.default.createElement(
    'button',
    { className: wrapper, onClick: handleClick },
    content
  );
}

exports.default = SettingButton;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VkHeader = function (_Component) {
  _inherits(VkHeader, _Component);

  function VkHeader() {
    _classCallCheck(this, VkHeader);

    return _possibleConstructorReturn(this, (VkHeader.__proto__ || Object.getPrototypeOf(VkHeader)).apply(this, arguments));
  }

  _createClass(VkHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'vk-widget_footer' },
        _react2.default.createElement(
          'div',
          { className: 'vk-widget_footer__left' },
          _react2.default.createElement('img', {
            className: 'vk-widget_footer__clip',
            src: './assets/images/clip.svg'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'vk-widget_footer__center' },
          _react2.default.createElement(
            'div',
            { className: 'vk-widget_footer__message' },
            _react2.default.createElement(
              'div',
              { className: 'vk-widget_footer__message-text' },
              _react2.default.createElement(
                'div',
                { className: 'vk-widget_footer__message-placeholder' },
                _Language2.default.take('content.writeMessage')
              ),
              _react2.default.createElement('img', {
                className: 'vk-widget_footer__smile',
                src: './assets/images/smile.svg'
              }),
              _react2.default.createElement('img', {
                className: 'vk-widget_footer__photo',
                src: './assets/images/photo.svg'
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'vk-widget_footer__right' },
          _react2.default.createElement('img', {
            className: 'vk-widget_footer__microphone',
            src: './assets/images/microphone.svg'
          })
        )
      );
    }
  }]);

  return VkHeader;
}(_react.Component);

exports.default = VkHeader;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mini = __webpack_require__(6);

var _SettingSections = __webpack_require__(50);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VkSettings = function (_Component) {
  _inherits(VkSettings, _Component);

  function VkSettings() {
    _classCallCheck(this, VkSettings);

    return _possibleConstructorReturn(this, (VkSettings.__proto__ || Object.getPrototypeOf(VkSettings)).apply(this, arguments));
  }

  _createClass(VkSettings, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          header = _props.header,
          components = _props.components,
          companion = _props.companion,
          current = _props.current,
          content = _props.content,
          temp = _props.temp,
          onChange = _props.onChange,
          onChangeImage = _props.onChangeImage;


      return _react2.default.createElement(
        'div',
        { className: 'widget-right__wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'widget-right__config' },
          _react2.default.createElement(_SettingSections.SectionTopPart, {
            header: header,
            onChange: onChange
          }),
          _react2.default.createElement(_SettingSections.SectionCurrentUser, {
            current: current,
            temp: temp,
            onChange: onChange,
            onChangeImage: onChangeImage
          }),
          _react2.default.createElement(_SettingSections.SectionInterlocutor, {
            companion: companion,
            temp: temp,
            onChange: onChange,
            onChangeImage: onChangeImage
          }),
          _react2.default.createElement(_SettingSections.SectionContent, {
            content: content,
            onChange: onChange
          }),
          _react2.default.createElement(_SettingSections.SectionSections, {
            components: components,
            onChange: onChange
          })
        )
      );
    }
  }]);

  return VkSettings;
}(_react.Component);

exports.default = VkSettings;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-card-flip");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var change = exports.change = function change(value, section, key) {
  return {
    type: 'VK_CHANGE_DATA',
    section: section,
    value: value,
    key: key
  };
};

var changeImage = exports.changeImage = function changeImage(type, key, img) {
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

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("html2canvas");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react2.default.createElement(
    'div',
    null,
    '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0441\u0435\u0442\u044C'
  );
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Fb;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Fb() {
  return _react2.default.createElement(
    'div',
    null,
    'Fb \u0432 \u0441\u0442\u0430\u0434\u0438\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438'
  );
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _PageGenerator = __webpack_require__(11);

var _PageGenerator2 = _interopRequireDefault(_PageGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Promise from 'bluebird';


var router = _express2.default.Router();

router.get('/vkontakte', vkontakte);
router.get('/facebook', facebook);

function vkontakte(req, res) {
  var app = {};

  var activeRoute = res.locals.activeRoute;
  app.language = res.locals.language;

  res.send(_PageGenerator2.default.getPage({ app: app }, activeRoute.config, req.url));
};

function facebook(req, res) {
  var app = {};

  var activeRoute = res.locals.activeRoute;
  app.language = res.locals.language;

  res.send(_PageGenerator2.default.getPage({ app: app }, activeRoute.config, req.url));
};

exports.router = router;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(38);

var _reduxThunk = __webpack_require__(39);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(40);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(42);

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store() {
    _classCallCheck(this, Store);
  }

  _createClass(Store, null, [{
    key: 'getInitialReducers',

    /**
     * Gets reducers objects.
     *
     * @return {Object}  Reducers by default
     */
    value: function getInitialReducers() {
      return {
        vk: _reducer2.default,
        app: _reducer4.default
      };
    }

    /**
     * Initializes store object.
     *
     * @param  {Object} initialReducers Initial reducers
     * @param  {Object} initialState    Initial state
     * @return {Object}                 Store object
     */

  }, {
    key: 'init',
    value: function init() {
      var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return (0, _redux.createStore)((0, _redux.combineReducers)(Store.getInitialReducers()), initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    }
  }]);

  return Store;
}();

exports.default = Store;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(41);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  components: {
    header: true,
    footer: true
  },
  header: {
    time: 'был в сети только что',
    mobile: false
  },
  content: {
    height: 200,
    separatorText: ''
  },
  companion: {
    name: 'Собеседник Беседник',
    image: _constants2.default.defaultImage
  },
  current: {
    name: 'Текущий пользователь',
    image: _constants2.default.defaultImage
  },
  temp: {
    companionImg: '',
    currentImg: ''
  }
};

var vk = function vk() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var _state = void 0;

  switch (action.type) {
    case 'VK_CHANGE_DATA':
      {
        var section = action.section,
            key = action.key,
            value = action.value;

        _state = _extends({}, state);
        _state[section][key] = value;
        return _state;
      }
    case 'VK_CHANGE_IMAGE':
      {
        var src = action.src,
            _key = action.key;

        _state = _extends({}, state);
        _state[_key].image = src;
        return _state;
      }
    default:
      {
        return state;
      }
  }
};

exports.default = vk;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultImage: './assets/images/user.png'
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = {
  language: ''
};

var app = function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  // let _state;

  switch (action.type) {
    default:
      {
        return state;
      }
  }
};

exports.default = app;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactstrap = __webpack_require__(5);

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

var _Menu = __webpack_require__(44);

var _Menu2 = _interopRequireDefault(_Menu);

var _NoMatch = __webpack_require__(47);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    if (false) {
      _Language2.default.setCurrentLang(props.language);
    }
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Menu2.default, null),
        _react2.default.createElement(
          _reactstrap.Container,
          { className: 'page-container' },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _routes2.default.map(function (_ref) {
              var config = _ref.config,
                  path = _ref.path,
                  exact = _ref.exact,
                  Page = _ref.component,
                  rest = _objectWithoutProperties(_ref, ['config', 'path', 'exact', 'component']);

              return _react2.default.createElement(_reactRouterDom.Route, { key: path, path: path, exact: exact,
                render: function render(props) {
                  if (false) {
                    document.title = _Language2.default.take(config.title);
                  }
                  return _react2.default.createElement(Page, _extends({}, props, rest));
                }
              });
            }),
            _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
                return _react2.default.createElement(_NoMatch2.default, props);
              } })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRouter = __webpack_require__(45);

var _reactstrap = __webpack_require__(5);

var _StringHelper = __webpack_require__(46);

var _StringHelper2 = _interopRequireDefault(_StringHelper);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _this.toggle = function () {
      var isOpen = _this.state.isOpen;

      _this.setState({
        isOpen: !isOpen
      });
    }, _this.handleExpendCollapse = function () {
      var isOpen = _this.state.isOpen;

      if (isOpen) {
        _this.setState({
          isOpen: false
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var pathname = this.props.location.pathname;


      return _react2.default.createElement(
        _reactstrap.Navbar,
        {
          color: 'light',
          light: true,
          expand: 'md',
          className: 'navbar-' + _StringHelper2.default.onlyEngLetters(pathname)
        },
        _react2.default.createElement(
          _reactstrap.Container,
          null,
          _react2.default.createElement(
            _reactstrap.NavbarBrand,
            {
              tag: _reactRouterDom.Link,
              to: '/',
              onClick: this.handleExpendCollapse
            },
            'Do Your Meme'
          ),
          _react2.default.createElement(_reactstrap.NavbarToggler, { onClick: this.toggle }),
          _react2.default.createElement(
            _reactstrap.Collapse,
            { isOpen: this.state.isOpen, navbar: true },
            _react2.default.createElement(
              _reactstrap.Nav,
              { className: 'ml-auto', navbar: true },
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    tag: _reactRouterDom.Link,
                    to: '/vkontakte',
                    active: pathname === '/vkontakte',
                    onClick: this.handleExpendCollapse
                  },
                  _Language2.default.take('menu.vk')
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    tag: _reactRouterDom.Link,
                    to: '/facebook',
                    active: pathname === '/facebook',
                    onClick: this.handleExpendCollapse
                  },
                  _Language2.default.take('menu.fb')
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    href: 'https://github.com/arman-zohrabyan',
                    target: '_blank'
                  },
                  'GitHub'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(Menu);

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringHelper = function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: 'onlyEngLetters',
    value: function onlyEngLetters(string) {
      var reg = new RegExp('[^a-zA-Z]+', 'g');
      return string.replace(reg, '');
    }
  }]);

  return StringHelper;
}();

exports.default = StringHelper;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NoMatch;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoMatch() {
  return _react2.default.createElement(
    'div',
    null,
    'Four Oh Four'
  );
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _PageGenerator = __webpack_require__(11);

var _PageGenerator2 = _interopRequireDefault(_PageGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Promise from 'bluebird';


var router = _express2.default.Router();

router.get('/', home);

function home(req, res) {
  var app = {};

  var activeRoute = res.locals.activeRoute;
  app.language = res.locals.language;

  res.send(_PageGenerator2.default.getPage({ app: app }, activeRoute.config, req.url));
};

exports.router = router;

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionSections = exports.SectionTopPart = exports.SectionCurrentUser = exports.SectionInterlocutor = exports.SectionContent = undefined;

var _SectionTopPart = __webpack_require__(58);

var _SectionTopPart2 = _interopRequireDefault(_SectionTopPart);

var _SectionContent = __webpack_require__(55);

var _SectionContent2 = _interopRequireDefault(_SectionContent);

var _SectionInterlocutor = __webpack_require__(56);

var _SectionInterlocutor2 = _interopRequireDefault(_SectionInterlocutor);

var _SectionSections = __webpack_require__(57);

var _SectionSections2 = _interopRequireDefault(_SectionSections);

var _SectionCurrentUser = __webpack_require__(59);

var _SectionCurrentUser2 = _interopRequireDefault(_SectionCurrentUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SectionContent = _SectionContent2.default;
exports.SectionInterlocutor = _SectionInterlocutor2.default;
exports.SectionCurrentUser = _SectionCurrentUser2.default;
exports.SectionTopPart = _SectionTopPart2.default;
exports.SectionSections = _SectionSections2.default;

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mini = __webpack_require__(6);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

var _reactCardFlip = __webpack_require__(29);

var _reactCardFlip2 = _interopRequireDefault(_reactCardFlip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SectionContent = function (_Component) {
  _inherits(SectionContent, _Component);

  function SectionContent(props) {
    _classCallCheck(this, SectionContent);

    var _this = _possibleConstructorReturn(this, (SectionContent.__proto__ || Object.getPrototypeOf(SectionContent)).call(this, props));

    _this.showBack = function () {
      _this.setState({
        isFlipped: true
      });
    };

    _this.showFront = function () {
      _this.setState({
        isFlipped: false
      });
    };

    _this.state = {
      isFlipped: false
    };

    _this.front = _react2.default.createRef();
    _this.back = _react2.default.createRef();
    _this.section = _react2.default.createRef();
    return _this;
  }

  _createClass(SectionContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var frontHeight = _reactDom2.default.findDOMNode(this.front.current).offsetHeight;
      var backHeight = _reactDom2.default.findDOMNode(this.back.current).offsetHeight;
      var section = _reactDom2.default.findDOMNode(this.section.current);

      var height = frontHeight > backHeight ? frontHeight : backHeight;
      section.style.height = height + 5 + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          content = _props.content,
          _onChange = _props.onChange;


      return _react2.default.createElement(
        'div',
        { ref: this.section, style: { 'height': '112px' } },
        _react2.default.createElement(
          _reactCardFlip2.default,
          {
            isFlipped: this.state.isFlipped
          },
          _react2.default.createElement(
            'div',
            { key: 'front', ref: this.front },
            _react2.default.createElement(
              'h3',
              { className: 'widget-right__config-title border-top' },
              _Language2.default.take('config.content.title')
            ),
            _react2.default.createElement(_mini.TextInput, {
              label: _Language2.default.take('config.content.height'),
              value: content.height,
              onChange: function onChange(e) {
                return _onChange(e.target.value, 'content', 'height');
              },
              type: 'number',
              required: true,
              table: true
            }),
            _react2.default.createElement(_mini.SettingButton, { content: _Language2.default.take('config.content.separator'), full: true, handleClick: this.showBack })
          ),
          _react2.default.createElement(
            'div',
            { key: 'back', ref: this.back },
            _react2.default.createElement(
              'h3',
              { className: 'widget-right__config-title border-top' },
              _Language2.default.take('config.content.separator')
            ),
            _react2.default.createElement(_mini.TextInput, {
              label: _Language2.default.take('config.content.separator.label'),
              placeholder: _Language2.default.take('config.content.separator.placeholder'),
              value: content.separatorText,
              onChange: function onChange(e) {
                return _onChange(e.target.value, 'content', 'separatorText');
              },
              required: true,
              table: true
            }),
            _react2.default.createElement(_mini.SettingButton, {
              content: _Language2.default.take('cancel'),
              handleClick: this.showFront,
              distance: true,
              ligth: true
            }),
            _react2.default.createElement(_mini.SettingButton, {
              content: _Language2.default.take('add'),
              handleClick: this.showFront,
              distance: true
            })
          )
        )
      );
    }
  }]);

  return SectionContent;
}(_react.Component);

exports.default = SectionContent;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mini = __webpack_require__(6);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

var _reactCardFlip = __webpack_require__(29);

var _reactCardFlip2 = _interopRequireDefault(_reactCardFlip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SectionInterlocutor = function (_Component) {
  _inherits(SectionInterlocutor, _Component);

  function SectionInterlocutor(props) {
    _classCallCheck(this, SectionInterlocutor);

    var _this = _possibleConstructorReturn(this, (SectionInterlocutor.__proto__ || Object.getPrototypeOf(SectionInterlocutor)).call(this, props));

    _this.showBack = function () {
      _this.setState({
        isFlipped: true
      });
    };

    _this.showFront = function () {
      _this.setState({
        isFlipped: false
      });
    };

    _this.state = {
      isFlipped: false
    };

    _this.front = _react2.default.createRef();
    _this.back = _react2.default.createRef();
    _this.section = _react2.default.createRef();
    return _this;
  }

  _createClass(SectionInterlocutor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var frontHeight = _reactDom2.default.findDOMNode(this.front.current).offsetHeight;
      var backHeight = _reactDom2.default.findDOMNode(this.back.current).offsetHeight;
      var section = _reactDom2.default.findDOMNode(this.section.current);

      var height = frontHeight > backHeight ? frontHeight : backHeight;
      section.style.height = height + 5 + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          companion = _props.companion,
          temp = _props.temp,
          _onChange = _props.onChange,
          onChangeImage = _props.onChangeImage;


      return _react2.default.createElement(
        'div',
        { ref: this.section, style: { 'height': '186px' } },
        _react2.default.createElement(
          _reactCardFlip2.default,
          {
            isFlipped: this.state.isFlipped
          },
          _react2.default.createElement(
            'div',
            { key: 'front', ref: this.front },
            _react2.default.createElement(
              'h3',
              { className: 'widget-right__config-title border-top' },
              _Language2.default.take('config.companion.title')
            ),
            _react2.default.createElement(_mini.TextInput, {
              label: _Language2.default.take('config.companion.fullName'),
              value: companion.name,
              onChange: function onChange(e) {
                return _onChange(e.target.value, 'companion', 'name');
              },
              required: true,
              table: true
            }),
            _react2.default.createElement(_mini.UserImageSelect, {
              label: _Language2.default.take('config.companion.avatar'),
              imgUrl: companion.image,
              imgTemp: temp.companionImg,
              tempKey: 'companion',
              onChange: _onChange,
              onChangeImage: onChangeImage
            }),
            _react2.default.createElement(_mini.SettingButton, { content: _Language2.default.take('config.companion.message'), full: true, handleClick: this.showBack })
          ),
          _react2.default.createElement(
            'div',
            { key: 'back', ref: this.back },
            _react2.default.createElement(
              'h3',
              { className: 'widget-right__config-title border-top' },
              _Language2.default.take('config.companion.title')
            ),
            _react2.default.createElement(_mini.TextInput, {
              label: _Language2.default.take('config.companion.fullName'),
              value: companion.name,
              onChange: function onChange(e) {
                return _onChange(e.target.value, 'companion', 'name');
              },
              required: true,
              table: true
            }),
            _react2.default.createElement(_mini.UserImageSelect, {
              label: _Language2.default.take('config.companion.avatar'),
              imgUrl: companion.image,
              imgTemp: temp.companionImg,
              tempKey: 'companion',
              onChange: _onChange,
              onChangeImage: onChangeImage
            }),
            _react2.default.createElement(_mini.SettingButton, {
              content: _Language2.default.take('cancel'),
              handleClick: this.showFront,
              distance: true,
              ligth: true
            }),
            _react2.default.createElement(_mini.SettingButton, {
              content: _Language2.default.take('add'),
              handleClick: this.showFront,
              distance: true
            })
          )
        )
      );
    }
  }]);

  return SectionInterlocutor;
}(_react.Component);

exports.default = SectionInterlocutor;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mini = __webpack_require__(6);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SectionSections = function (_Component) {
  _inherits(SectionSections, _Component);

  function SectionSections() {
    _classCallCheck(this, SectionSections);

    return _possibleConstructorReturn(this, (SectionSections.__proto__ || Object.getPrototypeOf(SectionSections)).apply(this, arguments));
  }

  _createClass(SectionSections, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          components = _props.components,
          _onChange = _props.onChange;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'h3',
          { className: 'widget-right__config-title border-top' },
          _Language2.default.take('config.sections.title')
        ),
        _react2.default.createElement(_mini.CheckBox, {
          label: _Language2.default.take('config.sections.top'),
          checked: components.header,
          onChange: function onChange(e) {
            return _onChange(e.target.checked, 'components', 'header');
          },
          table: true
        }),
        _react2.default.createElement(_mini.CheckBox, {
          label: _Language2.default.take('config.sections.bottom'),
          checked: components.footer,
          onChange: function onChange(e) {
            return _onChange(e.target.checked, 'components', 'footer');
          },
          table: true
        })
      );
    }
  }]);

  return SectionSections;
}(_react.Component);

exports.default = SectionSections;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mini = __webpack_require__(6);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SectionTopPart = function (_Component) {
  _inherits(SectionTopPart, _Component);

  function SectionTopPart() {
    _classCallCheck(this, SectionTopPart);

    return _possibleConstructorReturn(this, (SectionTopPart.__proto__ || Object.getPrototypeOf(SectionTopPart)).apply(this, arguments));
  }

  _createClass(SectionTopPart, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          header = _props.header,
          _onChange = _props.onChange;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'h3',
          { className: 'widget-right__config-title' },
          _Language2.default.take('config.top.title')
        ),
        _react2.default.createElement(_mini.TextInput, {
          label: _Language2.default.take('config.top.online'),
          value: header.time,
          onChange: function onChange(e) {
            return _onChange(e.target.value, 'header', 'time');
          },
          required: true,
          table: true
        }),
        _react2.default.createElement(_mini.CheckBox, {
          label: _Language2.default.take('config.top.mobile'),
          checked: header.mobile,
          onChange: function onChange(e) {
            return _onChange(e.target.checked, 'header', 'mobile');
          },
          table: true
        })
      );
    }
  }]);

  return SectionTopPart;
}(_react.Component);

exports.default = SectionTopPart;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mini = __webpack_require__(6);

var _Language = __webpack_require__(1);

var _Language2 = _interopRequireDefault(_Language);

var _reactCardFlip = __webpack_require__(29);

var _reactCardFlip2 = _interopRequireDefault(_reactCardFlip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SectionCurrentUser = function (_Component) {
  _inherits(SectionCurrentUser, _Component);

  function SectionCurrentUser(props) {
    _classCallCheck(this, SectionCurrentUser);

    var _this = _possibleConstructorReturn(this, (SectionCurrentUser.__proto__ || Object.getPrototypeOf(SectionCurrentUser)).call(this, props));

    _this.showBack = function () {
      _this.setState({
        isFlipped: true
      });
    };

    _this.showFront = function () {
      _this.setState({
        isFlipped: false
      });
    };

    _this.state = {
      isFlipped: false
    };

    _this.front = _react2.default.createRef();
    _this.back = _react2.default.createRef();
    _this.section = _react2.default.createRef();
    return _this;
  }

  _createClass(SectionCurrentUser, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var frontHeight = _reactDom2.default.findDOMNode(this.front.current).offsetHeight;
      var backHeight = _reactDom2.default.findDOMNode(this.back.current).offsetHeight;
      var section = _reactDom2.default.findDOMNode(this.section.current);

      var height = frontHeight > backHeight ? frontHeight : backHeight;
      section.style.height = height + 5 + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          current = _props.current,
          temp = _props.temp,
          _onChange = _props.onChange,
          onChangeImage = _props.onChangeImage;


      return _react2.default.createElement(
        'div',
        { ref: this.section, style: { 'height': '186px' } },
        _react2.default.createElement(
          _reactCardFlip2.default,
          {
            isFlipped: this.state.isFlipped
          },
          _react2.default.createElement(
            'div',
            { key: 'front', ref: this.front },
            _react2.default.createElement(
              'h3',
              { className: 'widget-right__config-title border-top' },
              _Language2.default.take('config.current.title')
            ),
            _react2.default.createElement(_mini.TextInput, {
              label: _Language2.default.take('config.current.fullName'),
              value: current.name,
              onChange: function onChange(e) {
                return _onChange(e.target.value, 'current', 'name');
              },
              required: true,
              table: true
            }),
            _react2.default.createElement(_mini.UserImageSelect, {
              label: _Language2.default.take('config.current.avatar'),
              imgUrl: current.image,
              imgTemp: temp.currentImg,
              tempKey: 'current',
              onChange: _onChange,
              onChangeImage: onChangeImage
            }),
            _react2.default.createElement(_mini.SettingButton, { content: _Language2.default.take('config.current.message'), full: true, handleClick: this.showBack })
          ),
          _react2.default.createElement(
            'div',
            { key: 'back', ref: this.back },
            _react2.default.createElement(
              'h3',
              { className: 'widget-right__config-title border-top' },
              _Language2.default.take('config.current.title')
            ),
            _react2.default.createElement(_mini.TextInput, {
              label: _Language2.default.take('config.current.fullName'),
              value: current.name,
              onChange: function onChange(e) {
                return _onChange(e.target.value, 'current', 'name');
              },
              required: true,
              table: true
            }),
            _react2.default.createElement(_mini.UserImageSelect, {
              label: _Language2.default.take('config.current.avatar'),
              imgUrl: current.image,
              imgTemp: temp.currentImg,
              tempKey: 'current',
              onChange: _onChange,
              onChangeImage: onChangeImage
            }),
            _react2.default.createElement(_mini.SettingButton, {
              content: _Language2.default.take('cancel'),
              handleClick: this.showFront,
              distance: true,
              ligth: true
            }),
            _react2.default.createElement(_mini.SettingButton, {
              content: _Language2.default.take('add'),
              handleClick: this.showFront,
              distance: true
            })
          )
        )
      );
    }
  }]);

  return SectionCurrentUser;
}(_react.Component);

exports.default = SectionCurrentUser;

/***/ })
/******/ ]);