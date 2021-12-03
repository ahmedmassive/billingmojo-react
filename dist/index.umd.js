(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/slicedToArray'), require('react')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/slicedToArray', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-awesome-buttons"] = factory(global._slicedToArray, global.React));
})(this, (function (_slicedToArray, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var MainContext = /*#__PURE__*/React.createContext();
  var useMainContext = function useMainContext() {
    return React.useContext(MainContext);
  };
  var MainContextProvider = function MainContextProvider(_ref) {
    var children = _ref.children,
        workspace = _ref.workspace,
        apikey = _ref.apikey;

    var _useState = React.useState({
      apikey: apikey,
      workspace: workspace,
      valid: false,
      loading: true
    }),
        _useState2 = _slicedToArray__default["default"](_useState, 2),
        state = _useState2[0];
        _useState2[1];

    return /*#__PURE__*/React__default["default"].createElement(MainContext.Provider, {
      value: {
        ctx: state,
        func: {}
      }
    }, children);
  };

  function User() {
    var _ref = useMainContext() ? useMainContext() : {
      ctx: null
    },
        ctx = _ref.ctx;

    return /*#__PURE__*/React__default["default"].createElement("div", null, ctx ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", null, "User Profile"), /*#__PURE__*/React__default["default"].createElement("pre", null, JSON.stringify(ctx))) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, "Context not found/initialized"));
  }

  var returnLibrary = function returnLibrary() {
    return {
      Context: MainContextProvider,
      //Components
      User: User
    };
  };

  var index = returnLibrary();

  return index;

}));
