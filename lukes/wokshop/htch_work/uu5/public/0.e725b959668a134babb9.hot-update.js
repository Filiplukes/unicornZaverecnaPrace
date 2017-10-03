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
      newLending: "newLending"
    }
  },

  componentWillMount: function componentWillMount() {
    this.setCalls(_calls2.default);
  },
  _getLendingForm: function _getLendingForm() {
    return _react2.default.createElement(
      UU5.Bricks.Row,
      null,
      _react2.default.createElement(
        UU5.Forms.BasicForm,
        { ref_: this._handleLendingFormReference },
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { disabled: true, name: "dateFrom", label: "Od", controlled: false, value: this.props.from })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { disabled: true, name: "dateTo", label: "Do", controlled: false, value: this.props.to })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { disabled: true, name: "car", label: "ID vozidla", controlled: false, value: this.props.car.id })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-4" },
          _react2.default.createElement(UU5.Forms.Text, { required: true, name: "lattitude", label: "zem\u011Bpisn\xE1 \u0161\xED\u0159ka", controlled: false })
        ),
        _react2.default.createElement(
          UU5.Bricks.Column,
          { colWidth: "lg-3" },
          _react2.default.createElement(UU5.Forms.Text, { required: true, name: "longitude", label: "zem\u011Bpisn\xE1 d\xE9lka", controlled: false })
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
          _react2.default.createElement(UU5.Bricks.Button, { content: "Objednej", onClick: this._handleLendingClick })
        )
      )
    );
  },
  handleOrder: function handleOrder() {
    if (!this.state.filtered) {
      return null;
    }
    if (!this.state.dtoOut || this.state.dtoOut.length === 0) {
      return _react2.default.createElement(
        UU5.Bricks.P,
        null,
        "Objedn\xE1no"
      );
    }
  },
  _handleLendingFormReference: function _handleLendingFormReference(form) {
    this._lendingForm = form;
  },
  _handleLendingClick: function _handleLendingClick() {
    var _this = this;

    this.setState({
      loadFeedback: "loading"
    }, function () {
      _this.getCall("newLending")({
        data: _this._lendingForm.getValues(),
        done: function done(data) {
          _this.setState({
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
    return _react2.default.createElement(
      UU5.Bricks.P,
      null,
      "Objedn\xE1no"
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
        "Objedn\xE1vka traktor\u016F (vozidel)"
      ),
      this._getLendingForm(),
      this.handleOrder()
    );
  }
  //@@viewOff:render

});

/***/ })

})
//# sourceMappingURL=0.e725b959668a134babb9.hot-update.js.map