webpackHotUpdate_name_(0,{

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
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.RouteMixin, UU5.Common.CallsMixin, UU5.Common.CcrReaderMixin, UU5.Forms.FormMixin],
  //@@viewOn:statics
  statics: {
    tagName: _config2.default.APP + ".Order",
    classNames: {
      main: _config2.default.CSS + "Order"
    },
    calls: {
      find: "order"
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
          _react2.default.createElement(UU5.Forms.Text, { disabled: true, name: "dateFrom", label: "Od", controlled: false, value: this.props.car.dateFrom })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { disabled: true, name: "dateTo", label: "Do", controlled: false, value: this.props.car.dateTo })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          null,
          _react2.default.createElement(UU5.Forms.Text, { disabled: true, name: "type", label: "Typ", value: this.props.car.type })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-4" },
          _react2.default.createElement(UU5.Forms.Text, { required: true, name: "lattitude", label: "zem\u011Bpisn\xE1 \u0161\xED\u0159ka", controlled: false })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { required: true, name: "longtitude", label: "zem\u011Bpisn\xE1 d\xE9lka", controlled: false })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { required: true, name: "price", label: "cena", controlled: false })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { required: true, name: "carClient", label: "ID clienta", controlled: false })
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
      this.props.car.type,
      this._getFilterForm()
    );
  }
  //@@viewOff:render

});

/***/ })

})
//# sourceMappingURL=0.14fed3fa2ba2e10a6128.hot-update.js.map