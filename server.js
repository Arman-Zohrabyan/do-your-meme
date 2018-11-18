/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_languages__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Language = function Language() {
  var _this = this;

  _classCallCheck(this, Language);

  _defineProperty(this, "language", '');

  _defineProperty(this, "setCurrentLang", function (language) {
    _this.language = language;
  });

  _defineProperty(this, "take", function (key) {
    var language = _this.language;
    return __WEBPACK_IMPORTED_MODULE_0__config_languages__["a" /* default */][language][key];
  });
};

/* harmony default export */ __webpack_exports__["a"] = (new Language());

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_loadable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_loadable__);
var _Loadable, _Loadable2, _Loadable3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var VkContainer = __WEBPACK_IMPORTED_MODULE_2_react_loadable___default()((_Loadable = {
  loader: function loader() {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 9));
  },
  modules: ['./containers/Vk/VkContainer'],
  webpack: function webpack() {
    return [/*require.resolve*/(9)];
  }
}, _defineProperty(_Loadable, "modules", ['./containers/Vk/VkContainer']), _defineProperty(_Loadable, "loading", function loading() {
  return null;
}), _Loadable));
var Home = __WEBPACK_IMPORTED_MODULE_2_react_loadable___default()((_Loadable2 = {
  loader: function loader() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 11));
  },
  modules: ['./components/Home'],
  webpack: function webpack() {
    return [/*require.resolve*/(11)];
  }
}, _defineProperty(_Loadable2, "modules", ['./components/Home']), _defineProperty(_Loadable2, "loading", function loading() {
  return null;
}), _Loadable2));
var Fb = __WEBPACK_IMPORTED_MODULE_2_react_loadable___default()((_Loadable3 = {
  loader: function loader() {
    return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 12));
  },
  modules: ['./components/Fb'],
  webpack: function webpack() {
    return [/*require.resolve*/(12)];
  }
}, _defineProperty(_Loadable3, "modules", ['./components/Fb']), _defineProperty(_Loadable3, "loading", function loading() {
  return null;
}), _Loadable3)); // import Language from './classes/Language';

var routes = [{
  path: '/',
  exact: true,
  component: Home,
  config: {
    title: 'titles.home'
  }
}, {
  path: '/vkontakte',
  exact: true,
  component: VkContainer,
  config: {
    title: 'titles.vk'
  }
}, {
  path: '/facebook',
  exact: true,
  component: Fb,
  config: {
    title: 'titles.fb'
  }
}];
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  'ru': {
    'underDevelopment': 'в стадии разработки...',
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
    'config.current.msg.title': 'Сообщение пользователя',
    'config.msg.label': 'Сообщение',
    'config.msgTime.label': 'Время отправки',
    'config.msgTime.placeholder': 'пример: 14:00',
    'config.companion.msg.title': 'Сообщение собеседник',
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
    'underDevelopment': 'under development...',
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
    'config.current.msg.title': 'User message',
    'config.msg.label': 'message',
    'config.msgTime.label': 'User message',
    'config.msgTime.placeholder': 'example: 14:00',
    'config.companion.msg.title': 'Interlocutor message',
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
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_loadable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable_webpack__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_loadable_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_store_Store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_components_App__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_classes_Language__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__public_react_loadable_json__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__public_react_loadable_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__public_react_loadable_json__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







 // import { Helmet } from 'react-helmet';






var PageGenerator =
/*#__PURE__*/
function () {
  function PageGenerator() {
    _classCallCheck(this, PageGenerator);
  }

  _createClass(PageGenerator, null, [{
    key: "page",

    /**
     * Renders html page.
     *
     * @param  {Object} params Page params
     * @return {string}        Page html
     */
    value: function page(_ref) {
      var state = _ref.state,
          head = _ref.head,
          body = _ref.body,
          bundles = _ref.bundles;
      return ['<!DOCTYPE html>', '<html>', '<head>', '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">', "<title>".concat(__WEBPACK_IMPORTED_MODULE_9__src_classes_Language__["a" /* default */].take(head.title), "</title>"), '<meta name="viewport" content="width=600, initial-scale=0.6, maximum-scale=1"/>', '<meta charset="utf-8">', '<link href="/bundle.css" rel="stylesheet">', "<script>window.__INITIAL_STATE__ = ".concat(__WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default()(state), "</script>"), '</head>', '<body>', "<div id=\"app\">".concat(body, "</div>"), '<script src="/manifest.js"></script>'].concat(_toConsumableArray(bundles.map(function (bundle) {
        return "<script src=\"".concat(bundle.publicPath, "\"></script>");
      })), ['<script src="/bundle.js"></script>', '</body>', '</html>']).join('\n');
    }
    /**
     * Returns page html.
     *
     * @param  {Object}  state     Initial state.
     * @return {string}            Page html.
     */

  }, {
    key: "getPage",
    value: function getPage() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var head = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
      var modules = [];
      __WEBPACK_IMPORTED_MODULE_9__src_classes_Language__["a" /* default */].setCurrentLang(state.app.language);
      var store = __WEBPACK_IMPORTED_MODULE_7__src_store_Store__["a" /* default */].init(state);
      var body = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_loadable___default.a.Capture, {
        report: function report(moduleName) {
          return modules.push(moduleName);
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"], {
        store: store
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["StaticRouter"], {
        location: url,
        context: {
          state: state
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_components_App__["a" /* default */], {
        language: state.app.language
      })))));
      var bundles = Object(__WEBPACK_IMPORTED_MODULE_6_react_loadable_webpack__["getBundles"])(__WEBPACK_IMPORTED_MODULE_10__public_react_loadable_json___default.a, modules); // const helmet = Helmet.renderStatic();

      return this.page({
        state: store.getState(),
        head: head,
        body: body,
        bundles: bundles
      });
    }
    /**
     * Returns page 404.
     *
     * @return {string} Page html.
     */

  }, {
    key: "notFound",
    value: function notFound() {
      return ['<!DOCTYPE html>', '<html lang="ru">', '<head>', '</head>', '<body>', '<div id="notFound">', '<p>Запрашиваемая страница не существует</p>', '<a href="/">Вернуться на главную страницу</a>', '</div>', '</body>', '</html>'].join('\n');
    }
  }]);

  return PageGenerator;
}();

/* harmony default export */ __webpack_exports__["a"] = (PageGenerator);

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_loadable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customMiddlewares__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_routerSocialPages__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_routerHome__ = __webpack_require__(37);







/* Initializes express */

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
/* Enables cors */

app.use(__WEBPACK_IMPORTED_MODULE_1_cors___default()());
/* Uses cookie parser middleware */

app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
/* Tells the app to look for static files in these directories */

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('public'));
/* Sets custom middlewares */

app.use(__WEBPACK_IMPORTED_MODULE_4__customMiddlewares__["a" /* default */]);
app.get('/*', __WEBPACK_IMPORTED_MODULE_6__routes_routerHome__["a" /* router */]);
app.get('/*', __WEBPACK_IMPORTED_MODULE_5__routes_routerSocialPages__["a" /* router */]);
var PORT = process.env.PORT || 3000;
__WEBPACK_IMPORTED_MODULE_3_react_loadable___default.a.preloadAll().then(function () {
  app.listen(PORT, function () {
    console.log('Server is listening on port: 3000');
  });
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MiddlewaresHandler__ = __webpack_require__(17);


var customMiddlewares = function customMiddlewares(req, res, next) {
  res.locals.language = __WEBPACK_IMPORTED_MODULE_0__MiddlewaresHandler__["a" /* default */].getLanguage(req, res);
  res.locals.activeRoute = __WEBPACK_IMPORTED_MODULE_0__MiddlewaresHandler__["a" /* default */].getActiveRoute(req);
  next();
};

/* harmony default export */ __webpack_exports__["a"] = (customMiddlewares);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_geoip_lite__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_geoip_lite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_geoip_lite__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_request_ip__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_request_ip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_request_ip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_routes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_languages__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var MiddlewaresHandler = function MiddlewaresHandler() {
  _classCallCheck(this, MiddlewaresHandler);
};

_defineProperty(MiddlewaresHandler, "getActiveRoute", function (req) {
  return __WEBPACK_IMPORTED_MODULE_3__src_routes__["a" /* default */].find(function (route) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__["matchPath"])(req.url, route);
  }) || {};
});

_defineProperty(MiddlewaresHandler, "languageAction", function (req) {
  var userIp = __WEBPACK_IMPORTED_MODULE_2_request_ip___default.a.getClientIp(req);
  var geo = __WEBPACK_IMPORTED_MODULE_1_geoip_lite___default.a.lookup(userIp) || {};

  if (geo.country) {
    var userLanguage = geo.country.toLowerCase();
    var supportedLanguages = Object.keys(__WEBPACK_IMPORTED_MODULE_4__config_languages__["a" /* default */]);

    if (supportedLanguages.includes(userLanguage)) {
      return userLanguage;
    }
  }

  return 'en';
});

_defineProperty(MiddlewaresHandler, "getLanguage", function (req, res) {
  var supportedLanguages = Object.keys(__WEBPACK_IMPORTED_MODULE_4__config_languages__["a" /* default */]);
  var cookieLanguage = req.cookies.language;

  if (cookieLanguage && supportedLanguages.includes(cookieLanguage)) {
    return cookieLanguage;
  }

  var language = MiddlewaresHandler.languageAction(req);
  res.cookie('language', language, {
    expire: new Date() + 30 * 24 * 60 * 60
  });
  return language;
});

/* harmony default export */ __webpack_exports__["a"] = (MiddlewaresHandler);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("geoip-lite");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("request-ip");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_PageGenerator__ = __webpack_require__(8);

 // import Promise from 'bluebird';

var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
router.get('/vkontakte', vkontakte);
router.get('/facebook', facebook);

function vkontakte(req, res) {
  var app = {};
  var activeRoute = res.locals.activeRoute;
  app.language = res.locals.language;
  res.send(__WEBPACK_IMPORTED_MODULE_1__classes_PageGenerator__["a" /* default */].getPage({
    app: app
  }, activeRoute.config, req.url));
}

;

function facebook(req, res) {
  var app = {};
  var activeRoute = res.locals.activeRoute;
  app.language = res.locals.language;
  res.send(__WEBPACK_IMPORTED_MODULE_1__classes_PageGenerator__["a" /* default */].getPage({
    app: app
  }, activeRoute.config, req.url));
}

;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-loadable/webpack");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vk_reducer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_reducer__ = __webpack_require__(30);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Store =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);
  }

  _createClass(Store, null, [{
    key: "getInitialReducers",

    /**
     * Gets reducers objects.
     *
     * @return {Object}  Reducers by default
     */
    value: function getInitialReducers() {
      return {
        vk: __WEBPACK_IMPORTED_MODULE_2__vk_reducer__["a" /* default */],
        app: __WEBPACK_IMPORTED_MODULE_3__app_reducer__["a" /* default */]
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
    key: "init",
    value: function init() {
      var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Store.getInitialReducers()), initialState, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a));
    }
  }]);

  return Store;
}();

/* harmony default export */ __webpack_exports__["a"] = (Store);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_constants__ = __webpack_require__(29);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  widgetContent: [],
  components: {
    header: true,
    footer: true
  },
  header: {
    time: 'был в сети только что',
    mobile: false
  },
  content: {
    height: 250,
    separatorText: ''
  },
  companion: {
    name: 'Собеседник Беседник',
    image: __WEBPACK_IMPORTED_MODULE_0__config_constants__["a" /* default */].defaultImage,
    msgTime: '',
    message: ''
  },
  current: {
    name: 'Текущий пользователь',
    image: __WEBPACK_IMPORTED_MODULE_0__config_constants__["a" /* default */].defaultImage,
    msgTime: '',
    message: ''
  },
  temp: {
    companionImg: '',
    currentImg: ''
  }
};

var vk = function vk() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var _state;

  switch (action.type) {
    case 'VK_CHANGE_DATA':
      {
        var section = action.section,
            key = action.key,
            value = action.value;
        _state = _objectSpread({}, state);
        _state[section][key] = value;
        return _state;
      }

    case 'VK_CHANGE_IMAGE':
      {
        var src = action.src,
            _key = action.key;
        _state = _objectSpread({}, state);
        _state[_key].image = src;
        return _state;
      }

    case 'VK_CHANGE_WIDGET_CONTENT':
      {
        var widgetContent = action.widgetContent;
        _state = _objectSpread({}, state);
        _state.widgetContent = widgetContent;
        return _state;
      }

    case 'VK_CLEAR_INPUT':
      {
        var _section = action.section,
            name = action.name;
        _state = _objectSpread({}, state);
        _state[_section][name] = '';
        return _state;
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (vk);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  defaultImage: './assets/images/user.png'
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var initialState = {
  language: ''
};

var app = function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  // let _state;
  switch (action.type) {
    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NoMatch__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_Language__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    if (false) {
      Language.setCurrentLang(props.language);
    }

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Menu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Container"], {
        className: "page-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"], null, __WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */].map(function (_ref) {
        var config = _ref.config,
            path = _ref.path,
            exact = _ref.exact,
            Page = _ref.component,
            rest = _objectWithoutProperties(_ref, ["config", "path", "exact", "component"]);

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], {
          key: path,
          path: path,
          exact: exact,
          render: function render(props) {
            if (false) {
              document.title = Language.take(config.title);
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Page, _extends({}, props, rest));
          }
        });
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], {
        render: function render(props) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__NoMatch__["a" /* default */], props);
        }
      }))));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_StringHelper__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_Language__ = __webpack_require__(2);
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








var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function () {
      var isOpen = _this.state.isOpen;

      _this.setState({
        isOpen: !isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleExpendCollapse", function () {
      var isOpen = _this.state.isOpen;

      if (isOpen) {
        _this.setState({
          isOpen: false
        });
      }
    });

    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var pathname = this.props.location.pathname;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Navbar"], {
        color: "light",
        light: true,
        expand: "md",
        className: "navbar-".concat(__WEBPACK_IMPORTED_MODULE_4__helpers_StringHelper__["a" /* default */].onlyEngLetters(pathname))
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Container"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavbarBrand"], {
        tag: __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
        to: "/",
        onClick: this.handleExpendCollapse
      }, "Do Your Meme"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavbarToggler"], {
        onClick: this.toggle
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Nav"], {
        className: "ml-auto",
        navbar: true
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        tag: __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
        to: "/vkontakte",
        active: pathname === '/vkontakte',
        onClick: this.handleExpendCollapse
      }, __WEBPACK_IMPORTED_MODULE_5__classes_Language__["a" /* default */].take('menu.vk'))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        tag: __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
        to: "/facebook",
        active: pathname === '/facebook',
        onClick: this.handleExpendCollapse
      }, __WEBPACK_IMPORTED_MODULE_5__classes_Language__["a" /* default */].take('menu.fb'))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        href: "https://github.com/arman-zohrabyan",
        target: "_blank"
      }, "GitHub"))))));
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["withRouter"])(Menu));

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "onlyEngLetters",
    value: function onlyEngLetters(string) {
      var reg = new RegExp('[^a-zA-Z]+', 'g');
      return string.replace(reg, '');
    }
  }]);

  return StringHelper;
}();

/* harmony default export */ __webpack_exports__["a"] = (StringHelper);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NoMatch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

function NoMatch() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Four Oh Four");
}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {"./containers/Vk/VkContainer":[{"id":45,"name":"./src/containers/Vk/VkContainer.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./mini":[{"id":122,"name":"./src/components/Vk/mini/index.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Color":[{"id":123,"name":"./node_modules/html2canvas/dist/npm/Color.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Length":[{"id":124,"name":"./node_modules/html2canvas/dist/npm/Length.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Bounds":[{"id":125,"name":"./node_modules/html2canvas/dist/npm/Bounds.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./NodeContainer":[{"id":126,"name":"./node_modules/html2canvas/dist/npm/NodeContainer.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Util":[{"id":127,"name":"./node_modules/html2canvas/dist/npm/Util.js","file":"0.bundle.js","publicPath":"/0.bundle.js"},{"id":137,"name":"./node_modules/css-line-break/dist/Util.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/background":[{"id":128,"name":"./node_modules/html2canvas/dist/npm/parsing/background.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"../drawing/Path":[{"id":129,"name":"./node_modules/html2canvas/dist/npm/drawing/Path.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./drawing/Vector":[{"id":130,"name":"./node_modules/html2canvas/dist/npm/drawing/Vector.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/listStyle":[{"id":131,"name":"./node_modules/html2canvas/dist/npm/parsing/listStyle.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./TextContainer":[{"id":132,"name":"./node_modules/html2canvas/dist/npm/TextContainer.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Feature":[{"id":133,"name":"./node_modules/html2canvas/dist/npm/Feature.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"react-card-flip":[{"id":134,"name":"./node_modules/react-card-flip/lib/react-card-flip.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"../parsing/textDecoration":[{"id":135,"name":"./node_modules/html2canvas/dist/npm/parsing/textDecoration.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/border":[{"id":136,"name":"./node_modules/html2canvas/dist/npm/parsing/border.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./ListItem":[{"id":138,"name":"./node_modules/html2canvas/dist/npm/ListItem.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./UserImage":[{"id":139,"name":"./src/components/Vk/mini/UserImage.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./renderer/CanvasRenderer":[{"id":140,"name":"./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Logger":[{"id":141,"name":"./node_modules/html2canvas/dist/npm/Logger.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/padding":[{"id":142,"name":"./node_modules/html2canvas/dist/npm/parsing/padding.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/overflowWrap":[{"id":143,"name":"./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/position":[{"id":144,"name":"./node_modules/html2canvas/dist/npm/parsing/position.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/textTransform":[{"id":145,"name":"./node_modules/html2canvas/dist/npm/parsing/textTransform.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Input":[{"id":146,"name":"./node_modules/html2canvas/dist/npm/Input.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./TextBounds":[{"id":147,"name":"./node_modules/html2canvas/dist/npm/TextBounds.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./renderer/ForeignObjectRenderer":[{"id":148,"name":"./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Unicode":[{"id":149,"name":"./node_modules/html2canvas/dist/npm/Unicode.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Font":[{"id":150,"name":"./node_modules/html2canvas/dist/npm/Font.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Proxy":[{"id":151,"name":"./node_modules/html2canvas/dist/npm/Proxy.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"../../components/Vk/VkWidget":[{"id":152,"name":"./src/components/Vk/VkWidget.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./VkHeader":[{"id":153,"name":"./src/components/Vk/VkHeader.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./UserImageSelect":[{"id":154,"name":"./src/components/Vk/mini/UserImageSelect.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./TextInput":[{"id":155,"name":"./src/components/Vk/mini/TextInput.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./CheckBox":[{"id":156,"name":"./src/components/Vk/mini/CheckBox.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./MessageBox":[{"id":157,"name":"./src/components/Vk/mini/MessageBox.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./SettingButton":[{"id":158,"name":"./src/components/Vk/mini/SettingButton.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./VkFooter":[{"id":159,"name":"./src/components/Vk/VkFooter.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./widget/WidgetSeparator":[{"id":160,"name":"./src/components/Vk/widget/WidgetSeparator.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./widget/WidgetMessage":[{"id":161,"name":"./src/components/Vk/widget/WidgetMessage.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"../../components/Vk/VkSettings":[{"id":162,"name":"./src/components/Vk/VkSettings.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./SettingSections":[{"id":163,"name":"./src/components/Vk/SettingSections/index.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./SectionTopPart":[{"id":164,"name":"./src/components/Vk/SettingSections/SectionTopPart.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./SectionContent":[{"id":165,"name":"./src/components/Vk/SettingSections/SectionContent.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./SectionInterlocutor":[{"id":166,"name":"./src/components/Vk/SettingSections/SectionInterlocutor.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./SectionSections":[{"id":167,"name":"./src/components/Vk/SettingSections/SectionSections.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./SectionCurrentUser":[{"id":168,"name":"./src/components/Vk/SettingSections/SectionCurrentUser.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"../../store/vk/actions":[{"id":169,"name":"./src/store/vk/actions.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"html2canvas":[{"id":170,"name":"./node_modules/html2canvas/dist/npm/index.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Window":[{"id":171,"name":"./node_modules/html2canvas/dist/npm/Window.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./NodeParser":[{"id":172,"name":"./node_modules/html2canvas/dist/npm/NodeParser.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./StackingContext":[{"id":173,"name":"./node_modules/html2canvas/dist/npm/StackingContext.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"../drawing/Size":[{"id":174,"name":"./node_modules/html2canvas/dist/npm/drawing/Size.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./drawing/BezierCurve":[{"id":175,"name":"./node_modules/html2canvas/dist/npm/drawing/BezierCurve.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/borderRadius":[{"id":176,"name":"./node_modules/html2canvas/dist/npm/parsing/borderRadius.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/display":[{"id":177,"name":"./node_modules/html2canvas/dist/npm/parsing/display.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/float":[{"id":178,"name":"./node_modules/html2canvas/dist/npm/parsing/float.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/font":[{"id":179,"name":"./node_modules/html2canvas/dist/npm/parsing/font.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/letterSpacing":[{"id":180,"name":"./node_modules/html2canvas/dist/npm/parsing/letterSpacing.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/lineBreak":[{"id":181,"name":"./node_modules/html2canvas/dist/npm/parsing/lineBreak.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/margin":[{"id":182,"name":"./node_modules/html2canvas/dist/npm/parsing/margin.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/overflow":[{"id":183,"name":"./node_modules/html2canvas/dist/npm/parsing/overflow.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/textShadow":[{"id":184,"name":"./node_modules/html2canvas/dist/npm/parsing/textShadow.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/transform":[{"id":185,"name":"./node_modules/html2canvas/dist/npm/parsing/transform.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/visibility":[{"id":186,"name":"./node_modules/html2canvas/dist/npm/parsing/visibility.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/word-break":[{"id":187,"name":"./node_modules/html2canvas/dist/npm/parsing/word-break.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./parsing/zIndex":[{"id":188,"name":"./node_modules/html2canvas/dist/npm/parsing/zIndex.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"css-line-break":[{"id":189,"name":"./node_modules/css-line-break/dist/index.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./LineBreak":[{"id":190,"name":"./node_modules/css-line-break/dist/LineBreak.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Trie":[{"id":191,"name":"./node_modules/css-line-break/dist/Trie.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./linebreak-trie":[{"id":192,"name":"./node_modules/css-line-break/dist/linebreak-trie.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./drawing/Circle":[{"id":193,"name":"./node_modules/html2canvas/dist/npm/drawing/Circle.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Renderer":[{"id":194,"name":"./node_modules/html2canvas/dist/npm/Renderer.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Gradient":[{"id":195,"name":"./node_modules/html2canvas/dist/npm/Gradient.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Angle":[{"id":196,"name":"./node_modules/html2canvas/dist/npm/Angle.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./Clone":[{"id":197,"name":"./node_modules/html2canvas/dist/npm/Clone.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./ResourceLoader":[{"id":198,"name":"./node_modules/html2canvas/dist/npm/ResourceLoader.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./PseudoNodeContent":[{"id":199,"name":"./node_modules/html2canvas/dist/npm/PseudoNodeContent.js","file":"0.bundle.js","publicPath":"/0.bundle.js"}],"./components/Home":[{"id":46,"name":"./src/components/Home.js","file":"1.bundle.js","publicPath":"/1.bundle.js"}],"./components/Fb":[{"id":47,"name":"./src/components/Fb.js","file":"2.bundle.js","publicPath":"/2.bundle.js"}],"path":[{"id":110,"name":"./node_modules/path-browserify/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":110,"name":"./node_modules/path-browserify/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"./browser/index.js":[{"id":48,"name":"./browser/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":48,"name":"./browser/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-dom":[{"id":22,"name":"./node_modules/react-dom/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":22,"name":"./node_modules/react-dom/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router-dom":[{"id":15,"name":"./node_modules/react-router-dom/es/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":15,"name":"./node_modules/react-router-dom/es/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-redux":[{"id":44,"name":"./node_modules/react-redux/es/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":44,"name":"./node_modules/react-redux/es/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-loadable":[{"id":42,"name":"./node_modules/react-loadable/lib/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":42,"name":"./node_modules/react-loadable/lib/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"../src/components/App":[{"id":98,"name":"./src/components/App.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":98,"name":"./src/components/App.js","file":"bundle.css","publicPath":"/bundle.css"}],"../src/store/Store":[{"id":116,"name":"./src/store/Store.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":116,"name":"./src/store/Store.js","file":"bundle.css","publicPath":"/bundle.css"}],"../src/styles/style.scss":[{"id":121,"name":"./src/styles/style.scss","file":"bundle.js","publicPath":"/bundle.js"},{"id":121,"name":"./src/styles/style.scss","file":"bundle.css","publicPath":"/bundle.css"}],"redux":[{"id":38,"name":"./node_modules/redux/es/redux.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":38,"name":"./node_modules/redux/es/redux.js","file":"bundle.css","publicPath":"/bundle.css"}],"redux-thunk":[{"id":117,"name":"./node_modules/redux-thunk/es/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":117,"name":"./node_modules/redux-thunk/es/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"./vk/reducer":[{"id":118,"name":"./src/store/vk/reducer.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":118,"name":"./src/store/vk/reducer.js","file":"bundle.css","publicPath":"/bundle.css"}],"./app/reducer":[{"id":120,"name":"./src/store/app/reducer.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":120,"name":"./src/store/app/reducer.js","file":"bundle.css","publicPath":"/bundle.css"}],"../../../config/constants":[{"id":119,"name":"./config/constants.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":119,"name":"./config/constants.js","file":"bundle.css","publicPath":"/bundle.css"}],"./../process/browser.js":[{"id":1,"name":"./node_modules/process/browser.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":1,"name":"./node_modules/process/browser.js","file":"bundle.css","publicPath":"/bundle.css"}],"symbol-observable":[{"id":82,"name":"./node_modules/symbol-observable/es/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":82,"name":"./node_modules/symbol-observable/es/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"./../../webpack/buildin/global.js":[{"id":12,"name":"./node_modules/webpack/buildin/global.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":12,"name":"./node_modules/webpack/buildin/global.js","file":"bundle.css","publicPath":"/bundle.css"}],"./../../webpack/buildin/harmony-module.js":[{"id":83,"name":"./node_modules/webpack/buildin/harmony-module.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":83,"name":"./node_modules/webpack/buildin/harmony-module.js","file":"bundle.css","publicPath":"/bundle.css"}],"./ponyfill.js":[{"id":84,"name":"./node_modules/symbol-observable/es/ponyfill.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":84,"name":"./node_modules/symbol-observable/es/ponyfill.js","file":"bundle.css","publicPath":"/bundle.css"}],"reactstrap":[{"id":23,"name":"./node_modules/reactstrap/dist/reactstrap.es.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":23,"name":"./node_modules/reactstrap/dist/reactstrap.es.js","file":"bundle.css","publicPath":"/bundle.css"}],"../routes":[{"id":109,"name":"./src/routes.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":109,"name":"./src/routes.js","file":"bundle.css","publicPath":"/bundle.css"}],"./Menu":[{"id":112,"name":"./src/components/Menu.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":112,"name":"./src/components/Menu.js","file":"bundle.css","publicPath":"/bundle.css"}],"./NoMatch":[{"id":115,"name":"./src/components/NoMatch.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":115,"name":"./src/components/NoMatch.js","file":"bundle.css","publicPath":"/bundle.css"}],"../classes/Language":[{"id":21,"name":"./src/classes/Language.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":21,"name":"./src/classes/Language.js","file":"bundle.css","publicPath":"/bundle.css"}],"../../config/languages":[{"id":111,"name":"./config/languages.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":111,"name":"./config/languages.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router":[{"id":113,"name":"./node_modules/react-router/es/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":113,"name":"./node_modules/react-router/es/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"../helpers/StringHelper":[{"id":114,"name":"./src/helpers/StringHelper.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":114,"name":"./src/helpers/StringHelper.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router/es/MemoryRouter":[{"id":27,"name":"./node_modules/react-router/es/MemoryRouter.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":27,"name":"./node_modules/react-router/es/MemoryRouter.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router/es/Prompt":[{"id":30,"name":"./node_modules/react-router/es/Prompt.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":30,"name":"./node_modules/react-router/es/Prompt.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router/es/Redirect":[{"id":31,"name":"./node_modules/react-router/es/Redirect.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":31,"name":"./node_modules/react-router/es/Redirect.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router/es/Route":[{"id":18,"name":"./node_modules/react-router/es/Route.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":18,"name":"./node_modules/react-router/es/Route.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router/es/Router":[{"id":10,"name":"./node_modules/react-router/es/Router.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":10,"name":"./node_modules/react-router/es/Router.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router/es/StaticRouter":[{"id":32,"name":"./node_modules/react-router/es/StaticRouter.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":32,"name":"./node_modules/react-router/es/StaticRouter.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router/es/Switch":[{"id":33,"name":"./node_modules/react-router/es/Switch.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":33,"name":"./node_modules/react-router/es/Switch.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router/es/generatePath":[{"id":19,"name":"./node_modules/react-router/es/generatePath.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":19,"name":"./node_modules/react-router/es/generatePath.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router/es/matchPath":[{"id":11,"name":"./node_modules/react-router/es/matchPath.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":11,"name":"./node_modules/react-router/es/matchPath.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-router/es/withRouter":[{"id":34,"name":"./node_modules/react-router/es/withRouter.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":34,"name":"./node_modules/react-router/es/withRouter.js","file":"bundle.css","publicPath":"/bundle.css"}],"prop-types":[{"id":2,"name":"./node_modules/prop-types/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":2,"name":"./node_modules/prop-types/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"hoist-non-react-statics":[{"id":35,"name":"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":35,"name":"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js","file":"bundle.css","publicPath":"/bundle.css"}],"./factoryWithTypeCheckers":[{"id":59,"name":"./node_modules/prop-types/factoryWithTypeCheckers.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":59,"name":"./node_modules/prop-types/factoryWithTypeCheckers.js","file":"bundle.css","publicPath":"/bundle.css"}],"./factoryWithThrowingShims":[{"id":60,"name":"./node_modules/prop-types/factoryWithThrowingShims.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":60,"name":"./node_modules/prop-types/factoryWithThrowingShims.js","file":"bundle.css","publicPath":"/bundle.css"}],"./lib/ReactPropTypesSecret":[{"id":14,"name":"./node_modules/prop-types/lib/ReactPropTypesSecret.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":14,"name":"./node_modules/prop-types/lib/ReactPropTypesSecret.js","file":"bundle.css","publicPath":"/bundle.css"}],"object-assign":[{"id":6,"name":"./node_modules/object-assign/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":6,"name":"./node_modules/object-assign/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"prop-types/checkPropTypes":[{"id":13,"name":"./node_modules/prop-types/checkPropTypes.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":13,"name":"./node_modules/prop-types/checkPropTypes.js","file":"bundle.css","publicPath":"/bundle.css"}],"path-to-regexp":[{"id":29,"name":"./node_modules/react-router/node_modules/path-to-regexp/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":29,"name":"./node_modules/react-router/node_modules/path-to-regexp/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"isarray":[{"id":69,"name":"./node_modules/isarray/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":69,"name":"./node_modules/isarray/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"warning":[{"id":4,"name":"./node_modules/warning/warning.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":8,"name":"./node_modules/history/node_modules/warning/browser.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":4,"name":"./node_modules/warning/warning.js","file":"bundle.css","publicPath":"/bundle.css"},{"id":8,"name":"./node_modules/history/node_modules/warning/browser.js","file":"bundle.css","publicPath":"/bundle.css"}],"invariant":[{"id":3,"name":"./node_modules/invariant/browser.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":3,"name":"./node_modules/invariant/browser.js","file":"bundle.css","publicPath":"/bundle.css"}],"history":[{"id":5,"name":"./node_modules/history/es/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":5,"name":"./node_modules/history/es/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"./createBrowserHistory":[{"id":61,"name":"./node_modules/history/es/createBrowserHistory.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":61,"name":"./node_modules/history/es/createBrowserHistory.js","file":"bundle.css","publicPath":"/bundle.css"}],"./createHashHistory":[{"id":64,"name":"./node_modules/history/es/createHashHistory.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":64,"name":"./node_modules/history/es/createHashHistory.js","file":"bundle.css","publicPath":"/bundle.css"}],"./createMemoryHistory":[{"id":65,"name":"./node_modules/history/es/createMemoryHistory.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":65,"name":"./node_modules/history/es/createMemoryHistory.js","file":"bundle.css","publicPath":"/bundle.css"}],"./LocationUtils":[{"id":9,"name":"./node_modules/history/es/LocationUtils.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":9,"name":"./node_modules/history/es/LocationUtils.js","file":"bundle.css","publicPath":"/bundle.css"}],"./PathUtils":[{"id":7,"name":"./node_modules/history/es/PathUtils.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":7,"name":"./node_modules/history/es/PathUtils.js","file":"bundle.css","publicPath":"/bundle.css"}],"resolve-pathname":[{"id":62,"name":"./node_modules/resolve-pathname/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":62,"name":"./node_modules/resolve-pathname/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"value-equal":[{"id":63,"name":"./node_modules/value-equal/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":63,"name":"./node_modules/value-equal/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"./createTransitionManager":[{"id":16,"name":"./node_modules/history/es/createTransitionManager.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":16,"name":"./node_modules/history/es/createTransitionManager.js","file":"bundle.css","publicPath":"/bundle.css"}],"./DOMUtils":[{"id":25,"name":"./node_modules/history/es/DOMUtils.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":25,"name":"./node_modules/history/es/DOMUtils.js","file":"bundle.css","publicPath":"/bundle.css"}],"react":[{"id":0,"name":"./node_modules/react/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":0,"name":"./node_modules/react/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"classnames":[{"id":43,"name":"./node_modules/classnames/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":43,"name":"./node_modules/classnames/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"lodash.isfunction":[{"id":99,"name":"./node_modules/lodash.isfunction/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":99,"name":"./node_modules/lodash.isfunction/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"lodash.isobject":[{"id":100,"name":"./node_modules/lodash.isobject/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":100,"name":"./node_modules/lodash.isobject/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-popper":[{"id":101,"name":"./node_modules/react-popper/lib/react-popper.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":101,"name":"./node_modules/react-popper/lib/react-popper.js","file":"bundle.css","publicPath":"/bundle.css"}],"lodash.tonumber":[{"id":107,"name":"./node_modules/lodash.tonumber/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":107,"name":"./node_modules/lodash.tonumber/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"react-lifecycles-compat":[{"id":108,"name":"./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":108,"name":"./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js","file":"bundle.css","publicPath":"/bundle.css"}],"./Manager":[{"id":102,"name":"./node_modules/react-popper/lib/Manager.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":102,"name":"./node_modules/react-popper/lib/Manager.js","file":"bundle.css","publicPath":"/bundle.css"}],"./Target":[{"id":103,"name":"./node_modules/react-popper/lib/Target.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":103,"name":"./node_modules/react-popper/lib/Target.js","file":"bundle.css","publicPath":"/bundle.css"}],"./Popper":[{"id":104,"name":"./node_modules/react-popper/lib/Popper.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":104,"name":"./node_modules/react-popper/lib/Popper.js","file":"bundle.css","publicPath":"/bundle.css"}],"./Arrow":[{"id":106,"name":"./node_modules/react-popper/lib/Arrow.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":106,"name":"./node_modules/react-popper/lib/Arrow.js","file":"bundle.css","publicPath":"/bundle.css"}],"popper.js":[{"id":105,"name":"./node_modules/popper.js/dist/esm/popper.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":105,"name":"./node_modules/popper.js/dist/esm/popper.js","file":"bundle.css","publicPath":"/bundle.css"}],"./components/Provider":[{"id":77,"name":"./node_modules/react-redux/es/components/Provider.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":77,"name":"./node_modules/react-redux/es/components/Provider.js","file":"bundle.css","publicPath":"/bundle.css"}],"./components/connectAdvanced":[{"id":37,"name":"./node_modules/react-redux/es/components/connectAdvanced.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":37,"name":"./node_modules/react-redux/es/components/connectAdvanced.js","file":"bundle.css","publicPath":"/bundle.css"}],"./connect/connect":[{"id":79,"name":"./node_modules/react-redux/es/connect/connect.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":79,"name":"./node_modules/react-redux/es/connect/connect.js","file":"bundle.css","publicPath":"/bundle.css"}],"../utils/shallowEqual":[{"id":80,"name":"./node_modules/react-redux/es/utils/shallowEqual.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":80,"name":"./node_modules/react-redux/es/utils/shallowEqual.js","file":"bundle.css","publicPath":"/bundle.css"}],"./mapDispatchToProps":[{"id":81,"name":"./node_modules/react-redux/es/connect/mapDispatchToProps.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":81,"name":"./node_modules/react-redux/es/connect/mapDispatchToProps.js","file":"bundle.css","publicPath":"/bundle.css"}],"./mapStateToProps":[{"id":94,"name":"./node_modules/react-redux/es/connect/mapStateToProps.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":94,"name":"./node_modules/react-redux/es/connect/mapStateToProps.js","file":"bundle.css","publicPath":"/bundle.css"}],"./mergeProps":[{"id":95,"name":"./node_modules/react-redux/es/connect/mergeProps.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":95,"name":"./node_modules/react-redux/es/connect/mergeProps.js","file":"bundle.css","publicPath":"/bundle.css"}],"./selectorFactory":[{"id":96,"name":"./node_modules/react-redux/es/connect/selectorFactory.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":96,"name":"./node_modules/react-redux/es/connect/selectorFactory.js","file":"bundle.css","publicPath":"/bundle.css"}],"./verifySubselectors":[{"id":97,"name":"./node_modules/react-redux/es/connect/verifySubselectors.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":97,"name":"./node_modules/react-redux/es/connect/verifySubselectors.js","file":"bundle.css","publicPath":"/bundle.css"}],"../utils/warning":[{"id":20,"name":"./node_modules/react-redux/es/utils/warning.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":20,"name":"./node_modules/react-redux/es/utils/warning.js","file":"bundle.css","publicPath":"/bundle.css"}],"../utils/verifyPlainObject":[{"id":40,"name":"./node_modules/react-redux/es/utils/verifyPlainObject.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":40,"name":"./node_modules/react-redux/es/utils/verifyPlainObject.js","file":"bundle.css","publicPath":"/bundle.css"}],"lodash-es/isPlainObject":[{"id":85,"name":"./node_modules/lodash-es/isPlainObject.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":85,"name":"./node_modules/lodash-es/isPlainObject.js","file":"bundle.css","publicPath":"/bundle.css"}],"./_baseGetTag.js":[{"id":86,"name":"./node_modules/lodash-es/_baseGetTag.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":86,"name":"./node_modules/lodash-es/_baseGetTag.js","file":"bundle.css","publicPath":"/bundle.css"}],"./_getPrototype.js":[{"id":91,"name":"./node_modules/lodash-es/_getPrototype.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":91,"name":"./node_modules/lodash-es/_getPrototype.js","file":"bundle.css","publicPath":"/bundle.css"}],"./isObjectLike.js":[{"id":93,"name":"./node_modules/lodash-es/isObjectLike.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":93,"name":"./node_modules/lodash-es/isObjectLike.js","file":"bundle.css","publicPath":"/bundle.css"}],"./_overArg.js":[{"id":92,"name":"./node_modules/lodash-es/_overArg.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":92,"name":"./node_modules/lodash-es/_overArg.js","file":"bundle.css","publicPath":"/bundle.css"}],"./_Symbol.js":[{"id":41,"name":"./node_modules/lodash-es/_Symbol.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":41,"name":"./node_modules/lodash-es/_Symbol.js","file":"bundle.css","publicPath":"/bundle.css"}],"./_getRawTag.js":[{"id":89,"name":"./node_modules/lodash-es/_getRawTag.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":89,"name":"./node_modules/lodash-es/_getRawTag.js","file":"bundle.css","publicPath":"/bundle.css"}],"./_objectToString.js":[{"id":90,"name":"./node_modules/lodash-es/_objectToString.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":90,"name":"./node_modules/lodash-es/_objectToString.js","file":"bundle.css","publicPath":"/bundle.css"}],"./_root.js":[{"id":87,"name":"./node_modules/lodash-es/_root.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":87,"name":"./node_modules/lodash-es/_root.js","file":"bundle.css","publicPath":"/bundle.css"}],"./_freeGlobal.js":[{"id":88,"name":"./node_modules/lodash-es/_freeGlobal.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":88,"name":"./node_modules/lodash-es/_freeGlobal.js","file":"bundle.css","publicPath":"/bundle.css"}],"./wrapMapToProps":[{"id":39,"name":"./node_modules/react-redux/es/connect/wrapMapToProps.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":39,"name":"./node_modules/react-redux/es/connect/wrapMapToProps.js","file":"bundle.css","publicPath":"/bundle.css"}],"../utils/Subscription":[{"id":78,"name":"./node_modules/react-redux/es/utils/Subscription.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":78,"name":"./node_modules/react-redux/es/utils/Subscription.js","file":"bundle.css","publicPath":"/bundle.css"}],"../utils/PropTypes":[{"id":36,"name":"./node_modules/react-redux/es/utils/PropTypes.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":36,"name":"./node_modules/react-redux/es/utils/PropTypes.js","file":"bundle.css","publicPath":"/bundle.css"}],"./BrowserRouter":[{"id":58,"name":"./node_modules/react-router-dom/es/BrowserRouter.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":58,"name":"./node_modules/react-router-dom/es/BrowserRouter.js","file":"bundle.css","publicPath":"/bundle.css"}],"./HashRouter":[{"id":66,"name":"./node_modules/react-router-dom/es/HashRouter.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":66,"name":"./node_modules/react-router-dom/es/HashRouter.js","file":"bundle.css","publicPath":"/bundle.css"}],"./Link":[{"id":26,"name":"./node_modules/react-router-dom/es/Link.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":26,"name":"./node_modules/react-router-dom/es/Link.js","file":"bundle.css","publicPath":"/bundle.css"}],"./MemoryRouter":[{"id":67,"name":"./node_modules/react-router-dom/es/MemoryRouter.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":67,"name":"./node_modules/react-router-dom/es/MemoryRouter.js","file":"bundle.css","publicPath":"/bundle.css"}],"./NavLink":[{"id":68,"name":"./node_modules/react-router-dom/es/NavLink.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":68,"name":"./node_modules/react-router-dom/es/NavLink.js","file":"bundle.css","publicPath":"/bundle.css"}],"./Prompt":[{"id":70,"name":"./node_modules/react-router-dom/es/Prompt.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":70,"name":"./node_modules/react-router-dom/es/Prompt.js","file":"bundle.css","publicPath":"/bundle.css"}],"./Redirect":[{"id":71,"name":"./node_modules/react-router-dom/es/Redirect.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":71,"name":"./node_modules/react-router-dom/es/Redirect.js","file":"bundle.css","publicPath":"/bundle.css"}],"./Route":[{"id":28,"name":"./node_modules/react-router-dom/es/Route.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":28,"name":"./node_modules/react-router-dom/es/Route.js","file":"bundle.css","publicPath":"/bundle.css"}],"./Router":[{"id":17,"name":"./node_modules/react-router-dom/es/Router.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":17,"name":"./node_modules/react-router-dom/es/Router.js","file":"bundle.css","publicPath":"/bundle.css"}],"./StaticRouter":[{"id":72,"name":"./node_modules/react-router-dom/es/StaticRouter.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":72,"name":"./node_modules/react-router-dom/es/StaticRouter.js","file":"bundle.css","publicPath":"/bundle.css"}],"./Switch":[{"id":73,"name":"./node_modules/react-router-dom/es/Switch.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":73,"name":"./node_modules/react-router-dom/es/Switch.js","file":"bundle.css","publicPath":"/bundle.css"}],"./generatePath":[{"id":74,"name":"./node_modules/react-router-dom/es/generatePath.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":74,"name":"./node_modules/react-router-dom/es/generatePath.js","file":"bundle.css","publicPath":"/bundle.css"}],"./matchPath":[{"id":75,"name":"./node_modules/react-router-dom/es/matchPath.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":75,"name":"./node_modules/react-router-dom/es/matchPath.js","file":"bundle.css","publicPath":"/bundle.css"}],"./withRouter":[{"id":76,"name":"./node_modules/react-router-dom/es/withRouter.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":76,"name":"./node_modules/react-router-dom/es/withRouter.js","file":"bundle.css","publicPath":"/bundle.css"}],"./cjs/react-dom.production.min.js":[{"id":51,"name":"./node_modules/react-dom/cjs/react-dom.production.min.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":51,"name":"./node_modules/react-dom/cjs/react-dom.production.min.js","file":"bundle.css","publicPath":"/bundle.css"}],"./cjs/react-dom.development.js":[{"id":54,"name":"./node_modules/react-dom/cjs/react-dom.development.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":54,"name":"./node_modules/react-dom/cjs/react-dom.development.js","file":"bundle.css","publicPath":"/bundle.css"}],"schedule":[{"id":24,"name":"./node_modules/react-dom/node_modules/schedule/index.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":24,"name":"./node_modules/react-dom/node_modules/schedule/index.js","file":"bundle.css","publicPath":"/bundle.css"}],"schedule/tracing":[{"id":55,"name":"./node_modules/react-dom/node_modules/schedule/tracing.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":55,"name":"./node_modules/react-dom/node_modules/schedule/tracing.js","file":"bundle.css","publicPath":"/bundle.css"}],"./cjs/schedule-tracing.production.min.js":[{"id":56,"name":"./node_modules/react-dom/node_modules/schedule/cjs/schedule-tracing.production.min.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":56,"name":"./node_modules/react-dom/node_modules/schedule/cjs/schedule-tracing.production.min.js","file":"bundle.css","publicPath":"/bundle.css"}],"./cjs/schedule-tracing.development.js":[{"id":57,"name":"./node_modules/react-dom/node_modules/schedule/cjs/schedule-tracing.development.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":57,"name":"./node_modules/react-dom/node_modules/schedule/cjs/schedule-tracing.development.js","file":"bundle.css","publicPath":"/bundle.css"}],"./cjs/schedule.production.min.js":[{"id":52,"name":"./node_modules/react-dom/node_modules/schedule/cjs/schedule.production.min.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":52,"name":"./node_modules/react-dom/node_modules/schedule/cjs/schedule.production.min.js","file":"bundle.css","publicPath":"/bundle.css"}],"./cjs/schedule.development.js":[{"id":53,"name":"./node_modules/react-dom/node_modules/schedule/cjs/schedule.development.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":53,"name":"./node_modules/react-dom/node_modules/schedule/cjs/schedule.development.js","file":"bundle.css","publicPath":"/bundle.css"}],"./cjs/react.production.min.js":[{"id":49,"name":"./node_modules/react/cjs/react.production.min.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":49,"name":"./node_modules/react/cjs/react.production.min.js","file":"bundle.css","publicPath":"/bundle.css"}],"./cjs/react.development.js":[{"id":50,"name":"./node_modules/react/cjs/react.development.js","file":"bundle.js","publicPath":"/bundle.js"},{"id":50,"name":"./node_modules/react/cjs/react.development.js","file":"bundle.css","publicPath":"/bundle.css"}]}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_PageGenerator__ = __webpack_require__(8);

 // import Promise from 'bluebird';

var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
router.get('/', home);

function home(req, res) {
  var app = {};
  var activeRoute = res.locals.activeRoute;
  app.language = res.locals.language;
  res.send(__WEBPACK_IMPORTED_MODULE_1__classes_PageGenerator__["a" /* default */].getPage({
    app: app
  }, activeRoute.config, req.url));
}

;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-card-flip");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("html2canvas");

/***/ })
/******/ ]);