webpackHotUpdate_name_(0,{

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
    mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.RouteMixin, UU5.Common.LoadMixin],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: _config2.default.APP + ".TractorDetail",
        classNames: {
            main: _config2.default.CSS + "-tractor-detail"
        },
        calls: {
            onLoad: "findCars"

        }
    },

    componentWillMount: function componentWillMount() {
        this.setCalls(_calls2.default);
    },
    _handleFilterClick: function _handleFilterClick() {
        var _this = this;

        this.setState({
            loadFeedback: "loading"
        }, function () {
            _this.getCall("find")({
                data: _this._filterForm.getValues(),
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
                        this.props.car.vin
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
                        "aa"
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

    //@@viewOff:componentSpecificHelpers

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
                this._getLoadDetail(),
                this.props.car.vin
            )
        );
    }
    //@@viewOff:render

});

/***/ })

})
//# sourceMappingURL=0.438fea20f0527bc6873e.hot-update.js.map