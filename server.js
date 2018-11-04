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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

var _Menu = __webpack_require__(18);

var _Menu2 = _interopRequireDefault(_Menu);

var _NoMatch = __webpack_require__(21);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _reactRouterDom = __webpack_require__(1);

var _reactstrap = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
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
                    document.title = config.title;
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VkContainer = __webpack_require__(10);

var _VkContainer2 = _interopRequireDefault(_VkContainer);

var _Home = __webpack_require__(16);

var _Home2 = _interopRequireDefault(_Home);

var _Fb = __webpack_require__(17);

var _Fb2 = _interopRequireDefault(_Fb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { fetchPopularRepos } from './components/api';

var routes = [{
  path: '/',
  exact: true,
  component: _Home2.default,
  config: {
    title: 'Развлекательный сайт'
  }
}, {
  path: '/vkontakte',
  exact: true,
  component: _VkContainer2.default,
  config: {
    title: 'Создать переписку Вконтакте'
  }
}, {
  path: '/facebook',
  exact: true,
  component: _Fb2.default,
  config: {
    title: 'Создать переписку Фейсбук'
  }
}];

exports.default = routes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = exports.UserImage = undefined;

var _UserImage = __webpack_require__(13);

var _UserImage2 = _interopRequireDefault(_UserImage);

var _TextInput = __webpack_require__(14);

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UserImage = _UserImage2.default;
exports.TextInput = _TextInput2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import { Helmet } from 'react-helmet';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(27);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(28);

var _serializeJavascript = __webpack_require__(29);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Store = __webpack_require__(30);

var _Store2 = _interopRequireDefault(_Store);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

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

      return ['<!DOCTYPE html>', '<html>', '<head>', '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">', '<title>' + head.title + '</title>', '<meta name="viewport" content="width=600, initial-scale=0.6, maximum-scale=1"/>', '<meta charset="utf-8">', '<script src="/bundle.js" defer></script>', '<link href="/bundle.css" rel="stylesheet">', '<script>window.__INITIAL_STATE__ = ' + (0, _serializeJavascript2.default)(state) + '</script>', '</head>', '<body>', '<div id="app">' + body + '</div>', '</body>', '</html>'].join('\n');
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

      var store = _Store2.default.init(state);

      var body = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouterDom.StaticRouter,
          { location: url, context: { state: state } },
          _react2.default.createElement(_App2.default, null)
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(9);

var _cors2 = _interopRequireDefault(_cors);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

var _customMiddlewares = __webpack_require__(22);

var _customMiddlewares2 = _interopRequireDefault(_customMiddlewares);

var _routerSocialPages = __webpack_require__(26);

var _routerHome = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

/* Enables cors */
app.use((0, _cors2.default)());
/* Tells the app to look for static files in these directories */
app.use(_express2.default.static('public'));
/* Sets custom middlewares */
app.use(_customMiddlewares2.default);

app.get('/*', _routerHome.router);
app.get('/*', _routerSocialPages.router);
// app.get('*', (req, res, next) => {
//   const activeRoute = res.locals.activeRoute;

//   const promise = activeRoute.fetchInitialData
//     ? activeRoute.fetchInitialData(req.path)
//     : Promise.resolve();

//   promise.then((data) => {
//     res.send(PageGenerator.getPage(
//       {},
//       {title: 'page1'},
//       req.url
//     ));
//   }).catch(next);
// });

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Server is listening on port: 3000');
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(3);

var _reactRedux = __webpack_require__(28);

var _Vk = __webpack_require__(11);

var _Vk2 = _interopRequireDefault(_Vk);

var _mini = __webpack_require__(6);

var _actions = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VkContainer = function (_Component) {
  _inherits(VkContainer, _Component);

  function VkContainer() {
    _classCallCheck(this, VkContainer);

    return _possibleConstructorReturn(this, (VkContainer.__proto__ || Object.getPrototypeOf(VkContainer)).apply(this, arguments));
  }

  _createClass(VkContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          vk = _props.vk,
          _onChange = _props.onChange;


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
              'div',
              { className: 'vk-chat', style: { backgroundImage: 'url("./assets/images/descont.png")' } },
              _react2.default.createElement(_Vk2.default, { header: vk.header })
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Col,
          { md: '12', lg: '4', xl: '5', className: 'widget-right' },
          _react2.default.createElement(
            'div',
            { className: 'widget-right__wrapper' },
            _react2.default.createElement(_mini.TextInput, {
              label: 'Собеседник',
              value: vk.header.companion,
              onChange: function onChange(e) {
                return _onChange(e.target.value, 'header', 'companion');
              }
            }),
            _react2.default.createElement(_mini.TextInput, {
              label: 'Время онлайн',
              value: vk.header.time,
              onChange: function onChange(e) {
                return _onChange(e.target.value, 'header', 'time');
              }
            })
          )
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
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VkContainer);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _VkHeader = __webpack_require__(12);

var _VkHeader2 = _interopRequireDefault(_VkHeader);

var _VkFooter = __webpack_require__(15);

var _VkFooter2 = _interopRequireDefault(_VkFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vk = function (_Component) {
  _inherits(Vk, _Component);

  function Vk() {
    _classCallCheck(this, Vk);

    return _possibleConstructorReturn(this, (Vk.__proto__ || Object.getPrototypeOf(Vk)).apply(this, arguments));
  }

  _createClass(Vk, [{
    key: 'render',
    value: function render() {
      var header = this.props.header;


      return _react2.default.createElement(
        'div',
        { className: 'vk-widget' },
        _react2.default.createElement(_VkHeader2.default, {
          companion: header.companion,
          time: header.time,
          isMobile: header.mobile,
          img: header.userImage
        }),
        _react2.default.createElement(
          'div',
          { className: 'vk-widget_body' },
          _react2.default.createElement('div', { className: 'vk-widget_body__content vk-widget_content' })
        ),
        _react2.default.createElement(_VkFooter2.default, null)
      );
    }
  }]);

  return Vk;
}(_react.Component);

exports.default = Vk;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mini = __webpack_require__(6);

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
            '\u041D\u0430\u0437\u0430\u0434'
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
            _react2.default.createElement(_mini.UserImage, { imgUrl: img })
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(37);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserImage(_ref) {
  var _ref$imgUrl = _ref.imgUrl,
      imgUrl = _ref$imgUrl === undefined ? _constants2.default.defaultImage : _ref$imgUrl;

  imgUrl = imgUrl || _constants2.default.defaultImage;

  return _react2.default.createElement('img', {
    className: 'vk-widget_header__mini-img',
    src: imgUrl
  });
}

exports.default = UserImage;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TextInput(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      inline = _ref.inline;

  var wrapper = (0, _classnames2.default)({
    'vk_text': true,
    'vk_text__inline': inline
  });

  return _react2.default.createElement(
    'div',
    { className: wrapper },
    _react2.default.createElement(
      'label',
      { className: 'vk_text__label' },
      label + ': ',
      _react2.default.createElement('input', {
        type: 'text',
        className: 'vk_text__input',
        value: value,
        onChange: onChange
      })
    )
  );
}

exports.default = TextInput;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

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
                '\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435...'
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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactRouter = __webpack_require__(19);

var _reactstrap = __webpack_require__(3);

var _StringHelper = __webpack_require__(20);

var _StringHelper2 = _interopRequireDefault(_StringHelper);

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
                  '\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435'
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
                  '\u0424\u0435\u0439\u0441\u0431\u0443\u043A'
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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RequestHandlers = __webpack_require__(23);

var _RequestHandlers2 = _interopRequireDefault(_RequestHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customMiddlewares = function customMiddlewares(req, res, next) {
  res.locals.activeRoute = _RequestHandlers2.default.getActiveRoute(req);
  res.locals.language = _RequestHandlers2.default.getLanguage(req);

  next();
};

exports.default = customMiddlewares;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = __webpack_require__(1);

var _geoipLite = __webpack_require__(24);

var _geoipLite2 = _interopRequireDefault(_geoipLite);

var _requestIp = __webpack_require__(25);

var _requestIp2 = _interopRequireDefault(_requestIp);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestHandlers = function RequestHandlers() {
  _classCallCheck(this, RequestHandlers);
};

RequestHandlers.getActiveRoute = function (req) {
  return _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};
};

RequestHandlers.getLanguage = function (req) {
  var userIp = _requestIp2.default.getClientIp(req);
  var geo = _geoipLite2.default.lookup(userIp) || {};
  if (geo.country) {
    return geo.country.toLowerCase();
  }
  return 'ru';
};

exports.default = RequestHandlers;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("geoip-lite");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("request-ip");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _PageGenerator = __webpack_require__(7);

var _PageGenerator2 = _interopRequireDefault(_PageGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Promise from 'bluebird';


var router = _express2.default.Router();

router.get('/vkontakte', vkontakte);
router.get('/facebook', facebook);

function vkontakte(req, res) {
  var activeRoute = res.locals.activeRoute;

  res.send(_PageGenerator2.default.getPage({}, activeRoute.config, req.url));
};

function facebook(req, res) {
  var activeRoute = res.locals.activeRoute;

  res.send(_PageGenerator2.default.getPage({}, activeRoute.config, req.url));
};

exports.router = router;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(31);

var _reduxThunk = __webpack_require__(32);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(38);

var _reducer2 = _interopRequireDefault(_reducer);

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
        vk: _reducer2.default
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
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _PageGenerator = __webpack_require__(7);

var _PageGenerator2 = _interopRequireDefault(_PageGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Promise from 'bluebird';


var router = _express2.default.Router();

router.get('/', home);

function home(req, res) {
  var activeRoute = res.locals.activeRoute;

  res.send(_PageGenerator2.default.getPage({}, activeRoute.config, req.url));
};

exports.router = router;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultImage: './assets/images/user.png'
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  header: {
    companion: 'Тестовое имя',
    time: 'был в сети только что',
    mobile: true,
    userImage: null
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
    default:
      {
        return state;
      }
  }
};

exports.default = vk;

/***/ }),
/* 39 */
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

/***/ })
/******/ ]);