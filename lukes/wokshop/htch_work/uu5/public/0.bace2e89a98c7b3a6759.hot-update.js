webpackHotUpdate_name_(0,{

/***/ "./vuc/list-stk.js":
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./vuc/list-stk.js ***!
  \*************************/
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
  displayName: "list-stk",


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
      onLoad: "STKcar"
    }
  },

  componentWillMount: function componentWillMount() {
    this.setCalls(_calls2.default);
  },
  getOnLoadData_: function getOnLoadData_() {
    return {
      car: this.props.carId,
      vin: this.props.carVin
    };
  },
  _handleLoadedSTK: function _handleLoadedSTK(STK) {
    if (!STK || STK.length === 0) {
      return _react2.default.createElement(
        UU5.Bricks.P,
        null,
        "Nen\xED tu \u017E\xE1dn\xE9 STK"
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

/***/ })

})
//# sourceMappingURL=0.bace2e89a98c7b3a6759.hot-update.js.map