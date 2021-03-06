webpackHotUpdate_name_(0,{

/***/ "../.tmp/temp-0.js":
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ../.tmp/temp-0.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    namespace: 'UU.DemoApp',
    cssPrefix: 'uu-demoapp',
    tag: function tag(component) {
        return this.namespace + '.' + component;
    },
    css: function css(component) {
        return this.cssPrefix + '-' + component;
    }
};

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/header.less":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** ../~/css-loader!../~/less-loader/dist!./core/header.less ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".uu-demoapp-header nav {\n  font-size: 140%;\n}\n.uu-demoapp-header nav a {\n  margin: 0.5em;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/page.less":
/* unknown exports provided */
/* all exports used */
/*!**************************************************************!*\
  !*** ../~/css-loader!../~/less-loader/dist!./core/page.less ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".uu-demoapp-page {\n  color: #222222;\n}\n.uu-demoapp-page .uu5-bricks-page-top {\n  position: fixed;\n  height: 170px;\n  padding: 16px;\n  background: #ffffff url(" + __webpack_require__(/*! ../img/traktor.jpg */ "./img/traktor.jpg") + ") no-repeat right;\n}\n.uu-demoapp-page .uu5-bricks-page-content {\n  padding: 1em;\n  text-align: left;\n  margin-top: 180px;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./vuc/about.less":
/* unknown exports provided */
/* all exports used */
/*!**************************************************************!*\
  !*** ../~/css-loader!../~/less-loader/dist!./vuc/about.less ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".uu-demoapp-about * {\n  color: #f87c08;\n}\n", ""]);

// exports


/***/ }),

/***/ "./calls.js":
/* unknown exports provided */
/* all exports used */
/*!******************!*\
  !*** ./calls.js ***!
  \******************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uu_appg01_core = __webpack_require__(/*! uu_appg01_core */ 5);

var _uu_appg = __webpack_require__(/*! uu_appg01 */ 4);

/**
 * Server calls of application client.
 */
var POST = "post";
var GET = "get";

var Calls = {

  call: function call(method, url, dtoIn) {
    _uu_appg.Client[method](url, dtoIn.data).then(function (response) {
      console.info(response.data);
      dtoIn.done(response.data);
    }, function (response) {
      console.info(response.error);
      dtoIn.fail(response);
    });
  },

  cars: function cars(dtoIn) {
    var commandUri = Calls.getCommandUri("cars");
    Calls.call(GET, commandUri, dtoIn);
  },

  findCars: function findCars(dtoIn) {
    var commandUri = Calls.getCommandUri("cars/find");
    Calls.call(GET, commandUri, dtoIn);
  },

  rentFindCars: function rentFindCars(dtoIn) {
    var commandUri = Calls.getCommandUri("cars/rentFind");
    Calls.call(GET, commandUri, dtoIn);
  },

  addCar: function addCar(dtoIn) {
    var commandUri = Calls.getCommandUri("cars/new");
    Calls.call(POST, commandUri, dtoIn);
  },

  STK: function STK(dtoIn) {
    var commandUri = Calls.getCommandUri("STK");
    Calls.call(GET, commandUri, dtoIn);
  },

  addClient: function addClient(dtoIn) {
    var commandUri = Calls.getCommandUri("client/new");
    Calls.call(POST, commandUri, dtoIn);
  },

  getCommandUri: function getCommandUri(aUseCase) {
    // useCase <=> "/getSomething" or "/sys/getSomething"
    var useCase = !aUseCase.match(/^\//) ? "/" + aUseCase : aUseCase;
    // let baseUri = location.protocol + "//" + location.host + location.pathname;
    var baseUri = "http://localhost:7070/car-evidence";
    console.info("######## INFO ####### " + baseUri + useCase);
    return baseUri + useCase;
  }

};

exports.default = Calls;

/***/ }),

/***/ "./core/_config.js":
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./core/_config.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns = __webpack_require__(/*! ns */ "../.tmp/temp-0.js");

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cfg = {
  APP: _ns2.default.namespace,
  CSS: _ns2.default.cssPrefix,

  titleLsi: {
    cs: "Půjčovna traktorů",
    en: "Rent a tractor"
  }
};

Cfg.CCRKEY_SPA_AUTHENTICATED = Cfg.APP + ".Page";

exports.default = Cfg;

/***/ }),

/***/ "./core/header.js":
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./core/header.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ./_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

__webpack_require__(/*! ./header.less */ "./core/header.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "header",


  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.CcrReaderMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: _config2.default.APP + ".Header",
    classNames: {
      main: _config2.default.CSS + "-header"
    },
    lsi: {
      list: {
        cs: "Seznam traktorů",
        en: "Tractor list"
      },
      about: {
        cs: "O půjčovně",
        en: "About"
      },
      client: {
        cs: "Klienti",
        en: "Clients"
      },
      forrentlist: {
        cs: "Pronájem",
        en: "Rent"
      },
      stk: {
        cs: "STK",
        en: "STK"
      }
    }
  },
  //@@viewOff:statics

  //@@viewOn:componentSpecificHelpers
  _handleLinkClick: function _handleLinkClick(link) {
    this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(link.props.href);
  },

  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render: function render() {
    return _react2.default.createElement(
      UU5.Bricks.Div,
      this.getMainPropsToPass(),
      _react2.default.createElement(
        UU5.Bricks.Header,
        { level: 1 },
        this.getLSIItem(_config2.default.titleLsi)
      ),
      _react2.default.createElement(
        "nav",
        null,
        _react2.default.createElement(
          UU5.Bricks.Link,
          { href: "/", onClick: this._handleLinkClick },
          this.getLSIValue("list")
        ),
        _react2.default.createElement(
          UU5.Bricks.Link,
          { href: "/stk", onClick: this._handleLinkClick },
          this.getLSIValue("stk")
        ),
        _react2.default.createElement(
          UU5.Bricks.Link,
          { href: "/forrentlist", onClick: this._handleLinkClick },
          this.getLSIValue("forrentlist")
        ),
        _react2.default.createElement(
          UU5.Bricks.Link,
          { href: "/about", onClick: this._handleLinkClick },
          this.getLSIValue("about")
        ),
        _react2.default.createElement(
          UU5.Bricks.Link,
          { href: "/client", onClick: this._handleLinkClick },
          this.getLSIValue("client")
        )
      )
    );
  }
  //@@viewOff:render

});

/***/ }),

/***/ "./core/header.less":
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./core/header.less ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader!../../~/less-loader/dist!./header.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/header.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../~/css-loader!../../~/less-loader/dist!./header.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/header.less", function() {
			var newContent = __webpack_require__(/*! !../../~/css-loader!../../~/less-loader/dist!./header.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/header.less");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./core/page.js":
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./core/page.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ./_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

var _tractorList = __webpack_require__(/*! ../vuc/tractor-list.js */ "./vuc/tractor-list.js");

var _tractorList2 = _interopRequireDefault(_tractorList);

var _about = __webpack_require__(/*! ../vuc/about.js */ "./vuc/about.js");

var _about2 = _interopRequireDefault(_about);

var _stkDetail = __webpack_require__(/*! ../vuc/stk-detail.js */ "./vuc/stk-detail.js");

var _stkDetail2 = _interopRequireDefault(_stkDetail);

var _forRentList = __webpack_require__(/*! ../vuc/for-rent-list.js */ "./vuc/for-rent-list.js");

var _forRentList2 = _interopRequireDefault(_forRentList);

var _client = __webpack_require__(/*! ../vuc/client.js */ "./vuc/client.js");

var _client2 = _interopRequireDefault(_client);

var _order = __webpack_require__(/*! ../vuc/order.js */ "./vuc/order.js");

var _order2 = _interopRequireDefault(_order);

var _header = __webpack_require__(/*! ../core/header.js */ "./core/header.js");

var _header2 = _interopRequireDefault(_header);

var _tractorDetail = __webpack_require__(/*! ../vuc/tractor-detail.js */ "./vuc/tractor-detail.js");

var _tractorDetail2 = _interopRequireDefault(_tractorDetail);

__webpack_require__(/*! ./page.less */ "./core/page.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "page",


  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: _config2.default.APP + ".Page",
    classNames: {
      main: _config2.default.CSS + "-page"
    }
  },
  //@@viewOff:statics

  //@@viewOn:standardComponentLifeCycle
  componentWillMount: function componentWillMount() {
    this._changeTitle();
    UU5.Environment.EventListener.registerLsi(this.getId(), this._changeTitle);
  },
  componentWillUnmount: function componentWillUnmount() {
    UU5.Environment.EventListener.unregisterLsi(this.getId());
  },

  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:componentSpecificHelpers
  _changeTitle: function _changeTitle() {
    document.title = this.getLSIItem(_config2.default.titleLsi);
  },

  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render: function render() {
    var routerBasePath = location.pathname.replace(/(\/.*?\/.*?)\/.*/, "$1");

    return _react2.default.createElement(
      UU5.Bricks.Page,
      _extends({
        top: _react2.default.createElement(_header2.default, null)
      }, this.getMainPropsToPass()),
      _react2.default.createElement(UU5.Common.Router, {
        route: "/",
        routes: {
          "/": { component: _react2.default.createElement(_tractorList2.default, null) },
          "/about": { component: _react2.default.createElement(_about2.default, null) },
          "/stk": { component: _react2.default.createElement(_stkDetail2.default, null) },
          "/forrentlist": { component: _react2.default.createElement(_forRentList2.default, null) },
          "/client": { component: _react2.default.createElement(_client2.default, null) },
          "/tractorDetail": { component: _react2.default.createElement(_tractorDetail2.default, null) },
          "/order": { component: _react2.default.createElement(_order2.default, null) }
        },
        basePath: routerBasePath
      })
    );
  }
  //@@viewOff:render

});

/***/ }),

/***/ "./core/page.less":
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./core/page.less ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader!../../~/less-loader/dist!./page.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/page.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../~/css-loader!../../~/less-loader/dist!./page.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/page.less", function() {
			var newContent = __webpack_require__(/*! !../../~/css-loader!../../~/less-loader/dist!./page.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/page.less");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./img/traktor.jpg":
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./img/traktor.jpg ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/traktor.jpg";

/***/ }),

/***/ "./vuc/about.js":
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./vuc/about.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ../core/_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

__webpack_require__(/*! ./about.less */ "./vuc/about.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "about",


  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.RouteMixin],

  statics: {
    tagName: _config2.default.APP + ".About",
    classNames: {
      main: _config2.default.CSS + "-about"
    }
  },

  render: function render() {
    return _react2.default.createElement(
      UU5.Bricks.Div,
      this.getMainPropsToPass(),
      _react2.default.createElement(
        UU5.Bricks.Header,
        { level: 2 },
        "O P\u016Fj\u010Dovn\u011B"
      ),
      _react2.default.createElement(UU5.Bricks.Paragraph, null)
    );
  }
});

/***/ }),

/***/ "./vuc/about.less":
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./vuc/about.less ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader!../../~/less-loader/dist!./about.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./vuc/about.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../~/css-loader!../../~/less-loader/dist!./about.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./vuc/about.less", function() {
			var newContent = __webpack_require__(/*! !../../~/css-loader!../../~/less-loader/dist!./about.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./vuc/about.less");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vuc/client.js":
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./vuc/client.js ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ../core/_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

var _calls = __webpack_require__(/*! calls */ "./calls.js");

var _calls2 = _interopRequireDefault(_calls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "client",


    //@@viewOn:mixins
    mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.RouteMixin, UU5.Common.CallsMixin],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: _config2.default.APP + ".ClientAdd",
        classNames: {
            main: _config2.default.CSS + "-client-add"
        },
        calls: {
            create: "findCars"
        }
    },

    componentWillMount: function componentWillMount() {
        this.setCalls(_calls2.default);
    },

    //@@viewOff:standardComponentLifeCycle

    //@@viewOn:componentSpecificHelpers
    _getNewForm: function _getNewForm() {

        return _react2.default.createElement(
            UU5.Bricks.Panel,
            { header: "P\u0159id\xE1n\xED nov\xE9ho klienta", alwaysExpanded: true, disableHeaderClick: true },
            _react2.default.createElement(
                UU5.Forms.BasicForm,
                { ref_: this._handleNewFormReference },
                _react2.default.createElement(UU5.Forms.Text, { required: true, name: "name", value: "", label: "Name" }),
                _react2.default.createElement(UU5.Forms.Text, { required: true, name: "surname", value: "", label: "Surname" }),
                _react2.default.createElement(UU5.Forms.Text, { required: true, name: "ico", value: "", label: "i\u010Do" }),
                _react2.default.createElement(UU5.Forms.Text, { required: true, name: "email", value: "", label: "Email" }),
                _react2.default.createElement(UU5.Forms.Text, { required: true, name: "ceilPhone", value: "", label: "Telefon\xED \u010D\xEDslo" })
            ),
            _react2.default.createElement(
                UU5.Bricks.Button,
                { colorSchema: "primary", onClick: this._handleCreateNewClient },
                "Ulo\u017Eit"
            )
        );
    },
    _handleNewFormReference: function _handleNewFormReference(form) {
        this._addForm = form;
    },
    _handleCreateNewClient: function _handleCreateNewClient() {
        var _this = this;

        if (this._addForm.isValid()) {
            var formData = this._addForm.getValues();

            // hide form and show loading
            this.setState({
                loadFeedback: "loading",
                showForm: false
            }, function () {
                _this.getCall("create")({
                    data: formData,
                    done: function done() {
                        _this._addForm.reset();
                    },

                    fail: function fail(response) {
                        return console.error(response);
                    }
                });
            });
        }
    },


    //@@viewOn:render
    render: function render() {
        return _react2.default.createElement(
            UU5.Bricks.Div,
            null,
            _react2.default.createElement(
                UU5.Bricks.Header,
                { level: 2 },
                "P\u0159idat klienta "
            ),
            this._getNewForm()
        );
    }
});

/***/ }),

/***/ "./vuc/for-rent-list.js":
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./vuc/for-rent-list.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ../core/_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

var _order = __webpack_require__(/*! ./order.js */ "./vuc/order.js");

var _order2 = _interopRequireDefault(_order);

var _calls = __webpack_require__(/*! calls */ "./calls.js");

var _calls2 = _interopRequireDefault(_calls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "for-rent-list",


  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.RouteMixin, UU5.Common.CallsMixin, UU5.Forms.FormMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: _config2.default.APP + ".ForRentList",
    classNames: {
      main: _config2.default.CSS + "-for-rent-list"
    },
    calls: {
      find: "rentFindCars"
    }
  },

  componentWillMount: function componentWillMount() {
    this.setCalls(_calls2.default);
  },
  _handleLinkClick: function _handleLinkClick(link) {
    this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(_react2.default.createElement(_order2.default, { car: link }));
  },
  _getFilterForm: function _getFilterForm() {
    return _react2.default.createElement(
      UU5.Bricks.Row,
      null,
      _react2.default.createElement(
        UU5.Forms.BasicForm,
        { ref_: this._handleFilterFormReference },
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { required: true, name: "dateFrom", label: "Od", controlled: false, value: "2007-08-21" })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { required: true, name: "dateTo", label: "Do", controlled: false, value: "2007-08-23" })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          null,
          _react2.default.createElement(
            UU5.Forms.Select,
            { name: "type", label: "Typ" },
            _react2.default.createElement(UU5.Forms.Select.Option, { content: "Bez Typu", value: "" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "BULLDOZER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "TRACTOR" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "DREDGING" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "EXCAVATOR" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "RECLAIMER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "SKIDDER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "LOADER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "FORKLIFT" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "DUMP_TRUCK" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "ROAD_ROLLER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "TRACKED_LOADER" })
          )
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-6" },
          _react2.default.createElement(UU5.Bricks.Button, { content: "Filtruj", onClick: this._handleFilterClick }),
          _react2.default.createElement(UU5.Bricks.Button, {
            colorSchema: "warning",
            disabled: !this.state.filtered,
            content: "Zru\u0161 filtr",
            onClick: this._handleCancelFilter
          })
        )
      )
    );
  },
  _handleFilterFormReference: function _handleFilterFormReference(form) {
    this._filterForm = form;
  },
  _handleCancelFilter: function _handleCancelFilter() {
    var _this = this;

    this.setState({
      loadFeedback: "loading",
      filtered: false
    }, function () {
      return _this.reload();
    });
  },
  _handleFilterClick: function _handleFilterClick() {
    var _this2 = this;

    this.setState({
      loadFeedback: "loading"
    }, function () {
      _this2.getCall("find")({
        data: _this2._filterForm.getValues(),
        done: function done(data) {
          _this2.setState({
            dtoOut: data,
            loadFeedback: "ready",
            filtered: true
          });
        },
        fail: function fail(response) {
          return console.error(response);
        }
      });
    });
  },
  _handleLoadedTractors: function _handleLoadedTractors() {
    var _this3 = this;

    if (!this.state.filtered) {
      return null;
    }
    if (!this.state.dtoOut || this.state.dtoOut.length === 0) {
      return _react2.default.createElement(
        UU5.Bricks.P,
        null,
        "Nen\xED tu \u017E\xE1dn\xFD traktor"
      );
    }

    var lines = this.state.dtoOut.map(function (tractor) {
      return _react2.default.createElement(
        UU5.Bricks.Table.Tr,
        { key: tractor.id },
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          tractor.type
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          tractor.vin
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          _react2.default.createElement(UU5.Bricks.DateTime, { format: "dd.mm.Y", value: new Date(tractor.dateOfAcquisition) })
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          tractor.carState
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          _react2.default.createElement(
            UU5.Bricks.Link,
            { href: "/order", onClick: function onClick() {
                return _this3._handleLinkClick(tractor);
              } },
            "objednat"
          )
        )
      );
    });

    return _react2.default.createElement(
      UU5.Bricks.Table,
      { striped: true },
      _react2.default.createElement(
        UU5.Bricks.Table.THead,
        null,
        _react2.default.createElement(
          UU5.Bricks.Table.Tr,
          null,
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "type"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "vin"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "datum po\u0159\xEDzen\xED"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "state"
          )
        )
      ),
      _react2.default.createElement(
        UU5.Bricks.Table.TBody,
        null,
        lines
      )
    );
  },

  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render: function render() {
    return _react2.default.createElement(
      UU5.Bricks.Div,
      null,
      _react2.default.createElement(
        UU5.Bricks.Header,
        { level: 2 },
        "Seznam traktor\u016F (vozidel) k pron\xE1jmu"
      ),
      this._getFilterForm(),
      this._handleLoadedTractors()
    );
  }
  //@@viewOff:render

});

/***/ }),

/***/ "./vuc/order.js":
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./vuc/order.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ../core/_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

var _order = __webpack_require__(/*! ./order.js */ "./vuc/order.js");

var _order2 = _interopRequireDefault(_order);

var _calls = __webpack_require__(/*! calls */ "./calls.js");

var _calls2 = _interopRequireDefault(_calls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "order",


  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.RouteMixin, UU5.Common.CallsMixin, UU5.Forms.FormMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: _config2.default.APP + ".Order",
    classNames: {
      main: _config2.default.CSS + "Order"
    },
    calls: {
      find: "rentFindCars"
    }
  },

  componentWillMount: function componentWillMount() {
    this.setCalls(_calls2.default);
  },
  _getFilterForm: function _getFilterForm() {
    return _react2.default.createElement(
      UU5.Bricks.Row,
      null,
      _react2.default.createElement(
        UU5.Forms.BasicForm,
        { ref_: this._handleFilterFormReference },
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { required: true, name: "dateFrom", label: "Od", controlled: false, value: "2007-08-21" })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { required: true, name: "dateTo", label: "Do", controlled: false, value: "2007-08-23" })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          null,
          _react2.default.createElement(
            UU5.Forms.Select,
            { name: "type", label: "Typ" },
            _react2.default.createElement(UU5.Forms.Select.Option, { content: "Bez Typu", value: "" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "BULLDOZER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "TRACTOR" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "DREDGING" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "EXCAVATOR" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "RECLAIMER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "SKIDDER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "LOADER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "FORKLIFT" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "DUMP_TRUCK" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "ROAD_ROLLER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "TRACKED_LOADER" })
          )
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-6" },
          _react2.default.createElement(UU5.Bricks.Button, { content: "Filtruj", onClick: this._handleFilterClick }),
          _react2.default.createElement(UU5.Bricks.Button, {
            colorSchema: "warning",
            disabled: !this.state.filtered,
            content: "Zru\u0161 filtr",
            onClick: this._handleCancelFilter
          })
        )
      )
    );
  },
  _handleFilterFormReference: function _handleFilterFormReference(form) {
    this._filterForm = form;
  },
  _handleCancelFilter: function _handleCancelFilter() {
    var _this = this;

    this.setState({
      loadFeedback: "loading",
      filtered: false
    }, function () {
      return _this.reload();
    });
  },
  _handleFilterClick: function _handleFilterClick() {
    var _this2 = this;

    this.setState({
      loadFeedback: "loading"
    }, function () {
      _this2.getCall("find")({
        data: _this2._filterForm.getValues(),
        done: function done(data) {
          _this2.setState({
            dtoOut: data,
            loadFeedback: "ready",
            filtered: true
          });
        },
        fail: function fail(response) {
          return console.error(response);
        }
      });
    });
  },
  _handleLoadedTractors: function _handleLoadedTractors() {
    var _this3 = this;

    if (!this.state.filtered) {
      return null;
    }
    if (!this.state.dtoOut || this.state.dtoOut.length === 0) {
      return _react2.default.createElement(
        UU5.Bricks.P,
        null,
        "Nen\xED tu \u017E\xE1dn\xFD traktor"
      );
    }

    var lines = this.state.dtoOut.map(function (tractor) {
      return _react2.default.createElement(
        UU5.Bricks.Table.Tr,
        { key: tractor.id },
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          tractor.type
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          tractor.vin
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          _react2.default.createElement(UU5.Bricks.DateTime, { format: "dd.mm.Y", value: new Date(tractor.dateOfAcquisition) })
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          tractor.carState
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          _react2.default.createElement(
            UU5.Bricks.Link,
            { href: "/tractorDetail", onClick: function onClick() {
                return _this3._handleLinkClick(tractor);
              } },
            "objednat"
          )
        )
      );
    });

    return _react2.default.createElement(
      UU5.Bricks.Table,
      { striped: true },
      _react2.default.createElement(
        UU5.Bricks.Table.THead,
        null,
        _react2.default.createElement(
          UU5.Bricks.Table.Tr,
          null,
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "type"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "vin"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "datum po\u0159\xEDzen\xED"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "state"
          )
        )
      ),
      _react2.default.createElement(
        UU5.Bricks.Table.TBody,
        null,
        lines
      )
    );
  },

  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render: function render() {
    return _react2.default.createElement(
      UU5.Bricks.Div,
      null,
      _react2.default.createElement(
        UU5.Bricks.Header,
        { level: 2 },
        "Seznam traktor\u016F (vozidel) k pron\xE1jmu"
      ),
      this._getFilterForm(),
      this._handleLoadedTractors()
    );
  }
  //@@viewOff:render

});

/***/ }),

/***/ "./vuc/stk-detail.js":
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./vuc/stk-detail.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ../core/_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

var _calls = __webpack_require__(/*! calls */ "./calls.js");

var _calls2 = _interopRequireDefault(_calls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "stk-detail",


  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.RouteMixin, UU5.Common.LoadMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: _config2.default.APP + ".TractorDetail",
    classNames: {
      main: _config2.default.CSS + "-tractor-detail"
    },
    calls: {
      onLoad: "STK"
    }
  },

  componentWillMount: function componentWillMount() {
    this.setCalls(_calls2.default);
  },
  _handleLoadedSTK: function _handleLoadedSTK(STK) {
    if (!STK || STK.length === 0) {
      return _react2.default.createElement(
        UU5.Bricks.P,
        null,
        "Nen\xED tu \u017E\xE1dn\xFD traktor pot\u0159ebn\xE9 na STK"
      );
    }

    var lines = STK.map(function (stk) {
      return _react2.default.createElement(
        UU5.Bricks.Table.Tr,
        { key: stk.id },
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          stk.vin
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          _react2.default.createElement(UU5.Bricks.DateTime, { format: "dd.mm.Y", value: new Date(stk.checkDate) })
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          " ",
          stk.destcription
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          stk.isPass
        )
      );
    });

    return _react2.default.createElement(
      UU5.Bricks.Table,
      { striped: true },
      _react2.default.createElement(
        UU5.Bricks.Table.THead,
        null,
        _react2.default.createElement(
          UU5.Bricks.Table.Tr,
          null,
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "Auto"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "Datum kontroly"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "Popis"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "Pro\u0161el"
          )
        )
      ),
      _react2.default.createElement(
        UU5.Bricks.Table.TBody,
        null,
        lines
      )
    );
  },

  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render: function render() {
    return _react2.default.createElement(
      UU5.Bricks.Div,
      null,
      _react2.default.createElement(
        UU5.Bricks.Header,
        { level: 2 },
        "Seznam STK"
      ),
      _react2.default.createElement(
        UU5.Bricks.Panel,
        { header: "Seznam STK", alwaysExpanded: true, disableHeaderClick: true },
        this.getLoadFeedbackChildren(this._handleLoadedSTK)
      )
    );
  }
  //@@viewOff:render

});

/***/ }),

/***/ "./vuc/tractor-detail.js":
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./vuc/tractor-detail.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ../core/_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

var _calls = __webpack_require__(/*! calls */ "./calls.js");

var _calls2 = _interopRequireDefault(_calls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "tractor-detail",


    //@@viewOn:mixins
    mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.LoadMixin],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: _config2.default.APP + ".TractorDetail",
        classNames: {
            main: _config2.default.CSS + "-tractor-detail"
        }

    },

    componentWillMount: function componentWillMount() {
        this.setCalls(_calls2.default);
    },
    _getLoadDetail: function _getLoadDetail() {

        return _react2.default.createElement(
            UU5.Bricks.Table,
            { striped: true },
            _react2.default.createElement(
                UU5.Bricks.Table.THead,
                null,
                _react2.default.createElement(
                    UU5.Bricks.Table.Tr,
                    null,
                    _react2.default.createElement(
                        UU5.Bricks.Table.Th,
                        null,
                        "typ"
                    ),
                    _react2.default.createElement(
                        UU5.Bricks.Table.Th,
                        null,
                        "vin"
                    ),
                    _react2.default.createElement(
                        UU5.Bricks.Table.Th,
                        null,
                        "datum po\u0159\xEDzen\xED"
                    ),
                    _react2.default.createElement(
                        UU5.Bricks.Table.Th,
                        null,
                        "state"
                    )
                )
            ),
            _react2.default.createElement(
                UU5.Bricks.Table.TBody,
                null,
                _react2.default.createElement(
                    UU5.Bricks.Table.Tr,
                    null,
                    _react2.default.createElement(
                        UU5.Bricks.Table.Td,
                        null,
                        this.props.car.type
                    ),
                    _react2.default.createElement(
                        UU5.Bricks.Table.Td,
                        null,
                        this.props.car.vin
                    ),
                    _react2.default.createElement(
                        UU5.Bricks.Table.Td,
                        null,
                        _react2.default.createElement(UU5.Bricks.DateTime, { format: "dd.mm.Y", value: new Date(this.props.car.dateOfAcquisition) })
                    ),
                    _react2.default.createElement(
                        UU5.Bricks.Table.Td,
                        null,
                        this.props.car.carState
                    )
                )
            )
        );
    },


    //@@viewOn:render
    render: function render() {
        return _react2.default.createElement(
            UU5.Bricks.Div,
            null,
            _react2.default.createElement(
                UU5.Bricks.Header,
                { level: 2 },
                "Detail vozidla"
            ),
            _react2.default.createElement(
                UU5.Bricks.Panel,
                { header: "Detail", alwaysExpanded: true, disableHeaderClick: true },
                this._getLoadDetail()
            )
        );
    }
    //@@viewOff:render

});

/***/ }),

/***/ "./vuc/tractor-list.js":
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./vuc/tractor-list.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ../core/_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

var _tractorDetail = __webpack_require__(/*! ./tractor-detail.js */ "./vuc/tractor-detail.js");

var _tractorDetail2 = _interopRequireDefault(_tractorDetail);

var _calls = __webpack_require__(/*! calls */ "./calls.js");

var _calls2 = _interopRequireDefault(_calls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "tractor-list",


  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.RouteMixin, UU5.Common.LoadMixin, UU5.Common.CcrReaderMixin, UU5.Forms.FormMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: _config2.default.APP + ".TractorList",
    classNames: {
      main: _config2.default.CSS + "-tractor-list"
    },
    calls: {
      onLoad: "cars",
      create: "addCar",
      find: "findCars"
    }
  },
  //@@viewOff:statics

  //@@viewOn:standardComponentLifeCycle
  getInitialState: function getInitialState() {
    return {
      showForm: false,
      filtered: false
    };
  },
  componentWillMount: function componentWillMount() {
    this.setCalls(_calls2.default);
  },

  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:componentSpecificHelpers
  _getNewForm: function _getNewForm() {
    if (!this.state.showForm) {
      return null;
    }

    return _react2.default.createElement(
      UU5.Bricks.Panel,
      { header: "P\u0159id\xE1n\xED nov\xE9ho vozidla", alwaysExpanded: true, disableHeaderClick: true },
      _react2.default.createElement(
        UU5.Forms.BasicForm,
        { ref_: this._handleNewFormReference },
        _react2.default.createElement(UU5.Forms.Text, { required: true, name: "type", value: "RECLAIMER", label: "Typ" }),
        _react2.default.createElement(UU5.Forms.Text, { required: true, name: "vin", value: "AHTBB3QD001726541", label: "VIN" }),
        _react2.default.createElement(UU5.Forms.Text, { required: true, name: "date", value: "1487812893", label: "Datum" }),
        _react2.default.createElement(UU5.Forms.Text, { required: true, name: "price", value: "1100000", label: "Cena" })
      ),
      _react2.default.createElement(
        UU5.Bricks.Button,
        { colorSchema: "warning", onClick: this._handleCancelClick },
        "Zav\u0159\xEDt"
      ),
      _react2.default.createElement(
        UU5.Bricks.Button,
        { colorSchema: "primary", onClick: this._handleCreateNewCar },
        "Ulo\u017Eit"
      )
    );
  },
  _getFilterForm: function _getFilterForm() {
    return _react2.default.createElement(
      UU5.Bricks.Row,
      null,
      _react2.default.createElement(
        UU5.Forms.BasicForm,
        { ref_: this._handleFilterFormReference },
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { name: "acquiredFrom", label: "Od", controlled: false, value: "2007-08-21" })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { name: "acquiredTo", label: "Do", controlled: false, value: "2007-08-23" })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          null,
          _react2.default.createElement(
            UU5.Forms.Select,
            { required: true, name: "type", label: "Typ" },
            _react2.default.createElement(UU5.Forms.Select.Option, { content: "Bez Typu", value: "" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "BULLDOZER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "TRACTOR" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "DREDGING" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "EXCAVATOR" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "RECLAIMER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "SKIDDER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "LOADER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "FORKLIFT" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "DUMP_TRUCK" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "ROAD_ROLLER" }),
            _react2.default.createElement(UU5.Forms.Select.Option, { value: "TRACKED_LOADER" })
          )
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { name: "vin", label: "VIN", controlled: false, value: "" })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-6" },
          _react2.default.createElement(UU5.Bricks.Button, { content: "Filtruj", onClick: this._handleFilterClick }),
          _react2.default.createElement(UU5.Bricks.Button, {
            colorSchema: "warning",
            disabled: !this.state.filtered,
            content: "Zru\u0161 filtr",
            onClick: this._handleCancelFilter
          })
        )
      )
    );
  },
  _getPanelHeader: function _getPanelHeader() {
    var button = !this.state.showForm && _react2.default.createElement(
      UU5.Bricks.Button,
      { size: "xs", onClick: this._handleShowFormClick, className: "pull-right" },
      "P\u0159idat"
    );

    return _react2.default.createElement(
      UU5.Bricks.Div,
      null,
      "Seznam vozidel ",
      button
    );
  },
  _handleNewFormReference: function _handleNewFormReference(form) {
    this._addForm = form;
  },
  _handleFilterFormReference: function _handleFilterFormReference(form) {
    this._filterForm = form;
  },
  _handleLinkClick: function _handleLinkClick(link) {
    this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(_react2.default.createElement(_tractorDetail2.default, { car: link }));
  },
  _handleCreateNewCar: function _handleCreateNewCar() {
    var _this = this;

    if (this._addForm.isValid()) {
      var formData = this._addForm.getValues();

      // hide form and show loading
      this.setState({
        loadFeedback: "loading",
        showForm: false
      }, function () {
        _this.getCall("create")({
          data: formData,
          done: function done() {
            _this.reload();
          },
          fail: function fail(response) {
            return console.error(response);
          }
        });
      });

      // clear up reference
      this._addForm = undefined;
    }
  },
  _handleCancelFilter: function _handleCancelFilter() {
    var _this2 = this;

    this.setState({
      loadFeedback: "loading",
      filtered: false
    }, function () {
      return _this2.reload();
    });
  },
  _handleShowFormClick: function _handleShowFormClick() {
    this.setState({ showForm: true });
  },
  _handleCancelClick: function _handleCancelClick() {
    this.setState({ showForm: false });
  },
  _handleFilterClick: function _handleFilterClick() {
    var _this3 = this;

    this.setState({
      loadFeedback: "loading"
    }, function () {
      _this3.getCall("find")({
        data: _this3._filterForm.getValues(),
        done: function done(data) {
          _this3.setState({
            dtoOut: data,
            loadFeedback: "ready",
            filtered: true
          });
        },
        fail: function fail(response) {
          return console.error(response);
        }
      });
    });
  },
  _handleLoadedTractors: function _handleLoadedTractors(tractors) {
    var _this4 = this;

    if (!tractors || tractors.length === 0) {
      return _react2.default.createElement(
        UU5.Bricks.P,
        null,
        "Nen\xED tu \u017E\xE1dn\xFD traktor"
      );
    }

    var lines = tractors.map(function (tractor) {
      return _react2.default.createElement(
        UU5.Bricks.Table.Tr,
        { key: tractor.id },
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          tractor.type
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          _react2.default.createElement(
            UU5.Bricks.Link,
            { href: "/tractorDetail", onClick: function onClick() {
                return _this4._handleLinkClick(tractor);
              } },
            tractor.vin
          )
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          _react2.default.createElement(UU5.Bricks.DateTime, { format: "dd.mm.Y", value: new Date(tractor.dateOfAcquisition) })
        ),
        _react2.default.createElement(
          UU5.Bricks.Table.Td,
          null,
          tractor.carState
        )
      );
    });

    return _react2.default.createElement(
      UU5.Bricks.Table,
      { striped: true },
      _react2.default.createElement(
        UU5.Bricks.Table.THead,
        null,
        _react2.default.createElement(
          UU5.Bricks.Table.Tr,
          null,
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "type"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "vin"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "datum po\u0159\xEDzen\xED"
          ),
          _react2.default.createElement(
            UU5.Bricks.Table.Th,
            null,
            "state"
          )
        )
      ),
      _react2.default.createElement(
        UU5.Bricks.Table.TBody,
        null,
        lines
      )
    );
  },

  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render: function render() {
    return _react2.default.createElement(
      UU5.Bricks.Div,
      null,
      _react2.default.createElement(
        UU5.Bricks.Header,
        { level: 2 },
        "Seznam traktor\u016F (vozidel)"
      ),
      this._getNewForm(),
      _react2.default.createElement(
        UU5.Bricks.Panel,
        { header: this._getPanelHeader(), alwaysExpanded: true, disableHeaderClick: true },
        this._getFilterForm(),
        this.getLoadFeedbackChildren(this._handleLoadedTractors)
      )
    );
  }
  //@@viewOff:render

});

/***/ }),

/***/ 1:
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************************!*\
  !*** external {"amd":"uu5g04","commonjs":"uu5g04","commonjs2":"uu5g04","root":"uu5g04"} ***!
  \******************************************************************************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 4:
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************************************!*\
  !*** external {"amd":"uu_appg01","commonjs":"uu_appg01","commonjs2":"uu_appg01","root":"uu_appg01"} ***!
  \******************************************************************************************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 5:
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************************************************************!*\
  !*** external {"amd":"uu_appg01_core","commonjs":"uu_appg01_core","commonjs2":"uu_appg01_core","root":"uu_appg01_core"} ***!
  \**************************************************************************************************************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })

})
//# sourceMappingURL=0.011aa330d0b91de95b50.hot-update.js.map