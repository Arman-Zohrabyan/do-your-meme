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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_languages__ = __webpack_require__(6);
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

module.exports = require("reactstrap");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Vk_VkContainer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Fb__ = __webpack_require__(19);

 // import Loadable from 'react-loadable';



 // import Language from './classes/Language';
// const LoadableVkContainer = Loadable({
//   loader: () => import('./containers/Vk/VkContainer'),
//   loading: <div>Загрузка</div>,
//   serverSideRequirePath: path.join(__dirname, './containers/Vk/VkContainer')
// });

var routes = [{
  path: '/',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */],
  config: {
    title: 'titles.home'
  }
}, {
  path: '/vkontakte',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_2__containers_Vk_VkContainer__["a" /* default */],
  config: {
    title: 'titles.vk'
  }
}, {
  path: '/facebook',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_4__components_Fb__["a" /* default */],
  config: {
    title: 'titles.fb'
  }
}];
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_store_Store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_App__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_classes_Language__ = __webpack_require__(2);
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
          body = _ref.body;
      return ['<!DOCTYPE html>', '<html>', '<head>', '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">', "<title>".concat(__WEBPACK_IMPORTED_MODULE_7__src_classes_Language__["a" /* default */].take(head.title), "</title>"), '<meta name="viewport" content="width=600, initial-scale=0.6, maximum-scale=1"/>', '<meta charset="utf-8">', '<script src="/bundle.js" defer></script>', '<link href="/bundle.css" rel="stylesheet">', "<script>window.__INITIAL_STATE__ = ".concat(__WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default()(state), "</script>"), '</head>', "<body>", "<div id=\"app\">".concat(body, "</div>"), '</body>', '</html>'].join('\n');
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
      __WEBPACK_IMPORTED_MODULE_7__src_classes_Language__["a" /* default */].setCurrentLang(state.app.language);
      var store = __WEBPACK_IMPORTED_MODULE_5__src_store_Store__["a" /* default */].init(state);
      var body = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"], {
        store: store
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["StaticRouter"], {
        location: url,
        context: {
          state: state
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_App__["a" /* default */], {
        language: state.app.language
      })))); // const helmet = Helmet.renderStatic();

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
    key: "notFound",
    value: function notFound() {
      return ['<!DOCTYPE html>', '<html lang="ru">', '<head>', '</head>', '<body>', '<div id="notFound">', '<p>Запрашиваемая страница не существует</p>', '<a href="/">Вернуться на главную страницу</a>', '</div>', '</body>', '</html>'].join('\n');
    }
  }]);

  return PageGenerator;
}();

/* harmony default export */ __webpack_exports__["a"] = (PageGenerator);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customMiddlewares__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_routerSocialPages__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_routerHome__ = __webpack_require__(34);






/* Initializes express */

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
/* Enables cors */

app.use(__WEBPACK_IMPORTED_MODULE_1_cors___default()());
/* Uses cookie parser middleware */

app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
/* Tells the app to look for static files in these directories */

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('public'));
/* Sets custom middlewares */

app.use(__WEBPACK_IMPORTED_MODULE_3__customMiddlewares__["a" /* default */]);
app.get('/*', __WEBPACK_IMPORTED_MODULE_5__routes_routerHome__["a" /* router */]);
app.get('/*', __WEBPACK_IMPORTED_MODULE_4__routes_routerSocialPages__["a" /* router */]);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Server is listening on port: 3000');
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MiddlewaresHandler__ = __webpack_require__(13);


var customMiddlewares = function customMiddlewares(req, res, next) {
  res.locals.language = __WEBPACK_IMPORTED_MODULE_0__MiddlewaresHandler__["a" /* default */].getLanguage(req, res);
  res.locals.activeRoute = __WEBPACK_IMPORTED_MODULE_0__MiddlewaresHandler__["a" /* default */].getActiveRoute(req);
  next();
};

/* harmony default export */ __webpack_exports__["a"] = (customMiddlewares);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_geoip_lite__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_geoip_lite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_geoip_lite__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_request_ip__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_request_ip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_request_ip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_routes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_languages__ = __webpack_require__(6);
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("geoip-lite");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("request-ip");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Home;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0441\u0435\u0442\u044C");
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Fb;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

function Fb() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Fb \u0432 \u0441\u0442\u0430\u0434\u0438\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438");
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_PageGenerator__ = __webpack_require__(7);

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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vk_reducer__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_reducer__ = __webpack_require__(28);
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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_constants__ = __webpack_require__(27);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
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

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (vk);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  defaultImage: './assets/images/user.png'
});

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NoMatch__ = __webpack_require__(33);
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_StringHelper__ = __webpack_require__(32);
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
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NoMatch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

function NoMatch() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Four Oh Four");
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_PageGenerator__ = __webpack_require__(7);

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
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-card-flip");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Vk_VkWidget__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Vk_VkSettings__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_vk_actions__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_Language__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_html2canvas__ = __webpack_require__(39);
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
        companion: vk.companion
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Vk_VkSettings__["a" /* default */], {
        components: vk.components,
        header: vk.header,
        content: vk.content,
        current: vk.current,
        companion: vk.companion,
        temp: vk.temp,
        onChange: onChange,
        onChangeImage: onChangeImage
      })));
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
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__store_vk_actions__["a" /* change */])(value, section, key));
    },
    onChangeImage: function onChangeImage(type, key, img) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__store_vk_actions__["b" /* changeImage */])(type, key, img));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(VkContainer));

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("html2canvas");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserImage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserImageSelect__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TextInput__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CheckBox__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MessageBox__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SettingButton__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__UserImageSelect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__UserImage__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__TextInput__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__SettingButton__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__MessageBox__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__CheckBox__["a"]; });








/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(36);
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VkHeader__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VkFooter__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mini__ = __webpack_require__(40);
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
          companion = _this$props.companion;

      if (!components.header) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__VkHeader__["a" /* default */], {
        companion: companion.name,
        time: header.time,
        isMobile: header.mobile,
        img: companion.image
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
      var content = this.props.content;
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
        className: "vk-widget_content__separator"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "vk-widget_content__separator-content"
      }, "6 \u043D\u043E\u044F\u0431\u0440\u044F")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__message-section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__messages-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__message-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__mini__["e" /* UserImage */], {
        src: "./assets/images/user.png",
        size: "medium"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__message-right"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__message vk-widget_content__message-data"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "vk-widget_content__user-name"
      }, "valodik"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "vk-widget_content__message-time"
      }, "14:00")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__message"
      }, "\u041B\u0430\u0434\u043D\u043E \u0431\u0440\u0430\u0442\u0435\u0446. ^^) \u0412\u0435\u0440\u043D\u0443\u0441\u044C \u0434\u043E\u043C\u043E\u0439, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u044E.")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__message-section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__messages-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__message-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__mini__["e" /* UserImage */], {
        src: "./assets/images/user.png",
        size: "medium"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__message-right"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__message vk-widget_content__message-data"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "vk-widget_content__user-name"
      }, "valodik"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "vk-widget_content__message-time"
      }, "14:00")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "vk-widget_content__message"
      }, "\u041B\u0430\u0434\u043D\u043E \u0431\u0440\u0430\u0442\u0435\u0446. ^^) \u0412\u0435\u0440\u043D\u0443\u0441\u044C \u0434\u043E\u043C\u043E\u0439, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u044E.")))))), this.renderFooter());
    }
  }]);

  return VkWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (VkWidget);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mini__ = __webpack_require__(40);
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserImage__ = __webpack_require__(41);
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(36);
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(36);
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
/* 47 */
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(36);
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
/* 49 */
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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SettingSections__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_Language__ = __webpack_require__(2);
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
          header = _this$props.header,
          components = _this$props.components,
          companion = _this$props.companion,
          current = _this$props.current,
          content = _this$props.content,
          temp = _this$props.temp,
          onChange = _this$props.onChange,
          onChangeImage = _this$props.onChangeImage;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "widget-right__wrapper"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "widget-right__config"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SettingSections__["e" /* SectionTopPart */], {
        header: header,
        onChange: onChange
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SettingSections__["b" /* SectionCurrentUser */], {
        current: current,
        temp: temp,
        onChange: onChange,
        onChangeImage: onChangeImage
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SettingSections__["c" /* SectionInterlocutor */], {
        companion: companion,
        temp: temp,
        onChange: onChange,
        onChangeImage: onChangeImage
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SettingSections__["a" /* SectionContent */], {
        content: content,
        onChange: onChange
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SettingSections__["d" /* SectionSections */], {
        components: components,
        onChange: onChange
      })));
    }
  }]);

  return VkSettings;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (VkSettings);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SectionTopPart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SectionContent__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SectionInterlocutor__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SectionSections__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SectionCurrentUser__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__SectionContent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__SectionInterlocutor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__SectionCurrentUser__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__SectionTopPart__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__SectionSections__["a"]; });







/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(40);
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip__ = __webpack_require__(37);
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
        handleClick: this.showFront,
        distance: true
      }))));
    }
  }]);

  return SectionContent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SectionContent);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip__ = __webpack_require__(37);
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
        handleClick: this.showFront,
        distance: true
      }))));
    }
  }]);

  return SectionInterlocutor;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SectionInterlocutor);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(40);
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mini__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Language__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_card_flip__ = __webpack_require__(37);
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
        handleClick: this.showFront,
        distance: true
      }))));
    }
  }]);

  return SectionCurrentUser;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SectionCurrentUser);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeImage; });
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

/***/ })
/******/ ]);