webpackHotUpdate_name_(0,{

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
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.RouteMixin, UU5.Common.CallsMixin, UU5.Common.CcrReaderMixin, UU5.Forms.FormMixin],
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
  _handleLinkClick: function _handleLinkClick(props) {
    this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(_react2.default.createElement(_order2.default, { car: prosp }));
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
                return _this3._handleLinkClick(_this3.props);
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

/***/ })

})
//# sourceMappingURL=0.ef2aa921c777e79f1da9.hot-update.js.map